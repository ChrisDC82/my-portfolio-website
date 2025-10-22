'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const VerifyLocalTest = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log('Signed in:', userCredential.user);
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Sign in failed: ' + (error as Error).message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setResult(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleVerifyLocal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in first');
      return;
    }

    setLoading(true);
    try {
      // Get the Firebase ID token
      const idToken = await user.getIdToken();
      
      const response = await fetch('/api/verify-local', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          verificationCode,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('API call error:', error);
      setResult({ error: 'API call failed: ' + (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Verify Local API Test</h2>
      
      {!user ? (
        <form onSubmit={handleSignIn} className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold">Sign In to Test</h3>
          <div>
            <label className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      ) : (
        <div className="mb-6">
          <p className="text-green-600 mb-2">Signed in as: {user.email}</p>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}

      {user && (
        <form onSubmit={handleVerifyLocal} className="space-y-4">
          <h3 className="text-lg font-semibold">Test Verify Local API</h3>
          <div>
            <label className="block text-sm font-medium mb-2">User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter user ID"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Verification Code:</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter verification code"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? 'Testing...' : 'Test API'}
          </button>
        </form>
      )}

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">API Response:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default VerifyLocalTest;


