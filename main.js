var form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Эвент сработал');

        var dataForm = {
            name: document.querySelector('[name="name"]').value,
            family: document.querySelector('[name="family"]').value,
            patronymic: document.querySelector('[name="patronymic"]').value,
            floor: document.querySelector('[name="floor"]').value,
            email: document.querySelector('[name="email"]').value
        };

        console.log(dataForm);
        form.reset();

    }
);

