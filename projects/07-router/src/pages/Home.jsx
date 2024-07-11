import { Link } from '../components/Link.jsx'

export default function Home () {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">   
                <h1 className="bg-white text-center w-full" >Este es un ejemplo de un React router</h1>
                <Link className=" bg-amber-600 text-white font-bold rounded-lg text-center w-fit p-2" to="/About">Ir al about</Link>
            </div>
        </>
    )
}