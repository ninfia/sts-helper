// ==UserScript==
// @name     		STS Helper - @ninfia fork
// @namespace		iFantz7E.StsHelper
// @version			1.94a
// @description		"In Steam Translation Server, add many features to make translate easier." - 7-elephant
// @match      		*://translation.steampowered.com/*
// @icon      		http://translation.steampowered.com/public/favicon.ico
// @run-at			document-start
// @grant 			GM_getValue
// @grant 			GM_setValue
// @grant       	GM_addStyle
// @copyright		2014, 7-elephant
// @copyright		2017, ninfy
// ==/UserScript==

// http://userscripts.org/scripts/show/325610
// https://greasyfork.org/scripts/2250-sts-helper/

GM_addStyle(
	"  #logout { position: fixed; z-index: 1001; right: 12px; top: 10px; line-height: 24px; text-align: right; } "
	+ "input[type='button'], input[type='submit'] { cursor: pointer; padding: 1px 9px; } "
	+ "input[type='button']:disabled { cursor: default; color: #777; } "
	+ "#suggestionmain { overflow-x: hidden; } "
	+ "#suggestionmain > div:nth-child(4) > form:nth-child(2) > div:nth-child(1) "
	+ " { text-align: left; } "
	+ ".lbAction > div > input[value^='SUBMIT'] "
	+ " { width: 750px; height: 30px; border-color: #777 #333 #777 #777; } "
	+ ".lbAction > div > input[value^='RESUBMIT'] "
	+ " { width: 641px; height: 30px; border-color: #777 #333 #777 #777; } "
	+ ".lbAction > div > input[value='CANCEL'] "
	+ " { width: 100px; height: 30px; margin-right: 5px; } "
	+ "form.lbAction:nth-child(1) > div:nth-child(2) > input:nth-child(1) "
	+ " { width: 90%; margin-top: 5px; } "
	+ ".suggestion .lbAction textarea"
	+ " { max-width: 700px !important; min-height: 50px; } "
	+ ".progress td { vertical-align: top; } "
	+ "div#suggestions_nav { z-index: 3; position: absolute; width: 430px; left: 558px; top: 4px; text-align: right; line-height: 24px; } "
	+ "#suggestionmain .smallcopy { width: 855px; min-height: 70px; max-height: 70px; } "
	+ "#suggestionmain .progress { margin-top: -12px; } "
	+ "#leftAreaContainer > table > tbody:nth-child(1) > tr > td:nth-child(1) { vertical-align: top; } "
	+ "#leftAreaContainer > table, #leftAreaContainer > table th, #leftAreaContainer > table td "
	+ " { border: 1px solid #333; border-collapse: collapse; padding: 4px; } "
	+ "#suggestions_box { margin-top: 1px !important; } "
	+ "#suggestions_iframe { min-height: 100px !important; } "
	+ "#keylist td:nth-child(1) > div { background-image: none !important; min-height: 43px; } "
	+ "#keylist tr:nth-child(2n) > td:nth-child(1) > div { background-color: #060606 !important; } "
	+ "#keylist tr:nth-child(2n) > td:nth-child(1) > div:hover { background-color: #0D0D0D !important; } "
	+ "#keylist td:nth-child(1) > div:hover "
	+ " { background-repeat: no-repeat; background-position: center; background-color: #0D0D0D !important; "
	+ "   background-image: url('./public/images/row_over.gif') !important; "
	+ " } "
	+ ".progress h1 { display: inline-block; width: 484px; } "
	+ "div#suggestions_box iframe { background-color: #111 !important; } "
	+ ".suggestions_list { border-right: 0px none !important; } "
	+ ".suggestion { resize: both; overflow: hidden; border-right: 1px solid #505050; max-width: 953px; min-width: 200px; min-height: 50px; } "
	+ ".suggestion_signature { font-family: Verdana; } "
	+ ".suggestion_signature input[value~='APPROVE'], .suggestion_signature input[value~='Next'] { color: #A4B23C } "
	+ ".suggestion_signature input[value~='DECLINE'], .suggestion_signature input[value~='Next']:nth-child(5) { color: #F22 } "
	+ ".suggestion_signature input[disabled='disabled'] { color: #777 !important; } "
	+ ".lbAction input[value~='COMMENT'] { vertical-align: top; margin-top: 1px; height: 52px; } "
	+ ".lbAction input[value~='DISCUSS'] { vertical-align: top; margin-top: 1px; height: 21px; top: 0px !important; } "
	+ "#votes_container a[title='not translated'] { background-color: #333; } "
	+ "#suggestion_value_new { min-height: 84px; max-width: 960px; min-width: 200px; } "
	+ "#hours > table input[name*='[remarks]'] { width: 460px; } "
	+ "#suggestions_box_outer { overflow: hidden !important; } "
	+ "#add_to_discussion { height: 19px; min-height: 19px; } "
	+ ".gradienttable td > div { top: 1px !important; } "
	+ ".copysmall > td:nth-child(1) "
	+ " { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; "
	+ "   display: inline-block; width: 430px; direction: ltr; } "
	+ "div:hover > table > tbody > tr.copysmall > td:nth-child(1) "
	+ " { direction: rtl; } "
	+ ".stsh_btn { width: 90px; } "
	+ ".stsh_btn_med { min-width: 112px; } "
	+ ".stsh_btn_long { min-width: 136px; } "
	+ ".stsh_btn_short { min-width: 66px; } "
	+ ".stsh_btn_right { position: relative; float: right; margin-left: 4px; } "
	+ ".stsh_suggestion_header { color: #A4B23C; } "
	+ ".stsh_suggestion_comment:before { background-color: #CF8B37 !important; } "
	+ ".stsh_suggestion_pending:before { background-color: #FFF !important; } "
	+ ".stsh_suggestion_approved:before { background-color: #A4B23C !important; } "
	+ ".stsh_suggestion_declined:before { background-color: red !important; } "
	+ ".stsh_suggestion_applied:before { background-color: #2EBCEB !important; } "
	+ ".stsh_suggestion_removed:before { background-color: #555 !important; } "
	+ ".stsh_suggestion { list-style: none; } "
	+ ".stsh_suggestion:before "
	+ " { content: ''; display: inline-block; position: relative; height: 6px; width: 6px; "
	+ "   border-radius: 3px; background-clip: padding-box; margin-right: -6px; top: -1px; left: -12px; background-color: green; }"
	+ "#stsh_frame { text-align: center; } "
	+ ".stsh_blue { color: #2ebceb; } "
	+ ".stsh_green { color: #a4b23c; } "
	+ ".stsh_red { color: #F00; } "
	+ ".stsh_white { color: #fff; } "
	+ ".stsh_grey { color: #777; } "
	+ ".stsh_orange { color: #CF8B37; } "
	+ ".stsh_pink { color: pink; } "
	+ "#stsh_showing { color: #CCDAD6; position: fixed; z-index: 1001; right: 12px; bottom: 12px; text-align: right; line-height: 14px;} "
	+ "#stsh_showing_current { color: #CCDAD6; position: fixed; z-index: 1001; right: 12px; bottom: 28px; text-align: right; line-height: 14px;} "
	+ ".stsh_showing_counter { display: inline-block; min-width: 60px; text-align: center; } "
	+ ".stsh_showing_header { color: #CCDAD6; display: inline-block; width: 135px; text-align: center; padding-top: 10px; } "
	+ ".stsh_showing_group { position: fixed; z-index: 3; right: 10px; top: 74px; line-height: 24px; text-align: right; } "
	+ ".stsh_home_header { color: #CCDAD6; display: inline-block; padding-top: 10px; } "
	+ ".stsh_home_group { position: fixed; z-index: 3; right: 0px; top: 74px; line-height: 24px; text-align: center; width: 164px; } "
	+ ".stsh_scroll_header { color: #CCDAD6; display: inline-block; width: 130px; text-align: center; padding-top: 10px; } "
	+ "#stsh_specialEvent { position: absolute; z-index: 2; right: 164px; top: 13px; } "
	+ ".stsh_snapshot { position: absolute; top: 320px; left: 790px; width: 140px; text-align: center; color: #FFF; } "
	+ ".stsh_text_comment_header { vertical-align: top; } "
	+ ".stsh_text_comment { vertical-align: top; display: inline-block; max-width: 850px; } "
	+ "#stsh_autoApprove { vertical-align: -2px; margin-left: 15px; margin-right: 1px; } "
	+ "#stsh_autoDecline { vertical-align: -2px; margin-left: 15px; margin-right: 1px; } "
	+ ".stsh_unselectable { -webkit-user-select: none !important; -moz-user-select: none !important; user-select: none !important; } "
	+ ".stsh_a_button "
	+ " { background-color: #1D1D1D; font-family: tahoma,arial,helvetica,trebuchet ms,sans-serif; "
	+ "   color: #E1E1E1; font-size: 13px; border: 1px solid #777; padding: 1px 9px; } "
	+ ".stsh_a_button:link, .stsh_a_button:hover, .stsh_a_button:active, .stsh_a_button:visited { color: #E1E1E1; text-decoration: none; } "
	+ ".stsh_a_button.stsh_btn { display: inline-block; padding: 0px; height: 19px; line-height: 19px; width: 88px; } "
	+ ".stsh_a_button.stsh_btn_med { display: inline-block; padding: 0px; height: 19px; line-height: 19px; min-width: 110px; } "
	+ ".stsh_a_button.stsh_btn_long { display: inline-block; padding: 0px; height: 19px; line-height: 19px; min-width: 134px; } "
	+ ".stsh_lineCounter_outer { position: relative; } "
	+ ".stsh_lineCounter "
	+ " { position: absolute; width: 30px; left: -35px; top: -28px; line-height: 28px; text-align: right; "
	+ "   color: #ACACAC; font-size: 9px; text-shadow: 0px 0px 3px #111; } "
	+ ".stsh_glossary_term { min-width: 50px; display: inline-block; } "
	+ ".stsh_glossary_header, .stsh_glossary_header td { color: #DDD; } "
	+ ".stsh_glossary_header *, .stsh_glossary_header td * { color: #858585; } "
	+ ".stsh_glossary_header > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4) { width: 10px !important; } "
	+ ".stsh_time_convert { cursor: pointer; } "
	+ ".stsh_comment_img "
	+ " { display: block; cursor: zoom-in; cursor: -webkit-zoom-in; cursor: -moz-zoom-in; "
	+ "   max-width: 400px; margin-top: 5px; margin-bottom: 20px; } "
	+ ".stsh_hours_curDate { color: #A4B23C; } "
	+ ".stsh_hours_curDate input { border-color: #A4B23C; } "
	+ ".stsh_submit_suggestion_right { height: 30px; width: 214px; margin-right: 5px; border-color: #777 #777 #777 #333; } "
	+ ".stsh_truncate "
	+ " { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; "
	+ "   display: inline-block; vertical-align: bottom; } "
	+ ".stsh_token_name { max-width: 500px; } "
	+ ".stsh_token_share { max-width: 600px; font-size: 0.8em; direction: rtl; } "
	+ ".stsh_token_share:hover { direction: ltr; } "
	+ ".stsh_pad { padding-left: 2px; padding-right: 2px; } "
	+ ".stsh_hidden { display: none; } "
	+ "table.gradienttable .stsh_curLang td, table.gradienttable .stsh_dst_curLang td, table.gradienttable .stsh_dst_curLang th "
	+ " { background: transparent linear-gradient(to bottom, #171717 0%, rgba(71, 77, 26, 0.66) 40%, #121212 100%) "
	+ "    repeat scroll 0% 0% !important; } "
	+ ".stsh_delta #suggestion_value_new { border-color: #1B6A85; } "
	+ ".stsh_delta .stsh_text_submit { color: #2EBCEB; border-color: #1B6A85 #083F52 #1B6A85 #1B6A85 !important; } "
	+ ".stsh_delta .stsh_submit_suggestion_right { color: #2EBCEB; border-color: #1B6A85 #1B6A85 #1B6A85 #083F52 !important; } "
	+ ".stsh_delta .suggestions_list, .stsh_delta .suggestion { border-color: #083F52 !important; } "
	+ ".stsh_usThem_curLang { background-color: #2F3317; color: #E1E1E1; } "
	+ ".stsh_dst_curLang, table.gradienttable .stsh_dst_curLang th, .stsh_dst_curLang a { color: #2ebceb; } "
	+ ".stsh_text_trn .lbAction textarea { max-width: 450px !important; } "
	+ ".stsh_text_trn .lbAction input[value~='COMMENT'] { height: auto; } "
	+ ".stsh_text_trn .stsh_text_submit { width: 270px !important; } "
	+ ".stsh_text_trn .stsh_submit_suggestion_right { width: 184px !important; margin-right: 32px !important; } "
	+ ".stsh_text_org, stsh_text_trn { min-height: 21px; display: block; } "
	+ ".stsh_autoLoginOption { vertical-align: top; line-height: 69px; padding-left: 30px; } "
	+ "#stsh_autoLogin { margin-right: 0px; } "
	
);

function attachOnLoad(callback)
{
	window.addEventListener("load", function (e)
	{
		callback();
	});
}

function attachOnReady(callback)
{
	document.addEventListener("DOMContentLoaded", function (e)
	{
		callback();
	});
}

