function afficher() {
	// body...
	document.getElementById('gros_boutton').style.display='none';
	document.getElementById('element_centraux').style.display='block'; 
}
function redirection (){
	var valeur_recuperee = document.forms["formulaire"]["q"].value;
	var url_base_google = "http://www.google.com/#q="
	document.location.href= url_base_google + valeur_recuperee;
}