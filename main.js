document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  function displayError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => (error.textContent = ""));
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    const loginUserId = document.getElementById("loginUserId").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedData = localStorage.getItem("registrationData");

    if (storedData) {
      const userData = JSON.parse(storedData);
      if (
        userData.userId === loginUserId &&
        userData.password === loginPassword
      ) {
        alert("Login realizado com sucesso!");
        // Redirecionar para a página principal após o login (opcional)
        // window.location.href = 'pagina_principal.html';
      } else {
        displayError("loginUserId", "ID de usuário ou senha incorretos.");
        displayError("loginPassword", "Senha incorreta.");
      }
    } else {
      alert("Nenhum usuário cadastrado encontrado.");
    }
  });
});
