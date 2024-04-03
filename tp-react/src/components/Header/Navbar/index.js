import './index.css'
import { Link } from "react-router-dom";
export const Navbar = () => {


    return(

        <nav>
            <ul className='liste'>
                <li ><Link className='sous-liste' to="/">Menu</Link><ul><li>Sandwitchs</li><li>Entrées</li><li>Hamburgers</li><li>Plats</li><li>Boissons</li></ul></li>
                <li ><Link className='sous-liste' to="/contact">Contact</Link></li>
                <li ><Link className='sous-liste' to="/mentions">Mentions</Link></li>
            </ul>



        </nav>



    )




}