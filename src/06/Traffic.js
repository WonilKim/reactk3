import style from "./styles/Traffic.module.css";

const ctgr = [
    "차대사람 : 횡단중",
    "차대사람 : 차도통행중",
    "차대사람 : 길가장자리구역통행중",
    "차대사람 : 보도통행중",
    "차대사람 : 기타",
    "차대차 : 정면충돌",
    "차대차 : 측면충돌",
    "차대차 : 후진중충돌",
    "차대차 : 추돌",
    "차대차 : 기타",
    "차량단독 : 전도",
    "차량단독 : 전복",
    "차량단독 : 공작물충돌",
    "차량단독 : 주/정차차량 충돌",
    "차량단독 : 도로이탈",
    "차량단독 : 도로이탈",
    "차량단독 : 기타",
    "철길건널목 : 철길건널목"
]

const Traffic = () => {

    let temp0 = [];
    let temp1 = [];
    temp1 = ctgr.map((item) => {
        temp0.push(item.split(":")[0].trim());
        return item.split(":")[1].trim();
    });

    console.log(temp0);
    console.log(temp1);

    return (
        <main className="container">
            <article>
                <header><h1>사고유형별 교통사고 통계</h1></header>

                <div className={style.total}>
                    <div className={style.rows}>
                        <div><h5>교통사고 대분류</h5></div>
                        <div className={style.buttons}>bt</div>
                    </div>
                    <div className={style.rows}>
                        <div><h5>교통사고 중분류</h5></div>
                        <div className={style.buttons}>bt</div>
                    </div>
                    <div>

                    </div>

                </div>

                <footer>

                </footer>
            </article>
        </main>

    );
}

export default Traffic;