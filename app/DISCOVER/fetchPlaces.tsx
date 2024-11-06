// fetchPlaces.ts
const fetchPlaces = async (
  lng: number,
  lat: number,
  placeCategories: string,
  language: string,
  proximitySearch: number,
  limitOfRequestedPlaces: number
) => {
  const requestOptions = {
    method: 'GET',
  };

  try {
    const response = await fetch(
      `https://api.geoapify.com/v2/places?categories=${placeCategories}&filter=circle:${lng},${lat},${proximitySearch}&bias=proximity:${lng},${lat}&limit=${limitOfRequestedPlaces}&lang=${language}&apiKey=c2f9e314313147fb973f918570b0bf3b`,
      requestOptions
    );

    if (!response.ok) {
      console.log('Failed to fetch data');
      return { error: 'Failed to fetch data' };
    }

    const result = await response.json();
    console.log('Successfully fetched data', result, "long: ", lng, "lat: ", lat);

    if (result.features && result.features.length > 0) {
      return { data: result.features };
    } else {
      console.log("No places found in response.");
      return { data: [] };
    }
  } catch (error) {
    console.error('Error fetching places:', error);
    return { error: 'Error fetching places.' };
  }
};

export default fetchPlaces;
