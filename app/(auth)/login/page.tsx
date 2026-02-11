import React from "react";
import Header from "@/components/layout/Header";
import { LoginForm } from "@/components/loginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Header />
      <div className="w-full max-w-md rounded-lg p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
