const tabItem = Array.from(document.querySelectorAll('.tab'));
const contentPage = Array.from(document.querySelectorAll('.tab__content'));
for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener('click', function() {
        tabItem.map(item => item.classList.remove('tab_active'));
        tabItem[i].classList.add('tab_active');
        contentPage.map(item => item.classList.remove('tab__content_active'));
        contentPage[i].classList.add('tab__content_active');
    });
}