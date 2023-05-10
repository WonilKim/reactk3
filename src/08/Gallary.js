import userEvent from "@testing-library/user-event";
import { useState, useEffect, useRef } from "react";
import style from './styles/Gallary.module.css';

const Gallary = () => {

    const txtRef = useRef();

    const [leftItemTags, setLeftItemTags] = useState();
    const [rightItemTags, setRightItemTags] = useState();
    const [bottomItemTags, setBottomItemTags] = useState();
    const [navTags, setNavTags] = useState();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("handleKeyDown() enter");
            // 👇 Get input value
            //setOutput();
        }
    };

    let dataCount = 10;
    let pageNumber = 1;
    let sorting = "A";

    const endPoint = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1";
    const search = (e) => {
        console.log("search()");

        e.preventDefault();

        if (txtRef.current.value === "") return;

        setLeftItemTags(<></>);
        setRightItemTags(<></>);
        setBottomItemTags(<strong>검색 중 입니다</strong>);
        setNavTags(<></>);

        let paramNumOfRows = "numOfRows=" + dataCount;
        let paramPageNo = "pageNo=" + pageNumber;
        let paramMobileOS = "MobileOS=" + "ETC";
        let paramMobileApp = "MobileApp=" + "AppTest";
        let paramArrange = "arrange=" + sorting;
        let paramKeyword = "keyword=";
        let paramType = "_type=" + "json";
        let paramServiceKey = "serviceKey=" + "bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D";

        console.log("txtRef.current.value = ", txtRef.current.value);

        let incodedKeyword = encodeURI(txtRef.current.value);
        console.log("incodedKeyword = ", incodedKeyword);

        // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
        // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
        // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
        // url
        let url = endPoint +
            "?" + paramServiceKey + "&" + paramNumOfRows + "&" + paramPageNo + "&" + paramMobileOS + "&" + paramMobileApp +
            "&" + paramArrange + "&" + paramKeyword + incodedKeyword + "&" + paramType;
        console.log("url = ", url);

        fetch(url)
            .then((resp) => resp.json())    // 처음 응답이 오면, json 으로 바꾼다.
            .then((data) => {   // json 으로 바뀐 데이터가 들어오면, 아래 코드 수행.
                console.log("data = ", data);
                console.log("data[response][body][items][item] = ", data["response"]["body"]["items"]["item"]);

                let listItem = data["response"]["body"]["items"]["item"];

                // for (let item of listItem) {
                //     console.log(item["galTitle"]);
                // }

                let totalCount = data["response"]["body"]["totalCount"];
                let pageCount = 0;
                if (totalCount % 10 > 0) {
                    pageCount = Math.floor(totalCount / 10) + 1;
                } else {
                    pageCount = Math.floor(totalCount / 10);
                }
                let pageArray = [];

                console.log("totalCount = ", totalCount);
                console.log("pageCount = ", pageCount);
                for (let i = 0; i < pageCount; i++) {
                    pageArray.push(i + 1);
                }


                let listLeftItem = [];
                let listRightItem = [];
                let listBottomItem = [];

                for (let i = 0; i < listItem.length; i++) {
                    console.log(" - ", listItem[i]["galTitle"]);

                    if (i % 2 === 0) {
                        if (i === listItem.length - 1) {
                            listBottomItem.push(listItem[i]);

                        } else {
                            listLeftItem.push(listItem[i]);

                        }
                    } else {
                        listRightItem.push(listItem[i]);
                    }
                }

                const setItemTags = (item) => {
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
                            <hgroup>
                                <h4>{item["galTitle"]}</h4>
                                <h5>{item["galPhotographyLocation"]}</h5>
                            </hgroup>
                            <img className={style.images} src={item["galWebImageUrl"]} alt={item["galTitle"]} />
                            <div>
                                <div>
                                    {arrayKeyword.map((searchKey) => {
                                        return (
                                            <span key={searchKey} className={style.output}>{searchKey}</span>
                                        );
                                    })}
                                </div>
                            </div>
                        </article>
                    );
                }

                // 
                setLeftItemTags(
                    listLeftItem.map((item) => setItemTags(item))
                );

                setRightItemTags(
                    listRightItem.map((item) => setItemTags(item))
                );

                setBottomItemTags(
                    listBottomItem.map((item) => setItemTags(item))
                );

                setNavTags(
                    pageArray.map((item) => {
                        if (Math.abs(item - pageNumber) < 4) {
                            return (
                                <li key={item} className={style.navButton}>
                                    <button className={item === pageNumber ? "contrast outline" : "outline"}
                                        onClick={navButtonClicked}>
                                        {item}
                                    </button>
                                </li>
                            );
                        }

                    })
                );

            })
            .catch((err) => {
                console.log("err = ", err);
                setBottomItemTags(<strong>검색 결과가 없습니다</strong>);
            });

        // // reset input
        // txtRef.current.value = "";
    }

    const reset = (e) => {
        console.log("reset()");

        e.preventDefault();

        setLeftItemTags(<></>);
        setRightItemTags(<></>);
        setBottomItemTags(<></>);
        setNavTags(<></>);

        // reset input
        txtRef.current.value = "";

    }

    const navButtonClicked = (e) => {
        console.log("navButtonClicked()");

        e.preventDefault();

        pageNumber = Number(e.target.innerHTML);
        console.log("pageNumber = ", pageNumber);

        search(e);
    }

    useEffect(() => {
        txtRef.current.focus();
    }, []);

    const sortingChanged = (e) => {
        console.log("sortingChanged()");

        sorting = e.target.value;
        console.log("sorting = ", sorting);

        search(e);
    }


    return (
        <main className="container">
            <article>
                <header>
                    <h3>한국관광공사 관광사진 정보</h3>
                </header>
                <form>
                    <div className="grid">
                        <div>
                            <input ref={txtRef} type="text" id="txt1" name="txt1" onKeyDown={handleKeyDown} placeholder="키워드를 입력하세요." />
                            {/* 컴포넌트를 제어하려면 useRef 변수를 ref 속성으로 지정해 줘야 한다 */}
                        </div>
                        <div className="grid">
                            <button onClick={(e) => search(e)}>검색</button>
                            <button onClick={(e) => reset(e)}>리셋</button>
                        </div>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <select id="sorting" defaultValue="A" onChange={sortingChanged}>
                                        <option value="A">촬영일</option>
                                        <option value="B">제목</option>
                                        <option value="C">수정일</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="sorting">순서 정렬</label>
                                </li>
                            </ul>
                            <ul>
                                {navTags}
                            </ul>

                        </nav>
                    </div>
                </form>
                <div className="grid">
                    <div>
                        {leftItemTags}
                    </div>
                    <div>
                        {rightItemTags}
                    </div>
                </div>
                <div>
                    <div>
                        {bottomItemTags}
                    </div>
                </div>
                <footer>
                    <nav>
                        <ul>
                            ◀
                        </ul>
                        <ul>
                            {navTags}
                        </ul>
                        <ul>
                            ▶
                        </ul>
                    </nav>
                </footer>
            </article>
        </main>

    );
}

export default Gallary;