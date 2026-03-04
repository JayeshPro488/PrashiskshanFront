import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import InterviewConfig from './components/InterviewConfig'
import InterviewScreen from './components/InterviewScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/config" element={<InterviewConfig />} />
        <Route path="/interview" element={<InterviewScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
