import userEvent from "@testing-library/user-event";
import { useState, useEffect, useRef } from "react";
import style from './styles/Gallary.module.css';

const Gallary = () => {

    const txtRef = useRef();

    const [leftItemTags, setLeftItemTags] = useState();
    const [rightItemTags, setRightItemTags] = useState();
    const [bottomItemTags, setBottomItemTags] = useState();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("handleKeyDown() enter");
            // 👇 Get input value
            //setOutput();
        }
    };

    let dataCount = 10;
    let pageNumber = 1;
    let arrangeList = ['A', 'B', 'C'];

    const endPoint = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1";
    let numOfRows = "numOfRows=" + dataCount;
    let pageNo = "pageNo=" + pageNumber;
    let MobileOS = "MobileOS=" + "ETC";
    let MobileApp = "MobileApp=" + "AppTest";
    let arrange = "arrange=" + arrangeList[0];
    let keyword = "keyword=";
    let _type = "_type=" + "json";
    let serviceKey = "serviceKey=" + "bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D";

    const search = (e) => {
        console.log("search()");

        e.preventDefault();

        if (txtRef.current.value === "") return;

        setLeftItemTags(<></>);
        setRightItemTags(<></>);
        setBottomItemTags(<strong>검색 중 입니다</strong>);


        console.log("txtRef.current.value = ", txtRef.current.value);

        let incodedKeyword = encodeURI(txtRef.current.value);
        console.log("incodedKeyword = ", incodedKeyword);

        // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
        // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
        // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%9E%90%EA%B0%88%EC%B9%98&_type=json
        // url
        let url = endPoint +
            "?" + serviceKey + "&" + numOfRows + "&" + pageNo + "&" + MobileOS + "&" + MobileApp +
            "&" + arrange + "&" + keyword + incodedKeyword + "&" + _type;
        console.log("url = ", url);

        fetch(url)
            .then((resp) => resp.json())    // 처음 응답이 오면, json 으로 바꾼다.
            .then((data) => {   // json 으로 바뀐 데이터가 들어오면, 아래 코드 수행.
                console.log("data = ", data);
                console.log("data[response][body][items][item] = ", data["response"]["body"]["items"]["item"]);

                let listItem = data["response"]["body"]["items"]["item"];

                for (let item of listItem) {
                    console.log(item["galTitle"]);
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

                setLeftItemTags(
                    listLeftItem.map((item) => {
                        return (
                            <article key={item["galTitle"]}>
                                <hgroup>
                                    <h4>{item["galTitle"]}</h4>
                                    <h5>{item["galPhotographyLocation"]}</h5>
                                </hgroup>
                                <img className={style.images} src={item["galWebImageUrl"]} alt={item["galTitle"]} />
                                <div>
                                    <div>
                                        {item["galSearchKeyword"].split(",").map((searchKey) => {
                                            return (
                                                <span key={searchKey} className={style.output}>{searchKey}</span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </article>
                        );
                    })
                );

                setRightItemTags(
                    listRightItem.map((item) => {
                        return (
                            <article key={item["galTitle"]}>
                                <hgroup>
                                    <h4>{item["galTitle"]}</h4>
                                    <h5>{item["galPhotographyLocation"]}</h5>
                                </hgroup>
                                <img className={style.images} src={item["galWebImageUrl"]} alt={item["galTitle"]} />
                                <div>
                                    <div>
                                        {item["galSearchKeyword"].split(",").map((searchKey) => {
                                            return (
                                                <span key={searchKey} className={style.output}>{searchKey}</span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </article>
                        );
                    })
                );

                setBottomItemTags(
                    listBottomItem.map((item) => {
                        return (
                            <article key={item["galTitle"]}>
                                <hgroup>
                                    <h4>{item["galTitle"]}</h4>
                                    <h5>{item["galPhotographyLocation"]}</h5>
                                </hgroup>
                                <img className={style.images} src={item["galWebImageUrl"]} alt={item["galTitle"]} />
                                <div>
                                    <div>
                                        {item["galSearchKeyword"].split(",").map((searchKey) => {
                                            return (
                                                <span key={searchKey} className={style.output}>{searchKey}</span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </article>
                        );
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

        // reset input
        txtRef.current.value = "";

    }

    useEffect(() => {
        txtRef.current.focus();
    }, []);


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
            </article>
        </main>

    );
}

export default Gallary;