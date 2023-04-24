const readAllMessagesAnchor = document.querySelector('.readLink');

const readMessages = () => {
    const notifs = document.querySelectorAll('.notifications');
    // for (let i = 0; i < notifs.length; i++) {
        notifs.forEach(notif => {
            if (notif.classList.contains('unread')) {
                notif.style.backgroundColor = 'white';
            }
        });
    //     if (notifs.classList.contains('unread')) {
    //         notifs
    //     }
    // }
    // return notifs
}
readMessages();