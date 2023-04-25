const readAllMessagesAnchor = document.querySelector('.readLink');
const redDotNotif = document.querySelectorAll('.dot');

const readMessages = () => {
    const notifs = document.querySelectorAll('.notifications');
    readAllMessagesAnchor.addEventListener('click', () => {
        // notifs.forEach(notif => {
        //     if (notif.classList.contains('unread')) {
        //         notif.style.backgroundColor = 'white';
        //     }
        // redDotNotif.forEach(dot => {
        //     dot.style.display = 'none';
        // })
          
        // });

        for (let i = 0; i < notifs.length; i++) {
            notifs[i].style.backgroundColor = 'white';
            redDotNotif[i].style.display = 'none';
        }
    })
       

}

readMessages();