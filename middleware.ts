import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log("middleware supabase error");
    console.log(error);
  }

  return { user, response, supabase };
}

export async function middleware(request: NextRequest) {
  const { user, response } = await updateSession(request);

  // Check if the path starts with /admin/
  if (request.nextUrl.pathname.startsWith("/admin/")) {
    if (!user) {
      // Redirect to login or home if not authenticated
      return NextResponse.redirect(new URL("/login", request.url)); // Adjust '/login' to your login route
    }
  }

  return response;
}

// Matcher to run only on /admin/* paths
export const config = {
  matcher: "/admin/:path*",
};
