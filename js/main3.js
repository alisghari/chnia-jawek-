var submitButton = document.getElementById('submit');
var ans1 = document.getElementById('answer1')
var ans2 = document.getElementById('answer2')
var ans3 = document.getElementById('answer3')
var ans4 = document.getElementById('answer4')
var ans5 = document.getElementById('answer5')
var ans6 = document.getElementById('answer6')
var ans7 = document.getElementById('answer7')
var ans8 = document.getElementById('answer8')
var ans9 = document.getElementById('answer9')
var ans10 = document.getElementById('answer10')
var ans11 = document.getElementById('answer11')
var ans12 = document.getElementById('answer12')




function showResults() {
    if (ans1.checked == true && ans3.checked == true) {
        alert("You are sboui");

    }
    if (ans1.checked == true && ans4.checked == true) {
        alert("You are azza");

    }
    if (ans3.checked == true && ans5.checked == true) {
        alert("You are beji");

    }
    if (ans6.checked == true && ans8.checked == true) {
        alert("You are Dalenda");

    }
    if (ans1.checked == true && ans8.checked == true) {
        alert("You are fouchika");

    }
    if (ans1.checked == true && ans10.checked == true) {
        alert("You are Ameni");

    }


}
submitButton.addEventListener('click', showResults);