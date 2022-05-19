import { createContext } from "react";
import { useGetRecipes } from "../Hook/Get_Recipes";

// esta funcion es la que se encarga de crear el contexto el null es el valor inicial
export const DataContext = createContext(useGetRecipes);