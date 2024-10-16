// import logo from './logo.svg';
// import './output.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatBox from "./components/ChatBox";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/messages").then((response) => {
      setMessages(response.data);
    });
  }, []);

  const sendMessage = async (message) => {
    const newMessage = {
      text: message,
      sender: "You",
      time: new Date().toLocaleTimeString(),
    };

    await axios.post("http://localhost:5000/messages", newMessage);
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <ChatBox messages={messages} onSendMessage={sendMessage} />
    </div>
  );
}

export default App;
