import React from 'react';
import './CheckList.scss';
import { connect } from 'react-redux';
import { STEP, STEP_DECREASE, STEP_INCREASE} from '../../../store/actions';
import ModalHeader from '../ModalHeader/ModalHeader';
import Button from '../../Button/Button';

function CheckList({ servis, totalWithDiscount, discount,step_inc, step_dec, carBrand, user, step }) {

    return (
        <div className="container">
            <ModalHeader />
            <div className="checkList-wrapper">
                <div className="checklist-text">
                    <h3>Korak 4. Pregled i potvrda vašeg odabira</h3>
                    <p>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neke od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podatka pritisnie gumb pošalji na dnu za slanje upita za servis</p>
                </div>
                <div className="checkList-content">
                    <div className="checkList-model-servis">
                        <div className="checkList-model">
                            <div className="checkList-header">
                                <h2>MODEL VOZILA</h2>
                                <button onClick={() => step(1)}>Uredi</button>
                            </div>
                            <p>{carBrand}</p>
                        </div>
                    <div className="checkList-servis">
                        <div className="checkList-header">
                            <h2>ODABRANE USLUGE</h2>
                            <button onClick={() => step(2)}>Uredi</button>
                        </div>
                            <div>
                                {servis.map(item => {
                                    return <div className="checkList-model-servis" key={item.name}>
                                            <p>{item.name}</p>
                                            <p>{item.price} KN</p>
                                        </div>
                                })}
                                <div className="checklist_total">
                                {discount ? 
                                <p>Popust (30%): -{discount} KN</p> : null}
                                <h3>UKUPNO: {totalWithDiscount} KN</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkList-contact-container">
                        <div className="checkList-header">
                            <h2>KONTAKT PODACI</h2>
                            <button onClick={() => step(3)}>Uredi</button>
                        </div>
                        <div className="checkList-contact">
                            <div className="checkList-name-mail">
                                <div className="checkList-contact-element">
                                    <p>Ime i prezime: </p>
                                    <p>{user.name}</p>
                                    <p>jvnsaovnsdocdsn</p>
                                </div>
                                <div className="checkList-contact-element">
                                    <p>Email adresa:</p>
                                    <p>{user.email}</p>
                                    <p>jvnsaovnsdocdsn</p>
                                </div>
                            </div>                    
                        <div className="checkList-number-desc">              
                            <div className="checkList-contact-element">
                                <p>Broj telefona:</p>
                                <p>{user.phone}</p>
                            </div>
                        <div className="checkList-contact-element">
                                <p>Napomena:</p>
                                <p>{user.description}</p>
                        </div>
                        </div>            
                        </div>
                    </div>
                </div>
                        <div className="btn-container">
                        {/* {carBrand &&   */}
                        <div className="buttons">
                            <Button 
                                title="Nazad"
                                instruction={step_dec} />
                                <Button 
                                title="Dalje"
                                instruction={step_inc} />
                        </div>
                        {/* } */}
                    </div>
                </div>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        carBrand: state.carBrand.name,
        servis: state.servis,
        totalWithDiscount: state.totalWithDiscount,
        discount: state.discount,
        user: state.user
    }
    
}
const mapDispatchToProps = dispatch => {
    return{
        step_inc: () => dispatch({ type: STEP_INCREASE }),
        step_dec: () => dispatch({ type: STEP_DECREASE }),
        step: (data) => dispatch({ type: STEP, step: data}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CheckList)