const TaccidentNav2 = (probs) => {

    let c1 = probs.c1;
    let c2 = probs.c2;
    // console.log('c1 = ', c1);
    // console.log('c2 = ', c2);

    let sel1 = probs.sel1;
    let sel2 = probs.sel2;
    let setSel2 = probs.setSel2;

    // const btTags = (
    //     c2.map((item) => {
    //         console.log('item = ', item);
    //         console.log('sel1 = ', sel1);
    //         console.log('sel2 = ', sel2);

    //         if (item[0] === sel1) {
    //             return (
    //                 <li key={item[1]}><button onClick={() => setSel2(item[1])}>{item[1]}</button></li>
    //             );
    //         }
    //     })
    // );

    const btTags = c2.filter((item)=> item[0] === sel1).map((item) => {
        return (
            <li key={item[1]}><button onClick={() => setSel2(item[1])}>{item[1]}</button></li>
        );
    });

    return (
        <nav>
            <ul>
                <li><strong>교통사고 중분류</strong></li>
            </ul>
            <ul>
                {btTags}
            </ul>
        </nav>
    );
}
export default TaccidentNav2;