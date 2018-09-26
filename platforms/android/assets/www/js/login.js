"use strict";

// Init App
var myApp = new Framework7({
   
   modalTitle: "Nex-Node",   
    material: true,
	notification: {
		title: 'Nex-Node',
		closeTimeout: 3000,
	 }
});

// Expose Internal DOM library
var $$ = Dom7;




myApp.onPageInit("index", function(){
	console.log("La página contacto está abierta!");
	 myApp.showIndicator();
});




function registrar(id, tokenApi){
	
		
	FCMPlugin.getToken(function(token) {
	
		if (token == null) {
		
			setTimeout(registrar, 1000);
		
		}else{
		
	
			
			var parametros = {
				"action" 	: 'token',		
				"tokenPush" : token,
				"tokenApi" 	: tokenApi,
				"id" 		: id
			};
			
			
			
			$.ajax({
				data:  parametros,
				url:   'http://192.168.1.102/nexnode/rest/rest.php',
				type:  'post',
				dataType: 'json',
				success:  function (response) {				

											
					console.log(response);
					
					
				}
			});
		
		}	
		
    });
	
	
}



function login(){
		
	var action	= 'login';
	var usr		= $('#usr').val()
	var	clave	= $('#pas').val()
	
	
	var parametros = {
		"action" 	: 'login',				
		"usuario" 	: usr,
		"clave" 	: clave		
	};
	
	
	 
	

	
	
	$.ajax({
		data:  parametros,
		url:   'http://192.168.1.102/nexnode/rest/rest.php',
		type:  'post',
		dataType: 'json',
		success:  function (response) {
			
						
			if(response[0].id > 0){
				
				
				window.localStorage.setItem("aceptado", "si");
				window.localStorage.setItem("tokenApi", response[0].token);
				registrar(response[0].id,response[0].token );	
				window.location.href = "inicio.html";
				//mainView.router.loadPage('contacto.html');
			
			}else{
			
								
				
				 myApp.alert('Usuario o contraseña incorrecta');
			
			}
			
			
		}
	});
	
	
}	

