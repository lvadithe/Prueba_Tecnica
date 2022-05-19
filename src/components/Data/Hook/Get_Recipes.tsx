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
        axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=365006ec435e4b8fa9de41e33c3fe3a2&number=4&addRecipeInformation=true")
            .then(res => {
                setRecipes({
                    data: res.data.results,
                    loading: false,
                });
            });
    }, []);
    
    return data;
}