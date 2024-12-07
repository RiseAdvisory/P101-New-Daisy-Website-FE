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
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    // You can return a default value or throw the error to handle it in the component
    return null;
  }
};
