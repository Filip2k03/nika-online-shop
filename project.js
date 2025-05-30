// Product Interaction
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to checkout...');
    });
});

// Color Selector
document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        document.querySelector('.selected-color')?.classList.remove('selected-color');
        dot.classList.add('selected-color');
    });
});

// Quantity Selector
const qtyInput = document.querySelector('#qty');
document.querySelector('#qty-plus').addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
});
document.querySelector('#qty-minus').addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
});
