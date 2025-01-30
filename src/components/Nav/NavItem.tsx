interface NavProps {
    link: string,
    title: any
    target?: string
}

import { NavLink } from 'react-router';

function NavItem({link, title, ...props}: NavProps ) {
    return (
        <li>
            <NavLink to={link} className={({ isActive }) => (isActive ? 'is-active' : undefined)} {...props} >{title}</NavLink>
        </li>

    );
}

export default NavItem