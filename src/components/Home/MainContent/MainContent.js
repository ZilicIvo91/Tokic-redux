import React from 'react';
import './MainContent.scss';
import Modal from '../../Modal/Modal';
import { connect } from "react-redux";
import { MODAL_SHOW, STEP } from '../../../store/actions';
import MainHeader from './MainHeader/MainHeader';
import Button from '../../Button/Button';

function MainContent ({ modalShow, modal_Show_dis, step }) {
    const openModal=() =>{
        modal_Show_dis();
        step(1);
        console.log("kliknuto")
    }

    return (
        <div className="mainContent-container">
           <MainHeader />
            <div className="mainContent-modal">
                <h5>Pritisnite gumb niže kako biste pokrenuli konfigurator</h5>
                <Button 
                    title="Pokreni konfigurator"
                    instruction={openModal} />
            </div>
                <div className="modalOpen">
                    {modalShow && <Modal />}
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