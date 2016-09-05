//Author : Rodrigo vitorelli dos Santos
//E-mail: rodrigo-vitorelli@outlook.com

//botão voltar ao topo


//cria o botão ver mais e ocultar no filtro do menu
var verMaisCatFiltro = function(){
	/*MENU LATERAL VTEX  (UL LI)*/
	$(".menu-departamento fieldset div").each(function() {
		var $this = $(this);
		if ($this.children().length == 0) $this.hide();
		if ($this.find("label").length > 8) {
			$this.find("label:gt(5)").hide().addClass("hide_items");
			$this.append("<a class='menu_show_all'>ver mais +</a><a class='menu_hidden_all hide'>ocultar</a>");
			$this.find(".menu_show_all").bind("click", function() {
				$this.find(".hide_items").fadeIn(250);
				jQuery(this).hide();
				$this.find(".menu_hidden_all").show();
			});
			$this.find(".menu_hidden_all").bind("click", function() {
				$this.find(".menu_show_all").show();
				$(this).hide();
				$this.find(".hide_items").fadeOut(250);
			});
		};
	});
}


/**
* Infinity Scroll
* @author Carlos Vinicius [Quatro Digital]
* @version 3.14
* @license MIT
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
(function(c){"function"!==typeof c.fn.QD_infinityScroll&&(window._QuatroDigital_InfinityScroll=window._QuatroDigital_InfinityScroll||{},c.fn.QD_infinityScroll=function(f){var a=window._QuatroDigital_InfinityScroll,e=function(a,c){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Infinity Scroll]\n"),b=a):b=["[Infinity Scroll]\n"+a];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&
"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,b)}catch(d){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,b)}catch(d){try{console.error(b.join("\n"))}catch(e){}}else try{console.warn.apply(console,b)}catch(d){try{console.warn(b.join("\n"))}catch(e){}}}},p={lastShelf:">div:last",elemLoading:'\x3c!-- Infinity Scroll - Loading message --\x3e<div id="scrollLoading" class="qd-is-loading">Carregando ... </div>',
searchUrl:null,returnToTop:c('<div id="returnToTop" class="qd-is-return-top"><a href="#"><span class="text">voltar ao</span><span class="text2">TOPO</span><span class="arrowToTop"></span></a></div>'),scrollBy:document,callback:function(){},getShelfHeight:function(a){return a.scrollTop()+a.height()},paginate:null,insertContent:function(a,b){a.after(b)},authorizeScroll:function(){return!0}},d=jQuery.extend({},p,f),b=jQuery(this);jQuery("");if(1>b.length)return b;1<b.length&&(e("Identifiquei que a seletor informado ("+
b.selector+") retornou "+b.length+" elementos.\n Para solucionar o problema estou selecionando autom\u00e1ticamente o primeiro com o id: #"+(b.filter("[id^=ResultItems]:first").attr("id")||"!Not Found"),"Aviso"),b=b.filter("[id^=ResultItems]:first"));b.filter("[id^=ResultItems]").length||e(["Certifique-se que esta selecionando o elemento correto.\n O plugin espera que o elemento seja o que cont\u00e9m o id: #"+(c("div[id^=ResultItems]").attr("id")||"!Not Found"),c("div[id^=ResultItems]")],"Info");
b.parent().filter("[id^=ResultItems]").length&&(b=b.parent(),e(["Identifiquei que o seletor pai do elemento que voc\u00ea informou \u00e9 o #"+(jQuery("div[id^=ResultItems]").attr("id")||"!Not Found")+".\n Como forma de corrigir esse problema de sele\u00e7\u00e3o de elemento, assumirei a prateleira correta.",b],"Aviso"));c("body").append(d.returnToTop);var g=c(window),q=c(document),m=c(d.scrollBy),n=c(d.elemLoading);a.toTopE=c(d.returnToTop);a.moreResults=!0;a.currentPage=2;var r=function(){var a,
b=/\/buscapagina\?.+&PageNumber=/i,d=/\/paginaprateleira\?.+PageNumber=/i;c("script:not([src])").each(function(){var c=this.innerHTML;if(-1<c.indexOf("buscapagina"))return a=b.exec(c),!1;if(-1<c.indexOf("paginaprateleira"))return a=d.exec(c),!1});if("object"===typeof a&&"undefined"!==typeof a[0])return a[0].replace("paginaprateleira","buscapagina");e("N\u00e3o foi poss\u00edvel localizar a url de busca da p\u00e1gina.\n Tente adicionar o .js ao final da p\u00e1gina. \n[M\u00e9todo: getSearchUrl]");
return""};(function(){var c=g.height();g.bind("resize.QD_infinityScroll",function(){c=g.height()});var b=0;m.bind("scroll.QD_infinityScroll",function(){clearTimeout(b);b=setTimeout(function(){q.scrollTop()>c?document.body.getAttribute("data-qd-infinity-scroll")||document.body.setAttribute("data-qd-infinity-scroll",1):document.body.getAttribute("data-qd-infinity-scroll")&&document.body.removeAttribute("data-qd-infinity-scroll")},20)});a.buttonToTop=a.toTopE.find("a").bind("click.QD_infinityScroll",
function(){jQuery("html,body").animate({scrollTop:0},"slow");return!1})})();(function(){a.searchUrl=null!==d.searchUrl?d.searchUrl:r();a.currentStatus=!0;var f=c(".pager[id*=PagerTop]:first").attr("id")||"";if(""!==f&&(a.pages=window["pagecount_"+f.split("_").pop()],"undefined"===typeof a.pages))for(var h in window)if(/pagecount_[0-9]+/.test(h)){a.pages=window[h];break}"undefined"===typeof a.pages&&(a.pages=9999999999999);var k=function(){if(a.currentStatus){var f=b.find(d.lastShelf);if(1>f.length)return e("\u00daltima Prateleira/Vitrine n\u00e3o encontrada \n ("+
f.selector+")"),!1;f.after(n);a.currentStatus=!1;var g=a.currentPage;c.ajax({url:a.searchUrl.replace(/pagenumber\=[0-9]*/i,"PageNumber="+a.currentPage),dataType:"html",success:function(b){1>b.trim().length?(a.moreResults=!1,e("N\u00e3o existem mais resultados a partir da p\u00e1gina: "+g,"Aviso"),c(window).trigger("QuatroDigital.is_noMoreResults")):d.insertContent(f,b);a.currentStatus=!0;n.remove()},error:function(){e("Houve um erro na requisi\u00e7\u00e3o Ajax de uma nova p\u00e1gina.")},complete:function(a,
b){d.callback();c(window).trigger("QuatroDigital.is_Callback")}});a.currentPage++}};if("function"===typeof d.paginate)d.paginate(function(){return a.currentPage<=a.pages&&a.moreResults?(k(),!0):!1});else{var l=0;m.bind("scroll.QD_infinityScroll_paginate",function(){clearTimeout(l);l=setTimeout(function(){a.currentPage<=a.pages&&a.moreResults&&d.authorizeScroll()&&g.scrollTop()+g.height()>=d.getShelfHeight(b)&&k()},70)})}})();return b},c(document).ajaxSend(function(c,a,e){-1<e.url.indexOf("PageNumber")&&
0<e.url.search(/PageNumber\=[^0-9]+/)&&a.abort()}),window.goToTopPage=function(){},c(function(){window.goToTopPage=function(){}}))})(jQuery);


