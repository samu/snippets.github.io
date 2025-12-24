import { createContext, useContext } from "react";
import { HTMLElementDimensions } from "./useDimensions";

export const PageDimensionsContext =
  createContext<HTMLElementDimensions | null>(null);

export function usePageDimensions() {
  return useContext(PageDimensionsContext);
}
