import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Customer Support AI</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/history">Past Conversations</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
