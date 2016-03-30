//// JavaScript Document
//$(function(){

//	//筛选搜索
//	var ddheight = $('.px_list li').size()*22;
//	var tattr = $('#down_show').html();

//	//排序
//	$('#down_text').focus(
//		function(){
//			$('.px_list').animate({"height":"122px","opacity":"1"},100);
//			//alert('...');	
//		}
//	)
//	$('#down_text').blur(
//		function(){
//			$('.px_list').delay(100).animate({"height":"0px","opacity":"0"},100)
//		}
//	)
//	$('.px_list li').click(
//		function(){
//			tattr = $(this).find('a').html();
//			//alert('按照'+tattr+'排序');
//			$('#down_show').html(tattr);
//			$('#down_text').attr('value',tattr);
//		}
//	)
//	$('.px_list li a').hover(
//		function(){
//			$(this).css({"background":"ffe8d3"});
//		},
//		function(){
//			$(this).removeAttr("style");
//		}
//	)
//	

//})
