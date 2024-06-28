import { useCategoryFilter } from "../../hooks/useCategoryFilter";
import { useFilter } from "../../hooks/useFilter";

export function Category() {
    const { category, handleCategory } = useCategoryFilter();
    const { setFilters } = useFilter();
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 bg-slate-900 p-4 rounded-lg gap-3">
            <h2 className="text-white font-bold text-xl">Category</h2>
            <select
                id="category"
                className="w-full p-2 rounded-lg bg-slate-800 text-white"
                name="category"
                onChange={(e) => handleCategory(e, setFilters)}
                value={category}
            >
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Smartphones</option>
                <option value="home-decoration">Home decoration</option>
            </select>
        </div>
    );
}