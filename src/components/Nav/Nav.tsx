import { useState } from 'react'
import { useViewportSize } from '@mantine/hooks'
import NavItem from './NavItem'
import linkedinLogo from '../../assets/images/linkedin.png'
import './Nav.scss'

function NavComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useViewportSize()
    const isMobile = width < 760

    const navItemArray = [
        { link: '/', title: 'home' },
        { link: '/about', title: 'about' },
        { link: '/projects', title: 'projects' },
        { link: 'https://www.linkedin.com/in/cliffordbrooke/', target: '_blank', title: <img src={linkedinLogo} alt="view my linkedIn profile" /> }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const menuDisplay = () => {
        // display menu UL if 1) user is notMobile, 2) if user isMobile & menu isOpen

        if(!isMobile || (isMobile && isMenuOpen) ){
            return 'open';
        }
        
        return 'closed';
    }

    return (
        <nav className={ isMobile ? 'is-mobile' : undefined }>
            <ul className={ menuDisplay() }>
                { 
                    navItemArray.map((item, index) => <NavItem link={item.link} key={index} target={item.target} title={item.title} /> )
                }
            </ul>
            <button className={!isMobile ? 'hidden': undefined} onClick={toggleMenu}>
                <div className={`hamburger ${isMenuOpen ? 'open' : 'close'}`}>
                    <div></div>
                </div>
            </button>
        </nav>
    )
}

export default NavComponent;