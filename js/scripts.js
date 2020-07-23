const inputContentTitle = document.querySelector("#inputContentTitle");
const inputContent = document.querySelector("#inputContent");
const btnSubmitContent = document.querySelector("#btnSubmitContent");
const btnClearContent = document.querySelector("#btnClearContent");

btnClearContent.addEventListener("click", Clear)

function Clear() {
    inputContentTitle.value = "";
    inputContent.value = "";
}

class Article {

    // We can use constructors to set the base properties for our objects (name / age / hobbies in this case.)
    constructor(title = inputContentTitle.value, content = inputContent.value) // Default values set in our parameters.
    {
        this.title = title;
        this.content = content;
    }
    // Creating method to add article's title and content
    addArticle(inputContentTitle = "", inputContent = "") {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        ul.appendChild(li);
        // Creating an element.
        const titleOfContent = document.createElement("h2");
        const bodyOfContent = document.createElement("P");
        const dateTimeNow = document.createElement("time");
        dateTimeNow.setAttribute("id", "showDateTime");

        const today = new Date();

        dateTimeNow.innerText = ("Created on: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " , " + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate());

        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "btnStyle");
        btnDelete.innerText = "Delete";
        const btnEdit = document.createElement("button");
        btnEdit.setAttribute("id", "btnStyle");
        btnEdit.innerText = "Edit";
        // Fill in the text of the element (using template literal.)
        titleOfContent.textContent = `${this.title}`;
        bodyOfContent.textContent = `${this.content}`;
        // Add the new element to the body of our webpage.
        li.appendChild(dateTimeNow);
        li.appendChild(titleOfContent);
        li.appendChild(bodyOfContent);
        li.appendChild(btnDelete);
        li.appendChild(btnEdit);

        btnDelete.addEventListener("click", function () {
            const parentArticleToBeDeleted = this.parentElement;
            parentArticleToBeDeleted.style.display = "none";
        })

        btnEdit.addEventListener("click", function () {
            const parentArticleToBeEdited = this.parentElement;
            const editInputTitle=document.createElement("input");
            editInputTitle.setAttribute("id","inputContentTitle");
            editInputTitle.setAttribute("type","text");
            const editInputContent=document.createElement("input");
            editInputContent.setAttribute("id","inputContent");
            editInputContent.setAttribute("type","text");
            const btnSave = document.createElement("button");
            btnSave.setAttribute("id", "btnStyle");
            btnSave.innerText = "Save";
            parentArticleToBeEdited.appendChild(editInputTitle);
            parentArticleToBeEdited.appendChild(editInputContent);
            parentArticleToBeEdited.appendChild(btnSave);
            const editTitle=parentArticleToBeEdited.children[1];
            const editContent=parentArticleToBeEdited.children[2];
            console.log(editTitle);
            console.log("title above");
            console.log(editContent);
            console.log("editContent above");
            editInputTitle.value=editTitle.textContent;
           editInputContent.value=editContent.textContent;

        })

    }
}

btnSubmitContent.addEventListener("click", function () {

    const title = inputContentTitle.value;
    const content = inputContent.value;
    console.log(title);
    console.log(content);
    console.log("title and content above");
    const articleOne = new Article(title, content);
    articleOne.addArticle();
    Clear();
})

