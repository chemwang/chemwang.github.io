var menuBtn = document.querySelector('.menu-btn');
	
	var onOff = true;

	menuBtn.onclick = toggleMenu;
	 window.onresize = function(){
        var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if(browserWidth>530) {
     		 onOff = false;
       		 toggleMenu();
		}
    }

	

	function toggleMenu(){
		var projects = document.querySelector(".projects");
		var navList = document.querySelector('.nav');
		
		if(onOff) {
			navList.classList.add('show-nav');
			projects.style.marginTop = navList.offsetHeight + "px";
			onOff = false;
		} else {
			navList.classList.remove('show-nav');
			projects.style.marginTop = 0;
			onOff = true;
		}
	}