/*
 * 收货人地址
 */
$(function(){
	$('.consignee .address .radio').click(function(){
		$(this).addClass('checked');
		$(this).siblings().removeClass('checked');
	})
})
