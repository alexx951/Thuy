import './index.css';
export const Plat = ({Title, Content, Img, Prix}) => {

    return (
        <div className="container">

       
        <div className="card">
          <img className="cardImg" src={Img} alt="imagecard"></img>
    

          <div className="card__details">
    

            <div className="name">{Title}</div>
    
            <p> {Content} </p>

            <span> {Prix}€ </span>
    

        </div>
    
    
        </div>
      </div>
    );





}