//frete sempre visível
function shippingContainer(){
 if($('.shipping-value').length>0 && !$('.shipping-value').hasClass('active')){
     $('.product-shipping').show();
     $('.shipping-value').addClass('active');
     ShippingValue();
 }else if($('.shipping-value').length<1){
     $('.shipping-value').removeClass('active');
     $('.product-shipping').hide();
 }

 if($('#calculoFrete .contentWrapper').length>0 && !$('#calculoFrete .contentWrapper').hasClass('active')){
     $('#calculoFrete .contentWrapper').addClass('active');
     $("#calculoFrete .freight-btn").val("Calcular frete");
 }
}

//função para tabs de tabelas de descrição e etc
function openCity(evt, prodDesc) {
    // declarando variaveis
    var i, tabcontent, tablinks;

    // coloca em todos elementos a class="tabcontent" and esconde
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //adiciona e remove a class active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //define a class active
    document.getElementById(prodDesc).style.display = "block";
    evt.currentTarget.className += " active";


}

//criando botão e ordenando 1° link do menu
var menu_single = function(){
$(".search-single-navigator").each(function() {
		var $this = $(this);
		if ($this.children().length == 0) $this.hide();
		if ($this.find("li").length > 8) {
			$this.find("li:gt(5)").hide().addClass("hide_items");
			$this.append("<a class='menu_show_all'>ver mais +</a><a class='menu_hidden_all hide'>ocultar</a>");
			$this.find(".menu_show_all").bind("click", function() {
				$this.find(".hide_items").fadeIn(250);
				jQuery(this).hide();
				$this.find(".menu_hidden_all").show();
			});
			$this.find(".menu_hidden_all").bind("click", function() {
				$this.find(".menu_show_all").show();
				$(this).hide();
				$this.find(".hide_items").fadeOut(250);
			});
		};
	});
};

