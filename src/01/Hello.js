import logo from '../logo.svg';
import './Hello.css';
import MyClockImage from '../02/MyClockImage';

const Hello = () => {
    let name = '김원일' ;
    let git = 'https://github.com/WonilKim' ;

    return (
        <main className='container'>
            <article data-theme="dark">
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <MyClockImage />
                <footer>
                    <hgroup>
                        <h1>{name}</h1>
                        <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>
    );
}

export default Hello;