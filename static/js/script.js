$(document).ready(() => {
    // Cadastramento de usuários
    const $formSignup = $('#registerUsers');
    const $usernameSignup = $('#usernameSignup');
    const $emailSignup = $('#emailSignup');
    const $passwordSignup = $('#passwordSignup');
    const $passwordConfirmSignup = $('#passwordConfirmSignup');
    const $formSignupInputs = $('.input');

    const signup = () => {

    };

    $formSignupInputs.on('focus', function() {
        if ($(this).next().hasClass('invalid-feedback')){
            $(this).next().next().addClass('input-selec');
        } else {
            $(this).next().addClass('input-selec');
        }
    })

    $formSignupInputs.on('blur', function() {
        const val = $(this).val();
        if (val) {
            if ($(this).next().hasClass('invalid-feedback')){
                $(this).next().addClass('input-selec');
            } else {
                $(this).next().addClass('input-selec');
            }
        } else {
            $(this).next().removeClass('input-selec');
        }
    })

    $formSignup.validate({
        submitHandler: (form, event) => {
            // Cancelar o comportamento padrão do envio no formulário (Recarregar a página)
            event.preventDefault();
        },
        errorElement: "div",
        errorClass: "invalid-feedback",
        // Comportamento dos inputs com erro
        highlight: (element, _, errorClass) => {
            $(element).addClass(errorClass)
        },
        // Comportamento sem erro
        unhighlight: (element, _, errorClass) => {
            $(element).removeClass(errorClass)
        },
        // Validações aplicadas aos inputs
        rules: {
            username: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true
            },
            passwordConfirm: {
                required: true,
                equalTo: '#passwordSignup',
            }
        },
        messages: {
            username: {
                required: "Por favor, informe um nome de usário...",
            },
            email: {
                required: 'Por favor, informe um email...',
                email: "Por favor, informe um email válido..."
            },
            password: {
                required: "Por favor, informe uma senha..."
            },
            passwordConfirm: {
                required: "Por favor, confirme a senha...",
                equalTo: "As senhas não são iguais..."
            }
        }
    });
});