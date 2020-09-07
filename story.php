<!DOCTYPE html>
<html lang="en">
<head>
    <title>Example of PHP GET method</title>
</head>
<body>
<?php
if(isset($_GET["name"])){
    echo "<p>Hi, " . $_GET["name"] . "</p>";
}
?>
<form method="get" action="story.php>">
    <label for="inputName">Name:</label>
    <input type="text" name="name" id="inputName">
    <input type="submit" value="Submit">
</form><br><br><br>

Name:<?php echo $_GET["name"]; ?><br>
Inspiration<?php echo $_GET["message"]; ?>

<form action="story.php" method="get">
Name: <input type="text" name="name"><br>
Message:<textarea></textarea><br>
<input type="submit" value="Submit">
</form>

</body>
</html>