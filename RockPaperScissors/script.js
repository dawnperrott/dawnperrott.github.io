function check(){
	var computerPicks= document.getElementById("compPick").value;
	var userPicks = document.getElementById("userPick").value;
	var getResult = document.getElementById("resultCheck").value;
	
 	compPick = generateCompPick();

	console.log(generateCompPick);
	console.log(compPick);
	console.log(userPicks);
	document.getElementById("compPick").innerHTML=compPick;

	if(userPicks==compPick){
			document.getElementById("resultCheck").innerHTML= "User and Computer draw";
		}
		//user picks rock
		else if(userPicks=="Rock"){
			if(compPick=="Paper"){
				document.getElementById("resultCheck").innerHTML="User loses";
			}
			else{
				document.getElementById("resultCheck").innerHTML="User wins";
			}
		}
		//user picks paper
		else if(userPicks=="Paper"){
			if(compPick=="Scissors"){
				document.getElementById("resultCheck").innerHTML= "User loses";
			}
			else{
				document.getElementById("resultCheck").innerHTML="User wins";
			}
		}
		//user picks scissors
		else if(userPicks=="Scissors"){
			if(compPick=="Rock"){
				document.getElementById("resultCheck").innerHTML= "User loses";
			}
			else{
				document.getElementById("resultCheck").innerHTML="User wins";

		}
	}
 }


function generateCompPick(){
		const randomNo=Math.floor((Math.random()*3)+1);
		console.log(randomNo);
		if(randomNo==1){
			compPick="Rock"
		}
		if(randomNo==2){
			compPick="Paper"
		}
		if(randomNo ==3){
			compPick="Scissors"
		
		}
		return compPick;
}

	
	

	