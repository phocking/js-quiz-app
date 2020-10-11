var container = document.querySelector('.container');
var correctAnswers = ['Paris', 'Columbus', 'st-pauls', 'Ruby', 'Hamlet', 'Casino Royale'];
var score = document.getElementById('score');
var counter = 0;

form.style.display = 'none';
var para = document.createElement('p');
container.addEventListener('change', (e) => {
e.preventDefault();
var element = e.target.value;

if (correctAnswers.includes(element) == true) {


	var parent = e.target.parentNode;
	para.textContent = "Correct! Well done!"
para.style.color = '#fff';
	parent.appendChild(para);
		counter += 1;
		score.textContent = "Total Score: " + counter;
 var allInputs = parent.children;
for (var i = 0; i < allInputs.length; i++){
	allInputs[i].disabled = true
}
} else {

	var mainParent = e.target.parentNode;
	var allInputs = mainParent.children;
	for (var i = 0; i < allInputs.length; i++){
	allInputs[i].disabled = true;
	}
	para.textContent = "X unlucky, wrong answer!";
	para.style.color = 'red';
	mainParent.appendChild(para);
}


});
