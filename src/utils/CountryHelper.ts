/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
export const CountryHelper = () => {
  const [countries, setCountries] = useState<{ value: string; label: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        
        // Processing the countries data
        const countryOptions = data.map((country: any) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        
        // Set countries to state
        setCountries(countryOptions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); 

  return { countries, loading };
};