function showSlide(section, index) {
    let items = document.querySelectorAll(`.${section} .item`);
    items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}

function prevSlide(section) {
    let items = document.querySelectorAll(`.${section} .item`);
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));
    let newIndex = (activeIndex - 1 + items.length) % items.length;
    showSlide(section, newIndex);
}

function nextSlide(section) {
    let items = document.querySelectorAll(`.${section} .item`);
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));
    let newIndex = (activeIndex + 1) % items.length;
    showSlide(section, newIndex);
}
