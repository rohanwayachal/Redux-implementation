const {createStore,combineReducers}=require('redux')




const ContactReducer=(prev=[],action)=>{
	if(action.type=="UPDATE_CONTACT"){
		return [...prev,action.payload]
	}
	return prev
}
const UserReducer=(prev={},action)=>{
	if(action.type=="UPDATE_USER"){
		return Object.assign({},prev,action.payload)
	}
	return prev

}


const reducer=combineReducers({
user:UserReducer,
contacts:ContactReducer

})


const mystore= createStore(reducer,{user:{},contacts:[]})



mystore.dispatch({'type':'UPDATE_USER','payload':{'name':'rohan'}})
mystore.dispatch({'type':'UPDATE_CONTACT','payload':{'name':'akshay'}})
mystore.dispatch({'type':'UPDATE_CONTACT','payload':{'name':'viraj'}})




console.log(mystore.getState())