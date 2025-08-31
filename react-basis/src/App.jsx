import { ColorfulMessage } from "./components/ColorfulMessage";

// アロー関数で記載する
export const App = () => {
  const onClickButton = () => alert();
  
  return (
    <>
      <h1 style={{color: "red"}}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      {console.log('hoge!')}
      <button onClick={onClickButton}>ボタン</button>
      {/* <button onClick={() => alert()}>ボタン</button> */}
    </>
  ); 
};
