import { StrictMode } from "react";
import { createRoot } from "react-dom/client"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// ワンラインナーでも記述可
// const App = () => <h1>こんにちは!</h1>;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

