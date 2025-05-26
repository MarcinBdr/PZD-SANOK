const slides = document.getElementById('slides');
const totalSlides = 3;
let index = 0;

setInterval(() => {
index = (index + 1) % totalSlides;
slides.style.transform = `translateX(-${310 * index}px)`;
}, 3000); // zmiana co 3 sekundy

                        
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const menuItems = document.querySelectorAll('#menu-list .menu');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        menuItems.forEach(function(item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
