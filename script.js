const readAllMessagesAnchor = document.querySelector('.readLink');
const redDotNotif = document.querySelectorAll('.dot');

const readMessages = () => {
    const notifs = document.querySelectorAll('.notifications');
    readAllMessagesAnchor.addEventListener('click', () => {
        notifs.forEach(notif => {
            if (notif.classList.contains('unread')) {
                notif.style.backgroundColor = 'white';
                redDotNotif.style.display = 'none';
            }
          
        });
    })
       
  
}

readMessages();