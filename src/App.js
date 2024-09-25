// src/App.js
import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { state, dispatch } = useTheme();

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      className={`toggle-button ${state.theme}`}
    >
      Toggle to {state.theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

const AppContent = () => {
  const { state } = useTheme();

  return (
    <div className={`app-container ${state.theme}`}>
      <h1>{state.theme.charAt(0).toUpperCase() + state.theme.slice(1)} Theme</h1>
      <ThemeToggleButton />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
