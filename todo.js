
taskobj = [];// array to store the text entered
taskinput = document.getElementById("input-bar");// input bar where user enters the task 
addbtn = document.getElementById("add");//add button 
let html = " ";//

//function to add the input to the list 

function add() {
    taskinputvalue = taskinput.value;
    if (taskinputvalue.trim() != 0) {
        taskobj.push(taskinputvalue);
        taskinput.value = " ";
        displayTask();
    }
    else
    alert('Enter the task and click add ');

}
// Edit button functionality
function edit(index) {
    a = index;
    taskinput.value = taskobj[index];
    taskobj[index].value = taskinput.value;
    addbtn = document.getElementById("add");
    savebtn = document.getElementById("save");
    addbtn.style.display = "none";
    savebtn.style.display = "inline-block";
    save();
    

}
// The display of list 
function displayTask() {
    html=" ";
    tablehold = document.getElementById("text-table");
    taskobj.forEach((item, index) => {
        html += ` <tr>
    <td class="indexvalue" >${index + 1}.</td>
    <td class="textvalue">${item}</td>
    <td><button id="edit" onclick="edit(${index})" style="display:inline-block">Edit</button></td>
    <td><button id="delete" onclick="deleteIndex(${index})"  style="display:inline-block">Delete</button></td>
    </tr>`;
  
    });
    tablehold.innerHTML = html;
   

}
//Delete button 

function deleteIndex(index) {
    taskobj.splice(index, 1);
    displayTask();
}
// Save the text after editing

function save() {
    savebtn = document.getElementById("save");
    savebtn.addEventListener('click', function () {
        taskinputvalue = taskinput.value;
        taskobj[a] = taskinputvalue;
        

        displayTask();

        addbtn.style.display = "inline-block";
        savebtn.style.display = "none";
    

    });

}


