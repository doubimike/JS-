    function getStyle(obj, attr) {
        if (obj.currentStyle) { // for ie
            return obj.currentStyle[attr];
        } else { // for firefox
            return getComputedStyle(obj)[attr]; // getComputedStyle(obj).attr是不行的，
            // 因为attr一般传进来是个string，只能用[]属性访问法
        }
    }

    function startMove(obj, des, attr) {

        var self = obj;
        clearInterval(self.timer);
        self.timer = setInterval(function() {
                var pI;
                if (attr === "opacity") {
                    pI = getStyle(self, attr);
                    var speed = (des < pI) ? -0.1 : 0.1;
                } else {
                    pI = parseInt(getStyle(self, attr));
                    var speed = (des - pI) / 8;
                    speed = (speed < 0) ? Math.floor(speed) : Math.ceil(speed);
                }
                if (des == pI) {
                    clearInterval(self.timer);
                    return;
                } else {
                    self.style[attr] = (attr !== "opacity") ? (pI + speed) + "px" : (parseFloat(pI) + speed);
                }
            },
            30)
    }
