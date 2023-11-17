import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";

export interface laureates {
  id: string;
  firstname: string;
  surname: string;
  motivation: string;
  share: string;
}

export interface Prize {
  year: string
  category: string;
  laureates: laureates[];
}
const useData = () => {
  const [data, setData] = useState<Prize[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // https://cors-anywhere.herokuapp.com/https://api.nobelprize.org/v1/prize.json
    axios
      .get("https://api.nobelprize.org/v1/prize.json", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },

      })
      .then((res) => setData(res.data.prizes))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  return { data, error };
};

export default useData;
