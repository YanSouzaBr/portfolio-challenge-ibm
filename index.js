document.getElementById('btn').addEventListener('click', () => {
    window.confirm('Thank you for submitting a recommendation!');
});

window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.documentElement.scrollTop > 100) { // Change 100 to adjust when the button appears
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
