import React, { useState } from "react";
import { getCountriesUrl } from "./constant";
import axios from "axios";

const SEARCH_DEBOUNCE_DELAY = 500;

type CountriesResponse = {
  countries: string[];
};

const CountriesListWithDebounce = () => {
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [countries, setCountries] = useState<string[]>([]);

  return (
    <div>
      <p>CountriesListWithDebounce</p>
      <input type="text" onChange={onChange} className="my-4" />
      {countries.map((countryItem) => (
        <p key={countryItem}>{countryItem}</p>
      ))}
    </div>
  );

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      getCountries(event.target.value);
    }, SEARCH_DEBOUNCE_DELAY);
    setTimeoutId(id);
  }

  async function getCountries(countryName: string) {
    const { countries } = (
      await axios.get<CountriesResponse>(getCountriesUrl(countryName))
    ).data;
    setCountries(countries);
  }
};

export default CountriesListWithDebounce;
