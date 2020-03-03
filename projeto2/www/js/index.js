var app = {
    // Construtor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() 
    {
        var btnTirarFoto = document.getElementById("btnTirarFoto")
        btnTirarFoto.addEventListener('click',this.tirarFoto);

        this.pictureSource=navigator.camera.pictureSourceType;
        this.destinationType=navigator.camera.destinationType;

        console.dir(this.pictureSource);
        console.dir(this.destinationSource);       
    },

    //Função que tira foto
    tirarFoto: function(){

        if (!navigator.camera){
            alert ("Plugin Cordova da camera não instalado","Erro!!!");
            return;
        }

        //TESTE
         var options = 
         {
            quality:50,
            destinationType: camera.destinationType.FILE_URI,
            encodingType: camera.encodingType.JPEG,
           mediaType: Camera.mediaType.PICTURE,
            pictureSourceType : 1, //0 = Galeria de fotos/ 1 = Camera / 2 = Album salvo
           encodingType: 0 //0 = JPG / 1 = PNG
         };

        let options2 =
        {
            quality: 50,
            destinationType: camera.destinationType.DATA_URL,
            allowEdit:true,
            SavePhotoAlbum: false,
            cameraDirection: 1,
            sourceType: camera.pictureSourceType.CAMERA
        };

        navigator.cameragetpicture(
            function(imgDATA){
                var imgHtmlTag = document.getElementById("imgHtmlg");
                alert (imgHtmlTag);
                imgHtmlTag.src = "data:image/jpeg;base64,"+imgData;
            },
            function(e) {
                alert (e);
                alert ('Plugin Camera Instalado, mas Get picture falhou', 'Error');
            },
        options2);

        return false;
    }

};

app.initialize();