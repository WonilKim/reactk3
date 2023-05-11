import style from './styles/GallaryArticle.module.css';

const GallaryArticle = (probs) => {

    let item = probs.item;

    let tempArrayKeyword = item["galSearchKeyword"].split(",");
    let setKeyword = new Set();
    // console.log("tempArrayKeyword = ", tempArrayKeyword);
    // console.log("new Set(tempArrayKeyword) = ", new Set(tempArrayKeyword));
    for (let kw of tempArrayKeyword) {
        setKeyword.add(kw.trim());
    }
    let arrayKeyword = [...setKeyword];
    // console.log("arrayKeyword = ", arrayKeyword);

    return (
        <article key={item["galTitle"]}>
            <header>
                <hgroup>
                    <h4>{item["galTitle"]}</h4>
                    <h5>{item["galPhotographyLocation"]}</h5>
                </hgroup>
            </header>
            <img className={style.images} src={item["galWebImageUrl"]} alt={item["galTitle"]} />
            <footer>
                <div>
                    {arrayKeyword.map((searchKey) => {
                        return (
                            <span key={searchKey} className={style.output}>{searchKey}</span>
                        );
                    })}
                </div>
            </footer>
        </article>
    );
}

export default GallaryArticle;