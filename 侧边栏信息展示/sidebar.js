(function() {
        var Sidebar = function(eId, closeBarId) {
            var self = this;
            this.state = "opened";
            this.el = document.getElementById(eId || "sidebar");
            this.closeBarEl = document.getElementById(closeBarId || "closeBar")
            this.el.addEventListener("click", function(e) {
                if (e.target !== self.el) {
                    self.triggerSwitch();
                }
            });

            Sidebar.prototype.close = function() {
                console.log('关闭')
            };
            Sidebar.prototype.open = function() {
                console.log('打开')
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
        }


        var sidebar = new Sidebar();
    }

)();
