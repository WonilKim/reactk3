import style from './styles/Fashion.module.css';
import { useState, useEffect } from 'react';

const Fashion = () => {

    // 의상 종류
    const parts = ['상의', '하의', '아우터', '원피스'];

    // 스타일
    const styles = ['기타', '매니시', '스포티', '스트리트', '레트로', '섹시', '리조트', '로맨틱',
        '밀리터리', '소피스트케이티드', '모던', '오리엔탈', '웨스턴', '젠더리스', '컨트리', '아방가르드'].sort();

    // 카테고리
    const outer_category = ['가디건', '짚업', '베스트', '코트', '재킷', '점퍼', '패딩'];
    const top_category = ['브라탑', '후드티', '탑', '티셔츠', '셔츠', '블라우스', '니트웨어'];
    const bottom_category = ['스커트', '청바지', '조거팬츠', '팬츠', '래깅스'];
    const onepiece_category = ['드레스', '점프수트'];

    // 기장
    const outer_length = ['롱', '맥시', '하프', '노말', '크롭'];
    const top_length = ['롱', '노멀', '크롭'];
    const bottom_length = ['맥시', '니렝스', '미니', '미디', '발목'];
    const onepiece_length = bottom_length;

    // 소매 기장
    const outer_sleeve_length = ['반팔', '민소매', '긴팔', '7부소매', '캡'];
    const top_sleeve_length = ['반팔', '민소매', '긴팔', '7부소매', '캡', '없음'];
    const bottom_sleeve_length = [];
    const onepiece_sleeve_length = top_sleeve_length;

    // neckline
    const outer_neckline = ['오프숄더', '원숄더', '보트넥', '후드', '터틀넥', '브이넥', '스퀘어넥', '라운드넥', '유넥', '스위트하트', '노카라', '홀터넥'];
    const top_neckline = outer_neckline;
    const bottom_neckline = [];
    const onepiece_neckline = outer_neckline;

    // fit
    const outer_fit = ['오버사이즈', '노멀', '타이트', '루즈'];
    const top_fit = outer_fit;
    const bottom_fit = ['노멀', '스키니', '와이드', '루즈', '벨보텀'];
    const onepiece_fit = outer_fit;


    const [categoryTags, setCategoryTags] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedCategories changed', selectedCategories);

    }, [selectedCategories]);

    const [lengthTags, setLengthTags] = useState(0);
    const [selectedLengths, setSelectedLengths] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedLengths changed', selectedLengths);

    }, [selectedLengths]);

    const [sleeveLengthTags, setSleeveLengthTags] = useState(0);
    const [selectedSleeveLengths, setSelectedSleeveLengths] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedSleeveLengths changed', selectedSleeveLengths);

    }, [selectedSleeveLengths]);

    const [necklineTags, setNecklineTags] = useState(0);
    const [selectedNecklines, setSelectedNecklines] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedNecklines changed', selectedNecklines);

    }, [selectedNecklines]);

    const [fitTags, setFitTags] = useState(0);
    const [selectedFits, setSelectedFits] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedFits changed', selectedFits);

    }, [selectedFits]);

    const [selectedPart, setSelectedPart] = useState(0);
    // selectedPart 가 바뀌면 실행됨
    useEffect(() => {
        console.log('-- useEffect() selectedPart changed', selectedPart);

        let categories = [];
        let lengths = [];
        let sleeve_lengths = [];
        let necklines = [];
        let fits = [];

        switch (selectedPart) {
            case "상의":
                categories = [...top_category].sort();
                lengths = top_length;
                sleeve_lengths = top_sleeve_length;
                necklines = top_neckline;
                fits = top_fit;
                break;
            case "하의":
                categories = [...bottom_category].sort();
                lengths = bottom_length;
                sleeve_lengths = bottom_sleeve_length;
                necklines = bottom_neckline;
                fits = bottom_fit;
                break;
            case "아우터":
                categories = [...outer_category].sort();
                lengths = outer_length;
                sleeve_lengths = outer_sleeve_length;
                necklines = outer_neckline;
                fits = outer_fit;
                break;
            case "원피스":
                categories = [...onepiece_category].sort();
                lengths = onepiece_length;
                sleeve_lengths = onepiece_sleeve_length;
                necklines = onepiece_neckline;
                fits = onepiece_fit;
                break;
            default:
                break;
        }

        setCategoryTags(
            categories.map((item) => {
                return (
                    <label key={item} >
                        <input type="checkbox" className="categoryCheckbox" id={item} name={item} value={item} onChange={onCategoryChanged} />
                        {item}
                    </label>
                );
            })
        );

        setLengthTags(
            lengths.map((item) => {
                return (
                    <label key={item} >
                        <input type="checkbox" className="lengthCheckbox" id={item} name={item} value={item} onChange={onLengthChanged} />
                        {item}
                    </label>
                );
            })
        );

        setSleeveLengthTags(
            sleeve_lengths.map((item) => {
                return (
                    <label key={item} >
                        <input type="checkbox" className="sleeveLengthCheckbox" id={item} name={item} value={item} onChange={onSleeveLengthChanged} />
                        {item}
                    </label>
                );
            })
        );

        setNecklineTags(
            necklines.map((item) => {
                return (
                    <label key={item} >
                        <input type="checkbox" className="necklineCheckbox" id={item} name={item} value={item} onChange={onNecklineChanged} />
                        {item}
                    </label>
                );
            })
        );

        setFitTags(
            fits.map((item) => {
                return (
                    <label key={item} >
                        <input type="checkbox" className="fitCheckbox" id={item} name={item} value={item} onChange={onFitChanged} />
                        {item}
                    </label>
                );
            })
        );


    }, [selectedPart]);


    const onCategoryChanged = (e) => {
        console.log("onCategoryChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.categoryCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedCategories(values);
    }

    const onLengthChanged = (e) => {
        console.log("onLengthChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.lengthCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedLengths(values);
    }

    const onSleeveLengthChanged = (e) => {
        console.log("onSleeveLengthChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.sleeveLengthCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedSleeveLengths(values);
    }

    const onNecklineChanged = (e) => {
        console.log("onNecklineChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.necklineCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedNecklines(values);
    }

    const onFitChanged = (e) => {
        console.log("onFitChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.fitCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedFits(values);
    }



    // 의상 종류 라디오버튼 선택 변경 이벤트 함수
    const onPartChanged = (e) => {
        console.log("onPartChaned()");
        console.log(e.target.value);
        setSelectedPart(e.target.value);
        setCategoryTags(e.target.value);
    }

    // 의상 종류 선택 태그
    const partTags = (
        parts.map((item) => {
            return (
                <label key={item} >
                    <input type="radio" id={item} name="part" value={item} onChange={onPartChanged} />
                    {item}
                </label>
            );

        })
    );

    const [selectedStyles, setSelectedStyles] = useState([]);

    useEffect(() => {
        console.log('-- useEffect() selectedStyles changed', selectedStyles);

    }, [selectedStyles]);


    const onStyleChanged = (e) => {
        console.log("onStyleChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.styleCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedStyles(values);
    }

    const styleTags = (
        styles.map((item) => {
            return (
                <label key={item} >
                    <input type="checkbox" className="styleCheckbox" id={item} name={item} value={item} onChange={onStyleChanged} />
                    {item}
                </label>
            );

        })
    );

    return (
        <main className='container'>
            <article>
                <header>
                    <hgroup>
                        <h1>패션 추천 시스템</h1>
                        <h3>Fashion Recommend System</h3>
                    </hgroup>
                </header>

                <details open>
                    <summary><h4>의상 종류</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>추천을 받기 원하는 의상의 종류를 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {partTags}
                        </fieldset>
                    </div>
                </details>

                <details open>
                    <summary><h4>카테고리</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>선호하는 카테고리를 모두 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {categoryTags}
                        </fieldset>
                    </div>
                </details>

                <details>
                    <summary><h4>기장</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>원하는 기장을 모두 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {lengthTags}
                        </fieldset>
                    </div>
                </details>

                <details>
                    <summary><h4>소매 기장</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>원하는 소매 기장을 모두 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {sleeveLengthTags}
                        </fieldset>
                    </div>
                </details>

                <details>
                    <summary><h4>넥 라인</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>원하는 넥 라인을 모두 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {necklineTags}
                        </fieldset>
                    </div>
                </details>

                <details>
                    <summary><h4>핏</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>원하는 핏을 모두 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {fitTags}
                        </fieldset>
                    </div>
                </details>

                <details>
                    <summary><h4>스타일</h4></summary>
                    <div className={style.divs}>
                        <div className={style.titles}><strong>원하는 스타일을 모두 선택하세요.</strong></div>
                        <fieldset className={style.checkboxes}>
                            {styleTags}
                        </fieldset>
                    </div>
                </details>

            </article>

        </main>
    );
}
export default Fashion;