import Card from "../../components/Card";
import Logo from "../../assets/LogoTHUYlg.png"; 
import { Content } from "../../components/Content";
import'./index.css';
const Mentions = () => {
    return (      
        <div>
            <Card.BannerSM Logo={Logo} />
            <Content title = "Mention légal"/>
            
            <div className="test">
            
                <p >THUY - Street Food Vietnamienne</p>
                <p > 31 Rue de Reuilly, 75012 Paris  </p>
                <p >75012 Paris</p>
            </div>
        </div>
    );
};

export default Mentions;