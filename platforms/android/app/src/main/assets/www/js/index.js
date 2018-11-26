var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
       var acionar = document.getElementById('acionar');
       acionar.addEventListener('click', function() {
       		alert('ação executada.');
       });
	   var notificationOpenedCallback = function(jsonData) {
	   		var Titulo = jsonData.headings.en;
	   		var Mensagem = jsonData.headings.en;
	   		alert(Titulo + '\n' + Mensagem);
	   };

	  window.plugins.OneSignal
	    .startInit("260e2302-5f86-4707-ac95-2f06511e6c1c")
	    .handleNotificationOpened(notificationOpenedCallback)
	    .endInit();       
    }
};

app.initialize();
