import { useState } from "react";

const FcstTable = (prob) => {
    console.log("-- FcstTable()");

    // const [itemTags, setItemTags] = useState();

    let items = prob.items;
    console.log("items = " + items);

    let itemTags = (
        items.map((item) => {
            return (
                <tr key={item["fcstDate"] + item["fcstTime"]}>
                    <td>강수확률</td>
                    <td>{item["fcstDate"]}</td>
                    <td>{item["fcstTime"]}</td>
                    <td>{item["fcstValue"]}</td>
                </tr>
            );
        })
    );

    return (
        <article>
            <header>FcstTable</header>

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

export default FcstTable;