const numberNotification = () => {
    let numberNotif = document.getElementById('notif');
    numberNotif.innerText = 0;
    
};

const readMessages = () => {
  const notifs = document.querySelectorAll(".notifications");
  const readAllMessagesAnchor = document.querySelector(".readLink");
  const redDotNotif = document.querySelectorAll(".dot");

  readAllMessagesAnchor.addEventListener("click", () => {
    numberNotification();
    for (let i = 0; i < notifs.length; i++) {
      notifs[i].style.backgroundColor = "white";
      redDotNotif[i].style.display = "none";
    }
  
  });
 
};


readMessages();

