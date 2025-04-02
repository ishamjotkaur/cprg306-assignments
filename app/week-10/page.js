'use client';

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
  
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

return(
    <div className="items-center justify-center min-h-screen p-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
    {user ? (
      <div>
        <p className="mb-4">Welcome, {user.displayName} ({user.email})</p>
        <button
          onClick={firebaseSignOut}
          className="bg-green-700 text-white px-4 py-2 rounded mb-4"
        >
          Logout
        </button>
        <br />
        <Link href="/week-10/shopping-list" className="text-blue-600 font-bold ">
          Go to Shopping List
        </Link>
      </div>
    ) : (
      <button
        onClick={gitHubSignIn}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login with GitHub
      </button>
    )}
  </div>
);
}


