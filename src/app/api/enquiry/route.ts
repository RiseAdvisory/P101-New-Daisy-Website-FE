import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_ENQUIRY_API_URL =
  'https://app.trythedaisy.com/api/v1/vendor/demo/enquiry';

function getPrimaryApiUrl() {
  return process.env.DAISY_ENQUIRY_API_URL || DEFAULT_ENQUIRY_API_URL;
}

function getWebhookUrl() {
  return process.env.LEAD_CAPTURE_WEBHOOK_URL;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const hasName =
      typeof body.name === 'string' ||
      typeof body.firstname === 'string' ||
      typeof body.lastname === 'string';

    if (!email || !hasName) {
      return NextResponse.json(
        { error: 'Missing required lead fields' },
        { status: 400 },
      );
    }

    const [primaryResponse] = await Promise.all([
      fetch(getPrimaryApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }),
      getWebhookUrl()
        ? fetch(getWebhookUrl() as string, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }).catch(() => null)
        : Promise.resolve(null),
    ]);

    if (!primaryResponse.ok) {
      const errorText = await primaryResponse.text().catch(() => '');
      return NextResponse.json(
        {
          error: 'Lead submission failed',
          details: errorText || undefined,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: 'Lead submitted successfully' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
