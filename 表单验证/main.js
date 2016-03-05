window.onload = function(){
	var aInput = document.getElementsByTagName('input');
	var oName = aInput[0];
	var pwd = aInput[1];
	var pwd2 = aInput[2];
	var aP = document.getElementsByTagName('p');
	var name_msg = aP[0];
	var pwd_msg = aP[1];
	var pwd2_msg = aP[2];
	var count = document.getElementById('count');
	var aEm = document.getElementsByTagName('em');
	var oName_length = 0;
	var pwd_length = 0;
	var re = /[^\w\u4e00-\u9fa5]/;

//用户名
	oName.onfocus = function (){
		name_msg.style.display = "block";
	}

	oName.onkeyup = function (){
		count.style.visibility = "visible";
		oName_length = getLength(this.value);
		count.innerHTML = oName_length + "个字符";
		if(oName_length == 0){
			count.style.visibility = "hidden";
		}
	}

	oName.onblur = function (){
		if (oName_length == 0){
			name_msg.innerHTML = "不能为空";
		}

		else if (oName_length < 6){
			name_msg.innerHTML = "少于6个字符";
		}

		else if (oName_length > 25){
			name_msg.innerHTML = "多于25个字符";
		}

		else if (re.test(this.value)) {
			name_msg.innerHTML = "含有非法字符";
		}

		else {
			name_msg.innerHTML = "ok";	
		}
	}

//密码	
	pwd.onfocus = function () {
		pwd_msg.style.display = "block";
	}

	pwd.onkeyup = function () {
		pwd_length = getLength(this.value);
		if (pwd_length > 5){
			aEm[0].style.color = "initial";
			aEm[2].style.color = "initial";
		  	aEm[1].style.color = "red";
		  	pwd2.disabled = 0;
		  	pwd2_msg.style.display = "block";
		  }

		if ( pwd_length < 5){
			aEm[1].style.color = "initial";
		  	aEm[0].style.color = "red";
		  	pwd2.disabled = 1;
		  	pwd2_msg.style.display = "none";
		}

		if ( pwd_length > 10 ){
			aEm[1].style.color = "initial";
		  	aEm[2].style.color = "red";
		}
	}

	pwd.onblur = function () {
		  if (this.value == ""){
		  	pwd_msg.innerHTML = "不能为空";
		  }

		  else if (this.value.length < 6 || this.value.length > 16){
		  	pwd_msg.innerHTML = "长度应为6-16个字符";			  	
		  }

		  else if (!/[^/d]/g.test(this.value)){
		  	pwd_msg.innerHTML = "不能全是数字";			  		
		  }

		  else if (!/[^a-zA-Z]/g.test(this.value)){
			  pwd_msg.innerHTML = "不能全是字母";			  			
		  }

		  // 不能用相同字符，思路：把字符串分解成一个个字符，然后用循环将这些字符一一比对；
		  else if(check_repeat(this.value,this.value[0])==this.value.length){
		  	pwd_msg.innerHTML = "不能用相同字符";	
		  }

		  else {
		  	pwd_msg.innerHTML = "ok";		
		  }
	}

//确认密码
	pwd2.onblur = function () {
		 if (pwd.value == this.value){
		 	pwd2_msg.innerHTML = "ok";
		 } 

		 else {
		 	pwd2_msg.innerHTML = "两次输入不一致";
		 }
	}
}

function getLength(str) {
	return str.replace(/[^\x00-xff]/g, 'aa').length;
}


function check_repeat (str,comparison) {
	 var tmp = 0;
	 for (var i = 0; i < str.length; i++) {
	 	if(str[i] == comparison){
	 		tmp++;
	 	}
	 }
	 return tmp;
}