import { Link } from "react-router-dom";

const FcstNav = () => {

    return (
        <nav>
            <ul>
                <li>기상청 단기 예보</li>
            </ul>
            <ul>
                <li><Link to="/Fcst" role="button">단기 예보 메인</Link></li>
            </ul>
        </nav>
    );
}

export default FcstNav;