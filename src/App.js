import React from 'react';
import { mainHeading } from './App.css';
import Button from './components/Button/Button';
const App = () => {
    return (
        <main>
            <div className={mainHeading}>
                Hello World! without create react app!
            </div>
            <Button />
        </main>
    );
};

export default App;
