import MyClockImage from "./MyClockImage" ;
import MyClockTime from "./MyClockTime";
import '../01/Hello.css' ;

const MyClock = () => {
    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImage /> 
                <MyClockTime />
            </article>
        </main>
    );
}



export default MyClock ;