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
        this.currentNavContEl = null;
        var self = this;
        for (var i = this.menuList.length - 1; i >= 0; i--) {
        	this.menuList[i].addEventListener("click", function(e) {
        		var menuContentEl = document.getElementById(e.currentTarget.id + "-content");
        		if (self.state == "allClosed") {
        			// menuContentEl.style.opacity = 1;
        			menuContentEl.classList.add("move-nc-show");
        			self.state = "hasopened";
        			self.currentNavContEl = menuContentEl;
        		}
        		else{
        			self.currentNavContEl.classList.remove("move-nc-show");        			
        			self.currentNavContEl = menuContentEl;
        			menuContentEl.classList.add("move-nc-show");
        		}
        	})
        	var navc = document.getElementById(this.menuList[i].id +"-content");
        	navc.getElementsByClassName("nav-con-close")[0].onclick = function (e) {
        		var navAllC = document.getElementsByClassName("nav-content");
        		 for (var i = navAllC.length - 1; i >= 0; i--) {
        		  	navAllC[i].classList.remove("move-nc-show");
        		  	self.state = "allClosed";
        		  } 
        	}
        }
    }

    var menubar = new Menubar();

    var Sidebar = function() {
        this.state = "opened";
        this.el = document.getElementById('sidebar');
        var self = this;
        this.closeBarEl = closeBar;
        this.el.addEventListener('click', function(e) {
            if (e.target != self.el) {
                self.triggerSwitch();
            }
        })
    }

    Sidebar.prototype.open = function() {
        this.state = "opened";
        this.el.className = "move-sidebar-right";
        this.closeBarEl.className = "move-closebar-left";
    };

    Sidebar.prototype.close = function() {
        this.state = "closed";
        this.el.className = "move-sidebar-left";
        this.el.style.left = "-120px";
        this.closeBarEl.className = "move-closebar-right";
        this.closeBarEl.style.left = "160px";
        menubar.state = "allClosed";
        if (menubar.currentNavContEl) {
        	menubar.currentNavContEl.classList.remove("move-nc-show");
        }

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
