
$(document).ready(function(e) {
	// Sélections des chiffres
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function(){
    	$('#debbug').val("Boite d'erreur !");
		var v = $(this).val();
		$('#answer').val($('#answer').val() + v);	
	});
	// Pour nettoyer les valeurs et historique
	$('#C').click(function(){
		$('#answer').val('');
		$('#operation').val('');
		$('#historique').text('');
		$('#last_value').val('');
		$('#equals').attr('onclick','');
	});
	// Les opérations
	$('#plus').click(function(e) { 
		if($('#answer').val() == ''){
			$('#debbug').val('Selectionner un chiffre !');
			// Si la case est vide (aucun chiffre n a etait ajoute, on ne prend rien en compte)
			return false;
			$('#equals').attr('onclick','');
		}
		else{
			// Si la case possede un ou des numeros :
			// On rajoute a la valeur de l'objet #operation le contenu du chiffre enregistree dans 
			// $('#answer').val => Valeur $('#plus').val => +
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
			// On clear le contenu et on attend le prochain chiffre
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#subtract').click(function(e) { 
	
		if($('#answer').val() == ''){
			$('#debbug').val('Selectionner un chiffre !');
			return false;
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#divide').click(function(e) { 
	
		if($('#answer').val() == ''){
			$('#debbug').val('Selectionner un chiffre !');
			return false;
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#product').click(function(e) { 
	
		if($('#answer').val() == ''){
			$('#debbug').val('Selectionner un chiffre !');
			return false;
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });	
    // Pour récupérer la derniere valeur
    $('#ans').click(function(e) { 
	
		if($('#last_value').val() == ''){
			$('#debbug').val("L'historique est vide !");
			console.log("prout 1");
			return false;
			$('#equals').attr('onclick','');
		}
		else{
			console.log("prout 2");
			$('#answer').val($('#last_value').val());
			$('#equals').attr('onclick','');
		}
    });	
	$('#equals').click(function(){
		
		if($('#equals').attr('onclick') != 'return false'){
			
			// On recupere la derniere valeur 
			var a = $('#answer').val();
			// On recupere les 2 dernieres valeurs
			var b = $('#operation').val();
			// On concatene le tout on obtient un string
			var c = b.concat(a);
			// On fait le calcul a l'aide du string
			$('#answer').val(eval(c));
			$('#operation').val(eval(c));
			// On crée l historique
			$('#last_value').val(eval(c));
			console.log($('#historique').text());
			var my_histo = $('#historique').text($('#historique').text() + '\n' + c + ' = ' + eval(c));
			my_histo.html(my_histo.html().replace(/\n/g, '<br/>'));
			// On vide les contenus
			$('#answer').val('');
			$('#operation').val('');
			$('#equals').attr('onclick','return false');
		}
	});
});