import React from 'react';
import './Contact.scss';
import { IoClose } from 'react-icons/io5';
import { connect } from 'react-redux';
import { DESCRIPTION, EMAIL, MODAL_SHOW, NAME, PHONE, STEP_DECREASE, STEP_INCREASE } from '../../../store/actions';


function Contact({step_inc, step_dec, name, email,description,phone, name_dis, email_dis, description_dis,phone_dis, modal_Show_dis}) {
    return (
        <div className="container">
            <div className="Contact-title">
                <h3>Konfigurator servisa</h3>
            </div>
            <IoClose className="close-icon" onClick={()=> modal_Show_dis()} /> 
            <div className="Contact-content">
                <h3>Korak 3. Vaši kontakt podaci</h3>
                <div className="Contact-inputs">
                    <form>
                        <div className="input-firstRow">
                            <input 
                                type="text" 
                                placeholder="Ime i prezime" 
                                value={name}
                                required
                                onChange={(e) => name_dis(e.target.value)} />    
                            <input 
                                type="e-mail" 
                                placeholder="Email adresa" 
                                value={email}
                                required
                                onChange={(e) => email_dis(e.target.value)}
                                 />    
                        </div>

                        <div className="input-secondRow">
                            <input 
                                type="number" 
                                placeholder="Broj telefona" 
                                required
                                value={phone}
                                onChange={(e) => phone_dis(e.target.value)}
                                />    
                            <textarea 
                                placeholder="Napomena"
                                value={description}
                                onChange={(e) => description_dis(e.target.value)}
                                 />    
                        </div>
                    </form>   
                </div>
            </div>
            <div className="buttons">
                <button onClick={step_dec}>Nazad</button>
                {name && email && phone && 
                <button onClick={step_inc}>Dalje</button>
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        name: state.name,
        email: state.email,
        phone: state.phone,
        description: state.description
    }
    
}
const mapDispatchToProps = dispatch => {
    return {
        modal_Show_dis: () => dispatch({ type: MODAL_SHOW}),
        step_inc: () => dispatch({ type: STEP_INCREASE }),
        step_dec: () => dispatch({ type: STEP_DECREASE }),
        name_dis: (value) => dispatch({ type:NAME, name:value}),
        email_dis: (value) => dispatch({ type:EMAIL, email:value}),
        phone_dis: (value) => dispatch({ type:PHONE, phone:value}),
        description_dis: (value) => dispatch({ type:DESCRIPTION, description:value})
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
