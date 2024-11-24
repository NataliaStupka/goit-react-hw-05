//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "modern-normalize";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom"; //маршрутизатор
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <BrowserRouter>
    <App />

    {/* Сповіщення */}
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 2000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 4000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  </BrowserRouter>

  // </StrictMode>
);
