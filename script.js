const readAllMessagesAnchor = document.querySelector('.readLink');

const readMessages = () => {
    const notifs = document.querySelectorAll('.notifications');
    for (let i = 0; i < notifs.length; i++) {
        if (notifs[i].classList.contains('unread')) {
            // loggging to see if the if statement logs correct index and text
            console.log(notifs[i], i, notifs[i].innerText);
        }
    }
}
readMessages();