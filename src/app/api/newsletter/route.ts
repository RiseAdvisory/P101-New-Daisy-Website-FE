import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { signUpEmail } = body;

    if (!signUpEmail) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 },
      );
    }

    // Log the newsletter signup
    console.log('Newsletter signup:', signUpEmail);

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
