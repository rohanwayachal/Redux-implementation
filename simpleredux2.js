


class Store{
	
	constructor(reducer,state)
	{
		this.state=state;
		this.reducer=reducer


	}	
	
	getState(){
		return this.state;
	}
	
	dispatch(update){
		this.state=this.reducer(this.state,update);
	}
	
}

const ContactReducer=(prev,action)=>{
	if(action.type=="UPDATE_CONTACT"){
		return [...prev,action.payload]
	}
	return prev
}
const UserReducer=(prev,action)=>{
	if(action.type=="UPDATE_USER"){
		return Object.assign({},prev,action.payload)
	}
	return prev

}


const reducer=(state,action)=>({
	user:UserReducer(state.user,action),
	contacts:ContactReducer(state.contacts,action)

});



const mystore=new Store(reducer,{user:{},contacts:[]})



mystore.dispatch({'type':'UPDATE_USER','payload':{'name':'rohan'}})
mystore.dispatch({'type':'UPDATE_CONTACT','payload':{'name':'akshay'}})
mystore.dispatch({'type':'UPDATE_CONTACT','payload':{'name':'viraj'}})




console.log(mystore.getState())