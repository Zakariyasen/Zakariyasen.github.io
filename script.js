//Table Generator

function GenerateTable()
{
	var rowCount = parseInt(document.getElementById("rows").value);
	var colCount = parseInt(document.getElementById("cols").value);
	
	var output = "<table class='gen'>";
	
	for(r = 0; r < rowCount; r++)
		{	
			output = output + "<tr class='gen'>";
			
			for(c = 0; c < colCount; c++)
				{
					output  += "<td class='gen'></td>";
				}
			
			output = output + "</tr>";
			
		}
	
	output = output + "</table>";
	
	document.getElementById("table").innerHTML = output;
}

function ResetTable()
{
	document.getElementById("rows").value = 1;
	document.getElementById("cols").value = 1;
	
	document.getElementById("table").innerHTML = "";
}	

//Rate Calculator

funtion CalculateQuote()
{
	
}