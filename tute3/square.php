<?php
$square = 0;
if(isset($_GET['value'])) 
{
  $square = $_GET['value'] * $_GET['value'];
}

// Change this line to use your name and the correct virtual machine number, so we know which VM responded
echo 'From Backend VM2: ' . $square;
?>