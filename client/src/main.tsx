import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserProvider"; // 추가!

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        {" "}
        <App />
      </UserProvider>{" "}
    </BrowserRouter>
  </StrictMode>,
);
