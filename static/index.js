let menu_items = document.querySelectorAll('.menu ul li');
menu_items.forEach(item => {
    item.addEventListener('click' ,() => {
        item.classList.toggle('active');
    })
})