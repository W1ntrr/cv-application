import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeBuilderPage from './pages/ResumeBuilderPage';
import WelcomePage from './pages/WelcomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/resumeBuilder" element={<ResumeBuilderPage />} />
      </Routes>
    </Router>
  );
}
