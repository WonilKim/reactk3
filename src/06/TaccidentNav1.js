const TaccidentNav1 = (probs) => {

    let c1 = probs.c1;
    let c2 = probs.c2;
    // console.log('c1 = ', c1);
    // console.log('c2 = ', c2);

    let sel1 = probs.sel1;
    let setSel1 = probs.setSel1;

    const btTags = (
        c1.map((item)=> {
            return (
                <li key={item}><button onClick={() => setSel1(item)}>{item}</button></li>
            );
        })
    );

    return (
        <nav>
            <ul>
                <li><strong>교통사고 대분류</strong></li>
            </ul>
            <ul>
                {btTags}
            </ul>
        </nav>
    );
}
export default TaccidentNav1;