//função que define desconto em prateleira de 10%
var vistaBoleto = function(){
	if($('.preco-novo').length > -1){
	        if($('.sku-notifyme').css('display')=="none"){
	            var economiaBoletoP = "";
	            var precoTotalP = "";
	            var ecomomiaBoletoP2 = "";
	            var precoTotalP =  $('.preco-a-vista .skuPrice').text();

	            precoTotalP = precoTotalP.split("R$ ");
	            precoTotalP = precoTotalP[1];
	            precoTotalP = precoTotalP.replace(".","");
	            precoTotalP = precoTotalP.replace(",",".");
	            precoTotalP = parseFloat(precoTotalP);

	            var economiaBoletoP = precoTotalP-(precoTotalP*0.9);
	            var total = precoTotalP-economiaBoletoP;

	            total = total.toFixed(2);
	            total = total.toString();
	            total  = total.replace(/[.]/g, ",");
	            total = total.replace(/\d(?=(?:\d{3})+(?:\D|$))/g, "$&.");
	            $('.preco-novo').addClass('desconto');
	            $('.preco-novo').html('<span>R$ '+ total +'</span><br /><p><strong>10%</strong> de <strong>desconto</strong> à vista<br /> no boleto bancário</p>'); 
	            $('.preco-novo').fadeIn();
	        };
	    };
};

//menu flutuante
var menuFlutuante = function(){
	
	$('#nav-icon1').click(function(){
	   $("menu.conteudo-flutuante").slideToggle();
	});
}


