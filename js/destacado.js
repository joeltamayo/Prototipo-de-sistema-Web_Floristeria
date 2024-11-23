document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupDesc = document.getElementById('popup-desc');
    const popupPrice = document.getElementById('popup-price');
    const quantityInput = document.getElementById('quantity');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closePopup = document.getElementById('close-popup');
    const decreaseQty = document.getElementById('decrease-qty');
    const increaseQty = document.getElementById('increase-qty');
    const products = document.querySelectorAll('.card');

    // Función para mostrar el popup con contenido actualizado
    const updatePopupContent = (product) => {
        const img = product.querySelector('img').src;
        const title = product.querySelector('h3').textContent;
        const desc = product.querySelector('.descripcion-larga').textContent;
        const price = product.querySelector('.precio').textContent;

        popupImg.src = img;
        popupTitle.textContent = title;
        popupDesc.textContent = desc;
        popupPrice.textContent = price;

        // Actualizar miniaturas (si las hay)
        thumbnails.forEach(thumbnail => thumbnail.src = img);

        popup.style.display = 'flex';
    };

    // Mostrar popup al hacer clic en un producto
    products.forEach(product => {
        product.addEventListener('click', () => updatePopupContent(product));
    });

    // Cerrar el popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Incrementar o disminuir cantidad
    const updateQuantity = (increment) => {
        const currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = Math.max(1, currentValue + increment);
    };

    decreaseQty.addEventListener('click', () => updateQuantity(-1));
    increaseQty.addEventListener('click', () => updateQuantity(1));
});