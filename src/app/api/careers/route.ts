import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const cv = formData.get('cv') as File | null;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // TODO: Forward to email service, webhook, or Laravel backend
    // For now, log the submission and return success
    console.log('Career application received:', {
      firstName,
      lastName,
      email,
      cvFileName: cv?.name,
      cvSize: cv?.size,
    });

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 },
    );
  }
}
