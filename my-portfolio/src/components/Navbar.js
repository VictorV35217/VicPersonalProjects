import './Navbar.css';
import { IoMenu, IoCloseSharp, IoHomeSharp, IoMail } from 'react-icons/io5';
import { FaWrench, FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Navbar = () => {

    const closeSidebar = () => {
        const sidebarCheckbox = document.getElementById('SideA');
        if (sidebarCheckbox) {
                sidebarCheckbox.checked = false;
        }
    }

    return(
        <>
            <nav>
                <input type="checkbox" id="SideA"/>
                <label htmlFor="SideA" className="Sidebar-O-button">
                    <IoMenu size={28}/>
                </label>

                <label id="overlay" htmlFor="SideA"/>

                <div className="links-container">
                    <label htmlFor="SideA" className="Sidebar-C-button">
                        <IoCloseSharp size={28}/>
                    </label>
                    <Link to="/" className="home-link" onClick={closeSidebar}><IoHomeSharp size={28}/>Home</Link>
                    <Link to="/skills" onClick={closeSidebar}><FaUserGraduate size={28}/>Education</Link>
                    <Link to="/projects" onClick={closeSidebar}><FaWrench size={28}/> Projects</Link>
                    <Link to="/contact" onClick={closeSidebar}><IoMail size={28}/>Contact Me</Link>
                </div>
            </nav>                
        </>
    )

}

export default Navbar