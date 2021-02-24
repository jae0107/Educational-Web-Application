var questionNumber = 2;
var outputNum = 2;
var randomChoiceNum = 0;

var getParameter = function (param) {
    var returnValue;
    var url = location.href;
    var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
    var temp ='';
    // ?=ㅇ, &=ㄷ, = -> ㅂ, %=ㄴ
    for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split('=')[0];
        if (varName.toUpperCase() == param.toUpperCase()) {

            returnValue = parameters[i].split('=')[1];

            for (var i = 0; i < decodeURIComponent(returnValue).length; i++) {
                //if (decodeURIComponent(returnValue)[i] == '+') {
                    //returnValue[i] = '';
                    //return returnValue[i] + i;
                 //   temp += ' ';
                //} else  {
                    temp += decodeURIComponent(returnValue)[i];
                //}
            }
            //return decodeURIComponent(returnValue);
           // return result;
           for (var i = 0; i < temp.length; i++) {
                if(temp[i]=='ㅂ'){
                    temp = temp.replace('ㅂ', '=');

                } else if(temp[i]=='ㄷ'){
                    temp = temp.replace('ㄷ', '&');

                } else if(temp[i]=='ㄴ'){
                    temp = temp.replace('ㄴ', '%');
                }
            }
           return temp;
        }
    }
};
var getChoiceValue = function () {
    var choices = new Array();
    var s = 0;

    //initialise array
    for (var i = 0; i < 100; i++) {  
        choices[i] = '';  
    }

    for (var i = 0; i < getParameter('age').length; i++) {
        if (getParameter('age')[i] != '`' && getParameter('age')[i] != '^' && getParameter('age')[i] != 'ㄱ') {
            choices[s] += getParameter('age')[i];

        } else if (getParameter('age')[i] == '^') {
            choices[s] += '\n';

        } else if(getParameter('age')[i] == 'ㄱ'){
            s++;

        } else if(getParameter('age')[i] == '`'){
            s++;
        } 
    }
    console.log(choices);
    return choices;
};

function url(){
    var result = new Array();
    var j = 0;
    var tmp = ' ';
    var outputNumber = 2;

    //initialise array
    for (var i = 0; i < 100; i++) {  
        result[i] = '';  
    }

    for (var i = 0; i < getParameter('name').length; i++) {
        if (getParameter('name')[i] != '`' && getParameter('name')[i] != '^') {
            result[j] += getParameter('name')[i];

        } else if (getParameter('name')[i] == '^') {
            result[j] += '\n';

        } else if(getParameter('name')[i] == '`'){
            
            j++;
        } 
    }
    
    for (var i = 0; i < result.length; i++) {
        if (result[i] != '') {
            
            if (i > 0){
                addQuestionStudent();
                
            }
            document.getElementById("output" + (i+1)).innerHTML=result[i];
            //document.write(document.getElementById("output" + (i+1)).innerHTML=result[i])
        }   
    }

    //document.write(document.getElementById("output").innerHTML=result)
    //document.write(document.getElementById("output").innerHTML=getParameter('name'))
    //document.getElementById("output").value=getParameter('name');
    //document.getElementById("output").value=result
    //document.write(document.getElementById("output1").innerHTML=result[0])
    //document.write(Arr_length)
}
function addQuestionStudent(){
    var objRow;
    //qID = 1;
    objRow = document.all["question1"].insertRow();

    var objCell_Id = objRow.insertCell();
    //objCell_Id.innerHTML = "<label for='answer_text'><b>Possible answer</b></label> <input type='text' name='possible_answer' style='width: 300px; height: 40px; font-size: 20px;'' placeholder='Enter a possible answer'> \n";
    
    //objCell_Id.innerHTML ="<tbody><p><h1>Q" + questionNumber + "</h1></p>"+"<tr><td>"+"<p><textarea id='output" + outputNum + "'"+ "style='margin: 0px; width: 764px; height: 328px; font-size: 20px;' disabled></textarea></p></td></tr>" + "</tbody><br>";
    
    //objCell_Id.innerHTML ="<tbody><tr><td></td></tr><p><h1>Q" + questionNumber + "</h1></p>" + "<p><textarea id='output" + outputNum + "'"+ "style='margin: 0px; width: 764px; height: 328px; font-size: 20px;' disabled></textarea></p>"+"<script>"+randomChoice()+"</script></tbody><br>";
    //document.getElementById("output").innerHTML="";
    //qID++;

    if (!("scramble" in Array.prototype)) {
        Object.defineProperty(Array.prototype, "scramble", {
            enumerable: false,
            value: function() {
                var o, i, ln = this.length;
                while (ln--) {
                    i = Math.random() * (ln + 1) | 0;
                    o = this[ln];
                    this[ln] = this[i];
                    this[i] = o;
                }
                return this;
            }
        });
    }

    var quiz = [{"choices": [getChoiceValue()[randomChoiceNum], getChoiceValue()[randomChoiceNum+1], getChoiceValue()[randomChoiceNum+2], getChoiceValue()[randomChoiceNum+3]]
    }];
    var id = "incorrect";
    var tmp = "";
    tmp += "Yout Choice: <tr><td><select id='sel" +questionNumber+ "'><OPTION>choose your answer";
    quiz.forEach(q => q.choices.scramble());
                
    //document.write(quiz[0].choices);
    //document.write("test: " + quiz[0].choices[0] + "<br>");
    // document.write("random: " + quiz[0].choices + "<br>");
    for (var i = 0; i < 4; i++) {
        if (quiz[0].choices[i] == getChoiceValue()[randomChoiceNum]) {
            id = "correct";
        } else {
            id = "incorrect";
        }
        //if (quiz[0].choices[i] != '') {
            //tmp += "<input type='radio' id='" + id + "' name='" + id + "' value='"+(randomChoiceNum+i+1)+"'>" + quiz[0].choices[i] + "<br>";
            tmp += "<OPTION id='" +id+ "' value='"+id+"'>" + quiz[0].choices[i];
        //}
        console.log(quiz[0].choices[i]);
        //document.write("<input type='radio' id='" + id + "' name='" + id + "' value='a'>" + quiz[0].choices[i] + "<br>");
        //document.write(tmp);
    }   
    tmp += "</select></td></tr>";
    objCell_Id.innerHTML ="<tbody><p><h1>Q" + questionNumber + "</h1></p>"+"<tr><td>"+"<p><textarea id='output" + outputNum + "'"+ "style='margin: 0px; width: 764px; height: 328px; font-size: 20px;' disabled></textarea></p>"+tmp+"</td></tr>" + "</tbody><br>";
    

    questionNumber++;
    outputNum++;
    randomChoiceNum = randomChoiceNum + 4;
   
}

