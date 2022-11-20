export function cross(){
    let cntr = 0;
    let checkbox = document.getElementsByClassName('check');
    for(let i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked == true){
            cntr += 1;
        }
    }
    
    let removeBtn = document.getElementById('remove');
    if(cntr > 0){
        removeBtn.classList.remove('hidden');
    } else {
        removeBtn.classList.add('hidden');
    }
    let removeCntr = document.getElementById('remove').getElementsByTagName('i')[0];
    removeCntr.innerHTML = cntr;
}

// project remove function