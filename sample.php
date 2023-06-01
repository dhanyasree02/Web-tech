<?php
$server_name = "localhost";
$username = "root";
$password = ""; // Replace with the actual password if set
$database_name = "wt";

$conn = mysqli_connect($server_name, $username, $password, $database_name);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['buy-now'])) {
    $name = $_POST['name'];
    $area = $_POST['area'];
    $email = $_POST['email'];
    $city = $_POST['city'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $pincode = $_POST['pincode'];
    $mobile = $_POST['mobile'];
    $quantity = $_POST['quantity'];

    $sql_query = "INSERT INTO orders (name, area, email, city, address, state, country, pincode, mobile, quantity)
    VALUES ('$name', '$area', '$email', '$city', '$address', '$state', '$country', '$pincode', '$mobile', '$quantity')";

    if (mysqli_query($conn, $sql_query)) {
        header("Location: http://localhost:3000/success.html");
    } else {
        echo "Error: " . $sql_query . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>