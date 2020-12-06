function magic(fun){
		return function(arr){
			return fun.apply(null, arr);
		}
}
 const magicSum = (x,y,z)=>{
 			return x+y+z;
 }