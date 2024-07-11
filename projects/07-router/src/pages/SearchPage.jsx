export default function SearchPage ({ routeParams }) {
    return (
      <>
        <h1 className='text-white text-center w-full font-bold text-2xl'>Search to {routeParams.query}</h1>
      </>
    )
}