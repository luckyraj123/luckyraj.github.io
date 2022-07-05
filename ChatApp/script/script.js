function StartChat(id) {
    document.getElementById('chatpanel').removeAttribute('style');
    document.getElementById('divstart').setAttribute('style','display');


    hideChatApp();
}
////////////////////////////////////////////////

////show chat list

function showChatList(){
    document.getElementById('side-1').classList.remove('d-none','d-md-block');
    document.getElementById('side-2').classList.add('d-none');
}

function hideChatApp(){
    document.getElementById('side-1').classList.add('d-none','d-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}