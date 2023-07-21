import cart from './modules/cart'
import {createStore} from 'vuex'
const store = createStore({
    modules:{
        cart
    },
    state:{
        id:10
    }
})
export default store