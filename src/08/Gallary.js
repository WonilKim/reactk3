import { useState, useEffect, useRef } from "react";
import style from './styles/Gallary.module.css';
import GallaryArticle from "./GallaryArticle";

const Gallary = () => {

    const txtRef = useRef();

    const [columnItemTags, setColumnItemTags] = useState();
    const [bottomItemTags, setBottomItemTags] = useState();
    const [navTags, setNavTags] = useState();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("handleKeyDown() enter");

            search(event);
        }
    };

    let dataCount = 10;
    let pageNumber = 1;
    let sorting = "A";
    let pageCount = 0;
    const navButtonCount = 3;

    const endPoint = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1";
    const search = (e) => {
        console.log("search()");

        e.preventDefault();

        if (txtRef.current.value === "") return;

        setColumnItemTags(<></>);
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
                pageCount = 0;
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

                let listColumnItem = [];
                let listLeftItem = [];
                let listRightItem = [];
                let listBottomItem = [];

                for (let i = 0; i < listItem.length; i++) {
                    console.log(" - ", listItem[i]["galTitle"]);

                    if (i % 2 === 0) {
                        // 데이터 인덱스가 짝수이면
                        if (i === listItem.length - 1) {
                            // 데이터가 마지막 인덱스이면 아래 배열에 삽입
                            listBottomItem.push(listItem[i]);
                        } else {
                            // 좌측 배열에 삽입
                            listLeftItem.push(listItem[i]);

                            // 컬럼 배열에 배열로 만들어 삽입
                            listColumnItem.push([listItem[i], listItem[i + 1]]);
                        }
                    } else {
                        // 우측 배열에 삽입
                        listRightItem.push(listItem[i]);
                    }
                }

                // console.log("* listColumnItem = ", listColumnItem);

                const setItemTags = (item) => {
                    return (
                        <div key={item["galTitle"]}>
                            <GallaryArticle item={item} />
                        </div>
                    );
                } // setItemTags

                setColumnItemTags(
                    listColumnItem.map((item) => {
                        let leftItem = item[0];
                        let rightItem = item[1];

                        // console.log(leftItem["galSearchKeyword"]);
                        // console.log(rightItem["galSearchKeyword"]);

                        return (
                            <div className="grid" key={leftItem["galTitle"]}>
                                <GallaryArticle item={leftItem} />
                                <GallaryArticle item={rightItem} />
                            </div>
                        );

                    }) // listColumnItem.map
                ); // setColumnItemTags

                setBottomItemTags(
                    listBottomItem.map((item) => setItemTags(item))
                );

                setNavTags(
                    pageArray.map((item) => {
                        if (item - pageNumber === - navButtonCount - 1) {
                            return (
                                <li key={item} className={style.navButton}>
                                    <button onClick={navFirstButtonClicked}>◀◀</button>
                                </li>
                            );
                        }
                        else if (item - pageNumber === - navButtonCount) {
                            return (
                                <li key={item} className={style.navButton}>
                                    <button onClick={navPreviousButtonClicked}>◀</button>
                                </li>
                            );
                        }
                        else if (Math.abs(item - pageNumber) < navButtonCount) {
                            return (
                                <li key={item} className={style.navButton}>
                                    <button className={item === pageNumber ? "contrast outline" : "outline"}
                                        onClick={navButtonClicked}>
                                        {item}
                                    </button>
                                </li>
                            );
                        }
                        else if (item - pageNumber === navButtonCount) {
                            return (
                                <li key={item} className={style.navButton}>
                                    <button onClick={navNextButtonClicked}>▶</button>
                                </li>
                            );
                        }
                        else if (item - pageNumber === navButtonCount + 1) {
                            return (
                                <li key={item} className={style.navButton}>
                                    <button onClick={navLastButtonClicked}>▶▶</button>
                                </li>
                            );
                        }

                    }) // pageArray.map
                ); // setNavTags

            })
            .catch((err) => {
                console.log("err = ", err);
                setBottomItemTags(<strong>검색 결과가 없습니다</strong>);
            }); // fetch(url)

    } // search()

    const reset = (e) => {
        console.log("reset()");

        e.preventDefault();

        setColumnItemTags(<></>);
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

    const navFirstButtonClicked = (e) => {
        console.log("navFirstButtonClicked()");

        e.preventDefault();

        // 
        pageNumber = 0;

        console.log("pageNumber = ", pageNumber);

        search(e);
    }

    const navPreviousButtonClicked = (e) => {
        console.log("navPreviousButtonClicked()");

        e.preventDefault();

        // 
        pageNumber -= navButtonCount;
        if (pageNumber < 1) {
            pageNumber = 1;
        }
        console.log("pageNumber = ", pageNumber);

        search(e);
    }

    const navNextButtonClicked = (e) => {
        console.log("navNextButtonClicked()");

        e.preventDefault();
        // 
        pageNumber += navButtonCount;
        if (pageNumber > pageCount) {
            pageNumber = pageCount;
        }
        console.log("pageNumber = ", pageNumber);

        search(e);
    }

    const navLastButtonClicked = (e) => {
        console.log("navLastButtonClicked()");

        e.preventDefault();
        // 
        pageNumber = pageCount;

        console.log("pageNumber = ", pageNumber);

        search(e);
    }

    useEffect(() => {
        txtRef.current.focus();
    }, []);

    const sortingChanged = (e) => {
        console.log("sortingChanged()");

        e.preventDefault();

        sorting = e.target.value;
        console.log("sorting = ", sorting);

        search(e);
    }


    return (
        <main className="container">
            <article>
                <header>
                    <h3>한국관광공사 관광사진 정보</h3>
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
                            </nav>
                        </div>
                    </form>
                </header>
                <div>
                    <nav className={style.nav}>
                        <ul>
                            {navTags}
                        </ul>
                    </nav>
                </div>
                <div className="grid">
                    <div>
                        {columnItemTags}
                    </div>
                </div>
                <div>
                    <div>
                        {bottomItemTags}
                    </div>
                </div>
                <footer>
                    <nav className={style.nav}>
                        <ul>
                            {navTags}
                        </ul>
                    </nav>
                </footer>
            </article>
        </main>

    );
}

export default Gallary;