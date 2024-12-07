import './Navbar.css';
import { IoMenu, IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const Navbar = () => {

    return(
        <>
            <nav>
                <ul className='topbar'>
                    <li><a href="/">Home</a></li>
                    <li className='hideOnMobile'><a href="/">About Me</a></li>
                    <li className='hideOnMobile'><a href="/">Projects</a></li>
                    <li className='hideOnMobile'><a href="/">Contact</a></li>
                    <li className='menu-button'onClick={showSidebar}><a href="#"><IoMenu /></a></li>
                </ul>
                <ul className='sidebar'>
                    <li onClick={hideSidebar}><a href="#"><IoCloseSharp /></a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
                
        </>
    )

}

export default Navbar