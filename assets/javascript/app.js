var questions = ["Caterpie evolves into Butterfree?", "There are 9 certified Pokémon League Badges?", "Poliwag evolves 3 times?", "Are thunder moves effective against ground element-type Pokémon?", "Pokémon of the same kind and level are not identical?", "TM28 contains Tombstoner?"];
var answers = ["true", "false", "false", "false", "false", "false"];
$("#goButton").on("click", function(event) {
	$(".container2").empty();
	run();

	for (var i = 0; i < questions.length; i++) {
		var newDiv = $("<div>");
		var newFieldSet = $("<fieldset>");
		newFieldSet.append($("<legend>").text("Question " + (i + 1)));
		newFieldSet.append($("<p>").text(questions[i]));
		newFieldSet.append($("<label for='question" + i + "'>").text("True"));
		newFieldSet.append($("<input type='radio' name='answer" + i + "' id='question" + i + "' value=true>"));
		newFieldSet.append($("<label for='false'>").text(" False "));
		newFieldSet.append($("<input type='radio' name='answer" + i + "' id='question" + i + "' value=false>"));
		newFieldSet.append($("<hr>"));	
		newDiv.append(newFieldSet);


		$(".container2").append(newDiv);
	}	
	$(".container2").append($("<input type='submit' id='submitButton' class='btn btn-light gameButton'>"));
	$("#submitButton").on("click", function() {
		endGame();
	});
});

var intervalId;
var count = 60;

var run = function() {
	intervalId = setInterval(decrement, 1000);
	$(".container2").append($("<h2 id='timer'>").text(count));


};

var decrement = function() {
	if (count === 1) {
		endGame();
	} else {
	count--;
	$("#timer").text(count);	
	}
}
var endGame = function() {
	var choices = [];
	for (var i = 0; i < questions.length; i++) {
		choices.push($('input[name=answer' + i + ']:checked').val());
	};
	var correct = 0;
	var wrong = 0;
	console.log(answers);
	console.log(choices);
	for (var i = 0; i < answers.length; i++) {
		if (choices[i] === answers[i]) {
			correct++;
		} else if (choices[i] !== answers[i]) {
			wrong++;
		} 
	};

	$(".container2").empty();
	clearInterval(intervalId);
	$(".container2").append($("<h1>").text("Results!"));
	$(".container2").append($("<h2>").text("Correct: " + correct));
	$(".container2").append($("<h2>").text("Incorrect: " + wrong));
	
}	



