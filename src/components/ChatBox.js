import React, { useState } from "react";

function ChatBox({ messages, onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-lg h-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "You"
                  ? "bg-green-400 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <div className="text-sm">{msg.text}</div>
              <div className="text-xs mt-1 text-right opacity-70">
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-3 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
