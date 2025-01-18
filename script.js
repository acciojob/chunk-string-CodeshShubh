function stringChop(str, size) {
  // your code here
	if (!str) {
    return [];
  }

	let chunck =[];
	for(let i=0; i<str.length ; i++){
		if(i%size===0){
			chunck.push(str.slice(i , i + size))
         }
	}
	return chunck;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");  
alert(stringChop(str, size));
