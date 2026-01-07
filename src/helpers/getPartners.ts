export const getData = async () => {
  try {
    const res = await fetch('https://app.trythedaisy.com/api/v1/vendors', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData: any = await res.json();

    if (!responseData.status) throw new Error('No data found');

    return responseData.data.vendors;
  } catch {
    // Error fetching partners data
    return null;
  }
};

// Fisher-Yates shuffle algorithm for unbiased random selection
export const getRandomElements = (array: any[] = [], count: number) => {
  if (!array || array.length === 0) return [];

  // Create a copy to avoid mutating the original array
  const shuffled = [...array];

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
};
