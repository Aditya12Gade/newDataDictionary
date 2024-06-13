import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Preferences">Preferences</Link>
                    </li>
                    <li>
                        <Link to="/Minify">Minify</Link>
                    </li>
                    <li>
                        <Link to="/Synonyms">Synonyms</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
};

export default Layout;
