import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Tooltip } from "./ui";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Tooltip.Provider>
            <App />
        </Tooltip.Provider>
    </StrictMode>
);
