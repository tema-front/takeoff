import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";

// Компонент шапки сайта с навигацией
export const Header: FC = () => {
    const authed = useSelector((state: RootState) => state.stateProfile.authed);

    return (
        <header className="header">
            <h3 className="header-title">Takeoff Staff.</h3>
            <nav className="header-nav">
                <Link to={'/login'} className="header-nav-link">Login</Link>
                {authed
                    ? <Link to={'/contacts'} className="header-nav-link">My contacts</Link>
                    : <Link to={'/contacts'} className="header-nav-link disabled">My contacts</Link>
                }
            </nav>
        </header>
    );
}
