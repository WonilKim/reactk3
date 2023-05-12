import FashionChecker from './FashionChecker';
import style from './styles/Fashion.module.css';
import { useState, useEffect } from 'react';

const Fashion = () => {

    // 의상 종류
    const parts = ['상의', '하의', '아우터', '원피스'];

    // 스타일
    const common_styles = ['기타', '매니시', '스포티', '스트리트', '레트로', '섹시', '리조트', '로맨틱',
        '밀리터리', '소피스트케이티드', '모던', '오리엔탈', '웨스턴', '젠더리스', '컨트리', '아방가르드'].sort();

    // 카테고리
    const outer_category = ['가디건', '짚업', '베스트', '코트', '재킷', '점퍼', '패딩'].sort();
    const top_category = ['브라탑', '후드티', '탑', '티셔츠', '셔츠', '블라우스', '니트웨어'].sort();
    const bottom_category = ['스커트', '청바지', '조거팬츠', '팬츠', '래깅스'].sort();
    const onepiece_category = ['드레스', '점프수트'].sort();

    // 핏
    const outer_fit = ['노멀', '루즈', '오버사이즈', '타이트'];
    const top_fit = outer_fit;
    const bottom_fit = ['노멀', '루즈', '스키니', '와이드', '벨보텀'];
    const onepiece_fit = outer_fit;

    // 기장
    const outer_length = ['노말', '롱', '크롭', '맥시', '하프'];
    const top_length = ['노멀', '롱', '크롭'];
    const bottom_length = ['맥시', '니렝스', '미니', '미디', '발목'];
    const onepiece_length = bottom_length;

    // 소매 기장
    const outer_sleeve_length = ['반팔', '민소매', '긴팔', '7부소매', '캡'];
    const top_sleeve_length = ['반팔', '민소매', '긴팔', '7부소매', '캡', '없음'];
    const bottom_sleeve_length = [];
    const onepiece_sleeve_length = top_sleeve_length;

    // 색상
    const common_color = ['블루', '민트', '골드', '레드', '옐로우', '브라운', '그린', '퍼플', '라벤더',
        '네이비', '네온', '실버', '화이트', '와인', '카키', '그레이', '스카이블루', '블랙', '베이지', '오렌지',
        '핑크'].sort();

    // 재질
    const common_material = ['니트', '시폰', '린넨', '패딩', '퍼', '스판덱스', '실크', '코듀로이',
        '시퀸/글리터', '저지', '우븐', '가죽', '메시', '네오프렌', '자카드', '헤어 니트', '플리스', '무스탕',
        '울/캐시미어', '데님', '스웨이드', '트위드', '비닐/PVC', '벨벳', '레이스'].sort();

    // 프린트
    const common_print = ['하운즈투스', '믹스', '카무플라쥬', '페이즐리', '지그재그', '도트', '호피',
        '플로럴', '그래픽', '타이다이', '하트', '무지', '깅엄', '아가일', '체크', '스트라이프', '해골',
        '뱀피', '그라데이션', '지브라', '레터링'].sort();

    // 디테일
    const common_detail = ['싱글브레스티드', '비즈', '체인', '프린지', '버클', '디스트로이드', '패치워크',
        '러플', '페플럼', '프릴', '글리터', '지퍼', '드롭숄더', '레이스업', '스티치', '퀄팅', '드롭웨이스트',
        '플레어', '비대칭', '태슬', '슬릿', '퍼프', '스팽글', '퍼트리밍', '스터드', '스트링', '단추', '폼폼',
        'X스트랩', '롤업', '니트꽈베기', '컷아웃', '리본', '더블브레스티드', '자수', '포켓', '플리츠', '띠',
        '레이스', '셔링'].sort();

    // 넥라인
    const outer_neckline = ['오프숄더', '원숄더', '보트넥', '후드', '터틀넥', '브이넥', '스퀘어넥',
        '라운드넥', '유넥', '스위트하트', '노카라', '홀터넥'].sort();
    const top_neckline = outer_neckline;
    const bottom_neckline = [];
    const onepiece_neckline = outer_neckline;

    // 서브 스타일
    const common_sub_styles = common_styles;

    // 서브 컬러
    const common_sub_color = common_color;

    // 카라
    const outer_collar = ['피터팬칼라', '셔츠칼라', '보우칼라', '폴로칼라', '세일러칼라', '테일러드칼라', '밴드칼라', '차이나칼라', '숄칼라'].sort();
    const top_collar = outer_collar;
    const bottom_collar = [];
    const onepiece_collar = outer_collar;

    const [styleTags, setStyleTags] = useState(<></>);
    const [selectedStyles, setSelectedStyles] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedStyles changed', selectedStyles);

    }, [selectedStyles]);

    const [categoryTags, setCategoryTags] = useState(<></>);
    const [selectedCategories, setSelectedCategories] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedCategories changed', selectedCategories);

    }, [selectedCategories]);

    const [fitTags, setFitTags] = useState(<></>);
    const [selectedFits, setSelectedFits] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedFits changed', selectedFits);

    }, [selectedFits]);

    const [lengthTags, setLengthTags] = useState(<></>);
    const [selectedLengths, setSelectedLengths] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedLengths changed', selectedLengths);

    }, [selectedLengths]);

    const [sleeveLengthTags, setSleeveLengthTags] = useState(<></>);
    const [selectedSleeveLengths, setSelectedSleeveLengths] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedSleeveLengths changed', selectedSleeveLengths);

    }, [selectedSleeveLengths]);

    const [colorTags, setColorTags] = useState(<></>);
    const [selectedColors, setSelectedColors] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedColors changed', selectedColors);

    }, [selectedColors]);

    const [materialTags, setMaterialTags] = useState(<></>);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedMaterials changed', selectedMaterials);

    }, [selectedMaterials]);

    const [detailTags, setDetailTags] = useState(<></>);
    const [selectedDetails, setSelectedDetails] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedDetails changed', selectedDetails);

    }, [selectedDetails]);

    const [printTags, setPrintTags] = useState(<></>);
    const [selectedPrints, setSelectedPrints] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedPrints changed', selectedPrints);

    }, [selectedPrints]);

    const [necklineTags, setNecklineTags] = useState(<></>);
    const [selectedNecklines, setSelectedNecklines] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedNecklines changed', selectedNecklines);

    }, [selectedNecklines]);

    const [collarTags, setCollarTags] = useState(<></>);
    const [selectedCollars, setSelectedCollars] = useState([]);
    useEffect(() => {
        console.log('-- useEffect() selectedCollars changed', selectedCollars);

    }, [selectedCollars]);

    const [selectedPart, setSelectedPart] = useState("");
    // selectedPart 가 바뀌면 실행됨
    useEffect(() => {
        console.log('-- useEffect() selectedPart changed', selectedPart);

        if (selectedPart === "") {
            return;
        }

        const colCount = 3;
        let columnTags;

        let styles = [];
        let categories = [];
        let fits = [];
        let lengths = [];
        let sleeve_lengths = [];
        let colors = [];
        let materials = [];
        let details = [];
        let prints = [];
        let necklines = [];
        let collars = [];

        switch (selectedPart) {
            case "상의":
                categories = [...top_category].sort();
                lengths = top_length;
                sleeve_lengths = top_sleeve_length;
                necklines = top_neckline;
                fits = top_fit;
                collars = top_collar;

                styles = common_styles;
                colors = common_color;
                materials = common_material;
                details = common_detail;
                prints = common_print;

                break;
            case "하의":
                categories = [...bottom_category].sort();
                lengths = bottom_length;
                sleeve_lengths = bottom_sleeve_length;
                necklines = bottom_neckline;
                fits = bottom_fit;
                collars = bottom_collar;

                styles = common_styles;
                colors = common_color;
                materials = common_material;
                details = common_detail;
                prints = common_print;
                break;
            case "아우터":
                categories = [...outer_category].sort();
                lengths = outer_length;
                sleeve_lengths = outer_sleeve_length;
                necklines = outer_neckline;
                fits = outer_fit;
                collars = outer_collar;

                styles = common_styles;
                colors = common_color;
                materials = common_material;
                details = common_detail;
                prints = common_print;
                break;
            case "원피스":
                categories = [...onepiece_category].sort();
                lengths = onepiece_length;
                sleeve_lengths = onepiece_sleeve_length;
                necklines = onepiece_neckline;
                fits = onepiece_fit;
                collars = onepiece_collar;

                styles = common_styles;
                colors = common_color;
                materials = common_material;
                details = common_detail;
                prints = common_print;
                break;
            default:
                break;
        }

        const setCheckboxColumnsTags = (col, className, onChange) => {
            // console.log("col = " + col);
            if (col.length === 0) {
                // console.log("col = " + col + ", className = " + className);
                return;
            }
            return (
                <div key={col} className={style.checkboxColumn}>
                    {col.map((item) => {
                        // console.log("col = " + col);
                        return (
                            <label key={item}>
                                <input type="checkbox" className={className + "Checkbox"} id={item} name={item} value={item} onChange={onChange} />
                                {item}
                            </label>
                        );
                    })}
                </div>
            );
        }

        const spitDataToCols = (items) => {
            let cols = [];
            for (let i = 0; i < colCount; i++) {
                cols.push([]);
            }
            for (let i = 0; i < items.length; i++) {
                cols[i % colCount].push(items[i]);
            }

            return cols;
        }

        //
        columnTags = spitDataToCols(styles);
        setStyleTags(<></>);
        setStyleTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "style", onStyleChanged);
            })
        );

        columnTags = spitDataToCols(categories);
        setCategoryTags(<></>);
        setCategoryTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "category", onCategoryChanged);
            })
        );

        columnTags = spitDataToCols(fits);
        setFitTags(<></>);
        setFitTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "fit", onFitChanged);
            })
        );

        columnTags = spitDataToCols(lengths);
        setLengthTags(<></>);
        setLengthTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "length", onLengthChanged);
            })
        );

        columnTags = spitDataToCols(sleeve_lengths);
        setSleeveLengthTags(<></>);
        setSleeveLengthTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "sleeveLength", onSleeveLengthChanged);
            })
        );

        columnTags = spitDataToCols(colors);
        setColorTags(<></>);
        setColorTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "color", onColorChanged);
            })
        );

        columnTags = spitDataToCols(materials);
        setMaterialTags(<></>);
        setMaterialTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "material", onMaterialChanged);
            })
        );

        columnTags = spitDataToCols(details);
        setDetailTags(<></>);
        setDetailTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "detail", onDetailChanged);
            })
        );

        columnTags = spitDataToCols(prints);
        setPrintTags(<></>);
        setPrintTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "print", onPrintChanged);
            })
        );

        columnTags = spitDataToCols(collars);
        setCollarTags(<></>);
        setCollarTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "collar", onCollarChanged);
            })
        );

        columnTags = spitDataToCols(necklines);
        setNecklineTags(<></>);
        setNecklineTags(
            columnTags.map((col) => {
                console.log("* col", col);
                return setCheckboxColumnsTags(col, "neckline", onNecklineChanged);
            })
        );

    }, [selectedPart]);

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



    const onColorChanged = (e) => {
        console.log("onColorChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.colorCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedColors(values);
    }

    const onMaterialChanged = (e) => {
        console.log("onMaterialChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.materialCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedMaterials(values);
    }

    const onDetailChanged = (e) => {
        console.log("onDetailChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.detailCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedDetails(values);
    }

    const onPrintChanged = (e) => {
        console.log("onPrintChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.printCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedPrints(values);
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

    const onCollarChanged = (e) => {
        console.log("onCollarChanged()");
        // console.log(e.target);

        let values = []
        let checkedItems = document.querySelectorAll('.collarCheckbox:checked');
        // console.log("checkedItems = ", checkedItems);
        for (let item of checkedItems) {
            // console.log(item.value);
            values.push(item.value);
        }
        setSelectedCollars(values);
    }


    // 의상 종류 라디오버튼 선택 변경 이벤트 함수
    const onPartChanged = (e) => {
        console.log("onPartChaned()");
        console.log(e.target.value);
        setSelectedPart(e.target.value);
        // setCategoryTags(e.target.value);
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

    return (
        <main className='container'>
            <article>
                <header>
                    <hgroup>
                        <h1>패션 추천 시스템</h1>
                        <h3>Fashion Recommend System</h3>
                    </hgroup>
                    {/* <div className={style.divLogo}> */}
                    <div className="grid">
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/스트리트/1199046.jpg'} alt="logo0" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/로맨틱/47831.jpg'} alt="logo1" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/클래식/369406.jpg'} alt="logo2" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/모던/1325711.jpg'} alt="logo3" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/리조트/10.jpg'} alt="logo4" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/스포티/1266856.jpg'} alt="logo5" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/펑크/384851.jpg'} alt="logo6" />
                        <img className={style.images} src={process.env.PUBLIC_URL + '/images/samples/images/섹시/514328.jpg'} alt="logo7" />
                    </div>
                </header>

                <details open>
                    <summary><h4>의상 종류</h4></summary>
                    <div className={style.partCardMain}>
                        <div className={style.partTitle}><strong>추천을 받기 원하는 의상의 종류를 선택하세요.</strong></div>
                        <fieldset className={style.radioArea}>
                            {partTags}
                        </fieldset>
                    </div>
                </details>

                <FashionChecker summary="스타일" description=""
                    tags={styleTags} setTags={setStyleTags} />

                <FashionChecker summary="카테고리" description=""
                    tags={categoryTags} setTags={setCategoryTags} />

                <FashionChecker summary="핏" description=""
                    tags={fitTags} setTags={setFitTags} />

                <FashionChecker summary="기장" description=""
                    tags={lengthTags} setTags={setLengthTags} />

                <FashionChecker summary="소매 기장" description=""
                    tags={sleeveLengthTags} setTags={setSleeveLengthTags} />

                <FashionChecker summary="색상" description=""
                    tags={colorTags} setTags={setColorTags} />

                <FashionChecker summary="재질" description=""
                    tags={materialTags} setTags={setMaterialTags} />

                <FashionChecker summary="디테일" description=""
                    tags={detailTags} setTags={setDetailTags} />

                <FashionChecker summary="프린트" description=""
                    tags={printTags} setTags={setPrintTags} />

                <FashionChecker summary="넥 라인" description=""
                    tags={necklineTags} setTags={setNecklineTags} />

                <FashionChecker summary="카라" description=""
                    tags={collarTags} setTags={setCollarTags} />

            </article>

        </main>
    );
}
export default Fashion;