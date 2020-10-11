
function GenerateTable()
{
	var rowCount = parseInt(document.getElementById("rows").value);
	var colCount = parseInt(document.getElementById("cols").value);
	
	var output = "<table cellspacing='0' border='1'>";
	
	for(r = 0; r < rowCount; r++)
		{	
			output = output + "<tr height='10px'>";
			
			for(c = 0; c < colCount; c++)
				{
					output  += "<td width='10px'></td>";
				}
			
			output = output + "</tr>";
			
		}
	
	output = output + "</table>";
	
	document.getElementById("table").innerHTML = output;
}

function Reset()
{
	document.getElementById("rows").value = 1;
	document.getElementById("cols").value = 1;
	
	document.getElementById("table").innerHTML = "";
}	
