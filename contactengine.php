<?php
if(isset($_POST["submit"]))
{
	
$EmailTo = "codynicholson96@gmail.com";
$Subject = "MESSAGE FROM YOUR WEBSITE!!!!!!";
echo $Name = $_POST['Name'];
echo $Email = $_POST['Email'];
echo $Message = $_POST['Message'];
echo $Feedback = $_POST['Feedback'];

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body="Name: $Name\nEmail: $Email\n\n$Message\n\nFeedback: $Feedback"; 

// send email 
mail($EmailTo, $Subject, $Body, "From: $Name <$Email>");

//
echo $thankYou="<p>Thank you!</p>";

// redirect to success page 
//if ($success)
//{
//  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
//}
//else
//{
//  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
//}

}
?>