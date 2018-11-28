var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
      var acionar = document.getElementById('acionar');
      var resposta = document.getElementById('resposta');

      acionar.addEventListener('click', function() {
          resposta.innerText = 'ação executada.';
       		alert('ação executada.');
      });

	    var notificationOpenedCallback = function(jsonData) {        
	   		var Titulo = jsonData.notification.payload.title;
	   		var Mensagem = jsonData.notification.payload.body;

        var notification = Titulo + ": " + Mensagem;

        localStorage.setItem('notification', notification);

        window.location.reload();
	    };

	  window.plugins.OneSignal
	    .startInit("260e2302-5f86-4707-ac95-2f06511e6c1c")
	    .handleNotificationOpened(notificationOpenedCallback)
	    .endInit();       
    }
};

app.initialize();
