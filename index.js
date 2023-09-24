const markAll = document.querySelector('.mark-all-js');
let read = 0;
const unreadNumber = document.querySelector('.unread-number-js')
const notificationsUnread = document.querySelectorAll('.notification');
checkUnread();
const unreadMarker = document.querySelectorAll('.unread');

function checkUnread(){
    for (i=0;i<notificationsUnread.length;i++){
        if(notificationsUnread[i].classList.contains('unread-notification')){
            read +=1;
        }
    }
    unreadNumber.innerHTML = `${read}`;
    
}
markAll.addEventListener('click',(event) =>{
    for(i=0;i<notificationsUnread.length;i++){
        if(notificationsUnread[i].classList.contains('unread-notification')){
            notificationsUnread[i].classList.remove('unread-notification')
            read-=1;

        }
}           removeMarkers();
           checkUnread();
})
function removeMarkers(){
    for (i=0;i<unreadMarker.length;i++){
        unreadMarker[i].remove();
    }
}

notificationsUnread[0].addEventListener('click',(event)=>{
    if(notificationsUnread[0].classList.contains('unread-notification')){
        notificationsUnread[0].classList.remove('unread-notification')
        unreadMarker[0].remove();
        read = read-1;
        unreadNumber.innerHTML = `${read}`;
    } 
})
notificationsUnread[1].addEventListener('click',(event)=>{
    if(notificationsUnread[1].classList.contains('unread-notification')){
        notificationsUnread[1].classList.remove('unread-notification')
        unreadMarker[1].remove();
        read = read-1;
        unreadNumber.innerHTML = `${read}`;
    } 
})
notificationsUnread[1].addEventListener('click',(event)=>{
    if(notificationsUnread[1].classList.contains('unread-notification')){
        notificationsUnread[1].classList.remove('unread-notification')
        unreadMarker[1].remove();
        read = read-1;
        unreadNumber.innerHTML = `${read}`;
    } 
})
notificationsUnread[2].addEventListener('click',(event)=>{
    if(notificationsUnread[2].classList.contains('unread-notification')){
        notificationsUnread[2].classList.remove('unread-notification')
        unreadMarker[2].remove();
        read = read-1;
        unreadNumber.innerHTML = `${read}`;
    } 
})