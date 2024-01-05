import { useContext } from "react";
import { BrandsContext } from "./BrandsContext";

export const useBrands = () => {
  return useContext(BrandsContext);
};
