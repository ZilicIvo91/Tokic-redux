import React, {useState} from 'react';
import './Servis.scss';
import { IoClose } from 'react-icons/io5';
import { servisList } from '../../../helpers/servisList';
import { connect } from 'react-redux';
import { CODE_SHOW, DISCOUNT, MODAL_SHOW, SERVIS, STEP_DECREASE, STEP_INCREASE} from '../../../store/actions';


function Servis({code_Show, code_Show_dis, step_inc, step_dec, list_Servis, total, discount, discount_dis, totalWithDiscount, modal_Show_dis}) {

    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [visit, setVisit] = useState(false);
    const [isKuponClicked, setIsKuponClicked] = useState(false);

    const checkedServis = param => e => { 
        list_Servis(param)
        setVisit(true);
    };
    
    const validation = (e) =>{
        setIsKuponClicked(true);
        e.preventDefault();
        setValue(e.target.value)
        const validCode = "Tokić123";
        if(value === validCode){
            setIsValid(true);
            discount_dis();
        }else{ 
            setIsValid(false)
            setVisit(true);
        }
       setValue("");
    }

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return (
        <div className="container">
            <div className="Servis-title">
                <h3>Konfigurator servisa</h3>
            </div>
            <IoClose className="close-icon" onClick={()=> modal_Show_dis()}/> 
            <div className="Servis-content">
                <h3>Korak 2. Odaberite jednu ili više usluga za koje ste</h3>
                <div className="Servis-servis">
                {servisList.map(type => (
                   <div key={type.name}>
                        <label>
                            <input
                                type="checkbox"
                                name="checkbox-button"
                                value="type"
                                checked={type.checked}
                                onChange={checkedServis(type)} />
                         {`${type.name} (${type.price} kn)`}
                        </label> 
                    </div>
                ))}
                <div className="Servis-total">
                    {!code_Show ? <p className="code" onClick={() => code_Show_dis()}>Imam kupon</p> 
                                : <div className="Servis_input">
                                            <input onChange={handleChange} value={value} placeholder="Unesite kod kupona ovdje" />
                                            <button onClick={validation}>Primjeni</button>
                                      </div>
                    }
                    {visit && isKuponClicked && <div>{isValid 
                                    ? <div>
                                        <p style={{color:"green"}}>Hvala vam, unijeli ste ispravan kod kupona</p>
                                        <p>Osnovica: {total} KN</p>
                                        <p>Popust (30%): -{discount} KN</p> 
                                      </div> 
                                    : <p style={{color: "red"}}>Kod je neispravan</p>}
                                </div> }
                        
                                 <h2>UKUPNO: {`${totalWithDiscount} KN`} </h2>
                </div>
            </div>
            </div>
                <div className="buttons">
                    <button onClick={step_dec}>Nazad</button>
                    { visit ? 
                    <button onClick={step_inc}>Dalje</button> : null}
                </div>
             </div>
    )
}
const mapStateToProps = state => {
    return { 
        code_Show: state.code_Show,
        servis_state: state.servis,
        total: state.total,
        discount: state.discount,
        totalWithDiscount: state.totalWithDiscount
 };
};
const mapDispatchToProps = dispatch => {
    return {
        code_Show_dis: () => dispatch({ type: CODE_SHOW}),
        modal_Show_dis: () => dispatch({ type: MODAL_SHOW}),
        step_inc: () => dispatch({ type: STEP_INCREASE }),
        step_dec: () => dispatch({ type: STEP_DECREASE }),
        list_Servis: (servis) => dispatch({ type:SERVIS, servis:servis}),
        discount_dis : () => dispatch({ type:DISCOUNT})
    } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Servis);
