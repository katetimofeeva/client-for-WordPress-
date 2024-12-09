"use client";
import { useState, useEffect } from "react";

const useGetData = <T,>(url: string): [T | [], boolean] => {
  const [data, setData] = useState<T | []>([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        setLoading(false);
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [url]);

  return [data, Loading];
};

export default useGetData;
