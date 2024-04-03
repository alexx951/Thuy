
import { Navbar } from "./Navbar";
const Header = ({ children }) => {

    return (
        <header className="App-header">
            <div>
            {children}
            </div>
        </header>
    )


}

Header.Navbar = Navbar;

export default Header;