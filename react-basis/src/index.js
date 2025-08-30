import { StrictMode } from "react";
import { createRoot } from "react-dom/client"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// アロー関数で記載する
const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </>
  ); 
}

// ワンラインナーでも記述可
// const App = () => <h1>こんにちは!</h1>;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

