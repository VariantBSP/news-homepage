

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src='/images/logo.svg' alt="logo"/>
            </div>
            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
            </ul>
            <div className="menu">
            <img src="images/icon-menu.svg" alt="menu" />
            <div className="menu-content">
                <img src="images/icon-menu-close.svg" alt="close" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul> 
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;