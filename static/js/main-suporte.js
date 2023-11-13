$("#formValidation").validate({
  rules: {
      nome: {
          minlength: 2
      },
      email: {
          email: true
      },
      telefone: {
          number: true,
          minlength: 9,
          maxlength: 11,
      }
  },
  messages: {
      nome: {
          required: "Por favor, digite seu nome.",
          minlength: "Nome deve ter no mínimo 2 caracteres."
      },
      email: "Por favor, digite um e-mail válido.",
      telefone: "Por favor, digite um telefone válido, com 9 a 11 dígitos.",
      assunto: "Por favor, digite o assunto.",
      formMensagem: "Por favor, digite sua mensagem."
  },
  
  submitHandler: function(form) {
      setTimeout(function() {
          form.submit();
          window.location.href = 'index.html';
      }, 2000);
  }
});
