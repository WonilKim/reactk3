import MyDivArticle from "./MyDivArticle";
import './MyDiv.css';   // 전역 스타일 (상위도 적용됨)

const MyDiv = () => {
    
    return (
        <main className="container">
            <h1>MyDiv</h1>
            {/* 만든 컴포넌트의 속성으로 전달된 값들이 MyDivArticle 함수의 파라미터로 들어감. */}
            <MyDivArticle />
            <MyDivArticle aname="MyDiv1" />
            <MyDivArticle aname="MyDiv2" />
        </main>
    );
}

export default MyDiv;
// export 가 있어야 App.js 에서 import 할 수 있다.