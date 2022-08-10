import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    return (
        <>
            <header className="header">
                <h3 className="header-title">Takeoff Staff</h3>
                <nav className="header-nav">
                    <Link to={'/login'} className="header-nav-link">Login</Link>
                    <Link to={'/contacts'} className="header-nav-link">My contacts</Link>
                </nav>
            </header>
        </>
    );
}
