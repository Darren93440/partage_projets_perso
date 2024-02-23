<!DOCTYPE html>
<html>
    
    <head></head>
    
    <body>
        
        <?php
            
            try
            {
                $database = new PDO("mysql:host=localhost;dbname=store","root","");
                $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch(Exception $e)
            {
                die("ERROR: ".$e->getMessage());
            }
        
        
            $sql = $database->prepare("INSERT INTO customers(first_name, last_name) VALUES (?, ?)");
        
            $first_name = "Johny";
            $last_name = "Halliday";
        
            $sql->execute(array($first_name, $last_name));
        
            
        
        ?>
    </body>
    
</html>