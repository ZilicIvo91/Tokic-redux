import React from 'react'
import { connect } from 'react-redux';
import CarBrand from './CarBrand/CarBrand';
import CheckList from './CheckList/CheckList';
import Contact from './Contact/Contact';
import EndOrder from './EndOrder/EndOrder';
import Servis from './Servis/Servis';

function Modal({ step }) {

    switch (step){
        case 1:
            return(
                <CarBrand />
            );
        case 2:
            return(
                <Servis />
            );
        case 3:
            return(
                <Contact />
            );
        case 4:
            return(
                <CheckList />
            );
        case 5:
            return(
                <EndOrder /> 
            )
    }    
}
const mapStateToProps = (state) => {
    return {
        step: state.step
    }
}




export default connect(mapStateToProps)(Modal);