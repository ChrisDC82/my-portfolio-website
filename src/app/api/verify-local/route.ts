import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST(request: NextRequest) {
  try {
    // Get the Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid Authorization header' },
        { status: 401 }
      );
    }

    // Extract the Firebase ID token
    const idToken = authHeader.split('Bearer ')[1];

    // Verify the Firebase ID token
    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(idToken);
    } catch (error: unknown) {
      console.error('Error verifying Firebase token:', error);
      return NextResponse.json(
        { error: 'Invalid Firebase token' },
        { status: 401 }
      );
    }

    // Get the request body
    const body = await request.json();
    const { userId, verificationCode } = body;

    // Validate required fields
    if (!userId || !verificationCode) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and verificationCode' },
        { status: 400 }
      );
    }

    // Create the payload for the external API
    const payload = {
      userId,
      verificationCode,
      timestamp: new Date().toISOString()
    };

    // Make the POST request to the external API
    const externalApiResponse = await fetch('https://pitch-rise.vercel.app/api/verify-local-site', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}` // Pass the Firebase ID token
      },
      body: JSON.stringify(payload)
    });

    // Check if the external API request was successful
    if (!externalApiResponse.ok) {
      const errorText = await externalApiResponse.text();
      console.error('External API error:', errorText);
      return NextResponse.json(
        { error: 'External API request failed', details: errorText },
        { status: externalApiResponse.status }
      );
    }

    // Get the response from the external API
    const externalApiData = await externalApiResponse.json();

    // Return the response from the external API
    return NextResponse.json({
      success: true,
      data: externalApiData,
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email
      }
    });

  } catch (error: unknown) {
    console.error('Error in verify-local API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}




