import React from 'react';
import './CheckList.scss';
import { IoClose } from 'react-icons/io5';
import { connect } from 'react-redux';
import { MODAL_SHOW, STEP, STEP_DECREASE, STEP_INCREASE} from '../../../store/actions';

function CheckList({ servis, totalWithDiscount, discount,step_inc, step_dec, carBrand, name, email, phone,description, step, modal_Show_dis}) {

    return (
        <div className="container">
             <div className="CheckList-title">
                <h3>Konfigurator servisa</h3>
            </div>
            <IoClose className="close-icon" onClick={()=> modal_Show_dis()}/> 
            <div className="CheckList-content">
                <h3>Korak 4. Pregled i potvrda vašeg odabira</h3>
                <p>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neke od podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost svojih podatka pritisnie gumb pošalji na dnu za slanje upita za servis</p>
                <div className="CheckList-firstRow">
                    <div className="CheckList-firstRow-left">
                        <h2>MODEL VOZILA</h2>
                        <button onClick={() => step(1)}>Uredi</button>
                        <span><p>{carBrand}</p></span>
                    </div>
                <div className="CheckList-firstRow-right">
                        <h2>ODABRANE USLUGE</h2>
                        <button onClick={() => step(2)}>Uredi</button>
                        <div>
                            {servis.map(item => {
                                return <div className="CheckList-firstRow" key={item.name}>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </div>
                            })}
                            <div className="Checklist_total">
                            {discount ? 
                            <p>Popust (30%): -{discount} KN</p> : null}
                            <p>UKUPNO: {totalWithDiscount} KN</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CheckList-secondRow">
                    <div>
                        <h2>KONTAKT PODACI</h2>
                        <button onClick={() => step(3)}>Uredi</button>
                    </div>
                    <div className="CheckList-secondRow-contact">
                        <div className="CheckList-contacts">
                            <div className="CheckList-firstRow">
                                <p>Ime i prezime: </p>
                                <p>{name}</p>
                            </div>
                            <div className="CheckList-firstRow">
                                <p>Email adresa:</p>
                                <p>{email}</p>
                            </div>
                        </div>                    
                    <div className="CheckList-contacts">              
                        <div className="CheckList-firstRow">
                            <p>Broj telefona:</p>
                            <p>{phone}</p>
                        </div>
                    <div className="CheckList-firstRow">
                            <p>Napomena:</p>
                            <p>{description}</p>
                    </div>
                    </div>            
                    </div>
                </div>
            </div>
                    <div className="buttons">
                        <button onClick={step_dec}>Nazad</button>
                        <button onClick={step_inc}>Dalje</button>
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
        name: state.name,
        email: state.email,
        phone: state.phone,
        description: state.description
    }
    
}
const mapDispatchToProps = dispatch => {
    return{
        step_inc: () => dispatch({ type: STEP_INCREASE }),
        step_dec: () => dispatch({ type: STEP_DECREASE }),
        step: (data) => dispatch({ type: STEP, step: data}),
        modal_Show_dis: () => dispatch({ type: MODAL_SHOW})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CheckList)