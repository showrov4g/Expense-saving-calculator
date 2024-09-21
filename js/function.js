function inputFieldWithId(id){
    // let inputValue =  document.getElementById(id).value;
    // return inputValue;
    return parseFloat(document.getElementById(id).value);
}

function showSection(id){
    // let show = document.getElementById(id).classList.remove('hidden')
    // return show;
    return parseFloat(document.getElementById(id).classList.remove('hidden'));
}
function hideSection(id){
    // let hide = document.getElementById(id).classList.add('hidden');
    // return hide;
    return parseFloat(document.getElementById(id).classList.add('hidden'))
}

function markSection(id){
    return document.getElementById(id);
}

