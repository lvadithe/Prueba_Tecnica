import { useGetRecipes } from "../Hook/Get_Recipes";
import { DataContext } from "./DataContext";

interface props {
    children: React.ReactNode;
}

export const DataContextProvider = ({ children }: props) => {
    const { data } = useGetRecipes();

    return (
        <DataContext.Provider value={data} >
            { children }
        </DataContext.Provider>
    )
}