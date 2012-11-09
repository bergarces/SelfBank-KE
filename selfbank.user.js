// ==UserScript==
// @name         SelfBank Keyboard Enabler
// @namespace    SelfBankKeyboard
// @include      *
// @author       Bernardo Garces
// @description  This userscript enables the password textbox on the Self Bank login page.
// ==/UserScript==

if (window.location.href == 'https://www.selfbank.es/login.phtml?')
{
	var old_element = document.getElementById("inputPassword");
	var new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
	document.getElementById('inputPassword').removeAttribute('readonly');
}