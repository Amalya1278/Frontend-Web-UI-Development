const form = document.getElementById('myForm');
const formFields = form.elements;

// sto
formFields.forEach(function (field) {
  const fieldName = field.name;
  const storedValue = localStorage.getItem(fieldName);

  if (storedValue !== null) {
    field.value = storedValue;
  }
});


function throttle(callback, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}


function save() {
  formFields.forEach(function (field) {
    const fieldName = field.name;
    const fieldValue = field.value;
    localStorage.setItem(fieldName, fieldValue);
  });
}

/* amen dashti hamar ani*/
formFields.forEach(function (field) {
  field.addEventListener('input', throttle(save, 1000));
});
