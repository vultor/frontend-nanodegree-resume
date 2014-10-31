<?
	// check form submission - if doesn't exist send back to contact form  
	if(isset($_POST['url']) && $_POST['url'] == '')
	{
		session_start();
			$my_email = 'shawn@shawnroe.com';
			// get posted data
			$name = $_POST['cfName'];
			$email_address = $_POST['cfEmail'];
			$message = $_POST['cfMessage'];
			$subject = $_POST['cfSubject'];
			// write email content 
			$email_content = "Name: $name\n"; 
			$email_content .= "Email: $email_address\n"; 
			$email_content .= "Subject:" . stripslashes($subject) . "\n\n";
			$email_content .= "Message:\n\n" . stripslashes($message);
			$from = "from: $name <$email_address>";
			// send email 
			mail ($my_email, $subject, $email_content, $from); 
			unset($_SESSION['security_code']);
			header('Location: /resume/?=success');
			exit();
	}
?>