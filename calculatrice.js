
$(document).ready(function(e) {
	var historique = [];
	var ans_check = false;
	// Sélections des chiffres
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function(){
    	if(ans_check === false)
    	{
    		$('#debbug').val("Boite d'erreur !");
			$('#answer').val($('#answer').val() + $(this).val());	
    	}
    	else
    	{
    		$('#debbug').val("Selectionner un opérateur !");
		}
	});
	// Pour nettoyer les valeurs et historique
	$('#C').click(function(){
		$('#answer').val('');
		$('#operation').val('');
		$('#historique').text('');
		$('#last_value').val('');
		historique = [];
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
			ans_check = false;
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
			ans_check = false;
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
			ans_check = false;
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
			ans_check = false;
			$('#equals').attr('onclick','');
		}
    });	
    // Pour récupérer la derniere valeur
    $('#ans').click(function(e) { 
	
		if($('#last_value').val() == ''){
			$('#debbug').val("L'historique est vide !");
			return false;
			$('#equals').attr('onclick','');
		}
		else{
			$('#answer').val($('#last_value').val());
			ans_check = true;
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
			// On crée l historique
			$('#last_value').val(eval(c));
			historique.push(c + ' = ' + eval(c));
			$('#historique').text('');
			for (var i = historique.length - 1; i >= 0; i--)
			{
				var my_histo = $('#historique').text($('#historique').text() + '\n' + historique[i]);
			}
			my_histo.html(my_histo.html().replace(/\n/g, '<br/>'));
			// On vide les contenus
			$('#answer').val('');
			$('#operation').val('');
			ans_check = false
			$('#equals').attr('onclick','return false');
		}
	});
});