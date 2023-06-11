import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  textStyles?: string,
  rightIcon?: string,
  isDisabled?: boolean
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number,
}

export interface FilterProps {
  manufacturer: string,
  model: string,
  year:string,
  fuel:string,
  limit: string
}
export interface CustomFilterProps{
  title:string;
  options: {
    title: string;
    value: string;
}[];
}