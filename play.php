<?php
    exec('date > dateIsNow.txt');

    $oldMessage = "true";

    $deletedFormat = "false";

    //read the entire string
    $str=file_get_contents('ajax_info.txt');

    //replace something in the file string - this is a VERY simple example
    $str=str_replace("$oldMessage", "$deletedFormat",$str);

    //write the entire string
    file_put_contents('ajax_info.txt', $str);
?>
