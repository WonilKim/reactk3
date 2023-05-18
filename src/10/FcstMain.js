import { Link } from 'react-router-dom';

import FcstNav from './FcstNav';
import xy from './getxy.json';

const FcstMain = () => {

    const ops = xy.map((item) => 
        <option key={item["행정구역코드"]} value={item["행정구역코드"]}>{item["1단계"]}</option>
    )

    console.log(xy);

    return (
        <article>
            <main className='container'>
                <header>
                    <h1>FcstMain</h1>
                    <FcstNav />
                </header>
                <div className='grid'>
                    <div>
                        <input type='date' id='dt' name='dt' />
                    </div>
                    <div>
                        <select id='sel' name='sel'>
                            {ops}
                        </select>
                    </div>

                </div>
                <footer>
                    <div className='grid'>
                        <Link to="/UltraSrtFcst" role="button">초단기예보</Link>
                        <Link to="/VilageFcst" role="button">단기예보</Link>
                    </div>
                </footer>
            </main>

        </article>
    );
}

export default FcstMain;