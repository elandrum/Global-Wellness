var randomnumber = Math.floor(Math.random() * (4)) + 1;

if(randomnumber === 1){
    button = document.getElementById("fun");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://www.google.com/doodles/halloween-2020"});
});
}

if(randomnumber === 2){
    button = document.getElementById("fun");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://www.google.com/doodles/celebrating-bubble-tea"});
});
}

if(randomnumber === 3){
    button = document.getElementById("fun");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://www.bubbleshooter.net/"});
});
}

if(randomnumber === 4){
    button = document.getElementById("fun");
    button.addEventListener("click", function(){
        chrome.tabs.create({url:"https://trex-runner.com/"});
});
}

