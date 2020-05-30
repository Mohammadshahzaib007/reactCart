import card1img from '../../assets/images/dummy1.jpeg';
import card2img from '../../assets/images/dummy2.jpeg';
import card3img from '../../assets/images/dummy3.jpeg';

//import * as actionType  from '../actions/action-types/cart-actions'; 

const initialState = {
    items: [
        {id:1, productName: 'Hp 15Q-BU107TX', spacifications: 'weight: 1.86kg, color: black', price: '59,740', img: card1img},
        
        {id:2, productName: 'Asus VivoBook', spacifications: 'weight: 1.68kg, color: grey', price: '39,990', img: card2img},
        
        {id:3, productName: 'Hp Pavilion', spacifications: 'weight: 2.19kg, color: black', price: '49,990', img: card3img}
        
    ],
    addItems: [],
    total: 0,
}

const cartReducer = (state = initialState, action) => {
    if(action.type === 'ADD_TO_CART') {
        let addedItem = state.items.find( item => item.id === action.id);
        let existed_item = state.addItems.find(item => action.id === item.id); 
        if(existed_item) {
            addedItem.quantity +=1
            return {
                ...state,
                total: state.total + addedItem.price
            }}
        else {
            addedItem.quantity = 1;
            //calculating the total 
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addItems:[...state.addItems, addedItem],
                total: newTotal
            }
        }
    } 
        else {
            return state
        }
}


export default cartReducer;