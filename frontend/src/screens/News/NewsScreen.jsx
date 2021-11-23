import React from "react";
import { NewsContextProvider } from "./NewsContext";
import "./NewsScreen.css";
import News from "../../components/NewsFeed/News";
// import CHeader from "../../Components/CHeader/CHeader";

function NewsScreen() {
  return (
    <div className="daily">
      <NewsContextProvider>
        {/* <CHeader heading="News" /> */}
        <div className="parallax">
          <h3 className="pa_text">Keep Yourself Updated!</h3>
        
        <div className="x">
          <News />
        </div> 
        </div>
      </NewsContextProvider>
    </div>
  );
}

export default NewsScreen;