const useAsyncFetch = () => {

  const getData = async (url: string) => {
    try {

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AGENDAEDU_BEARER_TOKEN}`,
      };

      const requestOptions: any = {
        method: 'GET',
        headers: headers,
        cache: 'no-store'
      };

      const req = await fetch(url, requestOptions)

      const data = await req.json();

      return data;


    } catch (error) {

    }
  };


  const updateData = async (url: string, dataToUpdate: any) => {
    try {
    
      const tokenResponse = await fetch('/api/token');
      const { token } = await tokenResponse.json();

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };

      const requestOptions: any = {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(dataToUpdate),
      };

      const req = await fetch(url, requestOptions)

      const data = await req.json();

      return data;

    } catch (error) {

    }
  };

  const createData = async (url: string, dataToCreate: any) => {
    try {
      
      
      const tokenResponse = await fetch('/api/token');
      const { token } = await tokenResponse.json();

      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };

      const requestOptions: any = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(dataToCreate),
      };

      const req = await fetch(url, requestOptions)

      const data = await req.json();

      return data;

    } catch (error) {

    }
  };

  return { getData, updateData, createData };
};

export default useAsyncFetch;