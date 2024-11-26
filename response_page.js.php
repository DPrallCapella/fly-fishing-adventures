<html>

<body>
    <!-- This PHP code will loop through all of theinput fields and output the IDs and names. Both options of the GET and POST methods are checked -->
    <?php
    foreach ($_POST as $key => $value) {
        echo $key . ": " . $value . "<br/>";
    }
    foreach ($GET as $key => $value) {
        echo $key . ": " . $value . "<br/>";
    }
    ?>
</body>

</html>