var numQ = 0;
function openCsvFile(){
	var input = document.createElement("input");

	input.type = "file";
	input.accept="text/plain, text/html, .jsp, .csv, .pdf";

	//var thumbext = document.getElementById('file').value;
	//thumbext = thumbext.slice(thumbext.indexOf(".") + 1).toLowerCase();

	input.click();
	input.onchange = function(event){
		//if ( == ".csv") {
			processFile_csv(event.target.files[0]);

		//} else {
		//	processFile_txt(event.target.files[0]);
		//}
	};	
}

function openTextFile(){
	var input = document.createElement("input");

	input.type = "file";
	input.accept="text/plain, text/html, .jsp, .csv, .pdf";

	//var thumbext = document.getElementById('file').value;
	//thumbext = thumbext.slice(thumbext.indexOf(".") + 1).toLowerCase();

	input.click();
	input.onchange = function(event){
		//if ( == ".csv") {
		//	processFile_csv(event.target.files[0]);

		//} else {
			processFile_txt(event.target.files[0]);
		//}
	};	
}

function processFile_csv(file){
	var pass_head = 0;
	var reader = new FileReader();
	reader.readAsText(file, "UTF-8");
	reader.onload = function(){
		var allRows = reader.result.split(/\r?\n|\r/);
		var table = '<form action="/users" method="post" class="AVAST_PAM_nonloginform"><input type="hidden" name="authenticity_token" value="DCjHkONWXj7vsbA5cQTSPLEhzMOYJiijtWF2865fwJr6IT7mQEfGTc5JTbSfwJDGYe3N/c0iq8SYP2MB/3kvHA=="><h1>Listing Users</h1><table id="output" border="1">'; 
			 
		for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
			if (singleRow === 0) {
			   	table += '<thead>';
			    table += '<tr align ="center">';

			} else {
			    table += '<tr align = "center">';
			}

			var rowCells = allRows[singleRow].split(',');
			for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
			    if (singleRow === 0) {
			    	table += '<th align = "center">';
			        table += rowCells[rowCell];
			        table += '</th>';

			    } else {
			    	if(rowCells[0] != ""){
			    		table += '<td align = "center">';
				        if (rowCell == 0) {
				        	table += "a";
				        }

				        table += rowCells[rowCell];
				        table += '</td>';
			  		}    
			    }
			}

			if (singleRow === 0) {
			    table += '</tr>';
			    table += '</thead>';
			     table += '<tbody>';
			    
			} else {
			    table += '</tr>';
			}
		} 
		table += '</form><p><input type="submit" name="commit" value="Create user"></p>';
		//output.innerText = allRows[0];
		//output.innerText = reader.result;
		/*const svaedTable = localStorage.getItem("table");
		if(svaedTable == null){
			localStorage.setItem("table", table);
			document.getElementById("output").innerHTML = `${table}`;
		} else {
			document.getElementById("output").innerHTML = `${svaedTable}`;
		}*/
		//document.getElementById("output").innerHTML = table;
		document.write(table);
	};
}
function processFile_txt(file){
	var pass_head = 0;
	var reader = new FileReader();
	reader.readAsText(file, "UTF-8");

	reader.onload = function(){
		
		document.getElementById("inputName" + numQ).innerHTML = reader.result;
	};		
	numQ++;
}