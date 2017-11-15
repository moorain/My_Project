//商品数量的增加和减少
$(".buy_num .add").click(function(){
	var num = $(".buy_num input[name='buynum']").val()
	num= parseInt(num)+1;
	$(".buy_num input[name='buynum']").val(num)
})
$(".buy_num .reduce").click(function(){
		var num = $(".buy_num input[name='buynum']").val()
	if(num>1){
		num= parseInt(num)-1;
		$(".buy_num input[name='buynum']").val(num)
	}
	
})
