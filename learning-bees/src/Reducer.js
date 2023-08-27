
const Reducer=(state,action)=>{
    switch(action.type){
        case "LOADING":
            return {...state,loading:true,err:false}
       case "SUCCESS":
        return {...state,loading:false,res:action.payload}
        case "ERROR":
            return {...state,loading:false,err:true}
                 default:
                  throw new Error("invalid action")
    }
}
export default Reducer