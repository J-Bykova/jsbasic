import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">${getProductPrice(product.price)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;

    function getProductPrice(price) {
      return "€" + price.toFixed(2);
    }

    this.elem = div;

    const button = this.elem.querySelector('.card__button');
    button.addEventListener('click', (ingoingEvent) => {
      const outgoingEvent = new CustomEvent("product-add", {
        detail: product.id,
        bubbles: true
      });
      this.elem.dispatchEvent(outgoingEvent);
    });
  }
}
