function ContactCreate(storeName, dataEntity, co_client)
{

	var co_description = $('#co_description').val();

	var jsonCO = 	{
					"client": co_client.replace("CL-",""),
					"description" : co_description
					};

	var urlCO = "http://api.vtexcrm.com.br/" + storeName + "/dataentities/" + dataEntity + "/documents/";

	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		data: JSON.stringify(jsonCO),
		type: 'PATCH',
		url: urlCO,
		success: function (data) {
		  console.log(data);
		  ResetMessages()
		  $("#co_message_success").show();
		  $('.co_form .line').hide();
		},
		error: function (data) {
		  console.log(data);
		  ResetMessages()
		  $("#co_message_error").show();
		}
	});
}

function ContactCreateByEmail(storeName, dataEntity, cl_email)
{
	var cl_url = "http://api.vtexcrm.com.br/" + storeName + "/dataentities/CL/search/?email=" + cl_email + "&_fields=id";
	
	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		type: 'GET',
		url: cl_url,
		success: function(data, textStatus, xhr){
			console.log(data);
			if(xhr.status == "200" || xhr.status == "201"){
				ContactCreate(storeName, dataEntity, data[0].id);
			}else{
				ResetMessages()
				$("#co_message_error").show();
			}
		},
		error: function(data){
			console.log(data);
			ResetMessages()
			$("#co_message_error").show();
		}
	});
}

function ClientCreate()
{
	var storeName		= $("#master_data_store_name").val();
	var dataEntity		= $("#master_data_data_entity").val();
	var co_description 	= $('#co_description').val();

	var cl_first_name 	= $("#cl_first_name").val();
	var cl_last_name 	= $("#cl_last_name").val();
	var cl_email 		= $("#cl_email").val();
	var cl_home_phone 	= $("#cl_home_phone").val();
	var cl_phone 		= $("#cl_phone").val();
	var co_file         = $("#arquivos").val();
	
	var cl_json = 	{
					"firstName": cl_first_name,
					"lastName": cl_last_name,
					"email": cl_email,
					"homePhone": cl_home_phone,
					"phone": cl_phone,
					"file": co_file,
					"description" : co_description
					};

	var cl_url = "http://api.vtexcrm.com.br/" + storeName + "/dataentities/CL/documents/";

	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		data: JSON.stringify(cl_json),
		type: 'PATCH',
		url: cl_url,
		success: function(data, textStatus, xhr){
			console.log(data);
			if(xhr.status == "200" || xhr.status == "201"){
				ContactCreate(storeName, dataEntity, data.Id);
			}else if(xhr.status == "304"){
				ContactCreateByEmail(storeName, dataEntity, cl_email);
			}else{
				ResetMessages()
				$("#co_message_error").show();
			}
		},
		error: function(data){
			console.log(data);
			ResetMessages()
			$("#co_message_error").show();
		}
	});
}

//enviar arquivos tipo file
var files = $('#arquivos').val();
var fileData = new FormData();
 $.each(files, function(key, value){ fileData.append(key, value) });

  $.ajax({
         url: '//api.vtexcrm.com.br/' + storeName + '/dataentities/CO/documents/arquivos/file/attachments',
         type: 'POST',
         data: fileData,
         processData: false,
         contentType: false,
         enctype: 'multipart/form-data',
         beforeSend: function (request){
             request.setRequestHeader("Accept", "application/vnd.vtex.ds.v10+json");
             request.setRequestHeader("X-VTEX-API-AppKey", "vtexappkey-tiobob-FEJOUM");
             request.setRequestHeader("X-VTEX-API-AppToken", "KGAEUODOMZGLYHNWORDHZKBYAMWFSVWKZXOBOSNSRYSURBDLDJYNEPPZFCDHSYVQDVMATMIWELQARGGZILBJXIGJIOVLOFATCBRVPDRRACITZOHYWEYGWMSUPCSFQWHY");
         }
     })
     .done(function() {
     console.log('File uploaded, thank you...');
     });
     
//enviar arquivos tipo file
function ResetMessages()
{
	$("#co_message_loading").hide();
	$("#co_message_validate").hide();
	$("#co_message_success").hide();
	$("#co_message_error").hide();
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function FormValidate()
{
	var isFormValidate = true;

	if($("#cl_first_name").val() == ""){
		isFormValidate = false;
		$("#cl_first_name").focus();
	}
	
	if((isFormValidate) && ($("#cl_email").val() == "")){
		isFormValidate = false;
		$("#cl_email").focus();
	}
	if((isFormValidate) && (!IsEmail($("#cl_email").val()))){
		isFormValidate = false;
		$("#cl_email").val("");
		$("#cl_email").focus();
	}

	if((isFormValidate) && ($("#co_type").val() == "")){
		isFormValidate = false;
		$("#co_type").focus();
	}
	
	if((isFormValidate) && ($("#co_description").val() == "")){
		isFormValidate = false;
		$("#co_description").focus();
	}
	
	if(isFormValidate){
		ResetMessages()
		$("#co_message_loading").show();
		$('html, body').animate({scrollTop: 0}, 1000);
		ClientCreate();

	}else{
		ResetMessages()
		$("#co_message_validate").show();
	}

	return false;
}

function FormCreate(storeName, dataEntity, htmlElementId, messageLoading, messageValidation, messageSuccess, messageError){
	var htmlContent = '';
	
	htmlContent += '<div id="co_message_loading" class="alert alert-info" style="display:none;">' + messageLoading + '</div>';
	htmlContent += '<div id="co_message_validate" class="alert alert-warning" style="display:none;">' + messageValidation + '</div>';
	htmlContent += '<div id="co_message_success" class="alert alert-success" style="display:none;">' + messageSuccess + '</div>';
	htmlContent += '<div id="co_message_error" class="alert alert-danger" style="display:none;">' + messageError + '</div>';
	htmlContent += '<form id="co_form" action="javascript:FormValidate();" method="post">';
	htmlContent += '<fieldset>';
	htmlContent += '<input type="hidden" id="master_data_store_name" name="master_data_store_name" value="' + storeName + '" />';
	htmlContent += '<input type="hidden" id="master_data_data_entity" name="master_data_data_entity" value="' + dataEntity + '" />';
	
	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';
	htmlContent += '<label for="cl_first_name">Nome *</label>';
	htmlContent += '<input type="text" id="cl_first_name" name="cl_first_name" placeholder="Nome" require="require">';
	htmlContent += '</span>';
	htmlContent += '</div>';

	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';
	htmlContent += '<label for="cl_last_name">Sobrenome</label>';
	htmlContent += '<input type="text" id="cl_last_name" name="cl_last_name" placeholder="Sobrenome">';
	htmlContent += '</span>';	
	htmlContent += '</div>';

	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';
	htmlContent += '<label for="cl_email">E-mail *</label>';
	htmlContent += '<input type="text" id="cl_email" name="cl_email" placeholder="E-mail" require="require">';
	htmlContent += '</span>';
	htmlContent += '</div>';

	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100">';
	htmlContent += '<label for="cl_home_phone">Telefone</label>';
	htmlContent += '<input type="text" id="cl_home_phone" name="cl_home_phone" placeholder="Telefone">';
	htmlContent += '</span>';
	htmlContent += '<span class="col100">';
	htmlContent += '<label for="cl_phone">Celular</label>';
	htmlContent += '<input type="text" id="cl_phone" name="cl_phone" placeholder="Celular">';
	htmlContent += '</span>';	
	htmlContent += '</div>';

	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';
	htmlContent += '<h4>Sua Mensagem</h4>';
	htmlContent += '<label for="co_description">Mensagem *</label>';
	htmlContent += '<textarea name="co_description" id="co_description" require="require"></textarea>';
	htmlContent += '</span>';
	htmlContent += '</div>';
	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';

	htmlContent += '</span>';
	htmlContent += '</div>';
	htmlContent += '<div class="line enviar"><span><input id="commit" name="commit" type="submit" value="Enviar"></span></div>';
	htmlContent += '</fieldset>';
	htmlContent += '</form>';
	
	$("#"+htmlElementId).html(htmlContent);
}