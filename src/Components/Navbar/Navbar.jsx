import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from "../../assets/Images/logo.svg"
import Avatar from "../../assets/Images/image-avatar.png"
import Cart from "../../assets/Images/icon-cart.svg"
import close from "../../assets/Images/icon-close.svg"
import menu from "../../assets/Images/icon-menu.svg"
import { useState } from "react";
function Navbar() {
    const [showMenubar, setshowMenubar] = useState(false);

    function HindelMenuBar() {
        let newMenuValue = !showMenubar
        setshowMenubar(newMenuValue);
    };
    function closemenu() {
        setshowMenubar(false)
    };



    return (
        <nav>
            <button className="Menubtn" onClick={HindelMenuBar}>
                <img src={menu} />
            </button>

            {showMenubar == true ? (<>
                <div className="Menu">

                    <div className=".Slide-menu">

                        <ul className="linksVertical">
                            <img src={close} className="close" onClick={closemenu} />
                            <li>
                                <Link to="/" >Collections</Link>
                            </li>
                            <li>
                                <Link to="/Men">Men</Link>
                            </li>
                            <li>
                                <Link to="/Women">Women</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </>)
                : (null)}

            <div className="logo">
                <img src={Logo}></img>
            </div>

            <ul>
                <div className="links hidden">
                    <li>
                        <Link to="/">Collections</Link>
                    </li>
                    <li>
                        <Link to="/Men">Men</Link>
                    </li>
                    <li>
                        <Link to="/Women">Women</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </div>
            </ul>

            <div className="Cart-Avatar-Group">
                <div className="btn-cart">
                    <img src={Cart}></img>
                    <div className="cart-count">3</div>
                </div>
                <div>
                    <img src={Avatar} className="Avatar"></img>
                </div>
            </div>
        </nav>
    )
}
export default Navbar