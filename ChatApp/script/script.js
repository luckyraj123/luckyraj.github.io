function StartChat(id) {
    document.getElementById('chatpanel').removeAttribute('style');
    document.getElementById('divstart').setAttribute('style', 'display');


    hideChatApp();
}
////////////////////////////////////////////////

////show chat list

function showChatList() {
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
}

function hideChatApp() {
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}
//////message send

function OnKeyDown() {
    document.addEventListener('keydown', function (key) {
        if (key.which == 32 ) {
            SendMessage();
        }
    });
}

function SendMessage() {
    var message = ` <div class="row justify-content-end">
    <div class="col-6 col-sm-6 col-md-6">
        <p class="sent float-right"> 
        ${document.getElementById('txtMessage').value}
            <span class="time float-right">1:11 AM</span>
        </p>
    </div>
    <div class="col-2 col-sm-1 col-md-1">
        <img src="photo/pngegg.png" alt="no image" class="chat-pic">
    </div>
</div>`

    document.getElementById('messages').innerHTML += message;
    document.getElementById('txtMessage').value ='';
    document.getElementById('txtMessage').focus();

    document.getElementById('messages').scrollTo(0, document.getElementById('messages').clientHeight)
}


/////////////////////////////////////
// FIREBASE CODE 

// function singin(){
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
// }
var provider  = firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}
function googleSignout() {
    firebase.auth().signOut()
     
    .then(function() {
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
 }