import { useFilter } from "../../hooks/useFilter";
import { useNameFilter } from "../../hooks/useNameFilter";

export function Name() {
    const { name, handleName } = useNameFilter();
    const { setFilters } = useFilter();
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 bg-slate-900 p-4 rounded-lg gap-3">
            <h2 className="text-white font-bold text-xl">Name</h2>
            <input
                type="text"
                className="w-full p-2 rounded-lg bg-slate-800 text-white"
                id="name"
                onChange={(e) => handleName(e, setFilters)}
                value={name}
            />
        </div>
    );
}
