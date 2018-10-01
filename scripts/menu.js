$(document).ready(function() {
	$(".accueil").hover(function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/accueil_survol.jpg")';
		}
	},function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/accueil.jpg")';
		}
	});
	$(".nousSommes").hover(function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/nousSommes_survol.jpg")';
		}
	},function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/nousSommes.jpg")';
		}
	});
	$(".activitees").hover(function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/activitees_survol.jpg")';
		}
	},function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/activitees.jpg")';
		}
	});
	$(".comptoirs").hover(function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/comptoirs_survol.jpg")';
		}
	},function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/comptoirs.jpg")';
		}
	});
	$(".aider").hover(function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/aider_survol.jpg")';
		}
	},function(){
		if(!$(this).hasClass("pageEnCours")){
			this.style.backgroundImage = 'url("images/pages/menu/aider.jpg")';
		}
	});
});

