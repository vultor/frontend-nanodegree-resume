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

$('button').click(function() {
	if($('#cfEmail').val().length == 0) {
		$('.help-block-email').show();
		$('.help-block-email').text("Please enter your email.");
		$('.email-group').addClass('has-error').focus();
		return false;
	}
	if($('#cfName').val().length == 0) {
		$('.help-block-name').show();
		$('.help-block-name').text("Please enter your name.");
		$('.name-group').addClass('has-error').focus();
		return false;
	} // end if length 0
}); // end button click
