// hooksをimportする
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// アロー関数で記載する
export const App = () => {
  console.log("---App---");
  // Stateの定義
  // hooksは一番上の階層でしか使用できない
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    // 現在のStateの値を基に更新したい場合は関数を使用
    setNum((prev) => prev + 1);
    // setNum((prev) => prev + 1);
    // 裏でバッチ処理が走っているので、すぐには更新されない
    // setNum(num + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  // useEffect: []を使用すると初期マウント時とnumに変更があった場合にのみしか実行されなくなる。処理の関心を切り分けることができる
  // numにしか関心を持せなくする。
  // 公式がuseEffectを使わなくていいようにコードを書いていくように言っているので、使い所には注意
  useEffect(() => {
    if (num > 0) {
      // Too many re-renders. を回避する
      if (num % 3 === 0) {
        // truthyの場合は左側のみしか評価しない
        isShowFace || setIsShowFace(true)
      } else {
        // truthyの場合は右側も評価する
        isShowFace && setIsShowFace(false)
      };    
    };
  }, [num]); 

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      {/* {console.log('hoge!')} */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      {/* <button onClick={() => alert()}>ボタン</button> */}
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>Σ('◉⌓◉’)</p>}
    </>
  ); 
};

//**
// 【再レンダリング】
// Stateの変更をReactが検知して、再レンダリングを実施している
// React18の仕様で、StrictModeかつ開発時のみコンポーネントが2回レンダリングされる
// レンダリング: 画面に要素を表示すること
// 
// 【再レンダリングが実行されるケース】
// 1.コンポーネントのStateが変更された場合
// 2.propsを受け取っているコンポーネントで、propsの値が変更になった場合
// 3.親のコンポーネントが再レンダリングされた場合
//  */
