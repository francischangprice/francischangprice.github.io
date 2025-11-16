<?php

// section 1
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// section 2
$to = "info@francischangprice.com"; //where the email should be sent
$subject1 = "CONTACT ME: $name"; 
//$body = "NAME: $name\r\n
//EMAIL: $email\r\n
//SUBJECT: $subject\r\n
//$message\r\n
//; \r\n to put in the following line (break)

// formatting the email so it looks better
$body = "<html>
<head>
  <title>Contact Me</title>

  <style>

  .h1{
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    color: darkblue;
  }

  tr{
    font-size: 15px;
  }

  th{
    font-family: 'Montserrat', sans-serif;
    color: #002B49;
    padding: 10px auto; 
  }

  td{
    color: #008FBE;
    font-family: 'Montserrat', sans-serif; 
  }
  
  </style>

</head>

<body>
  <h1>Contact Me from $name</h1>

  <table>
    <tr>
      <th>NAME:</th>
      <td>$name</td>
    </tr>
    <br>

    <tr>
      <th>EMAIL:</th>
      <td>$email</td>
    </tr>
    <br>

    <tr>
      <th>SUBJECT:</th>
      <td>$subject</td>
    </tr>
    <br>

    <tr>
      <th>MESSAGE:</th>
      <td>$message</td>
    </tr>
  </table>
</body>
</html>
";

// first lines does not change - basically display as html
// To send HTML mail, the Content-type header must be set 
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: info@francischangprice.com';
$headers[] = 'From: francis.changprice@dcmail.ca';
$headers[] = 'Reply-To:francis.changprice@dcmail.ca';

// implode and explode - opposite of each other - explode to make a string elements in it as individuals
// implode - creates a text string it will add in between each of them a break
mail($to, $subject1, $body, implode("\r\n", $headers));
$error = 0; 

///////// old header ////////
// $headers = 'From: info@francischangprice.com' . "\r\n" .
//     'Reply-To: info@francischangprice.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// if(mail($to, $subject1, $body, $headers)){
//     $error = 0; //everything is working
// } else{
//     $error = 1; //something is missing or wrong
// };


// section 3

// section 4
// return info on the console 
$data["error"] = $error;
// $data["name"] = $name;
// $data["subject"] = $subject;
// $data["message"] = $message;
// $data["to"] = $to;
// $data["subject1"] = $subject1;
// $data["body"] = "$body"

// conerting the json text into data
$data = json_encode($data);

// send header to browser saying we are json (no php file)
header("Content-Type: application/json");

//send the data 
echo($data);

?>