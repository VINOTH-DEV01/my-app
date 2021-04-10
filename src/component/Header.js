import Logo from '../assests/images/logo.png'
import '../assests/css/header.css'




function Header() {
    return (
        <div className="headersection">
            <div className="top">
                <div className="topbar">
                    <div className="one">
                        <img className="flip" src={Logo} />
                    </div>
                    <div className="searchbar">
                        <div className="search">
                            <input className="box" type="text" placeholder="Search for Products Brands and More" />
                        </div>
                        <div className="searchicon">
                            <i className="fas fa-search btn"></i>
                        </div>
                    </div>
                    <div className="right">
                        <div className="login">
                            Login
                                    </div>

                        <div className="more">
                            More <i className="fas fa-chevron-down arrow"></i>
                        </div>
                        <div className="cart">
                            <i className="fas fa-shopping-cart shop"><span>Cart</span></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;