function randomChoice(){
    if (!("scramble" in Array.prototype)) {
        Object.defineProperty(Array.prototype, "scramble", {
            enumerable: false,
            value: function() {
                var o, i, ln = this.length;
                while (ln--) {
                    i = Math.random() * (ln + 1) | 0;
                    o = this[ln];
                    this[ln] = this[i];
                    this[i] = o;
                }
                return this;
            }
        });
    }

    var quiz = [{"choices": [getChoiceValue()[randomChoiceNum], getChoiceValue()[randomChoiceNum+1], getChoiceValue()[randomChoiceNum+2], getChoiceValue()[randomChoiceNum+3]]
    }];
    var id = "incorrect";
    var tmp = "";
    tmp = "Yout Choice: <tr><td><select id='sel1'><OPTION>choose your answer";

    quiz.forEach(q => q.choices.scramble());
                
    //document.write(quiz[0].choices);
    //document.write("test: " + quiz[0].choices[0] + "<br>");
    // document.write("random: " + quiz[0].choices + "<br>");
    for (var i = 0; i < 4; i++) {
        if (quiz[0].choices[i] == getChoiceValue()[randomChoiceNum]) {
            id = "correct";
        } else {
            id = "incorrect";
        }
        //if (quiz[0].choices[i] != '') {
            //tmp += "<input type='radio' id='" + id + "' name='" + id + "' value='"+(randomChoiceNum+i+1)+"'>" + quiz[0].choices[i] + "<br>";
            tmp += "<OPTION id='" +id+ "' value='"+id+"'>" + quiz[0].choices[i];
        //}
        
    }   
    tmp += "</select></td></tr>";
    document.write(tmp);
    //tmp;
    randomChoiceNum = randomChoiceNum + 4;
}

function getScore(form) {
    if (window.focus) self.focus(); 
    var tmp = questionNumber - 1;
    //총 문제수를 설정합니다(예제는 5문제)

    //★아래에 각 문제의 정답을 순서대로 나열해 넣습니다
    var answers = new Array(tmp)
    //answers[0] = "사이버 휴게소";
    //var index = $("#ID option").index($("#ID option:selected"));
    for(var i = 0; i < tmp; i++){
        answers[i] = "correct";    
    }
    var score = 0;
    var currElt;
    var currSelection;
    for (i=0; i<tmp; i++) {
        /*currElt = form.elements[i];
        currSelection = currElt.selectedIndex; //answers[i]
        if (currElt.options[currSelection].value == answers[i]) {
            score++;
        }*/
        var sel = document.getElementById("sel"+(i+1));
        var val = sel.options[sel.selectedIndex].value;
        if (val == answers[i]) {
            score++;
        }
    }
    //var sel = document.getElementById("sel");
   // var val = sel.options[sel.selectedIndex].value;
    /*if (val == answers[0]) {
        score++;
    }*/
    //**스코어 계산(문항수에 따라 계산식을 수정하세요(하단 가이드 참조) **//
     //score = Math.round(score*2*10);
    form.yourscore.value = score;
    form.fullmark.value = tmp;
}




