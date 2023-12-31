import { MouseEventHandler } from "react";

export interface ICustomButton {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisable?: boolean;
}

export interface IManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: number;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICarCard {
  car: ICar;
}

export interface ICarDetails {
  car: ICar;
  closeModal: () => void;
  isOpen: boolean;
}

export interface IFilters {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface IFilterOptions {
  title: string;
  value: string;
}

export interface ICustomFilter {
  title: string;
  options: IFilterOptions[];
}

export interface IShowMoreCars {
  pageNumber: number;
  isNext: boolean;
}
