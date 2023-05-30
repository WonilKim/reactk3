const CntDisp = (probs) => {
    console.log("-- CntDisp(probs)");

    let count = probs.count;

    return (
        <article>
            <h3>입력값 : {count}, 입력값 2배 : {count * 2}</h3>
        </article>
    );
}

export default CntDisp;