import React from 'react';
import './CarBrand.scss';
import { brands } from '../../../helpers/brandCars';
import { CAR_BRAND, STEP_INCREASE } from '../../../store/actions';
import { connect } from 'react-redux';
import ModalHeader from '../ModalHeader/ModalHeader';
import Button from '../../Button/Button';

function CarBrand({step_inc, carBrand,car_Brand_dis}) {
    const checkedBrand = param => e => {
        car_Brand_dis(param)
    };

    return (
        <div className="container">
            <ModalHeader />
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
            <div>
                <div className="btn-container">
                    {carBrand &&  
                    <div className="buttons">
                        <Button 
                            title="Dalje"
                            instruction={step_inc} />
                    </div>}
                </div>
            </div>
           
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
        car_Brand_dis: (carBrand) => dispatch({ type:CAR_BRAND, carBrand:carBrand })
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(CarBrand);