$(document).on('turbolinks:load', function() {
  $(".feedback-status").hide();
  allow_submit = 0

  $(".submit-answer").click(function(){
    if(allow_submit != 0){
      alert("You already submit!")
      return;
    }
    initbmp();
    invaild_answers_count = 0
    var_duplicate=0;
    role_duplicate=0;
    your_score = 0
    var variables = new Array();
    var roles = new Array();
    var codeID = new Array();
    i=0;
    $("form").each(function(){
      code_id = $(this).parent().attr("code-id");
      course_id = $(this).parent().attr("course-id");
      console.log("codeID:"+code_id);
      console.log("courseID1:"+course_id);
      variable = $(this).find("#student_answer_variable").val();
      role = $(this).find("#student_answer_role").val();
      variables[i]=variable;
      roles[i]=role;
      codeID[i]=code_id;
      console.log(variables);
      console.log(roles);
      console.log(codeID);
      console.log(variables.length);
      console.log(roles.length);
      // 判断未填写的组合数
      i=i+1;
      if(variable == "" || role == ""){
        $(this).find(".no-input").removeClass("hidden")
        invaild_answers_count += 1
      };
      for (var j=0; j<variables.length-1; j++) {
        for (var k=j+1; k<variables.length; k++) {
          if(codeID[j] == codeID[k] && variables[j] == variables[k]){
            //$(this).find(".no-input").removeClass("hidden")
            var_duplicate += 1
          };
          if(codeID[j] == codeID[k] && roles[j] == roles[k]){
            //$(this).find(".no-input").removeClass("hidden")
            role_duplicate += 1
            console.log(role_duplicate +" "+roles[j]+" "+codeID[0]);
          };
        }
      }
        
    });
    if(invaild_answers_count != 0){
      alert(`You have ${invaild_answers_count} answers not choosen!`);
      return;
    };
    if(var_duplicate != 0){
      alert(`You cannot choose the same variable!`);
      return;
    };
    if(role_duplicate != 0){
      alert(`You cannot choose the same role!`);
      return;
    };
    alert("Submission succeeds!")
    $("form").each(function(){
     // if($(this).parent().attr("course-id")=="0"){

      //} else {
        allow_submit += 1
        $().submit();
        code_id = $(this).parent().attr("code-id");
        course_id = $(this).parent().attr("course-id");
        console.log(code_id);
        console.log("courseID2:"+course_id);
        variable = $(this).find("#student_answer_variable").val();
        role = $(this).find("#student_answer_role").val();

        $.ajax({
          url: "/student_answers/submit",
          method: 'post',
          data: {
            code_id: code_id,
            variable: variable,
            role: role
          },
          success: (data) => {
            //if(course_id!="0"){
              quiz_id = $(this).parent().prev().find(".feedback-status").attr("quiz-id")
              if(data.status == "correct"){
                your_score += 1
                $(".your-score").text(your_score);
                $(this).find(".right").removeClass("hidden");
                $(this).parent().find(".feedback-status").hide();
                $(this).parent().prev().find(".feedback-status").hide();
              }else if(data.status == "incorrect"){
                $(this).find(".wrong").removeClass("hidden");
                $.ajax({
                  url: "/quizzes/judge_deadline",
                  data: { id: quiz_id },
                  method: 'post',
                  success: (data) => {
                    if(data.status == "ok"){
                      $(this).parent().find(".feedback-status").show();
                      $(this).parent().prev().find(".feedback-status").show();
                    }else if(data.status == "no"){
                      $(this).parent().find(".feedback-status").hide();
                      $(this).parent().prev().find(".feedback-status").hide();
                    }
                  }
                });
              }
            //}
              
            $.ajax({
              url: "/student_answers/save_score",
              data: { quiz_id: quiz_id, score: your_score },
              method: 'post',
              success: (data) => {
              }
            });
          }
        });
      //}
        
    });
    if(course_id=="0"){

    } else {
      trigger();
    }
    
  });
  // 初始化位图
  function initbmp(){
    $(".right").each(function(){
      if(!$(this).hasClass("hidden")){
        $(this).addClass("hidden")
      }
    })
    $(".wrong").each(function(){
      if(!$(this).hasClass("hidden")){
        $(this).addClass("hidden")
      }
    })
    $(".no-input").each(function(){
      if(!$(this).hasClass("hidden")){
        $(this).addClass("hidden")
      }
    })
  }
function trigger(){
  var count = 0;
  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      if (document.getElementById("answer"+i.toString()+"_"+j.toString())!=null) {
        document.getElementById("answer"+i.toString()+"_"+j.toString()).click();
      } 
      count=count+1;
    }
  }/*
  if (count==81) {
    location.reload();
  }*/
  console.log(count);
  /*
    if (document.getElementById("answer1_1")!=null) {
      document.getElementById("answer1_1").click();
    }
    if (document.getElementById("answer1_2")!=null) {
      document.getElementById("answer1_2").click();
    }
    if (document.getElementById("answer1_3")!=null) {
      document.getElementById("answer1_3").click();
    } 
    if (document.getElementById("answer2_1")!=null) {
      document.getElementById("answer2_1").click();
    }*/
  }
});