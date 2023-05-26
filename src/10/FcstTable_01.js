import { useState, useEffect } from "react";

const FcstTable_01 = (prob) => {
    console.log("-- FcstTable()");

    useEffect(() => {
        console.log("-- useEffect()");

        getData(endPoint);
    }, []);

    const [items, setItems] = useState([]);
    // let items = [];

    const [itemTags, setItemTags] = useState();
    // let itemTags;

    let selKey = "";

    let date = prob.date;
    let nx = prob.nx;
    let ny = prob.ny;
    let category = prob.category;
    let endPoint = prob.endPoint;
    let dataCount = prob.dataCount;
    let baseTime = prob.baseTime;

    // console.log("items = " + items);
    // console.log("category = " + category);

    const categoryOptions = (
        Object.keys(category).map((key) => {
            // console.log(key);
            return (<option key={key} value={key}>{category[key]}</option>);
        })
    );

    const getData = (endPoint) => {
        console.log("-- getData()");

        // e.preventDefault();
        let pageNumber = 1;

        let paramServiceKey = "serviceKey=" + "w5403yLJi1Q07y%2FLm%2FxzrPgylV6j%2BJNtu45P%2BTyV1wWqwXaqPs%2FfuzR3lu4Ys1rUhMFnuk%2F6niREg%2FdR7TKnbg%3D%3D";
        // let paramServiceKey = "ServiceKey=" + "bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D";
        let paramPageNo = "pageNo=" + pageNumber;
        let paramNumOfRows = "numOfRows=" + dataCount;
        let paramType = "dataType=" + "JSON";
        let paramBaseDate = "base_date=" + date;
        let paramBaseTime = "base_time=" + baseTime;
        let paramNx = "nx=" + nx;
        let paramNy = "ny=" + ny;

        // https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&pageNo=1&numOfRows=1000&dataType=XML&base_date=20210628&base_time=0630&nx=55&ny=127
        // https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?ServiceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&pageNo=1&numOfRows=100&dataType=JSON&base_date=20230522&base_time=0000&nx=60&ny=127
        let url = endPoint +
            "?" + paramServiceKey + "&" + paramPageNo + "&" + paramNumOfRows + "&" + paramType
            + "&" + paramBaseDate + "&" + paramBaseTime + "&" + paramNx + "&" + paramNy;
        console.log("url = ", url);

        fetch(url)
            .then((resp) => resp.json())    // 처음 응답이 오면, json 으로 바꾼다.
            .then((data) => {   // json 으로 바뀐 데이터가 들어오면, 아래 코드 수행.
                console.log("data = ", data);
                setItems(data["response"]["body"]["items"]["item"]);
                // items = data["response"]["body"]["items"]["item"];
                console.log("data['response']['body']['items']['item'] = ", data["response"]["body"]["items"]["item"]);

                redrawTable(data["response"]["body"]["items"]["item"], Object.keys(category)[0]);
            });

    }

    const categoryChanged = (e) => {
        console.log("-- categoryChanged(e)");

        e.preventDefault();

        selKey = e.target.value;

        console.log("selKey = " + selKey);

        redrawTable(items, selKey);
    }

    function isNumeric(num) {
        return !isNaN(num)
    }

    const getFormatDate = (value) => {
        return value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
    }

    const getFormatTime = (value) => {
        return value.substring(0, 2) + ":" + value.substring(2, 4);
    }

    const getFormatValue = ((ctgr, value) => {
        let result = "";
        if (ctgr === "SKY") {
            switch (value) {
                case "1":
                    result = "🌞맑음";
                    break;
                case "3":
                    result = "☁구름많음";
                    break;
                case "4":
                    result = "⛅흐림";
                    break;
                default:
                    result = value;
                    break;
            }

        } else if (ctgr === "PTY") {
            switch (value) {
                case "0":
                    result = "🌞없음";
                    break;
                case "1":
                    result = "🌧비";
                    break;
                case "2":
                    result = "💧비/❄눈";
                    break;
                case "3":
                    result = "❄눈";
                    break;
                case "4":
                    result = "🌧소나기";
                    break;
                case "5":
                    result = "💧빗방울";
                    break;
                case "6":
                    result = "💧빗방울❄눈날림";
                    break;
                case "7":
                    result = "❄눈날림";
                    break;
                default:
                    result = value;
                    break;
            }

        } else {
            let unit = "";
            if ((category[ctgr].indexOf("(") > 0) && (isNumeric(value))) {
                let temp = category[ctgr].split("(");
                unit = temp[1].replace(")", "").trim();
                result = value + " " + unit;
            } else {
                result = value;
            }

        }

        return result;

    });

    const redrawTable = (items, selKey) => {
        console.log("-- redrawTable(selKey)");
        console.log("selKey = " + selKey);

        setItemTags(
            items.map((item) => {
                // console.log("item = " + item);
                if (item["category"] === selKey) {
                    return (
                        <tr key={item["category"] + item["fcstDate"] + item["fcstTime"]}>
                            <td>{category[item["category"]]}</td>
                            <td>{getFormatDate(item["fcstDate"])}</td>
                            <td>{getFormatTime(item["fcstTime"])}</td>
                            <td>{getFormatValue(item["category"], item["fcstValue"])}</td>
                        </tr>
                    );
                }
            })
        );

    }

    return (
        <article>
            <nav>
                <ul>
                    <li>
                        <h3>예보 결과</h3>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="sorting">항목</label>
                    </li>
                    <li>
                        <select id="category" defaultValue={Object.keys(category)[0]} onChange={(e) => categoryChanged(e)}>
                            {categoryOptions}
                        </select>
                    </li>
                </ul>
            </nav>

            <table>
                <thead>
                    <tr>
                        <th scope="col">항목명</th>
                        <th scope="col">예측일자</th>
                        <th scope="col">예측시간</th>
                        <th scope="col">예보값</th>
                    </tr>
                </thead>
                <tbody>
                    {itemTags}
                </tbody>
                <tfoot>
                    {/* <tr>
                        <th scope="col">#</th>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                        <td scope="col">Total</td>
                    </tr> */}
                </tfoot>
            </table>
        </article>
    );
}

export default FcstTable_01;