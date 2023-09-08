const initialData = {
    name:'Rashford',
    address:'Manchester'
}

const cartReducer =(state=initialData,action)=>{
    switch(action.type){
        case "UPDATE_NAME":
            return{...state,name:action.payload}

        case "UPDATE_ADDRESS":
            return{...state,address:action.payload}


        default:
            return state
    }

}

export default cartReducer