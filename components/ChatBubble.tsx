
import React from 'react';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isModel = message.role === 'model';

  // Basic function to render text with markdown links
  const renderContent = (text: string) => {
    // Splits text by markdown link pattern [text](url)
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline font-semibold hover:opacity-80 transition-opacity ${
              isModel ? 'text-blue-700' : 'text-orange-100'
            }`}
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex w-full mb-4 ${isModel ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[85%] sm:max-w-[75%] ${isModel ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold
          ${isModel ? 'bg-[#003366] mr-3' : 'bg-orange-500 ml-3'}`}>
          {isModel ? 'AI' : 'U'}
        </div>
        <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed whitespace-pre-wrap
          ${isModel 
            ? 'bg-white border border-gray-100 text-gray-800' 
            : 'bg-[#003366] text-white'}`}>
          <div className="break-words">
            {renderContent(message.text)}
          </div>
          <div className={`text-[10px] mt-2 opacity-50 ${isModel ? 'text-gray-500' : 'text-gray-200'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
