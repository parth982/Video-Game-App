export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


// For Dynamic Genres List Rendering
import useData from "../hooks/useData";
// const useGenres = () => { return useData<Genre>('/genres'); };

// For Static Genres List Rendering [Static Data Retrieved ]
import genres from "../data/genres";
const useGenres = () => ({ data: genres, isLoading: false, error: null })


export default useGenres;