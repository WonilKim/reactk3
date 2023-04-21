const MyClockTime = () => {
    let myTime = new Date().toLocaleTimeString() ;
    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;