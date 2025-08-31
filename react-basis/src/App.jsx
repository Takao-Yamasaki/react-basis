// hooksをimportする
import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// アロー関数で記載する
export const App = () => {
  // Stateの定義
  // hooksは一番上の階層でしか使用できない
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    // 現在のStateの値を基に更新したい場合は関数を使用
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    // 裏でバッチ処理が走っているので、すぐには更新されない
    // setNum(num + 1);
  };

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      {/* {console.log('hoge!')} */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      {/* <button onClick={() => alert()}>ボタン</button> */}
      <p>{num}</p>
    </>
  ); 
};
