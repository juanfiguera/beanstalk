	var randomVar = Math.floor(Math.random()*11);
	// alert(randomVar);

	function disp_prompt()
	{
		console.log("entered disp_prompt");
		var userValue = prompt("Please enter a number:");
		comparison(userValue);
	}

	function comparison(userValue)
	{ 
		console.log("entered comparison");
		if (randomVar == userValue)
			document.getElementById('msg').innerHTML="You won!";
		else if ( absolute(userValue - randomVar) < 5 )
			document.getElementById('msg').innerHTML="hot!";
		else
			document.getElementById('msg').innerHTML="cold!";
	}

	function absolute(value)
	{
		var value;
		if (value < 0)
			value = (-1)*(value);
			console.log(value);							
		return value; 
	}

$(document).ready(function() {
	// $(".blog-container").click(function(event){
	//   event.preventDefault();
	//   console.log("registering click");
	//   // $(this).parents('.blog-container').next('.blog-container-clicked').fadeToggle(1000);
	//   $(this).addClass("blog-container-clicked");
	// 	console.log("swapping blog-container");
	// });
});
