function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
function createCookie(name,value,days) {
	       name = typeof(name) != 'undefined' ? name : "";
	       value = typeof(value) != 'undefined' ? value : "";
		       
	       if (days) {
		       var date = new Date();
		       date.setTime(date.getTime()+(days*24*60*60*1000));
		       var expires = "; expires="+date.toGMTString();
	       }
	       else var expires = "";
	       document.cookie = name + "=" + value + expires + "; path=/;";
      
	}


function readCookie(name) {
       var nameEQ = name + "=";
       var ca = document.cookie.split(';');
       for(var i=0;i < ca.length;i++) {
               var c = ca[i];
               while (c.charAt(0)==' ') c = c.substring(1,c.length);
               if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
       }
       return null;
}


jQuery(document).ready(function($){
	ph_num = "+91 20 3015 7491";
	mob_num = "+912030157491"
	
	if(getParameterByName("utm_source").indexOf("google") > -1){
			ph_num = "+912030157454"
			cont_num = ""
			createCookie('google',true,30); 
		} 
	if(readCookie('google') != null){
		ph_num = "+912030157454"
		}
	
	if(getParameterByName("utm_source").indexOf("facebook") > -1){
			ph_num = "+912030157486"
			createCookie('facebook',true,30); 
			}  
        if(readCookie('facebook') != null){
		ph_num = "+912030157486"
				}
				
	if(getParameterByName("utm_source").indexOf("taboola") > -1){
			ph_num = "+912030157486"
			cont_num = "+912030157486"
			createCookie('taboola',true,30); 
		} 
	if(readCookie('taboola') != null){
		ph_num = "+912030157486"
		}
	
	
	jQuery(".phonenumber, .mob_number").html(ph_num);
 jQuery(".mob_number").attr('href','tel:'+mob_num);
	
	
});