function inputFieldWithId(id){
    let inputValue =  document.getElementById(id).value;
    return inputValue;
}

function showSection(id){
    let show = document.getElementById(id).classList.remove('hidden')
    return show;
}


