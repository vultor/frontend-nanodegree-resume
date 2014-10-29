// hide the honeypot field
$('.robotic').hide();

$('#cfName').focusout(function(){
	if($(this).val().length == 0) {
		$('.help-block').show();
		$('.help-block').text("Please enter your name.");
		$('.name-group').addClass('has-error');
	} // end if length 0
	else {
		$('.name-group').removeClass('has-error');
		$('.help-block').hide();
	}
});

$('#cfEmail').focusout(function(){
	if($(this).val().length == 0) {
		$('.help-block').show();
		$('.help-block').text("Please enter your email.");
		$('.email-group').addClass('has-error');
	} // end if length 0
	else {
		$('.email-group').removeClass('has-error');
		$('.help-block').hide();
	}
});