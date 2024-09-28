document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Valores predeterminados para el usuario y contraseña
    const predefinedUsername = 'admin';
    const predefinedPassword = '12345';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío automático del formulario
        console.log('Formulario enviado, validando...');

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        console.log('Username:', username);
        console.log('Password:', password);

        if (validateInputs(username, password)) {
            if (username === predefinedUsername && password === predefinedPassword) {
                // Si coinciden, redirigir al registro
                console.log('Usuario y contraseña correctos, redirigiendo...');
                alert('Inicio de sesión exitoso. Redirigiendo al registro...');
                window.location.href = 'register.html'; // Redirige a register.html
            } else {
                // Si no coinciden, mostrar error
                console.log('Usuario o contraseña incorrectos');
                alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
            }
        }
    });

    function validateInputs(username, password) {
        if (username === '') {
            console.log('Falta el nombre de usuario');
            alert('Por favor, ingresa un nombre de usuario.');
            return false;
        }

        if (password === '') {
            console.log('Falta la contraseña');
            alert('Por favor, ingresa una contraseña.');
            return false;
        }

        return true; // Si los datos no están vacíos
    }
});






