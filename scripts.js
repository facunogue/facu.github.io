document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('nav-active');
});

let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove');
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);

        cartElement.appendChild(li);
    });
}

function sendOrder() {
    const order = cart.join(', ');
    const whatsappNumber = '5491156108622';
    const subject = 'Nuevo Pedido';
    const body = `Hola, me gustaría ordenar los siguientes productos: ${order}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`, '_blank');
}

const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
});

function searchFunction() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const sections = document.querySelectorAll('main, aside, footer');
    
    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        if (text.includes(input)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
}