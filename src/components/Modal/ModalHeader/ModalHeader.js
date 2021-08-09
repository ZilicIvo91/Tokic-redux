import React from 'react';
import './ModalHeader.scss';
import { IoClose } from 'react-icons/io5';
import { connect } from 'react-redux';
import { MODAL_SHOW } from '../../../store/actions';

function ModalHeader({ modal_Show_dis }) {
    return (
        <div className="modalHeader">
            <div className="modalHeader-title">
                <h3>Konfigurator servisa</h3>
            </div>
            <div className="modalHeader-icon">
                <IoClose className="close-icon" onClick={()=> modal_Show_dis()}/>    
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        modal_Show_dis: () => dispatch({ type: MODAL_SHOW})
    } 
}
export default connect(null, mapDispatchToProps)(ModalHeader);
