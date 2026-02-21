document.addEventListener('DOMContentLoaded', () => {
    // Back to top glide
    document.getElementById('scrollToTop').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Interaction for buttons
    document.querySelectorAll('.btn-read').forEach(btn => {
        btn.addEventListener('click', () => {
            alert("This module is currently being updated. Please check back later!");
        });
    });
});