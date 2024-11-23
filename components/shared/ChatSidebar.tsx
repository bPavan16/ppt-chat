'use client'

import React, { useState } from 'react';

const ChatSidebar = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, `User: ${input}`]);
            setInput('');
            generateReply(input);
        }
    };

    const generateReply = (message: string) => {
        // Simulate a reply from the bot
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, `ChatBot: ${message}`]);
        }, 1000);
    };

    return (
        <div className="flex min-h-full w-[37%] flex-col bg-gray-800 p-4 text-white relative">

            <h2 className="mb-4 text-xl font-bold">Chat</h2>

            <div className="mb-9 max-h-[calc(100vh-100px)] flex-1 overflow-y-scroll pb-4 px-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 ${msg.startsWith('ChatBot:') ? 'bg-green-400 text-black' : 'bg-blue-500 text-white'} rounded p-2`}
                    >
                        {msg}
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full rounded bg-gray-700 p-2 text-white"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage} className="mt-2 w-full rounded bg-blue-500 p-2">
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatSidebar;