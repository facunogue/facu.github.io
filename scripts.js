document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('nav-active');
});

let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();

    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        if (button.textContent.includes(product)) {
            button.classList.add('product-added');
            setTimeout(() => {
                button.classList.remove('product-added');
            }, 500); // El mismo tiempo que la animación CSS
        }
    });
}

function showFloatingMessage() {
    const message = document.getElementById('floating-message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 1500); // El mensaje desaparecerá después de 1.5 segundos
}

function addToCart(product) {
    cart.push(product);
    updateCart();
    showFloatingMessage();
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

function searchProducts() {
    console.log("Buscando productos...");
    const input = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


document.getElementById('search-bar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
        const backToTop = document.getElementById('back-to-top');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    };

    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
