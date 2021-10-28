import { createStore } from "vuex"
import axios from "axios";


const store = createStore({
    state: {
        cart: [],
        items:[],
        quantity: [],
        price: [],
        imgUrl: '/static/images'
    },
    getters: {
        productQuantity: (state) => (product) => {
            const item = state.cart.find(i => i.id === product.id)
           if (item) return item.quantity
        },
        cartItems: state => {
            return state.cart
        },
        totalProductSum: state =>  {
         return state.cart.reduce(
             (a, b) => a + (b.price * b.quantity), 0)
        }
    },
    actions: {
           GET_ITEMS_FROM_API({commit}) {
           return  axios.get('http://localhost:3000/items', {
            })
                .then((items) => {
                    commit('SET_ITEMS_TO_STATE', items.data);
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        addToCart({commit}, product) {

            commit('ADD_TO_CART', product)

        },
        removeFromCart({commit}, product){
            commit('REMOVE_CART', product);
        }
    },
    mutations: {
        SET_ITEMS_TO_STATE: (state, items) => {
            state.items = items;
        },
        REMOVE_CART(state, product) {
               let index = state.cart.findIndex(c => c.id === product.id)
                   if (index !== -1){
                       state.cart[index].quantity--
                       if (state.cart[index].quantity === 0 ){ state.cart.splice(index, 1)}
                   }
                  },
        ADD_TO_CART(state, product) {
            let item = state.cart.find(i => i.id === product.id)
            if (item){
                item.quantity++
            }else {state.cart.push({...product, quantity: 1})}

        }
    },

})



export default  store


