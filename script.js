
$(document).ready(function() {
    $('.descriptionCardExpert').click(function() {
        $('.ChoiceExpert').hide();
        $('.ChoiceServices').show();
    });
});


$(document).ready(function() {
    $('#SubmitServise').click(function() {
        $('.ChoiceServices').hide();
        $('.ChoiceDateTime').show();
    });
});

