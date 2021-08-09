import React from 'react';
import { connect } from 'react-redux';
import { MODAL_SHOW } from '../../../store/actions';
import ModalHeader from '../ModalHeader/ModalHeader';
import './EndOrder.scss';


function EndOrder({modal_Show}) {
    return (
        <div className="container">
          <ModalHeader />
            <div className="EndOrder-content">
                <h3>Vaša prijava je uspješno poslana</h3>
                <p>Vaša prijava je uspješno poslana i zaprimljena.</p> 
                <p>Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam.</p>
            </div>
            <button onClick={modal_Show}>Zatvori</button>
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
        modal_Show: () => dispatch({ type: MODAL_SHOW})
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (EndOrder)