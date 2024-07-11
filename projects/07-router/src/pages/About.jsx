import { Link } from '../components/Link.jsx'
export default function About () {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">   
                <h1 className="bg-white text-center w-full" >Este es el about de mi pagina</h1>
                <Link className="bg-amber-600 text-white font-bold text-center w-fit p-2 rounded-lg" to="/" >Ir a la pagina inicial</Link>
                <img src="https://cdn.pixabay.com/photo/2014/06/03/19/38/test-361512_640.jpg" alt="testImage" />
            </div>
        </>
    )
}