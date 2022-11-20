import { getProject } from './addTask';
import { showModal } from './modals';
import { removeProject } from './removeProject';

export function addProject(){
    let area = document.getElementsByClassName('todo_area')[0];
    let newProject = document.getElementsByClassName('add_project')[0];

    let newInput = document.createElement('input');
    newInput.type = "text";
    newInput.placeholder = 'name of the project';
    newInput.classList.add("w-full","h-fit", "bg-gray-100", "py-2", "px-4", "border-2", "border-gray-200", "rounded-md")
    

    area.append(newInput);

    newInput.focus();
    newInput.scrollIntoView();

    newProject.remove();
    
    newInput.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            event.preventDefault();

            let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];
            let projectArr = JSON.parse(localStorage.getItem('projectList')) || [];
            projectArr.push(newInput.value)
            console.log(projectArr);
            localStorage.setItem('projectList', JSON.stringify(projectArr));

            let wholeDiv = document.createElement('div');
            wholeDiv.id = newInput.value;
            wholeDiv.classList.add("w-96", "flex", "flex-col", "gap-2");

            let topSection = document.createElement('div');
            topSection.classList.add("top_section", "flex", "flex-row", "items-center","justify-between", "gap-2");
            
            let leftSide = document.createElement('div');
            leftSide.classList.add("left_side", "flex", "flex-row", "items-center", "gap-2");
    

            let tag = document.createElement('div');
            tag.classList.add("px-3", "py-1", "bg-blue-100", "rounded-md");

            let tagText = document.createElement('p');
            tagText.classList.add("align-middle", "text-blue-800", "font-semibold")
            tagText.innerHTML = newInput.value;
            
            let counter = document.createElement('i');
            counter.classList.add('counter');
            counter.innerHTML = storedArr.filter(val => {return val.project === newInput.value}).map(val => {return val.project}).length;

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
            wholeDiv.appendChild(topSection);

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

            wholeDiv.appendChild(newTaskBtn);
            area.appendChild(wholeDiv);



            let divBtn = document.createElement('div');
            divBtn.classList.add("add_project", "flex", "flex-row", "items-center", "gap-2", "w-full","h-fit", "px-3", "py-2", "bg-gray-100", "rounded-md", "hover:bg-gray-200", "hover:cursor-pointer");
        
            let icon = document.createElement('div');
            icon.classList.add("fa-solid", "fa-plus", "text-gray-800");
        
            let innerText = document.createElement('p');
            innerText.classList.add("align-middle", "text-gray-800", "font-semibold");
            innerText.innerHTML = 'New project';

            divBtn.appendChild(icon);
            divBtn.appendChild(innerText);
            divBtn.addEventListener('click', addProject);
    
            area.appendChild(divBtn);
            newInput.remove();
        } else if(event.key == 'Escape'){
            let divBtn = document.createElement('div');
            divBtn.classList.add("add_project", "flex", "flex-row", "items-center", "gap-2", "w-full","h-fit", "px-3", "py-2", "bg-gray-100", "rounded-md", "hover:bg-gray-200", "hover:cursor-pointer");
        
            let icon = document.createElement('div');
            icon.classList.add("fa-solid", "fa-plus", "text-gray-800");
        
            let innerText = document.createElement('p');
            innerText.classList.add("align-middle", "text-gray-800", "font-semibold");
            innerText.innerHTML = 'New project';

            divBtn.appendChild(icon);
            divBtn.appendChild(innerText);
            divBtn.addEventListener('click', addProject);
    
            area.appendChild(divBtn);
            newInput.remove();
        }
    });
}
