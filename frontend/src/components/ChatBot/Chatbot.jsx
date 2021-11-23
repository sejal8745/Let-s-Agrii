import React, { useState } from 'react';
import SimpleForm from '../../screens/SimpleForm/Simpleform';
import styles from "./Chatbot.css";


const App = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

    return (
      <>
     
      <div className = "bot">
        <div style ={{display: showChat ? "" : "none"}}>
          <SimpleForm></SimpleForm>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
          {!showChat 
            ? <button className={styles.btn}  onClick={() => startChat()}>Chat </button> 
            : <button className={styles.btn} onClick={() => hideChat()}>Hide </button>}
      </div>      
      </>
    )
}

export default App;