import mascotas from '../../src/assets/mascotas.png';

function Header(){

    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Mascotas {''} 
            <span className="text-indigo-500">Veterinaria</span> 
            <img className="md:w-1/3 mx-auto" src={mascotas} width="80"/> 
            </h1>
        </>
    )
}

export default Header;