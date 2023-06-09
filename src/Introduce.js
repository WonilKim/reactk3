import { Link } from 'react-router-dom';

import style from './introduce.module.css';

import react_image from './images/react.png'    // relative path to image 

const Introduce = () => {
    return (
        <>
            <header>
                <hgroup className={style.header_text}>
                    <h1 className={style.header_text_h1}>Home Page</h1>
                    <h3 className={style.header_text_h3}>K-digital 부산대학교 3기</h3>
                </hgroup>
            </header>
            <main className='container'>
                <article>
                    <details open>
                        <summary>
                            리액트 학습 내용
                        </summary>
                        <div className={style.study}>
                            <div className={style.study_image}>
                                <img className={style.react_image} src={react_image} alt="" />
                            </div>
                            <div className={style.study_list}>
                                <ol>
                                    <li><Link to="/Cnt">[05.30] React recoil</Link></li>
                                    <li><Link to="/Cnt_1">[05.30] React state and component</Link></li>
                                    <li><Link to="/CodeView">[05.26] React code View</Link></li>
                                    <li><Link to="/Fcst">[05.18] React weather forecast</Link></li>
                                    <li><Link to="/RouteMain">[05.18] React route</Link></li>
                                    <li><Link to="/Gallary">[05.16] React gallary</Link></li>
                                    <li><Link to="/Gallary_1">[05.09] React gallary 1</Link></li>
                                    <li><Link to="/Box">[05.09] React box office</Link></li>
                                    <li><Link to="/MyRef">[05.04] React useRef</Link></li>
                                    <li><Link to="/MyRef_01">[05.04] React useRef 01</Link></li>
                                    <li><Link to="/Taccident">[05.02] React traffic accident</Link></li>
                                    <li><Link to="/Frcst">[04.27] React fine dust forecast</Link></li>
                                    <li><Link to="/mydiv">[04.25] React custom component</Link></li>
                                    <li><Link to="/Box_2">[04.25] React box office</Link></li>
                                    <li><Link to="/myclock">[04.21] React MyClock</Link></li>
                                    <li><Link to="/Hello">[04.21] Hello react</Link></li>
                                    <li><Link to="/">[04.21] Introduce (Current page)</Link></li>
                                    <li><Link to="/Maze">Maze Problem (Data structure)</Link></li>
                                    <li><Link to="/MazeWithQueue">Maze Problem with Queue (Data structure)</Link></li>
                                    <li><Link to="/Fashion">Fashion Recommend System (Paper Research)</Link></li>

                                </ol>
                            </div>
                        </div>
                    </details>
                </article>
            </main>
            <footer className={style.contents_footer}>
                <p>K-digital 부산대학교 3기</p>
            </footer>
        </>
    );
}

export default Introduce;