export const getData = async () => {
  try {
    const res = await fetch('https://devapp.trythedaisy.com/api/v1/countries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData: any = await res.json();

    if (!responseData.status) throw new Error('No data found');

    return responseData.data.countries;
  } catch {
    // Error fetching country codes
    return null;
  }
};
