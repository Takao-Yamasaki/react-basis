// import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
// 拡張子は省略できる。定義している名前と同じ名前でインポートする
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// ワンラインナーでも記述可
// const App = () => <h1>こんにちは!</h1>;

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
);

