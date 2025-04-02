import React  from 'react'
// Adjust the path to your AuthContext

 // Adjust the path to your Auth function
 // Adjust the path to your Auth function
export default async function page(
  {params}
) {
 
  const { id } = await params;
  
  /* providing accessToken in bearer */
  const res = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': id /* YOUR_ACCESS_TOKEN_HERE */, // Pass JWT via Authorization header
    }, 
     // Include cookies (e.g., accessToken) in the request
  });
  
  const user=await res.json();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">User Dashboard</h1>
        <p className="text-center text-gray-600 mb-6">Welcome to your personalized dashboard!</p>
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Username:</span> {user.username}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Access Token:</span> {user.accessToken || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}
