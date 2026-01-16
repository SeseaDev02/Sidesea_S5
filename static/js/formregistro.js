const password = document.getElementById('passd');
const confirmPassd = document.getElementById('confPassd');
const rulesBox = document.getElementById('rules');
const confMsg = document.getElementById('confMsg');
const submitForm = document.getElementById('submitForm');
const toggleAllBtn = document.getElementById('toggleAll');
const toggleText = document.getElementById('toggleText');
const linkAviso = document.getElementById('link-aviso');
const modalPrivacidad = document.getElementById('modal-privacidad');
const btnAceptar = document.getElementById('btn-aceptar-privacidad');

const rules = {
    length: v => v.length >= 8,
    upper: function(v) {
        const regex = /[A-Z]/;
        if (regex.test(v)) {
            return true;
        } else {
            return false;
        }
    },
    lower: v => /[a-z]/.test(v),  // ✅ Corregido
    number: v => /\d/.test(v),
    symbol: v => /[!@#$%^&*(),.?":{}|<>]/.test(v)
};

let passwordValid = false;

password.addEventListener('input', () => {
    passwordValid = true;
    for (let rule in rules) {
        const li = document.getElementById(rule);
        if (rules[rule](password.value)) {
            li.textContent = '✅ ' + li.textContent.slice(2);
            li.style.color = 'green';
        } else {
            li.textContent = '❌ ' + li.textContent.slice(2);
            li.style.color = 'red';
            passwordValid = false;
        }
    }
    rulesBox.style.display = passwordValid ? 'none' : 'block';  // ✅ Corregido
    validateConfirmation();
});

confirmPassd.addEventListener('input', validateConfirmation);

function validateConfirmation() {
    if (!confirmPassd.value) {
        confMsg.textContent = '';
        submitForm.disabled = true;
        return;
    }
    if (password.value === confirmPassd.value && passwordValid) {
        confMsg.textContent = '✅ Las contraseñas coinciden';
        confMsg.style.color = 'green';
        submitForm.disabled = false;
    } else {
        confMsg.textContent = '❌ Las contraseñas no coinciden';
        confMsg.style.color = 'red';
        submitForm.disabled = true;
    }
}

toggleAllBtn.addEventListener('change', function() {
    const isChecked = toggleAllBtn.checked;
    password.type = isChecked ? 'text' : 'password';
    confirmPassd.type = isChecked ? 'text' : 'password';
    toggleText.textContent = isChecked ? 'Ocultar contraseñas' : 'Mostrar contraseñas';
});

// Abrir modal
linkAviso.addEventListener('click', function(e) {
    e.preventDefault();
    modalPrivacidad.classList.add('mostrar');
});

// Cerrar modal al hacer clic en Aceptar
btnAceptar.addEventListener('click', function() {
    modalPrivacidad.classList.remove('mostrar');
});

// Cerrar modal al hacer clic fuera del contenido
modalPrivacidad.addEventListener('click', function(e) {
    if (e.target === modalPrivacidad) {
        modalPrivacidad.classList.remove('mostrar');
    }
});