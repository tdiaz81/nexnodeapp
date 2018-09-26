"use strict";

// Init App
var myApp = new Framework7({
    modalTitle: "Heimdall",   
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
        receivedEvent('deviceready');
        pushNotification();
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
    }
	
	
	
};


app.initialize();




myApp.onPageInit("index", function(){
	var canvas = document.getElementById('video-canvas');
	var url = 'ws://192.168.5.100:8082/';
	var player = new JSMpeg.Player(url, {canvas: canvas});
});



myApp.onPageInit("nodos", function(){
	
	$$('.ayuda').on('click', function () {	
		myApp.popup('.popup-about');
	});
		
	
});







myApp.onPageInit("camara", function(){
	
		
	
	screen.orientation.onchange = function(){
		
		
		
		var camaraNB = document.getElementById('camaraNB');
		 
		 if( screen.orientation.type == 'landscape-primary'){
			 
			 myApp.hideNavbar(camaraNB)
			
		 }
		 
		 if( screen.orientation.type == 'landscape-secondary'){
			 
			 myApp.hideNavbar(camaraNB)
		 }
		 
		 
		 if( screen.orientation.type == 'portrait-primary'){
			 
			 myApp.showNavbar(camaraNB)
		 }
		 
		 
		 if( screen.orientation.type == 'portrait-secondary'){
			 
			 myApp.showNavbar(camaraNB)
		 }
		 
		 
	};
	
	
});





function salir(){
	
	 myApp.alert('Salir');
	
}



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


