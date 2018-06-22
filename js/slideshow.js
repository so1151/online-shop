$(function(){
	var index = 0;
	var btnState = true;
	var banner = $('.banner-box .banner-middle .banner')
	//点击回到下一张
	$('.banner-middle .btn .next').click(function(){
		if(btnState){
			index++
			next(1);
			if(index >= banner.children().length){
				index = 0;
			}
			changeBtn()
		}
	})
	//点击回到上一张
	$('.banner-middle .btn .prev').click(function(){
		if(btnState){
			index--;
			prev(1);
			if(index<0){
				index = banner.children().length-1
			}
			changeBtn()
		}
	})
	//点击底部btn更换图片
	$('.banner-middle .btnlist span').click(function(){
		if(btnState){
//			btnState = false;
			var activeIndex = $(this).parent().find('span.active').index();
			//被选中按钮 样式变成active,其他兄弟元素移除active样式
			$(this)
			.addClass('active')
			.siblings()
			.removeClass('active')
			//判断是向下还是向上变化图片
			if($(this).index() > activeIndex){
				next($(this).index() - activeIndex)
			}
			if($(this).index() < activeIndex){
				prev(activeIndex - $(this).index())
			}
		}
	})
	//自动轮播
	setInterval(function(){
		index++;
		next(1);
		if(index >= banner.children().length){
			index = 0;
		}
		changeBtn()
	},3000)
	
	/**
	 * next下一张
	 */
	function next(num){
		btnState = false;
		banner.animate({
			left:(-100)*num + '%'
		},2000,function(){
			//每变化一次,第一张插入到最后
			for(var i = 0;i < num;i++){
				banner.append(banner.children().first())
			}
			$(this).css({
				left:0
			})
			btnState = true;
		})
	}
	
	/**
	 * prev 上一张
	 */
	function prev(num){
		btnState = false;
		//将最后一张插入到第一张
		for(var i =0;i<num;i++){
			banner.prepend(banner.children().last())
		}
		//left从-100到0
		banner.css({
			left:(-100)*num+'%'
		}).animate({
			left:0
		},2000,function(){
			btnState = true;
		})
		
	}
	
	/**
	 * changeBtn 底部按钮变化
	 */
	function changeBtn(){
		$('.banner-middle .btnlist span')
		.eq(index)
		.addClass('active')
		.siblings()
		.removeClass('active')
	}
	
})
