


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

const ContactReducer=(prev,next)=>[...prev,next]
const UserReducer=(prev,next)=>Object.assign({},prev,next)


const reducer=function(state,action){
	if(action.type==='UPDATE_USER'){
		return Object.assign({},state,{user:UserReducer(state.user,action.payload)})
	}
	
	if(action.type==='UPDATE_CONTACT'){
		return Object.assign({},state,{contacts:ContactReducer(state.contacts,action.payload)})
	}
	
	return state
}


const mystore=new Store(reducer,{user:{},contacts:[]})



mystore.dispatch({'type':'UPDATE_USER','payload':{'name':'rohan'}})
mystore.dispatch({'type':'UPDATE_CONTACT','payload':{'name':'akshay'}})
mystore.dispatch({'type':'UPDATE_CONTACT','payload':{'name':'viraj'}})




console.log(mystore.getState())