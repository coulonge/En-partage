document.querySelectorAll('.menu ul li').forEach(item => {
    item.addEventListener('click' ,() => {
        document.querySelectorAll('.menu ul li.active').forEach(elem => {
            elem.classList.remove('active')
        })
        item.classList.add('active');
    })
})