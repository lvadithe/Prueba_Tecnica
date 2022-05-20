import axios from "axios";
import { useEffect, useState } from "react";

interface Context {
    data: any;
    loading: boolean;
}

export const useGetRecipes = () => {
    const [data, setRecipes] = useState<Context> ({    
        data: [],
        loading: true,
    });
    useEffect(() => {
        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=866b5b6e90614cdcb597cf6d92717f4a&number=8&addRecipeInformation=true")
            .then(res => {
                setRecipes({
                    data: res.data.results,
                    loading: false,
                });
            });
    }, []);
    
    return data;
}