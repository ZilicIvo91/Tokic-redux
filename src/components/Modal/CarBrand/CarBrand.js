import React, {useState} from 'react';
import { IoClose } from 'react-icons/io5';
import './CarBrand.scss';
import { brands } from '../../../helpers/brandCars';
import { CAR_BRAND, MODAL_SHOW, STEP_INCREASE } from '../../../store/actions';
import { connect } from 'react-redux';

function CarBrand({step_inc, carBrand,car_Brand_dis, modal_Show_dis}) {
    const checkedBrand = param => e => {
        car_Brand_dis(param)
    };

    return (
        <div className="container">
            <div className="CarBrand-title">
                <h3>Konfigurator servisa</h3>
            </div>
            <IoClose className="close-icon" onClick={()=> modal_Show_dis()} /> 
            <div className="CarBrand-content">
                <h3>Korak 1. Odaberite proizvođača vašeg vozila</h3>
                <div className="CarBrand-carBrands">
                {brands.map(type => (
                   <div key={type.name} >
                            <label>
                                <input
                                    type="radio"
                                    name="radio-button"
                                    value={carBrand}
                                    // // onChange={(e) => (e.target.checked)}
                                    checked={type.checked}
                                    onChange={checkedBrand(type)}/>
                            {type.name}
                            </label> 
                    </div>))}
                </div>
            </div>
            {carBrand &&  
            <div className="buttons">
                <button onClick={step_inc}>Dalje</button>
            </div>}
           
        </div>
    )
}
const mapStateToProps = state => {
    return{
        carBrand: state.carBrand
    }
}

const mapDispatchToProps = dispatch => {
    return {
        step_inc: () => dispatch({ type: STEP_INCREASE}),
        car_Brand_dis: (carBrand) => dispatch({ type:CAR_BRAND, carBrand:carBrand }),
        modal_Show_dis: () => dispatch({ type: MODAL_SHOW})
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(CarBrand);