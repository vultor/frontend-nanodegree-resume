// hide the honeypot field
$('.robotic').hide();

$('#cfName').focusout(function(){
	if($(this).val().length == 0) {
		$('.help-block-name').show();
		$('.help-block-name').text("Please enter your name.");
		$('.name-group').addClass('has-error');
	} // end if length 0
	else {
		$('.name-group').removeClass('has-error');
		$('.help-block-name').hide();
	}
});

$('#cfEmail').focusout(function(){
	if($(this).val().length == 0) {
		$('.help-block-email').show();
		$('.help-block-email').text("Please enter your email.");
		$('.email-group').addClass('has-error');
	} // end if length 0
	else {
		$('.email-group').removeClass('has-error');
		$('.help-block-email').hide();
	}
});

$('form button').click(function(submit) {
	if($('#cfName').val().length == 0) {
		$('.help-block-name').show();
		$('.help-block-name').text("Please enter your name.");
		$('.name-group').addClass('has-error');
		submit.preventDefault();
	} // end if length 0
	if($('#cfEmail').val().length == 0) {
		$('.help-block-email').show();
		$('.help-block-email').text("Please enter your email.");
		$('.email-group').addClass('has-error');
		submit.preventDefault();
	}
	else {
		$('#contact-message').modal();
		submit.preventDefault();
	}
}); // end button click