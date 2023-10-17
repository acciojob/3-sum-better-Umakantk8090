function threeSum(arr, target) {
// write your code here
	let arr=[-1,2,1,4], 
		target =1;
	let initialDiff = Infinity;
	let n=arr.length;
	for(let i=0;i<=n-3;i++){
		for(let j=i+1;j<=n-2;j++){
			for(let k=j+1;k<=n-1;k++){
				let sum=arr[i] + arr[j] + arr[k];
				let diff = Math.abs(sum - target);
				if(initialDiff > diff)
			}
		}
	}
  
}

module.exports = threeSum;
