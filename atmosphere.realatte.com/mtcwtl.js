var MauticJS=MauticJS||{};MauticJS.serialize=function(obj){if('string'==typeof obj){return obj;}
return Object.keys(obj).map(function(key){return encodeURIComponent(key)+'='+encodeURIComponent(obj[key]);}).join('&');};MauticJS.documentReady=function(f){/in/.test(document.readyState)?setTimeout('MauticJS.documentReady('+f+')',9):f();};MauticJS.domReady=function(f){/load/.test(document.readyState)?setTimeout('MauticJS.domReady('+f+')',9):f();};MauticJS.iterateCollection=function(collection){return function(f){for(var i=0;collection[i];i++){f(collection[i],i);}};};MauticJS.log=function(){var log={};log.history=log.history||[];log.history.push(arguments);if(window.console){console.log(Array.prototype.slice.call(arguments));}};MauticJS.createCORSRequest=function(method,url){var xhr=new XMLHttpRequest();method=method.toUpperCase();if("withCredentials"in xhr){xhr.open(method,url,true);}else if(typeof XDomainRequest!="undefined"){xhr=new XDomainRequest();xhr.open(method,url);}
return xhr;};MauticJS.makeCORSRequest=function(method,url,data,callbackSuccess,callbackError){var xhr=MauticJS.createCORSRequest(method,url);var response;callbackSuccess=callbackSuccess||function(response,xhr){MauticJS.log(response);};callbackError=callbackError||function(response,xhr){MauticJS.log(response);};if(!xhr){MauticJS.log('MauticJS.debug: Could not create an XMLHttpRequest instance.');return false;}
xhr.onload=function(){if(xhr.readyState===XMLHttpRequest.DONE){response=MauticJS.parseTextToJSON(xhr.responseText);if(xhr.status===200){callbackSuccess(response,xhr);}else{callbackError(response,xhr);}}};if(method.toUpperCase()==='POST'){xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');xhr.withCredentials=true;xhr.send(MauticJS.serialize(data));};MauticJS.parseTextToJSON=function(maybeJSON){var response;try{response=JSON.parse(maybeJSON);}catch(error){response=maybeJSON;}
return response;};
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function(factory){var registeredInModuleLoader=false;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true;}
if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true;}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return;}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);return(document.cookie=[key,'=',value,attributes.expires?'; expires='+attributes.expires.toUTCString():'',attributes.path?'; path='+attributes.path:'',attributes.domain?'; domain='+attributes.domain:'',attributes.secure?'; secure':''].join(''));}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.set=api;api.get=function(key){return api.call(api,key);};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));if(!Object.keys){Object.keys=(function(){'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!({toString:null}).propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!=='function'&&(typeof obj!=='object'||obj===null)){throw new TypeError('Object.keys called on non-object');}
var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop);}}
if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i]);}}}
return result;};}());}
var MTI=MTI||{};MTI.isSet=function isSet(val){if((val!=undefined)&&(val!=null)){return true;}
return false;};MTI.urlParams=function(){var params={};window.location.search.substring(1).split('&').forEach(function(pair){pair=pair.split('=');if(pair[1]!==undefined){var key=decodeURIComponent(pair[0]),val=decodeURIComponent(pair[1]),val=val?val.replace(/\++/g,' ').trim():'';if(key.length===0){return;}
if(params[key]===undefined){params[key]=val;}
else{if("function"!==typeof params[key].push){params[key]=[params[key]];}
params[key].push(val);}}});return params;};MTI.canonicalHostname=function(){var hostname=window.location.hostname;try{var extensions=['.co.in','.co.uk','.net.nz','.net','.com','.org','.co','.in','.uk'];var extension='';for(var i=0;i<extensions.length;i++){if(hostname.endsWith(extensions[i])){extension=extensions[i];break;}}
if(extension.trim().length!=0){hostname=hostname.replace(extension,'');var hostnameComponents=hostname.split('\.');hostname=hostnameComponents[hostnameComponents.length-1]+extension;}}
catch(e){console.log('Error while calculating the canonical hostname: '+e.message);}
return hostname;};MTI.urlParam=function(name){name=name.replace(/[\[]/,'\[').replace(/[\]]/,'\]');var regex=new RegExp('[\?&]'+name+'=([^&#]*)');var results=regex.exec(location.search);return results===null?'':decodeURIComponent(results[1].replace(/\+/g,' '));};MTI.webToLead=function(data,success,failure){var email=MTI.isSet(Cookies.get('mtc_email'))?Cookies.get('mtc_email'):'';var mobile=MTI.isSet(Cookies.get('mtc_mobile'))?Cookies.get('mtc_mobile'):'';data['mtc_email']=email;data['mtc_mobile']=mobile;var allCookies=Cookies.get();Object.keys(allCookies).forEach(function(cookieName){if(cookieName.startsWith('cstm_')||cookieName.startsWith('p_cstm_')){data[cookieName]=allCookies[cookieName];}});MauticJS.makeCORSRequest('POST','http://atmosphere.realatte.com/contacts/webtolead',data,function(response,xhr){Cookies.set('mtc_id',response.contact.id);Cookies.set('mtc_email',data.email);Cookies.set('mtc_mobile',data.mobile);if(success!=undefined){success(response);}},function(response,xhr){console.log(response);if(failure!=undefined){failure(response);}});};