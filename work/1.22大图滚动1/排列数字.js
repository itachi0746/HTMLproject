var arr = [1,45,22,-10,100,777,-99,22];

for(var i=0;i<arr.length;i++) {
	for(var j=i+1;j<arr.length;j++) {
		if(arr[i]-arr[j]>0) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			console.log(i,arr);
		}
	}
}

// console.log(arr);
