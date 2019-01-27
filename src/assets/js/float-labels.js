class FloatLabels {
  constructor(defaultSettings = { container: '.form-field input, .form-field, textarea' }) {
    this.defaultSettings = defaultSettings;
    this.init();
  }

  init() {
    this.getContainer.forEach((el) => {
      el.addEventListener('focus', e => this.onFocus(e));
      el.addEventListener('keypress', e => this.onKeyPress(e));
      el.addEventListener('blur', e => this.onBlur(e));
    });
  }

  get getContainer() {
    return document.querySelectorAll(this.defaultSettings.container);
  }

  addActive(e) {
    e.target.closest('.form-field').classList.add('active');
  }

  removeActive(e) {
    e.target.closest('.form-field').classList.remove('active');
  }

  onFocus(e) {
    this.addActive(e);
  }

  onKeyPress(e) {
    if (e.target.value !== '') { this.addActive(e); }
  }

  onBlur(e) {
    if (e.target.value === '') { this.removeActive(e); }
  }
}

window.addEventListener('load', () => {
  new FloatLabels();
});
