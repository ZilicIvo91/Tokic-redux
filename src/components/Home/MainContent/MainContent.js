import React from 'react';
import './MainContent.scss';
import tokic from '../../../images/tokic.png'
import Modal from '../../Modal/Modal';
import { connect } from "react-redux";
import { MODAL_SHOW, STEP } from '../../../store/actions';

function MainContent ({ modalShow, modal_Show_dis, step }) {
    const openModal=() =>{
        modal_Show_dis();
        step(1);
    }
    return (
        <div className="mainContent-container">
            <div className="mainContent-header">
                <img src={tokic} alt={tokic}/>
                <div className="mainContent-title">
                    <h2>Konfigurator servisa</h2>
                    <h3>Izračunajte trošak servisa</h3>
                </div>
            </div>
            <div className="mainContent-main">
                <p>Pritisnite gumb niže kako biste pokrenuli konfigurator</p>
                <button onClick={openModal}>Pokreni konfigurator</button>
                <div className="modalOpen">
                    {modalShow && <Modal />}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return { 
        modalShow: state.modalShow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        modal_Show_dis: () => dispatch({ type: MODAL_SHOW}),
        step: (data) => dispatch({ type: STEP, step: data})
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);