<h1>Condition</h1>

<?php
    $age = 17;
    if($age >= 18){
        echo "Legal Age";
    }else if ($age >= 0 && $age <= 10){
        echo "something";
    }else{
        echo "minor";
    }

   echo ($age >= 18) ? '18+' : "17-";

   $role = "instructor"
   switch ($role) {
    case 'value':
        # code...
        break;
    
    default:
        # code...
        break;
   }
    
?>