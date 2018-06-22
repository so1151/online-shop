/*
 * search区域功能
 */
//input输入内容时 放大镜隐藏
$(function(){
	$('#search').bind('input propertychange',function(){
		$('#search').css({
			'background':'none'
		})
	})
})










