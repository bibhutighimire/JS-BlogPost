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
            let k=0;
            for(k=0;k<5;k++ )
            {
                parentArticleToBeEdited.children[k].style.display="none";
            }
            
            const editInputTitle=document.createElement("input");
            editInputTitle.setAttribute("id","inputContentTitle");
            editInputTitle.setAttribute("type","text");
            const editInputContent=document.createElement("input");
            editInputContent.setAttribute("id","inputContent");
            editInputContent.setAttribute("type","text");
            //save button
            const btnSave = document.createElement("button");
            btnSave.setAttribute("id", "btnStyle");
            btnSave.innerText = "Save";
            //cancel button
            const btnCancel = document.createElement("button");
            btnCancel.setAttribute("id", "btnStyle");
            btnCancel.innerText = "Cancel";
            //appending everything
            parentArticleToBeEdited.appendChild(editInputTitle);
            parentArticleToBeEdited.appendChild(editInputContent);
            parentArticleToBeEdited.appendChild(btnSave);
            parentArticleToBeEdited.appendChild(btnCancel);
            const editTitle=parentArticleToBeEdited.children[1];
            const editContent=parentArticleToBeEdited.children[2];
           
            editInputTitle.value=editTitle.textContent;
           editInputContent.value=editContent.textContent;


           //btn Save

           btnSave.addEventListener("click", function () {
            const parentArticleToBeSaved = this.parentElement;
            const title = editInputTitle.value;
            const content =  editInputContent.value;
            const articleOne = new Article(title, content);
            articleOne.addArticle();
            parentArticleToBeSaved.style.display="none";
          //  Clear();


        })

         //btn cancel
            btnCancel.addEventListener("click", function () {
                let k=0;
            for(k=0;k<5;k++ )
            {
                this.parentElement.children[k].style.display="block";
            }
            for(k=5;k<9;k++ )
            {
                this.parentElement.children[k].style.display="none";
            }
        
         })

        })
    }
}

btnSubmitContent.addEventListener("click", function () {

    const title = inputContentTitle.value.trim();
    const content = inputContent.value.trim();
    let errorMsg = document.querySelector("#error");
    if(title !== "" && content !== "")
    {
        errorMsg.textContent="";
    const articleOne = new Article(title, content);
    articleOne.addArticle();
    Clear();
    }
    else {

        errorMsg.textContent="Title/Content can not be empty";
    }
})

