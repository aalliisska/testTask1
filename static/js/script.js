//header при скролле
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 1) {
      header.classList.add('header_fixed');
    } else {
      header.classList.remove('header_fixed');
    }
  });
});

//валидация
const postForm = document.getElementById('post');
const publishButton = document.getElementById('button');

const emailField = postForm.email;
const nameField = postForm.name;

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  function checkField(inputElement, parentElement) {
    const fieldValue = inputElement.value;
  
    if (fieldValue.length >= 1) {
      parentElement.namedItem('length').style.display = 'none';
    } else {
      parentElement.namedItem('length').style.display = 'block';
    }
  }

  const emailErrorMessage = emailField.parentElement.children;
  checkField(emailField, emailErrorMessage);

  const passwordErrorMessage = nameField.parentElement.children;
  checkField(nameField, passwordErrorMessage);

  const isFormValid = () => {
    const errorFields = document.querySelectorAll('.error');
  
    return [...errorFields].every((errorField) => {
      return window.getComputedStyle(errorField).display === 'none';
    })
  }
})

const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');

function inputFields(inputElement, emptyClass, filledClass) {
  inputElement.addEventListener('input', function() {
    if (inputElement.value.trim() === '') {
      inputElement.classList.add(emptyClass);
      inputElement.classList.remove(filledClass);
    } else {
      inputElement.classList.add(filledClass);
      inputElement.classList.remove(emptyClass);
    }
  });
}
inputFields(emailInput, 'input', 'filled-input');
inputFields(nameInput, 'input', 'filled-input');

//плавный скролл
const navElements = document.querySelectorAll('a[href^="#"]');

navElements.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = link.getAttribute('href'); 
    const target = document.querySelector(id);

    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});