const initialData ={
    no_of_items:100
}

const itemReducer = (state = initialData,action) => {
    switch(action.type){
        case "INCREASE":
            return {no_of_items:++state.no_of_items}

            case "DECREASE":
            return {no_of_items:--state.no_of_items}

            case "RESET":
                return{no_of_items:100}

            default:
                return state

    }
   
}

export default itemReducer