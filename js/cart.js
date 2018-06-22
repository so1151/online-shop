/**
 * commodity商品选择
 */

$(function(){
	//总金额增加
	function add(now){
		let price = now.parent().find('.price').children().text()
		let number = now.parent().find('.number').find('.result').val()
		let money = price * number
		totalMoney = Number($('.pay').find('.money').text() ) + Number(money)
		$('.pay').find('.money').text(totalMoney.toFixed(2))
	}
	//总金额减少
	function reduce(now){
		let price = now.parent().find('.price').children().text()
		let number = now.parent().find('.number').find('.result').val()
		let money = price * number
		let totalMoney = Number($('.pay').find('.money').text() ) - Number(money)
		$('.pay').find('.money').text(totalMoney.toFixed(2))
	}
	//计算商品数量
	function numPro(){
		let totalPro = 0;
		$('.commodity .table .list').each(function(){
			if($(this).find('.radio').hasClass('checked')){
				let proNum = $(this).parent().find('.result').val()
				totalPro += Number(proNum)
			}
		})
		$('.commodity .pay .totalPro').text(totalPro)
	}
	//点击选择按钮
	$('.commodity .radio').click(function(){
		//点击勾选 再点击取消勾选
		if($(this).hasClass('checked')){
			$(this).removeClass('checked')
			reduce($(this))
			numPro()
		}else{
			$(this).addClass('checked');
			add($(this))
			numPro()
		}
	})

	//点击全选按钮时 全选
	$('.commodity .all').click(function(){
		if($(this).hasClass('checked')){
			var totalMoney = 0;
			$('.commodity .table .list').each(function(){
				let total = $(this).find('.price').children().text()
				let number = $(this).find('.result').val()
				totalMoney += Number(total*number)
				
			})
			$('.pay').find('.money').text(totalMoney.toFixed(2))
			$('.commodity .list .radio').addClass('checked')
			numPro()
		}else{
			$('.commodity .list .radio').removeClass('checked')
			$('.pay').find('.money').text('0')
			numPro()
		}
	})

	//点击number增加
	$('.commodity .number .plus').click(function(){
		let num = $(this).prev().val()
		let oldNum = num;
		num++
		$(this).prev().val(num)
		let price = $(this).parent().parent().parent().find('.price').children().text()
		let number = $(this).parent().parent().parent().find('.number').find('.result').val()
		let money = price * (num - oldNum)
		totalMoney = Number($('.pay').find('.money').text() ) + Number(money)
		if($(this).parent().parent().parent().find('.radio').hasClass('checked')){
			$('.pay').find('.money').text(totalMoney.toFixed(2))
			// numPro()
			
		}
		
		
	})

	//点击number减少
	$('.commodity .number .minus').click(function(){
		let num = $(this).next().val()
		let oldNum = num;
		if(num > 1){
			num--
		}
		$(this).next().val(num)
		let price = $(this).parent().parent().parent().find('.price').children().text()
		let number = $(this).parent().parent().parent().find('.number').find('.result').val()
		let money = price * (oldNum - num)
		totalMoney = Number($('.pay').find('.money').text() ) - Number(money)
		if($(this).parent().parent().parent().find('.radio').hasClass('checked')){
			$('.pay').find('.money').text(totalMoney.toFixed(2))
		}

	})
})


