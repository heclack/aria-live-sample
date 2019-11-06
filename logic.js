
Everest={
    description: 'Everest is a fun-loving Husky pup and the second newest member of the PAW Patrol. She lives with Jake on his snowy mountain and loves \'belly-bogganing\', sliding down on her belly. Ice or snow, she\'s ready to go!',
    portrait:'./pawpatrol/everest.jpg'
}
Marshall = {
    description: 'From the firehouse to his fire truck, Marshall is a Dalmatian who is all action, easily excited, and the clumsy one of the group. The pups will always hear Marshall say, \"I\'m okay!\"',
    portrait:'./pawpatrol/marshall.png'
}

let everestBtn = document.getElementById('Everest');
let marshallBtn = document.getElementById('Marshall');

let getPupInfo = (pup) => {
    let pupDescription = document.getElementById("pup-description");
    pupDescription.innerText = pup.description;
    document.getElementById("pup-portait").setAttribute("aria-label", pup);
    document.getElementById("pup-portait").setAttribute("src", pup.portrait);
   
};

everestBtn.addEventListener("click", () => {
    getPupInfo(Everest)
});
marshallBtn.addEventListener("click", () => {
    getPupInfo(Marshall)
});





function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();














