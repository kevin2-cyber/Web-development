<?php 
    if(isset($_POST['insert'])){
        $hasError = false;
        $errors = array();
        $error_msg;
        $first_name = $_POST['firstName'];
        $last_name = $_POST['lastName'];
        $email = $_POST['email'];
        $amount = $_POST['amount'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirmPassword'];
        if(empty($first_name)){
            $hasError = true;
            $error_msg = "Input your first name";
            array_push($errors, $error_msg);
        }
        if(empty($last_name)){
            $hasError = true;
            $error_msg = "Input your Last name";
            array_push($errors, $error_msg);
        }
        if(empty($email)){
            $hasError = true;
            $error_msg = "Email cannot be empty!";
            array_push($errors, $error_msg);
        }
        if(empty($amount)){
            $hasError = true;
            $error_msg = "Email amount paid!";
            array_push($errors, $error_msg);
        }
        if(empty($password)){
            $hasError = true;
            $error_msg = "Enter your password";
            array_push($errors, $error_msg);
        }
        if(empty($confirm_password)){
            $hasError = true;
            $error_msg = "Confirm your password";
            array_push($errors, $error_msg);
        }elseif($password != $confirm_password){
            $hasError = true;
            $error_msg = "Passwords do not match!";
            array_push($errors, $error_msg);
        }

        // insert data to database
        require "./php/dbconfig.php";
        if(!$hasError){
            // Encrypt password
            $password = md5($password);
            $sql = "INSERT into users VALUES(null, '$firstName', '$lastName', '$email', '$password', '$amount')";
            $sql_query = mysqli_query($connect, $sql);
            if ($sql_query) {
            $error_msg = 'inserted';
            array_push($errors, $error_msg);
            }else {
            $error_msg ='Sorry something went wrong. please try again';
            array_push($errors, $error_msg);
            }
        }
    }
    function printErrors($myArray){
        foreach($myArray as $item){
            if($item == "inserted"){
                $item = "Table Users updated sucessfully";
                echo "<li style = 'color: green; font-weight: bold;'>$item</li>";
            }else{
                echo "<li style = 'color: red'>$item</li>";
            }
        }
    }
    function printTable(){
        require "./php/dbconfig.php";
        $query_select = "SELECT * FROM users";
        $run = mysqli_query($connect, $query_select);
        $result = mysqli_fetch_assoc($run);
        $num = mysqli_num_rows($run);
        if($num == 0){
            echo "<tr colspan = '4'><td>No data in database</td></tr>";
        }else{
            while($result = mysqli_fetch_assoc($run)):
                echo "<tr>
                    <td>".$result['user_id']."</td>
                    <td>".$result['firstName']." ".$result['lastName']."</td>
                    <td>".$result['email']."</td>
                    <td>".$result['amount']."</td>
                    </tr>";
            endwhile;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try Work</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <form action="index.php" method="post" autocomplete = "off">
        <ul>
        <?php 
            if(isset($errors)) echo printErrors($errors);
        ?>
        </ul>
        <h2>Fill the Form Below</h2>
        <div class="row">
            <div class="input-group">
                <label for="firstName">First name</label>
                <input type="text" name = "firstName" placeholder="Enter first name..">
            </div>
            <div class="input-group">
                <label for="lastName">Last name</label>
                <input type="text" name = "lastName" placeholder="Enter last name..">
            </div>
        </div>
        <div class="row">
            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="email" name = "email" placeholder="Enter email..">
            </div>
            <div class="input-group">
                <label for="amount">Amount Paid</label>
                <input type="text" name = "amount" placeholder="Enter Amount paid..">
            </div>
        </div>
        <div class="row">
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" name = "password" placeholder="Enterpassword..">
            </div>
            <div class="input-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" name = "confirmPassword" placeholder="Confirm Password..">
            </div>
        </div>
        <div class="row">
            <button type="submit" name = "insert">Submit Data</button>
        </div>
    </form>

    <div class="table">
        <h2>Customers Table</h2>         
        <table class="table" border = '01xzx'>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Payment Amount</th>
            </tr>
          </thead>
          <tbody>
          <!-- <?php
            require "./php/dbconfig.php";
            $query_select = "SELECT * FROM users";
            $run = mysqli_query($connect, $query_select);
            while($result = mysqli_fetch_assoc($run)){
            ?>
            <tr>
                <td><?php echo $result['user_id'];?></td>
                <td><?php echo $result['firstName'].' '.$result['lastName'];?> </td>
                <td><?php echo $result['email'];?></td>
                <td><?php echo 'GHC'.$result['amount'];?></td>
            </tr>
            <?php    } ?> -->
            <?php printTable(); ?>
          </tbody>
        </table>
      </div>
</body>
</html>