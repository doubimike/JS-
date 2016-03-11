//(function(){})(); 说是这个是立即执行的匿名函数，能够解决全局变量污染的问题
(function() {
    // 我没有想明白的一个点就是，为什么用构造函数呢？构造函数的作用是什么？
    // 直接用函数实现也不是不可以，要不我先直接用函数实现一下看看，差不多实现完毕了。完全是可以的。
    var Menubar = function() {
        this.el = document.querySelector("#sidebar ul");
        this.state = "allClosed"; // hasopened
        this.el.addEventListener('click', function (e) {
        	 e.stopPropagation();
        });
        this.menuList = document.querySelectorAll("#sidebar ul > li");
        var self = this;
        for (var i = this.menuList.length - 1; i >= 0; i--) {
        	this.menuList[i].addEventListener("click", function(e) {
        		var menuContentEl = document.getElementById(e.currentTarget.id + "-content");
        		if (self.state == "allClosed") {
        			// statement
        			menuContentEl.style.opacity = 1;
        			self.state = "hasopened";
        		}
        		else{
        			
        		}
        	})
        }
    }

    var menubar = new Menubar();

    var Sidebar = function() {
        this.state = "opened";
        this.el = document.getElementById('sidebar');
        var self = this;
        this.closeBarEl = closeBar;
        this.el.addEventListener('click', function(e) {
            // if (e.target.id == "closeBar" || e.target.className == 'glyphicon glyphicon-remove') {
            //     if (self.state == "opened") {
            //         self.state = "closed";
            //         self.el.style.left = "-120px";
            //         closeBar.style.left = "160px";
            //     } else {
            //         open();
            //     }
            // } else {
            //     if (condition) {

            //     }
            // }

            if (e.target != self.el) {
                self.triggerSwitch();
            }
        })
    }

    Sidebar.prototype.open = function() {
        console.log('open sidebar')
        this.state = "opened";
    };

    Sidebar.prototype.close = function() {
        console.log('close sidebar')
        this.state = "closed";
    };

    Sidebar.prototype.triggerSwitch = function() {
        if (this.state == "opened") {
            this.close();
        } else {
            this.open();
        }
    };

    new Sidebar();



})();
