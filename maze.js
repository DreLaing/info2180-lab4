window.onload = function(){

//exercise1
	let boundary1 = document.getElementById("boundary1");
	
	
	boundary1.addEventListener('mouseover' ,() =>{

		boundary1.setAttribute('class', 'boundary youlose');
	});

//exercise 2

	let boundary = document.querySelectorAll(".boundary");
	let score = 0;
	for (let a = 0; a < boundary.length; a++)
	{
		boundary[a].addEventListener('mouseover', () =>{

			for (let b = 0; b< boundary.length-1;b++){
				boundary[b].setAttribute("class","boundary youlose");
				
			}

			score++;
			document.getElementById("status").innerHTML = "You Lose";

		})  
	}

//exercise 3
	
	let end = document.getElementById("end");
		end.addEventListener("mouseover", () =>{

			if (score == 0)
			{
				document.getElementById("status").innerHTML = "You Win";
			};


		}) 







};
