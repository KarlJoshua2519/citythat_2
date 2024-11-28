import React, { useState, useRef, useEffect } from 'react';
import chat from '../images/chat.png';
import close from '../images/close.png';

import botProfile from '../images/citythatlogo.png';

const ChatBot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I help you today?', type: 'bot' },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const chatBoxRef = useRef(null);
    const messagesEndRef = useRef(null); 

    const suggestions = ['What are your services?', 'Tell me about CityThat'];

    const handleSend = () => {
        if (input.trim() === '') return;

       
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: input, type: 'user' },
        ]);

      
        setInput('');

        setIsTyping(true);
        setTimeout(() => {
            let botResponse = 'I am not sure how to respond to that.';
            if (input.toLowerCase().includes('services')) {
                botResponse = (
                    <div>
                     <p>We offer: <br />
                        <strong>General Plumbing Maintenance</strong><br />
                        <strong>24/7 Emergency Plumbing Service</strong><br />
                        <strong>Plumbing Supplies and Equipment</strong><br />
                        </p>  
                    </div>
                );
            } else if (input.toLowerCase().includes('citythat')) {
                botResponse = 'CityThat is a global workforce network mobile application that serves, (as its target members), white-collar and blue-collar small businesses, self-employed individuals, and freelancers. CityThat’s ambition is to become an important daily outlet for all its members; with the goal of having its members remain active and relevant in the workforce and to have a sense that they are a part of a united and diverse workforce community.'; // Shortened for brevity
            }
            else if (input.toLowerCase().includes('location')) {
                botResponse = 'We are located at 12146 South St. C, Artesia, CA 90701'; // Shortened for brevity
            }

           


          
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse, type: 'bot' },
            ]);

            setIsTyping(false); 
        }, 1500); 
    };


    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        setInput(suggestion);
    };

    return (
        <div className="fixed bottom-0 right-0 lg:mb-4 sm:m-1 lg:m-0 lg:mr-4 z-40">
            {!isOpen && (
                <div
                    onClick={() => setIsOpen(true)}
                    className="bg-primary p-3 rounded-full cursor-pointer flex items-center opacity-70 hover:opacity-100 justify-center"
                    aria-label="Open chat"
                >
                    <img className="h-auto  w-[2.5em]" src={chat} alt="Chat icon" />
                </div>
            )}

            {isOpen && (
                <div>
                     <div className="flex rounded-t-lg justify-between bg-primary p-4 items-center">
                        <div className="flex items-center gap-4">
                            <img className="w-auto h-[3.5em]" src={botProfile} alt="" />
                        <h2 className="font-bold text-lg text-white">Chat with us</h2>
                        </div>
                        
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                            className="bg-transparent border-none cursor-pointer"
                        >
                            <img className="w-auto h-[1.8em]" src={close} alt="Close icon" />
                        </button>
                    </div>
                    <div
                    ref={chatBoxRef}
                    className="bg-white shadow-lg lg:w-[30em] p-4 transition-transform transform"
                    style={{ maxHeight: '70vh', overflowY: 'auto' }}
                >
                   

                    <div className="h-[20em] scrollbar-hide overflow-y-auto border border-gray-300 bg-gray-100 p-2 rounded-lg">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'bot' ? 'text-left flex items-start ' : 'text-right flex justify-end'}>
                            {msg.type === 'bot' && (
                                <img
                                    className="w-auto h-[2em] rounded-full mr-2"
                                    src={botProfile} 
                                    alt="Bot Profile"
                                />
                            )}
                                <p
                                    className={`p-2 mt-2 rounded-lg ${msg.type === 'bot' ? 'bg-white' : 'bg-primary text-white'} max-w-[90%] w-auto`}
                                >
                                    {typeof msg.text === 'string'
                                        ? msg.text.split('\n').map((line, lineIndex) => (
                                            <span key={lineIndex}>
                                                {line}
                                                <br />
                                            </span>
                                        ))
                                        : msg.text}
                                </p>
                            </div>
                        ))}

                     
                        {isTyping && (
                            <div className="text-left flex items-center space-x-2 mt-2">
                                <div className="bg-gray-200 rounded-full p-2">
                                    <div className="typing-dots">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                        )}


                        <div ref={messagesEndRef} />
                    </div>


                    <div className="mt-2 mb-4">
                        <h3 className="font-semibold">Suggestions:</h3>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-3 mt-2">
                        <input
                            type="text"
                            className="border border-gray-300 p-2 rounded-lg w-full"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={handleSend}
                            className="bg-black rounded-lg p-2"
                        >
                            <img className="w-auto h-[2em]" src={chat} alt="Send icon" />
                        </button>
                    </div>
                </div>
                </div>
                
            )}
        </div>
    );
};

export default ChatBot;
