import React from 'react';
import './Contact.scss';
import { connect } from 'react-redux';
import { DESCRIPTION, EMAIL, MODAL_SHOW, NAME, PHONE, STEP_DECREASE, STEP_INCREASE } from '../../../store/actions';
import ModalHeader from '../ModalHeader/ModalHeader';
import Button from '../../Button/Button';


function Contact({step_inc, step_dec, user, name_dis, email_dis, description_dis,phone_dis, modal_Show_dis}) {
    return (
        <div className="container">
            <ModalHeader />
            <div className="Contact-content">
                <h3>Korak 3. Vaši kontakt podaci</h3>
                <div className="Contact-inputs">
                    <form>
                        <div className="input-firstRow">
                            <div className="input-element">
                                <label>Ime i prezime:</label>
                                <input 
                                    type="text" 
                                    placeholder="Ime i prezime" 
                                    value={user.name}
                                    required
                                    onChange={(e) => name_dis(e.target.value)} />    
                            </div>
                            <div className="input-element">
                                <label>E-mail:</label>
                                <input 
                                    type="e-mail" 
                                    placeholder="Email adresa" 
                                    value={user.email}
                                    required
                                    onChange={(e) => email_dis(e.target.value)} />    
                            </div>
                        </div>

                        <div className="input-secondRow">
                            <div className="input-element">

                            <label>Broj mobitela:</label>
                            <input 
                                type="number" 
                                placeholder="Broj telefona" 
                                required
                                value={user.phone}
                                onChange={(e) => phone_dis(e.target.value)} />
                            </div>
                            <div className="input-element">
                                <label>Napomena:</label>    
                                <textarea 
                                    placeholder="Napomena"
                                    value={user.description}
                                    onChange={(e) => description_dis(e.target.value)} />    
                            </div>
                        </div>
                    </form>   
                </div>
            </div>
            <div className="btn-container">
                   
                    <div className="buttons">
                        <Button 
                            title="Nazad"
                            instruction={step_dec} />
                        {user.name && user.email && user.phone && 
                            <Button 
                            title="Dalje"
                            instruction={step_inc} />
                        }
                    </div>
                  
              
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        user: state.user
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
