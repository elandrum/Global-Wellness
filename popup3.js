var button1 = document.getElementById("mood");
button1.addEventListener("click", MoodJournal, false);

function MoodJournal(){
    window.open("https://docs.google.com/document/d/1qauDVMlbMib5N1Saj2875LQjRh8SEmGATr2ckg5U5R4/edit?usp=sharing");
  }

function _(id){
    return document.getElementById(id)
}
