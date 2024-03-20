import React from 'react';
import './App.css';
import GridExample from './GridExample';
import Button from './Button';

function App() {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              TailwindCSS Grid Example in React
            </p>
            <Button>Button</Button>

            <GridExample />
          </header>
        </div>
      );
    }
    
export default App;