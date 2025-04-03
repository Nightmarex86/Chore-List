import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, push, onValue, snapshot,remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
const firebaseConfig = {
    databaseURL:"https://chore-list-c6a24-default-rtdb.europe-west1.firebasedatabase.app"
}
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const choreListRef = ref(db, "chores");
const choreEl= document.getElementById("chores-el");
const inputEl= document.getElementById("input-el");
const addBtn= document.getElementById("add-btn");
const cancelBtn= document.getElementById("cancel-btn");

addBtn.addEventListener("click", function() {
        push(choreListRef, inputEl.value);
        inputEl.value = "";
});