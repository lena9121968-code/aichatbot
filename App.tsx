
// Added missing React imports for hooks and component definition
import React, { useState, useEffect, useRef } from 'react';
import { Message } from './types';
import { geminiService } from './services/geminiService';
import ChatBubble from './components/ChatBubble';
import QuickAction from './components/QuickAction';
import { QUICK_PROMPTS, DOCUMENT_TEMPLATES } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Xin chào! Tôi là Trợ lý AI của Phòng Hành chính - Nhân sự COFER. Tôi có thể giúp gì cho Thầy/Cô về các quy trình, biểu mẫu hoặc chế độ chính sách nhà trường?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const modelMessageId = (Date.now() + 1).toString();
      let accumulatedResponse = '';

      setMessages(prev => [...prev, {
        id: modelMessageId,
        role: 'model',
        text: '',
        timestamp: new Date()
      }]);

      const stream = geminiService.sendMessageStream(history, text);
      
      for await (const chunk of stream) {
        accumulatedResponse += chunk;
        setMessages(prev => prev.map(m => 
          m.id === modelMessageId ? { ...m, text: accumulatedResponse } : m
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: 'error-' + Date.now(),
        role: 'model',
        text: 'Hiện tại tôi chưa có thông tin chính xác về vấn này. Anh/Chị vui lòng liên hệ trực tiếp phòng Hành chính - Nhân sự tại tầng Trệt A.001 hoặc A.002.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = Array.from(new Set(DOCUMENT_TEMPLATES.map(t => t.category)));

  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden relative">
      {/* Header with Solid COFER Blue Background */}
      <header className="bg-[#003366] text-white px-6 py-4 shadow-2xl flex items-center justify-between z-40 shrink-0 border-b-2 border-white/10 transition-all duration-500">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-500 shrink-0 border-2 border-blue-200">
            <span className="text-[#003366] font-black text-3xl tracking-tighter">CF</span>
          </div>
          <div>
            <h1 className="font-black text-2xl leading-none tracking-tight">COFER Assistant</h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-orange-400 font-black mt-1.5 opacity-100">Cổng thông tin phòng Hành chính Nhân sự</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-3 bg-[#FF9900] text-white hover:brightness-110 transition-all px-6 py-3.5 rounded-2xl text-sm font-black border border-orange-300 shadow-xl active:scale-95 uppercase tracking-wider"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <span className="hidden md:inline">Kho Biểu mẫu</span>
            <span className="md:hidden">MẪU</span>
          </button>
        </div>
      </header>

      {/* Main Chat Area */}
      <main ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-1 space-y-6 bg-slate-50 scroll-smooth">
        <div className="flex flex-col w-full max-w-5xl mx-auto pb-10">
          {messages.map((m) => (
            <ChatBubble key={m.id} message={m} />
          ))}
          {isLoading && !messages[messages.length-1]?.text && (
            <div className="flex space-x-2 p-6 bg-white border-4 border-slate-100 rounded-[2.5rem] w-32 justify-center shadow-xl animate-pulse mb-8">
              <div className="w-3.5 h-3.5 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-3.5 h-3.5 bg-[#003366] rounded-full animate-bounce delay-150"></div>
              <div className="w-3.5 h-3.5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
            </div>
          )}
        </div>
      </main>

      {/* Quick Suggestions */}
      <div className="bg-white border-t border-slate-100 shrink-0 py-6">
        <div className="max-w-5xl mx-auto px-6 flex space-x-4 overflow-x-auto no-scrollbar">
          {QUICK_PROMPTS.map((prompt) => (
            <QuickAction key={prompt} label={prompt} onClick={(val) => handleSend(val)} />
          ))}
        </div>
      </div>

      {/* Input Area */}
      <footer className="p-6 md:p-8 bg-white border-t border-slate-100 shadow-[0_-25px_50px_rgba(0,0,0,0.04)] shrink-0">
        <div className="max-w-5xl mx-auto flex items-center space-x-5">
          <div className="flex-1 relative group">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder="Thầy/Cô hãy nhập yêu cầu cần hỗ trợ..."
              className="w-full pl-8 pr-6 py-2 bg-slate-50 border-4 border-slate-200 focus:border-[#003366] focus:bg-white rounded-[2.5rem] transition-all duration-300 resize-none text-lg outline-none font-bold shadow-inner placeholder:text-slate-400"
            />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="p-4 bg-[#003366] text-white rounded-[2.5rem] hover:bg-blue-800 disabled:opacity-40 transition-all shadow-2xl active:scale-95 hover:shadow-blue-900/40"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
        <div className="max-w-2xl mx-auto mt-1 text-center">
           <div className="text-[12px] text-slate-400 font-black uppercase tracking-[0.2em] opacity-100">
            Hệ thống hỗ trợ nghiệp vụ Phòng Hành chính - Nhân sự. 
          </div>
          <div className="text-[8px] text-slate-400 font-black uppercase tracking-[0.2em] opacity-100">
            Copyright © HR COFER. All rights reserved.
          </div>
        </div>
      </footer>
      {/* Full-Screen Documents Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 bg-slate-900/95 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white w-full h-full md:h-[94vh] md:w-[96vw] md:rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-in zoom-in-95">
            {/* Modal Header with Solid Background */}
            <div className="px-8 py-6 bg-[#003366] text-white flex justify-between items-center shrink-0 shadow-lg relative">
              <div className="flex items-center space-x-6">
                <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-widest uppercase leading-none">Kho biểu mẫu phòng Hành chính - Nhân sự</h2>
                  <p className="text-orange-400 text-[10px] font-black tracking-[0.3em] mt-2 uppercase">Dữ liệu chuẩn Unicode</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all active:scale-90 border border-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 bg-slate-50 scroll-smooth">
              {categories.map(category => (
                <div key={category} className="space-y-6">
                  <div className="flex items-center space-x-4 border-l-8 border-[#FF9900] pl-4">
                    <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-widest">{category}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DOCUMENT_TEMPLATES.filter(t => t.category === category).map(template => (
                      <div key={template.id} className="group bg-white p-5 rounded-[1.25rem] border-4 border-slate-300 hover:border-[#003366] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full shadow-md">
                        {template.isNew && (
                          <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF9900] text-white text-[8px] font-black rounded-bl-lg shadow-md z-10 animate-pulse tracking-widest">
                            MỚI
                          </div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className="shrink-0 p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-blue-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#003366]">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-black text-[13px] md:text-sm text-slate-800 mb-1 leading-tight uppercase tracking-widest group-hover:text-[#003366] line-clamp-2">{template.name}</h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed font-bold opacity-75 line-clamp-2 italic">{template.description}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t-2 border-slate-100 pt-3">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">HCNS COFER</span>
                          <a 
                            href={template.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#003366] text-white rounded-lg text-[10px] font-black hover:bg-[#FF9900] transition-all shadow-md active:scale-95 group/btn uppercase tracking-widest"
                          >
                            <span>TẢI TẠI ĐÂY</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 bg-white border-t border-slate-100 text-center shrink-0">
              <p className="text-[11px] text-slate-500 font-black tracking-[0.3em] uppercase opacity-60">© PHÒNG HCNS - COFER</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
