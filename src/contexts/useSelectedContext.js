import { useContext } from "react";
import { SelectedContext } from "./SelectedContext";

export const useSelected = () => {
  return useContext(SelectedContext);
};
