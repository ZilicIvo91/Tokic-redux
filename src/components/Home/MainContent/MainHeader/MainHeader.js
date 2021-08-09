import React from 'react';
import './MainHeader.scss';
import tokic from '../../../../images/tokic.png'

export default function MainHeader() {
    return (
        <div className="mainHeader-container">
            <img src={tokic} alt={tokic}/>
            <div className="mainheader-title">
                <h2>Konfigurator servisa</h2>
                <h3>Izračunajte trošak servisa</h3>
            </div>
        </div>
    )
}
