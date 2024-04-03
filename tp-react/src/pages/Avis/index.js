import Card from "../../components/Card";
import { Content } from "../../components/Content"
import Logo from "../../assets/LogoTHUYlg.png";
const Avis = () => {
    return (
        <div>
            <Card.BannerSM Logo={Logo} />
            <Content title="Avis Récents" textcontent="Lorem Ipsum" />
        </div>
    );
}

export default Avis;