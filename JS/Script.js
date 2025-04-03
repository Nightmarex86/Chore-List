import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, 
    ref, 
    remove, 
    push,  
    child, update, 
    onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
    databaseURL:"https://chore-list-c6a24-default-rtdb.europe-west1.firebasedatabase.app"
}
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);
const inputEl=document.getElementById("input-el");
const addBtn=document.getElementById("add-btn");
const cancelBtn=document.getElementById("cancel-btn");
const choreEl=document.getElementById("chores-el");
const choreListRef = ref(db, "chores/");
addBtn.addEventListener("click",function(){
    choreEl.innerHTML+=`<div>${inputEl.value}</div>`;
    inputEl.value="";

});

cancelBtn.addEventListener("click",function(){
    inputEl.value="";
});