import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, 
    ref, 
    remove, 
    push,
    onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
    databaseURL:"https://chore-list-c6a24-default-rtdb.europe-west1.firebasedatabase.app"
}
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db,"chores");

const inputEl=document.getElementById("input-el");
const addBtn=document.getElementById("add-btn");
const cancelBtn=document.getElementById("cancel-btn");
const choreEl=document.getElementById("chores-el");
const clearBtn=document.getElementById("clear-btn");

clearBtn.addEventListener("click",function(){
    remove(dbRef);
    choreEl.innerHTML="";
}
);

addBtn.addEventListener("click",function(){
    push(dbRef, inputEl.value);
    inputEl.value="";
});

cancelBtn.addEventListener("click",function(){
    inputEl.value="";
});

onValue(dbRef, function(snapshot){
    let chores=snapshot.val();
    let choresArr=Object.values(chores);
    choreEl.innerHTML="";
    for(let i=0; i<choresArr.length; i++){
        choreEl.innerHTML+=`<div>${choresArr[i]}</div>`;
    }
});