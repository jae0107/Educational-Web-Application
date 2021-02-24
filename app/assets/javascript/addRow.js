//var qID = 0;
var questionNumber = 3;
var formNum = 3
var inputNameNum = 3;
var option = 9;

function rowAdd(){
	var id = "multipleChoice";
	var objRow;
	objRow = document.all[id].insertRow();

	var objCell_Id = objRow.insertCell();
	objCell_Id.innerHTML = "<label for='answer_text'><b>Possible answer</b></label> <input type='text' name='possible_answer' style='width: 300px; height: 40px; font-size: 20px;'' placeholder='Enter a possible answer'> \n";
}

function addQuestion(){
	var objRow;
	//qID = 1;
	objRow = document.all["question2"].insertRow();

	var objCell_Id = objRow.insertCell();
	//objCell_Id.innerHTML = "<label for='answer_text'><b>Possible answer</b></label> <input type='text' name='possible_answer' style='width: 300px; height: 40px; font-size: 20px;'' placeholder='Enter a possible answer'> \n";
	objCell_Id.innerHTML ="<p><h1>Q" + questionNumber + "</h1></p>" + "<form name='form" + formNum + "' action='./receiver.html' method='GET'>" + "<textarea id='inputName" + inputNameNum + "'"+ "name='name' placeholder='Enter your code and a question' style='margin: 0px; width: 764px; height: 328px; font-size: 20px;'></textarea> \n <label for='answer_text'><b>Correct answer</b></label><input type='text' id='option" + option + "' name='correct_answer' style='width: 300px; height: 40px; font-size: 20px;'' placeholder='Enter the correct answer'>\n<p><label for='answer_text'><b>Possible answer</b></label><input type='text' id='option" + (option+1) + "' name='possible_answer1' style='width: 300px; height: 40px; font-size: 20px;' placeholder='Enter a possible answer'></p><p><label for='answer_text'><b>Possible answer</b></label><input type='text' id='option" + (option+2) + "' name='possible_answer2' style='width: 300px; height: 40px; font-size: 20px;'' placeholder='Enter a possible answer'></p><p><label for='answer_text'><b>Possible answer</b></label><input type='text' id='option" + (option+3) + "' name='possible_answer3' style='width: 300px; height: 40px; font-size: 20px;' placeholder='Enter a possible answer'></p><input type='button' value = 'Open' onclick='openTextFile()'></form>";
	//document.getElementById("output").innerHTML="";
	//qID++;
	questionNumber++;
	formNum++;
	inputNameNum++;
	option = option + 4;
}

function send(){
	var name = "";
	var choice = "";
	for (var i = 1; i < inputNameNum; i++) {
		if (i == 1) {
			name += document.getElementById("inputName" + i).value;

		} else {
			name +="`" + document.getElementById("inputName" + i).value;
		}
	}

	var j = 1;
	while(j < option){
		if (j == 1) {
			choice += document.getElementById("option" + j).value;

		} else if ((j%4) == 1 && j != 1) {
			choice +="`" + document.getElementById("option" + j).value;

		} else {
			choice +="ㄱ" + document.getElementById("option" + j).value;
		}

		j++;
	}

	//name = name.replace(/\r?\n/g, '<br />'); //works on the background
	name = name.replace(/\r?\n/g, '^');
	for (var i = 0; i < name.length; i++) {
		if(name[i]=='='){
			name = name.replace('=', 'ㅂ');

		} else if(name[i]=='&'){
			name = name.replace('&', 'ㄷ');

		}  else if(name[i]=='%'){
			name = name.replace('%', 'ㄴ');
		}
	}
	//var age = document.form1.age.value;
	//document.location.href="receiver.html?name="+name1+name2+"&age="+age;
	// ?=ㅇ, &=ㄷ, = -> ㅂ, %=ㄴ
	document.location.href="receiver.html?name="+name+"&age="+choice;
}