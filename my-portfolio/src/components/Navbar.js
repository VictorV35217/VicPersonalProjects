import './Navbar.css';
import { IoMenu, IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <>
            <nav>
                <input type="checkbox" id="SideA"/>
                <label for="SideA" class="Sidebar-O-button">
                    <IoMenu/>
                </label>

                <label id="overlay" for="SideA"/>

                <div class="links-container">
                    <label for="SideA" class="Sidebar-C-button">
                        <IoCloseSharp/>
                    </label>
                    <Link to="/" class="home-link">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>
            </nav>                
        </>
    )

}

export default Navbar