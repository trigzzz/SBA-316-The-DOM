document.addEventListener('DOMContentLoaded', function () {
    // Clothing Brands
    const clothingBrandsContainer = document.createElement('div');
    clothingBrandsContainer.classList.add('clothing-brands');
    const clothingBrands = ['Nike Clothes', 'Chrome Hearts', 'Off White', 'Gallery Dept', 'Other Brands'];
    
    // Cache element using getElementById
    const mainContentSection = document.getElementById('main-content');
    
    clothingBrands.forEach(brand => {
        const brandItem = document.createElement('div');
        brandItem.classList.add('brand-item');
        brandItem.textContent = brand;
        clothingBrandsContainer.appendChild(brandItem);
    });

    // Append the clothingBrandsContainer to the main content section
    mainContentSection.appendChild(clothingBrandsContainer);

    // Shopping Cart
    const cartSection = document.createElement('div');
    cartSection.id = 'cart-section';
    cartSection.innerHTML = '<p>Shopping Cart: 0 items</p>';
    
    // Cache element using querySelector
    const body = document.body;
    
    body.appendChild(cartSection);

    // Event listeners
    const productContainer = document.getElementById('shoes-catalog');

    // Add to Cart function
    productContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('product-item')) {
            // Update the shopping cart count when adding multiple items
            const cartCount = parseInt(cartSection.textContent.match(/\d+/)[0]);
            cartSection.innerHTML = `<p>Shopping Cart: ${cartCount + 1} items</p>`;

            // Add item to cart 
            const itemClone = event.target.cloneNode(true);
            cartSection.appendChild(itemClone);
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById('user-contact-form');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    // Event listener for form submission
    contactForm.addEventListener('submit', function (event) {
        // Validate email format using HTML attribute
        if (!emailInput.checkValidity()) {
            alert('Invalid email format');
            event.preventDefault(); // Prevent form submission if not correct format
        }

        // Validate phone number
        if (!isValidPhoneNumber(phoneInput.value)) {
            alert('Invalid phone number');
            event.preventDefault(); // Prevent form submission if number format isnt correct
        }
    });

    // Function to validate phone number format 
    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }
});
