<?php
//note this code is ONLY on VM 2
$cube = 0;
if(isset($_GET['value'])) 
{
  $cube = $_GET['value'] * $_GET['value'] * $_GET['value'];
}

// Change this line to use your name and the correct virtual machine number, so we know which VM responded
echo 'From Backend VM2: ' . $cube; 
?>