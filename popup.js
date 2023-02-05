/* var button = document.getElementById("btn1");
button.addEventListener("click", function(){
     chrome.tabs.create({url:"https://www.goodrx.com/"});
 });

 var button = document.getElementById("btn2");
 button.addEventListener("click", function(){
     chrome.tabs.create({url:"https://www.goodrx.com/"});
 }); */

 function _(id){
    return document.getElementById(id)
}

function getEntry() {
    var txt = _('JournalEntry').value
    var d = new Date()
    _('saveEntries').innerHTML += `<div><p>${txt}</p> <p>${d.toLocaleTimeString()}, ${d.toLocaleDateString()}</p></div>`
}