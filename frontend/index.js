const grid = document.getElementsByClassName("container")[0];


window.onload = function () 
{

	// Make each "cell" interactive
	for (var i = 0; i < grid.children.length; i++) 
	{
		grid.children[i].onclick = function()
		{
			sendRequest(this, replaceValue);
			
		}
	}	
}


function replaceValue(current_cell, fib_val)
{
	current_cell.innerHTML = fib_val;
}

function sendRequest(current_cell, callback)
{
	var baseURL = "http://127.0.0.1:8000/fib/";
	var url = baseURL + current_cell.innerHTML.trim();
	
	
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload = function() {
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (this.status >= 200 && this.status < 400) 
	{
		callback(current_cell, data.fib_n);
		
	} 
	else 
	{
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = "Request failed...";
	}
}



	request.send()

}

function process()
{
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (this.status >= 200 && this.status < 400) 
	{
		alert(data.fib_n);
		
	} 
	else 
	{
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Gah, it's not working`;
	}
}
