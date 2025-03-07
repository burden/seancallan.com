$(function() {

    $('input, textarea').jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault();

            var name = $('input#name').val();
            var email = $('input#email').val();
            var phone = $('input#phone').val();
            var message = $('textarea#message').val();

            $.ajax({
                url: '/contact',
                type: 'POST',
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html('<div class="alert alert-success">');
                    $('#success > .alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
                        .append('</button>');
                    $('#success > .alert-success')
                        .append('<strong>Your message has been sent. </strong>');
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm input').trigger('reset');
                },
                error: function() {
                    // Fail message
                    $('#success').html('<div class="alert alert-danger">');
                    $('#success > .alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
                        .append('</button>');
                    $('#success > .alert-danger').append('<strong>Sorry it seems that my mail server is not responding. Please try again later!');
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger('reset');
                },
            });
        },
        filter: function() {
            return $(this).is(':visible');
        },
    });

    $('a[data-toggle="tab"]').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
});


/*When clicking on name hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
