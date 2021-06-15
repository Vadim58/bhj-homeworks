const tabItem = document.querySelectorAll('.tab');
const contentPage = document.querySelectorAll('.tab__content');
for (let i = 0; i < tabItem.length; i++) {
	tabItem[i].addEventListener('click', function () {
		tabItem[i].classList.add('tab_active');
		tabItem[i - 1].classList.remove('tab_active');
		contentPage[i].classList.add('tab__content_active');
		contentPage[i - 1].classList.remove('tab__content_active');
	});
}