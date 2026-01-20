export default function LoginPage() {
  const signIn = async () => {
    "use server";

    // create a new Supabase client
  };
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Login Page</h1>
        <p>Welcome to the Login page!</p>
        <form action={signIn} className="mt-4">
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              className="ml-2 p-1 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Password:
            <input
              type="password"
              name="password"
              className="ml-2 p-1 border border-gray-300 rounded"
              required
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
