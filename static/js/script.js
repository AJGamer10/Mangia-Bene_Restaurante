
$(document).ready(function () {

    const jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            const carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 600) {
                width = width / 3;
            } else if (width >= 350) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular'
        });

    $('.jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

        $(".button-carousel").on('click', function (e) {
            e.preventDefault();
            console.log("click");
        });
=======
const isPasswordSame = (password, passwordConfirm) => password === passwordConfirm

$(document).ready(() => {
    // Cadastramento de usuários
    const $formSignup = $('#registerUsers');
    const $usernameSignup = $('#usernameSignup');
    const $emailSignup = $('#emailSignup');
    const $passwordSignup = $('#passwordSignup');
    const $passwordConfirmSignup = $('#passwordConfirmSignup');
    const $formSignupInputs = [$usernameSignup, $emailSignup, $passwordSignup, $passwordConfirmSignup];

    const signup = () => {

    };

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
                isPasswordSame: true
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
                isPasswordSame: "As senhas não são iguais..."
            }
        }
    });

    jQuery.validator.addMethod("isPasswordSame", value => isPasswordSame(value, $passwordSignup.val()));

});