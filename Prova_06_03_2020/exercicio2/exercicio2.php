<?php 
    $valor1 = $_POST ['valor1'];
    $valor2 = $_POST ['valor2'];
    $valor3 = $_POST ['valor3'];

    if(($valor1<$valor2)){
        if ($valor2<$valor3){

        echo "$valor1,$valor2,$valor3";

        }elseif($valor2>$valor3){
            echo "$valor1,$valor3,$valor2";
        }
    }
    elseif($valor2<$valor1){
        if($valor1<$valor3){
            echo "$valor2,$valor1,$valor3";
        }elseif($valor1>$valor3){
            echo "$valor2,$valor3,$valor1";
        }
    }
    elseif($valor3<$valor1){
        if($valor1<$valor2){
            echo "$valor3,$valor1,$valor2";
        }elseif($valor1>$valor2){
            echo "$valor3,$valor2,$valor1";
        }
    }

?>