//inicio do ready
$('document').ready(function(){

	//Cria o botão voltar ao topo
	$('body').append("<a id='scrollToTop' href='#'>Voltar para o topo</a>");

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});

	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	}); 

	//Alterando e criando o orderby
	var orderBy = $('fieldset.orderBy').html();
	$('.ordenar').append(orderBy);

	//Efeito Menu
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

	//executa as alterações para o filtro de menus
	if($('.categoria-departamento').length > 0){
	    setTimeout(function(){
	    	verMaisCatFiltro();
	    	menu_single();
	    }, 700);
	};	

	menuFlutuante();

	if($("body.produtos-compra").length > 0){
		
		//alterando posição e o texto a ser apresentado
		var parcelado = $('em.valor-dividido.price-installments').html().replace("ou","Em até");
		$('em.valor-dividido.price-installments').html(parcelado);
		var parcelado2 = $('em.valor-dividido.price-installments').html().replace("de","de <br />");
		$('em.valor-dividido.price-installments').html(parcelado2);
		
		//colocando um preço novo com desconto
		vistaBoleto();

		var retiraPonto = $('em.valor-por.price-best-price').html().split(":");
	    $('em.valor-por.price-best-price').html(retiraPonto);
	    
	    if($('em.valor-de.price-list-price').is(':visible')){

	    	var retiraPonto2 = $('em.valor-de.price-list-price').html().split(":");
	    	$('em.valor-de.price-list-price').html(retiraPonto2);

	}

//**************************************************************************
		//definindo sempre ativo o calculo de frete
		shippingContainer();

			//carrossel da pagina de produto
			$('li.helperComplement').remove();				
	};

	largMobile = $('body').width();
	
	if(largMobile < 700){

		$('#nav-icon3').click(function(){
			$(this).toggleClass('open');
			$('.mobile-menu').fadeToggle();
			$('.mobile-menu > ul > li > a').removeAttr('href');
		});

	};
	
	if($(".categoria-departamento").length > 0 ){
		$(".abre-filtro").click(function(){
		  $(".search-multiple-navigator").slideToggle();
		});
	};

	// largMobile1 = $('body').width();
 //    if(largMobile1 > 1000){

    	if($('.home').length > 0){
		     // $('.banner-full').bxSlider({
		     //      adaptiveHeight: true,
		     //      mode: 'fade',
		     //      speed: 500,
		     //      StartSlide: 0,
		     //      infiniteLoop: true,
		     //      responsive: true,
		     //  }); 
		     $('li.helperComplement').remove();
		     $(".maisvendidos .prateleira-categoria ul").bxSlider({
		        slideWidth: 298,
		        minSlides: 1,
		        maxSlides: 4,
		        moveSlides: 2,
		        slideMargin: 1
		    });
		    $('li.helperComplement').remove(); 
		    $(".maisvisitados .prateleira-categoria ul").bxSlider({
		        slideWidth: 298,
		        minSlides: 1,
		        maxSlides: 4,
		        moveSlides: 2,
		        slideMargin: 1
		    });
		    
	 	// };
    
    };

		//função para o menu Mobile
		$('.mobile-menu li').on('click', function(){
            var $this = $(this);
			$this.siblings('li').find('.submenu').slideUp();
			$this.find('.submenu').slideToggle().css("text-decoration","none");   
		});

		$('.mobile-menu li').click(function(){
		   var $this = $(this);
		   $this.toggleClass('active');
		});


		//hover menu normal, borda amarelada
		$('.menu > ul > li:eq(0)').mouseover(function(){
		   $('.bor1').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor1').css('background','none');
		});
		$('.menu > ul > li:eq(1)').mouseover(function(){
		   $('.bor2').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor2').css('background','none');
		});
		$('.menu > ul > li:eq(2)').mouseover(function(){
		   $('.bor3').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor3').css('background','none');
		});
		$('.menu > ul > li:eq(3)').mouseover(function(){
		   $('.bor4').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor4').css('background','none');
		});
		$('.menu > ul > li:eq(4)').mouseover(function(){
		   $('.bor5').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor5').css('background','none');
		});
		$('.menu > ul > li:eq(5)').mouseover(function(){
		   $('.bor6').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor6').css('background','none');
		});
		$('.menu > ul > li:eq(6)').mouseover(function(){
		   $('.bor7').css('background','rgb(255, 225, 0)');
		});
		$('.menu ul li').mouseleave(function(){
		   $('.bor7').css('background','none');
		});
		$('.menu > ul > li:eq(7)').mouseover(function(){
		   $('.bor8').css('background','rgb(255, 225, 0)');
		});
		$('.menu > ul > li').mouseleave(function(){
		   $('.bor8').css('background','none');
		});


		largura = $(window).width();
		if(largura > 900){
		//oculta e mostra todo menu
		$(".submenu ul").each(function() {
		var $this = $(this);
		if ($this.children().length == 0) $this.hide();
		if ($this.find("li").length > 8) {
			$this.find("li:gt(6)").hide().addClass("hide_items");
			$this.append("<a class='menu_show_all'>ver mais +</a><a class='menu_hidden_all hide'>ocultar</a>");
			$this.find(".menu_show_all").bind("click", function() {
				$this.find(".hide_items").fadeIn(250);
				jQuery(this).hide();
				$this.find(".menu_hidden_all").show();
			});
			$this.find(".menu_hidden_all").bind("click", function() {
				$this.find(".menu_show_all").show();
				$(this).hide();
				$this.find(".hide_items").fadeOut(250);
			});
		};
		});
	};

	//minicart
	$('span.icominic').hover(function(){
	  $('.miniC, .v2-vtexsc-cart.vtexsc-cart').slideDown();
	});
	$('.v2-vtexsc-cart.vtexsc-cart').mouseout(function(){
	  $('.v2-vtexsc-cart.vtexsc-cart').slideUp();
	});
	$('a.bt-refinar.search-filter-button.even').insertAfter($('fieldset.refino.Itens.Inclusos').last());

	$(".multi-search-checkbox").click(function(){
	   if($(this).attr('checked') =="checked"){
	        $(this).parent().addClass("check")
	   }else{
	        $(this).parent().removeClass("check")
	   }
	});

	if($('.produtos-compra').length > 0){
		$('li.helperComplement').remove(); 
		    $(".vejaTambem .prateleira-compra ul").bxSlider({
		        slideWidth: 305,
		        minSlides: 1,
		        maxSlides: 4,
		        moveSlides: 1,
		        slideMargin: 1
		    });
	}

    $('em.valor-de.price-list-price').insertAfter(".especificacoes");

});//fim do ready

