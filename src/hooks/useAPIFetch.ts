'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPIFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const tokenResponse = await fetch('/api/token');
        const { token } = await tokenResponse.json();

        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        };

        console.log(headers);

        const requestOptions = {
          method: 'GET',
          headers: headers,
        };

        const req = await fetch(url, requestOptions)

        const data = await req.json();

        
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAPIFetch;