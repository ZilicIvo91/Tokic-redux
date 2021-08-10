import React from 'react';
import { connect } from 'react-redux';
import { MODAL_SHOW, RESET } from '../../../store/actions';
import Button from '../../Button/Button';
import ModalHeader from '../ModalHeader/ModalHeader';
import './EndOrder.scss';


function EndOrder({modal_Show, reset}) {

    const endOrder = () =>{
        modal_Show();
       reset();
    }
    return (
        <div className="container">
          <ModalHeader />
            <div className="EndOrder-content">
                <h3>Vaša prijava je uspješno poslana</h3>
                <p>Vaša prijava je uspješno poslana i zaprimljena.</p> 
                <p>Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam.</p>
            </div>
            <div className="EndOrder-btn">
                <Button title="Zatvori" instruction={endOrder} />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        modalShow: state.modalShow,
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        modal_Show: () => dispatch({ type: MODAL_SHOW}),
        reset: () => dispatch({ type: RESET})
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (EndOrder)