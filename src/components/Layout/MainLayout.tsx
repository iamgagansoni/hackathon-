import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  showSnapshot: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showSnapshot }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="relative z-10 p-6">
        <div className={`max-w-7xl mx-auto ${
          showSnapshot 
            ? 'grid grid-cols-1 xl:grid-cols-2 gap-8' 
            : 'flex justify-center'
        } transition-all duration-700 ease-in-out`}>
          {children}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-indigo-400 rounded-full animate-bounce animation-delay-1000 opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-3000 opacity-40"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce animation-delay-5000 opacity-40"></div>
    </div>
  );
};

export default MainLayout;