"use client";

import { Settings, Rocket, HelpCircle, List, Lock, Play, ArrowUp, SlidersHorizontal } from 'lucide-react';

// Assuming you have Shadcn UI set up and these components are available
// You would typically generate these using the Shadcn CLI:
// npx shadcn-ui@latest add button
// npx shadcn-ui@latest add input
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

// Main Copilot Component
const CopilotUI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Details' | 'Copilot'>('Copilot');
  const [inputValue, setInputValue] = useState('');

  const features = [
    {
      icon: <Rocket size={20} className="text-blue-500" />,
      text: "Copilot can find answers to customer queries by searching your team's support content and past conversations.",
    },
    {
      icon: <HelpCircle size={20} className="text-blue-500" />,
      text: "It can help you figure out what to do, using your team's internal articles.",
    },
    {
      icon: <List size={20} className="text-blue-500" />,
      text: "All it needs is knowledge. The more content you give, the more expert Copilot becomes.",
    },
    {
      icon: <Lock size={20} className="text-gray-500" />, // Adjusted icon color for visual distinction
      text: "Copilot conversations are only visible to you.",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-md mx-auto bg-white shadow-xl rounded-lg font-sans h-[calc(100vh-40px)] sm:h-auto sm:max-h-[700px] my-5">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex space-x-4">
          {['Details', 'Copilot'].map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName as 'Details' | 'Copilot')}
              className={`pb-2 text-sm font-medium transition-colors
                ${activeTab === tabName
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tabName}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings size={20} className="text-gray-600" />
          </Button>
          {/* Icon for View Mode - using a Lucide icon as a placeholder */}
          <Button variant="ghost" size="icon" aria-label="View Mode">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 lucide lucide-app-window"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>
          </Button>
        </div>
      </header>

      {/* Content Area - Only shown if Copilot tab is active */}
      {activeTab === 'Copilot' && (
        <main className="flex-grow p-6 space-y-6 overflow-y-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800">Copilot is here to help.</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Just ask.</h2>
          </div>

          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1 bg-blue-100/50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.text}</p>
              </li>
            ))}
          </ul>

          <div className="flex justify-center pt-4">
            <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300">
              <Play size={18} className="mr-2" />
              Copilot explained
            </Button>
          </div>
        </main>
      )}

      {/* Placeholder for Details Tab Content */}
      {activeTab === 'Details' && (
        <div className="flex-grow p-6">
          <p className="text-gray-700">Details content would go here.</p>
          {/* You can add more detailed content for the "Details" tab here */}
        </div>
      )}


      {/* Input Area - Only shown if Copilot tab is active */}
      {activeTab === 'Copilot' && (
        <footer className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-2 bg-white border border-input rounded-lg p-1 focus-within:ring-2 focus-within:ring-ring focus-within:border-primary">
            <Input
              type="text"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              // Shadcn Input component often doesn't need these specific override classes
              // as its base style is usually sufficient. Adjust if needed.
              className="flex-grow border-0 ring-0 outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-2.5"
            />
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" aria-label="Filter options">
              <SlidersHorizontal size={20} />
            </Button>
            <Button variant="default" size="icon" aria-label="Send message"> {/* Shadcn default variant will use your primary color */}
              <ArrowUp size={20} />
            </Button>
          </div>
        </footer>
      )}
    </div>
  );
};

// Default export for the App component
// In a real application, you would integrate CopilotUI into your main App.
export default function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 font-sans">
      {/*
        The CopilotUI component is designed to fill its parent.
        The surrounding div provides context for layout and background color.
        Ensure your Tailwind CSS setup includes the Shadcn UI theme variables for colors
        (e.g., --background, --primary, --muted-foreground, --input, --ring).
      */}
      <CopilotUI />
    </div>
  );
}

// To use this in your project:
// 1. Ensure you have React, TypeScript, and Tailwind CSS setup.
// 2. Install lucide-react: `npm install lucide-react` or `yarn add lucide-react`.
// 3. Install Shadcn UI and add the Button and Input components:
//    - Follow Shadcn UI installation guide: https://ui.shadcn.com/docs/installation
//    - Add components: `npx shadcn-ui@latest add button`
//                      `npx shadcn-ui@latest add input`
// 4. Make sure your tailwind.config.js is set up according to Shadcn UI documentation
//    to scan your component files and include its theme presets/plugins.
// 5. Ensure your global CSS file (e.g., globals.css or index.css) defines the
//    CSS variables used by Shadcn UI (e.g., --background, --foreground, --primary, etc.).
//    The Shadcn CLI usually handles this during setup.
