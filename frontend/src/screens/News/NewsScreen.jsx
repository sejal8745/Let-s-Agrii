import React from "react";
import { NewsContextProvider } from "./NewsContext";
import "./NewsScreen.css";
import News from "../../components/NewsFeed/News";
import Meta from "../../components/Helmet/Meta";
// import CHeader from "../../Components/CHeader/CHeader";

function NewsScreen() {
  return (
    <div className="daily">
      <NewsContextProvider>
        <Meta title="Let's Agrii | Feeds" />
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default NewsScreen;
