import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
            <nav className="navigation">
                <ul className="nav-container">
                    <li className="nav-link"><NavLink exact to="/home" style={({ isActive }) => ({
                        color: isActive ? '#f97141' : '#fff'
                    })}>Home</NavLink></li>
                    <li className="nav-link"><NavLink exact to="catalog" style={({ isActive }) => ({
                        color: isActive ? '#f97141' : '#fff'
                    })}>Catalog</NavLink></li>
                    <li className="nav-link"><NavLink exact to="/cart" style={({ isActive }) => ({
                        color: isActive ? '#f97141' : '#fff'
                    })}>Cart</NavLink></li>
                </ul>
            </nav>
    )
}

export default Navigation;