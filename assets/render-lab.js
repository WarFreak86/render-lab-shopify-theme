class RenderLabTheme {
  constructor() {
    this.drawer = document.querySelector('[data-cart-drawer]');
    this.overlay = document.querySelector('[data-cart-overlay]');
    this.bindCart();
    this.bindMenus();
    this.bindProductForms();
  }

  bindCart() {
    document.addEventListener('click', (event) => {
      const open = event.target.closest('[data-cart-open]');
      const close = event.target.closest('[data-cart-close]');
      if (open) {
        event.preventDefault();
        this.openCart();
      }
      if (close || event.target === this.overlay) {
        this.closeCart();
      }
    });
  }

  openCart() {
    if (!this.drawer || !this.overlay) return;
    this.overlay.hidden = false;
    this.drawer.classList.add('is-open');
    this.drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  closeCart() {
    if (!this.drawer || !this.overlay) return;
    this.drawer.classList.remove('is-open');
    this.drawer.setAttribute('aria-hidden', 'true');
    this.overlay.hidden = true;
    document.body.classList.remove('no-scroll');
  }

  bindMenus() {
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-menu-toggle]');
      if (!trigger) return;
      const target = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!target) return;
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      target.toggleAttribute('hidden', expanded);
    });
  }

  bindProductForms() {
    document.addEventListener('change', (event) => {
      const select = event.target.closest('[data-variant-select]');
      if (!select) return;
      const form = select.closest('form');
      const option = select.options[select.selectedIndex];
      const price = form.querySelector('[data-product-price]');
      const submit = form.querySelector('[data-product-submit]');
      if (price && option.dataset.price) price.textContent = option.dataset.price;
      if (submit) submit.disabled = option.dataset.available !== 'true';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new RenderLabTheme());
