import Card from "../../components/Card";
import image from "../../assets/nems.png";
import image1 from "../../assets/nemsCrevettes.png";
import image2 from "../../assets/croquette.png";
import image3 from "../../assets/crevettes.p.png";
import image4 from "../../assets/boeuf.citron.png";
import image5 from "../../assets/poulet.citron.png";
import image6 from "../../assets/vietnam.png";
import image7 from "../../assets/tofu.png";
import image8 from "../../assets/h.boeuf.png";
import image9 from "../../assets/h.tofu.png";
import image10 from "../../assets/h.poulet.png";
import image11 from "../../assets/h.crevette.png";
import image12 from "../../assets/bo.tofu.png";
import image13 from "../../assets/bo.boeuf.png";
import image14 from "../../assets/bo.crevette.png";
import image15 from "../../assets/bo.poulet.png";
import image16 from "../../assets/coca.png";
import image17 from "../../assets/coca.zero.png";
import image18 from "../../assets/orangina.png";
import image19 from "../../assets/tropical.png";
import Logo from "../../assets/LogoTHUYlg.png";

import './index.css'
const Home = () => {
  return (
    <div>
      <Card.Banner Logo={Logo}/>
      <div className="Menu">
        <h1>À la carte</h1>
       <div className="Plat">
        <h4> Entrée</h4>
        <div className="Entrée">
         
          <Card.Plat
            Title="Nems au Poulet"
            Content="4 délicieux pâtés impériaux croustillants au poulet, carottes, champignons noirs et vermicelles de riz, accompagnés de leur sauce Nuoc-Mam, de salade verte et de menthe fraîche !"
            Img={image}
            Prix="5.90"
          />
          <Card.Plat
            Title="Nems aux Crevettes"
            Content="4 délicieux pâtés impériaux croustillants aux crevettes !Les nems sont frits pour le croustillant et servis avec une sauce Nuoc-Mam, de la salade verte et de la menthe fraîche ! Servis par 4 !"
            Img={image1}
            Prix="6.00"
          />
          <Card.Plat
            Title="5 Croquettes de Poulet"
            Content="5 Délicieuses croquettes de poulet, accompagnées de belles feuilles de salade et de la menthe fraîche, Plat servi avec une sauce Nuoc-Mam."
            Img={image2}
            Prix="5.90"
          />
          <Card.Plat
            Title="4 Crevettes panées"
            Content="4 belles crevettes panées, servies avec des feuilles de salade fraîche, de la menthe et une sauce Nuoc-Mam."
            Img={image3}
            Prix="6.90"
          />
        </div>
        <h4>Sandwiches</h4>
        <div className="Sandwitch">
         
          <Card.Plat
            Title="Sandwich Banh Mi au Boeuf Citronnelle"
            Content="Une bonne baguette de pain boulanger, de la mayonnaise, du boeuf sauté aux oignons et citronnelle, des rondelles de concombre, des carottes râpées et de la coriandre fraîche, un régal"
            Img={image4}
            Prix="6.50"
          />
          <Card.Plat
            Title="Sandwich Banh Mi au Poulet Citronnelle"
            Content="Une bonne baguette de pain boulanger, de la mayonnaise, du poulet, des oignons frits, de la citronnelle, des rondelles de concombre, des carottes râpées et de la coriandre fraîche, un délice"
            Img={image5}
            Prix="6.00"
          />
          <Card.Plat
            Title="Sandwich Banh Mi Spécial Vietnam"
            Content="Une bonne baguette de pain boulanger, de la mayonnaise, du porc rôti et du pâté vietnamien de porc, des rondelles de concombre, des carottes râpées et de la coriandre fraîche, l'original du Vietnam !"
            Img={image6}
            Prix="6.00"
          />
          <Card.Plat
            Title="Sandwich Banh Mi au Tofu"
            Content="Une bonne baguette de pain boulanger, de la mayonnaise, de belles lamelles de Tofu frit, des rondelles de concombre, des carottes râpées et de la coriandre fraîche, un régal"
            Img={image7}
            Prix="6.00"
          />
        </div>
        <h4>Hamburgers</h4>
        <div className="Hamburgers">

        <Card.Plat
            Title="Hamburger au boeuf"
            Content="Un bon pain bun, de la mayonnaise, du boeuf et de la citronnelle, des rondelles de concombre, des carottes râpées, de la coriandre fraîche, et des oignons frits, avec un Ketchup revisité fait maison."
            Img={image8}
            Prix="6.50"
          />
          <Card.Plat
            Title="Hamburger au Poulet"
            Content="Un bon pain bun, de la mayonnaise, du poulet et de la citronnelle, des rondelles de concombre, des carottes râpées, de la coriandre fraîche, et des oignons frits, avec un Ketchup revisité fait maison."
            Img={image10}
            Prix="6.00"
          />
          <Card.Plat
            Title="Hamburger au Tofu"
            Content="Un bon pain bun, de la mayonnaise, de belles lamelles de Tofu frit, des rondelles de concombre, des carottes râpées, de la coriandre fraîche, et des oignons frits, avec un Ketchup revisité fait maison."
            Img={image9}
            Prix="6.00"
          />
          <Card.Plat
            Title="Hamburger aux Crevettes"
            Content="Un bon pain bun, de la mayonnaise, de belles crevettes panées, des rondelles de concombre, des carottes râpées, de la coriandre fraîche, et des oignons frits, avec un Ketchup revisité fait maison."
            Img={image11}
            Prix="7.00"
          />



        </div>
        <h4>Plat Principaux</h4>
        <div className="BoBun">

        <Card.Plat
            Title="Bo Bun au Boeuf"
            Content="Délicieuses pièces de boeuf marinées à la citronnelle, sautées aux oignons, sur lit de vermicelles de riz, avec salade verte, coriandre, rondelles de concombre, pousses de soja, carottes râpées, menthe
            fraiche, cacahuètes concassées et oignons frits .
            Plat servi avec des nems maison au poulet."
            Img={image13}
            Prix="13.90"
          />
          <Card.Plat
            Title="Bo Bun au Poulet"
            Content="Tendres tranches de haut de cuisse de poulet marinées à la citronnelle, sur lit de vermicelles de riz, avec salade verte, coriandre, rondelles de concombre, pousses de soja, carottes râpées, menthe fraiche, cacahuètes concassées et oignons frits.
            Plat servi avec des nems maison au poulet."
            Img={image15}
            Prix="12.90"
          />
          <Card.Plat
            Title="Bo-Bun au Tofu"
            Content="De belles lamelles de Tofu frit sur lit de vermicelles de riz, avec salade, coriandre, rondelles de concombre, pousses de soja, carottes râpées et menthe fraiche, cacahuètes concassées et oignons frits .
            Plat servi avec des nems végétariens."
            Img={image12}
            Prix="12.90"
          />
          <Card.Plat
            Title="Bo Bun aux Crevettes"
            Content="Belles crevettes roses décortiquées sautées aux oignons, sur lit de vermicelles de riz, avec salade, coriandre, rondelles de concombre, pousses de soja, carottes râpées et menthe fraiche, cacahuètes concassées et oignons frits .
            Plat servi avec des nems végétariens."
            Img={image14}
            Prix="14.90"
          />



        </div>
        <h4>Boissons</h4>
        <div className="Boissons">

        <Card.Plat
            Title="Coca-cola 33 cl"
            Content="Coca‑Cola goût original c’est la boisson rafraîchissante au goût unique par excellence."
            Img={image16}
            Prix="2.50"
          />
          <Card.Plat
            Title="Coca Cola Sans Sucres 33cl"
            Content="Avec une recette encore plus rafraîchissante, Coca‑Cola sans sucres a tout pour séduire… On vous encourage à le goûter pour vous faire votre propre avis !"
            Img={image17}
            Prix="2.50"
          />
          <Card.Plat
            Title="Tropico l'Original 33 cl"
            Content="Tropico l'Original est une boisson rafraîchissante aux fruits et à l'eau de source, aromatisée Orange - Ananas et sans bulles."
            Img={image19}
            Prix="2.50"
          />
          <Card.Plat
            Title="Orangina 33 cl"
            Content="Une recette secouée au goût incomparable !
            Une formule unique qui allie l'orange sous toutes ses formes et de fines bulles rafraîchissantes. Orangina est la seule marque de boissons rafraîchissantes qu’il faut secouer avant de déguster !"
            Img={image18}
            Prix="2.50"
          />



        </div>
        
        
      </div>
      </div>
      </div>
   
  );
};

export default Home;
