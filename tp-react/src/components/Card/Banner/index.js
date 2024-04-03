import './index.css';
import { Button } from './../../Button';
export const Banner = ( { Logo }) => {

    function Deliveroo(){

        window.location.href = 'https://deliveroo.fr/fr/menu/paris/Passerelle/thuy';

    }

    return(

        


        <div className='Banner'>


            <img className="bannerImglg" src={Logo} alt='logo'></img>

            <div className='btn-container'>

                <Button Label="Commander en ligne" onClick={Deliveroo}/>

            </div>



        </div>

    )



}