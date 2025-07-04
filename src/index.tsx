import { useState, useEffect } from 'react';
        import Navigation from './components/Navigation';
        import Hero from './components/Hero';

        function App() {
          return (
            <div className="min-h-screen bg-black text-green-500">
              <Navigation />
              <Hero />
            </div>
          );
        }

        export default App;
