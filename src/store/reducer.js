import * as actions from './actions'

const initialState = {
    modalShow : false,
    step: 1,
    carBrand: "",
    servis: [],
    code_Show: false,
    total: 0.00,
    totalWithDiscount: 0.00,
    discount: 0.00,
    user: {},
}

const reducer = ( state = initialState, action ) => {
   if (action.type === actions.MODAL_SHOW ){
       return { ...state, modalShow: !state.modalShow };
   }

   if (action.type === actions.CODE_SHOW ){
    return { ...state, code_Show: !state.code_Show };
    }

    if (action.type === actions.STEP){
        return {...state, step: action.step }
   }

   if (action.type === actions.STEP_INCREASE){
        return {...state, step: state.step + 1 }
   }

   if (action.type === actions.STEP_DECREASE){
    return {...state, step: state.step - 1 }
    }

    if (action.type === actions.CAR_BRAND){
        action.carBrand.checked = !action.carBrand.checked
        return { ...state, carBrand:action.carBrand }
    }

    if (action.type === actions.SERVIS){
        let newServices = [];
        let total = 0;
        action.servis.checked = !action.servis.checked;
        if(state.servis.filter(x => x.id === action.servis.id).length > 0) {                     
            newServices = [...state.servis.filter(x => x.id !== action.servis.id)];                
        } else {            
            newServices = [...state.servis, action.servis ];
        }

        newServices.map((item) => {
           return total += item.price;                
        });
        total = total.toFixed(2);
        return { ...state, servis: newServices, total: total, totalWithDiscount: total - state.discount }
    }

    if (action.type === actions.DISCOUNT){
        let discount = (state.total * 0.3)
        discount.toFixed(2);
        let totalWithDiscount = state.total - discount;
        totalWithDiscount = totalWithDiscount.toFixed(2);
        return {...state, discount: discount, totalWithDiscount: totalWithDiscount}
    }

    if (action.type === actions.NAME){
        return{ ...state, 
            user: {...state.user, name:action.name }
        }
    }
    if (action.type === actions.PHONE){
        return{ ...state, 
            user: {...state.user, phone:action.phone }        
            }
        }
    
    if (action.type === actions.DESCRIPTION){
        return{ ...state, 
            user: {...state.user, description:action.description }        
            }
        }
    
    if (action.type === actions.EMAIL){
        return{ ...state, 
            user: {...state.user, email:action.email }        
            }
        }


   return state
};

export default reducer;