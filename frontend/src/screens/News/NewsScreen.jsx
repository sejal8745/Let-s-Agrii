import React from "react";
import { NewsContextProvider } from "./NewsContext";
import "./NewsScreen.css";
import News from "../../components/NewsFeed/News";
// import CHeader from "../../Components/CHeader/CHeader";

function NewsScreen() {
  return (
    <div className="daily">
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default NewsScreen;
