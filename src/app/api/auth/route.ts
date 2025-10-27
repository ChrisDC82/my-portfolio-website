// src/app/api/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../verify-local/firebaseConfig'; // Import the already initialized auth instance

// POST: Sign in with email and password
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return NextResponse.json({ message: 'Login successful', uid: user.uid });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// GET: Test endpoint
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Firebase Auth API route is working!' });
}
