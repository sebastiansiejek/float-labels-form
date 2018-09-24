class FloatLabels {
  constructor(defaultSettings = { container: '.form-field input, .form-field, textarea' }) {
    this.defaultSettings = defaultSettings;
    this.getContainer.forEach(el => el.addEventListener('blur', e => this.onBlur(e)));
  }

  get getContainer() {
    return document.querySelectorAll(this.defaultSettings.container);
  }

  onBlur(e) {
    e.target.closest('.form-field').classList.add('active');
  }
}

window.addEventListener('load', () => {
  new FloatLabels();
});
