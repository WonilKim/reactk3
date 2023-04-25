const MyDivArticle = (probs) => {
    // 컴포넌트를 사용하는 부분의 태그의 속성이 probs 파라미터로 전달됨.

    return (
        <article>
            {/* probs.태그 속성 이름 */}
            <header><h1>{probs.aname}</h1></header>
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </article>
    );
}

export default MyDivArticle;
// export 가 있어야 App.js 에서 import 할 수 있다.