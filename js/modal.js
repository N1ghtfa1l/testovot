const modal = document.getElementById('modal');
const btns = document.querySelectorAll('.btn-request');
const span = document.getElementsByClassName('close')[0];

const form = document.getElementById('request-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        modal.style.display = 'block';
    });
});

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

form.addEventListener('submit', function (event) {
    let isValid = true;

    nameError.style.display = 'none';
    phoneError.style.display = 'none';

    if (nameInput.value.trim() === "") {
        nameError.textContent = 'Поле не заполнено';
        nameError.style.display = 'block';
        isValid = false;
    }

    if (phoneInput.value.trim() === "") {
        phoneError.textContent = 'Поле не заполнено';
        phoneError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
