import userEvent from "@testing-library/user-event";
import { useState, useEffect, useRef } from "react";
import style from './styles/Gallary.module.css';

const Gallary = () => {

    const txtRef = useRef();

    const [itemTags, setItemTags] = useState();

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

                setItemTags(
                    listItem.map((item) => {
                        return (
                            <div>
                                <div key={item["galTitle"]}>{item["galTitle"]}</div>
                                <img className={style.images} src={item["galWebImageUrl"]} alt={item["galTitle"]} />
                            </div>
                        );
                    })
                );

            })
            .catch((err) => {
                console.log("err = ", err);
            });


        // reset input
        txtRef.current.value = "";
    }

    const reset = (e) => {
        console.log("reset()");

        e.preventDefault();

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
                <div>
                    <div>
                        {itemTags}
                    </div>
                </div>
            </article>
        </main>

    );
}

export default Gallary;