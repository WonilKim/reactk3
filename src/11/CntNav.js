import { Link } from "react-router-dom";

const CntNav = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/CntDisp" role="button">출력 페이지로 이동</Link></li>
                {/* <li><Link to="/RoutePage1/🍎" role="button">Page1</Link></li>
                <li><Link to="/RoutePage2?item1=🍎&item2=🥭" role="button">Page2</Link></li> */}
            </ul>
        </nav>
    );
}

export default CntNav;