const ul = document.querySelector("ul");
let input = document.querySelector("input");
const submitButton = document.querySelector("#btnAdd");

submitButton.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = input.value.trim();
        ul.appendChild(li);
        input.value = "";

        let completeBtn = document.createElement("a");
        completeBtn.setAttribute("href", "#");
        completeBtn.setAttribute("id", "completeBtnID");
        completeBtn.innerText = "COMPLETE";
        li.appendChild(completeBtn);

        let deleteBtn = document.createElement("a");
        deleteBtn.setAttribute("href", "#");
        deleteBtn.setAttribute("id", "deleteBtnID");
        deleteBtn.innerText = "DELETE";
        li.appendChild(deleteBtn);

        let editBtn = document.createElement("a");
        editBtn.setAttribute("href", "#");
        editBtn.setAttribute("id", "editBtnID");
        editBtn.innerText = "EDIT";
        li.appendChild(editBtn);


        deleteBtn.onclick = function () {
            let nodeToBeDeleted = document.getElementById("deleteBtnID");
            let delThis = this.parentElement;
            delThis.style.display = "none";
        }

        editBtn.onclick = function () {
            let nodeToBeDeleted = document.getElementById("editBtn");
            let editThis = this.parentElement;
            console.log(editThis.firstChild);
            var editInput=document.createElement('input');
            console.log(editInput);
            editInput.setAttribute("type","text");
            editInput.setAttribute("placeholder","enter");
            editInput.appendChild(editThis.firstChild);
           
           //editInput.innerText= tobeedited.innerText;
        }
    }
    
})