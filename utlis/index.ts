import { ICar, IFilters } from "@/types";
import { useRouter } from "next/navigation";
import { type } from "os";

export const fetchCars = async (filters: IFilters) => {
  const headers = {
    "X-RapidAPI-Key": "ea628857edmshbffc0362282a914p1e0829jsna5bbc0935af5",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const { manufacturer, model, fuel, limit, year } = filters;

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  return await response.json();
};

export const generateCarImageUrl = (car: ICar, angle?: string) => {
  const apiKey = "hrjavascript-mastery";
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  url.searchParams.append("customer", apiKey);
  url.searchParams.append("make", make);
  url.searchParams.append("modeFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullScreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  console.log(url);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
