function showModal(){
    let modal = document.getElementsByClassName('adding_list_item')[0];
    modal.classList.remove('hidden');

    let body = document.querySelector("body");
    body.style.overflow = "hidden";
}

function hideModal(){
    let modal = document.getElementsByClassName('adding_list_item')[0];

    let nameVal = document.getElementsByClassName('name')[0].value;
    let commentVal = document.getElementsByClassName('comment')[0].value;
    let dateVal = document.getElementsByClassName('date')[0].value;
    let statusVal = document.getElementsByClassName('status')[0].value;

    if(nameVal !== '' && commentVal !== '' && dateVal !== '' && statusVal !== ''){
        modal.classList.add('hidden');
        document.getElementsByClassName('name')[0].value = '';
        document.getElementsByClassName('comment')[0].value = '';
        document.getElementsByClassName('date')[0].value = '';
        document.getElementsByClassName('status')[0].value = '';

        let body = document.querySelector("body");
        body.style.overflow = "auto";
    }   
}

export {showModal, hideModal};