import Store from "./store.js"
import{reducer} from "./reducer.js";
// import { increment,decrement } from "./action.js";
const store=new Store(reducer,{

    count:0,
    value:1
})


let counter=document.querySelector("#counter");
let increm=document.querySelector("#incre")
let decre=document.querySelector("#drecre");
let input=document.querySelector("#input");
let add=document.querySelector("#add");
let mutliple=document.querySelector("#mutliple");
let subtract=document.querySelector("#subtract");
let divide=document.querySelector("#divide");
counter.innerText=store.getState().count;

increm.addEventListener("click", () => { 
    store.dispatch({ type:"INCREMENT"});
    counter.innerText = store.getState().count;
})
decre.addEventListener("click", () => { 
    store.dispatch({ type:"DECREMENT"});
    counter.innerText = store.getState().count;
})

input.addEventListener("keyup", () => {
    store.state.value = Number(input.value);
})

add.addEventListener("click", () => { 
 
        store.dispatch({ type: "ADD" });
        counter.innerText = store.getState().count + store.getState().value;
                 
    store.state.count=Number(counter.innerText)+store.getState().value
        store.getState.value=null;
        input.value = "";
   
    // store.state.value = 0;
})
mutliple.addEventListener("click", () => { 
   
    store.dispatch({ type: "MUTIPLE" });
    counter.innerText = store.getState().count * store.getState().value;
    store.state.count = store.getState().count * store.getState().value;
    input.value = "";

// store.state.value = 0;
})
subtract.addEventListener("click", () => { 
   
    store.dispatch({ type: "SUB" });
    counter.innerText = store.getState().count - store.getState().value;
    store.state.count = store.getState().count - store.getState().value;
    input.value = "";

// store.state.value = 0;
})
divide.addEventListener("click", () => { 
   
    store.dispatch({ type: "DIVID" });
    counter.innerText = store.getState().count / store.getState().value;
    store.state.count = store.getState().count / store.getState().value;
    input.value = "";

// store.state.value = 0;
})  