import './index.css';
export const Button =  ({ onClick, Label }) => {
    
    return(
        <button className = 'button-28' onClick ={onClick} >
            {Label}
        </button>
);

}
