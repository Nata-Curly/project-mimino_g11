function customSelect() {
  const customSelects = document.querySelectorAll('.js-select');

  if (customSelects.length > 0) {
    customSelects.forEach(select => {
      NiceSelect.bind(select, {
        searchable: false,
        placeholder: 'select',
        searchtext: 'search',
        selectedtext: 'geselecteerd',
      });
    });
  }
}
customSelect();
