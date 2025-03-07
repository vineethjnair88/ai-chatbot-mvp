import logo from './logo.svg';
import './App.css';
import Chatbot from './components/ChatBot';

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>Bringing AI-Powered Assistance to Enfin Technologies!</h1>
        <p>Click the chat icon at the bottom right to start a conversation!</p>
      </div>
      <Chatbot/>
    </div>
  );
}

export default App;
