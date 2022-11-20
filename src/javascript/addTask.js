import { cross } from './checkbox'

let globalPointer = '';

export function getProject(event){
    globalPointer = event.currentTarget.parentNode;   
}

class listItem {
    constructor(title, description, dueDate, project, priority){
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.project = project,
        this.priority = priority
    }
}

export function addTask(){
    let nameVal = document.getElementsByClassName('name')[0].value;
    let commentVal = document.getElementsByClassName('comment')[0].value;
    let projectVal = globalPointer.id;
    let dateVal = document.getElementsByClassName('date')[0].value;
    let statusVal = document.getElementsByClassName('status')[0].value;

    if(nameVal !== '' && commentVal !== '' && dateVal !== '' && statusVal !== ''){
        let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];
        let newListItem = new listItem(nameVal, commentVal, dateVal, projectVal, statusVal);
        storedArr.push(newListItem);  
        localStorage.setItem('storedArr', JSON.stringify(storedArr));

        let topSection = globalPointer.getElementsByTagName('div')[0];
        let counter = topSection.getElementsByClassName('counter')[0];
        counter.innerHTML = storedArr.filter(val => {return val.project == projectVal}).map(val => {return val.project}).length;


        let divItem = document.createElement('div');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        let divTitle = document.createElement('div');
        let headerTwo = document.createElement('h2');
        headerTwo.innerHTML = nameVal;
        headerTwo.classList.add("text", "font-medium", "text-gray-800");

        checkbox.classList.add("check","h-4", "w-4", "hover:text-blue-800", "hover:cursor-pointer");
        checkbox.addEventListener('click', cross);


        divTitle.classList.add("flex", "flex-row", "gap-2", "justify-start", "items-center");
        divTitle.appendChild(checkbox);
        divTitle.appendChild(headerTwo);



        let divDesc = document.createElement('div');
        divDesc.classList.add("flex", "flex-col", "gap-2");
        let parDesc = document.createElement('div');
        parDesc.innerHTML = commentVal;

        divDesc.appendChild(parDesc);


        let chips = document.createElement('div');
        chips.classList.add("mt-4", "flex", "flex-row", "gap-2");
        
        let divDate = document.createElement('div');
        divDate.classList.add("px-3", "py-0.5", "bg-blue-100", "rounded-md");
        let parDate = document.createElement('p');
        parDate.classList.add("text-sm", "align-middle", "text-blue-500", "font-semibold")
        parDate.innerHTML = dateVal;

        divDate.appendChild(parDate);
        

        let divPriority = document.createElement('div');
        let parPriority = document.createElement('p');
        if(statusVal === 'Optional'){
            divPriority.classList.add("chips", "px-3", "py-0.5", "bg-gray-100", "rounded-md");
            parPriority.classList.add("text-sm", "align-middle", "text-gray-500", "font-semibold");
        } else if(statusVal === 'Moderate'){
            divPriority.classList.add("chips", "px-3", "py-0.5", "bg-blue-100", "rounded-md");
            parPriority.classList.add("text-sm", "align-middle", "text-blue-500", "font-semibold");
        } else {
            divPriority.classList.add("chips", "px-3", "py-0.5", "bg-red-100", "rounded-md");
            parPriority.classList.add("text-sm", "align-middle", "text-red-500", "font-semibold");
        }
        parPriority.innerHTML = statusVal;

        divPriority.appendChild(parPriority);

        chips.appendChild(divDate);
        chips.appendChild(divPriority);
        

        divItem.classList.add("list_item", "py-2", "px-4", "flex", "flex-col", "gap-2", "bg-white", "drop-shadow-md", "border", "border-gray-300", "rounded-md");
        divItem.appendChild(divTitle);
        divItem.appendChild(divDesc);
        divItem.appendChild(chips);
        
        globalPointer.appendChild(divItem);
    
    }
}
