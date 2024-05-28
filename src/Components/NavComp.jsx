import {Link} from 'react-router-dom';

const NavComp = () =>{

    return(
        <>
           <nav className="w-[100vw] h-[10vh] bg-gray-800 text-white flex justify-center items-center">
            <ul className="h-[10vh] w-[50%] flex justify-center items-center gap-32">
                <Link to="/" className="hover:bg-white hover:text-gray-600 p-2 rounded-md cursor-pointer">Home</Link>
                <Link to="/movies" className="hover:bg-white hover:text-gray-600 p-2 rounded-md cursor-pointer">Movies</Link>
                <Link to="/about" className="hover:bg-white hover:text-gray-600 p-2 rounded-md cursor-pointer">About</Link>
                <Link to="/api" className="hover:bg-white hover:text-gray-700 p-2 rounded-md cursor-pointer">API</Link>
                <Link to="/api2" className="hover:bg-white hover:text-gray-700 p-2 rounded-md cursor-pointer">API 2</Link>
 
            </ul>
           </nav>
        </>
    );
} 

export default NavComp;