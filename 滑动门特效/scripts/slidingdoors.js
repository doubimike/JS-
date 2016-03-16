window.onload = function() {
    var box = document.getElementById('container');
    var imgs = box.getElementsByTagName('img');

    for (var i = 1; i < imgs.length; i++) {
        imgs[i].flag = 0; // 都还没往前
        imgs[i].index = i;
        imgs[i].style.left = 316 + 160 * i + 'px';
        imgs[i].onmouseover = function() {
            if (this.flag == 0) {
            	this.style.left = this.offsetLeft - 316 +'px';
            	this.flag =1;
            	for (var j = 1; j < this.index; j++) {
            		if(imgs[j].flag == 0){
            			imgs[j].style.left = imgs[j].offsetLeft - 316 +'px';
            			imgs[j].flag =1;
            		}
            	}
            } else if(this.flag == 1) {
            	for (var k = this.index+1; k < imgs.length; k++) {
            		if(imgs[k].flag == 1){
            			imgs[k].style.left = imgs[k].offsetLeft + 316 +'px';
            			imgs[k].flag =0;
            		}
            	}
            }
        }

    }

    imgs[0].onmouseover = function () {
    	  for (var k = 1; k < imgs.length; k++) {
            		if(imgs[k].flag == 1){
            			imgs[k].style.left = imgs[k].offsetLeft + 316 +'px';
            			imgs[k].flag =0;
            		}
            	}
    }
}
