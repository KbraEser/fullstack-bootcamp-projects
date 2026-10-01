import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './App.css';
import { Chatbot } from './components/Chatbot';
import User from './components/User';

function App() {
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([
    { role: 'model', text: 'Hello! What would you like to learn today?' },
  ]);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  async function handleChat(event) {
    event.preventDefault();
    if (!userInput.trim()) return;

    const currentInput = userInput;
    setHistory((prev) => [...prev, { role: 'user', text: currentInput }]);
    setUserInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-3-flash-preview',
      });

      const result = await model.generateContent(currentInput);
      const response = await result.response;
      const text = response.text();

      setHistory((prev) => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error('Hata oluştu:', error);
      setHistory((prev) => [
        ...prev,
        { role: 'model', text: 'Üzgünüm, bir hata oluştu.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <div className=" bottom-[calc(4rem+1.5rem)] right-0 m-auto bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">
        {/* Heaading */}
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">Gemini-Sohbet AI ChatBot</h2>
          <p className="text-sm text-[#6b7280] leading-3">Powered by Wit1225</p>
        </div>

        {/* Chat container */}
        <div
          className="pr-4 h-[474px]"
          style={{ minWidth: '100%', display: 'table' }}
        >
          <div className="max-h-[454px] overflow-auto">
            {history.map((item, index) =>
              item.role === 'user' ? (
                <User key={index} text={item.text} />
              ) : (
                <Chatbot key={index} text={item.text} />
              )
            )}
          </div>
        </div>
        {/*input box */}
        <div className="flex items-center pt-0">
          <form className="flex items-center justify-center w-full space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Message Gemini"
              value={userInput}
              onChange={handleChange}
            />
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
              onClick={handleChat}
            >
              {isLoading ? 'Generating..' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
