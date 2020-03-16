var app = {
    // Construtor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var botaoFoto = document.getElementById("botaoFoto");//Variável para reconhecer o botão de tirar foto
        botaoFoto.addEventListener('click',this.tirarFoto);//Cria um evento que o botão ao ser clicado a camera é ligada

        //THIS = tirar foto
        this.pictureSource=navigator.camera.pictureSourceType;//Define a fonte da foto
        this.destinationType=navigator.camera.destinationType;//Define o destino da foto

        //DIR = Imprime o objeto
        console.dir (this.pictureSource);
        console.dir (this.destinationType);

    },

    //Função para tirar e coletar a foto
    tirarFoto: function(){

        //Se não encontrar o plugin da camera
        if (!navigator.camera)
        {
            alert ("Plugin da camera não instalado")
        }

        //OPÇÕES
        let options1 =
        {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit:true,
            SavePhotoAlbum: true,
            cameraDirection: 1,
            sourceType: Camera.PictureSourceType.CAMERA
        };

        navigator.camera.getPicture(
            function(imgDATA){
                var imgHtmlTag = document.getElementById("imgHtmlTag");
                alert (imgHtmlTag);
                imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
            },
            function(e) {
                alert (e);
                alert ('Plugin Camera Instalado, mas Get picture falhou', 'Error');
            },
        options1);

        return false;
    }

};

app.initialize();