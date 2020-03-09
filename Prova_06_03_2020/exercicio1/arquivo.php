        <?php 
            $nota1 = $_POST ['nota1'];
            $nota2 = $_POST ['nota2'];
            $nota3 = $_POST ['nota3'];
            $nota4 = $_POST ['nota4'];
            $media = ($nota1+$nota2+$nota3+$nota4)/4;

            if($media<5){
                echo "Média: $media <br> Aluno reprovado";
            }
            elseif($media>=5 && $media<=7){
                echo "Média: $media <br> Aluno em recuperação";
            }
            elseif($media>6.9){
                echo "Média: $media <br> Aluno aprovado";
            }
        ?>
