// JavaScript Document
var param={
	navBar : 0
}

Method={
	//选项卡切换
	tabswitchClick: function (id,cls) {
        $(id).click(function () {
			$(id).parent().removeClass('active');
            $(this).parent().addClass('active');
            var targetNumber = $(id).index(this);
            $(cls).hide();
            $(cls+':eq(' + targetNumber + ')').show();
			return false;
        });
   },
    tabinit: function (id,cls) {
		$(id).parent().removeClass('active');
        $(id).first().parent().addClass('active');
        $(cls+':eq(' + 0 + ')').show();
		Method.tabswitchClick(id,cls);
    }
}
