import './index.css';
export const Content = ({ title, textcontent }) => {

    return (
        <div className="content">
            <h1 className="titreContent"> {title} </h1>
            <hr/>
            <p className="texteContent">
                {textcontent}
            </p>
        </div>
    )

}