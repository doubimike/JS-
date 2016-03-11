(function() {
        // 菜单项的构造函数
        var Menubar = function() {
            console.log(this);
            this.el = document.querySelector("#sidebar ul");
            this.state = "allClosed"; //hasOpened
            this.el.addEventListener("click", function(e) {
                e.stopPropagation();
            });
            this.menuList = document.querySelectorAll("#sidebar ul > li");
            var self = this;
            this.currentOpenedMenuContent = null;
            for (var i = 0; i < this.menuList.length; i++) {
                this.menuList[i].addEventListener("click", function(e) {
                    var menuContentEl = document.getElementById(e.currentTarget.id + "-content");
                    if (self.state=="allClosed") {
                    	console.log("打开" + menuContentEl.id);
                    	self.state = "hasOpened";
                    	self.currentOpenedMenuContent = menuContentEl;
                    } else {
                    	console.log("关闭" + self.currentOpenedMenuContent.id);
                    	console.log("打开" + menuContentEl.id);
                    	self.state = "hasOpened";
                    	self.currentOpenedMenuContent = menuContentEl;
                    }
                })
            };
        };
        // sidebar构造函数
        var Sidebar = function(eId, closeBarId) {
            var self = this;
            this.state = "opened";
            this.el = document.getElementById(eId || "sidebar");
            this.closeBarEl = document.getElementById(closeBarId || "closeBar");

            this.menubar = new Menubar();

            this.el.addEventListener("click", function(e) {
                if (e.target !== self.el) {
                    self.triggerSwitch();
                }
            });

            Sidebar.prototype.close = function() {
                console.log('关闭')
                this.el.className = "sidebar-move-left";
                this.closeBarEl.className = "closeBar-move-right";

                this.state = "closed";
            };
            Sidebar.prototype.open = function() {
                console.log('打开')
                 this.el.style.left = "-120px";
               
                this.el.className = "sidebar-move-right";
                this.closeBarEl.style.left = "160px";
                
                this.closeBarEl.className = "closeBar-move-left";
                this.state = "opened";
            };
            Sidebar.prototype.triggerSwitch = function() {
                if (this.state === "opened") {
                    this.close();
                    this.state = "closed";
                } else {
                    this.open();
                    this.state = "opened";
                }
            };
        };


        var sidebar = new Sidebar();



    }

)();