function insertBeforeElement(newNode, referenceNode)
{
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function insertAfterElement(newNode, referenceNode)
{
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addKeyCtrl(ele, input, keyCode, keyName)
{
	if (ele != null && input != null)
	{
		if (keyName != null && keyName != "")
		{
			if (input.tagName == "INPUT")
			{
				input.value += " (Ctrl+" + keyName + ")";
			}
		}
		
		ele.addEventListener("keydown", function (e)
		{
			if (e.ctrlKey && !e.shiftKey && !e.altKey)
			{
				var isSameKey = false;
				if (Number.isInteger(keyCode))
				{
					isSameKey = (e.keyCode == keyCode);
				}
				else
				{
					isSameKey = (e.code != undefined && e.code == keyCode)
				}
				
				if (isSameKey)
				{
					e.preventDefault();
					input.focus();
					input.click();
					return false;
				}
			}
		}, true);
	}
}

function addKeyCtrlShift(ele, input, keyCode, keyName)
{
	if (ele != null && input != null)
	{
		if (keyName != null && keyName != "")
		{
			if (input.tagName == "INPUT")
			{
				input.value += " (Ctrl+Shift+" + keyName + ")";
			}
		}
		
		ele.addEventListener("keydown", function (e)
		{
			if (e.ctrlKey && e.shiftKey && !e.altKey)
			{
				var isSameKey = false;
				if (Number.isInteger(keyCode))
				{
					isSameKey = (e.keyCode == keyCode);
				}
				else
				{
					isSameKey = (e.code != undefined && e.code == keyCode)
				}

				if (isSameKey)
				{
					e.preventDefault();
					input.focus();
					input.click();
					return false;
				}
			}
		}, true);
	}
}

function addKeyAlt(ele, input, keyCode, keyName)
{
	if (ele != null && input != null)
	{
		if (keyName != null && keyName != "")
		{
			if (input.tagName == "INPUT")
			{
				input.value += " (Alt+" + keyName + ")";
			}
		}

		ele.addEventListener("keydown", function (e)
		{
			if (!e.ctrlKey && !e.shiftKey && e.altKey)
			{
				var isSameKey = false;
				if (Number.isInteger(keyCode))
				{
					isSameKey = (e.keyCode == keyCode);
				}
				else
				{
					isSameKey = (e.code != undefined && e.code == keyCode)
				}
				
				if (isSameKey)
				{
					e.preventDefault();
					input.focus();
					input.click();
					return false;
				}
			}
		}, true);
	}
}

function addKeyCtrlEnter(form, input)
{
	addKeyCtrl(form, input, 13, "Enter")
}

function addKeyCtrlShiftEnter(form, input)
{
	addKeyCtrlShift(form, input, 13, "Enter")
}

function disableAfterClick(ele)
{
	ele.addEventListener("click", function (e)
	{
		var ele = e.target;
		var tagName = ele.tagName;
		if (tagName == "INPUT")
		{
			// don't change color after disable
			var styleCp = window.getComputedStyle(ele);
			if (styleCp)
			{
				ele.style.setProperty("color", styleCp.color, "important");
			}
			ele.disabled = true;
		}
		else if (tagName == "IMG")
		{
			ele.removeAttribute("onclick");
		}
	}, true);
}

function removeAllEventListeners(element)
{
	if (element != null)
	{
		var clone = element.cloneNode(false);
		while (element.firstChild)
		{
			clone.appendChild(element.lastChild);
		}
		element.parentNode.replaceChild(clone, element);
	}
}

function scrollToId(id, offset)
{
	scrollToElement("#" + id, offset);
}

function scrollToElement(selector, offset)
{
	if (typeof offset === "undefined")
	{
		offset = -20;
	}
	
	var ele = document.querySelector(selector);
	if (ele)
	{
		ele.scrollIntoView(true);
		window.scrollBy(0, offset);
	}
}

function resizeSuggestionBox()
{
	var script = document.createElement('script');
	script.innerHTML = " \
var stsh_showSuggestionsBox_start = new Date(); \
var stsh_showSuggestionsBox_itv = setIntervalCustom(function() \
{ \
	var stsh_showSuggestionsBox_isEnd = false; \
	var stsh_showSuggestionsBox_cur = new Date(); \
	if (typeof showSuggestionsBox != 'undefined') \
	{ \
		showSuggestionsBox = function(url) \
		{ \
			/* Edit from STS */ \
			g_suggestionsBoxIsOpen = true; \
			$('suggestions_box_outer').appear( \
			{ \
				duration : 0.1 \
			} \
			); \
			$('suggestions_iframe').setAttribute('src', url); \
			if (!Prototype.Browser.IE) \
			{ \
				$('suggestions_iframe').focus(); \
			} \
			$('suggestions_iframe').style.height = (document.viewport.getHeight() * 0.99) + 'px'; \
			return false; \
		}; \
		stsh_showSuggestionsBox_isEnd = true; \
	} \
	if (stsh_showSuggestionsBox_isEnd || stsh_showSuggestionsBox_cur - stsh_showSuggestionsBox_start > 10000) \
	{ \
		clearInterval(stsh_showSuggestionsBox_itv); \
	} \
}, 300); \
";
	
	document.head.appendChild(script);

	window.addEventListener("resize", function()
	{
		var iframe = document.querySelector("#suggestions_iframe");
		if (iframe)
		{
			iframe.style.height = (window.innerHeight * 0.99) + "px";
		}
	});
}

function getQueryByName(name, url)
{
	if (url == null)
	{
		url = location == null ? "" : location.search;
	}
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(url);
	var retVal = "";
	if (results != null)
	{
		retVal = results[1].replace(/\+/g, " ");
		try
		{
			retVal = decodeURIComponent(retVal);
		}
		catch (ex)
		{
			console.error("getQueryByName", ex.message);
		}
	}
    return retVal;
}

function padZero(num, size)
{
	return (1e15 + num + "").slice(-size);
}

function padZeroHex(num, size)
{
	return ("00000000000000000000000" + num.toString(16)).slice(-size).toUpperCase();
}

function randNum(min, max)
{
	return Math.round(Math.random() * (max - min) + min);
}

function isSpecialChar(ch)
{
	var chCode = -1;
	
	if (typeof ch === 'number')
	{
		chCode = ch;
	}
	else
	{
		chCode = ch.charCodeAt(0);
	}
	
	
	if ((chCode > -1 && chCode < 9) 		// 0-8
		|| (chCode > 10 && chCode < 13) 	// 11-12
		|| (chCode > 13 && chCode < 32))	// 14-31
	{
		return true;
	}
	
	return false;
}

function hasSpecialChar(str)
{
	var rgxSpCh = /[\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u000B\u000C\u000E\u000F\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001A\u001B\u001C\u001D\u001E\u001F]+/;
	
	return rgxSpCh.test(str);
}
	
function checkSpecialCharMatched(str1, str2)
{
	// return (status, numSp1, numSp2)
	// status: 0:Match, 1:NotMatch, 2:NotEqual
	
	var strOut1 = "";
	var strOut2 = "";
	
	if (str1 != null && str2 != null)
	{
		for (var i = 0; i < str1.length; i++)
		{
			if (isSpecialChar(str1[i]))
			{
				strOut1 += str1[i];
			}
		}
		for (var i = 0; i < str2.length; i++)
		{
			if (isSpecialChar(str2[i]))
			{
				strOut2 += str2[i];
			}
		}
	}
	
	var retVal = 0;
	
	if (strOut1 == strOut2)
		retVal = 0;
	else if (strOut1.length == strOut2.length)
		retVal = 1;
	else
		retVal = 2;
	
	return new Array(retVal, strOut1.length, strOut2.length);
}

function trimSpace(str)
{
	return str.replace(/^[ \r\n\t]+/, "").replace(/[ \r\n\t]+$/, "");
}

if (!String.prototype.endsWith)
{
	String.prototype.endsWith = function(searchString, position)
	{
		var subjectString = this.toString();
		if (typeof position !== 'number' || !isFinite(position)
			|| Math.floor(position) !== position || position > subjectString.length)
		{
			position = subjectString.length;
		}
		position -= searchString.length;
		var lastIndex = subjectString.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
}

function reload()
{
	var curHref = window.location.href;
	var posHashtag = curHref.indexOf("#");
	if (posHashtag > -1)
	{
		window.location = curHref.substr(0, posHashtag);
	}
	else
	{
		window.location = curHref;
	}
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

var isVisible = (function()
{
	var stateKey;
	var eventKey;
	var keys =
	{
		hidden: "visibilitychange",
		webkitHidden: "webkitvisibilitychange",
		mozHidden: "mozvisibilitychange",
		msHidden: "msvisibilitychange"
	};
	for (stateKey in keys)
	{
		if (stateKey in document)
		{
			eventKey = keys[stateKey];
			break;
		}
	}
	return function(c)
	{
		if (c)
		{
			document.addEventListener(eventKey, c);
		}
		return !document[stateKey];
	}
})();

function isDstUsa(year, month, day, hour)
{
	// 2016, 3, 1, 15 == 1 Mar 2016 15:00
	
	var isDst = false;
	try
	{
		var y = parseInt(year);
		var m = parseInt(month);
		var d = parseInt(day);
		var h = parseInt(hour);
		
		function checkDstUsa(dayMar, dayNov, m, d, h)
		{
			var isDst = false;
			if ((m == 3 && d >= dayMar) || (m > 3 && m < 11) || (m == 11 && d <= dayNov))
				isDst = true;
			if ((m == 3 && d == dayMar && h < 2) || (m == 11 && d == dayNov && h >= 2))
				isDst = false;
			return isDst;
		}
		
		if (y == 2007 || y == 2012 || y == 2018 || y == 2029)
		{
			isDst = checkDstUsa(11, 4, m, d, h);
		}
		else if (y == 2013 || y == 2019 || y == 2024)
		{
			isDst = checkDstUsa(10, 3, m, d, h);
		}
		else if (y == 2008 || y == 2014 || y == 2025)
		{
			isDst = checkDstUsa(9, 2, m, d, h);
		}
		else if (y == 2009 || y == 2015 || y == 2020 || y == 2026)
		{
			isDst = checkDstUsa(8, 1, m, d, h);
		}
		else if (y == 2010 || y == 2021 || y == 2027)
		{
			isDst = checkDstUsa(14, 7, m, d, h);
		}
		else if (y == 2011 || y == 2016 || y == 2022)
		{
			isDst = checkDstUsa(13, 6, m, d, h);
		}
		else if (y == 2017 || y == 2023 || y == 2028)
		{
			isDst = checkDstUsa(12, 5, m, d, h);
		}
		
	}
	catch (ex)
	{
		console.error("isDstUsa", ex.message);
	}
	return isDst;
}

function getUnixTimestamp()
{
	return parseInt((new Date()) / 1000);
}
	
var pattUrlTimestamp1 = /\?t=[0-9]{6,}\&/g;
var pattUrlTimestamp2 = /\&t=[0-9]{6,}/g;
var pattUrlTimestamp3 = /\?t=[0-9]{6,}/g;
var pattUrlTimestamp4 = /\&[0-9]{6,}\&/g;

function cleanUrlTimestamp(eles)
{
	if (!eles || !eles.length)
		return;

	for (var i = 0; i < eles.length; i++)
	{
		var val = "";
		var attr = "";
		
		if (eles[i].tagName === "A")
		{
			attr = "href";
		}
		else if (eles[i].tagName === "FORM")
		{
			attr = "action";
		}
		else if (eles[i].tagName === "DIV")
		{
			attr = "onclick";
		}
		
		var isEdit = false;
		
		val = eles[i].getAttribute(attr);
		if (pattUrlTimestamp1.test(val))
		{
			eles[i].setAttribute(attr, val.replace(pattUrlTimestamp1,"?"));
			isEdit = true;
		}
		else if (pattUrlTimestamp2.test(val))
		{
			eles[i].setAttribute(attr, val.replace(pattUrlTimestamp2,""));
			isEdit = true;
		}
		else if (pattUrlTimestamp3.test(val))
		{
			eles[i].setAttribute(attr, val.replace(pattUrlTimestamp3,""));
			isEdit = true;
		}
		
		if (isEdit)
		{
			val = eles[i].getAttribute(attr);
		}
		
		if (pattUrlTimestamp4.test(val))
		{
			//console.log("T4: " + val);
			eles[i].setAttribute(attr, val.replace(pattUrlTimestamp4,"&"));
		}
	}
}

var timeoutList = new Array();
var intervalList = new Array();

function setTimeoutCustom(func, tm, params)
{
	var id = setTimeout(func, tm, params);
	timeoutList.push(id);
	return id;
}

function clearTimeoutAll()
{
	for (var i = 0; i < timeoutList.length; i++)
	{
		clearTimeout(timeoutList[i]);
	}
}

function setIntervalCustom(func, tm, params)
{
	var id = setInterval(func, tm, params);
	intervalList.push(id);
	return id;
}

function clearIntervalAll()
{
	for (var i = 0; i < intervalList.length; i++)
	{
		clearInterval(intervalList[i]);
	}
}

function main()
{
	var url = document.documentURI;
	var lang = getCookie("Language");
	
	// Auto refresh when error
	{
		var h1 = document.querySelector("#leftAreaContainer > h1, body > h1");
		if (h1 != null)
		{
			var text = h1.textContent.trim();
			if (text == "Steam Translation Server - Maintenance Warning"
				|| text == "Forbidden")
			{
				console.log("stsh: refresh");
				setTimeoutCustom(reload, 60000);
				return;
			}
		}
	}

	// Clean links
	{
		setTimeoutCustom(function()
		{
			var eles = document.querySelectorAll("a, form[action]");
			cleanUrlTimestamp(eles);
		}, 1000);
	}

	var eleLogout = document.querySelector("#logout");
	if (eleLogout != null)
	{
		var logoutHtml = ' <a class="stsh_a_button" target="_blank" '
			+ ' href="/user_activity.php">My Profile</a> '
			+ ' <input name="login_button" value="Logout?" type="submit" onclick="return confirm(\'Logout?\');" /> ';
		
		eleLogout.innerHTML = logoutHtml;
	}

	// Special event button
	{
		var eleLogoff = document.querySelector("#logoff");
		if (eleLogoff != null)
		{
			var d = new Date();
			if ((d.getUTCMonth() > 8) || (d.getUTCMonth() == 8 && d.getUTCDate() >= 25) || (d.getUTCMonth() == 0 && d.getUTCDate() <= 1))
			{
				var divSpecial = document.createElement("div");
				divSpecial.id = "stsh_specialEvent";
				divSpecial.innerHTML = ' <a class="stsh_a_button" target="_blank" '
					+ ' href="/rally.php">Year-End Rally</a> ';
				eleLogoff.appendChild(divSpecial);
			}
		}
	}

	if (url.indexOf("Us_And_Them.php") > -1)
	{
		var container = "\"";
		var tdEng = document.querySelector("#leftAreaContainer > table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)");
		if (tdEng != null)
		{
			tdEng.innerHTML = container + tdEng.innerHTML + container;
		}
	
		var h1 = document.querySelector("#leftAreaContainer > h1:nth-child(2)");
		if (h1 != null)
		{
			var header = h1.textContent.trim();
			var key = header.split(" ")[0];
			h1.innerHTML = header.replace(key, "<a href='http://translation.steampowered.com/translate.php?keyonly=1&search_input="
				+ encodeURIComponent(key) + "' >" + key + "</a>");
			document.title = key + " - " + document.title;
		}
		
		// Hilight cur lang
		{
			//var first = document.querySelector("#leftAreaContainer tr:nth-child(1) > td:nth-child(1) > a");
			//if (first)
			{
				var cur = null;
				
				var elesLang = document.querySelectorAll("#leftAreaContainer tr > td:nth-child(1) > a");
				for (var i = 1; i < elesLang.length; i++)
				{
					if (lang === elesLang[i].textContent.trim().toLowerCase())
					{
						cur = elesLang[i].parentElement.parentElement;
						break;
					}
				}
				
				if (cur)
				{
					cur.classList.add("stsh_usThem_curLang");
					//insertAfterElement(cur, first.parentElement.parentElement);
				}
			}
		}
	
	} // End Us_And_Them.php

	if (url.indexOf("suggestions.php") > -1)
	{
		var eleTextOrg = document.querySelector(".progress tr:last-child > td:nth-child(1)");
		if (eleTextOrg)
		{
			eleTextOrg.classList.add("stsh_text_org");
		}
		
		var eleTextTrn = document.querySelector(".progress tr:last-child > td:nth-child(3)");
		if (eleTextTrn)
		{
			eleTextTrn.classList.add("stsh_text_trn");
		}
		
		var eleTextSubmit =  document.querySelector(".lbAction[name='suggestion_temp'] input[accesskey='s']");
		if (eleTextSubmit)
		{
			eleTextSubmit.classList.add("stsh_text_submit");
		}
		
		var elesTextRemoveComment = document.querySelectorAll(".suggestion_signature .lbAction[name^='mymodcomment'] a");
		for (var i = 0; i < elesTextRemoveComment.length; i++)
		{
			elesTextRemoveComment[i].removeAttribute("href");
			elesTextRemoveComment[i].classList.add("stsh_text_removeComment");
		}
		
		var elesTextComment = document.querySelectorAll("textarea[name='suggestion_comment']");
		for (var i = 0; i < elesTextComment.length; i++)
		{
			elesTextComment[i].nextElementSibling.classList.add("stsh_submit_comment");
		}
		
		var eleTextNew = document.querySelector("#suggestion_value_new");
		if (eleTextNew)
		{
			eleTextNew.style.width = "960px";
			eleTextNew.style.height = "64px";
			eleTextNew.style.marginLeft = "3px";
		}
	
		var inputClose = document.querySelector("#suggestions_nav > input[value^='Close']");
		if (inputClose != null)
		{
			inputClose.value = "Close (Esc)";
		}
	
		// Move region
		{
			var td = document.querySelector(".stsh_text_trn");
			if (td != null && td.textContent.trim() == "")
			{
				function moveSuggestionBox()
				{
					var td = document.querySelector(".stsh_text_trn");
					if (td != null && td.textContent.trim() == "")
					{
						td.innerHTML = "";
						var eleTarget = document.querySelector("#suggestionmain > div:nth-child(4) > .lbAction");
						if (eleTarget != null)
						{
							td.appendChild(eleTarget);
							td.style.padding = "0px";
							
							var textarea = document.querySelector("#suggestion_value_new");
							if (textarea != null)
							{
								textarea.style.width = "98%";
								textarea.style.marginLeft = "0px";
								if (textarea.scrollHeight < 1000)
								{
									textarea.style.height = (textarea.scrollHeight + 20) + "px";
								}
								else
								{
									textarea.style.height = "1000px";
								}
								textarea.focus();
							}
						}
					}
				}
				
				function moveSuggestionList()
				{
					var td = document.querySelector(".stsh_text_trn");
					if (td != null && td.textContent.trim() == "")
					{
						td.innerHTML = "";
						var eleTarget = document.querySelector(".suggestion");
						if (eleTarget != null)
						{
							td.appendChild(eleTarget);
							td.style.padding = "0px";
							
							eleTarget.style.marginTop = "-2px";
							eleTarget.style.paddingTop = "0px";
							eleTarget.style.borderBottomWidth = "0px";
							eleTarget.style.borderRightWidth = "0px";
							eleTarget.style.resize = "none";
														
							var eleAutoApprove = document.querySelector("#stsh_autoApprove");
							if (eleAutoApprove != null)
							{
								eleAutoApprove.classList.add("stsh_hidden");
							}
							
							var eleAutoApproveLabel = document.querySelector(".stsh_autoApprove_label");
							if (eleAutoApproveLabel != null)
							{
								eleAutoApproveLabel.classList.add("stsh_hidden");
							}

							var eleAutoDecline = document.querySelector("#stsh_autoDecline");
							if (eleAutoDecline != null)
							{
								eleAutoDecline.classList.add("stsh_hidden");
							}
							
							var eleAutoDeclineLabel = document.querySelector(".stsh_autoDecline_label");
							if (eleAutoDeclineLabel != null)
							{
								eleAutoDeclineLabel.classList.add("stsh_hidden");
							}
						}
					}
				}
				
				var eleMoveBox = document.createElement("input");
				eleMoveBox.id = "stsh_moveSuggestionBox";
				eleMoveBox.setAttribute("value", "Move Box Here");
				eleMoveBox.setAttribute("type", "button");
				eleMoveBox.style.marginRight = "5px";
			
				eleMoveBox.addEventListener("click", function(e)
				{
					moveSuggestionBox();
				});
				
				td.appendChild(eleMoveBox);
				
				var eleMoveList = document.createElement("input");
				eleMoveList.id = "stsh_moveSuggestionList";
				eleMoveList.setAttribute("value", "Move Suggestion Here");
				eleMoveList.setAttribute("type", "button");
				eleMoveList.style.marginRight = "5px";
			
				eleMoveList.addEventListener("click", function(e)
				{
					moveSuggestionList();
				});
				
				td.appendChild(eleMoveList);
			}
		}
	
		if (eleTextNew)
		{
			eleTextNew.focus();
			
			if (eleTextNew.scrollHeight < 1000)
			{
				eleTextNew.style.height = (eleTextNew.scrollHeight + 20) + "px";
			}
			else
			{
				eleTextNew.style.height = "1000px";
			}
			
			if (eleTextNew.scrollHeight > 200 && document.querySelector(".suggestion"))
			{
				eleTextNew.scrollIntoView();
			}
		}
	
		var br = document.querySelector("form.lbAction:nth-child(2) > div:nth-child(2) > br:nth-child(1)");
		if (br != null)
		{
			br.parentElement.removeChild(br);
		}
		
		var key = "";
	
		var divNav = document.querySelector("div#suggestions_nav");
		if (divNav != null)
		{
			var insert = "";
			var spliter = "_";
			var regApp = /[0-9]{4,}/;
		
			var aKey = document.querySelector(".smallcopy > font:nth-child(2) > a:nth-child(1)");
			if (aKey != null)
			{
				insert += ' <br/> &nbsp; ';
				key = encodeURIComponent(aKey.textContent.trim());
			
				if (key == "token-key")
				{
					aKey = document.querySelector(".smallcopy > a:nth-child(3)");
					if (aKey != null)
					{
						key = encodeURIComponent(aKey.textContent.trim());
					}
				}
			
				if (key != "")
				{
					document.title = key + " - " + document.title;
					
					if (key.split(spliter).length > 1)
					{
						if (key.indexOf("%23") == 0)
						{
							var firstSpliter = key.indexOf(spliter);
							var keySharp = key.substring(0, firstSpliter);
							insert += ' <a class="stsh_a_button" target="_blank" '
								+ ' href="/translate.php?keyonly=1&paginationrows=1000&search_input='
								+ keySharp + '">Search by Hashtag</a> ';
						}
					
						var lastSpliter = key.lastIndexOf(spliter);
						var keyGroup = key.substring(0, lastSpliter);
						insert += ' <a class="stsh_a_button" target="_blank" '
							+ ' href="/translate.php?keyonly=1&paginationrows=1000&search_input='
							+ keyGroup + '">Search by Group</a> ';
					}
					insert += ' <a class="stsh_a_button" target="_blank" '
						+ ' href="/translate.php?keyonly=1&search_input='
						+ key + '">Search by Key</a> ';
				}
			}
		
			var tdText = document.querySelector(".stsh_text_org");
			if (tdText != null)
			{
				var text = encodeURIComponent(tdText.textContent.trim()).replace(/(%20|%09)/g,"+")
					.replace(/'/g,"\\'").replace("%0A","+").replace(/\++/g,"+").substr(0, 80);
					
				if (text.length >= 80)
				{
					text = text.substr(0, text.lastIndexOf("+"));
				}
				
				if (text.indexOf(".") > 20)
				{
					text = text.substr(0, text.indexOf(".") + 1);
				}
				
				var eleSubmit = document.querySelector(".stsh_text_submit");
				if (eleSubmit != null)
				{
					var elePrev = eleSubmit.previousElementSibling;
					if (elePrev == null || elePrev.tagName != "BR")
					{
						var eleNew = document.createElement("br");
						insertBeforeElement(eleNew, eleSubmit);
					}
				}
				
				if (text != "")
				{
					insert += ' <br/> &nbsp; <a class="stsh_a_button" target="_blank" '
						+ ' href="/translate.php?keyonly=2&paginationrows=1000&search_input='
						+ text + '">Search by String</a> ';
					
					var eleSubmitNext = document.querySelector(".lbAction input[type='submit'][accesskey='a']");
					if (eleSubmitNext != null)
					{
						eleSubmitNext.value = "Next";
						eleSubmitNext.classList.add("stsh_submit_suggestion_right");
						
						var eleForm = eleSubmitNext.parentElement.parentElement;
						if (eleForm.tagName == "FORM")
						{
							addKeyCtrlShiftEnter(eleForm, eleSubmitNext);
						}
					}
					else
					{
						if (eleSubmit != null)
						{
							var eleNew = document.createElement("input");
							eleNew.id = "stsh_submit_suggestion_next";
							eleNew.classList.add("stsh_submit_suggestion_right");
							eleNew.setAttribute("type", "submit");
							eleNew.setAttribute("value", "Next");
							eleNew.setAttribute("name", "submitandnext");
							insertAfterElement(eleNew, eleSubmit);
							
							eleNew.addEventListener("click", function(ev)
							{
								var textOrg = "";
								var textTrn = "";
								var textCur = "";
								
								var eleTextOrg = document.querySelector(".stsh_text_org");
								if (eleTextOrg != null)
								{
									textOrg = trimSpace(eleTextOrg.textContent);
								}
								var eleTextTrn = document.querySelector(".stsh_text_trn");
								if (eleTextTrn != null)
								{
									textTrn = trimSpace(eleTextTrn.textContent);
								}
								var eleTextCur = document.querySelector("#suggestion_value_new");
								if (eleTextCur != null)
								{
									textCur = trimSpace(eleTextCur.value);
								}
								
								if (textCur == "" || textOrg == textCur || textTrn == textCur)
								{
									ev.preventDefault();
									var eleSubmit = document.querySelector(".stsh_text_submit");
									if (eleSubmit != null)
									{
										eleSubmit.click();
									}
								}
							});
							
							var eleForm = eleSubmit.parentElement.parentElement;
							if (eleForm.tagName == "FORM")
							{
								addKeyCtrlShiftEnter(eleForm, eleNew);
							}
						}
					}
				}
				else
				{
					if (eleTextNew && eleSubmit)
					{
						var eleNew = document.createElement("input");
						eleNew.id = "stsh_submit_suggestion_space";
						eleNew.classList.add("stsh_submit_suggestion_right");
						eleNew.setAttribute("type", "button");
						eleNew.setAttribute("value", "Submit Space (Alt+0160)");
						insertAfterElement(eleNew, eleSubmit);
						
						eleNew.addEventListener("click", function(ev)
						{
							var eleTextNew = document.querySelector("#suggestion_value_new");
							if (eleTextNew)
							{
								eleTextNew.value = String.fromCharCode(160);
								eleTextNew.focus();
								
								ev.preventDefault();
								var eleSubmit = document.querySelector(".stsh_text_submit");
								if (eleSubmit)
								{
									eleSubmit.click();
								}
							}
						});
					}
				}
			}
		
			var app = regApp.exec(key.replace("%23",""));
			if (key.indexOf("faq") < 0 && app != null)
			{
				insert += ' <br/> &nbsp; ';
			
				if (key.indexOf("SharedFiles_App_") == 0)
				{
					insert += ' <a class="stsh_a_button" target="_blank" '
						+ ' href="http://steamcommunity.com/workshop/browse?appid='
						+ app + '">View Workshop</a> ';
				}
			
				insert += ' <a class="stsh_a_button" target="_blank" '
					+ ' href="http://steamcommunity.com/app/'
					+ app + '">View Community</a> '
			
				insert += ' <a class="stsh_a_button" target="_blank" '
					+ ' href="http://store.steampowered.com/app/'
					+ app + '">View App</a> ';
			}
		
			var insertBefore = ' <input id="stsh_refresh" value="Refresh" '
				+ ' onclick="return false;" type="button"> '
				+ ' <a class="stsh_a_button" target="_blank" '
				+ ' href="'	+ url + '">Frame</a> ';
		
			var innerNew = divNav.innerHTML
				.replace('<input value="Previous','&nbsp;&nbsp;<input value="Prev')
				.replace('<input value="Close','&nbsp;&nbsp;<input value="Close');
		
			divNav.innerHTML = insertBefore + innerNew + insert + " <br/> ";
			
			var eleRefresh = document.querySelector("#stsh_refresh");
			if (eleRefresh)
			{
				eleRefresh.addEventListener("click", function()
				{
					reload();
				});
			}
		}
	
		// Regroup glossary and auto replace matched string
		{
			setTimeoutCustom(function()
			{
				var br = "<br>";
				var brSpace = " <br> ";
				var tag = "<a";
				var colon = ">: ";
				var comma = ",";
				var bracket = " (";
				var isEdit = false;
				
				var p = null;
				
				var aGls = document.querySelectorAll("a[href='glossary.php']");
				for (var i = 0; i < aGls.length; i++)
				{
					if (aGls[i].textContent.trim() == "GLOSSARY FEATURE")
					{
						p = aGls[i].parentElement;
						break;
					}
				}
				
				if (p != null)
				{
					var glosOuters = [];
					var glosInnerStart = 0;
					var countGl = 0;
					var glossaries = p.innerHTML.split(br);
					if (glossaries.length > 2)
					{
						glosOuters = [p];
						glosInnerStart = 2;
					}
					else
					{
						glosOuters = p.nextSibling.querySelectorAll("td");
						glosInnerStart = 0;
					}
					
					var rgxKey = />[^><]+</;
					var rgxKeyClean = /[><]+/g;
					var rgxKeyPunct = /[\(\)\[\]\:\!]/g;
					var rgxContentClean = /<[^<]*>/g;
					var textOrg = "";
					var textEng = "";
					var isTextReplaced = false;
					var isOutdated = false;

					var eleBtnResummit = document.querySelector("input[type='submit'][value^='RESUBMIT']");
					if (eleBtnResummit != null)
					{
						isTextReplaced = true;
					}
					else
					{
						var eleTextOrg = document.querySelector("#suggestion_value_new");
						if (eleTextOrg != null)
						{
							textOrg = eleTextOrg.value.trim().toLowerCase();
						}
						if (textOrg == "")
						{
							isTextReplaced = true;
						}
					}
					
					if (!isTextReplaced)
					{
						var eleTrs = document.querySelectorAll(".progress tr");
						isOutdated = (eleTrs.length >= 3);
						if (isOutdated)
						{
							textEng = eleTrs[eleTrs.length - 1].firstElementChild.textContent.trim().toLowerCase();
						}
					}
					
					for (var i = 0; i < glosOuters.length; i++)
					{
						var glosOuter = glosOuters[i];
						
						var glosInners = glosOuter.innerHTML.split(br);
						
						isEdit = false;
						
						for (var j = glosInnerStart; j < glosInners.length; j++)
						{
							var glossary = glosInners[j].trim();
							if (glossary.length > 0 && glossary.indexOf(tag) == 0)
							{
								var colonIndex = glossary.indexOf(colon);
								var contentHead = glossary.substr(0, colonIndex + 3);
								var contentAll = glossary.substr(colonIndex + 3);
								var contentWords = contentAll.split(comma);
								var contentFirst = contentWords[0].trim();
								
								for (var k = 0; k < contentWords.length; k++)
								{
									var contentNew = contentWords[k].trim();
									var contentSub = null;
									
									var bracketPos = contentNew.indexOf(" (");
									if (bracketPos > -1)
									{
										contentSub = contentNew.substr(bracketPos);
										contentNew = contentNew.substr(0, bracketPos);
									}
									
									contentNew = " <span id='stsh_gls_" + countGl
										+ "' onclick='clickToSelect(this)'>"
										+ contentNew + "</span>";
										//+ "<span style='color: white; cursor: pointer;'>^</span>";
										
									if (contentSub != null)
									{
										contentNew +=  "<span "
											+ "onclick='clickToSelect(this.previousElementSibling)'>"
											+ contentSub + "</span>";
									}
									
									contentWords[k] = contentNew;
									countGl++;
								}
							
								if (!isTextReplaced)
								{
									var keys = contentHead.match(rgxKey);
									if (keys != null && keys.length > 0)
									{
										var key = keys[0].replace(rgxKeyClean, "").trim().toLowerCase();
										var contentClean = contentFirst.replace(rgxContentClean, "");
										var contentLower = contentClean.toLowerCase();
										var textCur = "";
										if (key == textOrg.replace(rgxKeyPunct, ""))
										{
											textCur = textOrg;
										}
										else if (key == textEng.replace(rgxKeyPunct, ""))
										{
											textCur = textEng;
										}
										
										if (textCur != "" && key != contentLower)
										{
											var rgxReplace = new RegExp(key, "i");
											eleTextOrg.value = textCur.replace(rgxReplace, contentClean);
											isTextReplaced = true;
										}
									}
								}
								
								glosInners[j] = contentHead + contentWords.join(comma);
								isEdit = true;
							}
						}
						if (isEdit && false)
						{
							// old feature
							glosOuter.innerHTML = glosInners.join(brSpace);
						}
					}
				}
			}, 200);
		}
		
		// Insert clicked word in last textarea
		{
			
			var eleTextLast = null;
			
			if (document.activeElement && document.activeElement.tagName == "TEXTAREA")
			{
				eleTextLast = document.activeElement;
			}
			
			var elesText = document.querySelectorAll("textarea#suggestion_value_new, textarea[name='suggestion_comment']");
			for (var i = 0; i < elesText.length; i++)
			{
				elesText[i].addEventListener('focus', function(ev)
				{
					eleTextLast = ev.target;
				});
			}
			
			setTimeoutCustom(function()
			{
				var elesInsert = document.querySelectorAll(".insertword");
				for (var i = 0; i < elesInsert.length; i++)
				{
					removeAllEventListeners(elesInsert[i]);
				}
				
				function insertAtCaret(txtarea, text)
				{
					// Edit from STS
					
					var scrollPos = txtarea.scrollTop;
					var strPos = 0;
					var strLength = 0;
					var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? "ff" : (document.selection ? "ie" : false));
					if (br == "ie")
					{
						txtarea.focus();
						var range = document.selection.createRange();
						range.moveStart('character', -txtarea.value.length);
						strPos = range.text.length;
					}
					else if (br == "ff")
					{
						strPos = txtarea.selectionStart;
						strLength = txtarea.selectionEnd - txtarea.selectionStart;
					}
					var front = (txtarea.value).substring(0, strPos);
					var back = (txtarea.value).substring(strPos + strLength, txtarea.value.length);
					txtarea.value = front + text + back;
					strPos = strPos + text.length;
					if (br == "ie")
					{
						txtarea.focus();
						var range = document.selection.createRange();
						range.moveStart('character', -txtarea.value.length);
						range.moveStart('character', strPos);
						range.moveEnd('character', 0);
						range.select();
					}
					else if (br == "ff")
					{
						txtarea.selectionStart = strPos;
						txtarea.selectionEnd = strPos;
						txtarea.focus();
					}
					txtarea.scrollTop = scrollPos;
				}
			
				elesInsert = document.querySelectorAll(".insertword");
				for (var i = 0; i < elesInsert.length; i++)
				{
					//elesInsert[i].classList.add("stsh_unselectable");
					elesInsert[i].addEventListener("click", function(ev)
					{
						if (eleTextLast != null)
						{
							insertAtCaret(eleTextLast , ev.target.textContent.trim());
						}
					});
				}
			}, 500);
		}
		
		// Restyle glossary
		{
			var eleP = null;
				
			var elesA = document.querySelectorAll("a[href='glossary.php']");
			for (var i = 0; i < elesA.length; i++)
			{
				if (elesA[i].textContent.trim() == "GLOSSARY FEATURE")
				{
					eleP = elesA[i].parentElement;
					break;
				}
			}
			
			if (eleP != null)
			{
				var nodeText = eleP.firstElementChild.nextSibling;
				if (nodeText.nodeType == document.TEXT_NODE)
				{
					var ele = document.createElement("span");
					ele.textContent = nodeText.textContent;
					
					nodeText.parentElement.removeChild(nodeText);
					
					insertAfterElement(ele, eleP.firstElementChild);
				}
				
				var eleHead;
				
				if (eleP.nextElementSibling.tagName == "TABLE")
				{
					eleHead = eleP.nextElementSibling;
				}
				else
				{
					eleHead = eleP;
				}
				
				eleHead.classList.add("stsh_glossary_header");
				
				var elesTerm = eleHead.querySelectorAll("a[href^='http://translation.steampowered.com/translate.php?search_input=']");
				for (var i = 0; i < elesTerm.length; i++)
				{
					elesTerm[i].classList.add("stsh_glossary_term");
				}
				
				{
					var eleSpan = null;
					if (eleHead.tagName == "TABLE")
					{
						eleSpan = eleHead.previousElementSibling.querySelector("span");
					}
					else
					{
						eleSpan = eleHead.querySelector("span");
					}
					eleSpan.textContent = eleSpan.textContent.replace("(click to copy to top)", "(click to copy to suggestion or comment)");
				}
			}
		}
		
		// Auto link http
		// Format comment
		{
			var countSugStatus = document.querySelectorAll(
				".suggestions_list span[class^='suggestion_status_']").length;
				
			var regUrl = /http[^ "]+/ig;
			var hostUrl = "http://translation.steampowered.com/";
			var hostReplace = "/";
			var eleComments = document.querySelectorAll(""
				+ ".suggestion_signature > i:nth-child(3), "
				+ ".suggestion_signature div:nth-child(1) > i:nth-child(4), "
				+ ".suggestion_signature div:nth-child(1) > i:nth-child(6), "
				+ "*[class^='row'] > td:nth-child(2) ");
			for (var i = 0; i < eleComments.length; i++)
			{
				var comment = eleComments[i].innerHTML + " ";
				if (comment.indexOf("<a") == -1)
				{
					var commentUrls = comment.match(regUrl) || [];
					for (var j = 0; j < commentUrls.length; j++)
					{
						var urlDecode = commentUrls[j];
						try
						{
							urlDecode = decodeURIComponent(commentUrls[j]);
							
							if (countSugStatus == 0 && urlDecode.indexOf(hostUrl) == 0)
							{
								var query = getQueryByName("search_input", urlDecode.replace("&amp;", "&"));
								
								if (query != "")
								{
									urlDecode = query;
								}
								else
								{
									urlDecode = urlDecode.replace(hostUrl, hostReplace);
								}
							}
						}
						catch (ex)
						{
							console.error("FormatComment", ex.message);
						}
						var commentUrl = commentUrls[j] + " ";
						comment = comment.replace(commentUrl,"<a target='_blank' href='"
							+ commentUrls[j] + "' >" + urlDecode + "</a> ");
					}
				}
				
				comment = comment.trim();
		
				if (comment.indexOf("Comment:") == 0)
				{
					eleComments[i].classList.add("stsh_text_comment_header");
					comment = comment
						.replace("Comment:", "Comment: <span class='stsh_text_comment'>")
						.replace(/\/ /g, "<span class='stsh_white stsh_pad'>/</span> ")
						.replace(/ \//g, " <span class='stsh_white stsh_pad'>/</span>")
						.replace(/\-\&gt\;/g, "<span class='stsh_white stsh_pad'>-&gt;</span>")
						.replace(/\-\-/g, "<span class='stsh_white stsh_pad'>--</span>")
						.replace(/\,/g, "<span class='stsh_white stsh_pad'>,</span>")
						.replace(/\*/g, "<span class='stsh_white stsh_pad'><br>*</span>")
						+ "</span>";
				}
				
				eleComments[i].innerHTML = comment;
				
				var eleAs = eleComments[i].querySelectorAll("a");
				for (var j = 0; j < eleAs.length; j++)
				{
					var href = eleAs[j].getAttribute("href");
					if (href.indexOf("#") > -1)
					{
						eleAs[j].setAttribute("href", href.replace(/\#/g,"%23"));
					}
				}
				
				
				//if (comment.indexOf("Comment:") != 0)
				{
					// Discussion comment
					
					var rgxImg = /(\.(jpg|png|gif)|\/ugc\/)/i;
					
					var elesA = eleComments[i].querySelectorAll("a");
					for (var j = 0; j < elesA.length; j++)
					{
						var href = elesA[j].getAttribute("href");
						if (rgxImg.test(href))
						{
							if (elesA[j].querySelectorAll("img").length == 0)
							{
								var ele = document.createElement("img");
								ele.classList.add("stsh_comment_img");
								ele.setAttribute("src", href);
								ele.setAttribute("title", href);
								ele.setAttribute("onclick", " if (this.style.minWidth != '850px') "
									+ " { this.style.minWidth = this.naturalWidth < 850 ? this.naturalWidth + 'px' : '850px'; } "
									+ " else { this.style.minWidth = '400px'; } ");
							
								insertAfterElement(ele, elesA[j]);
							}
						}
					}
				}
			}
		}
	
		// Restyle token info
		{
			var divIntro = document.querySelector("#suggestionmain > div.smallcopy");
			if (divIntro != null)
			{
				var qBranch = getQueryByName("branch");
				
				var htmlEdit = "You are editing";
				var htmlEditReplace = "";
				
				var htmlToken = "Token <";
				var htmlTokenReplace = "Token: <";
				
				var htmlToken2 = "token-key";
				var htmlToken2Replace = "Token";
				
				var htmlLiveLinkMoved = '<font style="color:red;">This FAQ likely does not exist anymore!</font>'
					+ ' The generated <a href="https://support.steampowered.com/kb_article.php?ref=" target="_blank">live link</a>'
					+ ' seems dead or is redirecting.';
				var htmlLiveLinkMovedReplace = '<font style="color:red; cursor: help;"'
					+ ' title="The generated live link seems dead or is redirecting.">'
					+ 'This FAQ likely does not exist anymore!</font>';
				
				var htmlLiveLink = 'target="_blank">Live link';
				var htmlLiveLinkReplace = 'target="_blank">Live link';
				
				var htmlFile = " of <";
				var htmlFileReplace = ' <br>File: <font class="stsh_info_file stsh_blue" onclick="clickToSelect(this)">' + qBranch + '</font> >> <';
				
				var htmlFrom = "<br>Added on <";
				var htmlFromReplace = " &nbsp;&nbsp;Added: <";
				
				var htmlUpdated = ">. Updated on <";
				var htmlUpdatedReplace = "> &nbsp;&nbsp;Updated: <";
				
				var htmlUpdated2 = "<br> Updated on <";
				var htmlUpdated2Replace = " &nbsp;&nbsp;Updated: <";
				
				var htmlSugg = 'You have  <font style="';
				var htmlSuggReplace = 'You have <font title="Enter and submit new suggestions below.  Do not alter HTML tags or variables." style="cursor: help; ';
				
				var htmlIntro = "Enter and submit new suggestions below. Do not alter HTML tags or variables.";
				var htmlIntroReplace = ' <a href="mailto:translationserver@valvesoftware.com" '
					+ ' title="Please report token issues by posting a TOKEN DISCUSSION \r\nor email to translationserver@valvesoftware.com" '
					+ ' style="cursor: help; ">'
					+ '<font style="color:white;">Report Tokens</font></a>';
				
				var htmlContact = '<br>Please report token issues by posting a <font style="color:#a4b23c;">TOKEN DISCUSSION</font> tagged<input style="border:none; color:#FFFFFF; background-color:#111111; cursor:pointer;" onclick="tosts(\'truncated\')" value="[sts_admin][truncated]" type="button">or<input style="border:none; color:#FFFFFF; background-color:#111111; cursor:pointer;" onclick="tosts(\'typo\');" value="[sts_admin][typo]" type="button">or<input style="border:none; color:#FFFFFF; background-color:#111111; cursor:pointer;" onclick="tosts(\'unlockpls\')" value="[sts_admin][unlockpls]" type="button">or by <a href="mailto:translationserver@valvesoftware.com">email</a>.';
				var htmlContactReplace = '';
				
				var htmlContact2 = '<br>Please report token issues by posting a <font style="color:#a4b23c;">TOKEN DISCUSSION</font> tagged<input style="border:none; color:#FFFFFF; background-color:#111111; cursor:pointer;" type="button" onclick="tosts(\'truncated\')" value="[sts_admin][truncated]">or<input style="border:none; color:#FFFFFF; background-color:#111111; cursor:pointer;" type="button" onclick="tosts(\'typo\');" value="[sts_admin][typo]">or<input style="border:none; color:#FFFFFF; background-color:#111111; cursor:pointer;" type="button" onclick="tosts(\'unlockpls\')" value="[sts_admin][unlockpls]">or by <a href="mailto:translationserver@valvesoftware.com">email</a>.';
				var htmlContact2Replace = '';
				
				if (key != "")
				{
					htmlIntroReplace += ' <br>Share: <font class="stsh_token_share stsh_green stsh_truncate" '
						+ 'onclick="clickToSelect(this)">'
						+ 'http://translation.steampowered.com/translate.php?search_input=' + key
						+ "</font> <br>";
				}
				
				var urlLiveLink = "https://support.steampowered.com/kb_article.php?ref=";
				var eleLiveLink = divIntro.querySelector("a[href^='" + urlLiveLink + "']");
				if (eleLiveLink != null)
				{
					htmlLiveLinkReplace = 'target="_blank" title="Live link">' + eleLiveLink.getAttribute("href").replace(urlLiveLink, "");
				}
				
				var isComplete = (divIntro.innerHTML.indexOf(htmlContact) > -1);
				
				divIntro.innerHTML = divIntro.innerHTML
					.replace(htmlEdit, htmlEditReplace)
					.replace(htmlToken, htmlTokenReplace)
					.replace(htmlToken2, htmlToken2Replace)
					.replace(htmlLiveLinkMoved, htmlLiveLinkMovedReplace)
					.replace(htmlLiveLink, htmlLiveLinkReplace)
					.replace(htmlFile, htmlFileReplace)
					.replace(htmlFrom, htmlFromReplace)
					.replace(htmlUpdated, htmlUpdatedReplace)
					.replace(htmlUpdated2, htmlUpdated2Replace)
					.replace(htmlSugg, htmlSuggReplace)
					.replace(htmlIntro, htmlIntroReplace)
					.replace(htmlContact, htmlContactReplace)
					.replace(htmlContact2, htmlContact2Replace)
					.trim();
					
				var eleToken = document.querySelector("a[href^='Us_And_Them.php?']");
				if (eleToken != null)
				{
					if (eleToken.textContent != "Token")
					{
						eleToken.classList.add("stsh_token_name");
						eleToken.classList.add("stsh_truncate");
					}
				}
				
				if (!isComplete)
				{
					var stsh_introReplace_start = new Date();
					var stsh_introReplace_itv = setIntervalCustom(function(params)
					{
						var divIntro = params[0];
						var htmlContact = params[1];
						var htmlContactReplace = params[2];
						
						var stsh_introReplace_isEnd = false;
						var stsh_introReplace_cur = new Date();
						
						if (divIntro.innerHTML.indexOf(htmlContact) > -1)
						{
							divIntro.innerHTML = divIntro.innerHTML
								.replace(htmlContact, htmlContactReplace);
								
							stsh_introReplace_isEnd = true;
						}
						
						if (stsh_introReplace_isEnd || stsh_introReplace_cur - stsh_introReplace_start > 10000)
						{
							clearInterval(stsh_introReplace_itv);
						}
					}, 100, [divIntro, htmlContact, htmlContactReplace]);
				}
			}
		}
		
		// Restyle token discussion
		{
			var eleDiscuss = document.querySelector("a[name='tokendiscussion']");
			if (eleDiscuss)
			{
				var htmlHeader = "TOKEN DISCUSSION (keep global comments English please!):";
				var htmlHeaderReplace = "TOKEN DISCUSSION:";
				
				var eleHeader = eleDiscuss.nextElementSibling;
				if (eleHeader)
				{
					eleHeader.setAttribute("title", "Keep global comments English please!");
					eleHeader.style.cursor = "help";
					eleHeader.textContent = eleHeader.textContent.replace(htmlHeader, htmlHeaderReplace);
				}
				
				var eleParent = eleDiscuss.parentElement;
				eleParent.classList.add("stsh_discussion_header");
				
				if (eleParent.nextElementSibling)
				{
					eleParent.nextElementSibling.classList.add("stsh_discussion_section");
				}
				
				var elesInput = document.querySelectorAll("input[value='[stsadmin]']");
				if (elesInput.length === 2)
				{
					elesInput[1].parentElement.removeChild(elesInput[1]);
				}
				
				var eleSpan = document.createElement("span");
				eleSpan.innerHTML = '<input style="border:none; color:#888888; background-color:#111111; cursor:pointer;" onclick="tosts(\'truncated\')" value="[sts_admin][truncated]" type="button">'
					+ '<input style="border:none; color:#888888; background-color:#111111; cursor:pointer;" onclick="tosts(\'typo\');" value="[sts_admin][typo]" type="button">'
					+ '<input style="border:none; color:#888888; background-color:#111111; cursor:pointer;" onclick="tosts(\'unlockpls\')" value="[sts_admin][unlockpls]" type="button">';
				
				eleParent.appendChild(eleSpan);
				
				var eleCopy = document.querySelector("#autocopy");
				if (eleCopy)
				{
					eleCopy.previousElementSibling.classList.add("stsh_autoCopy_header");
				}
					
				var eleFriendDiscuss = document.querySelector(".friend_block_discussions");
				if (eleFriendDiscuss)
				{
					if (eleCopy)
					{
						insertBeforeElement(document.createElement("br"), eleCopy.previousElementSibling);
					}
					
					var eleTableDiscuss = eleFriendDiscuss.parentElement.parentElement.parentElement.parentElement;
					if (eleTableDiscuss.tagName === "TABLE")
					{
						eleTableDiscuss.classList.add("stsh_discussion_table");
						
						//insertBeforeElement(eleTableDiscuss, eleTableDiscuss.previousElementSibling.previousElementSibling);
					}
				}
			}
		}
		
		// Move up glossary
		{
			var eleFriendDiscuss = document.querySelector(".friend_block_discussions");
			if (!eleFriendDiscuss)
			{
				var eleDiscuss = document.querySelector(".stsh_discussion_header");
				if (eleDiscuss)
				{
					var eleGlosGroup = document.createElement("div");
					eleGlosGroup.classList.add("stsh_glossary_group");
					
					insertBeforeElement(eleGlosGroup, eleDiscuss);
					
					var eleHead = document.querySelector(".stsh_glossary_header");
					if (eleHead)
					{
						if (!(eleHead.childNodes.length === 5 
							&& eleHead.childNodes[4].nodeType === document.TEXT_NODE
							&& eleHead.childNodes[4].nodeValue === "No results"))
						{
							eleGlosGroup.appendChild(document.createElement("br"));
							
							if (eleHead.tagName === "TABLE")
							{
								eleGlosGroup.appendChild(eleHead.previousElementSibling);
							}
							else
							{
								insertAfterElement(document.createElement("br"), eleHead);
							}
							
							eleGlosGroup.appendChild(eleHead);
							
							var eleCopy = document.querySelector(".stsh_autoCopy_header");
							if (eleCopy)
							{
								insertBeforeElement(document.createElement("br"), eleCopy);
							}
						}
					}
				}
			}
		}
	
		var elesForm = document.querySelectorAll(".lbAction");
		for (var i = 0; i < elesForm.length; i++)
		{
			var eleForm = elesForm[i];
			var eleSubmit = eleForm.querySelector("input[type=submit]");
			if (eleSubmit != null)
			{
				addKeyCtrlEnter(eleForm, eleSubmit);
			}
		}
		
		var elesInputApprove = document.querySelectorAll(".suggestion_signature input[value~='APPROVE']");
		if (elesInputApprove.length > 0)
		{
			addKeyAlt(document, elesInputApprove[0], 219, "");					// [
			addKeyAlt(document, elesInputApprove[0], "BracketLeft", "");		// [
			//addKeyAlt(document, elesInputApprove[0], 0, "");					// [
			//addKeyAlt(document, elesInputApprove[0], 53, "");					// [
			addKeyAlt(document, elesInputApprove[0], 79, "");					// O
			addKeyAlt(document, elesInputApprove[0], 65, "");					// A
			
			disableAfterClick(elesInputApprove[0]);
		}
		
		var eleInputApproveNext = document.querySelector(".suggestion_signature input[value~='Next']");
		if (eleInputApproveNext)
		{
			eleInputApproveNext.value = "Next";
			
			if (!eleInputApproveNext.disabled)
			{
				addKeyAlt(document, eleInputApproveNext, 221, "");				// ]
				addKeyAlt(document, eleInputApproveNext, "BracketRight", "");	// ]
				//addKeyAlt(document, eleInputApproveNext, 188, "");			// ]
				//addKeyAlt(document, eleInputApproveNext, 173, "");			// ]
				//addKeyAlt(document, eleInputApproveNext, 169, "");			// ]
				addKeyAlt(document, eleInputApproveNext, 80, "");				// P
				addKeyAlt(document, eleInputApproveNext, 83, "");				// S
				
				if (elesInputApprove.length === 1)
				{
					addKeyCtrl(document, eleInputApproveNext, 45, "Ins");		// INS
				}
				else if (elesInputApprove.length > 1)
				{
					addKeyCtrl(document, elesInputApprove[0], 45, "Ins");		// INS
				}
				
				disableAfterClick(eleInputApproveNext);
			}
			else
			{
				if (elesInputApprove.length > 0)
				{
					addKeyAlt(document, elesInputApprove[0], 221, "");				// ]
					addKeyAlt(document, elesInputApprove[0], "BracketRight", "");	// ]
					//addKeyAlt(document, elesInputApprove[0], 188, "");			// ]
					//addKeyAlt(document, elesInputApprove[0], 173, "");			// ]
					//addKeyAlt(document, elesInputApprove[0], 169, "");			// ]
					addKeyAlt(document, elesInputApprove[0], 80, "");				// P
					addKeyAlt(document, elesInputApprove[0], 83, "");				// S
					addKeyCtrl(document, elesInputApprove[0], 45, "Ins");			// INS
				}
			}
		}
		
		var eleInputDecline = document.querySelector(".suggestion_signature input[value~='DECLINE']");
		if (eleInputDecline)
		{
			addKeyCtrl(document, eleInputDecline, 46, "Del");			// DEL
		}
		else
		{
			var eleReconsider = document.querySelector(".suggestion_status_approved > a, .suggestion_status_declined > a");
			if (eleReconsider)
			{
				if (eleReconsider.parentElement.classList.contains("suggestion_status_approved"))
				{
					eleReconsider.firstElementChild.textContent += " (Ctrl+Del)";
					
					addKeyCtrl(document, eleReconsider, 46, "");		// DEL
				}
				else
				{
					if (!eleReconsider.parentElement.parentElement.querySelector(".suggestion_signature .lbAction[name^='mymodcomment']"))
					{
						eleReconsider.firstElementChild.textContent += " (Ctrl+Ins)";
						
						addKeyAlt(document, eleReconsider, 221, "");	// ]
						addKeyAlt(document, eleReconsider, "BracketRight", "");	// ]
						addKeyAlt(document, eleReconsider, 80, "");		// P
						addKeyAlt(document, eleReconsider, 83, "");		// S
						addKeyCtrl(document, eleReconsider, 45, "");	// INS
					}
				}
			}
		}
		
		var inputDeclineNext = document.querySelector(".suggestion_signature input[value~='Next']:nth-child(5)");
		if (inputDeclineNext != null)
		{
			inputDeclineNext.value = "Next";
		}
		
		var elesTextRemoveComment = document.querySelectorAll(".stsh_text_removeComment");
		if (elesTextRemoveComment.length > 0)
		{
			var i = elesTextRemoveComment.length - 1;
			
			elesTextRemoveComment[i].firstElementChild.textContent += " (Ctrl+Bksp)";

			addKeyCtrl(document, elesTextRemoveComment[i], 8, "Bksp");		// Backspace
		}
		
		var inputPrev = document.querySelector("#suggestions_nav > input[value^='Prev']");
		if (inputPrev != null)
		{
			addKeyCtrl(document, inputPrev, 219, "[");				// [
			addKeyCtrl(document, inputPrev, "BracketLeft", "");		// [
			//addKeyCtrl(document, inputPrev, 0, "");				// [
			//addKeyCtrl(document, inputPrev, 53, "");				// [
			
			disableAfterClick(inputPrev);
		}
		
		var inputNext = document.querySelector("#suggestions_nav > input[value~='Next']");
		if (inputNext != null)
		{
			addKeyCtrl(document, inputNext, 221, "]");				// ]
			addKeyCtrl(document, inputNext, "BracketRight", "");	// ]
			//addKeyCtrl(document, inputNext, 188, "");				// ]
			//addKeyCtrl(document, inputNext, 173, "");				// ]
			//addKeyCtrl(document, inputNext, 169, "");				// ]
			
			disableAfterClick(inputNext);
		}
	
		// Check special chars
		{
			var h1s = document.querySelectorAll(".progress h1");
			if (h1s.length == 2)
			{
				var h1Org = h1s[0];
				var h1Trn = h1s[1];
				
				var tdOrg = document.querySelector(".stsh_text_org");
				var tdTrn = document.querySelector(".stsh_text_trn");
				
				if (tdOrg != null && tdTrn != null)
				{
					var strOrg = trimSpace(tdOrg.textContent);
					var strTrn = trimSpace(tdTrn.textContent);
					
					var statusTrnArr = checkSpecialCharMatched(strOrg, strTrn);
					var statusTrnMatched = statusTrnArr[0];
					var spOrg = statusTrnArr[1];
					var spTrn = statusTrnArr[2];
					
					if (spOrg > 0)
					{
						var spanSpOrg = document.createElement("span");
						spanSpOrg.id = "stsh_spanSpOrg";
						spanSpOrg.classList.add("stsh_blue");
						spanSpOrg.innerHTML = " SpecialChar: " + spOrg;
						h1Org.parentElement.appendChild(spanSpOrg);
					
						// Check chars in translated
						if (strTrn != "")
						{
							var spanSpTrn = document.createElement("span");
							spanSpTrn.id = "stsh_spanSpTrn";
							
							if (statusTrnMatched == 0)
							{
								spanSpTrn.classList.add("stsh_green");
							}
							else
							{
								spanSpTrn.classList.add("stsh_red");
							}
							
							var outputTrn = " SpecialChar: " + spTrn;
							if (statusTrnMatched == 0)
							{
								outputTrn += " (Matched)";
							}
							else if (statusTrnMatched == 1)
							{
								outputTrn += " (Order not matched)";
							}
							else
							{
								outputTrn += " (Not matched)";
							}
							
							spanSpTrn.innerHTML = outputTrn;
							h1Trn.parentElement.appendChild(spanSpTrn);
						}
						
						// Check chars in suggested
						var divSugs = document.querySelectorAll(".suggestion_text");
						for (var i = 0; i < divSugs.length; i++)
						{
							var divSug = divSugs[i];
							var strSug = trimSpace(divSug.textContent);
						
							var statusSugArr = checkSpecialCharMatched(strOrg, strSug);
							var statusSugMatched = statusSugArr[0];
							var spSug = statusSugArr[2];
							
							
							var spanSpSug = document.createElement("span");
							spanSpSug.classList.add("stsh_spanSpSug");
							
							if (statusSugMatched == 0)
							{
								spanSpSug.classList.add("stsh_green");
							}
							else
							{
								spanSpSug.classList.add("stsh_red");
							}
							
							var outputSug = " SpecialChar: " + spSug;
							if (statusSugMatched == 0)
							{
								outputSug += " (Matched)";
							}
							else if (statusSugMatched == 1)
							{
								outputSug += " (Order not matched)";
							}
							else
							{
								outputSug += " (Not matched)";
							}
							outputSug += " <br/><br/> ";
							
							spanSpSug.innerHTML = outputSug;
							
							divSug.insertBefore(spanSpSug, divSug.firstChild);
						}
					
					}
				}
			}
			
		}
	
		// Trim string in same token
		{
			var p = document.querySelector("#suggestionmain > div:nth-child(5) > p:nth-child(4)");
			if (p != null)
			{
				for (var i = 0; i < p.childNodes.length; i++)
				{
					child = p.childNodes[i];
					if (child.nodeName == "#text")
					{
						child.nodeValue = child.nodeValue.trim();
					}
				}
			}
		}
		
		// Display newlines and specialChars
		{
			var tdOrg = document.querySelector(".stsh_text_org");
			var tdTrn = document.querySelector(".stsh_text_trn");
			
			if (tdOrg != null && tdTrn != null)
			{
				
				var htmlOrg = tdOrg.innerHTML.trim();
				var htmlTrn = tdTrn.innerHTML.trim();
				
				if ((htmlOrg.indexOf("\n") > -1 || htmlOrg.indexOf("\\n") > -1
					|| htmlTrn.indexOf("\n") > -1 || htmlTrn.indexOf("\\n") > -1)
					/*&& htmlOrg.indexOf("<br") < 0
					&& htmlOrg.indexOf("<p") < 0 && htmlOrg.indexOf("<div") < 0 && htmlOrg.indexOf("<li") < 0*/)
				{
					var h2SugHeader = document.querySelector("#suggestionmain > div > h2");
					if (h2SugHeader != null)
					{
						var btn = document.createElement("input");
						btn.setAttribute("class", "stsh_btn_right");
						btn.setAttribute("type", "button");
						btn.setAttribute("value", "Display Newlines");
						
						h2SugHeader.appendChild(btn);
						
						function displayNewlines(ele)
						{
							if (ele != null)
							{
								ele.innerHTML = ele.innerHTML.trim()
									.replace(/\n/g,"\n<br>")
									.replace(/\\n/g," \\n<br>")
									.replace(/\\r \\n/g," \\r\\n<br>")
									.replace(/\<br\>[\s]+/g,"<br>&nbsp;");
							}
						}
				
						btn.addEventListener("click", function(e)
						{
							e.target.disabled = true;
							
							var tdOrg = document.querySelector(".stsh_text_org");
							var tdTrn = document.querySelector(".stsh_text_trn");
							displayNewlines(tdOrg);
							displayNewlines(tdTrn);
								
							var divSugs = document.querySelectorAll(".suggestion_text");
							for (var i = 0; i < divSugs.length; i++)
							{
								var divSug = divSugs[i];
								displayNewlines(divSug);
							}
							
							var textarea = document.querySelector("#suggestion_value_new");
							if (textarea != null)
							{
								textarea.focus();
							}
						});
					}
				}
				
				if (hasSpecialChar(htmlOrg) || hasSpecialChar(htmlTrn))
				{
					var h2SugHeader = document.querySelector("#suggestionmain > div > h2");
					if (h2SugHeader != null)
					{
						var btn = document.createElement("input");
						btn.setAttribute("class", "stsh_btn_right");
						btn.setAttribute("type", "button");
						btn.setAttribute("value", "Display SpecialChars");
						
						h2SugHeader.appendChild(btn);
						
						function replaceSpecialChars(str, unicodeNumber)
						{
							var rgx = new RegExp("\\u" + padZeroHex(unicodeNumber, 4), "g");
							return str.replace(rgx, '<span class="stsh_grey">[' + unicodeNumber + ']</span>');
						}
						
						function displaySpecialChars(ele)
						{
							if (ele != null)
							{
								var strInner = ele.innerHTML.trim();
								
								for (var i = 0; i < 32; i++)
								{
									if (hasSpecialChar(strInner))
									{
										if (isSpecialChar(i))
										{
											strInner = replaceSpecialChars(strInner, i);
										}
									}
									else
									{
										break;
									}
								}
								
								ele.innerHTML = strInner;
							}
						}
				
						btn.addEventListener("click", function(e)
						{
							e.target.disabled = true;
							
							var tdOrg = document.querySelector(".stsh_text_org");
							var tdTrn = document.querySelector(".stsh_text_trn");
							displaySpecialChars(tdOrg);
							displaySpecialChars(tdTrn);
								
							var divSugs = document.querySelectorAll(".suggestion_text");
							for (var i = 0; i < divSugs.length; i++)
							{
								var divSug = divSugs[i];
								displaySpecialChars(divSug);
							}
							
							var textarea = document.querySelector("#suggestion_value_new");
							if (textarea != null)
							{
								textarea.focus();
							}
						});
					}
				}
			}
		}
		
		// Open comment when decline
		{
			var countComment = 0;
			var elesComment = [];
			
			var countSug = document.querySelectorAll(".suggestions_list .suggestion").length;
			var countSugDeclined = document.querySelectorAll(
				".suggestions_list span[class='suggestion_status_declined']").length;
			
			if (countSug == countSugDeclined)
			{
				var elesSugA = document.querySelectorAll(".suggestions_list span[class^='suggestion_status_'] a");
				for (var i = 0; i < elesSugA.length; i++)
				{
					var eleComment = elesSugA[i].parentElement.parentElement.nextSibling;
					if (eleComment.nodeName == "DIV" && eleComment.classList.contains("copy"))
					{
						if (elesSugA[i].parentElement.classList.contains("suggestion_status_declined"))
						{
							countComment++;
							elesComment.push(eleComment);
						}
					}
				}
				
				if (countComment == elesSugA.length)
				{
					var isFocus = false;
					for (var i = 0; i < elesComment.length; i++)
					{
						elesComment[i].style.display = "block";
						if (!isFocus)
						{
							var eleTxt = elesComment[i].querySelector("textarea[name='suggestion_comment']");
							if (eleTxt)
							{
								eleTxt.focus();
								
								// Auto paste last comment
								{
									var eleTextOrg = document.querySelector(".stsh_text_org");
									if (eleTextOrg)
									{
										var textOrg = trimSpace(eleTextOrg.innerHTML).substr(0, 1000).toLowerCase();
										if (textOrg == GM_getValue("textLastOrg_Comment", ""))
										{
											var textLastCur = GM_getValue("textLastCur_Comment", "");
											if (textLastCur != "")
											{
												eleTxt.value = textLastCur;
											}
											
											setTimeoutCustom(function(ele)
											{
												if (ele)
												{
													var textLastCur = GM_getValue("textLastCur_Comment", "");
													if (textLastCur != "")
													{
														ele.value = textLastCur;
														
														//ele.selectionStart = 0;
														//ele.selectionEnd = ele.value.length;
													}
												}
											}, 250, eleTxt);
										}
									}
								}
								
								var eleSugOuter = elesComment[i].parentElement.parentElement.parentElement.parentElement;
								if (eleSugOuter.classList.contains("suggestion"))
								{
									var eleOnion = eleSugOuter.querySelector(".suggestion_text font[style='color:#01ec00;']");
									if (eleOnion != null)
									{
										eleTxt.value = "onion";
									}
								}
			
								var eleSugComment = elesComment[i].parentElement
									.parentElement.parentElement.querySelector(".stsh_text_comment font");
								if (eleSugComment != null && eleSugComment.textContent.trim() ==
									"ATTENTION - English string was updated. This suggestion might be outdated.")
								{
									eleTxt.value = "outdated";
								}
								
								isFocus = true;
							}
						}
					}
				}
			}
		}
		
		// Convert time
		{
			var rgxTime = /\d{2}-\d{2}-\d{4}, \d{2}:\d{2} [AP]M/;
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			
			var eleFriends = document.querySelectorAll(".friend_block_avatar, .friend_block_discussions");
			for (var i = 0; i < eleFriends.length; i++)
			{
				var nodes = [];
				
				if (eleFriends[i].classList.contains("friend_block_avatar"))
				{
					nodes = eleFriends[i].childNodes;
				}
				else if (eleFriends[i].classList.contains("friend_block_discussions"))
				{
					nodes = eleFriends[i].parentElement.nextElementSibling.childNodes[2].childNodes;
				}
				
				for (var j = 0; j < nodes.length; j++)
				{
					var nodeVal = nodes[j].nodeValue;
					if (nodeVal != null)
					{
						var dateTimes = rgxTime.exec(nodeVal);
						if (dateTimes != null)
						{
							var dateTime = dateTimes[0];
							var month = dateTime.substr(0, 2);
							var day = dateTime.substr(3, 2);
							var year = dateTime.substr(6, 4);
							var hour = dateTime.substr(12, 2);
							var minute = dateTime.substr(15, 2);
							var period = dateTime.substr(18, 2);
							if (period == "AM")
							{
								if (hour == "12")
								{
									hour = "00"
								}
							}
							else if (period == "PM")
							{
								hour = parseInt(hour) + 12;
								if (hour == 24)
								{
									hour = 12;
								}
							}
							
							var dateTimeStd = year + "-" + month + "-" + day;
									
							if (isDstUsa(year, month, day, hour))
							{
								dateTimeStd += "T" + hour + ":" + minute + ":00-0700";
							}
							else
							{
								dateTimeStd += "T" + hour + ":" + minute + ":00-0800";
							}
							
							var dateStd = new Date(dateTimeStd);
							if (dateStd.toLocaleString() != "Invalid Date")
							{
								var gmt = dateStd.getTimezoneOffset() / 60 * -1;
								var gmtStr = " GMT";
								if (gmt > 0)
								{
									gmtStr += "+" + gmt;
								}
								else if (gmt < 0)
								{
									gmtStr += "" + gmt;
								}
								var dateNew = dateStd.getDate()
									+ " " + months[dateStd.getMonth()]
									+ " " + dateStd.getFullYear()
									+ ", " + padZero(dateStd.getHours(), 2)
									+ ":" + padZero(dateStd.getMinutes(), 2)
									+ gmtStr;
								
								//console.log("Time: " + dateTimeStd);
								//console.log("Time: " + dateTime + " -> " + dateNew);
									
								//var dateNew2 = dateStd.toLocaleString() + gmtStr;
								//console.log("Time: " + dateTime + " -> " + dateNew2);
								
								var nodeValBegin = nodeVal.substr(0, nodeVal.indexOf(dateTime));
								var nodeValEnd = nodeVal.substr(nodeVal.indexOf(dateTime) + dateTime.length);
								
								nodes[j].nodeValue = nodeValBegin;
								
								var ele = document.createElement("span");
								ele.classList.add("stsh_time_convert");
								ele.setAttribute("title", dateTime);
								ele.textContent = dateNew;
								insertAfterElement(ele, nodes[j]);
								
								if (nodeValEnd != "")
								{
									insertAfterElement(document.createTextNode(nodeValEnd), ele);
								}
							}
							else
							{
								console.log("Invalid Date: " + dateTimeStd);
							}
						}
					}
				}
			}
			
		}
		
		// Add Steam profile links
		{
			var eleSpans = document.querySelectorAll("span[title='Send this user a private message']");
			for (var i = 0; i < eleSpans.length; i++)
			{
				var href = eleSpans[i].parentElement.firstElementChild.getAttribute("href");
				if (href != null && href.indexOf("user_activity.php?user=") == 0)
				{
					var profile = href.replace("user_activity.php?user=", "");
					var ele = document.createElement("a");
					ele.classList.add("stsh_steamProfile");
					ele.setAttribute("target", "_blank");
					ele.setAttribute("title", "View Steam profile");
					ele.setAttribute("href", "http://steamcommunity.com/profiles/" + profile);
					ele.textContent = " Steam ";
					
					insertBeforeElement(ele, eleSpans[i]);
				}
			}
		}
		
		// Add auto approve
		{
			if (elesInputApprove.length > 0)
			{
				var eleInput = document.createElement("input");
				eleInput.id = "stsh_autoApprove";
				eleInput.setAttribute("type", "checkbox");
				eleInput.setAttribute("value", "auto");
				eleInput.textContent = "";
				
				var eleLabel = document.createElement("label");
				eleLabel.classList.add("stsh_autoApprove_label");
				eleLabel.classList.add("stsh_unselectable");
				eleLabel.setAttribute("for", "stsh_autoApprove");
				eleLabel.setAttribute("title", "Please use with care!");
				eleLabel.textContent = " Auto Approve Next ";
				
				elesInputApprove[0].parentElement.appendChild(eleInput);
				elesInputApprove[0].parentElement.appendChild(eleLabel);
				
				function autoApprove()
				{
					var tm = 2000;
					console.log("AutoApprove: Next in " + tm + "ms");
					setTimeoutCustom(function ()
					{
						var eleCheck = document.querySelector("#stsh_autoApprove");
						if (eleCheck != null && eleCheck.checked)
						{
							var isClicked = false;
							
							var ele = document.querySelector(".suggestion_signature input[value~='Next']");
							
							if (ele != null && !ele.disabled && isVisible())
							{
								var isOutdated = false;
								var eleSugComment = ele.parentElement
									.parentElement.parentElement.querySelector(".stsh_text_comment font");
								if (eleSugComment != null && eleSugComment.textContent.trim() ==
									"ATTENTION - English string was updated. This suggestion might be outdated.")
								{
									isOutdated = true;
								}
								
								if (!isOutdated)
								{
									isClicked = true;
									GM_setValue("timeAutoApproveLast", getUnixTimestamp());
									ele.click();
								}
							}
							
							if (!isClicked)
							{
								eleCheck.checked = false;
								GM_setValue("isAutoApprove", "false");
							}
						}
					}, tm);
				}
				
				var tmDiff = getUnixTimestamp() - GM_getValue("timeAutoApproveLast", 0);
				if (tmDiff > 10)
				{
					// > 10s
					eleInput.checked = false;
					GM_setValue("isAutoApprove", "false");
				}
				
				if (window !== window.parent)
				{
					var eleOuter = window.parent.document.querySelector("#suggestions_box_outer");
					if (eleOuter != null)
					{
						if (eleOuter.style.display == "none")
						{
							// Closed iFrame
							eleInput.checked = false;
							GM_setValue("isAutoApprove", "false");
						}
					}
				}
						
				if (GM_getValue("isAutoApprove", 0) == "true")
				{
					eleInput.checked = true;
					autoApprove();
				}

				eleInput.addEventListener("click", function (e)
				{
					var ele = e.target;
					if (ele.checked)
					{
						GM_setValue("isAutoApprove", "true");
						autoApprove();
					}
					else
					{
						GM_setValue("isAutoApprove", "false");
					}
				});
			}
		}
		
		// Add auto decline - because Minh fukt shit up
		{
			if (elesInputApprove.length > 0)
			{
				var eleInput = document.createElement("input");
				eleInput.id = "stsh_autoDecline";
				eleInput.setAttribute("type", "checkbox");
				eleInput.setAttribute("value", "auto");
				eleInput.textContent = "";
				
				var eleLabel = document.createElement("label");
				eleLabel.classList.add("stsh_autoDecline_label");
				eleLabel.classList.add("stsh_unselectable");
				eleLabel.setAttribute("for", "stsh_autoDecline");
				eleLabel.setAttribute("title", "Please use with care!");
				eleLabel.textContent = " Decline Train ";
				
				elesInputApprove[0].parentElement.appendChild(eleInput);
				elesInputApprove[0].parentElement.appendChild(eleLabel);
				
				function AutoDecline()
				{
					var tm = 2000;
					console.log("AutoDecline: Next in " + tm + "ms");
					setTimeoutCustom(function ()
					{
						var eleCheck = document.querySelector("#stsh_autoDecline");
						if (eleCheck != null && eleCheck.checked)
						{
							var isClicked = false;
							
							var ele = document.querySelector(".suggestion_signature input[value~='Next']:nth-child(5)");
							
							if (ele != null && !ele.disabled && isVisible())
							{
								var isOutdated = false;
								var eleSugComment = ele.parentElement
									.parentElement.parentElement.querySelector(".stsh_text_comment font");
								if (eleSugComment != null && eleSugComment.textContent.trim() ==
									"ATTENTION - English string was updated. This suggestion might be outdated.")
								{
									isOutdated = true;
								}
								
								if (!isOutdated)
								{
									isClicked = true;
									GM_setValue("timeAutoDeclineLast", getUnixTimestamp());
									ele.click();
								}
							}
							
							if (!isClicked)
							{
								eleCheck.checked = false;
								GM_setValue("isAutoDecline", "false");
							}
						}
					}, tm);
				}
				
				var tmDiff = getUnixTimestamp() - GM_getValue("timeAutoDeclineLast", 0);
				if (tmDiff > 10)
				{
					// > 10s
					eleInput.checked = false;
					GM_setValue("isAutoDecline", "false");
				}
				
				if (window !== window.parent)
				{
					var eleOuter = window.parent.document.querySelector("#suggestions_box_outer");
					if (eleOuter != null)
					{
						if (eleOuter.style.display == "none")
						{
							// Closed iFrame
							eleInput.checked = false;
							GM_setValue("isAutoDecline", "false");
						}
					}
				}
						
				if (GM_getValue("isAutoDecline", 0) == "true")
				{
					eleInput.checked = true;
					AutoDecline();
				}

				eleInput.addEventListener("click", function (e)
				{
					var ele = e.target;
					if (ele.checked)
					{
						GM_setValue("isAutoDecline", "true");
						AutoDecline();
					}
					else
					{
						GM_setValue("isAutoDecline", "false");
					}
				});
			}
		}

		// Warn when remove
		{
			var elesRemove = document.querySelectorAll(".suggestion_signature input[value='REMOVE']");
			for (var i = 0; i < elesRemove.length; i++)
			{
				var oldClick = elesRemove[i].getAttribute("onclick");
				if (oldClick != null && oldClick.indexOf("location.href") == 0)
				{
					var eleSug = elesRemove[i].parentElement.parentElement.parentElement.parentElement;
					if (eleSug.classList.contains("suggestion"))
					{
						var eleOnion = eleSug.querySelector(".suggestion_text font[style='color:#01ec00;']");
						if (eleOnion != null)
						{
							var newClick = "if (!confirm(\"Warning: You will delete your onion. Press Cancel to go back.\")) return false; "
								+ oldClick;
							elesRemove[i].setAttribute("onclick", newClick);
							elesRemove[i].setAttribute("title", "Do not remove your onion!");
							elesRemove[i].style.color = "#777";
							elesRemove[i].style.cursor = "not-allowed";
						}
						else
						{
							var eleComment = elesRemove[i].previousElementSibling.previousElementSibling;
							if (eleComment != null)
							{
								if (eleComment.textContent.trim().indexOf("Comment:") == 0)
								{
									var newClick = "if (!confirm(\"Warning: You should not remove this suggestion. Press OK if you really want.\")) return false; "
										+ oldClick;
									elesRemove[i].setAttribute("onclick", newClick);
									elesRemove[i].setAttribute("title", "Your suggestion that has a comment!");
									elesRemove[i].style.color = "#777";
									elesRemove[i].style.cursor = "not-allowed";
								}
							}
						}
					}
				}
			}
		}
		
		// Clean language markers that link to Steam
		{
			var rgxLang = /\?l=[a-z]+$/i;
			
			var elesFriend = document.querySelectorAll(".friend_block_discussions");
			for (var i = 0; i < elesFriend.length; i++)
			{
				var eleDiscuss = elesFriend[i].parentElement.nextElementSibling;
				if (eleDiscuss.querySelector("font[style='color:#EDB687;']") == null)
				{
					var elesA = eleDiscuss.querySelectorAll("a[href*='steam']");
					for (var j = 0; j < elesA.length; j++)
					{
						var href = elesA[j].getAttribute("href");
						if (rgxLang.test(href))
						{
							elesA[j].setAttribute("href", href.replace(rgxLang, ""));
						}
					}
				}
			}
		}
		
		// Auto paste last suggestion
		{
			if (!/edit/i.test(getQueryByName("action")))
			{
				var eleTextOrg = document.querySelector(".stsh_text_org");
				if (eleTextOrg)
				{
					var textOrg = trimSpace(eleTextOrg.innerHTML).toLowerCase();
					if (textOrg == GM_getValue("textLastOrg", ""))
					{
						var eleTextCur = document.querySelector("#suggestion_value_new");
						if (eleTextCur)
						{
							var textLastCur = GM_getValue("textLastCur", "");
							if (textLastCur != "")
							{
								eleTextCur.value = textLastCur;
							}
						}
						
						setTimeoutCustom(function()
						{
							var eleTextCur = document.querySelector("#suggestion_value_new");
							if (eleTextCur)
							{
								var textLastCur = GM_getValue("textLastCur", "");
								if (textLastCur != "")
								{
									eleTextCur.value = textLastCur;
								}
							}
						}, 250);
					}
				}
			}
			
			var elesTextSubmit = document.querySelectorAll(".stsh_text_submit, #stsh_submit_suggestion_next");
			for (var i = 0; i < elesTextSubmit.length; i++)
			{
				elesTextSubmit[i].addEventListener("click", function()
				{
					var eleTextOrg = document.querySelector(".stsh_text_org");
					if (eleTextOrg)
					{
						var textOrg = trimSpace(eleTextOrg.innerHTML);
						if (textOrg.length < 1000)
						{
							var eleTextCur = document.querySelector("#suggestion_value_new");
							if (eleTextCur)
							{
								var textCur = eleTextCur.value;
								
								GM_setValue("textLastOrg", textOrg.toLowerCase());
								GM_setValue("textLastCur", textCur);
							}
						}
					}
				});
			}
		}
		
		// Auto store last comment
		{
			//console.log("textLastOrg_Comment: " + GM_getValue("textLastOrg_Comment", ""));
			//console.log("textLastCur_Comment: " + GM_getValue("textLastCur_Comment", ""));
			
			function storeLastComment(eleTextComment, isRemoved)
			{
				if (eleTextComment)
				{
					var eleTextOrg = document.querySelector(".stsh_text_org");
					if (eleTextOrg)
					{
						var textOrg = trimSpace(eleTextOrg.innerHTML).substr(0, 1000).toLowerCase();
						
						if (isRemoved)
						{
							if (textOrg == GM_getValue("textLastOrg_Comment", ""))
							{
								// When remove comment, don't store if original text is the same
								return;
							}
						}
					
						var textCur = trimSpace(eleTextComment.value || eleTextComment.textContent);
						if (textCur !== "outdated")
						{
							GM_setValue("textLastOrg_Comment", textOrg);
							GM_setValue("textLastCur_Comment", textCur);
						}
					}
				}
			}
			
			var elesTextRemoveComment = document.querySelectorAll(".stsh_text_removeComment");
			for (var i = 0; i < elesTextRemoveComment.length; i++)
			{
				elesTextRemoveComment[i].addEventListener("click", function(ev)
				{
					var target = null;
					if (ev.target.tagName === "FONT")
					{
						target = ev.target.parentElement;
					}
					else
					{
						target = ev.target;
					}
					
					var eleTextComment = target
						.parentElement.parentElement.parentElement.parentElement
						.querySelector(".stsh_text_comment");
					
					storeLastComment(eleTextComment, true);
				});
			}
			
			var elesSubmitComment = document.querySelectorAll(".stsh_submit_comment");
			for (var i = 0; i < elesSubmitComment.length; i++)
			{
				elesSubmitComment[i].addEventListener("click", function(ev)
				{
					var eleTextComment = ev.target.previousElementSibling;
						
					storeLastComment(eleTextComment, false);
				});
			}
		}
		
		// Mark showing
		{
			var eleStatus = parent.document.querySelector("#stsh_showing_random");
			if (eleStatus)
			{
				eleStatus.dataset.random = randNum(100000, 999999);
			}
		}
		
		// Delta
		{
			var eleFile = document.querySelector(".stsh_info_file");
			if (eleFile)
			{
				if (eleFile.textContent.trim() === "steam/delta")
				{
					document.body.classList.add("stsh_delta");
				}
			}
		}
		
		// Clean link remove my comment
		{
			var elesRemoveMyComment = document.querySelectorAll(".suggestion_signature .lbAction[name^='myFrm'] a[onclick*='.submit()']");
			for (var i = 0; i < elesRemoveMyComment.length; i++)
			{
				elesRemoveMyComment[i].removeAttribute("href");
				elesRemoveMyComment[i].classList.add("stsh_text_removeMyComment");
			}
		}
		
		// Hide cursor when typing
		{
			if (eleTextNew)
			{
				var eleTarget = eleTextNew;
				
				var tmTextChange = 0;
				eleTarget.addEventListener("input", function()
				{
					eleTarget.style.setProperty("cursor", "none", "important");
					
					clearTimeout(tmTextChange);
					tmTextChange = setTimeout(function(eleTarget)
					{
						eleTarget.style.setProperty("cursor", "auto", "important");
					}, 3000, eleTarget);
				});
				
				eleTarget.addEventListener("mousemove", function()
				{
					clearTimeout(tmTextChange);
					eleTarget.style.setProperty("cursor", "auto", "important");
				});
			}
		}
		
		// Auto expand textarea when typing
		{
			function autoExpandTextarea(ele, maxHeight)
			{
				if (ele)
				{
					function autoExpandEvent(ev)
					{
						var ele = ev.target;
						var maxHeight = ele.param_MaxHeight;
						var styleHeight = parseInt(ele.style.height) || parseInt(window.getComputedStyle(ele).height) || maxHeight;
						
						var heightDiff = ele.scrollHeight - styleHeight;
						
						//console.log("ele.scrollHeight:"+ele.scrollHeight+", styleHeight:"+styleHeight+", heightDiff:"+heightDiff);
						
						if (heightDiff > 4 && heightDiff < 30 && ele.scrollHeight < maxHeight)
						{
							ele.style.height = ele.scrollHeight + "px";
						}
					}
					
					ele.param_MaxHeight = maxHeight;
					ele.addEventListener("input", autoExpandEvent);
					ele.addEventListener("keyup", autoExpandEvent);
				}
			}
			
			var elesTextarea = document.querySelectorAll("textarea");
			for (var i = 0; i < elesTextarea.length; i++)
			{
				autoExpandTextarea(elesTextarea[i], 500);
			}
		}
		
		// Focus on mod action
		{
			var elesEdit = document.querySelectorAll("input[value='Edit']");
			if (elesEdit.length > 2)
			{
				setTimeoutCustom(function()
				{
					if (/reconsider|approve|decline/.test(getQueryByName("action")))
					{
						scrollToElement(".suggestions_list", -200);
					}
				}, 200);
			}
		}
		
	} // End suggestions.php

	if (url.indexOf("translate.php") > -1)
	{
		var searchText = getQueryByName("search_input");
		if (searchText != "")
		{
			document.title = searchText + " - " + document.title;
		}
		else
		{
			var fileID = getQueryByName("file_ID");
			if (fileID != "")
			{
				var eleFile = document.querySelector("#leftAreaContainer label[for='chosenfile']");
				if (eleFile != null)
				{
					var file = eleFile.textContent.trim();
					if (file.indexOf("Limit search results to CURRENT FILE: ") == 0)
					{
						file = file.replace("Limit search results to CURRENT FILE: ", "");
						var fileNew = file.split("#").reverse().join(" # ").trim();
						document.title = fileNew + " - " + document.title;
					}
				}
			}
			else
			{
				var eleInput = document.querySelector("#search_input");
				if (eleInput != null)
				{
					var valInput = eleInput.value.trim();
					if (valInput.indexOf("SUGGESTIONS FROM: ") == 0)
					{
						document.title = valInput.replace("SUGGESTIONS FROM: ", "") + " - " + document.title;
					}
				}
			}
		}
	
		var outer = document.getElementById("suggestions_box_outer");
		if (outer != null)
		{
			outer.setAttribute("onclick","hideSuggestionsBox();");
		}
	
		var divBtn = document.createElement("div");
		document.body.appendChild(divBtn);
		divBtn.innerHTML = ' \
<div class="stsh_showing_group"> \
	<span class="stsh_showing_header">Hide</span>\
	<br/> &nbsp; <input id="stsh_showing_keyApp" value="App" class="stsh_btn_short" type="button" /> \
	<input id="stsh_showing_keyGame" value="Game" class="stsh_btn_short" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_keyFaq" value="FAQ" class="stsh_btn_short" type="button" /> \
	<input id="stsh_showing_keySupport" value="Support" class="stsh_btn_short" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_keyPromo" value="Promo" class="stsh_btn_short" type="button" /> \
	<input id="stsh_showing_keyEmail" value="Email" class="stsh_btn_short" type="button" /> \
	<br/> \
	<br/> &nbsp; <input id="stsh_showing_strNotMatch" value="Hide not similar" class="stsh_btn_long" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_strLong" value="Hide very long" class="stsh_btn_long" type="button" /> \
	 \
	<br/> &nbsp; <span class="stsh_showing_header">Hide Suggestions</span>\
	<br/> &nbsp; <input id="stsh_showing_notTranslated" value="Not Translated (0)" class="stsh_btn_long" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_suggested" value="Suggested (0)" class="stsh_btn_long" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_resuggested" value="Resuggested (0)" class="stsh_btn_long" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_approved" value="Approved (0)" class="stsh_btn_long" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_declined" value="Declined (0)" class="stsh_btn_long" type="button" /> \
	<br/> &nbsp; <input id="stsh_showing_translated" value="Translated (0)" class="stsh_btn_long" type="button" /> \
	 \
	<br/> &nbsp; <span class="stsh_showing_header">Sort by</span>\
	<br/> &nbsp; <input id="stsh_sort_key" value="Key" class="stsh_btn_short" type="button" /> \
	<input id="stsh_sort_string" value="String" class="stsh_btn_short" type="button" /> \
	<br/> &nbsp; <input  id="stsh_sort_word" value="Word" class="stsh_btn_short" type="button" /> \
	<input  id="stsh_sort_length" value="Length" class="stsh_btn_short" type="button" /> \
	<br/> \
	<br/> &nbsp; <input id="stsh_showing_refresh" value="Refresh" class="stsh_btn" type="button" onclick="hideSuggestionsBox(); return false;" /> \
	<br/> &nbsp; <input id="stsh_showing_all" value="Show All" class="stsh_btn" type="button" /> \
</div> \
<div id="stsh_showing_current"></div> \
<div id="stsh_showing"></div> \
';

		// Count showing
		function countShowing()
		{			
			var trKeys = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr");
			var countAll = document.querySelectorAll("#keylist .copysmall").length;
			var countShow = 0;
			var countSuggest = 0;
			var countResuggest = 0;
			var countApprove = 0;
			var countDecline = 0;
			var countNotTranslated = 0;
			var countTranslated = 0;
			
			var txtApprove = "ready for Admin";
			var txtDecline = "ready for removal";
			var txtSuggest = "suggestion";
			
			for (var i = 0; i < trKeys.length; i++)
			{
				if (!trKeys[i].classList.contains("stsh_hidden"))
				{
					var eleCounter = trKeys[i].querySelector("tr.copysmall > td:nth-child(3)");
					if (eleCounter != null)
					{
						countShow++;
						var txtCounter = eleCounter.textContent.trim();
						if (txtCounter.indexOf(txtApprove) > -1)
						{
							countApprove++;
						}
						else if (txtCounter.indexOf(txtDecline) > -1)
						{
							countDecline++;
						}
						else if (txtCounter.indexOf(txtSuggest) > -1)
						{
							var eleNotTranslated = trKeys[i].querySelector("span.token_nottranslated");
							if (eleNotTranslated != null)
							{
								countSuggest++;
							}
							else
							{
								countResuggest++;
							}
						}
						else
						{
							var eleNotTranslated = trKeys[i].querySelector("span.token_nottranslated");
							if (eleNotTranslated != null)
							{
								countNotTranslated++;
							}
							else
							{
								countTranslated++;
							}
						}
					}
					else
					{
						var eleTd = trKeys[i].querySelector("td");
						if (eleTd != null)
						{
							if (eleTd.textContent.trim() == "")
							{
								trKeys[i].parentElement.removeChild(trKeys[i]);
							}
						}
					}
				}
			}
			
			var eleShowing = document.getElementById("stsh_showing");
			if (eleShowing != null)
			{
				var newHtml = "Showing: <span class=\"stsh_showing_counter\">" + countShow + " of " + countAll + "</span>"
					+ "<!-- " + countNotTranslated + ", " + countSuggest + ", " + countResuggest
					+ ", " + countApprove + ", " + countDecline + ", " + countTranslated + " -->";
					
				if (eleShowing.innerHTML != newHtml)
				{
					eleShowing.innerHTML = newHtml;

					var elesBtnShowing = document.querySelectorAll("#stsh_showing_notTranslated, #stsh_showing_suggested, #stsh_showing_resuggested"
						+ ", #stsh_showing_approved, #stsh_showing_declined, #stsh_showing_translated");
					if (elesBtnShowing.length == 6)
					{
						var counterArr = [countNotTranslated, countSuggest, countResuggest, countApprove, countDecline, countTranslated ];
						var counterTextArr = ["Not Translated", "Suggested", "Resuggested"
							, "Approved", "Declined", "Translated" ];

						for (var i = 0; i < elesBtnShowing.length; i++)
						{
							elesBtnShowing[i].value = counterTextArr[i] + " ("+ counterArr[i] +")" ;
						};
					}
				}
			}
			
			var eleShowingCur = document.getElementById("stsh_showing_current");
			if (eleShowingCur != null)
			{
				var eleOuter = document.getElementById("suggestions_box_outer");
				if (eleOuter != null)
				{
					if (eleOuter.style.display != "none")
					{
						if (eleShowingCur.style.display != "initial")
							eleShowingCur.style.display = "initial";
						
						var eleIframe = document.getElementById("suggestions_iframe");
						if (eleIframe)
						{
							var iUrl = eleIframe.contentWindow.location.href;
							var listId = parseInt(getQueryByName("list_id", iUrl)) || 0;
							
							listId += 1;
							
							var newHtml = "Current: <span class=\"stsh_showing_counter\">" + listId + " of " + countShow + "</span>";
							if (eleShowingCur.innerHTML != newHtml)
							{
								eleShowingCur.innerHTML = newHtml;
							}
						}
					}
					else
					{
						if (eleShowingCur.style.display != "none")
						{
							eleShowingCur.style.display = "none";
							eleShowingCur.innerHTML = "";
						}
					}
				}
			}
		}
		countShowing();
		
		var obTargetCount = document.getElementById("keylist_container");
		if (obTargetCount)
		{
			var tmObCount = -1;
			var obMuCount = new MutationObserver(function(mutations)
			{
				mutations.forEach(function(mutation)
				{
					if (mutation.type !== "attributes"
						|| mutation.target.tagName === "TR")
					{
						clearTimeout(tmObCount);
						tmObCount = setTimeout(function(mutation)
						{
							countShowing();
							//console.log("countShowing: " + tmObCount);
						}, 50, mutation);
					}
				});
			});
			
			var obConfigCount = { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] };
			obMuCount.observe(obTargetCount, obConfigCount);
		}
		
		{
			var obMuCountRand = new MutationObserver(function(mutations)
			{
				mutations.forEach(function(mutation)
				{
					countShowing();
				});
			});
			
			var eleCountRand = document.createElement("div");
			eleCountRand.id = "stsh_showing_random";
			eleCountRand.dataset.random = "0";
			document.body.appendChild(eleCountRand);

			var obConfigCountRand = { attributes: true, attributeFilter: ["data-random"] };
			obMuCountRand.observe(eleCountRand, obConfigCountRand);
		}
		
		// End Count showing

		// Line Counter
		function addLineCounter()
		{
			var elesCounter = document.querySelectorAll(".stsh_lineCounter");
			if (elesCounter.length > 0)
			{
				var j = 1;
				for (var i = 0; i < elesCounter.length; i++)
				{
					if (!elesCounter[i].parentElement.parentElement.parentElement
						.parentElement.classList.contains("stsh_hidden"))
					{
						if (elesCounter[i].textContent.trim() != j)
						{
							elesCounter[i].textContent = j;
						}
						j++;
					}
				}
			}
			else
			{
				var elesDiv = document.querySelectorAll("#keylist td:nth-child(1) > div");
				for (var i = 0; i < elesDiv.length; i++)
				{
					var eleNew = document.createElement("span");
					eleNew.classList.add("stsh_lineCounter_outer");
					eleNew.innerHTML =
						'   <span class="stsh_lineCounter"> '
						+ (i + 1)
						+ ' </span> ';
					
					elesDiv[i].appendChild(eleNew);
				}
			}
		}
		addLineCounter();
		
		var obTargetLine = document.getElementById("keylist_container");
		if (obTargetLine)
		{
			var tmObLine = -1;
			var obMuLine = new MutationObserver(function(mutations)
			{
				mutations.forEach(function(mutation)
				{
					if (mutation.type !== "attributes"
						|| mutation.target.tagName === "TR")
					{
						clearTimeout(tmObLine);
						tmObLine = setTimeout(function(mutation)
						{
							addLineCounter();
							//console.log("addLineCounter: " + tmObLine);
						}, 50, mutation);
					}
				});
			});
			
			var obConfigLine = { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] };
			obMuLine.observe(obTargetLine, obConfigLine);
		}
		
		// End Line Counter
		
		// Hide & sort suggestions
		{
			function hideSuggestions(mode)
			{
				// mode: 0-5 (0: "Not Translated", 1: "Suggested", 2: "Resuggested", 3: "Approved", 4: "Declined", 5: "Translated")

				if (!isVisible()) return;
			
				if (mode < 0 || mode > 5) return;

				var display = "none";
				var txtApprove = "ready for Admin";
				var txtDecline = "ready for removal";
				var txtSuggest = "suggestion";
				 
				var trKeys = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr");
				for (var i = 0; i < trKeys.length; i++)
				{
					if (!trKeys[i].classList.contains("stsh_hidden"))
					{
						var curMode = -1;

						var eleCounter = trKeys[i].querySelector("tr.copysmall > td:nth-child(3)");
						if (eleCounter != null)
						{

							var txtCounter = eleCounter.textContent.trim();
							if (txtCounter.indexOf(txtApprove) > -1)
							{
								curMode = 3;	// Approved
							}
							else if (txtCounter.indexOf(txtDecline) > -1)
							{
								curMode = 4;	// Declined
							}
							else if (txtCounter.indexOf(txtSuggest) > -1)
							{
								var eleNotTranslated = trKeys[i].querySelector("span.token_nottranslated");
								if (eleNotTranslated != null)
								{
									curMode = 1;	// Suggested
								}
								else
								{
									curMode = 2;	// Resuggested
								}
							}
							else
							{
								var eleNotTranslated = trKeys[i].querySelector("span.token_nottranslated");
								if (eleNotTranslated != null)
								{
									curMode = 0;	// Not Translated
								}
								else
								{
									curMode = 5;	// Translated
								}
							}
						}

						if (curMode == mode)
						{
							trKeys[i].classList.add("stsh_hidden");
						}
					}
				}
			}
			
			function sortKey(mode)
			{
				/*
					mode:
						0: key
						1: string
						2: word
						3: length
				*/
				if (!isVisible()) return;
				
				var keyArr = new Array();
				var valArr = new Array();
				
				var dot = "...";
				var dotLengthMinus = 0 - dot.length;
				var strNotTranslated = "NOT TRANSLATED";
				var strTr = "";
				
				var eleKeys = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr > td:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)");
				for (var i = 0; i < eleKeys.length; i++)
				{
					try
					{
						/*
							key:
								tr: is translated
								sg: is suggested
								dt: has dot
								sb: spacebar count
								sc: special char count
								sp: has special char
								ln: length
								lt: length translated
								st: spacebar count translated
						*/
						
						var dot = "...";
						var dotLengthMinus = 0 - dot.length;
						var isDot = false;
						var isSuggested = false;
						var isTranslated = false;
						
						var key = eleKeys[i].textContent.trim() + "  ";
						var str = "";
						
						if (mode !== 0)
						{
							str = eleKeys[i].parentElement.nextSibling.nextSibling.firstElementChild.textContent.trim();
							isDot = (str.substr(dotLengthMinus) === dot);
							
							isSuggested = (eleKeys[i].nextElementSibling.nextElementSibling.textContent.trim() !== "");
							strTr = eleKeys[i].parentElement.nextElementSibling.lastElementChild.textContent.trim();
							isTranslated = (strTr !== strNotTranslated);
						}
						
						if (mode === 0)
						{
							// mode: key
							if (key.indexOf("GLOSSARY") === 0)
							{
								key = "0" + key;
							}
						}
						if (mode === 1)
						{
							// mode: string
							key = (isTranslated ? "tr00_ " : "tr99_ ") + strTr + (isSuggested ? "  _sg00" : "  _sg99") + " ___ " + key;
							key = str + "  ___ " + key;
						}
						else if (mode === 2)
						{
							// mode: word
							key = (isTranslated ? "tr00_" : "tr99_") + "st" + padZero(strTr.split(" ").length, 2) + "_"
								+ "lt" + padZero(strTr.length, 3) + " " 
								+ strTr + (isSuggested ? "  _sg00" : "  _sg99") + " ___ " + key;
							key = (isDot ? "dt99_" : "dt00_")
								+ "sb" + padZero(str.split(" ").length, 2) + "_sc" + padZero(str.split(/[^a-z0-9 ]/i).length, 2)
								+ " ___ " + str + "  ___ " + key;
						}
						else if (mode === 3)
						{
							// length
							key = (isTranslated ? "tr00_" : "tr99_") + "lt" + padZero(strTr.length, 3) + " " 
								+ strTr + (isSuggested ? "  _sg00" : "  _sg99") + " ___ " + key;
							key = (isDot ? "dt99_" : "dt00_")
								+ "sp" + (str.split(/[^a-z0-9]/i).length > 1 ? "99_" : "00_")
								+ "ln" + padZero(str.length, 3)
								+ " ___ " + str + "  ___ " + key;
						}
						
						key = key.toLowerCase();
						keyArr.push(key);
						
						var eleParent = eleKeys[i].parentElement.parentElement.parentElement
							.parentElement.parentElement.parentElement;
							
						//eleParent.dataset.stshKey = key;
						//console.log("Key: " + key);
						
						valArr[key] = eleParent.outerHTML.trim();
					}
					catch (ex)
					{
						console.error("sortKey", ex.message);
					}
				}
				
				var keyArrTmp = keyArr.slice();
				keyArr.sort();
				
				var isSame = true;
				for (var i = 0; i < keyArr.length; i++)
				{
					if (keyArr[i] != keyArrTmp[i])
					{
						isSame = false;
					}
				}
				
				if (!isSame)
				{
					var eleTable = document.querySelector("#keylist > table:nth-child(1) > tbody:nth-child(1)");
					if (eleTable != null)
					{
						var newInner = "";
						
						for (var i = 0; i < keyArr.length; i++)
						{
							newInner += valArr[keyArr[i]];
						}
						
						eleTable.innerHTML = newInner;
					}
				}
			}

			var itvTime = 300;
			var itvIdHider = [0, 0, 0, 0, 0, 0];
			var itvIdSortKey = 0;
			var itvIdHideKeyApp = 0;
			var itvIdHideKeyGame = 0;
			var itvIdHideKeyFaq = 0;
			var itvIdHideKeySupport = 0;
			var itvIdHideKeyPromo = 0;
			var itvIdHideKeyEmail = 0;
			var itvIdHideStrNotMatch = 0;
			var itvIdHideStrLong = 0;

			var eleBtnShowAll = document.querySelector("#stsh_showing_all");
			if (eleBtnShowAll != null)
			{
				eleBtnShowAll.addEventListener("click", function()
				{
					var elesBtnShowing = document.querySelectorAll("#stsh_showing_notTranslated, #stsh_showing_suggested"
						+ ", #stsh_showing_resuggested, #stsh_showing_approved"
						+ ", #stsh_showing_declined, #stsh_showing_translated");
					for (var i = 0; i < elesBtnShowing.length; i++)
					{
						clearInterval(itvIdHider[i]);
						clearInterval(itvIdHideKeyApp);
						clearInterval(itvIdHideKeyGame);
						clearInterval(itvIdHideKeyFaq);
						clearInterval(itvIdHideKeySupport);
						clearInterval(itvIdHideKeyPromo);
						clearInterval(itvIdHideKeyEmail);
						clearInterval(itvIdHideStrNotMatch);
						clearInterval(itvIdHideStrLong);
						setVisibleKey("", true);
						
						elesBtnShowing[i].removeAttribute("disabled");
					}
					
					clearInterval(itvIdSortKey);
					countShowing();
				});
			}

			var elesBtnShowing = document.querySelectorAll("#stsh_showing_notTranslated, #stsh_showing_suggested, #stsh_showing_resuggested"
				+ ", #stsh_showing_approved, #stsh_showing_declined, #stsh_showing_translated");
			for (var i = 0; i < elesBtnShowing.length; i++)
			{
				elesBtnShowing[i].param = i;
				elesBtnShowing[i].addEventListener("click", function(ev)
				{
					var mode = ev.target.param;

					clearInterval(itvIdHider[mode]);
					itvIdHider[mode] = setIntervalCustom(function(mode)
					{
						hideSuggestions(mode);
					}, itvTime, mode);

					hideSuggestions(mode);
					elesBtnShowing[mode].setAttribute("disabled", "disabled");
				});
			}

			var elesBtnSort = document.querySelectorAll("#stsh_sort_key, #stsh_sort_string"
				+ ", #stsh_sort_word, #stsh_sort_length");
			for (var i = 0; i < elesBtnSort.length; i++)
			{
				elesBtnSort[i].param = i;
				elesBtnSort[i].addEventListener("click", function(ev)
				{
					var mode = ev.target.param;

					clearInterval(itvIdSortKey);
					itvIdSortKey = setIntervalCustom(function(mode)
					{
						sortKey(mode);
					}, itvTime, mode);

					sortKey(mode);
				});
			}

			function setVisibleKey(startKey, visible)
			{
				if (!isVisible()) return;
				
				startKey = startKey.toLowerCase();
				var display = visible != true ? "none" : "";
				var eleKeys = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr > td:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)");
				for (var i = 0; i < eleKeys.length; i++)
				{
					try
					{
						if (eleKeys[i].textContent.trim().toLowerCase().indexOf(startKey) > -1)
						{
							var eleTarget = eleKeys[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
							if (visible && eleTarget.classList.contains("stsh_hidden"))
							{
								eleTarget.classList.remove("stsh_hidden");
							}
							else if (!visible && !eleTarget.classList.contains("stsh_hidden"))
							{
								eleTarget.classList.add("stsh_hidden");
							}
						}
					}
					catch (ex)
					{
						console.error("setVisibleKey", ex.message);
					}
				}
			}

			function hideKeyGame()
			{
				setVisibleKey("GAMES/", false);
				setVisibleKey("TF_", false);
			}

			function hideKeyApp()
			{
				setVisibleKey("# storefront_english_apps.txt #", false);
				setVisibleKey("# storefront_english_main.txt # #app_", false);
				setVisibleKey("# community_english.txt # SharedFiles_App_", false);
				setVisibleKey("# appmgmt_english.txt #", false);
				setVisibleKey("STEAM/VR", false);
			}

			function hideKeyFaq()
			{
				setVisibleKey("# support_faq_english.txt #", false);
			}

			function hideKeySupport()
			{
				setVisibleKey("# supportui_english.txt #", false);
				setVisibleKey("# help_english.txt #", false);
			}

			function hideKeyPromo()
			{
				setVisibleKey("#promo", false);
				setVisibleKey("#hardware", false);
				setVisibleKey("ControllerBinding", false);
				setVisibleKey("Library_Controller", false);
			}

			function hideKeyEmail()
			{
				setVisibleKey("#email", false);
			}
			
			function hideKeyAppInterval()
			{
				clearInterval(itvIdHideKeyApp);
				itvIdHideKeyApp = setIntervalCustom(hideKeyApp, itvTime);
			}
			
			function hideKeyGameInterval()
			{
				clearInterval(itvIdHideKeyGame);
				itvIdHideKeyGame = setIntervalCustom(hideKeyGame, itvTime);
			}
			
			function hideKeyFaqInterval()
			{
				clearInterval(itvIdHideKeyFaq);
				itvIdHideKeyFaq = setIntervalCustom(hideKeyFaq, itvTime);
			}
			
			function hideKeySupportInterval()
			{
				clearInterval(itvIdHideKeySupport);
				itvIdHideKeySupport = setIntervalCustom(hideKeySupport, itvTime);
			}
			
			function hideKeyPromoInterval()
			{
				clearInterval(itvIdHideKeyPromo);
				itvIdHideKeyPromo = setIntervalCustom(hideKeyPromo, itvTime);
			}
			
			function hideKeyEmailInterval()
			{
				clearInterval(itvIdHideKeyEmail);
				itvIdHideKeyEmail = setIntervalCustom(hideKeyEmail, itvTime);
			}
			
			function hideStrNotMatch()
			{
				if (!isVisible()) return;
				
				var searchStr = decodeURIComponent(getQueryByName("search_input")).replace(/\\+/g," ").trim();
				searchStr = searchStr.toLowerCase();
				
				var eleStrs = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr > td:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2)");
				for (var i = 0; i < eleStrs.length; i++)
				{
					try
					{
						var valStr = eleStrs[i].children[0].textContent.trim().toLowerCase();
						var valTrn = eleStrs[i].children[2].textContent.trim().toLowerCase();
						if (valStr != searchStr && valTrn != searchStr)
						{
							var eleTarget = eleStrs[i].parentElement.parentElement.parentElement.parentElement.parentElement;
							if (!eleTarget.classList.contains("stsh_hidden"))
							{
								eleTarget.classList.add("stsh_hidden");
							}
						}
					}
					catch (ex)
					{
						console.error("hideStrNotMatch", ex.message);
					}
				}
			}
			
			function hideStrNotMatchInterval()
			{
				clearInterval(itvIdHideStrNotMatch);
				itvIdHideStrNotMatch = setIntervalCustom(hideStrNotMatch, itvTime);
			}
			
			function hideStrLong()
			{
				if (!isVisible()) return;
				
				var dot = "...";
				var dotLengthMinus = 0 - dot.length;
				
				var eleStrs = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr > td:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)");
				for (var i = 0; i < eleStrs.length; i++)
				{
					try
					{
						var valStr = eleStrs[i].textContent.trim();
						if (valStr.substr(dotLengthMinus) == dot)
						{
							var eleTarget = eleStrs[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
							if (!eleTarget.classList.contains("stsh_hidden"))
							{
								eleTarget.classList.add("stsh_hidden");
							}
						}
					}
					catch (ex)
					{
						console.error("hideStrLong", ex.message);
					}
				}
			}
			
			function hideStrLongInterval()
			{
				clearInterval(itvIdHideStrLong);
				itvIdHideStrLong = setIntervalCustom(hideStrLong, itvTime);
			}

			var eleBtnHideKeyApp = document.querySelector("#stsh_showing_keyApp");
			if (eleBtnHideKeyApp)
			{
				eleBtnHideKeyApp.addEventListener("click", hideKeyAppInterval);
			}

			var eleBtnHideKeyGame = document.querySelector("#stsh_showing_keyGame");
			if (eleBtnHideKeyGame)
			{
				eleBtnHideKeyGame.addEventListener("click", hideKeyGameInterval);
			}

			var eleBtnHideKeyFaq = document.querySelector("#stsh_showing_keyFaq");
			if (eleBtnHideKeyFaq)
			{
				eleBtnHideKeyFaq.addEventListener("click", hideKeyFaqInterval);
			}

			var eleBtnHideKeySupport = document.querySelector("#stsh_showing_keySupport");
			if (eleBtnHideKeySupport)
			{
				eleBtnHideKeySupport.addEventListener("click", hideKeySupportInterval);
			}

			var eleBtnHideKeyPromo = document.querySelector("#stsh_showing_keyPromo");
			if (eleBtnHideKeyPromo)
			{
				eleBtnHideKeyPromo.addEventListener("click", hideKeyPromoInterval);
			}

			var eleBtnHideKeyEmail = document.querySelector("#stsh_showing_keyEmail");
			if (eleBtnHideKeyEmail)
			{
				eleBtnHideKeyEmail.addEventListener("click", hideKeyEmailInterval);
			}

			var eleBtnHideStrNotMatch = document.querySelector("#stsh_showing_strNotMatch");
			if (eleBtnHideStrNotMatch)
			{
				eleBtnHideStrNotMatch.addEventListener("click", hideStrNotMatchInterval);
			}

			var eleBtnHideStrLong = document.querySelector("#stsh_showing_strLong");
			if (eleBtnHideStrLong)
			{
				eleBtnHideStrLong.addEventListener("click", hideStrLongInterval);
			}			

		} // End Hide & sort suggestions

		resizeSuggestionBox();
	
		// Add Frame button when iframe load failed
		{
			var ifrm = document.querySelector("#suggestions_iframe");
			if (ifrm)
			{				
				var obIfrm = new MutationObserver(function(mutations) 
				{ 
					mutations.forEach(function(mutation) 
					{ 							
						var divFrame = document.querySelector("#stsh_frame");
						if (!divFrame)
						{
							var divOuter = document.querySelector("#suggestions_box_outer");
							if (divOuter)
							{
								divFrame = document.createElement("div");
								divFrame.id = "stsh_frame";
								divOuter.appendChild(divFrame);
							}
						}
						if (divFrame)
						{
							var ifrm = document.querySelector("#suggestions_iframe");
							if (ifrm)
							{
								var src = ifrm.getAttribute("src");
								divFrame.innerHTML = '<br/> <a class="stsh_a_button" target="_blank" '
									+ ' href="'	+ src + '">Frame</a> ';
							}
						}
					}); 
				}); 

				var configObIfrm = { attributes: true, attributeFilter: ["src"] };
				obIfrm.observe(ifrm, configObIfrm);
			}
		}
		
		// Open frame if only one string
		{
			setTimeoutCustom(function()
			{
				var elesCopy = document.querySelectorAll("#keylist .copysmall");
				if (elesCopy.length == 1)
				{
					var eleDiv = elesCopy[0].parentElement.parentElement.parentElement;
					
					if (eleDiv.tagName == "DIV")
					{
						if (!isVisible())
						{
							eleDiv.click();
						}
					}
				}
			}, 1000);
		}
		
		// Clean timestamp
		{
			var eleInputTime = document.querySelector("input[name='t']");
			if (eleInputTime)
			{
				eleInputTime.parentElement.removeChild(eleInputTime);
			}
		}
	
	} // End translate.php

	if (url.indexOf("user_activity.php") > -1)
	{
		var user = "";
		var eleAvatar = document.querySelector(".friend_block_avatar > a[href^='https://steamcommunity.com']");
		if (eleAvatar != null)
		{
			eleAvatar.href = eleAvatar.href.replace("https://steamcommunity.com", "http://steamcommunity.com");
			
			if (eleAvatar.href.indexOf("http://steamcommunity.com/profiles/") == 0)
			{
				user = eleAvatar.href.replace("http://steamcommunity.com/profiles/", "");
			}
			
			var name = eleAvatar.firstElementChild.getAttribute("title");
			if (name == "")
			{
				name = user;
			}
			document.title = name + " - " + document.title;
		}

		var stsh_activityAddLink_start = new Date();
		var stsh_activityAddLink_itv = setIntervalCustom(function(user)
		{
			var stsh_activityAddLink_isEnd = false;
			var stsh_activityAddLink_cur = new Date();
	
			var h3s = document.querySelectorAll("#leftAreaContainer h3");
			if (h3s.length == 2)
			{
				var td = h3s[1].parentElement;
				var matchArr = td.innerHTML.match(/<\/h3>.+<br>/i);
				if (matchArr != null)
				{
					var name = matchArr[0].replace("</h3>-","").replace("-<br>","").replace("<br>","").trim();
					if (name == "")
					{
						name = user;
					}
					if (name == "")
					{
						name = "Steam";
					}
					
					var tagNew = "";
					if (user == "")
					{
						tagNew = "</h3><a id='stsh_sectionId' class='stsh_blue' target='_blank' href='http://steamcommunity.com/my'>" + name + "</a>"
							+ ", <a class='stsh_green' target='_blank' href='http://translation.steampowered.com/WhereIsEsty.php'>Esty</a><br><br>";
					}
					else
					{
						tagNew = "</h3><a id='stsh_sectionId' class='stsh_blue' target='_blank' href='http://steamcommunity.com/profiles/"
							+ user + "'>" + name + "</a>"
							+ ", <a class='stsh_green' target='_blank' href='http://translation.steampowered.com/WhereIsEsty.php?collectionof="
							+ user + "'>Esty</a>"
							/*+ ", <a class='stsh_green' target='_blank' href='http://translation.steampowered.com/translate.php?user="
							+ user + "&onionhunter=1&liststatus=1'>Onion</a>*/
							+ " <br><br> ";
					}
					td.innerHTML = td.innerHTML.replace(/<\/h3>.+<br>/i, tagNew);
					
					stsh_activityAddLink_isEnd = true;
				}
				
				if (stsh_activityAddLink_isEnd || stsh_activityAddLink_cur - stsh_activityAddLink_start > 10000)
				{
					clearInterval(stsh_activityAddLink_itv);
				}
			}
		}, 300, user);
		
		var countWord = "";
		var countSugg = "";
		
		var inputDials = document.querySelectorAll("#leftAreaContainer input.dial");
		if (inputDials.length == 2)
		{
			countWord = inputDials[0].getAttribute("title").replace("words", "").trim();
			countSugg = inputDials[1].getAttribute("title").replace("suggestions", "").trim();
		}
		
		var tdCount = document.querySelector("#leftAreaContainer td[align='left']");
		if (tdCount != null)
		{
			tdCount.innerHTML = '<div style="width: 100px; display: inline-block; text-align: center;">Word: '
				+ countWord + '</div> <div style="width: 100px; display: inline-block; text-align: center; margin-left: 13px;">Suggestion: '
				+ countSugg + '</div>';
		}
		
		var sug = document.body.textContent;
	
		var regComment = /VIEW COMMENT/g;
		var regSuggest = /VIEW SUGGESTION/g;
	
		var strComment = "...RECEIVED A MODERATOR COMMENT";
		var strPending = "...ARE PENDING";
		var strApproved = "...WERE APPROVED";
		var strDeclined = "...WERE DECLINED";
		var strApplied = "...HAVE BEEN APPLIED WITHIN THE LAST 14 DAYS";
		var strRemoved = "...HAVE BEEN REMOVED WITHIN THE LAST 14 DAYS";
	
		var startComment = sug.indexOf(strComment);
		var startPending = sug.indexOf(strPending);
		var startApproved = sug.indexOf(strApproved);
		var startDeclined = sug.indexOf(strDeclined);
		var startApplied = sug.indexOf(strApplied);
		var startRemoved = sug.indexOf(strRemoved);
	
		var sugComment = sug.substring(startComment,startPending);
		var sugPending = sug.substring(startPending,startApproved);
		var sugApproved = sug.substring(startApproved,startDeclined);
		var sugDeclined = sug.substring(startDeclined,startApplied);
		var sugApplied = sug.substring(startApplied,startRemoved);
		var sugRemoved = sug.substring(startRemoved);
	
		var countComment = (sugComment.match(regComment) || []).length;
		var countPending = (sugPending.match(regSuggest) || []).length;
		var countApproved = (sugApproved.match(regSuggest) || []).length;
		var countDeclined = (sugDeclined.match(regSuggest) || []).length;
		var countApplied = (sugApplied.match(regSuggest) || []).length;
		var countRemoved = (sugRemoved.match(regSuggest) || []).length;
	
		var divBtn = document.createElement("div");
		document.body.appendChild(divBtn);
		divBtn.innerHTML = ' \
<div style="position: fixed; z-index: 3; right: 12px; top: 84px; line-height: 24px; text-align: right;"> \
	&nbsp; <input id="stsh_btnToProgress" value="To Progress" class="stsh_btn_long" type="button" \
		onclick="scrollToId(\'stsh_sectionId\', -50); return false;" /><br/> \
	 \
	&nbsp; <span class="stsh_scroll_header">Scroll To</span>\
	<li class="stsh_suggestion_btn stsh_suggestion stsh_suggestion_comment"><input value="Comment (' + countComment + ')"  \
		class="stsh_btn_long" type="button" onclick="scrollToId(\'stsh_sectionComment\'); return false;" ></li> \
	<li class="stsh_suggestion_btn stsh_suggestion stsh_suggestion_pending"><input value="Pending (' + countPending + ')" \
		class="stsh_btn_long" type="button" onclick="scrollToId(\'stsh_sectionPending\'); return false;" ></li> \
	<li class="stsh_suggestion_btn stsh_suggestion stsh_suggestion_approved"><input value="Approved (' + countApproved + ')" \
		class="stsh_btn_long" type="button" onclick="scrollToId(\'stsh_sectionApproved\'); return false;" ></li> \
	<li class="stsh_suggestion_btn stsh_suggestion stsh_suggestion_declined"><input value="Declined (' + countDeclined + ')" \
		class="stsh_btn_long" type="button" onclick="scrollToId(\'stsh_sectionDeclined\'); return false;" ></li> \
	<li class="stsh_suggestion_btn stsh_suggestion stsh_suggestion_applied"><input value="Applied (' + countApplied + ')" \
		class="stsh_btn_long" type="button" onclick="scrollToId(\'stsh_sectionApplied\'); return false;" ></li> \
	<li class="stsh_suggestion_btn stsh_suggestion stsh_suggestion_removed"><input value="Removed (' + countRemoved + ')" \
		class="stsh_btn_long" type="button" onclick="scrollToId(\'stsh_sectionRemoved\'); return false;" ></li> \
	<br/> \
	&nbsp; <input value="Hide Suggestions" class="stsh_btn_long" type="button" onclick="hideSuggestion(); return false;" /><br/> \
	&nbsp; <input value="Show Suggestions" class="stsh_btn_long" type="button" onclick="showSuggestion(); return false;" /><br/> \
	<br/> \
	&nbsp; <input value="Refresh" class="stsh_btn_long" type="button" onclick="window.location = window.location.href; return false;" /><br/> \
</div> \
';

		var divContainer = document.querySelector("#leftAreaContainer");
		if (divContainer != null)
		{
			var inner = divContainer.innerHTML;
			
			var htmlPending = /\.\.\.ARE \<a [^\<]+\>PENDING\<\/a\>/i.exec(inner);
			var htmlApproved = /\.\.\.WERE \<a [^\<]+\>APPROVED\<\/a\>/i.exec(inner);
			var htmlDeclined = /\.\.\.WERE \<a [^\<]+\>DECLINED\<\/a\>/i.exec(inner);
			
			divContainer.innerHTML = inner
				.replace("...RECEIVED A MODERATOR COMMENT",
					"<span id='stsh_sectionComment' class='stsh_suggestion_header'>...RECEIVED A MODERATOR COMMENT ("
					+ countComment + ")</span>")
				.replace(htmlPending,
					"<span id='stsh_sectionPending' class='stsh_suggestion_header'>" + htmlPending + " ("
					+ countPending + ")</span>")
				.replace(htmlApproved,
					"<span id='stsh_sectionApproved' class='stsh_suggestion_header'>" + htmlApproved + " ("
					+ countApproved + ")</span>")
				.replace(htmlDeclined,
					"<span id='stsh_sectionDeclined' class='stsh_suggestion_header'>" + htmlDeclined + " ("
					+ countDeclined + ")</span>")
				.replace("...HAVE BEEN APPLIED WITHIN THE LAST 14 DAYS",
					"<span id='stsh_sectionApplied' class='stsh_suggestion_header'>...HAVE BEEN APPLIED WITHIN THE LAST 14 DAYS ("
					+ countApplied + ")</span>")
				.replace("...HAVE BEEN REMOVED WITHIN THE LAST 14 DAYS",
					"<span id='stsh_sectionRemoved' class='stsh_suggestion_header'>...HAVE BEEN REMOVED WITHIN THE LAST 14 DAYS ("
					+ countRemoved + ")</span>");
		}
		
		var eleHours = document.querySelector("#hours");
		if (eleHours)
		{
			var eleBtn = document.querySelector("#stsh_btnToProgress");
			if (eleBtn)
			{
				var ele = document.createElement("input");
				ele.classList.add("stsh_btn_long");
				ele.setAttribute("value", "To Hours");
				ele.setAttribute("type", "button");
				ele.setAttribute("onclick", "scrollToElement(\"input[name*='[remarks]']\", -48); return false;");
				insertAfterElement(ele, eleBtn);
				
				ele = document.createTextNode(" \u00A0 ");
				insertAfterElement(ele, eleBtn);
				
				ele = document.createElement("br");
				insertAfterElement(ele, eleBtn);
			}
		}
		
		var cans = document.querySelectorAll("canvas");
		for (var i = 0; i < cans.length; i++)
		{
			cans[i].parentElement.removeChild(cans[i]);
		}
		
		var aKeys = document.querySelectorAll("#leftAreaContainer li > a:nth-child(1)");
		for (var i = 0; i < aKeys.length; i++)
		{
			var key = aKeys[i].textContent;
			var keyArr = key.substr(21).trim().split(" >> ");
			keyArr[0] = "<span style='color: #FFF !important;'>" + keyArr[0] + "</span>";
			var keyNew = key.substr(0,21) + keyArr.join(" >> ") + "";
			aKeys[i].innerHTML = keyNew;
		}
	
		var sugModeComment = 0;
		var sugModePending = 1;
		var sugModeApproved = 2;
		var sugModeDeclined = 3;
		var sugModeApplied = 4;
		var sugModeRemoved = 5;
		
		var sugMode = sugModeComment;
		
		var eleSugFirst = document.querySelector("#leftAreaContainer > a[href^='translate.php?search_input=']"
			+ ", #leftAreaContainer > form > a[href^='translate.php?search_input=']");
		if (eleSugFirst)
		{
			var eleSugHeadPrev = eleSugFirst.previousElementSibling.previousElementSibling;
			if (eleSugHeadPrev.id == "stsh_sectionRemoved")
			{
				sugMode = sugModeRemoved;
			}
			else if (eleSugHeadPrev.id == "stsh_sectionApplied")
			{
				sugMode = sugModeApplied;
			}
			else if (eleSugHeadPrev.id == "stsh_sectionDeclined")
			{
				sugMode = sugModeDeclined;
			}
			else if (eleSugHeadPrev.id == "stsh_sectionApproved")
			{
				sugMode = sugModeApproved;
			}
			else if (eleSugHeadPrev.id == "stsh_sectionPending")
			{
				sugMode = sugModePending;
			}
			
			var eleSugNext = eleSugFirst;
			while (eleSugNext)
			{
				if (eleSugNext.tagName == "A")
				{
					var attrHref = eleSugNext.getAttribute("href");
					if (attrHref && attrHref.indexOf("translate.php?search_input=") == 0)
					{
						eleSugNext.classList.add("stsh_suggestion");
						
						if (sugMode == sugModeComment)
						{
							eleSugNext.classList.add("stsh_suggestion_comment");
						}
						else if (sugMode == sugModePending)
						{
							eleSugNext.classList.add("stsh_suggestion_pending");
						}
						else if (sugMode == sugModeApproved)
						{
							eleSugNext.classList.add("stsh_suggestion_approved");
						}
						else if (sugMode == sugModeDeclined)
						{
							eleSugNext.classList.add("stsh_suggestion_declined");
						}
						else if (sugMode == sugModeApplied)
						{
							eleSugNext.classList.add("stsh_suggestion_applied");
						}
						else if (sugMode == sugModeRemoved)
						{
							eleSugNext.classList.add("stsh_suggestion_removed");
						}
					}
				}
				else if (eleSugNext.tagName == "SPAN" && eleSugNext.classList.contains("stsh_suggestion_header"))
				{
					if (eleSugNext.id == "stsh_sectionRemoved")
					{
						sugMode = sugModeRemoved;
					}
					else if (eleSugNext.id == "stsh_sectionApplied")
					{
						sugMode = sugModeApplied;
					}
					else if (eleSugNext.id == "stsh_sectionDeclined")
					{
						sugMode = sugModeDeclined;
					}
					else if (eleSugNext.id == "stsh_sectionApproved")
					{
						sugMode = sugModeApproved;
					}
					else if (eleSugNext.id == "stsh_sectionPending")
					{
						sugMode = sugModePending;
					}
				}
				
				eleSugNext = eleSugNext.nextElementSibling;
			}
			
		}
		
		// Change language & correct url
		{
			var aProgresses = document.querySelectorAll("div > .friend_block_avatar a[onmouseout]");
			for (var i = 0; i < aProgresses.length; i++)
			{
				var langCur = getQueryByName("lang", aProgresses[i].href);
				if (langCur == "")
				{
					aProgresses[i].href = aProgresses[i].href + lang;
				}
				else
				{
					if (langCur != lang)
					{
						var langQuery = (url.indexOf("?") > -1) ? "&lang=" : "?lang=";
						window.location = url + langQuery + langCur;
					}
				}
				
				var aContent = aProgresses[i].textContent.trim();
				if (aContent.indexOf("SUGGESTIONS") > -1)
				{
					aProgresses[i].href = aProgresses[i].href + "&listsort=5&liststatus=1&paginationrows=1000";
				}
				else if (aContent.indexOf("REVIEWS") > -1)
				{
					aProgresses[i].href = aProgresses[i].href + "&listsort=5&liststatus=3&paginationrows=1000";
				}
			}
		}
		
		// Hours
		if (document.querySelector("#hours"))
		{
			function calculateHours()
			{
				var rgxDate = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
				var rgxTime = /^(\d{1,2}:\d{2}(:\d{2})?|\d{1,2}\.\d{2})$/;
				
				var eleFrom = document.querySelector("#stsh_hoursCalc_from");
				var eleTo = document.querySelector("#stsh_hoursCalc_to");
				var eleRes = document.querySelector("#stsh_hoursCalc_result");
				
				if (eleFrom != null && eleTo != null && eleRes != null)
				{
					var rawFrom = eleFrom.value.trim();
					var rawTo = eleTo.value.trim();
					
					var valFrom = 0;
					var valTo = 0;
					
					if (rgxDate.test(rawFrom))
					{
						rawFrom = rawFrom.substr(11);
					}
					if (rgxTime.test(rawFrom))
					{
						var arrTime = rawFrom.split(":");
						if (arrTime.length == 1)
						{
							arrTime = rawFrom.split(".");
						}
						valFrom = parseInt(arrTime[1]) + (parseInt(arrTime[0]) * 60);
					}
					
					if (rgxDate.test(rawTo))
					{
						rawTo = rawTo.substr(11);
					}
					if (rgxTime.test(rawTo))
					{
						var arrTime = rawTo.split(":");
						if (arrTime.length == 1)
						{
							arrTime = rawTo.split(".");
						}
						valTo = parseInt(arrTime[1]) + (parseInt(arrTime[0]) * 60);
					}
					
					var valDiff = Math.abs(valTo - valFrom);
					
					var valHr = parseInt(valDiff / 60);
					var valMn = valDiff % 60;
					
					eleRes.textContent = padZero(valHr, 2) + ":" + padZero(valMn, 2);
				}
			}
			
			var curDate = new Date();
			curDate.setTime(curDate.getTime() - (1000 * 60 * 60 * 8));
			
			if (isDstUsa(curDate.getUTCFullYear(), curDate.getUTCMonth() + 1, curDate.getUTCDate(), curDate.getUTCHours()))
			{
				curDate.setTime(curDate.getTime() + (1000 * 60 * 60 * 1));
			}
			
			var curDateStr = curDate.toISOString().substr(0, 10);
			
			// Add hours calculator
			{
				var eleFinalize = document.querySelector("#hours input[name='Finalize']");
				if (eleFinalize)
				{
					var eleFinalizeParent = eleFinalize.parentElement;
					eleFinalizeParent.setAttribute("colspan", "2");
					eleFinalizeParent.style.verticalAlign = "top";
					
					var elePad = document.createElement("td");
					insertBeforeElement(elePad, eleFinalizeParent);
					
					var eleCalc = document.createElement("td");
					eleCalc.classList.add("stsh_hoursCalc");
					
					insertBeforeElement(eleCalc, eleFinalizeParent);
										
					if (eleCalc.parentElement.previousElementSibling.querySelector("input[type='radio']"))
					{
						eleCalc.appendChild(document.createElement("br"));
					}
					
					var ele = document.createElement("b");
					ele.textContent = " Hours Calculator (Estimated) ";
					eleCalc.appendChild(ele);
					
					eleCalc.appendChild(document.createElement("br"));
					
					var ele = document.createElement("span");
					ele.innerHTML = " Enter date or time to calculate range (calculate only hours and minutes). "
						+ "<br/>You can enter date \"2016-01-01 08:05:00\" or time \"8:05\" or time \"8.05\".";
					ele.setAttribute("style", "display: inline-block; padding-bottom: 4px;");
					eleCalc.appendChild(ele);
					
					eleCalc.appendChild(document.createElement("br"));
					
					var ele = document.createElement("span");
					ele.textContent = " From: ";
					eleCalc.appendChild(ele);
					
					var ele = document.createElement("input");
					ele.id = "stsh_hoursCalc_from"
					ele.setAttribute("type", "text");
					ele.setAttribute("onkeypress", "return event.keyCode != 13;");
					ele.setAttribute("autocomplete", "off");
					ele.addEventListener("keyup", function()
					{
						calculateHours();
					});
					eleCalc.appendChild(ele);
					
					var ele = document.createElement("span");
					ele.innerHTML = "&nbsp;&nbsp; To: ";
					eleCalc.appendChild(ele);
					
					var ele = document.createElement("input");
					ele.id = "stsh_hoursCalc_to"
					ele.setAttribute("type", "text");
					ele.setAttribute("onkeypress", "return event.keyCode != 13;");
					ele.setAttribute("autocomplete", "off");
					ele.addEventListener("keyup", function()
					{
						calculateHours();
					});
					eleCalc.appendChild(ele);
					
					var ele = document.createElement("span");
					ele.innerHTML = "&nbsp;&nbsp; Result: ";
					eleCalc.appendChild(ele);
					
					var ele = document.createElement("b");
					ele.id = "stsh_hoursCalc_result"
					ele.textContent = " 00:00 ";
					eleCalc.appendChild(ele);
				}
			}
			
			// Hilight current date
			{
				
				var elesTd = document.querySelectorAll("#hours > table > tbody > tr > td:nth-child(1)");
				for (var i = 0; i < elesTd.length; i++)
				{
					if (elesTd[i].textContent.indexOf(curDateStr) > -1)
					{
						elesTd[i].parentElement.id = "stsh_hours_curDate";
						elesTd[i].parentElement.classList.add("stsh_hours_curDate");
						
						break;
					}
				}
			}
			
			// Auto calculate hours in current date
			{
				var timeFirst = "";
				var timeLast = "";
				
				var elesPending = document.querySelectorAll(".stsh_suggestion_pending:not(.stsh_suggestion_btn)");
				for (var i = 0; i < elesPending.length; i++)
				{
					var content = elesPending[i].textContent.trim().substr(0, 19);
					if (content.substr(0, 10) == curDateStr)
					{
						timeFirst = content.substr(11, 5);
						if (timeLast == "")
						{
							timeLast = timeFirst;
						}
					}
					else
					{
						break;
					}
				}
				
				if (timeFirst != "")
				{
					var eleFrom = document.querySelector("#stsh_hoursCalc_from");
					if (eleFrom)
					{
						eleFrom.value = timeFirst;
					}
					var eleTo = document.querySelector("#stsh_hoursCalc_to");
					if (eleTo)
					{
						eleTo.value = timeLast;
					}
					
					calculateHours();
				}
			}
		}
		
		// Hide wallet in other user pages
		{
			var eleASug = document.querySelector(".friend_block_avatar > a[href^='http://translation.steampowered.com/translate.php'");
			if (!eleASug || eleASug.textContent.trim() !== "YOUR SUGGESTIONS")
			{
				var elesAWallet = document.querySelectorAll("a[id^='walletkeys']");
				for (var i = 0; i < elesAWallet.length; i++)
				{
					var eleCur = elesAWallet[i];
					for (var j = 0; j < 5; j++)
					{
						eleCur.classList.add("stsh_hidden");
						eleCur = eleCur.nextElementSibling;
					}
				}
			}
		}
		
	} // End user_activity.php
	
	if (/\/rally[0-9]{0,4}/.test(url))
	{
		resizeSuggestionBox();
	
		var outer = document.getElementById("suggestions_box_outer");
		if (outer != null)
		{
			outer.setAttribute("onclick","hideSuggestionsBox();");
		}
		
		// Set cur lang to first
		{
			var first = document.querySelector(".gradienttable tr:nth-child(6)");
			if (first)
			{
				var cur = null;
				
				var tdLangs = document.querySelectorAll(".gradienttable tr > td:nth-child(1)");
				for (var i = 0; i < tdLangs.length; i++)
				{
					if (lang === tdLangs[i].textContent.trim().toLowerCase())
					{
						cur = tdLangs[i].parentElement;
						break;
					}
				}
				
				if (cur)
				{
					cur.classList.add("stsh_curLang");
					first.parentElement.insertBefore(cur, first);
				}
			}
		}
		
		// Change row per page
		{
			var eleAs = document.querySelectorAll(".gradienttable tr:nth-child(6) a[href^='translate.php?']");
			for (var i = 0; i < eleAs.length; i++)
			{
				eleAs[i].href = eleAs[i].href + "&paginationrows=1000";
			}
		}
		
		var inputClose = document.querySelector("td:nth-child(3) > input:nth-child(1)");
		if (inputClose != null)
		{
			inputClose.value = "Close (Esc)";
		}
		
	} // End rally.php
	
	if (/\/rally_results_?[0-9]{0,4}/.test(url))
	{
		var h3 = document.querySelector("table.curved h3");
		if (h3 != null)
		{
			document.title = h3.textContent.trim();
		}
		
		var eleTable = document.querySelector("body > div:nth-child(1) > table:nth-child(1)");
		if (eleTable)
		{
			eleTable.style.width = "";
		}		
		
		var inputClose = document.querySelector("td:nth-child(3) > input:nth-child(1)");
		if (inputClose != null)
		{
			inputClose.value = "Close (Esc)";
			inputClose.focus();
		}
		
		// Add frame and background button
		{
			var eleTdFirst = document.querySelector("td:nth-child(1)");
			if (eleTdFirst)
			{
				var eleTdFrame = document.createElement("td");
				eleTdFrame.setAttribute("align", "right");
				eleTdFrame.innerHTML = ' <a class="stsh_a_button" target="_blank" '
					+ ' href="'	+ url + '">Frame</a> ';
				insertBeforeElement(eleTdFrame, eleTdFirst);
				
				var img = document.body.style.backgroundImage;
				if (img.indexOf("url(\"") === 0)
				{
					img = img.replace("url(\"", "").replace("\")", "");
					
					var eleTdImage = document.createElement("td");
					eleTdImage.setAttribute("align", "right");
					eleTdImage.innerHTML = ' <a class="stsh_a_button" target="_blank" '
						+ ' href="'	+ img + '">View Background</a> ';
					insertAfterElement(eleTdImage, eleTdFrame);
				}
			}
		}
		
		var inputPrev = document.querySelector("input[value^='Prev']");
		if (inputPrev != null)
		{
			addKeyCtrl(document, inputPrev, 219, "[");				// [
			addKeyCtrl(document, inputPrev, "BracketLeft", "");		// [
			//addKeyCtrl(document, inputPrev, 0, "");				// [
			//addKeyCtrl(document, inputPrev, 53, "");				// [
			
			disableAfterClick(inputPrev);
		}
		
		var inputNext = document.querySelector("input[value^='Next']");
		if (inputNext != null)
		{
			addKeyCtrl(document, inputNext, 221, "]");				// ]
			addKeyCtrl(document, inputNext, "BracketRight", "");	// ]
			//addKeyCtrl(document, inputNext, 188, "");				// ]
			//addKeyCtrl(document, inputNext, 173, "");				// ]
			//addKeyCtrl(document, inputNext, 169, "");				// ]
			
			disableAfterClick(inputNext);
		}
		
		// Hilight cur lang
		{
			var elesLang = document.querySelectorAll("table.curved > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > h2:nth-child(1)");
			for (var i = 0; i < elesLang.length; i++)
			{
				if (lang == elesLang[i].textContent.trim().toLowerCase())
				{
					var eleParent = elesLang[i].parentElement.parentElement.parentElement.parentElement;
					//eleParent.style.backgroundColor = "#474D1A";
					eleParent.classList.add("stsh_curLang");
					eleParent.setAttribute("bgcolor", "#474D1A");
					eleParent.setAttribute("onmouseout", "this.bgColor='#474D1A'");
					eleParent.setAttribute("onmouseover", "this.bgColor='#76802B'");
					break;
				}
			}
		}
		
	} // End rally_results.php
	
	if (/\/rallyreplay_?[0-9]{0,4}/.test(url))
	{
		// Set cur lang to first
		{
			var elesFrame = document.querySelectorAll("#leftAreaContainer div[id^='frame']");
			for (var i = 0; i < elesFrame.length; i++)
			{
				var first = elesFrame[i].querySelector(".gradienttable tr:nth-child(6)");
				if (first)
				{
					var cur = null;
					
					var tdLangs = elesFrame[i].querySelectorAll(".gradienttable tr > td:nth-child(1)");
					for (var j = 0; j < tdLangs.length; j++)
					{
						if (lang === tdLangs[j].textContent.trim().toLowerCase())
						{
							cur = tdLangs[j].parentElement;
							break;
						}
					}
					
					if (cur)
					{
						cur.classList.add("stsh_curLang");
						first.parentElement.insertBefore(cur, first);
					}
				}
			}
		}
		
		var eleBtn = document.querySelector("input[value='FASTEST']");
		if (eleBtn)
		{			
			var ele = document.createElement("input");
			ele.setAttribute("type", "button");
			ele.setAttribute("value", "RESTART");
			ele.setAttribute("style", "padding: 0; border: none; background: none;");
			ele.setAttribute("onclick", "indexReplay = 0; elsFrame.eq(indexReplay).fadeOut(0, function() \
				{ indexReplay = (indexReplay + 1) % lenFrame; elsFrame.eq(indexReplay).fadeIn(0); })");
				
			insertAfterElement(ele, eleBtn);
			
			insertAfterElement(document.createTextNode(" | "), eleBtn);
		}
		
	} // End rallyreplay.php
	
	if (url.indexOf("/WhereIsEsty.php") > -1)
	{
		resizeSuggestionBox();
	
		var outer = document.getElementById("suggestions_box_outer");
		if (outer != null)
		{
			outer.setAttribute("onclick","hideSuggestionsBox();");
		}
		
		var divContainer = document.querySelector("#pageContainer");
		if (divContainer != null)
		{
			var ele = document.createElement("div");
			ele.id = "logout";
			ele.innerHTML = ' <a class="stsh_a_button" target="_blank" '
				+ ' href="/home.php">Home</a> ';
			divContainer.appendChild(ele);
		}

		var divContent = document.querySelector("#leftAreaContainer > div");
		if (divContent != null)
		{
			var countSnap = document.querySelectorAll("div.box").length;
			var user = "";
			var name = "";

			var eleImg = document.querySelector("#leftAreaContainer > div > div > a > img ");
			if (eleImg != null)
			{
				name = eleImg.getAttribute("title");
				user = eleImg.parentElement.getAttribute("href").replace("https://steamcommunity.com/profiles/", "");
			}
			var ele = document.createElement("div");
			ele.setAttribute("class", "stsh_snapshot");
			ele.innerHTML = "<a class='stsh_blue' target='_blank' href='http://translation.steampowered.com/user_activity.php?user="
				+ user + "'>" + name + "</a>"
				+ "<br>Snapshot: " + countSnap;

			divContent.appendChild(ele);
		}
		
	} // End WhereIsEsty.php
	
	if (url.indexOf("/stickerbox.php") > -1)
	{
		document.querySelector("textarea[name='add_comment']").focus();
		
		var inputPrev = document.querySelector("img[src*='z0lEQVRIx5WWaWxVRRTH'");
		if (inputPrev != null)
		{
			addKeyCtrl(document, inputPrev, 219, "");				// [
			addKeyCtrl(document, inputPrev, "BracketLeft", "");		// [
			//addKeyCtrl(document, inputPrev, 0, "");				// [
			//addKeyCtrl(document, inputPrev, 53, "");				// [
			
			disableAfterClick(inputPrev);
		}
		
		var inputNext = document.querySelector("img[src*='40lEQVRIx5WWe0xXZRjH'");
		if (inputNext != null)
		{
			addKeyCtrl(document, inputNext, 221, "");				// ]
			addKeyCtrl(document, inputNext, "BracketRight", "");	// ]
			//addKeyCtrl(document, inputNext, 188, "");				// ]
			//addKeyCtrl(document, inputNext, 173, "");				// ]
			//addKeyCtrl(document, inputNext, 169, "");				// ]
			
			disableAfterClick(inputNext);
		}
	} // End stickerbox.php
	
	if (/\/(home\.php|index\.php)/i.test(url))
	{
		// Set cur lang to first
		{
			var first = null;
			var cur = null;
			var curLang = lang.substring(0, 4);
			
			if (curLang == "schi")
				curLang = "sim.";
			else if (curLang == "tchi")
				curLang = "tra.";
			
			var eleLangs = document.querySelectorAll("#overall .progress");
			if (eleLangs.length > 0)
			{
				first = eleLangs[0];
				for (var i = 0; i < eleLangs.length; i++)
				{
					if (curLang === eleLangs[i].textContent.trim().substring(0, 4).toLowerCase())
					{
						cur = eleLangs[i];
						break;
					}
				}
				
				if (cur)
				{
					var curSib1 = cur.nextSibling;
					var curSib2 = curSib1.nextSibling;
					var curSib3 = curSib2.nextSibling;
					var curSib4 = curSib3.nextSibling;
					var curSib5 = curSib4.nextSibling;
					var curSib6 = curSib5.nextSibling;
					
					insertBeforeElement(cur, first);
					insertAfterElement(curSib6, cur);
					insertAfterElement(curSib5, cur);
					insertAfterElement(curSib4, cur);
					insertAfterElement(curSib3, cur);
					insertAfterElement(curSib2, cur);
					insertAfterElement(curSib1, cur);
				}
			}
		}
		
		if (document.querySelector("#logout"))
		{
			var tmplHome = ' \
				<div class="stsh_home_group"> \
					<span class="stsh_home_header">Shortcuts</span>\
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/translate.php?search_input=DATE%3A+%DATE%&paginationrows=1000">New Today</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/glossary.php">Glossary</a> &nbsp; \
					\
					<br/> <span class="stsh_home_header">Rally</span>\
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/rally.php">Rally 2016</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/rally2015.php">Rally 2015</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/rally2014.php">Rally 2014</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/rally2013.php">Rally 2013</a> &nbsp; \
					\
					<br/> <span class="stsh_home_header">Events</span>\
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/rallyreplay.php">Rally Replay</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/onionolooorm.php">Typonion</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/dstbattle.php">DST Battle</a> &nbsp; \
					<br/> &nbsp; <a class="stsh_a_button stsh_btn_med" target="_blank" href="/dota2.php">DOTA 2</a> &nbsp; \
					<br/> \
				</div> \
			';
			
			var curDate = new Date();
			curDate.setTime(curDate.getTime() - (1000 * 60 * 60 * 8));
			
			if (isDstUsa(curDate.getUTCFullYear(), curDate.getUTCMonth() + 1, curDate.getUTCDate(), curDate.getUTCHours()))
			{
				curDate.setTime(curDate.getTime() + (1000 * 60 * 60 * 1));
			}
			
			tmplHome = tmplHome.replace("%DATE%", curDate.toISOString().substr(0, 10));
			
			var eleNew = document.createElement("div");
			
			eleNew.innerHTML = tmplHome;
			
			document.body.appendChild(eleNew);
		}
		
	} // End home.php
	
	if (url.indexOf("/glossary.php") > -1)
	{
		
	} // End glossary.php
	
	if (url.indexOf("/dstbattle.php") > -1)
	{		
		// Hilight cur lang
		{
			var cur = null;
			
			var elesLang = document.querySelectorAll(".gradienttable > tbody:nth-child(1) > tr > th:nth-child(1)");
			for (var i = 1; i < elesLang.length; i++)
			{
				if (lang === elesLang[i].textContent.trim().replace(/[0-9]+\. /, "").toLowerCase())
				{
					cur = elesLang[i].parentElement;
					break;
				}
			}
			
			if (cur)
			{
				cur.classList.add("stsh_dst_curLang");
			}
		}
		
	} // End dstbattle.php
	
	if (url.indexOf("/statistics.php") > -1)
	{
		setTimeoutCustom(function()
		{
			var qBranch = getQueryByName("branch_ID");
			var qFile = getQueryByName("file_ID");
			
			if (qBranch === "" && qFile === "")
			{
				var keyIdArr = new Array();
				var valDataArr = new Array();
				
				var keyBrArr = new Array();
				var valBrArr = new Array();
				
				var keyTrArr = new Array();
				var valTrArr = new Array();
				
				var keyApArr = new Array();
				var valApArr = new Array();
					
				var eleHead = document.querySelector("#overall");
				if (eleHead)
				{
					function getProgress(content)
					{
						var rgxNum = /[0-9]+/g;
						var data = "";
						if (content.indexOf("<15") > -1)
						{
							data = "014"
						}
						else if (content.indexOf("100") < 0)
						{
							data = "0" + (content.match(rgxNum) || ["00"])[0];
						}
						else
						{
							data = "100";
						}
						return data;
					}
						
					var dataId = -1;
					var dataBr = "";
					var dataTr = "";
					var dataAp = "";
					
					var eleProgress = document.createElement("div");
					
					while (eleHead.firstChild)
					{
						var child = eleHead.firstChild;
						if (child.nodeName !== "#text")
						{
							if (child.id === "" && child.classList.contains("progress"))
							{
								dataId++;
								
								eleProgress = document.createElement("div");
								eleProgress.classList.add("stsh_stat_progress");
								
								dataBr = child.textContent.trim();
								if (dataBr.indexOf("glossary") === 0)
								{
									dataBr = "0" + dataBr;
								}								
								
								eleProgress.setAttribute("data-br", dataBr);
								eleProgress.setAttribute("data-id", dataId);
								
								keyIdArr.push(dataId);
								valDataArr[dataId] = eleProgress;
							}
							else if (child.classList.contains("graphtranslatedstats"))
							{
								dataTr = getProgress(child.textContent);
								eleProgress.setAttribute("data-tr", dataTr);
							}
							else if (child.classList.contains("graphapprovedstats"))
							{
								dataAp = getProgress(child.textContent);
								eleProgress.setAttribute("data-ap", dataAp);
								
								//var dataId = eleProgress.dataset.id;
								//var dataTr = eleProgress.dataset.tr;
								//var dataBr = eleProgress.dataset.br;
								var dataTrApBr = dataTr + "_" + dataAp + "_" + dataBr;
								var dataApTrBr = dataAp + "_" + dataTr + "_" + dataBr;
								
								//eleProgress.setAttribute("data-trapbr", dataTrApBr);
								//eleProgress.setAttribute("data-aptrbr", dataApTrBr);
								
								keyBrArr.push(dataBr);
								valBrArr[dataBr] = dataId;
								
								keyTrArr.push(dataTrApBr);
								valTrArr[dataTrApBr] = dataId;
								
								keyApArr.push(dataApTrBr);
								valApArr[dataApTrBr] = dataId;
							}
						}
						
						eleProgress.appendChild(child);
					}
					
					var i = keyIdArr.length - 1;
					if (i > -1)
					{
						eleHead.appendChild(valDataArr[keyIdArr[i]]);
					}
					for (i--; i > -1; i--)
					{
						insertBeforeElement(valDataArr[keyIdArr[i]], eleHead.firstElementChild);
					}
					
					keyBrArr.sort();
					keyTrArr.sort().reverse();
					keyApArr.sort().reverse();
				}
				
				var eleDiv = document.createElement("div");
				document.body.appendChild(eleDiv);
				eleDiv.innerHTML = ' \
	<div class="stsh_showing_group"> \
		<span class="stsh_showing_header">Hide</span>\
		<br/> &nbsp; <input id="stsh_stat_hideGame" value="Game" class="stsh_btn_short" type="button" /> \
		<input id="stsh_stat_hideSteam" value="Steam" class="stsh_btn_short" type="button" /> \
		<br/> &nbsp; <input id="stsh_stat_hideApproved" value="Approved" class="stsh_btn_long" type="button" /> \
		<br/> &nbsp; <input id="stsh_stat_hideCompleted" value="Completed" class="stsh_btn_long" type="button" /> \
		 \
		<br/> &nbsp; <span class="stsh_showing_header">Sort by</span>\
		<br/> &nbsp; <input id="stsh_stat_sortBr" value="Branch" class="stsh_btn_long" type="button" /> \
		<br/> &nbsp; <input id="stsh_stat_sortTr" value="Translated" class="stsh_btn_long" type="button" /> \
		<br/> &nbsp; <input id="stsh_stat_sortAp" value="Approved" class="stsh_btn_long" type="button" /> \
		<br/> \
		<br/> &nbsp; <input id="stsh_stat_showAll" value="Show All" class="stsh_btn_long" type="button" /> \
	</div> \
	';

				var eleHideGame = document.querySelector("#stsh_stat_hideGame");
				eleHideGame.addEventListener("click", function()
				{
					var elesProgress = document.querySelectorAll(".stsh_stat_progress:not(.stsh_hidden)");
					for (var i = 0; i < elesProgress.length; i++)
					{
						if (elesProgress[i].dataset.br.indexOf("games/") === 0)
						{
							elesProgress[i].classList.add("stsh_hidden");
						}
					}
				});
				
				var eleHideSteam = document.querySelector("#stsh_stat_hideSteam");
				eleHideSteam.addEventListener("click", function()
				{
					var elesProgress = document.querySelectorAll(".stsh_stat_progress:not(.stsh_hidden)");
					for (var i = 0; i < elesProgress.length; i++)
					{
						if (elesProgress[i].dataset.br.indexOf("steam") === 0)
						{
							elesProgress[i].classList.add("stsh_hidden");
						}
					}
				});
				
				var eleHideApproved = document.querySelector("#stsh_stat_hideApproved");
				eleHideApproved.addEventListener("click", function()
				{
					var elesProgress = document.querySelectorAll(".stsh_stat_progress:not(.stsh_hidden)");
					for (var i = 0; i < elesProgress.length; i++)
					{
						if (elesProgress[i].dataset.tr === elesProgress[i].dataset.ap)
						{
							elesProgress[i].classList.add("stsh_hidden");
						}
					}
				});
				
				var eleHideCompleted = document.querySelector("#stsh_stat_hideCompleted");
				eleHideCompleted.addEventListener("click", function()
				{
					var elesProgress = document.querySelectorAll(".stsh_stat_progress:not(.stsh_hidden)");
					for (var i = 0; i < elesProgress.length; i++)
					{
						if (elesProgress[i].dataset.tr === "100" && elesProgress[i].dataset.ap === "100")
						{
							elesProgress[i].classList.add("stsh_hidden");
						}
					}
				});
				
				var eleShowAll = document.querySelector("#stsh_stat_showAll");
				eleShowAll.addEventListener("click", function()
				{
					var eleHead = document.querySelector("#overall");
					while (eleHead.firstChild)
					{
						var child = eleHead.firstChild;
						if (child.classList && child.classList.contains("stsh_hidden"))
						{
							child.classList.remove("stsh_hidden");
						}
						
						eleHead.removeChild(eleHead.firstChild);
					}
					
					var i = keyIdArr.length - 1;
					if (i > -1)
					{
						eleHead.appendChild(valDataArr[keyIdArr[i]]);
					}
					for (i--; i > -1; i--)
					{
						insertBeforeElement(valDataArr[keyIdArr[i]], eleHead.firstElementChild);
					}
				});
				
				var eleSortBr = document.querySelector("#stsh_stat_sortBr");
				eleSortBr.addEventListener("click", function()
				{
					var eleHead = document.querySelector("#overall");
					if (eleHead)
					{
						while (eleHead.firstChild)
						{
							eleHead.removeChild(eleHead.firstChild);
						}
				
						var i = keyBrArr.length - 1;
						if (i > -1)
						{
							eleHead.appendChild(valDataArr[valBrArr[keyBrArr[i]]]);
						}
						for (i--; i > -1; i--)
						{
							insertBeforeElement(valDataArr[valBrArr[keyBrArr[i]]], eleHead.firstElementChild);
						}
					}
				});
				
				var eleSortTr = document.querySelector("#stsh_stat_sortTr");
				eleSortTr.addEventListener("click", function()
				{
					var eleHead = document.querySelector("#overall");
					if (eleHead)
					{
						while (eleHead.firstChild)
						{
							eleHead.removeChild(eleHead.firstChild);
						}
				
						var i = keyTrArr.length - 1;
						if (i > -1)
						{
							eleHead.appendChild(valDataArr[valTrArr[keyTrArr[i]]]);
						}
						for (i--; i > -1; i--)
						{
							insertBeforeElement(valDataArr[valTrArr[keyTrArr[i]]], eleHead.firstElementChild);
						}
					}
				});
				
				var eleSortAp = document.querySelector("#stsh_stat_sortAp");
				eleSortAp.addEventListener("click", function()
				{
					var eleHead = document.querySelector("#overall");
					if (eleHead)
					{
						while (eleHead.firstChild)
						{
							eleHead.removeChild(eleHead.firstChild);
						}
				
						var i = keyApArr.length - 1;
						if (i > -1)
						{
							eleHead.appendChild(valDataArr[valApArr[keyApArr[i]]]);
						}
						for (i--; i > -1; i--)
						{
							insertBeforeElement(valDataArr[valApArr[keyApArr[i]]], eleHead.firstElementChild);
						}
					}
				});
			}
		}, 100);
		
	} // End statistics.php
	
	if (url.indexOf("index.php") > -1 || url === "http://translation.steampowered.com/" || url === "https://translation.steampowered.com/")
	{
		var eleDes = document.querySelector("#verify-form > form");
		if (eleDes)
		{
			var eleSpan = document.createElement("span");
			eleSpan.classList.add("stsh_autoLoginOption");

			var eleInput = document.createElement("input");
			eleInput.id = "stsh_autoLogin";
			eleInput.setAttribute("type", "checkbox");
			eleInput.setAttribute("value", "auto");
			
			function autoLogin()
			{
				var eleImage = document.querySelector("#verify-form > form > input[class='image']");
				if (eleImage)
				{
					setTimeoutCustom(function()
					{
						var eleInput = document.querySelector("#stsh_autoLogin");
						if (eleInput && eleInput.checked)
						{
							eleImage.click();
						}
					}, 3000);
				}
			}
			
			if (GM_getValue("autoLogin", 0) == "true")
			{
				eleInput.checked = true;
				autoLogin();
			}

			eleInput.addEventListener("click", function (e)
			{
				var ele = e.target;
				if (ele.checked)
				{
					GM_setValue("autoLogin", "true");
					autoLogin();
				}
				else
				{
					GM_setValue("autoLogin", "false");
				}
			});

			var eleLabel = document.createElement("label");
			eleLabel.setAttribute("for", "stsh_autoLogin");
			eleLabel.textContent = " Auto Login";

			eleSpan.appendChild(eleInput);
			eleSpan.appendChild(eleLabel);
			eleDes.appendChild(eleSpan);
		}
		
	} // End index.php
	
	if (url.indexOf("try_auth.php") > -1)
	{
		setTimeoutCustom(function()
		{
			document.forms[0].submit();
		}, 3000);
		
	} // End try_auth.php
	
	window.addEventListener("beforeunload", function (e)
	{
		clearTimeoutAll();
		clearIntervalAll();
	});
	
} // End Main

function client()
{
	var clientScript = ' \
 \
 \
var timeoutList = new Array(); \
var intervalList = new Array(); \
 \
function setTimeoutCustom(func, tm, params) \
{ \
	var id = setTimeout(func, tm, params); \
	timeoutList.push(id); \
	return id; \
} \
 \
function clearTimeoutAll() \
{ \
	for (var i = 0; i < timeoutList.length; i++) \
	{ \
		clearTimeout(timeoutList[i]); \
	} \
} \
 \
function setIntervalCustom(func, tm, params) \
{ \
	var id = setInterval(func, tm, params); \
	intervalList.push(id); \
	return id; \
} \
 \
function clearIntervalAll() \
{ \
	for (var i = 0; i < intervalList.length; i++) \
	{ \
		clearInterval(intervalList[i]); \
	} \
} \
 \
function scrollToId(id, offset) \
{ \
	scrollToElement("#" + id, offset); \
} \
 \
function scrollToElement(selector, offset) \
{ \
	if (typeof offset === "undefined") \
	{ \
		offset = -20; \
	} \
	 \
	var ele = document.querySelector(selector); \
	if (ele) \
	{ \
		ele.scrollIntoView(true); \
		window.scrollBy(0, offset); \
	} \
} \
 \
function setVisibleSuggestion(visible) \
{ \
	var display = visible != true ? "none" : ""; \
	var els = document.querySelectorAll(".copy"); \
	for (var i = 0; i < els.length; i++) \
	{ \
		if (els[i].id.indexOf("showwalletkeys") < 0 && els[i].id != "abuse_report" \
			&& els[i].id != "moderator_announcement") \
		{ \
			if (els[i].style.display != display) \
			{ \
				els[i].style.display = display; \
			} \
		} \
	} \
} \
 \
function showSuggestion() \
{ \
	setVisibleSuggestion(true); \
} \
 \
function hideSuggestion() \
{ \
	setVisibleSuggestion(false); \
} \
 \
function pressHideSuggestion() \
{ \
	document.addEventListener("keydown", function(e) { \
		if (e.keyCode == 27) { \
			if (parent != null) \
			{ \
				parent.hideSuggestionsBox(); \
			} \
			else \
			{ \
				hideSuggestionsBox(); \
			} \
		} \
		return false; \
	}); \
} \
pressHideSuggestion(); \
 \
function clickToSelect(ele) \
{ \
	var range = document.createRange(); \
	range.setStartBefore(ele.firstChild); \
	range.setEndAfter(ele.lastChild); \
	var sel = window.getSelection(); \
	sel.removeAllRanges(); \
	sel.addRange(range); \
} \
 \
 \
function syncUrlArray() \
{ \
	var strStart = "showSuggestionsBox( \'"; \
	var strEnd = "\' ); return false;"; \
	var strCur = "&list_id="; \
	var strAll = "&endnext="; \
	var regPos = /&list_id=\\d+&endnext=\\d+/g; \
	var isEdit = false; \
	var eleDivs = []; \
	var urls = []; \
	 \
	var pattUrlTimestamp2 = /\\&t=[0-9]{6,}/g; \
	var pattUrlTimestamp4 = /\\&[0-9]{6,}\\&/g; \
 	 \
	var trKeys = document.querySelectorAll("#keylist > table:nth-child(1) > tbody:nth-child(1) > tr"); \
	for (var i = 0; i < trKeys.length; i++)  \
	{ \
		if (!trKeys[i].classList.contains("stsh_hidden")) \
		{ \
			var eleDiv = trKeys[i].childNodes[0].childNodes[0]; \
			if (typeof eleDiv.getAttribute != "undefined" \
				&& eleDiv.getAttribute("onclick") != null) \
			{ \
				eleDivs.push(eleDiv); \
			} \
		} \
	} \
	 \
	for (var i = 0, l = eleDivs.length; i < l; i++) \
	{ \
		var evOld = eleDivs[i].getAttribute("onclick"); \
		if (evOld != null) \
		{ \
			var url = evOld.replace(strStart,"").replace(strEnd,"").replace(regPos,""); \
			url = url + strCur + i + strAll + l; \
				\
			if (pattUrlTimestamp2.test(url)) \
			{ \
				url = url.replace(pattUrlTimestamp2,""); \
			} \
			if (pattUrlTimestamp4.test(url)) \
			{ \
				url = url.replace(pattUrlTimestamp4,"&"); \
			} \
			 \
			urls.push(url); \
			 \
			var evNew = strStart + url + strEnd; \
			if (evOld != evNew) \
			{ \
				eleDivs[i].setAttribute("onclick", evNew); \
				isEdit = true; \
			} \
		} \
	} \
	 \
	if (isEdit || typeof URLarray == "undefined" || URLarray.length != urls.length) \
	{ \
		URLarray = urls; \
	} \
} \
 \
function setFrameColor(color) \
{ \
	var frame = document.querySelector("div#suggestions_box iframe"); \
	if (frame != null) \
	{ \
		if (frame.style.backgroundColor != color) \
		{ \
			frame.style.setProperty("background-color", color, "important"); \
		} \
	} \
} \
 \
function padZero(num, size) \
{ \
	return (1e15+num+"").slice(-size); \
} \
 \
function doInstant() \
{ \
	var url = document.documentURI; \
	if (url.indexOf("user_activity.php") > -1) \
	{ \
		showSuggestion(); \
		 \
		document.addEventListener("DOMContentLoaded", function (e) \
		{ \
			if (typeof $ != "undefined") \
			{ \
				$(".dial").css("display", "none"); \
				setTimeoutCustom(function() \
				{ \
					/* Restore drawing progress */ \
					$(function() { \
						$(".dial").css("display", ""); \
						$(".dial").knob({ \
						  "draw" : function () { \
							$(this.i).val(this.cv + "%"); \
						  } \
						}); \
					}) \
				}, 500); \
			} \
		}); \
	} \
	else if (url.indexOf("translate.php") > -1) \
	{ \
		getsuggestionURL = function(urlno) \
		{ \
			/* Overwrite STS to remove timestamp */ \
			return URLarray[urlno]; \
		}; \
		 \
		var target = document.getElementById("keylist_container");  \
		if (target) \
		{ \
			var tmObSync = -1; \
			var observer = new MutationObserver(function(mutations) \
			{ \
				mutations.forEach(function(mutation) \
				{ \
					if (mutation.type !== "attributes" \
						|| mutation.target.tagName === "TR") \
					{ \
						clearTimeout(tmObSync); \
						tmObSync = setTimeout(function() \
						{ \
							syncUrlArray(); \
							/*console.log("syncUrlArray: " + tmObSync);*/ \
						}, 50); \
					} \
				}); \
			}); \
			 \
			var config = { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] }; \
			observer.observe(target, config); \
		} \
	} \
	else if (url.indexOf("suggestions.php") > -1) \
	{ \
		if (parent != window) \
		{ \
			var main = document.querySelector("#suggestionmain"); \
			if (main != null) \
			{ \
				var styleCp = window.getComputedStyle(main); \
				if (styleCp) \
				{ \
					var color = styleCp.backgroundColor; \
					parent.setFrameColor(color); \
				} \
			} \
		} \
	} \
	 \
	window.addEventListener("beforeunload", function (e) \
	{ \
		clearTimeoutAll(); \
		clearIntervalAll(); \
	}); \
	 \
} \
doInstant(); \
 \
';

	var eleClientScript = document.createElement("script");
	eleClientScript.innerHTML = clientScript;
	document.head.appendChild(eleClientScript);
} // End client

attachOnReady(client);
attachOnReady(main);



// End