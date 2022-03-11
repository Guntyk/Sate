$('ul.selector__menu').on('click', 'li:not(.selector__item_active)', function() {
	$(this)
		.addClass('selector__item_active').siblings().removeClass('selector__item_active')
		.closest('body').find('div.advantages__content').removeClass('advantages__content_active').eq($(this).index()).addClass('advantages__content_active');
});
$('div.faq__mark').on('click', 'li:not(.faq__qt_active)', function() {
	$(this)
		.addClass('faq__qt_active').siblings().removeClass('faq__qt_active')
		.closest('body').find('faq__qt').removeClass('faq__qt_active').eq($(this).index()).addClass('faq__qt_active');
});
