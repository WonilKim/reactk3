import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Introduce = () => {
    return (
        <div class="study_list">
            <ol>
                <li><Link to = '/04' >[04.25] React custom component</Link></li>
                <li><a href="./04.html">[04.25] React custom component</a></li>
                <li><a href="./03.html">[04.21] React box office</a></li>
                <li><a href="./02.html">[04.21] React MyClock</a></li>
                <li><a href="./01.html">[04.21] Hello react</a></li>

            </ol>
        </div>
    );
}

export default Introduce;