const form = document.addItem;
const list = document.getElementById("list")

form.addEventListener("submit", function(event){
    event.preventDefault()
    //alert("It's working")

    const li = document.createElement("li");
    list.append(li);
    
    const div = document.createElement("div");
    div.textContent = form.title.value;
    li.appendChild(div)
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    li.append(deleteButton)

     const editButton = document.createElement("button");
     editButton.textContent = "edit";
     li.append(editButton)

     deleteButton.addEventListener("click", function() {li.remove(); 
     })
     
    
     form.title.value = ""
    
})