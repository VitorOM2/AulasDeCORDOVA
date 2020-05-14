var app = {
    // Construtor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() 
    {
        var btnTirarFoto = document.getElementById("botaoFoto")
        btnTirarFoto.addEventListener('click',this.tirarFoto);

        this.pictureSource=navigator.camera.pictureSourceType;
        this.destinationType=navigator.camera.destinationType;

        console.dir(this.pictureSource);
        console.dir(this.destinationType);       
    },

    //Função que tira foto
    tirarFoto: function(){
        if (!navigator.camera){
            alert ("Plugin Cordova da camera não instalado","Erro!!!");
            return;
        }
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