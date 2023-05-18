import { Link } from "react-router-dom";

const RouteNav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/RouteMain" role="button">Home</Link></li>
                <li><Link to="/RoutePage1/🍎" role="button">Page1</Link></li>
                <li><Link to="/RoutePage2?item1=🍎&item2=🥭" role="button">Page2</Link></li>
            </ul>
        </nav>
    );
}

export default RouteNav;