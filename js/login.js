document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    if(usuario == 'admin' && pass == '12345'){
        window.location.href = '../private/dashboard.html';
    }
    else {
        document.getElementById('loginMessage').textContent = "Usuario o password invalidos, intente nuevamente"
    }
});