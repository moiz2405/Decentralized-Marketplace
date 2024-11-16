// /app/user/page.js
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function UserDashboardPage() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (session?.user) {
      // Fetch additional user-related data if needed (e.g., from an API or database)
      setUserData(session.user);
    }
  }, [session]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>You need to sign in first.</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      {userData ? (
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <img
              src={userData.image || '/default-avatar.png'}
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-xl font-semibold">{userData.name}</p>
              <p className="text-gray-500">{userData.email}</p>
              <p className="text-gray-400">{userData.id}</p>
            </div>
          </div>
          {/* Add any other user-specific content here */}
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </main>
  );
}
