import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Support from './pages/Support';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SpecifiedCommercial from './pages/SpecifiedCommercial';
import PatientEducation from './pages/PatientEducation';

function App() {
  const [language, setLanguage] = useState('ja'); // Default to Japanese

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 bg-noise">
        <Navbar language={language} setLanguage={setLanguage} />

        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/patient-education" element={<PatientEducation language={language} />} />
          <Route path="/support" element={<Support language={language} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
          <Route path="/terms-of-service" element={<TermsOfService language={language} />} />
          <Route path="/specified-commercial-transaction" element={<SpecifiedCommercial language={language} />} />
        </Routes>

        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
