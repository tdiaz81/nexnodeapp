"use strict";

// Init App
var myApp = new Framework7({
    modalTitle: "MaxSmart",
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
	
	
	
});

var app = {
    /*
    Esta función initialize la llamamos desde index.html al final del documento,
    cuando esto se ejecute lanzará deviceready y su correspondiente función "init".
    */
    initialize: function() {
        document.addEventListener("deviceready", this.init, false);
    },
    init: function() {
        //Aquí el dispositivo está preparado
        
    }
	
	// deviceready Event Handler
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.pushNotification();
		
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
		
		
		
		
    },
    pushNotification: function(){		
		
	  FCMPlugin.onNotification(function(data){
	  
		navigator.vibrate([3000]);  
		
        if(data.wasTapped){
          
		  alert(JSON.stringify(data));
		  
        }else{
          alert(JSON.stringify(data));
        }
		
      });
    },
	
	
	
};


app.initialize();


// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});



/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});



$$('.panel-left, .panel-right').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});


