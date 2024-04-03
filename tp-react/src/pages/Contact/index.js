import Card from "../../components/Card";
import Logo from "../../assets/LogoTHUYlg.png";
import { Content } from "../../components/Content";
import './index.css';
import { Hours } from '../../components/Hours'
const Contact = () => {
    return (
        <div>
            <Card.BannerSM Logo={Logo} />
        
            <div className="contact-info">
                <div className="contact-number">
                    <h2>Contactez-nous</h2>
                    <hr />
                    <p>Numéro de telephone : 06.36.87.13</p>
                </div>
                <div className="contact-hours">
                    <h2>Horaires</h2>
                    <hr />
                    <Hours 
                    Days="Lundi"
                    Hours="10:00-22:00"/>
                     <Hours 
                    Days="Mardi"
                    Hours="10:00-22:00"/>
                     <Hours 
                    Days="Mercredi"
                    Hours="10:00-22:00"/>
                     <Hours 
                    Days="Jeudi"
                    Hours="10:00-22:00"/>
                     <Hours 
                    Days="Vendredi"
                    Hours="10:00-22:00"/>
                     <Hours 
                    Days="samedi"
                    Hours="10:00-22:00"/>
                     <Hours 
                    Days="Dimanche"
                    Hours="10:00-22:00"/>

                    
                </div>
            </div>
        </div>
    );
};

export default Contact;

