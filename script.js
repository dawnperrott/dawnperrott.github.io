
function playSong(){
	
	for(i=99;i>=1;i=i-1){
		document.getElementById("main").innerHTML+="<br/>"+ i +" bottles of beer on the wall, "+i+" bottles of beer\n"
		+ "Take one down and pass it around, "+(i-1)+"bottles of beer on the wall"+"<br/>";{
	}
  }
}	