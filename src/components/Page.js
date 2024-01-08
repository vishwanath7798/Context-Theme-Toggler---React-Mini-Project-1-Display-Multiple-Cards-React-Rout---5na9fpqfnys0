import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { useTheme } from './ThemeProvider';

const Page = () => {
    const { theme } = useTheme();

    return (
        <div className={`container ${theme === 'light' ? 'bg-light' : 'bg-dark'}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn ${theme === 'light' ? 'btn-light txt-light' : 'btn-dark txt-dark'}`} id="themed-button">
                Themed Button
            </button>
            <LocalThemedBox />
        </div>
    );
};

export { Page };
