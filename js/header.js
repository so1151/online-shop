//hover样式
$(function(){
    //鼠标进入时 添加active样式
    $('.header .list').mouseenter(function(){
        $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
    //鼠标离开导航条时 第一个元素添加active样式
    $('.header').mouseleave(function(){
        $('.header .list')
        .first()
        .addClass('active').
        siblings()
        .removeClass('active')
    })
})