//alterando a posição dos menus no fieldset
$(window).load(function(){

	$('.search-single-navigator').insertBefore('fieldset.refino-marca');
	$('fieldset.refino:eq(2)').insertAfter('fieldset.refino:eq(0)');
	$('fieldset.refino:eq(1)').addClass('cor');
	$('a.search-navigator-tab.tab-refinar').insertAfter('.search-multiple-navigator fieldset:last-child');


	/* Inserindo quadrado no Filtro de cores - Filtro */
        // $('fieldset.refino.cor label input').each(function(){
        // 	var cor = $(this).attr('name');
        // 	$(this).prepend("<div class='quadrado-sidebar'></div>");     
        // 	$(this).before('<div class="quadrado-sidebar" style="background-image: url(/arquivos/cor_' + cor + '.jpg);"></div>')
        // });

        $('fieldset.refino.cor label:eq(1)').remove();
    /* Inserindo quadrado no Filtro de cores - Produto */
        // $('.item-dimension-Cor span input').each(function(){
        // 	var cor = $(this).val();
        // 	$(this).prepend("<div class='quadrado-sidebar'></div>");     
        // 	$(this).before('<div class="quadrado-sidebar" style="background-image: url(/arquivos/cor_' + cor + '.jpg);"></div>')
        // });

        //nome do controle veja tambem
		$('.produtos-compra .prateleira-compra h2').text("Veja Também");
		$('.compreJunto h4').text('Compre Junto');

   		if($('.produtos-compra').length > 0){
	   		//Alterando valor do frete
			var labelFrete = $('label.prefixo').html().replace('Calcular o valor do frete e verificar disponibilidade:','Digite seu CEP para calcular o frete e o prazo de entrega');
	   		$('label.prefixo').html(labelFrete);
   		};
	 	
	 	$('.amount-items-in-cart .amount-items-em:eq(0)').insertAfter('span.icominic');
	 	$('.amount-items-in-cart .amount-items-em:eq(0)').insertAfter('.minicart-flutuante');

	 	$(".prateleira-categoria[id*=ResultItems]").QD_infinityScroll();

	      if($('.institucional').length > 0){
	        
	        $('h2.accordion').click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
			});

	      };

});

$(window).scroll(function(event) {
	largura = $(window).width();
    // if(largura > 1160){

    	if ($(this).scrollTop() > 160) {
			$('section.buscaflutuante').slideDown('defalt');
			//Ativa o Menu Flutuante

	    } else {
			$('section.buscaflutuante').slideUp('defalt');
	    };  

    // }

});

$(document).ajaxStop(function(){
	
	//verifica qual á página e exibe o preço com desconto formatado
	if($("body.produtos-compra").length > 0){
		vistaBoleto();
	}
	
	//verifica se existe a disponibilidade do produto/ se não esconde o preço formatado
	if($('.notifyme.sku-notifyme').is(':visible')){
	    $(".preco-novo.desconto").hide();
	    
	    //altera o valor do notifyme
	    $('fieldset.sku-notifyme-form.notifyme-form p').text('Infelizmente não temos este produto em estoque');
	    $('fieldset.sku-notifyme-form.notifyme-form p').append('<h3 class="aviso">E se avisarmos você quando chegar este produto?</h3>');
	    $('h3.notifymetitle.notifyme-title').text('Desculpe-nos');
	}

});


var mini_Cart = function() {
	$('th.cartSkuQuantity').html('Qtd');
	$('.cartFooter a.cartCheckout').html('Finalizar pedido');
	var strQtd = $('.cart-info:eq(0) .amount-items-em').text();
	var numQtd = parseInt(strQtd);
	var pluQtd = 'itens';
	if (numQtd == 1) {
		pluQtd = 'item'
	}

	if (numQtd == 0) {
		$('.vtexsc-cart').html('<p class="mini-cart-vazio">Você ainda não adicionou produtos em seu carrinho</p>');
	}
	$('.miniC .cartCheckout').attr('href','/checkout/#/cart');
	$('.gt-categoria li.mcart a span').html(strQtd+' '+pluQtd);
}

$(document).ajaxStop(function(){
	mini_Cart();

});	

//RESUME-CART É O NOME DA DIV QUE VOCÊ VAI CRIAR LA NO SEU TEMPLATE, ONDE VOCÊ QUER QUE APAREÇA SEU CARRINHO( O NOME DESSA CLASSE PODE SER ALTERADA)
$(document).ready(function(){
if ($('.miniC').length) {
		$('.miniC').minicart({ showMinicart: true, showTotalizers: true });
	}

});	