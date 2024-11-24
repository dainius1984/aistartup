import React from 'react';
import Toolbar from './components/Toolbar';
import AIMap from './components/Map';

const App = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image will be handled by AIMap component */}
      <div className="relative z-10">
        <Toolbar />
        <main>
          <AIMap />
        </main>
      </div>
    </div>
  );
};

export default App;