    function getStyle(obj, attr) {
        if (obj.currentStyle) { // for ie
            return obj.currentStyle[attr];
        } else { // for firefox
            return getComputedStyle(obj)[attr]; // getComputedStyle(obj).attr是不行的，
            // 因为attr一般传进来是个string，只能用[]属性访问法
        }
    }

    // starMove(obj,{"width":400,"height":400},fn)
    function startMove(obj, json, fn) {


        clearInterval(obj.timer);
         var flag = 0;
         var index = 0;
         for(a in json){
            index +=1
         }
         console.log(index)
        obj.timer = setInterval(function() {
                for (attr in json) {

                    var pI;
                    if (attr === "opacity") {
                        pI = getStyle(obj, attr);
                        var speed = (json[attr] < pI) ? -0.1 : 0.1;
                    } else {
                        pI = parseInt(getStyle(obj, attr));
                        var speed = (json[attr] - pI) / 8;
                        speed = (speed < 0) ? Math.floor(speed) : Math.ceil(speed);
                    }
                    
                    if (json[attr] !== pI  ) {
                        // flag += 1;
                        flag = 0;
                        
                    }

                    obj.style[attr] = (attr !== "opacity") ? (pI + speed) + "px" : (parseFloat(pI) + speed);

                    //  有bug，这里flag永远都不可能是1
                    if (flag == index) {
                        clearInterval(obj.timer);
                        if (fn) {
                            fn();
                        }

                    }

                    console.log(flag)

                }
            },
            30)



    }
