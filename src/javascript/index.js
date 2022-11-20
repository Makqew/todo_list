import {showModal, hideModal} from './modals';
import {getProject, addTask} from './addTask';
import {addProject} from './addProject';
import { cross } from './checkbox'
import { removeProject } from './removeProject';


let projectArr = JSON.parse(localStorage.getItem('projectList')) || [];

let addBtn = document.getElementsByClassName('addBtn')[0];
addBtn.addEventListener('click', addTask);
addBtn.addEventListener('click', hideModal);



let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];
let todoArea = document.getElementsByClassName('todo_area')[0];
for(let j = 0; j < projectArr.length; j++){
    let outerDiv = document.createElement('div');
    outerDiv.id = projectArr[j];
    outerDiv.classList.add("w-96", "flex", "flex-col", "gap-2");
    
    let topSection = document.createElement('div');
    topSection.classList.add("top_section", "flex", "flex-row", "items-center","justify-between", "gap-2");
   
    let leftSide = document.createElement('div');
    leftSide.classList.add("left_side", "flex", "flex-row", "items-center", "gap-2");

    let tag = document.createElement('div');
    tag.classList.add("tag", "px-3", "py-1", "bg-blue-100", "rounded-md");
    let tagText = document.createElement('p');
    tagText.classList.add("align-middle", "text-blue-800", "font-semibold");
    tagText.innerHTML = projectArr[j];

    let counter = document.createElement('i');
    counter.classList.add('counter');
    counter.innerHTML = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.project}).length;

    tag.appendChild(tagText);

    leftSide.appendChild(tag);
    leftSide.appendChild(counter);

    let rightSide = document.createElement('div');
    let removeBtn = document.createElement('button');
    removeBtn.classList.add("font-semibold", "underline", "text-red-700");
    removeBtn.innerHTML = 'remove';
    removeBtn.addEventListener('click', removeProject);
    rightSide.appendChild(removeBtn);

    topSection.appendChild(leftSide);
    topSection.appendChild(rightSide);
    outerDiv.appendChild(topSection);

    //task button
    let newTaskBtn = document.createElement('div');
    newTaskBtn.classList.add("new_list_item", "flex", "flex-row", "items-center", "gap-2", "w-full","h-fit", "px-3", "py-2", "bg-gray-100", "rounded-md", "hover:bg-gray-200", "hover:cursor-pointer");

    let icon1 = document.createElement('div');
    icon1.classList.add("fa-solid", "fa-plus", "text-gray-800");

    let innerText1 = document.createElement('p');
    innerText1.classList.add("align-middle", "text-gray-800", "font-semibold");
    innerText1.innerHTML = 'New task';

    newTaskBtn.appendChild(icon1);
    newTaskBtn.appendChild(innerText1);
    newTaskBtn.addEventListener('click', showModal);
    newTaskBtn.addEventListener('click', getProject);

    outerDiv.appendChild(newTaskBtn);

    todoArea.appendChild(outerDiv);

    //Adding projects
    for (let i = 0; i < storedArr.length; i++){
        let divItem = document.createElement('div');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        let divTitle = document.createElement('div');
        let headerTwo = document.createElement('h2');

        let titleObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.title});
        // console.log(titleObj);
        
        headerTwo.innerHTML = titleObj[i];
        headerTwo.classList.add("text", "font-medium", "text-gray-800");

        checkbox.classList.add("check","h-4", "w-4", "hover:text-blue-800", "hover:cursor-pointer");
        checkbox.addEventListener('click', cross);

        divTitle.classList.add("flex", "flex-row", "gap-2", "justify-start", "items-center");
        divTitle.appendChild(checkbox);
        divTitle.appendChild(headerTwo);



        let divDesc = document.createElement('div');
        divDesc.classList.add("flex", "flex-col", "gap-2");
        let parDesc = document.createElement('div');
        let descObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.description});
        parDesc.innerHTML = descObj[i];

        divDesc.appendChild(parDesc);


        let tags = document.createElement('div');
        tags.classList.add("mt-4", "flex", "flex-row", "gap-2");
        
        let divDate = document.createElement('div');
        divDate.classList.add("px-3", "py-0.5", "bg-blue-100", "rounded-md");
        let parDate = document.createElement('p');
        parDate.classList.add("text-sm", "align-middle", "text-blue-500", "font-semibold")
        let dateObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.dueDate});
        parDate.innerHTML = dateObj[i];

        divDate.appendChild(parDate);
        

        let divPriority = document.createElement('div');
        let parPriority = document.createElement('p');
        let priorityObj = storedArr.filter(val => {return val.project === projectArr[j]}).map(val => {return val.priority});
        let selectedPriority = priorityObj[i];

        if(selectedPriority === 'Optional'){
            divPriority.classList.add("tag", "px-3", "py-0.5", "bg-gray-100", "rounded-md");
            parPriority.classList.add("text-sm", "align-middle", "text-gray-500", "font-semibold");
        } else if(selectedPriority === 'Moderate'){
            divPriority.classList.add("tag", "px-3", "py-0.5", "bg-blue-100", "rounded-md");
            parPriority.classList.add("text-sm", "align-middle", "text-blue-500", "font-semibold");
        } else {
            divPriority.classList.add("tag", "px-3", "py-0.5", "bg-red-100", "rounded-md");
            parPriority.classList.add("text-sm", "align-middle", "text-red-500", "font-semibold");
        }
        parPriority.innerHTML = selectedPriority;
        divPriority.appendChild(parPriority);

        tags.appendChild(divDate);
        tags.appendChild(divPriority);
        

        divItem.classList.add("list_item", "py-2", "px-4", "flex", "flex-col", "gap-2", "bg-white", "drop-shadow-md", "border", "border-gray-300", "rounded-md");
        divItem.appendChild(divTitle);
        divItem.appendChild(divDesc);
        divItem.appendChild(tags);
        if(titleObj[i] !== undefined){
        outerDiv.appendChild(divItem);}
    }
            
}

let divBtnPrj = document.createElement('div');
divBtnPrj.classList.add("add_project", "flex", "flex-row", "items-center", "gap-2", "w-full","h-fit", "px-3", "py-2", "bg-gray-100", "rounded-md", "hover:bg-gray-200", "hover:cursor-pointer");

let iconPrj = document.createElement('div');
iconPrj.classList.add("fa-solid", "fa-plus", "text-gray-800");

let innerTextPrj = document.createElement('p');
innerTextPrj.classList.add("align-middle", "text-gray-800", "font-semibold");
innerTextPrj.innerHTML = 'New project';

divBtnPrj.appendChild(iconPrj);
divBtnPrj.appendChild(innerTextPrj);
divBtnPrj.addEventListener('click', addProject);

todoArea.appendChild(divBtnPrj);