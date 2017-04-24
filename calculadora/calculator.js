/*Función de Captura de Datos*/
$(function inic() {num = document.getElementById("n1");}
);

/*Función Elevar al cuadrado jQuery*/
$(function () {
	$("#n1").on("click", function(){$("#n1"),val("");});
	$("#bot1").on("click", function() {
									var num = $("#n1");
									num.val(num.val()*num.val());
									}
									);
});

/*Función Calcular el inverso jQuery*/
$(function () {
	$("#n1").on("click", function(){$("#n1"),val("");});
	$("#bot2").on("click", function() {
									var num = $("#n1");
									num.val(1/num.val());
									}
									);
});

/*Función Calcular raiz cuadrada*/
$(function () {
	$("#n1").on("click", function(){$("#n1"),val("");});
	$("#bot3").on("click", function() {
									var num = $("#n1");
									num.val(Math.sqrt(num.val(),2));
									}
									);
});

/*Función Calcular Parte Entera jQuery*/
$(function ()
{
	$("#n1").on("click", function(){$("#n1"),val("");}
				);
	$("#bot4").on("click", function() 	{
											var num = $("#n1");
											if ($(num >= 0)) {num.val(Math.floor(num.val()));}
											else  			{
															num.val(-Math.ceil(num.val()));
															}

										}
				);
});

/* Función POTENCIA n DEL NÚMERO 2 jQuery*/
$(function () {
	$("#bot5").on("click",
	      function() {
	      	var num = $("#n1");
	      	/*var resultado = 1;*/
	      	var acc = num.val();
            num.val(Math.pow(2,+acc));
            
	      }
	    );
});

/* Función FACTORIAL DE n jQuery*/
$(function () {
	$("#bot6").on("click",
	      function() {
	      	var num = $("#n1");
	      	var resultado = 1;
	      	var acc = num.val();
            for(var i=1; i<= +acc; i++) { resultado *= i; }
            num.val(resultado);
	      }
	    );
});

/* Función SUMAR jQuery*/
$(function () {
	$("#bot7").on("click",
	      function() {
	        var num = $("#n1");
	        acc = num.val();
	        op = "+";
	        num.val("");
	      }
	    );
});

/* Función RESTAR jQuery*/
$(function () {
	$("#bot8").on("click",
	      function() {
	        var num = $("#n1");
	        acc = num.val();
	        op = "-";
	        num.val("");
	      }
	    );
});

/* Función MULTIPLICAR jQuery*/
$(function () {
	$("#bot9").on("click",
	      function() {
	        var num = $("#n1");
	        acc = num.val();
	        op = "*";
	        num.val("");
	      }
	    );
});

/* Función DIVIDIR jQuery*/
$(function () {
	$("#bot10").on("click",
	      function() {
	        var num = $("#n1");
	        acc = num.val();
	        op = "/";
	        num.val("");
	      }
	    );
});

/* Función POTENCIA jQuery*/
$(function () {
	$("#bot11").on("click",
	      function() {
	        var num = $("#n1");
	        acc = num.val();
	        op = "^";
	        num.val("");
	      }
	    );
});

/* Función SUMATORIOL jQuery*/
$(function () {
	$("#bot12").on("click",
		function() {
			var num = $("#n1");
			var lista1 = num.val();
			var lista2 = lista1.split(',');
		var i = 0, acc = 0;
		num.val("");
		while (i < lista2.length)
			{acc += +lista2[i];i++;}
		num.val(acc);
		}
	);
});

/* Función PRODUCTO jQuery*/
$(function () {
	$("#bot13").on("click",
		function() {
			var num = $("#n1");
			var lista1 = num.val();
			var lista2 = lista1.split(',');
		var i = 0, acc = 1;
		num.val("");
		while (i < lista2.length)
			{acc *= +lista2[i];i++;}
		num.val(acc);
		}
	);
});

/*Función Limpiar Cajetín jQuery*/
$(function () {
	$("#bot14").on("click", function() {
									var num = $("#n1");
									num.val("")});
									}
);

/* Función OPERADOR y OPERACIONES jQuery*/
$(function () {
	$("#bot15").on("click",
	      function() {
	            var num = $("#n1");
	            if (op === "+") {num.val(+acc + +num.val()); acc = ("");}
	            if (op === "-") {num.val(+acc - +num.val()); acc = ("");}
	            if (op === "*") {num.val(+acc * +num.val()); acc = ("");}
	            if (op === "/") {num.val(+acc / +num.val()); acc = ("");}
	            if (op === "^") {num.val(Math.pow(acc,num.val()));}
	      }
	); 
});