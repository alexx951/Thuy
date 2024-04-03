import { Plat } from './Plat';
import { Banner } from './Banner';
import { BannerSM } from './BannerSM';

const Card = ({ children }) => {

    return(

        <div>

            {children}

        </div>


    ) 

    

}

Card.Plat = Plat 
Card.Banner = Banner;
Card.BannerSM = BannerSM;
export default Card;