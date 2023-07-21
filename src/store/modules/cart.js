const cart = {
    state:{
        product:JSON.parse(sessionStorage.getItem('product'))||[],
    },
    mutations:{
        addCart(state,payload){
           let img = state.product.find(item=>item.img === payload.img)
            if(img===undefined){
                payload.num=1;
                payload.check = true
                state.product.push(payload)
            }else{
                state.product = state.product.filter(item=>{
                    if(item.img === payload.img){
                        item.num++
                    }
                    return item
                })
            }
            // 数据持久化
            sessionStorage.setItem('product',JSON.stringify(state.product))
        },
        removeCart(state,payload){
            state.product = state.product.filter(item=>item.img !== payload.img)
        },
        radio(state,payload){
            state.product = state.product.filter(item=>{
                if(item.img==payload.img){
                    item.check = payload.check
                }
                return item
            })
        },
        fanquan(state,payload){
            state.product = state.product.filter(item => {
                item.check = payload.checked
                return item
            })
        }
    }
    
}
export default cart