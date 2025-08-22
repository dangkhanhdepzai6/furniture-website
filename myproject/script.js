// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartCount = document.querySelector('.cart-count');
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');

// Sample product data
const products = [
    {
        id: 1,
        title: "Modern Sofa",
        price: 899.99,
        description: "Contemporary sofa with clean lines and premium upholstery. Perfect for modern living rooms.",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c647f6e-cf18-4be2-9c1c-cca44e555a2d.png",
        alt: "Minimalist gray fabric sofa with wooden legs in a modern living room"
    },
    {
        id: 2,
        title: "Wooden Dining Table",
        price: 599.99,
        description: "Solid oak dining table with natural wood finish. Seats up to 6 people comfortably.",
        image: "https://placehold.co/600x400",
        alt: "Rustic wooden dining table with matching chairs in a bright dining area"
    },
    {
        id: 3,
        title: "Leather Armchair",
        price: 349.99,
        description: "Luxurious leather armchair with adjustable reclining feature.",
        image: "https://placehold.co/600x400",
        alt: "Brown leather armchair with metal base in a reading nook"
    },
    {
        id: 4,
        title: "Glass Coffee Table",
        price: 249.99,
        description: "Elegant glass top coffee table with sleek metal frame.",
        image: "https://placehold.co/600x400",
        alt: "Modern glass coffee table with chrome legs in a contemporary living room"
    },
    {
        id: 5,
        title: "Queen Bed Frame",
        price: 699.99,
        description: "Upholstered bed frame with tufted headboard in premium fabric.",
        image: "https://placehold.co/600x400",
        alt: "Luxury upholstered bed frame with wooden legs and tufted headboard"
    },
    {
        id: 6,
        title: "Bookshelf Unit",
        price: 429.99,
        description: "5-tier bookshelf with adjustable shelves and steel frame.",
        image: "https://placehold.co/600x400",
        alt: "Industrial-style bookshelf with wooden shelves and black metal frame"
    }
];

// Cart functionality
let cart = [];

// Display products
function displayProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.alt}" />
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="btn-primary view-details" data-id="${product.id}">View Details</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
}

// Open product modal
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        modalImage.src = product.image;
        modalImage.alt = product.alt;
        modalTitle.textContent = product.title;
        modalPrice.textContent = `$${product.price.toFixed(2)}`;
        modalDescription.textContent = product.description;
        modal.style.display = 'block';
    }
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the app
function init() {
    displayProducts();
    updateCartCount();
}

// Update cart count display
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

