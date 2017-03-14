exports.myCookie={
    setCookie(name,value,odlay){
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+odlay);
        document.cookie=name+'='+value+';expires='+oDate;
    },
    getCookie(name){
		var arr1=document.cookie.split('; ');
		for(var i=0;i<arr1.length;i++){
			var arr2=arr1[i].split('=');
			//一个一个找
			if(arr2[0]==name){
				return arr2[1];
			}
		}
		return '';
	},
    deleteCookie(name){
		this.setCookie(name,1,-1);
	}
}


