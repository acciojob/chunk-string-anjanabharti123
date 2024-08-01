function stringChop(str, size) {
  // your code here
	if(!str){
		return[];
	}
	let chunks = [];
	for(let i = 0; i <str.length; i += size){
		chunks.push(str.slice(i, i+size))
	}
     retrun chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
