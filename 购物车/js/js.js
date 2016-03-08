var g = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
    if(!document.getElementsByClassName){
        document.getElementsByClassName = function(cls){
            var ret = [];
            var els = document.getElementsByTagName("*");
            for (var i = 0; i < els.length; i++) {
                if(els[i].className === cls 
                    ||els[i].className.indexOf( cls +"") >= 0 
                    ||els[i].className.indexOf(""+cls +"") >= 0 
                    ||els[i].className.indexOf(""+cls) >= 0 ){
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var cartTable =  g("cartTable");
    var tr = cartTable.children[1].rows;
    var checkInputs = document.getElementsByClassName("check");
    var checkAllInputs = document.getElementsByClassName("check-all");
    var selectedTotal = g("selectedTotal");
    var priceTotal = g("priceTotal");
    var selected = g("selected");
    var foot = g("foot");
    var selectedViewList = g("selectedViewList");
    var adds = document.getElementsByClassName("add");
    var counts = document.getElementsByClassName("count");

    //计算函数
    function getTotal () {
    	 var selected = 0;
    	 var price = 0;
         var html = "";

    	 for (var i = 0; i < tr.length; i++) {
    	  	if(tr[i].getElementsByTagName("input")[0].checked){
                selected += parseInt(tr[i].getElementsByTagName("input")[1].value);
                price += parseFloat(tr[i].cells[4].innerHTML); 
                //加上选中样式
                tr[i].className = "on";
                //预览部分加上缩略图 //tr[i].getElementsByTagName("img")[0].src 替代i+1
                html += '<div><img src="images/'+(i+1)+'.jpg"><span class="del" index="' +i + '">取消选择</span></div>';

            }
            else {
                tr[i].className = "";   
            }
    	  }
         selectedTotal.innerHTML = selected;
         priceTotal.innerHTML = price.toFixed(2);  
         selectedViewList.innerHTML = html;

         //设置缩略图的取消选择 还有事件代理及冒泡的方式，写于下方
         // var dels = document.getElementsByClassName("del");
         // console.log(dels)

         // for (var i = 0; i < dels.length; i++) {
         //     dels[i].onclick = function () {
         //          var index = this.getAttribute("index")  ;
         //          tr[index].getElementsByTagName("input")[0].checked = 0;
         //          getTotal ();
         //     }
         // }

         // if (selectedTotal.innerHTML ==0) {
         //     foot.className = "foot"; 
         // }
    }

    //给所有选择框加上事件
    for (var i = 0; i < checkInputs.length; i++) {
    	checkInputs[i].onclick = function (){
            //点击全选框的时候，所有单选框都选上，所有
            if (this.className == "check-all check") {
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            }
            //一个单选框没选中，全选框也相应不选中
            else if (!this.checked){
                for (var k = 0; k < checkAllInputs.length; k++) {
                    checkAllInputs[k].checked = false;
                }
            }
            getTotal();
    	}
    }

    selected.onclick = function () {
        if(foot.className == "foot" ){
            if ( selectedTotal.innerHTML !=0)
                {foot.className = "foot show"} 
        }
        else{
            foot.className = "foot"; 
        }
    }

    //设置缩略图的取消选择-事件代理及冒泡的方式
    selectedViewList.onclick = function (e){
        var event = e || window.event;
        var target = event.target || event.srcElement ;

        if (target.className=="del") {
            var index = target.getAttribute("index");
            var input = tr[index].getElementsByTagName("input")[0];
            input.checked = 0;
            input.onclick();
        }
    }

    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function (e) {
            var event = e || window.event;
            var target = event.target || event.srcElement ; 

            var count_input = this.getElementsByClassName("count-input")[0];
            var reduce = this.getElementsByClassName("reduce")[0];

            function ammount (obj,addorreduce) {

                 count_input.value = parseInt(count_input.value) + addorreduce;
                 count_input.innerHTML = count_input.value;
                 calcprice (obj);
                 if(obj.getElementsByTagName("input")[0].checked){
                     getTotal();
                 }
            }

            if (target.className=="add") {
                ammount(this,+1);
            }

            if (target.className=="reduce") {
                if (parseInt(count_input.value) > 1) {
                ammount(this,-1);}
            }

            if (count_input.value > 1) {
                reduce.innerHTML = "-";
            }
            else {
                reduce.innerHTML = "";
            }
                        
            function calcprice (obj) {
                var subtotal = obj.getElementsByClassName("subtotal")[0];
                var singeprice = parseFloat(obj.getElementsByClassName("price")[0].innerHTML);
                 subtotal.innerHTML = singeprice * parseInt(count_input.value);  
            }

            



        }
    }












}