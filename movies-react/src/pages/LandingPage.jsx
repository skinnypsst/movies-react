import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebonce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){

    const query = useQuery();
    const search = query.get("search");
    const deBounceSearch = useDebounce(search, 500);
    return (
        <div>
            <Search/>
            <MoviesGrid key={deBounceSearch} search={deBounceSearch}/>
        </div>
    )
}