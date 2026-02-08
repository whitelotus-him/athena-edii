import React, { useState } from 'react';
import Onboarding from './components/Onboarding';
import Processing from './components/Processing';
import Dashboard from './components/Dashboard';
import { OnboardingData, AiAnalysisResult } from './types';
import { generateBusinessPlan } from './services/geminiService';
import { LanguageProvider } from './contexts/LanguageContext';
import { DEMO_DATA } from './constants';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'onboarding' | 'processing' | 'dashboard'>('onboarding');
  const [data, setData] = useState<OnboardingData | null>(null);
  const [analysis, setAnalysis] = useState<AiAnalysisResult | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const handleOnboardingComplete = async (collectedData: OnboardingData) => {
    setData(collectedData);
    setCurrentView('processing');

    try {
      const resultPromise = generateBusinessPlan(collectedData);
      const delayPromise = new Promise(resolve => setTimeout(resolve, 3000)); 
      
      const [result] = await Promise.all([resultPromise, delayPromise]);
      
      setAnalysis(result);
      setCurrentView('dashboard');
    } catch (error) {
      console.error("Analysis failed", error);
      setCurrentView('onboarding'); 
    }
  };

  const handleStartDemo = async () => {
    setIsDemoMode(true);
    setData(DEMO_DATA as OnboardingData);
    // Fast forward processing for demo
    setCurrentView('processing');
    const result = await generateBusinessPlan(DEMO_DATA as OnboardingData);
    // Short artificial delay for smooth transition
    setTimeout(() => {
        setAnalysis(result);
        setCurrentView('dashboard');
    }, 1500);
  };

  const handleExitDemo = () => {
    setIsDemoMode(false);
    // Optional: Reset to onboarding or keep data but remove demo badge
    // For now, let's keep user on dashboard but remove demo constraints/guide
  };

  return (
    <div className="font-sans text-gray-900">
      {currentView === 'onboarding' && (
        <Onboarding 
          onComplete={handleOnboardingComplete}
          onStartDemo={handleStartDemo}
        />
      )}
      
      {currentView === 'processing' && (
        <Processing />
      )}
      
      {currentView === 'dashboard' && data && analysis && (
        <Dashboard 
          data={data}
          analysis={analysis}
          isDemoMode={isDemoMode}
          onStartDemo={handleStartDemo}
          onExitDemo={handleExitDemo}
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
