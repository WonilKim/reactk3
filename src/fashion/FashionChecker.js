import style from './styles/FashionChecker.module.css';

const FashionChecker = (probs) => {

    let tags = probs.tags;
    let setTags = probs.setTags;

    return (
        <details open>
            <summary><h4>{probs.summary}</h4></summary>
            <div className={style.divs}>
                <div className={style.titles}><strong>{probs.description}</strong></div>
                <fieldset className={style.checkboxes}>
                    {tags}
                </fieldset>
            </div>
        </details>
    );
}

export default FashionChecker;