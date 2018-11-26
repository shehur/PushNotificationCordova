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

      window.plugins.OneSignal
        .startInit("260e2302-5f86-4707-ac95-2f06511e6c1c")
        .handleNotificationReceived(function(jsonData) {
          alert("Notificação recebida:\n" + JSON.stringify(jsonData));
          console.log('Notificação recebida: ' + JSON.stringify(jsonData));
        })
        .endInit();
};

app.initialize();
