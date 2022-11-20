export function removeProject(event){
    let projectColumn = event.currentTarget.parentNode.parentNode.parentNode;
    projectColumn.remove();
    let idName = event.currentTarget.parentNode.parentNode.parentNode.id;
    
    let storedArr = JSON.parse(localStorage.getItem('storedArr')) || [];
    let projectList = JSON.parse(localStorage.getItem('projectList')) || [];
    for(let i = 0; i < storedArr.length; i++){
        if(storedArr[i].project === idName){
            storedArr.splice(i, 1);
        }
    }
    for(let j = 0; j < projectList.length; j++){
        if(projectList[j] === idName){
            projectList.splice(j, 1);
        }
    }
    localStorage.setItem('storedArr', JSON.stringify(storedArr));
    localStorage.setItem('projectList', JSON.stringify(projectList))

    console.log(idName);

}