/* Mobile menu functionality */
const menuButton = document.querySelector('#menuButton');
const menuLinks = document.querySelector('#menuLinks')
const closeIcon = document.querySelector('#closeIcon')
/* Opening Mobile Menu */
menuButton.addEventListener('click', () => {
    menuLinks.classList.add('active')
});
/* Closing Mobile Menu */
closeIcon.addEventListener('click', () => {
    menuLinks.classList.remove('active')
});

/* Mobile Carousel Arrows */
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
const carouselContainer = document.querySelector('#carrouselContainer');
const carrouselImages = document.querySelectorAll('#carrouselContainer img');
let currentIndex = 0;
/* Mobile Carrousel Interactions */
function updateActiveImage() {
    carrouselImages[currentIndex].classList.add('mainImage');
}

nextButton.addEventListener('click', () => {
    carrouselImages[currentIndex].classList.remove('mainImage');
    currentIndex++;

    if (currentIndex >= 4) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 3;
    }

    updateActiveImage();
    console.log(currentIndex);
});

previousButton.addEventListener('click', () => {
    carrouselImages[currentIndex].classList.remove('mainImage');
    currentIndex--;

    if (currentIndex >= 4) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = 3;
    }

    updateActiveImage();
    console.log(currentIndex);
});

/* Desktop Carousel */
const desktopCarrousel = document.querySelectorAll('#desktopCarrousel img')
/* Change active state on thumbnails */
desktopCarrousel.forEach(image => {
    image.addEventListener('click', () => {
        // Find the currently active image and remove the active state
        const currentActive = document.querySelector('#desktopCarrousel .active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        // Add the active state to the clicked image
        image.classList.add('active');
        //Get the main image element
        const mainImage = document.querySelector('#productImagesCarrousel img.mainImage');
        // Get the new image source from the clicked image thumbnail
        const newImageSrc = image.src.replace('-thumbnail', '');
        // Set the source of the main image to the new image source
        mainImage.src = newImageSrc;
    });
});

/* Product Quantity */
const decreaseButton = document.querySelector('#decreaseButton');
const increaseButton = document.querySelector('#increaseButton');
const quantityCount = document.querySelector('#quantityCount');
let quantity = 1;
quantityCount.innerText = quantity;
// Increase quantity
increaseButton.addEventListener('click', () => {
    quantity++;
    quantityCount.innerText = quantity;
});
// Decrease quantity
decreaseButton.addEventListener('click', () => {
    quantity--;
    quantityCount.innerText = quantity;

    if (quantity <= 0) {
        quantity = 1;
        quantityCount.innerText = quantity;
    }
});

/* Cart components */
const addToCartButton = document.querySelector('#addToCart');
const cartPopup = document.querySelector('#cartPopup');
const cartIcon = document.querySelector('#cartIcon');
const cartContainer = document.querySelector('#cartContainer');
const emptyCartMessage = document.querySelector('.emptyCartMessage');
const checkoutButton = document.querySelector('#checkoutButton');

// Toggle cart visibility
cartIcon.addEventListener('click', () => {
    cartPopup.classList.toggle('active');
});

// Cart functionality
addToCartButton.addEventListener('click', () => {
    if (quantity > 0) {
        emptyCartMessage.classList.add('hidden');
        checkoutButton.classList.add('active');

        cartContainer.innerHTML = `
        <div class="cartItem">
            <div class="productInfo">
                <img src="./images/image-product-1.jpg" alt="Fall Limited Edition Sneakers.">
                <div class="itemDetails">
                    <p> Fall Limited Edition Sneakers. </p>
                    <p> $125.00 x ${quantity} <span> $${125.00 * quantity}</span> </p>
                </div>
            </div>
            <button class="removeItem"><img src="./images/icon-delete.svg" alt="Remove item"></button>    
        </div>
        `;

        document.createElement('span .cartItemCount').innerText = quantity;

        // Remove functionality
        document.querySelector('.removeItem').addEventListener('click', () => {
            cartContainer.innerHTML = '';
            checkoutButton.classList.remove('active');
            emptyCartMessage.classList.remove('hidden');
        });
    }
});
