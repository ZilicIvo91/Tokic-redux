import React from 'react';
import './Home.scss';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';


export default function Home() {
    return (
        <div className="home-container">
            <Header />
            <MainContent />
        </div>
    )
}
