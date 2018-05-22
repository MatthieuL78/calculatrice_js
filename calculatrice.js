
$(document).ready(function(e) {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function(){
		var v = $(this).val();
		$('#answer').val($('#answer').val() + v);	
	});
	$('#C').click(function(){
		$('#answer').val('');
		$('#operation').val('');
		$('#operation').removeClass('activeAnswer');
		$('#equals').attr('onclick','');
	});
	$('#plus').click(function(e) { 
		if($('#answer').val() == ''){
			// Si la case est vide (aucun chiffre n a etait ajoute, on ne prend rien en compte)
			return false;
			console.log($('#equals').attr('onclick','').val());
			// $('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#plus').val() );
			$('#answer').val('');
			console.log($('#equals').attr('onclick','').val());
			$('#equals').attr('onclick','');
		}
		else{
			// Si la case possede un ou des numeros :
			// On rajoute a la valeur de l'objet #operation le contenu du chiffre enregistree dans 
			// #answer et on y ajoute la valeur de l'operateur (ici '+') 
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
			// On clear le contenu et on attend le prochain chiffre
			$('#answer').val('');
			console.log($('#equals').attr('onclick','').val());
			$('#equals').attr('onclick','');
		}
    });
	$('#subtract').click(function(e) { 
	
		if($('#answer').val() == ''){
			return false;
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#subtract').val() );
			$('#answer').val('');
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
			return false;
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#divide').val() );
			$('#answer').val('');
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
			return false;
			$('#equals').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'activeAnswer') {
			$('#operation').val( $('#operation').val() + $('#product').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
			$('#answer').val('');
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
			$('#operation').addClass('activeAnswer');
			$('#equals').attr('onclick','return false');
		
		}
	});
});