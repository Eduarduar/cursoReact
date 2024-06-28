import { Category } from "./filters/Category";
import { Name } from "./filters/Name";
import { Price } from "./filters/Price";

export function Filters () {
    return (
        <div className='container flex flex-col md:flex-row p-4 mx-auto gap-2 w-full'>
            <Name />
            <Category />
            <Price />
        </div>
    )
}