function firstNonRepeatedChar(str) {
	 let mp=new Map();
	for(let i=0; i<str.length; i++){
		if(mp.has(str[i])){
			mp.set(str[i],mp.get(str[i])+1);
		}
		else mp.set(str[i],1);
	}
	for(let i=0; i<str.length; i++){
		if(mp.get(str[i])==1) return str[i];
	
	}
	return "null";
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
