$(document).ready(function() {
	var url = location.href;
	var parameters = url.slice(url.indexOf('quizzes')+8, url.length).split('?')
	console.log(url.slice(url.indexOf('quizzes')+8, url.length).split('?'))
	console.log(parameters[0]);
	
	$('select[id=variable1]').val(window.localStorage.getItem('variable1_'+parameters[0].toString()));
	$('select[id=student_answer_role1]').val(window.localStorage.getItem('student_answer_role1_'+parameters[0].toString()));
	$('select[id=variable1]').change(function() {
		window.localStorage.setItem('variable1_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role1]').change(function() {
		window.localStorage.setItem('student_answer_role1_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);	
	});

	$('select[id=variable2]').val(window.localStorage.getItem('variable2_'+parameters[0].toString()));
	$('select[id=student_answer_role2]').val(window.localStorage.getItem('student_answer_role2_'+parameters[0].toString()));
	$('select[id=variable2]').change(function() {
		window.localStorage.setItem('variable2_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role2]').change(function() {
		window.localStorage.setItem('student_answer_role2_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable3]').val(window.localStorage.getItem('variable3_'+parameters[0].toString()));
	$('select[id=student_answer_role3]').val(window.localStorage.getItem('student_answer_role3_'+parameters[0].toString()));
	$('select[id=variable3]').change(function() {
		window.localStorage.setItem('variable3_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role3]').change(function() {
		window.localStorage.setItem('student_answer_role3_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable4]').val(window.localStorage.getItem('variable4_'+parameters[0].toString()));
	$('select[id=student_answer_role4]').val(window.localStorage.getItem('student_answer_role4_'+parameters[0].toString()));
	$('select[id=variable4]').change(function() {
		window.localStorage.setItem('variable4_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role4]').change(function() {
		window.localStorage.setItem('student_answer_role4_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable5]').val(window.localStorage.getItem('variable5_'+parameters[0].toString()));
	$('select[id=student_answer_role5]').val(window.localStorage.getItem('student_answer_role5_'+parameters[0].toString()));
	$('select[id=variable5]').change(function() {
		window.localStorage.setItem('variable5_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role5]').change(function() {
		window.localStorage.setItem('student_answer_role5_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable6]').val(window.localStorage.getItem('variable6_'+parameters[0].toString()));
	$('select[id=student_answer_role6]').val(window.localStorage.getItem('student_answer_role6_'+parameters[0].toString()));
	$('select[id=variable6]').change(function() {
		window.localStorage.setItem('variable6_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role6]').change(function() {
		window.localStorage.setItem('student_answer_role6_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable7]').val(window.localStorage.getItem('variable7_'+parameters[0].toString()));
	$('select[id=student_answer_role7]').val(window.localStorage.getItem('student_answer_role7_'+parameters[0].toString()));
	$('select[id=variable7]').change(function() {
		window.localStorage.setItem('variable7_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role7]').change(function() {
		window.localStorage.setItem('student_answer_role7_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable8]').val(window.localStorage.getItem('variable8_'+parameters[0].toString()));
	$('select[id=student_answer_role8]').val(window.localStorage.getItem('student_answer_role8_'+parameters[0].toString()));
	$('select[id=variable8]').change(function() {
		window.localStorage.setItem('variable8_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role8]').change(function() {
		window.localStorage.setItem('student_answer_role8_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable9]').val(window.localStorage.getItem('variable9_'+parameters[0].toString()));
	$('select[id=student_answer_role9]').val(window.localStorage.getItem('student_answer_role9_'+parameters[0].toString()));
	$('select[id=variable9]').change(function() {
		window.localStorage.setItem('variable9_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role9]').change(function() {
		window.localStorage.setItem('student_answer_role9_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable10]').val(window.localStorage.getItem('variable10_'+parameters[0].toString()));
	$('select[id=student_answer_role10]').val(window.localStorage.getItem('student_answer_role10_'+parameters[0].toString()));
	$('select[id=variable10]').change(function() {
		window.localStorage.setItem('variable10_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role10]').change(function() {
		window.localStorage.setItem('student_answer_role10_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable11]').val(window.localStorage.getItem('variable11_'+parameters[0].toString()));
	$('select[id=student_answer_role11]').val(window.localStorage.getItem('student_answer_role11_'+parameters[0].toString()));
	$('select[id=variable11]').change(function() {
		window.localStorage.setItem('variable11_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role11]').change(function() {
		window.localStorage.setItem('student_answer_role11_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable12]').val(window.localStorage.getItem('variable12_'+parameters[0].toString()));
	$('select[id=student_answer_role12]').val(window.localStorage.getItem('student_answer_role12_'+parameters[0].toString()));
	$('select[id=variable12]').change(function() {
		window.localStorage.setItem('variable12_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role12]').change(function() {
		window.localStorage.setItem('student_answer_role12_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable13]').val(window.localStorage.getItem('variable13_'+parameters[0].toString()));
	$('select[id=student_answer_role13]').val(window.localStorage.getItem('student_answer_role13_'+parameters[0].toString()));
	$('select[id=variable13]').change(function() {
		window.localStorage.setItem('variable13_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role13]').change(function() {
		window.localStorage.setItem('student_answer_role13_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable14]').val(window.localStorage.getItem('variable14_'+parameters[0].toString()));
	$('select[id=student_answer_role14]').val(window.localStorage.getItem('student_answer_role14_'+parameters[0].toString()));
	$('select[id=variable14]').change(function() {
		window.localStorage.setItem('variable14_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role14]').change(function() {
		window.localStorage.setItem('student_answer_role14_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable15]').val(window.localStorage.getItem('variable15_'+parameters[0].toString()));
	$('select[id=student_answer_role15]').val(window.localStorage.getItem('student_answer_role15_'+parameters[0].toString()));
	$('select[id=variable15]').change(function() {
		window.localStorage.setItem('variable15_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role15]').change(function() {
		window.localStorage.setItem('student_answer_role15_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable16]').val(window.localStorage.getItem('variable16_'+parameters[0].toString()));
	$('select[id=student_answer_role16]').val(window.localStorage.getItem('student_answer_role16_'+parameters[0].toString()));
	$('select[id=variable16]').change(function() {
		window.localStorage.setItem('variable16_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role16]').change(function() {
		window.localStorage.setItem('student_answer_role16_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable17]').val(window.localStorage.getItem('variable17_'+parameters[0].toString()));
	$('select[id=student_answer_role17]').val(window.localStorage.getItem('student_answer_role17_'+parameters[0].toString()));
	$('select[id=variable17]').change(function() {
		window.localStorage.setItem('variable17_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role17]').change(function() {
		window.localStorage.setItem('student_answer_role17_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable18]').val(window.localStorage.getItem('variable18_'+parameters[0].toString()));
	$('select[id=student_answer_role18]').val(window.localStorage.getItem('student_answer_role18_'+parameters[0].toString()));
	$('select[id=variable18]').change(function() {
		window.localStorage.setItem('variable18_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role18]').change(function() {
		window.localStorage.setItem('student_answer_role18_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable19]').val(window.localStorage.getItem('variable19_'+parameters[0].toString()));
	$('select[id=student_answer_role19]').val(window.localStorage.getItem('student_answer_role19_'+parameters[0].toString()));
	$('select[id=variable19]').change(function() {
		window.localStorage.setItem('variable19_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role19]').change(function() {
		window.localStorage.setItem('student_answer_role19_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable20]').val(window.localStorage.getItem('variable20_'+parameters[0].toString()));
	$('select[id=student_answer_role20]').val(window.localStorage.getItem('student_answer_role20_'+parameters[0].toString()));
	$('select[id=variable20]').change(function() {
		window.localStorage.setItem('variable20_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role20]').change(function() {
		window.localStorage.setItem('student_answer_role20_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable21]').val(window.localStorage.getItem('variable21_'+parameters[0].toString()));
	$('select[id=student_answer_role21]').val(window.localStorage.getItem('student_answer_role21_'+parameters[0].toString()));
	$('select[id=variable21]').change(function() {
		window.localStorage.setItem('variable21_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role21]').change(function() {
		window.localStorage.setItem('student_answer_role21_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable22]').val(window.localStorage.getItem('variable22_'+parameters[0].toString()));
	$('select[id=student_answer_role22]').val(window.localStorage.getItem('student_answer_role22_'+parameters[0].toString()));
	$('select[id=variable22]').change(function() {
		window.localStorage.setItem('variable22_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role22]').change(function() {
		window.localStorage.setItem('student_answer_role22_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable23]').val(window.localStorage.getItem('variable23_'+parameters[0].toString()));
	$('select[id=student_answer_role23]').val(window.localStorage.getItem('student_answer_role23_'+parameters[0].toString()));
	$('select[id=variable23]').change(function() {
		window.localStorage.setItem('variable23_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role23]').change(function() {
		window.localStorage.setItem('student_answer_role23_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable24]').val(window.localStorage.getItem('variable24_'+parameters[0].toString()));
	$('select[id=student_answer_role24]').val(window.localStorage.getItem('student_answer_role24_'+parameters[0].toString()));
	$('select[id=variable24]').change(function() {
		window.localStorage.setItem('variable24_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role24]').change(function() {
		window.localStorage.setItem('student_answer_role24_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable25]').val(window.localStorage.getItem('variable25_'+parameters[0].toString()));
	$('select[id=student_answer_role25]').val(window.localStorage.getItem('student_answer_role25_'+parameters[0].toString()));
	$('select[id=variable25]').change(function() {
		window.localStorage.setItem('variable25_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role25]').change(function() {
		window.localStorage.setItem('student_answer_role25_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable26]').val(window.localStorage.getItem('variable26_'+parameters[0].toString()));
	$('select[id=student_answer_role26]').val(window.localStorage.getItem('student_answer_role26_'+parameters[0].toString()));
	$('select[id=variable26]').change(function() {
		window.localStorage.setItem('variable26_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role26]').change(function() {
		window.localStorage.setItem('student_answer_role26_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable27]').val(window.localStorage.getItem('variable27_'+parameters[0].toString()));
	$('select[id=student_answer_role27]').val(window.localStorage.getItem('student_answer_role27_'+parameters[0].toString()));
	$('select[id=variable27]').change(function() {
		window.localStorage.setItem('variable27_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role27]').change(function() {
		window.localStorage.setItem('student_answer_role27_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable28]').val(window.localStorage.getItem('variable28_'+parameters[0].toString()));
	$('select[id=student_answer_role28]').val(window.localStorage.getItem('student_answer_role28_'+parameters[0].toString()));
	$('select[id=variable28]').change(function() {
		window.localStorage.setItem('variable28_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role28]').change(function() {
		window.localStorage.setItem('student_answer_role28_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable29]').val(window.localStorage.getItem('variable29_'+parameters[0].toString()));
	$('select[id=student_answer_role29]').val(window.localStorage.getItem('student_answer_role29_'+parameters[0].toString()));
	$('select[id=variable29]').change(function() {
		window.localStorage.setItem('variable29_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role29]').change(function() {
		window.localStorage.setItem('student_answer_role29_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable30]').val(window.localStorage.getItem('variable30_'+parameters[0].toString()));
	$('select[id=student_answer_role30]').val(window.localStorage.getItem('student_answer_role30_'+parameters[0].toString()));
	$('select[id=variable30]').change(function() {
		window.localStorage.setItem('variable30_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role30]').change(function() {
		window.localStorage.setItem('student_answer_role30_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable31]').val(window.localStorage.getItem('variable31_'+parameters[0].toString()));
	$('select[id=student_answer_role31]').val(window.localStorage.getItem('student_answer_role31_'+parameters[0].toString()));
	$('select[id=variable31]').change(function() {
		window.localStorage.setItem('variable31_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role31]').change(function() {
		window.localStorage.setItem('student_answer_role31_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable32]').val(window.localStorage.getItem('variable32_'+parameters[0].toString()));
	$('select[id=student_answer_role32]').val(window.localStorage.getItem('student_answer_role32_'+parameters[0].toString()));
	$('select[id=variable32]').change(function() {
		window.localStorage.setItem('variable32_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role32]').change(function() {
		window.localStorage.setItem('student_answer_role32_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable33]').val(window.localStorage.getItem('variable33_'+parameters[0].toString()));
	$('select[id=student_answer_role33]').val(window.localStorage.getItem('student_answer_role33_'+parameters[0].toString()));
	$('select[id=variable33]').change(function() {
		window.localStorage.setItem('variable33_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role33]').change(function() {
		window.localStorage.setItem('student_answer_role33_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable34]').val(window.localStorage.getItem('variable34_'+parameters[0].toString()));
	$('select[id=student_answer_role34]').val(window.localStorage.getItem('student_answer_role34_'+parameters[0].toString()));
	$('select[id=variable34]').change(function() {
		window.localStorage.setItem('variable34_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role34]').change(function() {
		window.localStorage.setItem('student_answer_role34_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable35]').val(window.localStorage.getItem('variable35_'+parameters[0].toString()));
	$('select[id=student_answer_role35]').val(window.localStorage.getItem('student_answer_role35_'+parameters[0].toString()));
	$('select[id=variable35]').change(function() {
		window.localStorage.setItem('variable35_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role35]').change(function() {
		window.localStorage.setItem('student_answer_role35_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable36]').val(window.localStorage.getItem('variable36_'+parameters[0].toString()));
	$('select[id=student_answer_role36]').val(window.localStorage.getItem('student_answer_role36_'+parameters[0].toString()));
	$('select[id=variable36]').change(function() {
		window.localStorage.setItem('variable36_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role36]').change(function() {
		window.localStorage.setItem('student_answer_role36_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable37]').val(window.localStorage.getItem('variable37_'+parameters[0].toString()));
	$('select[id=student_answer_role37]').val(window.localStorage.getItem('student_answer_role37_'+parameters[0].toString()));
	$('select[id=variable37]').change(function() {
		window.localStorage.setItem('variable37_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role37]').change(function() {
		window.localStorage.setItem('student_answer_role37_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable38]').val(window.localStorage.getItem('variable38_'+parameters[0].toString()));
	$('select[id=student_answer_role38]').val(window.localStorage.getItem('student_answer_role38_'+parameters[0].toString()));
	$('select[id=variable38]').change(function() {
		window.localStorage.setItem('variable38_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role38]').change(function() {
		window.localStorage.setItem('student_answer_role38_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable39]').val(window.localStorage.getItem('variable39_'+parameters[0].toString()));
	$('select[id=student_answer_role39]').val(window.localStorage.getItem('student_answer_role39_'+parameters[0].toString()));
	$('select[id=variable39]').change(function() {
		window.localStorage.setItem('variable39_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role39]').change(function() {
		window.localStorage.setItem('student_answer_role39_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable40]').val(window.localStorage.getItem('variable40_'+parameters[0].toString()));
	$('select[id=student_answer_role40]').val(window.localStorage.getItem('student_answer_role40_'+parameters[0].toString()));
	$('select[id=variable40]').change(function() {
		window.localStorage.setItem('variable40_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role40]').change(function() {
		window.localStorage.setItem('student_answer_role40_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable41]').val(window.localStorage.getItem('variable41_'+parameters[0].toString()));
	$('select[id=student_answer_role41]').val(window.localStorage.getItem('student_answer_role41_'+parameters[0].toString()));
	$('select[id=variable41]').change(function() {
		window.localStorage.setItem('variable41_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role41]').change(function() {
		window.localStorage.setItem('student_answer_role41_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable42]').val(window.localStorage.getItem('variable42_'+parameters[0].toString()));
	$('select[id=student_answer_role42]').val(window.localStorage.getItem('student_answer_role42_'+parameters[0].toString()));
	$('select[id=variable42]').change(function() {
		window.localStorage.setItem('variable42_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role42]').change(function() {
		window.localStorage.setItem('student_answer_role42_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable43]').val(window.localStorage.getItem('variable43_'+parameters[0].toString()));
	$('select[id=student_answer_role43]').val(window.localStorage.getItem('student_answer_role43_'+parameters[0].toString()));
	$('select[id=variable43]').change(function() {
		window.localStorage.setItem('variable43_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role43]').change(function() {
		window.localStorage.setItem('student_answer_role43_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable44]').val(window.localStorage.getItem('variable44_'+parameters[0].toString()));
	$('select[id=student_answer_role44]').val(window.localStorage.getItem('student_answer_role44_'+parameters[0].toString()));
	$('select[id=variable44]').change(function() {
		window.localStorage.setItem('variable44_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role44]').change(function() {
		window.localStorage.setItem('student_answer_role44_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable45]').val(window.localStorage.getItem('variable45_'+parameters[0].toString()));
	$('select[id=student_answer_role45]').val(window.localStorage.getItem('student_answer_role45_'+parameters[0].toString()));
	$('select[id=variable45]').change(function() {
		window.localStorage.setItem('variable45_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role45]').change(function() {
		window.localStorage.setItem('student_answer_role45_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable46]').val(window.localStorage.getItem('variable46_'+parameters[0].toString()));
	$('select[id=student_answer_role46]').val(window.localStorage.getItem('student_answer_role46_'+parameters[0].toString()));
	$('select[id=variable46]').change(function() {
		window.localStorage.setItem('variable46_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role46]').change(function() {
		window.localStorage.setItem('student_answer_role46_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable47]').val(window.localStorage.getItem('variable47_'+parameters[0].toString()));
	$('select[id=student_answer_role47]').val(window.localStorage.getItem('student_answer_role47_'+parameters[0].toString()));
	$('select[id=variable47]').change(function() {
		window.localStorage.setItem('variable47_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role47]').change(function() {
		window.localStorage.setItem('student_answer_role47_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable48]').val(window.localStorage.getItem('variable48_'+parameters[0].toString()));
	$('select[id=student_answer_role48]').val(window.localStorage.getItem('student_answer_role48_'+parameters[0].toString()));
	$('select[id=variable48]').change(function() {
		window.localStorage.setItem('variable48_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role48]').change(function() {
		window.localStorage.setItem('student_answer_role48_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable49]').val(window.localStorage.getItem('variable49_'+parameters[0].toString()));
	$('select[id=student_answer_role49]').val(window.localStorage.getItem('student_answer_role49_'+parameters[0].toString()));
	$('select[id=variable49]').change(function() {
		window.localStorage.setItem('variable49_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role49]').change(function() {
		window.localStorage.setItem('student_answer_role49_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable50]').val(window.localStorage.getItem('variable50_'+parameters[0].toString()));
	$('select[id=student_answer_role50]').val(window.localStorage.getItem('student_answer_role50_'+parameters[0].toString()));
	$('select[id=variable50]').change(function() {
		window.localStorage.setItem('variable50_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role50]').change(function() {
		window.localStorage.setItem('student_answer_role50_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable51]').val(window.localStorage.getItem('variable51_'+parameters[0].toString()));
	$('select[id=student_answer_role51]').val(window.localStorage.getItem('student_answer_role51_'+parameters[0].toString()));
	$('select[id=variable51]').change(function() {
		window.localStorage.setItem('variable51_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role51]').change(function() {
		window.localStorage.setItem('student_answer_role51_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable52]').val(window.localStorage.getItem('variable52_'+parameters[0].toString()));
	$('select[id=student_answer_role52]').val(window.localStorage.getItem('student_answer_role52_'+parameters[0].toString()));
	$('select[id=variable52]').change(function() {
		window.localStorage.setItem('variable52_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role52]').change(function() {
		window.localStorage.setItem('student_answer_role52_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable53]').val(window.localStorage.getItem('variable53_'+parameters[0].toString()));
	$('select[id=student_answer_role53]').val(window.localStorage.getItem('student_answer_role53_'+parameters[0].toString()));
	$('select[id=variable53]').change(function() {
		window.localStorage.setItem('variable53_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role53]').change(function() {
		window.localStorage.setItem('student_answer_role53_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable54]').val(window.localStorage.getItem('variable54_'+parameters[0].toString()));
	$('select[id=student_answer_role54]').val(window.localStorage.getItem('student_answer_role54_'+parameters[0].toString()));
	$('select[id=variable54]').change(function() {
		window.localStorage.setItem('variable54_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role54]').change(function() {
		window.localStorage.setItem('student_answer_role54_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable55]').val(window.localStorage.getItem('variable55_'+parameters[0].toString()));
	$('select[id=student_answer_role55]').val(window.localStorage.getItem('student_answer_role55_'+parameters[0].toString()));
	$('select[id=variable55]').change(function() {
		window.localStorage.setItem('variable55_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role55]').change(function() {
		window.localStorage.setItem('student_answer_role55_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable56]').val(window.localStorage.getItem('variable56_'+parameters[0].toString()));
	$('select[id=student_answer_role56]').val(window.localStorage.getItem('student_answer_role56_'+parameters[0].toString()));
	$('select[id=variable56]').change(function() {
		window.localStorage.setItem('variable56_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role56]').change(function() {
		window.localStorage.setItem('student_answer_role56_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable57]').val(window.localStorage.getItem('variable57_'+parameters[0].toString()));
	$('select[id=student_answer_role57]').val(window.localStorage.getItem('student_answer_role57_'+parameters[0].toString()));
	$('select[id=variable57]').change(function() {
		window.localStorage.setItem('variable57_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role57]').change(function() {
		window.localStorage.setItem('student_answer_role57_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable58]').val(window.localStorage.getItem('variable58_'+parameters[0].toString()));
	$('select[id=student_answer_role58]').val(window.localStorage.getItem('student_answer_role58_'+parameters[0].toString()));
	$('select[id=variable58]').change(function() {
		window.localStorage.setItem('variable58_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role58]').change(function() {
		window.localStorage.setItem('student_answer_role58_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable59]').val(window.localStorage.getItem('variable59_'+parameters[0].toString()));
	$('select[id=student_answer_role59]').val(window.localStorage.getItem('student_answer_role59_'+parameters[0].toString()));
	$('select[id=variable59]').change(function() {
		window.localStorage.setItem('variable59_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role59]').change(function() {
		window.localStorage.setItem('student_answer_role59_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable60]').val(window.localStorage.getItem('variable60_'+parameters[0].toString()));
	$('select[id=student_answer_role60]').val(window.localStorage.getItem('student_answer_role60_'+parameters[0].toString()));
	$('select[id=variable60]').change(function() {
		window.localStorage.setItem('variable60_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role60]').change(function() {
		window.localStorage.setItem('student_answer_role60_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable61]').val(window.localStorage.getItem('variable61_'+parameters[0].toString()));
	$('select[id=student_answer_role61]').val(window.localStorage.getItem('student_answer_role61_'+parameters[0].toString()));
	$('select[id=variable61]').change(function() {
		window.localStorage.setItem('variable61_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role61]').change(function() {
		window.localStorage.setItem('student_answer_role61_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable62]').val(window.localStorage.getItem('variable62_'+parameters[0].toString()));
	$('select[id=student_answer_role62]').val(window.localStorage.getItem('student_answer_role62_'+parameters[0].toString()));
	$('select[id=variable62]').change(function() {
		window.localStorage.setItem('variable62_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role62]').change(function() {
		window.localStorage.setItem('student_answer_role62_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable63]').val(window.localStorage.getItem('variable63_'+parameters[0].toString()));
	$('select[id=student_answer_role63]').val(window.localStorage.getItem('student_answer_role63_'+parameters[0].toString()));
	$('select[id=variable63]').change(function() {
		window.localStorage.setItem('variable63_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role63]').change(function() {
		window.localStorage.setItem('student_answer_role63_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable64]').val(window.localStorage.getItem('variable64_'+parameters[0].toString()));
	$('select[id=student_answer_role64]').val(window.localStorage.getItem('student_answer_role64_'+parameters[0].toString()));
	$('select[id=variable64]').change(function() {
		window.localStorage.setItem('variable64_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role64]').change(function() {
		window.localStorage.setItem('student_answer_role64_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable65]').val(window.localStorage.getItem('variable65_'+parameters[0].toString()));
	$('select[id=student_answer_role65]').val(window.localStorage.getItem('student_answer_role65_'+parameters[0].toString()));
	$('select[id=variable65]').change(function() {
		window.localStorage.setItem('variable65_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role65]').change(function() {
		window.localStorage.setItem('student_answer_role65_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable66]').val(window.localStorage.getItem('variable66_'+parameters[0].toString()));
	$('select[id=student_answer_role66]').val(window.localStorage.getItem('student_answer_role66_'+parameters[0].toString()));
	$('select[id=variable66]').change(function() {
		window.localStorage.setItem('variable66_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role66]').change(function() {
		window.localStorage.setItem('student_answer_role66_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable67]').val(window.localStorage.getItem('variable67_'+parameters[0].toString()));
	$('select[id=student_answer_role67]').val(window.localStorage.getItem('student_answer_role67_'+parameters[0].toString()));
	$('select[id=variable67]').change(function() {
		window.localStorage.setItem('variable67_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role67]').change(function() {
		window.localStorage.setItem('student_answer_role67_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable68]').val(window.localStorage.getItem('variable68_'+parameters[0].toString()));
	$('select[id=student_answer_role68]').val(window.localStorage.getItem('student_answer_role68_'+parameters[0].toString()));
	$('select[id=variable68]').change(function() {
		window.localStorage.setItem('variable68_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role68]').change(function() {
		window.localStorage.setItem('student_answer_role68_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable69]').val(window.localStorage.getItem('variable69_'+parameters[0].toString()));
	$('select[id=student_answer_role69]').val(window.localStorage.getItem('student_answer_role69_'+parameters[0].toString()));
	$('select[id=variable69]').change(function() {
		window.localStorage.setItem('variable69_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role69]').change(function() {
		window.localStorage.setItem('student_answer_role69_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable70]').val(window.localStorage.getItem('variable70_'+parameters[0].toString()));
	$('select[id=student_answer_role70]').val(window.localStorage.getItem('student_answer_role70_'+parameters[0].toString()));
	$('select[id=variable70]').change(function() {
		window.localStorage.setItem('variable70_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role70]').change(function() {
		window.localStorage.setItem('student_answer_role70_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable71]').val(window.localStorage.getItem('variable71_'+parameters[0].toString()));
	$('select[id=student_answer_role71]').val(window.localStorage.getItem('student_answer_role71_'+parameters[0].toString()));
	$('select[id=variable71]').change(function() {
		window.localStorage.setItem('variable71_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role71]').change(function() {
		window.localStorage.setItem('student_answer_role71_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable72]').val(window.localStorage.getItem('variable72_'+parameters[0].toString()));
	$('select[id=student_answer_role72]').val(window.localStorage.getItem('student_answer_role72_'+parameters[0].toString()));
	$('select[id=variable72]').change(function() {
		window.localStorage.setItem('variable72_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role72]').change(function() {
		window.localStorage.setItem('student_answer_role72_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable73]').val(window.localStorage.getItem('variable73_'+parameters[0].toString()));
	$('select[id=student_answer_role73]').val(window.localStorage.getItem('student_answer_role73_'+parameters[0].toString()));
	$('select[id=variable73]').change(function() {
		window.localStorage.setItem('variable73_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role73]').change(function() {
		window.localStorage.setItem('student_answer_role73_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable74]').val(window.localStorage.getItem('variable74_'+parameters[0].toString()));
	$('select[id=student_answer_role74]').val(window.localStorage.getItem('student_answer_role74_'+parameters[0].toString()));
	$('select[id=variable74]').change(function() {
		window.localStorage.setItem('variable74_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role74]').change(function() {
		window.localStorage.setItem('student_answer_role74_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable75]').val(window.localStorage.getItem('variable75_'+parameters[0].toString()));
	$('select[id=student_answer_role75]').val(window.localStorage.getItem('student_answer_role75_'+parameters[0].toString()));
	$('select[id=variable75]').change(function() {
		window.localStorage.setItem('variable75_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role75]').change(function() {
		window.localStorage.setItem('student_answer_role75_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable76]').val(window.localStorage.getItem('variable76_'+parameters[0].toString()));
	$('select[id=student_answer_role76]').val(window.localStorage.getItem('student_answer_role76_'+parameters[0].toString()));
	$('select[id=variable76]').change(function() {
		window.localStorage.setItem('variable76_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role76]').change(function() {
		window.localStorage.setItem('student_answer_role76_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable77]').val(window.localStorage.getItem('variable77_'+parameters[0].toString()));
	$('select[id=student_answer_role77]').val(window.localStorage.getItem('student_answer_role77_'+parameters[0].toString()));
	$('select[id=variable77]').change(function() {
		window.localStorage.setItem('variable77_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role77]').change(function() {
		window.localStorage.setItem('student_answer_role77_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable78]').val(window.localStorage.getItem('variable78_'+parameters[0].toString()));
	$('select[id=student_answer_role78]').val(window.localStorage.getItem('student_answer_role78_'+parameters[0].toString()));
	$('select[id=variable78]').change(function() {
		window.localStorage.setItem('variable78_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role78]').change(function() {
		window.localStorage.setItem('student_answer_role78_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable79]').val(window.localStorage.getItem('variable79_'+parameters[0].toString()));
	$('select[id=student_answer_role79]').val(window.localStorage.getItem('student_answer_role79_'+parameters[0].toString()));
	$('select[id=variable79]').change(function() {
		window.localStorage.setItem('variable79_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role79]').change(function() {
		window.localStorage.setItem('student_answer_role79_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable80]').val(window.localStorage.getItem('variable80_'+parameters[0].toString()));
	$('select[id=student_answer_role80]').val(window.localStorage.getItem('student_answer_role80_'+parameters[0].toString()));
	$('select[id=variable80]').change(function() {
		window.localStorage.setItem('variable80_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role80]').change(function() {
		window.localStorage.setItem('student_answer_role80_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable81]').val(window.localStorage.getItem('variable81_'+parameters[0].toString()));
	$('select[id=student_answer_role81]').val(window.localStorage.getItem('student_answer_role81_'+parameters[0].toString()));
	$('select[id=variable81]').change(function() {
		window.localStorage.setItem('variable81_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role81]').change(function() {
		window.localStorage.setItem('student_answer_role81_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable82]').val(window.localStorage.getItem('variable82_'+parameters[0].toString()));
	$('select[id=student_answer_role82]').val(window.localStorage.getItem('student_answer_role82_'+parameters[0].toString()));
	$('select[id=variable82]').change(function() {
		window.localStorage.setItem('variable82_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role82]').change(function() {
		window.localStorage.setItem('student_answer_role82_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable83]').val(window.localStorage.getItem('variable83_'+parameters[0].toString()));
	$('select[id=student_answer_role83]').val(window.localStorage.getItem('student_answer_role83_'+parameters[0].toString()));
	$('select[id=variable83]').change(function() {
		window.localStorage.setItem('variable83_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role83]').change(function() {
		window.localStorage.setItem('student_answer_role83_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable84]').val(window.localStorage.getItem('variable84_'+parameters[0].toString()));
	$('select[id=student_answer_role84]').val(window.localStorage.getItem('student_answer_role84_'+parameters[0].toString()));
	$('select[id=variable84]').change(function() {
		window.localStorage.setItem('variable84_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role84]').change(function() {
		window.localStorage.setItem('student_answer_role84_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable85]').val(window.localStorage.getItem('variable85_'+parameters[0].toString()));
	$('select[id=student_answer_role85]').val(window.localStorage.getItem('student_answer_role85_'+parameters[0].toString()));
	$('select[id=variable85]').change(function() {
		window.localStorage.setItem('variable85_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role85]').change(function() {
		window.localStorage.setItem('student_answer_role85_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable86]').val(window.localStorage.getItem('variable86_'+parameters[0].toString()));
	$('select[id=student_answer_role86]').val(window.localStorage.getItem('student_answer_role86_'+parameters[0].toString()));
	$('select[id=variable86]').change(function() {
		window.localStorage.setItem('variable86_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role86]').change(function() {
		window.localStorage.setItem('student_answer_role86_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable87]').val(window.localStorage.getItem('variable87_'+parameters[0].toString()));
	$('select[id=student_answer_role87]').val(window.localStorage.getItem('student_answer_role87_'+parameters[0].toString()));
	$('select[id=variable87]').change(function() {
		window.localStorage.setItem('variable87_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role87]').change(function() {
		window.localStorage.setItem('student_answer_role87_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable88]').val(window.localStorage.getItem('variable88_'+parameters[0].toString()));
	$('select[id=student_answer_role88]').val(window.localStorage.getItem('student_answer_role88_'+parameters[0].toString()));
	$('select[id=variable88]').change(function() {
		window.localStorage.setItem('variable88_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role88]').change(function() {
		window.localStorage.setItem('student_answer_role88_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable89]').val(window.localStorage.getItem('variable89_'+parameters[0].toString()));
	$('select[id=student_answer_role89]').val(window.localStorage.getItem('student_answer_role89_'+parameters[0].toString()));
	$('select[id=variable89]').change(function() {
		window.localStorage.setItem('variable89_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role89]').change(function() {
		window.localStorage.setItem('student_answer_role89_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable90]').val(window.localStorage.getItem('variable90_'+parameters[0].toString()));
	$('select[id=student_answer_role90]').val(window.localStorage.getItem('student_answer_role90_'+parameters[0].toString()));
	$('select[id=variable90]').change(function() {
		window.localStorage.setItem('variable90_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role90]').change(function() {
		window.localStorage.setItem('student_answer_role90_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable91]').val(window.localStorage.getItem('variable91_'+parameters[0].toString()));
	$('select[id=student_answer_role91]').val(window.localStorage.getItem('student_answer_role91_'+parameters[0].toString()));
	$('select[id=variable91]').change(function() {
		window.localStorage.setItem('variable91_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role91]').change(function() {
		window.localStorage.setItem('student_answer_role91_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable92]').val(window.localStorage.getItem('variable92_'+parameters[0].toString()));
	$('select[id=student_answer_role92]').val(window.localStorage.getItem('student_answer_role92_'+parameters[0].toString()));
	$('select[id=variable92]').change(function() {
		window.localStorage.setItem('variable92_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role92]').change(function() {
		window.localStorage.setItem('student_answer_role92_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable93]').val(window.localStorage.getItem('variable93_'+parameters[0].toString()));
	$('select[id=student_answer_role93]').val(window.localStorage.getItem('student_answer_role93_'+parameters[0].toString()));
	$('select[id=variable93]').change(function() {
		window.localStorage.setItem('variable93', $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role93]').change(function() {
		window.localStorage.setItem('student_answer_role93_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable94]').val(window.localStorage.getItem('variable94_'+parameters[0].toString()));
	$('select[id=student_answer_role94]').val(window.localStorage.getItem('student_answer_role94_'+parameters[0].toString()));
	$('select[id=variable94]').change(function() {
		window.localStorage.setItem('variable94_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role94]').change(function() {
		window.localStorage.setItem('student_answer_role94_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable95]').val(window.localStorage.getItem('variable95_'+parameters[0].toString()));
	$('select[id=student_answer_role95]').val(window.localStorage.getItem('student_answer_role95_'+parameters[0].toString()));
	$('select[id=variable95]').change(function() {
		window.localStorage.setItem('variable95_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role95]').change(function() {
		window.localStorage.setItem('student_answer_role95_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable96]').val(window.localStorage.getItem('variable96_'+parameters[0].toString()));
	$('select[id=student_answer_role96]').val(window.localStorage.getItem('student_answer_role96_'+parameters[0].toString()));
	$('select[id=variable96]').change(function() {
		window.localStorage.setItem('variable96_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role96]').change(function() {
		window.localStorage.setItem('student_answer_role96_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable97]').val(window.localStorage.getItem('variable97_'+parameters[0].toString()));
	$('select[id=student_answer_role97]').val(window.localStorage.getItem('student_answer_role97_'+parameters[0].toString()));
	$('select[id=variable97]').change(function() {
		window.localStorage.setItem('variable97_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role97]').change(function() {
		window.localStorage.setItem('student_answer_role97_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable98]').val(window.localStorage.getItem('variable98_'+parameters[0].toString()));
	$('select[id=student_answer_role98]').val(window.localStorage.getItem('student_answer_role98_'+parameters[0].toString()));
	$('select[id=variable98]').change(function() {
		window.localStorage.setItem('variable98_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role98]').change(function() {
		window.localStorage.setItem('student_answer_role98_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable99]').val(window.localStorage.getItem('variable99_'+parameters[0].toString()));
	$('select[id=student_answer_role99]').val(window.localStorage.getItem('student_answer_role99_'+parameters[0].toString()));
	$('select[id=variable99]').change(function() {
		window.localStorage.setItem('variable99_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role99]').change(function() {
		window.localStorage.setItem('student_answer_role99_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});

	$('select[id=variable100]').val(window.localStorage.getItem('variable100_'+parameters[0].toString()));
	$('select[id=student_answer_role100]').val(window.localStorage.getItem('student_answer_role100_'+parameters[0].toString()));
	$('select[id=variable100]').change(function() {
		window.localStorage.setItem('variable100_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	$('select[id=student_answer_role100]').change(function() {
		window.localStorage.setItem('student_answer_role100_'+parameters[0].toString(), $(this).val());
		var d = new Date();
		var savedTime = "Saved at "+d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
		document.getElementById("time").innerHTML = savedTime;
		localStorage.setItem("time_"+parameters[0].toString(), document.getElementById("time").innerHTML);
	});
	document.getElementById("time").innerHTML = localStorage.getItem("time_"+parameters[0].toString());
	
});

	