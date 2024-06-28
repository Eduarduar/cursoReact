import { Filters } from './Filters.jsx';

export function Header () {
    return (
        <header className='flex flex-col gap-4'>
            <h1 className='text-white w-full text-center text-4xl font-bold'> React Shop </h1>
            <Filters />
        </header>
    )
}
