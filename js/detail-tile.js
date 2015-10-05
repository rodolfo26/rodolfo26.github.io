function showChallengeAcceptModal(d,b,a,c){$("#loadingImage").show();"undefined"!=typeof a&&void 0!=a&&$.get(a,{challengeId:d,inviterUserIdHint:"undefined"!=typeof c?c:0},function(a){b.html(a);b.modal("show");$("#loadingImage").hide()})};var confirmationModal_button1Callback,confirmationModal_button2Callback;function showYesNoConfirmationModal(a,b,c,d){showConfirmationModal(a,b,"Yes",c,"No",d)}function showOkCancelConfirmationModal(a,b,c,d){showConfirmationModal(a,b,"Ok",c,"Cancel",d)}function showConfirmationModalButton(a,b){void 0==b?$(a).hide():($(a).show(),$(a).html(b))}
function centerConfirmationModal(){var a=document.documentElement.clientHeight||window.innerHeight,b=document.documentElement.scrollTop||document.body.scrollTop,c=$("#generalConfirmationModal").outerHeight();$("#generalConfirmationModal").css("top",b+a/2-c/2)}function showConfirmationModal(a,b,c,d,e,f){setUpConfirmationModalAndShow(a,b,c,d,e,f)}function showConfirmationModalTopOfPage(a,b,c,d,e,f){setUpConfirmationModalAndShow(a,b,c,d,e,f)}
function setUpConfirmationModalAndShow(a,b,c,d,e,f){$("#confirmationHeader").text(a);$("#confirmationDetails").html(b);showConfirmationModalButton("#confirmationModal_button1Button",c);showConfirmationModalButton("#confirmationModel_button2Button",e);confirmationModal_button1Callback=d;confirmationModal_button2Callback=f;$("#generalConfirmationModal").modal("show")}
function confirmationModal_button1Click(){$("#generalConfirmationModal").modal("hide");void 0!=confirmationModal_button1Callback&&confirmationModal_button1Callback()}function confirmationModal_button2Click(){$("#generalConfirmationModal").modal("hide");void 0!=confirmationModal_button2Callback&&confirmationModal_button2Callback()};var facebookPostDetails,urlToShare=$("#urlToShare").val(),displayTitle=$("#displayTitle").val(),imageUrl=$("#imageUrl").val(),shareType=$("#shareType").val(),referenceId=$("#referenceId").val(),shareCaption=$("#shareCaption").val(),shareProvider=$("#shareProvider").val(),fbClientID=$("#fbClientID").val();
window.twttr=function(a,b,c){var d,e=a.getElementsByTagName(b)[0];if(!a.getElementById(c))return a=a.createElement(b),a.id=c,a.src="//platform.twitter.com/widgets.js",e.parentNode.insertBefore(a,e),window.twttr||(d={_e:[],ready:function(a){d._e.push(a)}})}(document,"script","twitter-wjs");twttr.ready(function(){window.twttr.events.bind("tweet",function(){twitterSharedSuccess()})});window.___gcfg={lang:"en-US",parsetags:"onload"};
$(document).ready(function(){$(document).unbind("touchstart");var a=$.trim($("#smDescription").text());113<=a.length&&(110<a.length?(pos=a.substr(0,113).lastIndexOf(" "),pos+=1,117<pos&&(pos-=1)):pos=113,a=a.substr(0,pos).concat("..."));$("#smDescription").text(a);configureUrls();"NOT_TOOLTIP"==shareType?($("#socialButtons").show(),$("#shareButton").hide()):configureShareTooltip()});
function configureUrls(){logToConsole("imageUrl ["+imageUrl+"]");logToConsole("Qualified imageUrl ["+qualifyImageURL(imageUrl)+"]");logToConsole("urlToShare ["+urlToShare+"]");logToConsole("Qualified urlToShare ["+qualifyURL(urlToShare)+"]");logToConsole("displayTitle ["+displayTitle+"]");logToConsole("type ["+shareType+"]");logToConsole("referenceId ["+referenceId+"]");logToConsole("Content = "+$("#smDescription").text());logToConsole("Caption['"+shareCaption+"']");var a;a=null!=urlToShare&&0<urlToShare.trim().length?
urlToShare.lastIndexOf("!")==urlToShare.length-1?urlToShare.substr(0,urlToShare.length-1).concat("%21"):urlToShare:"";$("#twitterLink").attr("data-url",qualifyURL(a));$("#twitterLink").attr("data-text",$("#smDescription").text());$(".g-plus").attr("href","https://plus.google.com/share?url="+qualifyURL(urlToShare));$(".pin-it-button").attr("href","http://pinterest.com/pin/create/button/?url="+qualifyURL(urlToShare)+"&media="+qualifyImageURL(imageUrl)+"&description="+$("#smDescription").text());$("#googlePlusImage").attr("src",
qualifyImageURL(imageUrl));"true"!==$("#useDirectLinkedIn").val()?$("#linkedInLink").attr("data-url",qualifyURL(urlToShare)):$("#linkedInLink").attr("href",prepareLinkedInPost(urlToShare))}function shareViaEmail(){$.ajax({type:"POST",url:'<lvc2:url value="/social/shareViaEmail"/>',data:{emailAddresses:$("#recipientEmailInput").val()},success:function(){closeModal("#shareViaEmailModal")},error:function(){}})}function showShareViaEmailModal(){$("#shareViaEmailModal").modal("show")}
function closeModal(a){$(a).hide()}function prepareFacebookPost(){facebookPostDetails={method:"feed",display:"popup",link:qualifyURL(urlToShare),picture:qualifyImageURL(imageUrl),name:displayTitle,caption:shareCaption,description:$("#smDescription").text()};checkFbLoginStatus1(postToFacebook1)}
function prepareLinkedInPost(a){a=a.split("&title").join("%26title");return"http://www.linkedin.com/cws/share?mini=true&url="+qualifyURL(a)+"&title="+displayTitle+"&summary="+$("#smDescription").text()+"&source="+qualifyURL(a)}function cleanURLParams(a){return encodeURI(a.split("?").join("%3F"))}function postToFacebook1(){FB.ui(facebookPostDetails,facebookSharedSuccess1)}
function qualifyURL(a){var b=document.createElement("a");b.href=a;if(!0==$.browser.msie&&-1!=b.href.indexOf("calculators"))return a=document.createElement("a"),a=window.location.href;b.href=a;return b.href}function contentLinkId(a){return a.split("/").pop()}
function initiateSignIn(){var a=qualifyURL(window.location.pathname),b=$("#googlePlusClientId").val(),a={contenturl:qualifyURL(window.location.pathname)+"?allowGoogleParam=Y",contentdeeplinkid:"/"+contentLinkId(a)+"?allowGoogleParam=Y",clientid:b+".apps.googleusercontent.com",cookiepolicy:"single_host_origin",calltoactionlabel:"READ_MORE",calltoactionurl:qualifyURL(window.location.pathname)+"?allowGoogleParam=Y",calltoactiondeeplinkid:"/"+contentLinkId(a)+"?allowGoogleParam=Y"};gapi.interactivepost.render("share_button",
a)}function qualifyURL1(a){var b=document.createElement("a");b.href=a;return b.href}function qualifyImageURL(a){a=qualifyURL1(a);if("ARTICLE"==shareType||"BLOG"==shareType){var b=a.lastIndexOf("."),c=a.substring(0,b),b=a.substring(b);-1==c.indexOf("_detailed")&&(a=c+"_detailed"+b);return-1==a.indexOf("?")?a+"?contextOverride="+shareProvider:a.substring(0,a.indexOf("?"))+"?contextOverride="+shareProvider}return a}function facebookSharedSuccess1(a){void 0!=a&&recordAction("FACEBOOK")}
function twitterSharedSuccess(){recordAction("TWITTER")}function linkedInSharedSuccess(){recordAction("LINKEDIN")}function googlePlusSharedSuccess(a){"on"==a.state&&recordAction("GOOGLEPLUS")}function pInterestSharedSuccess(){recordAction("PINTEREST")}
function recordAction(a){$.ajax({type:"POST",url:'<lvc2:url value="/social"/>',data:{network:a,relationship:shareType,reference:referenceId,title:displayTitle},success:function(){var a=$("#shareCountControl").val();if(""!=a){var c=$("#"+a).text(),c=parseInt(c)+1;$("#"+a).text(c)}},error:function(){}})}function prepareGooglePlusPost(){initiateSignIn()}
function weiboLinkfun(){window.open("http://service.weibo.com/share/share.php?mini=true&url="+qualifyURL(urlToShare)+"&pic="+qualifyImageURL(imageUrl)+"&title="+$("#smDescription").text()+"&lineN="+$("#smDescription").text(),"signin","height=300,width=665")}
function wechatLinkfun(){window.open("../BarCodeGenerator.jsp?urlwechat="+qualifyURL(urlToShare),"_blank","directories=no,titlebar=no,toolbar=no,location=0,status=no,menubar=no,scrollbars=no,resizable=no,width=250,height=250").moveTo(screen.width/2,screen.height/2)}
function configureShareTooltip(){$("#shareButton").qtip({content:{text:$("#socialButtons"),title:"Social Sharing"},position:{my:"top center",at:"top center",adjust:{x:90,y:8}},show:"click mouseover",hide:{fixed:!0,delay:500},style:{classes:"ui-tooltip-shadow ui-tooltip-rounded ui-tooltip-light"}})}window.fbAsyncInit=function(){FB.init({appId:fbClientID,status:!0,cookie:!0,xfbml:!0})};
(function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="//connect.facebook.net/en_US/all.js",d.parentNode.insertBefore(a,d))})(document,"script","facebook-jssdk");function checkFbLoginStatus1(a){FB.login(function(){FB.getLoginStatus(function(b){"connected"===b.status?FB.api("/me",function(b){saveFbUserId(b);a()}):("not_authorized"===b.status&&logToConsole("not authorized"),fbLogin(a))})})}
function saveFbUserId(a){$.ajax({type:"GET",url:socCheckMemURL,data:{memberId:a.id},success:function(b){b||doSaveAction(a.id)},error:function(){}})}function fbLogin(a){FB.login(function(b){b.authResponse&&checkFbLoginStatus1(a)})}function doSaveAction(a){$.ajax({type:"POST",url:socSaveMemIDURL,data:{memberId:a},success:function(){},error:function(){}})}
function getFbFriends(){$(".fbLvFriendsBlock").remove();$(".fbFriendsBlock").remove();$("#noLvActivity").hide();$("#facebookLoadingImg").show();$("#facebookLoadingLv").show();FB.api("/me/friends",function(a){if(a.data){totalNumberOfFbFriends=a.data.length;var b=fbLvFriendCount=fbOnlyFriendCount=0;$.each(a.data,function(a,d){$.ajax({type:"GET",url:socCheckMemURL,data:{memberId:d.id},success:function(a){a?($("#lvFbFriends").append("<div class='fbLvFriendsBlock' fbFriendId='"+d.id+"'><img class='lvFbFriendsImg' src='//graph.facebook.com/"+
d.id+"/picture?type=large' alt='Facebook picture' /><span>"+d.name+"</span><br /><a class='button orange' href='#' onclick='addFriend("+d.id+", true); return false;'>Add</a></div>"),fbLvFriendCount++):($("#fbOnlyFriends").append("<div class='fbFriendsBlock' fbFriendId='"+d.id+"'><img class='fbOnlyFriendsImg' src='//graph.facebook.com/"+d.id+"/picture?type=square' alt='Facebook picture' /><span>"+d.name+"</span><br /><a class='button orange' href='#' onclick='sendInboxMessage("+d.id+", 0, singleInviteComplete); return false;'>Invite</a></div>"),
fbOnlyFriendCount++);b++;checkIfFriendFetchComplete(b)},error:function(){}})})}else alert("Error!")})}
function checkIfFriendFetchComplete(a){totalNumberOfFbFriends==a&&($("#facebookLoadingImg").hide(),$("#facebookLoadingLv").hide(),0==$(".fbLvFriendsBlock").length?($("#noLvActivity").show(),$("#fbLvFriendsHeading").hide(),$("#inviteAllFbLvContainer").hide()):1==$(".fbLvFriendsBlock").length&&$("#inviteAllFbLvContainer").hide(),0==$(".fbFriendsBlock").length?($("#fbOnlyFriendsHeading").hide(),$("#inviteAllFbContainer").hide()):1==$(".fbFriendsBlock").length&&$("#inviteAllFbContainer").hide())}
function sendInboxMessage(a,b,c){FB.ui({method:"send",to:a,name:"LivingVitality",link:qualifyURL($("#registerLink").html().trim()),description:$("#inviteFriendContent").html(),picture:"http://dqjcvgy8s3pvn.cloudfront.net/prod/small/15cb883e-9c0b-455f-8f3c-61c5c01060d7_fb_image_266x266.jpg"},function(a){c(b,a)})}function singleInviteComplete(a,b){b&&b.success&&($("#inviteFacebookFriendsModal").modal("hide"),showOverlay("facebookFriendInvitedOverlay"))}
function addFriend(a,b){$.ajax({type:"POST",url:socAddLvFriendURL,data:{fbUserId:a},success:function(){b&&($("#inviteFacebookFriendsModal").modal("hide"),showOverlay("facebookFriendInvitedOverlay"))},error:function(){$("#inviteFacebookFriendsModal").modal("hide")}})}function inviteAllComplete(a){fbOnlyFriendCount==a&&($("#ajaxImageInviteAllFb").hide(),$("#inviteFacebookFriendsModal").modal("hide"),showOverlay("facebookFriendInvitedOverlay"))}
function inviteAllFbFriends(a){var b=0;$(".fbFriendsBlock").each(function(){b++;var c=$(this).attr("fbFriendId");sendInboxMessage(c,b,a)})}function inviteAllFbLvFriends(){$(".fbLvFriendsBlock").each(function(){addFriend($(this).attr("fbFriendId"),!1)});$("#ajaxImageInviteAllFb").hide();$("#inviteFacebookFriendsModal").modal("hide");showOverlay("facebookFriendInvitedOverlay")};function RecordDisplayHelper(){this.pageNum=0;this.name="records";this.loadMoreURL="records/loadMore";this.searchURL="records/search";this.loadThisManyMoreURL="records/loadThisManyMore";this.lastSearch="";this.postLoadCallback=function(){};this.validateSearchString=function(a){return 0==a.length?(showValidationModal("Please enter in a value to search"),!1):3>a.length?(showValidationModal("Enter at least 3 characters to perform a search."),!1):!0};this.formatId=function(a){return"#"+this.name+"_"+
a};this.search=function(a){this.validateSearchString(a)&&this.searchNoValidation(a)};this.searchNoValidation=function(a,b){var c=$(this.formatId("loadingImg"));c.show();var d=this;this.lastSearch=a;$(this.formatId("recordList")).html("");$.ajax({type:"POST",url:this.searchURL,data:{searchString:a},success:function(a){d.fetchResultsSuccessCallback(a);(isUserListEmpty="true"===$("#isUserListEmpty").val())&&$("#noresultsbit").show();b&&b.call()},error:function(){c.hide()}})};this.loadMore=function(){var a=
$(this.formatId("loadingImg")),b=this;a.show();$.ajax({type:"POST",url:this.loadMoreURL,success:function(a){b.fetchResultsSuccessCallback(a)},error:function(){a.hide()}})};this.loadThisManyMore=function(a){var b=$(this.formatId("loadingImg")),c=this;b.show();$.ajax({type:"POST",url:this.loadThisManyMoreURL,data:{numRecords:a},success:function(a){c.fetchResultsSuccessCallback(a)},error:function(){b.hide()}})};this.fetchResultsSuccessCallback=function(a){$(this.formatId("loadingImg")).hide();0<=a.indexOf("<\!--lastpage--\>")?
$(this.formatId("getMoreButton")).fadeOut(200):$(this.formatId("getMoreButton")).fadeIn(200);var b=this.pageNum++,b="more"+this.name+b;$(this.formatId("recordList")).append("<div style='display:none' id='"+b+"'>"+a+"</div>");this.postLoadCallback();$("#"+b).fadeIn(500)}};window.GWTContextPath=$("#globalContextRoot").val();userUnit=$("#userUnitOfMeasure").val();current_path=window.location.pathname;!function(e){var m=function(a,b){this.element=e(a);this.format=d.parseFormat(b.format||this.element.data("date-format")||"mm/dd/yyyy");this.picker=e(d.template).appendTo("body").on({click:e.proxy(this.click,this),mousedown:e.proxy(this.mousedown,this)});this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on"):!1;if(this.isInput)this.element.on({focus:e.proxy(this.show,this),blur:e.proxy(this._hide,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,
this)});else if(this.component)this.component.on("click",e.proxy(this.show,this));else this.element.on("click",e.proxy(this.show,this));this.autoclose=!1;"autoclose"in b?this.autoclose=b.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose"));this.viewMode=0;this.weekStart=b.weekStart||this.element.data("date-weekstart")||0;this.weekEnd=0==this.weekStart?6:this.weekStart-1;this.startDate=-Infinity;this.endDate=Infinity;this.setStartDate(b.startDate||this.element.data("date-startdate"));
this.setEndDate(b.endDate||this.element.data("date-enddate"));this.fillDow();this.fillMonths();this.update();this.showMode()};m.prototype={constructor:m,show:function(a){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();e(window).on("resize",e.proxy(this.place,this));a&&(a.stopPropagation(),a.preventDefault());if(!this.isInput)e(document).on("mousedown",e.proxy(this.hide,this));this.element.trigger({type:"show",date:this.date})},_hide:function(a){if(e.browser.msie){var b=
this,c=arguments,f=function(){clearTimeout(l);a.target.focus();b.picker.off("click",f)};this.picker.on("click",f);var l=setTimeout(function(){b.hide.apply(b,c);b.picker.off("click",f)},100)}else return this.hide.apply(this,arguments)},hide:function(a){this.picker.hide();e(window).off("resize",this.place);this.viewMode=0;this.showMode();this.isInput||e(document).off("mousedown",this.hide);a&&a.currentTarget.value&&this.setValue();this.element.trigger({type:"hide",date:this.date})},setValue:function(){var a=
d.formatDate(this.date,this.format);this.isInput?this.element.prop("value",a):(this.component&&this.element.find("input").prop("value",a),this.element.data("date",a))},setStartDate:function(a){this.startDate=a||-Infinity;-Infinity!==this.startDate&&(this.startDate=d.parseDate(this.startDate,this.format));this.update();this.updateNavArrows()},setEndDate:function(a){this.endDate=a||Infinity;Infinity!==this.endDate&&(this.endDate=d.parseDate(this.endDate,this.format));this.update();this.updateNavArrows()},
place:function(){var a=this.component?this.component.offset():this.element.offset();this.picker.css({top:a.top+this.height,left:a.left})},update:function(){this.date=d.parseDate(this.isInput?this.element.prop("value"):this.element.data("date"),this.format);this.viewDate=this.date<this.startDate?new Date(this.startDate):this.date>this.endDate?new Date(this.endDate):new Date(this.date);this.fill()},fillDow:function(){for(var a=this.weekStart,b="<tr>";a<this.weekStart+7;)b+='<th class="dow">'+d.dates.daysMin[a++%
7]+"</th>";this.picker.find(".datepicker-days thead").append(b+"</tr>")},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+d.dates.monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},fill:function(){var a=new Date(this.viewDate),b=a.getFullYear(),c=a.getMonth(),a=-Infinity!==this.startDate?this.startDate.getFullYear():-Infinity,f=-Infinity!==this.startDate?this.startDate.getMonth():-Infinity,e=Infinity!==this.endDate?this.endDate.getFullYear():Infinity,
j=Infinity!==this.endDate?this.endDate.getMonth():Infinity,h=this.date.valueOf();this.picker.find(".datepicker-days th:eq(1)").text(d.dates.months[c]+" "+b);this.updateNavArrows();this.fillMonths();var g=new Date(b,c-1,28,0,0,0,0),k=d.getDaysInMonth(g.getFullYear(),g.getMonth());g.setDate(k);g.setDate(k-(g.getDay()-this.weekStart+7)%7);k=new Date(g);k.setDate(k.getDate()+42);k=k.valueOf();html=[];for(var i;g.valueOf()<k;){g.getDay()==this.weekStart&&html.push("<tr>");i="";if(g.getFullYear()<b||g.getFullYear()==
b&&g.getMonth()<c)i+=" old";else if(g.getFullYear()>b||g.getFullYear()==b&&g.getMonth()>c)i+=" new";g.valueOf()==h&&(i+=" active");if(g.valueOf()<this.startDate||g.valueOf()>this.endDate)i+=" disabled";html.push('<td class="day'+i+'">'+g.getDate()+"</td>");g.getDay()==this.weekEnd&&html.push("</tr>");g.setDate(g.getDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(html.join(""));c=this.date.getFullYear();h=this.picker.find(".datepicker-months").find("th:eq(1)").text(b).end().find("span").removeClass("active");
c==b&&h.eq(this.date.getMonth()).addClass("active");(b<a||b>e)&&h.addClass("disabled");b==a&&h.slice(0,f).addClass("disabled");b==e&&h.slice(j+1).addClass("disabled");html="";b=10*parseInt(b/10,10);f=this.picker.find(".datepicker-years").find("th:eq(1)").text(b+"-"+(b+9)).end().find("td");b-=1;for(j=-1;11>j;j++)html+='<span class="year'+(-1==j||10==j?" old":"")+(c==b?" active":"")+(b<a||b>e?" disabled":"")+'">'+b+"</span>",b+=1;f.html(html)},updateNavArrows:function(){var a=new Date(this.viewDate),
b=a.getFullYear(),a=a.getMonth();switch(this.viewMode){case 0:-Infinity!==this.startDate&&b<=this.startDate.getFullYear()&&a<=this.startDate.getMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"});Infinity!==this.endDate&&b>=this.endDate.getFullYear()&&a>=this.endDate.getMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:-Infinity!==this.startDate&&b<=this.startDate.getFullYear()?
this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),Infinity!==this.endDate&&b>=this.endDate.getFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},click:function(a){a.stopPropagation();a.preventDefault();a=e(a.target).closest("span, td, th");if(1==a.length)switch(a[0].nodeName.toLowerCase()){case "th":switch(a[0].className){case "switch":this.showMode(1);break;case "prev":case "next":this.viewDate["set"+
d.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+d.modes[this.viewMode].navFnc].call(this.viewDate)+d.modes[this.viewMode].navStep*("prev"==a[0].className?-1:1)),this.fill()}break;case "span":if(!a.is(".disabled")){if(a.is(".month")){var b=a.parent().find("span").index(a);this.viewDate.setMonth(b)}else{var c=parseInt(a.text(),10)||0;this.viewDate.setFullYear(c)}this.showMode(-1);this.fill()}break;case "td":if(a.is(".day")&&!a.is(".disabled")){var f=parseInt(a.text(),10)||1,c=
this.viewDate.getFullYear(),b=this.viewDate.getMonth();a.is(".old")?0==b?(b=11,c-=1):b-=1:a.is(".new")&&(11==b?(b=0,c+=1):b+=1);this.date=new Date(c,b,f,0,0,0,0);this.viewDate=new Date(c,b,f,0,0,0,0);this.fill();this.setValue();this.element.trigger({type:"changeDate",date:this.date});var l;this.isInput?l=this.element:this.component&&(l=this.element.find("input"));l&&(l.change(),this.autoclose&&l.blur())}}},mousedown:function(a){a.stopPropagation();a.preventDefault()},moveMonth:function(a,b){if(!b)return a;
var c=new Date(a.valueOf()),f=c.getDate(),e=c.getMonth(),d=Math.abs(b),h,b=0<b?1:-1;if(1==d){if(d=-1==b?function(){return c.getMonth()==e}:function(){return c.getMonth()!=h},h=e+b,c.setMonth(h),0>h||11<h)h=(h+12)%12}else{for(var g=0;g<d;g++)c=this.moveMonth(c,b);h=c.getMonth();c.setDate(f);d=function(){return h!=c.getMonth()}}for(;d();)c.setDate(--f),c.setMonth(h);return c},moveYear:function(a,b){return this.moveMonth(a,12*b)},keydown:function(a){if(this.picker.is(":not(:visible)"))27==a.keyCode&&
this.show();else{var b;switch(a.keyCode){case 27:this.hide();a.preventDefault();break;case 37:case 39:b=37==a.keyCode?-1:1;a.ctrlKey?(this.date=this.moveYear(this.date,b),this.viewDate=this.moveYear(this.viewDate,b)):a.shiftKey?(this.date=this.moveMonth(this.date,b),this.viewDate=this.moveMonth(this.viewDate,b)):(this.date.setDate(this.date.getDate()+b),this.viewDate.setDate(this.viewDate.getDate()+b));this.setValue();this.update();a.preventDefault();break;case 38:case 40:b=38==a.keyCode?-1:1;a.ctrlKey?
(this.date=this.moveYear(this.date,b),this.viewDate=this.moveYear(this.viewDate,b)):a.shiftKey?(this.date=this.moveMonth(this.date,b),this.viewDate=this.moveMonth(this.viewDate,b)):(this.date.setDate(this.date.getDate()+7*b),this.viewDate.setDate(this.viewDate.getDate()+7*b));this.setValue();this.update();a.preventDefault();break;case 13:this.hide(),a.preventDefault()}}},showMode:function(a){a&&(this.viewMode=Math.max(0,Math.min(2,this.viewMode+a)));this.picker.find(">div").hide().filter(".datepicker-"+
d.modes[this.viewMode].clsName).show();this.updateNavArrows()}};e.fn.datepicker=function(a){var b=Array.apply(null,arguments);b.shift();return this.each(function(){var c=e(this),f=c.data("datepicker"),d="object"==typeof a&&a;f||c.data("datepicker",f=new m(this,e.extend({},e.fn.datepicker.defaults,d)));"string"==typeof a&&f[a].apply(f,b)})};e.fn.datepicker.defaults={};e.fn.datepicker.Constructor=m;var d={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},
{clsName:"years",navFnc:"FullYear",navStep:10}],dates:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),daysShort:"Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),daysMin:"Su Mo Tu We Th Fr Sa Su".split(" "),months:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")},isLeapYear:function(a){return 0===a%4&&0!==a%100||0===a%400},getDaysInMonth:function(a,
b){return[31,d.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},parseFormat:function(a){var b=a.match(/[.\/ -].*?/),a=a.split(/\W+/);if(!b||!a||0==a.length)throw Error("Invalid date format.");return{separator:b,parts:a}},parseDate:function(a,b){if(a instanceof Date)return a;var c=a?a.split(b.separator):[],a=new Date,f,a=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);if(c.length==b.parts.length)for(var d=0,j=b.parts.length;d<j;d++){f=parseInt(c[d],10)||1;switch(b.parts[d]){case "MM":f=
e(this.dates.months).filter(function(){var a=this.slice(0,c[d].length),b=c[d].slice(0,a.length);return a==b});f=e.inArray(f[0],this.dates.months)+1;break;case "M":f=e(this.dates.monthsShort).filter(function(){var a=this.slice(0,c[d].length),b=c[d].slice(0,a.length);return a==b}),f=e.inArray(f[0],this.dates.monthsShort)+1}switch(b.parts[d]){case "dd":case "d":a.setDate(f);break;case "mm":case "m":case "MM":case "M":a.setMonth(f-1);break;case "yy":a.setFullYear(2E3+f);break;case "yyyy":a.setFullYear(f)}}return a},
formatDate:function(a,b){var c={d:a.getDate(),m:a.getMonth()+1,M:this.dates.monthsShort[a.getMonth()],MM:this.dates.months[a.getMonth()],yy:a.getFullYear().toString().substring(2),yyyy:a.getFullYear()};c.dd=(10>c.d?"0":"")+c.d;c.mm=(10>c.m?"0":"")+c.m;for(var a=[],d=0,e=b.parts.length;d<e;d++)a.push(c[b.parts[d]]);return a.join(b.separator)},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',
contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};d.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+d.headTemplate+'<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">'+d.headTemplate+d.contTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+d.headTemplate+d.contTemplate+"</table></div></div>"}(window.jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(H){var r;H.fn.emptyForce=function(){for(var ab=0,ac;(ac=H(this)[ab])!=null;ab++){if(ac.nodeType===1){jQuery.cleanData(ac.getElementsByTagName("*"))}if(H.jqplot_use_excanvas){ac.outerHTML=""}else{while(ac.firstChild){ac.removeChild(ac.firstChild)}}ac=null}return H(this)};H.fn.removeChildForce=function(ab){while(ab.firstChild){this.removeChildForce(ab.firstChild);ab.removeChild(ab.firstChild)}};H.jqplot=function(ah,ae,ac){var ad,ab;if(ac==null){if(jQuery.isArray(ae)){ad=ae;ab=null}else{if(typeof(ae)==="object"){ad=null;ab=ae}}}else{ad=ae;ab=ac}var ag=new N();H("#"+ah).removeClass("jqplot-error");if(H.jqplot.config.catchErrors){try{ag.init(ah,ad,ab);ag.draw();ag.themeEngine.init.call(ag);return ag}catch(af){var ai=H.jqplot.config.errorMessage||af.message;H("#"+ah).append('<div class="jqplot-error-message">'+ai+"</div>");H("#"+ah).addClass("jqplot-error");document.getElementById(ah).style.background=H.jqplot.config.errorBackground;document.getElementById(ah).style.border=H.jqplot.config.errorBorder;document.getElementById(ah).style.fontFamily=H.jqplot.config.errorFontFamily;document.getElementById(ah).style.fontSize=H.jqplot.config.errorFontSize;document.getElementById(ah).style.fontStyle=H.jqplot.config.errorFontStyle;document.getElementById(ah).style.fontWeight=H.jqplot.config.errorFontWeight}}else{ag.init(ah,ad,ab);ag.draw();ag.themeEngine.init.call(ag);return ag}};H.jqplot.version="1.0.0b2_r1012";H.jqplot.CanvasManager=function(){if(typeof H.jqplot.CanvasManager.canvases=="undefined"){H.jqplot.CanvasManager.canvases=[];H.jqplot.CanvasManager.free=[]}var ab=[];this.getCanvas=function(){var ae;var ad=true;if(!H.jqplot.use_excanvas){for(var af=0,ac=H.jqplot.CanvasManager.canvases.length;af<ac;af++){if(H.jqplot.CanvasManager.free[af]===true){ad=false;ae=H.jqplot.CanvasManager.canvases[af];H.jqplot.CanvasManager.free[af]=false;ab.push(af);break}}}if(ad){ae=document.createElement("canvas");ab.push(H.jqplot.CanvasManager.canvases.length);H.jqplot.CanvasManager.canvases.push(ae);H.jqplot.CanvasManager.free.push(false)}return ae};this.initCanvas=function(ac){if(H.jqplot.use_excanvas){return window.G_vmlCanvasManager.initElement(ac)}return ac};this.freeAllCanvases=function(){for(var ad=0,ac=ab.length;ad<ac;ad++){this.freeCanvas(ab[ad])}ab=[]};this.freeCanvas=function(ac){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(H.jqplot.CanvasManager.canvases[ac]);H.jqplot.CanvasManager.canvases[ac]=null}else{var ad=H.jqplot.CanvasManager.canvases[ac];ad.getContext("2d").clearRect(0,0,ad.width,ad.height);H(ad).unbind().removeAttr("class").removeAttr("style");H(ad).css({left:"",top:"",position:""});ad.width=0;ad.height=0;H.jqplot.CanvasManager.free[ac]=true}}};H.jqplot.log=function(){if(window.console){window.console.log.apply(window.console,arguments)}};H.jqplot.config={addDomReference:false,enablePlugins:false,defaultHeight:300,defaultWidth:400,UTCAdjust:false,timezoneOffset:new Date(new Date().getTimezoneOffset()*60000),errorMessage:"",errorBackground:"",errorBorder:"",errorFontFamily:"",errorFontSize:"",errorFontStyle:"",errorFontWeight:"",catchErrors:false,defaultTickFormatString:"%.1f",defaultColors:["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],defaultNegativeColors:["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"],dashLength:4,gapLength:4,dotGapLength:2.5,srcLocation:"jqplot/src/",pluginLocation:"jqplot/src/plugins/"};H.jqplot.arrayMax=function(ab){return Math.max.apply(Math,ab)};H.jqplot.arrayMin=function(ab){return Math.min.apply(Math,ab)};H.jqplot.enablePlugins=H.jqplot.config.enablePlugins;H.jqplot.support_canvas=function(){if(typeof H.jqplot.support_canvas.result=="undefined"){H.jqplot.support_canvas.result=!!document.createElement("canvas").getContext}return H.jqplot.support_canvas.result};H.jqplot.support_canvas_text=function(){if(typeof H.jqplot.support_canvas_text.result=="undefined"){if(window.G_vmlCanvasManager!==r&&window.G_vmlCanvasManager._version>887){H.jqplot.support_canvas_text.result=true}else{H.jqplot.support_canvas_text.result=!!(document.createElement("canvas").getContext&&typeof document.createElement("canvas").getContext("2d").fillText=="function")}}return H.jqplot.support_canvas_text.result};H.jqplot.use_excanvas=(H.browser.msie&&!H.jqplot.support_canvas())?true:false;H.jqplot.preInitHooks=[];H.jqplot.postInitHooks=[];H.jqplot.preParseOptionsHooks=[];H.jqplot.postParseOptionsHooks=[];H.jqplot.preDrawHooks=[];H.jqplot.postDrawHooks=[];H.jqplot.preDrawSeriesHooks=[];H.jqplot.postDrawSeriesHooks=[];H.jqplot.preDrawLegendHooks=[];H.jqplot.addLegendRowHooks=[];H.jqplot.preSeriesInitHooks=[];H.jqplot.postSeriesInitHooks=[];H.jqplot.preParseSeriesOptionsHooks=[];H.jqplot.postParseSeriesOptionsHooks=[];H.jqplot.eventListenerHooks=[];H.jqplot.preDrawSeriesShadowHooks=[];H.jqplot.postDrawSeriesShadowHooks=[];H.jqplot.ElemContainer=function(){this._elem;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null}};H.jqplot.ElemContainer.prototype.createElement=function(ae,ag,ac,ad,ah){this._offsets=ag;var ab=ac||"jqplot";var af=document.createElement(ae);this._elem=H(af);this._elem.addClass(ab);this._elem.css(ad);this._elem.attr(ah);af=null;return this._elem};H.jqplot.ElemContainer.prototype.getWidth=function(){if(this._elem){return this._elem.outerWidth(true)}else{return null}};H.jqplot.ElemContainer.prototype.getHeight=function(){if(this._elem){return this._elem.outerHeight(true)}else{return null}};H.jqplot.ElemContainer.prototype.getPosition=function(){if(this._elem){return this._elem.position()}else{return{top:null,left:null,bottom:null,right:null}}};H.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top};H.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left};H.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css("bottom")};H.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css("right")};function s(ab){H.jqplot.ElemContainer.call(this);this.name=ab;this._series=[];this.show=false;this.tickRenderer=H.jqplot.AxisTickRenderer;this.tickOptions={};this.labelRenderer=H.jqplot.AxisLabelRenderer;this.labelOptions={};this.label=null;this.showLabel=true;this.min=null;this.max=null;this.autoscale=false;this.pad=1.2;this.padMax=null;this.padMin=null;this.ticks=[];this.numberTicks;this.tickInterval;this.renderer=H.jqplot.LinearAxisRenderer;this.rendererOptions={};this.showTicks=true;this.showTickMarks=true;this.showMinorTicks=true;this.drawMajorGridlines=true;this.drawMinorGridlines=false;this.drawMajorTickMarks=true;this.drawMinorTickMarks=true;this.useSeriesColor=false;this.borderWidth=null;this.borderColor=null;this._dataBounds={min:null,max:null};this._intervalStats=[];this._offsets={min:null,max:null};this._ticks=[];this._label=null;this.syncTicks=null;this.tickSpacing=75;this._min=null;this._max=null;this._tickInterval=null;this._numberTicks=null;this.__ticks=null;this._options={}}s.prototype=new H.jqplot.ElemContainer();s.prototype.constructor=s;s.prototype.init=function(){this.renderer=new this.renderer();this.tickOptions.axis=this.name;if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTicks}if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTickMarks}if(this.tickOptions.showLabel==null){this.tickOptions.showLabel=this.showTicks}if(this.label==null||this.label==""){this.showLabel=false}else{this.labelOptions.label=this.label}if(this.showLabel==false){this.labelOptions.show=false}if(this.pad==0){this.pad=1}if(this.padMax==0){this.padMax=1}if(this.padMin==0){this.padMin=1}if(this.padMax==null){this.padMax=(this.pad-1)/2+1}if(this.padMin==null){this.padMin=(this.pad-1)/2+1}this.pad=this.padMax+this.padMin-1;if(this.min!=null||this.max!=null){this.autoscale=false}if(this.syncTicks==null&&this.name.indexOf("y")>-1){this.syncTicks=true}else{if(this.syncTicks==null){this.syncTicks=false}}this.renderer.init.call(this,this.rendererOptions)};s.prototype.draw=function(ab,ac){if(this.__ticks){this.__ticks=null}return this.renderer.draw.call(this,ab,ac)};s.prototype.set=function(){this.renderer.set.call(this)};s.prototype.pack=function(ac,ab){if(this.show){this.renderer.pack.call(this,ac,ab)}if(this._min==null){this._min=this.min;this._max=this.max;this._tickInterval=this.tickInterval;this._numberTicks=this.numberTicks;this.__ticks=this._ticks}};s.prototype.reset=function(){this.renderer.reset.call(this)};s.prototype.resetScale=function(ab){H.extend(true,this,{min:null,max:null,numberTicks:null,tickInterval:null,_ticks:[],ticks:[]},ab);this.resetDataBounds()};s.prototype.resetDataBounds=function(){var ai=this._dataBounds;ai.min=null;ai.max=null;var ac,aj,ag;var ad=(this.show)?true:false;for(var af=0;af<this._series.length;af++){aj=this._series[af];if(aj.show){ag=aj._plotData;if(aj._type==="line"&&aj.renderer.bands.show&&this.name.charAt(0)!=="x"){ag=[[0,aj.renderer.bands._min],[1,aj.renderer.bands._max]]}var ab=1,ah=1;if(aj._type!=null&&aj._type=="ohlc"){ab=3;ah=2}for(var ae=0,ac=ag.length;ae<ac;ae++){if(this.name=="xaxis"||this.name=="x2axis"){if((ag[ae][0]!=null&&ag[ae][0]<ai.min)||ai.min==null){ai.min=ag[ae][0]}if((ag[ae][0]!=null&&ag[ae][0]>ai.max)||ai.max==null){ai.max=ag[ae][0]}}else{if((ag[ae][ab]!=null&&ag[ae][ab]<ai.min)||ai.min==null){ai.min=ag[ae][ab]}if((ag[ae][ah]!=null&&ag[ae][ah]>ai.max)||ai.max==null){ai.max=ag[ae][ah]}}}if(ad&&aj.renderer.constructor!==H.jqplot.BarRenderer){ad=false}else{if(ad&&this._options.hasOwnProperty("forceTickAt0")&&this._options.forceTickAt0==false){ad=false}else{if(ad&&aj.renderer.constructor===H.jqplot.BarRenderer){if(aj.barDirection=="vertical"&&this.name!="xaxis"&&this.name!="x2axis"){if(this._options.pad!=null||this._options.padMin!=null){ad=false}}else{if(aj.barDirection=="horizontal"&&(this.name=="xaxis"||this.name=="x2axis")){if(this._options.pad!=null||this._options.padMin!=null){ad=false}}}}}}}}if(ad&&this.renderer.constructor===H.jqplot.LinearAxisRenderer&&ai.min>=0){this.padMin=1;this.forceTickAt0=true}};function n(ab){H.jqplot.ElemContainer.call(this);this.show=false;this.location="ne";this.labels=[];this.showLabels=true;this.showSwatches=true;this.placement="insideGrid";this.xoffset=0;this.yoffset=0;this.border;this.background;this.textColor;this.fontFamily;this.fontSize;this.rowSpacing="0.5em";this.renderer=H.jqplot.TableLegendRenderer;this.rendererOptions={};this.preDraw=false;this.marginTop=null;this.marginRight=null;this.marginBottom=null;this.marginLeft=null;this.escapeHtml=false;this._series=[];H.extend(true,this,ab)}n.prototype=new H.jqplot.ElemContainer();n.prototype.constructor=n;n.prototype.setOptions=function(ab){H.extend(true,this,ab);if(this.placement=="inside"){this.placement="insideGrid"}if(this.xoffset>0){if(this.placement=="insideGrid"){switch(this.location){case"nw":case"w":case"sw":if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"}this.marginRight="0px";break;case"ne":case"e":case"se":default:if(this.marginRight==null){this.marginRight=this.xoffset+"px"}this.marginLeft="0px";break}}else{if(this.placement=="outside"){switch(this.location){case"nw":case"w":case"sw":if(this.marginRight==null){this.marginRight=this.xoffset+"px"}this.marginLeft="0px";break;case"ne":case"e":case"se":default:if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"}this.marginRight="0px";break}}}this.xoffset=0}if(this.yoffset>0){if(this.placement=="outside"){switch(this.location){case"sw":case"s":case"se":if(this.marginTop==null){this.marginTop=this.yoffset+"px"}this.marginBottom="0px";break;case"ne":case"n":case"nw":default:if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"}this.marginTop="0px";break}}else{if(this.placement=="insideGrid"){switch(this.location){case"sw":case"s":case"se":if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"}this.marginTop="0px";break;case"ne":case"n":case"nw":default:if(this.marginTop==null){this.marginTop=this.yoffset+"px"}this.marginBottom="0px";break}}}this.yoffset=0}};n.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};n.prototype.draw=function(ac){for(var ab=0;ab<H.jqplot.preDrawLegendHooks.length;ab++){H.jqplot.preDrawLegendHooks[ab].call(this,ac)}return this.renderer.draw.call(this,ac)};n.prototype.pack=function(ab){this.renderer.pack.call(this,ab)};function u(ab){H.jqplot.ElemContainer.call(this);this.text=ab;this.show=true;this.fontFamily;this.fontSize;this.textAlign;this.textColor;this.renderer=H.jqplot.DivTitleRenderer;this.rendererOptions={};this.escapeHtml=false}u.prototype=new H.jqplot.ElemContainer();u.prototype.constructor=u;u.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};u.prototype.draw=function(ab){return this.renderer.draw.call(this,ab)};u.prototype.pack=function(){this.renderer.pack.call(this)};function O(){H.jqplot.ElemContainer.call(this);this.show=true;this.xaxis="xaxis";this._xaxis;this.yaxis="yaxis";this._yaxis;this.gridBorderWidth=2;this.renderer=H.jqplot.LineRenderer;this.rendererOptions={};this.data=[];this.gridData=[];this.label="";this.showLabel=true;this.color;this.negativeColor;this.lineWidth=2.5;this.lineJoin="round";this.lineCap="round";this.linePattern="solid";this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.25;this.shadowDepth=3;this.shadowAlpha="0.1";this.breakOnNull=false;this.markerRenderer=H.jqplot.MarkerRenderer;this.markerOptions={};this.showLine=true;this.showMarker=true;this.index;this.fill=false;this.fillColor;this.fillAlpha;this.fillAndStroke=false;this.disableStack=false;this._stack=false;this.neighborThreshold=4;this.fillToZero=false;this.fillToValue=0;this.fillAxis="y";this.useNegativeColors=true;this._stackData=[];this._plotData=[];this._plotValues={x:[],y:[]};this._intervals={x:{},y:{}};this._prevPlotData=[];this._prevGridData=[];this._stackAxis="y";this._primaryAxis="_xaxis";this.canvas=new H.jqplot.GenericCanvas();this.shadowCanvas=new H.jqplot.GenericCanvas();this.plugins={};this._sumy=0;this._sumx=0;this._type=""}O.prototype=new H.jqplot.ElemContainer();O.prototype.constructor=O;O.prototype.init=function(ad,ah,af){this.index=ad;this.gridBorderWidth=ah;var ag=this.data;var ac=[],ae;for(ae=0;ae<ag.length;ae++){if(!this.breakOnNull){if(ag[ae]==null||ag[ae][0]==null||ag[ae][1]==null){continue}else{ac.push(ag[ae])}}else{ac.push(ag[ae])}}this.data=ac;if(!this.color&&this.show){this.color=af.colorGenerator.get(this.index)}if(!this.negativeColor&&this.show){this.negativeColor=af.negativeColorGenerator.get(this.index)}if(!this.fillColor){this.fillColor=this.color}if(this.fillAlpha){var ab=H.jqplot.normalize2rgb(this.fillColor);var ab=H.jqplot.getColorComponents(ab);this.fillColor="rgba("+ab[0]+","+ab[1]+","+ab[2]+","+this.fillAlpha+")"}this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions,af);this.markerRenderer=new this.markerRenderer();if(!this.markerOptions.color){this.markerOptions.color=this.color}if(this.markerOptions.show==null){this.markerOptions.show=this.showMarker}this.showMarker=this.markerOptions.show;this.markerRenderer.init(this.markerOptions)};O.prototype.draw=function(ah,ae,ag){var ac=(ae==r)?{}:ae;ah=(ah==r)?this.canvas._ctx:ah;var ab,af,ad;for(ab=0;ab<H.jqplot.preDrawSeriesHooks.length;ab++){H.jqplot.preDrawSeriesHooks[ab].call(this,ah,ac)}if(this.show){this.renderer.setGridData.call(this,ag);if(!ac.preventJqPlotSeriesDrawTrigger){H(ah.canvas).trigger("jqplotSeriesDraw",[this.data,this.gridData])}af=[];if(ac.data){af=ac.data}else{if(!this._stack){af=this.data}else{af=this._plotData}}ad=ac.gridData||this.renderer.makeGridData.call(this,af,ag);if(this._type==="line"&&this.renderer.smooth&&this.renderer._smoothedData.length){ad=this.renderer._smoothedData}this.renderer.draw.call(this,ah,ad,ac,ag)}for(ab=0;ab<H.jqplot.postDrawSeriesHooks.length;ab++){H.jqplot.postDrawSeriesHooks[ab].call(this,ah,ac,ag)}ah=ae=ag=ab=af=ad=null};O.prototype.drawShadow=function(ah,ae,ag){var ac=(ae==r)?{}:ae;ah=(ah==r)?this.shadowCanvas._ctx:ah;var ab,af,ad;for(ab=0;ab<H.jqplot.preDrawSeriesShadowHooks.length;ab++){H.jqplot.preDrawSeriesShadowHooks[ab].call(this,ah,ac)}if(this.shadow){this.renderer.setGridData.call(this,ag);af=[];if(ac.data){af=ac.data}else{if(!this._stack){af=this.data}else{af=this._plotData}}ad=ac.gridData||this.renderer.makeGridData.call(this,af,ag);this.renderer.drawShadow.call(this,ah,ad,ac)}for(ab=0;ab<H.jqplot.postDrawSeriesShadowHooks.length;ab++){H.jqplot.postDrawSeriesShadowHooks[ab].call(this,ah,ac)}ah=ae=ag=ab=af=ad=null};O.prototype.toggleDisplay=function(ac){var ab,ad;if(ac.data.series){ab=ac.data.series}else{ab=this}if(ac.data.speed){ad=ac.data.speed}if(ad){if(ab.canvas._elem.is(":hidden")){ab.canvas._elem.removeClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.fadeIn(ad)}ab.canvas._elem.fadeIn(ad);ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).fadeIn(ad)}else{ab.canvas._elem.addClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.fadeOut(ad)}ab.canvas._elem.fadeOut(ad);ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).fadeOut(ad)}}else{if(ab.canvas._elem.is(":hidden")){ab.canvas._elem.removeClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.show()}ab.canvas._elem.show();ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).show()}else{ab.canvas._elem.addClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.hide()}ab.canvas._elem.hide();ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).hide()}}};function I(){H.jqplot.ElemContainer.call(this);this.drawGridlines=true;this.gridLineColor="#cccccc";this.gridLineWidth=1;this.background="#fffdf6";this.borderColor="#999999";this.borderWidth=2;this.drawBorder=true;this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.5;this.shadowWidth=3;this.shadowDepth=3;this.shadowColor=null;this.shadowAlpha="0.07";this._left;this._top;this._right;this._bottom;this._width;this._height;this._axes=[];this.renderer=H.jqplot.CanvasGridRenderer;this.rendererOptions={};this._offsets={top:null,bottom:null,left:null,right:null}}I.prototype=new H.jqplot.ElemContainer();I.prototype.constructor=I;I.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};I.prototype.createElement=function(ab,ac){this._offsets=ab;return this.renderer.createElement.call(this,ac)};I.prototype.draw=function(){this.renderer.draw.call(this)};H.jqplot.GenericCanvas=function(){H.jqplot.ElemContainer.call(this);this._ctx};H.jqplot.GenericCanvas.prototype=new H.jqplot.ElemContainer();H.jqplot.GenericCanvas.prototype.constructor=H.jqplot.GenericCanvas;H.jqplot.GenericCanvas.prototype.createElement=function(af,ad,ac,ag){this._offsets=af;var ab="jqplot";if(ad!=r){ab=ad}var ae;ae=ag.canvasManager.getCanvas();if(ac!=null){this._plotDimensions=ac}ae.width=this._plotDimensions.width-this._offsets.left-this._offsets.right;ae.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom;this._elem=H(ae);this._elem.css({position:"absolute",left:this._offsets.left,top:this._offsets.top});this._elem.addClass(ab);ae=ag.canvasManager.initCanvas(ae);ae=null;return this._elem};H.jqplot.GenericCanvas.prototype.setContext=function(){this._ctx=this._elem.get(0).getContext("2d");return this._ctx};H.jqplot.GenericCanvas.prototype.resetCanvas=function(){if(this._elem){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))}this._elem.emptyForce()}this._ctx=null};H.jqplot.HooksManager=function(){this.hooks=[];this.args=[]};H.jqplot.HooksManager.prototype.addOnce=function(ae,ac){ac=ac||[];var af=false;for(var ad=0,ab=this.hooks.length;ad<ab;ad++){if(this.hooks[ad][0]==ae){af=true}}if(!af){this.hooks.push(ae);this.args.push(ac)}};H.jqplot.HooksManager.prototype.add=function(ac,ab){ab=ab||[];this.hooks.push(ac);this.args.push(ab)};H.jqplot.EventListenerManager=function(){this.hooks=[]};H.jqplot.EventListenerManager.prototype.addOnce=function(af,ae){var ag=false,ad,ac;for(var ac=0,ab=this.hooks.length;ac<ab;ac++){ad=this.hooks[ac];if(ad[0]==af&&ad[1]==ae){ag=true}}if(!ag){this.hooks.push([af,ae])}};H.jqplot.EventListenerManager.prototype.add=function(ac,ab){this.hooks.push([ac,ab])};var Q=["yMidAxis","xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];function N(){this.animate=false;this.animateReplot=false;this.axes={xaxis:new s("xaxis"),yaxis:new s("yaxis"),x2axis:new s("x2axis"),y2axis:new s("y2axis"),y3axis:new s("y3axis"),y4axis:new s("y4axis"),y5axis:new s("y5axis"),y6axis:new s("y6axis"),y7axis:new s("y7axis"),y8axis:new s("y8axis"),y9axis:new s("y9axis"),yMidAxis:new s("yMidAxis")};this.baseCanvas=new H.jqplot.GenericCanvas();this.captureRightClick=false;this.data=[];this.dataRenderer;this.dataRendererOptions;this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{},yMidAxis:{}},seriesDefaults:{},series:[]};this.defaultAxisStart=1;this.drawIfHidden=false;this.eventCanvas=new H.jqplot.GenericCanvas();this.fillBetween={series1:null,series2:null,color:null,baseSeries:0,fill:true};this.fontFamily;this.fontSize;this.grid=new I();this.legend=new n();this.negativeSeriesColors=H.jqplot.config.defaultNegativeColors;this.noDataIndicator={show:false,indicator:"Loading Data...",axes:{xaxis:{min:0,max:10,tickInterval:2,show:true},yaxis:{min:0,max:12,tickInterval:3,show:true}}};this.options={};this.previousSeriesStack=[];this.plugins={};this.series=[];this.seriesStack=[];this.seriesColors=H.jqplot.config.defaultColors;this.sortData=true;this.stackSeries=false;this.syncXTicks=true;this.syncYTicks=true;this.target=null;this.targetId=null;this.textColor;this.title=new u();this._drawCount=0;this._sumy=0;this._sumx=0;this._stackData=[];this._plotData=[];this._width=null;this._height=null;this._plotDimensions={height:null,width:null};this._gridPadding={top:null,right:null,bottom:null,left:null};this._defaultGridPadding={top:10,right:10,bottom:23,left:10};this._addDomReference=H.jqplot.config.addDomReference;this.preInitHooks=new H.jqplot.HooksManager();this.postInitHooks=new H.jqplot.HooksManager();this.preParseOptionsHooks=new H.jqplot.HooksManager();this.postParseOptionsHooks=new H.jqplot.HooksManager();this.preDrawHooks=new H.jqplot.HooksManager();this.postDrawHooks=new H.jqplot.HooksManager();this.preDrawSeriesHooks=new H.jqplot.HooksManager();this.postDrawSeriesHooks=new H.jqplot.HooksManager();this.preDrawLegendHooks=new H.jqplot.HooksManager();this.addLegendRowHooks=new H.jqplot.HooksManager();this.preSeriesInitHooks=new H.jqplot.HooksManager();this.postSeriesInitHooks=new H.jqplot.HooksManager();this.preParseSeriesOptionsHooks=new H.jqplot.HooksManager();this.postParseSeriesOptionsHooks=new H.jqplot.HooksManager();this.eventListenerHooks=new H.jqplot.EventListenerManager();this.preDrawSeriesShadowHooks=new H.jqplot.HooksManager();this.postDrawSeriesShadowHooks=new H.jqplot.HooksManager();this.colorGenerator=new H.jqplot.ColorGenerator();this.negativeColorGenerator=new H.jqplot.ColorGenerator();this.canvasManager=new H.jqplot.CanvasManager();this.themeEngine=new H.jqplot.ThemeEngine();var ad=0;this.init=function(am,aj,ao){ao=ao||{};for(var ak=0;ak<H.jqplot.preInitHooks.length;ak++){H.jqplot.preInitHooks[ak].call(this,am,aj,ao)}for(var ak=0;ak<this.preInitHooks.hooks.length;ak++){this.preInitHooks.hooks[ak].call(this,am,aj,ao)}this.targetId="#"+am;this.target=H("#"+am);if(this._addDomReference){this.target.data("jqplot_plot",this)}this.target.removeClass("jqplot-error");if(!this.target.get(0)){throw"No plot target specified"}if(this.target.css("position")=="static"){this.target.css("position","relative")}if(!this.target.hasClass("jqplot-target")){this.target.addClass("jqplot-target")}if(!this.target.height()){var al;if(ao&&ao.height){al=parseInt(ao.height,10)}else{if(this.target.attr("data-height")){al=parseInt(this.target.attr("data-height"),10)}else{al=parseInt(H.jqplot.config.defaultHeight,10)}}this._height=al;this.target.css("height",al+"px")}else{this._height=al=this.target.height()}if(!this.target.width()){var an;if(ao&&ao.width){an=parseInt(ao.width,10)}else{if(this.target.attr("data-width")){an=parseInt(this.target.attr("data-width"),10)}else{an=parseInt(H.jqplot.config.defaultWidth,10)}}this._width=an;this.target.css("width",an+"px")}else{this._width=an=this.target.width()}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Canvas dimension not set"}if(ao.dataRenderer&&jQuery.isFunction(ao.dataRenderer)){if(ao.dataRendererOptions){this.dataRendererOptions=ao.dataRendererOptions}this.dataRenderer=ao.dataRenderer;aj=this.dataRenderer(aj,this,this.dataRendererOptions)}if(ao.noDataIndicator&&jQuery.isPlainObject(ao.noDataIndicator)){H.extend(true,this.noDataIndicator,ao.noDataIndicator)}if(aj==null||jQuery.isArray(aj)==false||aj.length==0||jQuery.isArray(aj[0])==false||aj[0].length==0){if(this.noDataIndicator.show==false){throw {name:"DataError",message:"No data to plot."}}else{for(var af in this.noDataIndicator.axes){for(var ah in this.noDataIndicator.axes[af]){this.axes[af][ah]=this.noDataIndicator.axes[af][ah]}}this.postDrawHooks.add(function(){var av=this.eventCanvas.getHeight();var ar=this.eventCanvas.getWidth();var aq=H('<div class="jqplot-noData-container" style="position:absolute;"></div>');this.target.append(aq);aq.height(av);aq.width(ar);aq.css("top",this.eventCanvas._offsets.top);aq.css("left",this.eventCanvas._offsets.left);var au=H('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');aq.append(au);au.html(this.noDataIndicator.indicator);var at=au.height();var ap=au.width();au.height(at);au.width(ap);au.css("top",(av-at)/2+"px")})}}this.data=aj;this.parseOptions(ao);if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)}this.title.init();this.legend.init();this._sumy=0;this._sumx=0;for(var ak=0;ak<this.series.length;ak++){this.seriesStack.push(ak);this.previousSeriesStack.push(ak);this.series[ak].shadowCanvas._plotDimensions=this._plotDimensions;this.series[ak].canvas._plotDimensions=this._plotDimensions;for(var ai=0;ai<H.jqplot.preSeriesInitHooks.length;ai++){H.jqplot.preSeriesInitHooks[ai].call(this.series[ak],am,aj,this.options.seriesDefaults,this.options.series[ak],this)}for(var ai=0;ai<this.preSeriesInitHooks.hooks.length;ai++){this.preSeriesInitHooks.hooks[ai].call(this.series[ak],am,aj,this.options.seriesDefaults,this.options.series[ak],this)}this.populatePlotData(this.series[ak],ak);this.series[ak]._plotDimensions=this._plotDimensions;this.series[ak].init(ak,this.grid.borderWidth,this);for(var ai=0;ai<H.jqplot.postSeriesInitHooks.length;ai++){H.jqplot.postSeriesInitHooks[ai].call(this.series[ak],am,aj,this.options.seriesDefaults,this.options.series[ak],this)}for(var ai=0;ai<this.postSeriesInitHooks.hooks.length;ai++){this.postSeriesInitHooks.hooks[ai].call(this.series[ak],am,aj,this.options.seriesDefaults,this.options.series[ak],this)}this._sumy+=this.series[ak]._sumy;this._sumx+=this.series[ak]._sumx}var ag;for(var ak=0;ak<12;ak++){ag=Q[ak];this.axes[ag]._plotDimensions=this._plotDimensions;this.axes[ag].init();if(this.axes[ag].borderColor==null){if(ag.charAt(0)!=="x"&&this.axes[ag].useSeriesColor===true&&this.axes[ag].show){this.axes[ag].borderColor=this.axes[ag]._series[0].color}else{this.axes[ag].borderColor=this.grid.borderColor}}}if(this.sortData){ab(this.series)}this.grid.init();this.grid._axes=this.axes;this.legend._series=this.series;for(var ak=0;ak<H.jqplot.postInitHooks.length;ak++){H.jqplot.postInitHooks[ak].call(this,am,aj,ao)}for(var ak=0;ak<this.postInitHooks.hooks.length;ak++){this.postInitHooks.hooks[ak].call(this,am,aj,ao)}};this.resetAxesScale=function(ak,ag){var ai=ag||{};var aj=ak||this.axes;if(aj===true){aj=this.axes}if(jQuery.isArray(aj)){for(var ah=0;ah<aj.length;ah++){this.axes[aj[ah]].resetScale(ai[aj[ah]])}}else{if(typeof(aj)==="object"){for(var af in aj){this.axes[af].resetScale(ai[af])}}}};this.reInitialize=function(){this._height=this.target.height();this._width=this.target.width();if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set"}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;for(var ak in this.axes){this.axes[ak]._plotWidth=this._width;this.axes[ak]._plotHeight=this._height}this.title._plotWidth=this._width;if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)}this._sumy=0;this._sumx=0;for(var ai=0;ai<this.series.length;ai++){this.populatePlotData(this.series[ai],ai);if(this.series[ai]._type==="line"&&this.series[ai].renderer.bands.show){this.series[ai].renderer.initBands.call(this.series[ai],this.series[ai].renderer.options,this)}this.series[ai]._plotDimensions=this._plotDimensions;this.series[ai].canvas._plotDimensions=this._plotDimensions;this._sumy+=this.series[ai]._sumy;this._sumx+=this.series[ai]._sumx}var ag;for(var af=0;af<12;af++){ag=Q[af];var ah=this.axes[ag]._ticks;for(var ai=0;ai<ah.length;ai++){var aj=ah[ai]._elem;if(aj){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(aj.get(0))}aj.emptyForce();aj=null;ah._elem=null}}ah=null;this.axes[ag]._plotDimensions=this._plotDimensions;this.axes[ag]._ticks=[]}if(this.sortData){ab(this.series)}this.grid._axes=this.axes;this.legend._series=this.series};function ab(aj){var an,ao,ap,af,am;for(var ak=0;ak<aj.length;ak++){var ag;var al=[aj[ak].data,aj[ak]._stackData,aj[ak]._plotData,aj[ak]._prevPlotData];for(var ah=0;ah<4;ah++){ag=true;an=al[ah];if(aj[ak]._stackAxis=="x"){for(var ai=0;ai<an.length;ai++){if(typeof(an[ai][1])!="number"){ag=false;break}}if(ag){an.sort(function(ar,aq){return ar[1]-aq[1]})}}else{for(var ai=0;ai<an.length;ai++){if(typeof(an[ai][0])!="number"){ag=false;break}}if(ag){an.sort(function(ar,aq){return ar[0]-aq[0]})}}}}}this.populatePlotData=function(aj,ak){this._plotData=[];this._stackData=[];aj._stackData=[];aj._plotData=[];var an={x:[],y:[]};if(this.stackSeries&&!aj.disableStack){aj._stack=true;var al=aj._stackAxis=="x"?0:1;var am=al?0:1;var ao=H.extend(true,[],aj.data);var ap=H.extend(true,[],aj.data);for(var ah=0;ah<ak;ah++){var af=this.series[ah].data;for(var ag=0;ag<af.length;ag++){ao[ag][0]+=af[ag][0];ao[ag][1]+=af[ag][1];ap[ag][al]+=af[ag][al]}}for(var ai=0;ai<ap.length;ai++){an.x.push(ap[ai][0]);an.y.push(ap[ai][1])}this._plotData.push(ap);this._stackData.push(ao);aj._stackData=ao;aj._plotData=ap;aj._plotValues=an}else{for(var ai=0;ai<aj.data.length;ai++){an.x.push(aj.data[ai][0]);an.y.push(aj.data[ai][1])}this._stackData.push(aj.data);this.series[ak]._stackData=aj.data;this._plotData.push(aj.data);aj._plotData=aj.data;aj._plotValues=an}if(ak>0){aj._prevPlotData=this.series[ak-1]._plotData}aj._sumy=0;aj._sumx=0;for(ai=aj.data.length-1;ai>-1;ai--){aj._sumy+=aj.data[ai][1];aj._sumx+=aj.data[ai][0]}};this.getNextSeriesColor=(function(ag){var af=0;var ah=ag.seriesColors;return function(){if(af<ah.length){return ah[af++]}else{af=0;return ah[af++]}}})(this);this.parseOptions=function(aq){for(var al=0;al<this.preParseOptionsHooks.hooks.length;al++){this.preParseOptionsHooks.hooks[al].call(this,aq)}for(var al=0;al<H.jqplot.preParseOptionsHooks.length;al++){H.jqplot.preParseOptionsHooks[al].call(this,aq)}this.options=H.extend(true,{},this.defaults,aq);var af=this.options;this.animate=af.animate;this.animateReplot=af.animateReplot;this.stackSeries=af.stackSeries;if(H.isPlainObject(af.fillBetween)){var ap=["series1","series2","color","baseSeries","fill"],am;for(var al=0,aj=ap.length;al<aj;al++){am=ap[al];if(af.fillBetween[am]!=null){this.fillBetween[am]=af.fillBetween[am]}}}if(af.seriesColors){this.seriesColors=af.seriesColors}if(af.negativeSeriesColors){this.negativeSeriesColors=af.negativeSeriesColors}if(af.captureRightClick){this.captureRightClick=af.captureRightClick}this.defaultAxisStart=(aq&&aq.defaultAxisStart!=null)?aq.defaultAxisStart:this.defaultAxisStart;this.colorGenerator.setColors(this.seriesColors);this.negativeColorGenerator.setColors(this.negativeSeriesColors);H.extend(true,this._gridPadding,af.gridPadding);this.sortData=(af.sortData!=null)?af.sortData:this.sortData;for(var al=0;al<12;al++){var ag=Q[al];var ai=this.axes[ag];ai._options=H.extend(true,{},af.axesDefaults,af.axes[ag]);H.extend(true,ai,af.axesDefaults,af.axes[ag]);ai._plotWidth=this._width;ai._plotHeight=this._height}var ao=function(av,at,aw){var ar=[];var au;at=at||"vertical";if(!jQuery.isArray(av[0])){for(au=0;au<av.length;au++){if(at=="vertical"){ar.push([aw+au,av[au]])}else{ar.push([av[au],aw+au])}}}else{H.extend(true,ar,av)}return ar};var an=0;for(var al=0;al<this.data.length;al++){var ap=new O();for(var ak=0;ak<H.jqplot.preParseSeriesOptionsHooks.length;ak++){H.jqplot.preParseSeriesOptionsHooks[ak].call(ap,this.options.seriesDefaults,this.options.series[al])}for(var ak=0;ak<this.preParseSeriesOptionsHooks.hooks.length;ak++){this.preParseSeriesOptionsHooks.hooks[ak].call(ap,this.options.seriesDefaults,this.options.series[al])}H.extend(true,ap,{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[al],{rendererOptions:{animation:{show:this.animate}}});var ah="vertical";if(ap.renderer===H.jqplot.BarRenderer&&ap.rendererOptions&&ap.rendererOptions.barDirection=="horizontal"&&ap.transposeData===true){ah="horizontal"}ap.data=ao(this.data[al],ah,this.defaultAxisStart);switch(ap.xaxis){case"xaxis":ap._xaxis=this.axes.xaxis;break;case"x2axis":ap._xaxis=this.axes.x2axis;break;default:break}ap._yaxis=this.axes[ap.yaxis];ap._xaxis._series.push(ap);ap._yaxis._series.push(ap);if(ap.show){ap._xaxis.show=true;ap._yaxis.show=true}if(!ap.label){ap.label="Series "+(al+1).toString()}this.series.push(ap);for(var ak=0;ak<H.jqplot.postParseSeriesOptionsHooks.length;ak++){H.jqplot.postParseSeriesOptionsHooks[ak].call(this.series[al],this.options.seriesDefaults,this.options.series[al])}for(var ak=0;ak<this.postParseSeriesOptionsHooks.hooks.length;ak++){this.postParseSeriesOptionsHooks.hooks[ak].call(this.series[al],this.options.seriesDefaults,this.options.series[al])}}H.extend(true,this.grid,this.options.grid);for(var al=0;al<12;al++){var ag=Q[al];var ai=this.axes[ag];if(ai.borderWidth==null){ai.borderWidth=this.grid.borderWidth}}if(typeof this.options.title=="string"){this.title.text=this.options.title}else{if(typeof this.options.title=="object"){H.extend(true,this.title,this.options.title)}}this.title._plotWidth=this._width;this.legend.setOptions(this.options.legend);for(var al=0;al<H.jqplot.postParseOptionsHooks.length;al++){H.jqplot.postParseOptionsHooks[al].call(this,aq)}for(var al=0;al<this.postParseOptionsHooks.hooks.length;al++){this.postParseOptionsHooks.hooks[al].call(this,aq)}};this.destroy=function(){this.canvasManager.freeAllCanvases();if(this.eventCanvas&&this.eventCanvas._elem){this.eventCanvas._elem.unbind()}this.target.empty();this.target[0].innerHTML=""};this.replot=function(ag){var ah=ag||{};var af=(ah.clear===false)?false:true;var ai=ah.resetAxes||false;this.target.trigger("jqplotPreReplot");if(af){this.destroy()}this.reInitialize();if(ai){this.resetAxesScale(ai,ah.axes)}this.draw();this.target.trigger("jqplotPostReplot")};this.redraw=function(af){af=(af!=null)?af:true;this.target.trigger("jqplotPreRedraw");if(af){this.canvasManager.freeAllCanvases();this.eventCanvas._elem.unbind();this.target.empty()}for(var ah in this.axes){this.axes[ah]._ticks=[]}for(var ag=0;ag<this.series.length;ag++){this.populatePlotData(this.series[ag],ag)}this._sumy=0;this._sumx=0;for(ag=0;ag<this.series.length;ag++){this._sumy+=this.series[ag]._sumy;this._sumx+=this.series[ag]._sumx}this.draw();this.target.trigger("jqplotPostRedraw")};this.draw=function(){if(this.drawIfHidden||this.target.is(":visible")){this.target.trigger("jqplotPreDraw");var aB,az,ay,ai;for(aB=0,ay=H.jqplot.preDrawHooks.length;aB<ay;aB++){H.jqplot.preDrawHooks[aB].call(this)}for(aB=0,ay=this.preDrawHooks.length;aB<ay;aB++){this.preDrawHooks.hooks[aB].apply(this,this.preDrawSeriesHooks.args[aB])}this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},"jqplot-base-canvas",null,this));this.baseCanvas.setContext();this.target.append(this.title.draw());this.title.pack({top:0,left:0});var aF=this.legend.draw();var af={top:0,left:0,bottom:0,right:0};if(this.legend.placement=="outsideGrid"){this.target.append(aF);switch(this.legend.location){case"n":af.top+=this.legend.getHeight();break;case"s":af.bottom+=this.legend.getHeight();break;case"ne":case"e":case"se":af.right+=this.legend.getWidth();break;case"nw":case"w":case"sw":af.left+=this.legend.getWidth();break;default:af.right+=this.legend.getWidth();break}aF=aF.detach()}var al=this.axes;var aG;for(aB=0;aB<12;aB++){aG=Q[aB];this.target.append(al[aG].draw(this.baseCanvas._ctx,this));al[aG].set()}if(al.yaxis.show){af.left+=al.yaxis.getWidth()}var aA=["y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var ar=[0,0,0,0,0,0,0,0];var av=0;var au;for(au=0;au<8;au++){if(al[aA[au]].show){av+=al[aA[au]].getWidth();ar[au]=av}}af.right+=av;if(al.x2axis.show){af.top+=al.x2axis.getHeight()}if(this.title.show){af.top+=this.title.getHeight()}if(al.xaxis.show){af.bottom+=al.xaxis.getHeight()}if(this.options.gridDimensions&&H.isPlainObject(this.options.gridDimensions)){var am=parseInt(this.options.gridDimensions.width,10)||0;var aC=parseInt(this.options.gridDimensions.height,10)||0;var ah=(this._width-af.left-af.right-am)/2;var aE=(this._height-af.top-af.bottom-aC)/2;if(aE>=0&&ah>=0){af.top+=aE;af.bottom+=aE;af.left+=ah;af.right+=ah}}var ag=["top","bottom","left","right"];for(var au in ag){if(this._gridPadding[ag[au]]==null&&af[ag[au]]>0){this._gridPadding[ag[au]]=af[ag[au]]}else{if(this._gridPadding[ag[au]]==null){this._gridPadding[ag[au]]=this._defaultGridPadding[ag[au]]}}}var at=(this.legend.placement=="outsideGrid")?{top:this.title.getHeight(),left:0,right:0,bottom:0}:this._gridPadding;al.xaxis.pack({position:"absolute",bottom:this._gridPadding.bottom-al.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});al.yaxis.pack({position:"absolute",top:0,left:this._gridPadding.left-al.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});al.x2axis.pack({position:"absolute",top:this._gridPadding.top-al.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});for(aB=8;aB>0;aB--){al[aA[aB-1]].pack({position:"absolute",top:0,right:this._gridPadding.right-ar[aB-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top})}var an=(this._width-this._gridPadding.left-this._gridPadding.right)/2+this._gridPadding.left-al.yMidAxis.getWidth()/2;al.yMidAxis.pack({position:"absolute",top:0,left:an,zIndex:9,textAlign:"center"},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});this.target.append(this.grid.createElement(this._gridPadding,this));this.grid.draw();var ak=this.series;var aD=ak.length;for(aB=0,ay=aD;aB<ay;aB++){az=this.seriesStack[aB];this.target.append(ak[az].shadowCanvas.createElement(this._gridPadding,"jqplot-series-shadowCanvas",null,this));ak[az].shadowCanvas.setContext();ak[az].shadowCanvas._elem.data("seriesIndex",az)}for(aB=0,ay=aD;aB<ay;aB++){az=this.seriesStack[aB];this.target.append(ak[az].canvas.createElement(this._gridPadding,"jqplot-series-canvas",null,this));ak[az].canvas.setContext();ak[az].canvas._elem.data("seriesIndex",az)}this.target.append(this.eventCanvas.createElement(this._gridPadding,"jqplot-event-canvas",null,this));this.eventCanvas.setContext();this.eventCanvas._ctx.fillStyle="rgba(0,0,0,0)";this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height);this.bindCustomEvents();if(this.legend.preDraw){this.eventCanvas._elem.before(aF);this.legend.pack(at);if(this.legend._elem){this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}})}else{this.drawSeries()}}else{this.drawSeries();if(aD){H(ak[aD-1].canvas._elem).after(aF)}this.legend.pack(at)}for(var aB=0,ay=H.jqplot.eventListenerHooks.length;aB<ay;aB++){this.eventCanvas._elem.bind(H.jqplot.eventListenerHooks[aB][0],{plot:this},H.jqplot.eventListenerHooks[aB][1])}for(var aB=0,ay=this.eventListenerHooks.hooks.length;aB<ay;aB++){this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[aB][0],{plot:this},this.eventListenerHooks.hooks[aB][1])}var aq=this.fillBetween;if(aq.fill&&aq.series1!==aq.series2&&aq.series1<aD&&aq.series2<aD&&ak[aq.series1]._type==="line"&&ak[aq.series2]._type==="line"){this.doFillBetweenLines()}for(var aB=0,ay=H.jqplot.postDrawHooks.length;aB<ay;aB++){H.jqplot.postDrawHooks[aB].call(this)}for(var aB=0,ay=this.postDrawHooks.hooks.length;aB<ay;aB++){this.postDrawHooks.hooks[aB].apply(this,this.postDrawHooks.args[aB])}if(this.target.is(":visible")){this._drawCount+=1}var ao,ap,aw,aj;for(aB=0,ay=aD;aB<ay;aB++){ao=ak[aB];ap=ao.renderer;aw=".jqplot-point-label.jqplot-series-"+aB;if(ap.animation&&ap.animation._supported&&ap.animation.show&&(this._drawCount<2||this.animateReplot)){aj=this.target.find(aw);aj.stop(true,true).hide();ao.canvas._elem.stop(true,true).hide();ao.shadowCanvas._elem.stop(true,true).hide();ao.canvas._elem.jqplotEffect("blind",{mode:"show",direction:ap.animation.direction},ap.animation.speed);ao.shadowCanvas._elem.jqplotEffect("blind",{mode:"show",direction:ap.animation.direction},ap.animation.speed);aj.fadeIn(ap.animation.speed*0.8)}}aj=null;this.target.trigger("jqplotPostDraw",[this])}};N.prototype.doFillBetweenLines=function(){var ah=this.fillBetween;var aq=ah.series1;var ao=ah.series2;var ap=(aq<ao)?aq:ao;var an=(ao>aq)?ao:aq;var al=this.series[ap];var ak=this.series[an];if(ak.renderer.smooth){var aj=ak.renderer._smoothedData.slice(0).reverse()}else{var aj=ak.gridData.slice(0).reverse()}if(al.renderer.smooth){var am=al.renderer._smoothedData.concat(aj)}else{var am=al.gridData.concat(aj)}var ai=(ah.color!==null)?ah.color:this.series[aq].fillColor;var ar=(ah.baseSeries!==null)?ah.baseSeries:ap;var ag=this.series[ar].renderer.shapeRenderer;var af={fillStyle:ai,fill:true,closePath:true};ag.draw(al.shadowCanvas._ctx,am,af)};this.bindCustomEvents=function(){this.eventCanvas._elem.bind("click",{plot:this},this.onClick);this.eventCanvas._elem.bind("dblclick",{plot:this},this.onDblClick);this.eventCanvas._elem.bind("mousedown",{plot:this},this.onMouseDown);this.eventCanvas._elem.bind("mousemove",{plot:this},this.onMouseMove);this.eventCanvas._elem.bind("mouseenter",{plot:this},this.onMouseEnter);this.eventCanvas._elem.bind("mouseleave",{plot:this},this.onMouseLeave);if(this.captureRightClick){this.eventCanvas._elem.bind("mouseup",{plot:this},this.onRightClick);this.eventCanvas._elem.get(0).oncontextmenu=function(){return false}}else{this.eventCanvas._elem.bind("mouseup",{plot:this},this.onMouseUp)}};function ac(ao){var am=ao.data.plot;var ai=am.eventCanvas._elem.offset();var al={x:ao.pageX-ai.left,y:ao.pageY-ai.top};var aj={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null,yMidAxis:null};var ak=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"];var af=am.axes;var ag,ah;for(ag=11;ag>0;ag--){ah=ak[ag-1];if(af[ah].show){aj[ah]=af[ah].series_p2u(al[ah.charAt(0)])}}return{offsets:ai,gridPos:al,dataPos:aj}}function ae(af,ag){var ak=ag.series;var aP,aO,aN,aI,aJ,aD,aC,ap,an,at,au,aE;var aM,aQ,aK,al,aB,aG;var ah,aH;for(aN=ag.seriesStack.length-1;aN>=0;aN--){aP=ag.seriesStack[aN];aI=ak[aP];switch(aI.renderer.constructor){case H.jqplot.BarRenderer:case H.jqplot.PyramidRenderer:aD=af.x;aC=af.y;for(aO=0;aO<aI._barPoints.length;aO++){aB=aI._barPoints[aO];aK=aI.gridData[aO];if(aD>aB[0][0]&&aD<aB[2][0]&&aC>aB[2][1]&&aC<aB[0][1]){return{seriesIndex:aI.index,pointIndex:aO,gridData:aK,data:aI.data[aO],points:aI._barPoints[aO]}}}break;case H.jqplot.DonutRenderer:at=aI.startAngle/180*Math.PI;aD=af.x-aI._center[0];aC=af.y-aI._center[1];aJ=Math.sqrt(Math.pow(aD,2)+Math.pow(aC,2));if(aD>0&&-aC>=0){ap=2*Math.PI-Math.atan(-aC/aD)}else{if(aD>0&&-aC<0){ap=-Math.atan(-aC/aD)}else{if(aD<0){ap=Math.PI-Math.atan(-aC/aD)}else{if(aD==0&&-aC>0){ap=3*Math.PI/2}else{if(aD==0&&-aC<0){ap=Math.PI/2}else{if(aD==0&&aC==0){ap=0}}}}}}if(at){ap-=at;if(ap<0){ap+=2*Math.PI}else{if(ap>2*Math.PI){ap-=2*Math.PI}}}an=aI.sliceMargin/180*Math.PI;if(aJ<aI._radius&&aJ>aI._innerRadius){for(aO=0;aO<aI.gridData.length;aO++){au=(aO>0)?aI.gridData[aO-1][1]+an:an;aE=aI.gridData[aO][1];if(ap>au&&ap<aE){return{seriesIndex:aI.index,pointIndex:aO,gridData:aI.gridData[aO],data:aI.data[aO]}}}}break;case H.jqplot.PieRenderer:at=aI.startAngle/180*Math.PI;aD=af.x-aI._center[0];aC=af.y-aI._center[1];aJ=Math.sqrt(Math.pow(aD,2)+Math.pow(aC,2));if(aD>0&&-aC>=0){ap=2*Math.PI-Math.atan(-aC/aD)}else{if(aD>0&&-aC<0){ap=-Math.atan(-aC/aD)}else{if(aD<0){ap=Math.PI-Math.atan(-aC/aD)}else{if(aD==0&&-aC>0){ap=3*Math.PI/2}else{if(aD==0&&-aC<0){ap=Math.PI/2}else{if(aD==0&&aC==0){ap=0}}}}}}if(at){ap-=at;if(ap<0){ap+=2*Math.PI}else{if(ap>2*Math.PI){ap-=2*Math.PI}}}an=aI.sliceMargin/180*Math.PI;if(aJ<aI._radius){for(aO=0;aO<aI.gridData.length;aO++){au=(aO>0)?aI.gridData[aO-1][1]+an:an;aE=aI.gridData[aO][1];if(ap>au&&ap<aE){return{seriesIndex:aI.index,pointIndex:aO,gridData:aI.gridData[aO],data:aI.data[aO]}}}}break;case H.jqplot.BubbleRenderer:aD=af.x;aC=af.y;var az=null;if(aI.show){for(var aO=0;aO<aI.gridData.length;aO++){aK=aI.gridData[aO];aQ=Math.sqrt((aD-aK[0])*(aD-aK[0])+(aC-aK[1])*(aC-aK[1]));if(aQ<=aK[2]&&(aQ<=aM||aM==null)){aM=aQ;az={seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}if(az!=null){return az}}break;case H.jqplot.FunnelRenderer:aD=af.x;aC=af.y;var aF=aI._vertices,aj=aF[0],ai=aF[aF.length-1],am,ay,ar;function aL(aT,aV,aU){var aS=(aV[1]-aU[1])/(aV[0]-aU[0]);var aR=aV[1]-aS*aV[0];var aW=aT+aV[1];return[(aW-aR)/aS,aW]}am=aL(aC,aj[0],ai[3]);ay=aL(aC,aj[1],ai[2]);for(aO=0;aO<aF.length;aO++){ar=aF[aO];if(aC>=ar[0][1]&&aC<=ar[3][1]&&aD>=am[0]&&aD<=ay[0]){return{seriesIndex:aI.index,pointIndex:aO,gridData:null,data:aI.data[aO]}}}break;case H.jqplot.LineRenderer:aD=af.x;aC=af.y;aJ=aI.renderer;if(aI.show){if((aI.fill||(aI.renderer.bands.show&&aI.renderer.bands.fill))&&(!ag.plugins.highlighter||!ag.plugins.highlighter.show)){var aq=false;if(aD>aI._boundingBox[0][0]&&aD<aI._boundingBox[1][0]&&aC>aI._boundingBox[1][1]&&aC<aI._boundingBox[0][1]){var ax=aI._areaPoints.length;var aA;var aO=ax-1;for(var aA=0;aA<ax;aA++){var aw=[aI._areaPoints[aA][0],aI._areaPoints[aA][1]];var av=[aI._areaPoints[aO][0],aI._areaPoints[aO][1]];if(aw[1]<aC&&av[1]>=aC||av[1]<aC&&aw[1]>=aC){if(aw[0]+(aC-aw[1])/(av[1]-aw[1])*(av[0]-aw[0])<aD){aq=!aq}}aO=aA}}if(aq){return{seriesIndex:aP,pointIndex:null,gridData:aI.gridData,data:aI.data,points:aI._areaPoints}}break}else{aH=aI.markerRenderer.size/2+aI.neighborThreshold;ah=(aH>0)?aH:0;for(var aO=0;aO<aI.gridData.length;aO++){aK=aI.gridData[aO];if(aJ.constructor==H.jqplot.OHLCRenderer){if(aJ.candleStick){var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._bodyWidth/2&&aD<=aK[0]+aJ._bodyWidth/2&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}else{if(!aJ.hlc){var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}else{var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][1])&&aC<=ao(aI.data[aO][2])){return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}}}else{if(aK[0]!=null&&aK[1]!=null){aQ=Math.sqrt((aD-aK[0])*(aD-aK[0])+(aC-aK[1])*(aC-aK[1]));if(aQ<=ah&&(aQ<=aM||aM==null)){aM=aQ;return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}}}}}break;default:aD=af.x;aC=af.y;aJ=aI.renderer;if(aI.show){aH=aI.markerRenderer.size/2+aI.neighborThreshold;ah=(aH>0)?aH:0;for(var aO=0;aO<aI.gridData.length;aO++){aK=aI.gridData[aO];if(aJ.constructor==H.jqplot.OHLCRenderer){if(aJ.candleStick){var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._bodyWidth/2&&aD<=aK[0]+aJ._bodyWidth/2&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}else{if(!aJ.hlc){var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}else{var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][1])&&aC<=ao(aI.data[aO][2])){return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}}}else{aQ=Math.sqrt((aD-aK[0])*(aD-aK[0])+(aC-aK[1])*(aC-aK[1]));if(aQ<=ah&&(aQ<=aM||aM==null)){aM=aQ;return{seriesIndex:aP,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}}}break}}return null}this.onClick=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=jQuery.Event("jqplotClick");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onDblClick=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=jQuery.Event("jqplotDblClick");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onMouseDown=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=jQuery.Event("jqplotMouseDown");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onMouseUp=function(ah){var ag=ac(ah);var af=jQuery.Event("jqplotMouseUp");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,null,ah.data.plot])};this.onRightClick=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);if(aj.captureRightClick){if(ah.which==3){var af=jQuery.Event("jqplotRightClick");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])}else{var af=jQuery.Event("jqplotMouseUp");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])}}};this.onMouseMove=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=jQuery.Event("jqplotMouseMove");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onMouseEnter=function(ah){var ag=ac(ah);var ai=ah.data.plot;var af=jQuery.Event("jqplotMouseEnter");af.pageX=ah.pageX;af.pageY=ah.pageY;af.relatedTarget=ah.relatedTarget;H(this).trigger(af,[ag.gridPos,ag.dataPos,null,ai])};this.onMouseLeave=function(ah){var ag=ac(ah);var ai=ah.data.plot;var af=jQuery.Event("jqplotMouseLeave");af.pageX=ah.pageX;af.pageY=ah.pageY;af.relatedTarget=ah.relatedTarget;H(this).trigger(af,[ag.gridPos,ag.dataPos,null,ai])};this.drawSeries=function(ah,af){var aj,ai,ag;af=(typeof(ah)==="number"&&af==null)?ah:af;ah=(typeof(ah)==="object")?ah:{};if(af!=r){ai=this.series[af];ag=ai.shadowCanvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);ai.drawShadow(ag,ah,this);ag=ai.canvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);ai.draw(ag,ah,this);if(ai.renderer.constructor==H.jqplot.BezierCurveRenderer){if(af<this.series.length-1){this.drawSeries(af+1)}}}else{for(aj=0;aj<this.series.length;aj++){ai=this.series[aj];ag=ai.shadowCanvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);ai.drawShadow(ag,ah,this);ag=ai.canvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);ai.draw(ag,ah,this)}}ah=af=aj=ai=ag=null};this.moveSeriesToFront=function(ag){ag=parseInt(ag,10);var aj=H.inArray(ag,this.seriesStack);if(aj==-1){return}if(aj==this.seriesStack.length-1){this.previousSeriesStack=this.seriesStack.slice(0);return}var af=this.seriesStack[this.seriesStack.length-1];var ai=this.series[ag].canvas._elem.detach();var ah=this.series[ag].shadowCanvas._elem.detach();this.series[af].shadowCanvas._elem.after(ah);this.series[af].canvas._elem.after(ai);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(aj,1);this.seriesStack.push(ag)};this.moveSeriesToBack=function(ag){ag=parseInt(ag,10);var aj=H.inArray(ag,this.seriesStack);if(aj==0||aj==-1){return}var af=this.seriesStack[0];var ai=this.series[ag].canvas._elem.detach();var ah=this.series[ag].shadowCanvas._elem.detach();this.series[af].shadowCanvas._elem.before(ah);this.series[af].canvas._elem.before(ai);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(aj,1);this.seriesStack.unshift(ag)};this.restorePreviousSeriesOrder=function(){var al,ak,aj,ai,ah,af,ag;if(this.seriesStack==this.previousSeriesStack){return}for(al=1;al<this.previousSeriesStack.length;al++){af=this.previousSeriesStack[al];ag=this.previousSeriesStack[al-1];aj=this.series[af].canvas._elem.detach();ai=this.series[af].shadowCanvas._elem.detach();this.series[ag].shadowCanvas._elem.after(ai);this.series[ag].canvas._elem.after(aj)}ah=this.seriesStack.slice(0);this.seriesStack=this.previousSeriesStack.slice(0);this.previousSeriesStack=ah};this.restoreOriginalSeriesOrder=function(){var aj,ai,af=[],ah,ag;for(aj=0;aj<this.series.length;aj++){af.push(aj)}if(this.seriesStack==af){return}this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack=af;for(aj=1;aj<this.seriesStack.length;aj++){ah=this.series[aj].canvas._elem.detach();ag=this.series[aj].shadowCanvas._elem.detach();this.series[aj-1].shadowCanvas._elem.after(ag);this.series[aj-1].canvas._elem.after(ah)}};this.activateTheme=function(af){this.themeEngine.activate(this,af)}}H.jqplot.computeHighlightColors=function(ac){var ae;if(jQuery.isArray(ac)){ae=[];for(var ag=0;ag<ac.length;ag++){var af=H.jqplot.getColorComponents(ac[ag]);var ab=[af[0],af[1],af[2]];var ah=ab[0]+ab[1]+ab[2];for(var ad=0;ad<3;ad++){ab[ad]=(ah>660)?ab[ad]*0.85:0.73*ab[ad]+90;ab[ad]=parseInt(ab[ad],10);(ab[ad]>255)?255:ab[ad]}ab[3]=0.3+0.35*af[3];ae.push("rgba("+ab[0]+","+ab[1]+","+ab[2]+","+ab[3]+")")}}else{var af=H.jqplot.getColorComponents(ac);var ab=[af[0],af[1],af[2]];var ah=ab[0]+ab[1]+ab[2];for(var ad=0;ad<3;ad++){ab[ad]=(ah>660)?ab[ad]*0.85:0.73*ab[ad]+90;ab[ad]=parseInt(ab[ad],10);(ab[ad]>255)?255:ab[ad]}ab[3]=0.3+0.35*af[3];ae="rgba("+ab[0]+","+ab[1]+","+ab[2]+","+ab[3]+")"}return ae};H.jqplot.ColorGenerator=function(ac){ac=ac||H.jqplot.config.defaultColors;var ab=0;this.next=function(){if(ab<ac.length){return ac[ab++]}else{ab=0;return ac[ab++]}};this.previous=function(){if(ab>0){return ac[ab--]}else{ab=ac.length-1;return ac[ab]}};this.get=function(ae){var ad=ae-ac.length*Math.floor(ae/ac.length);return ac[ad]};this.setColors=function(ad){ac=ad};this.reset=function(){ab=0};this.getIndex=function(){return ab};this.setIndex=function(ad){ab=ad}};H.jqplot.hex2rgb=function(ad,ab){ad=ad.replace("#","");if(ad.length==3){ad=ad.charAt(0)+ad.charAt(0)+ad.charAt(1)+ad.charAt(1)+ad.charAt(2)+ad.charAt(2)}var ac;ac="rgba("+parseInt(ad.slice(0,2),16)+", "+parseInt(ad.slice(2,4),16)+", "+parseInt(ad.slice(4,6),16);if(ab){ac+=", "+ab}ac+=")";return ac};H.jqplot.rgb2hex=function(ag){var ad=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;var ab=ag.match(ad);var af="#";for(var ae=1;ae<4;ae++){var ac;if(ab[ae].search(/%/)!=-1){ac=parseInt(255*ab[ae]/100,10).toString(16);if(ac.length==1){ac="0"+ac}}else{ac=parseInt(ab[ae],10).toString(16);if(ac.length==1){ac="0"+ac}}af+=ac}return af};H.jqplot.normalize2rgb=function(ac,ab){if(ac.search(/^ *rgba?\(/)!=-1){return ac}else{if(ac.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/)!=-1){return H.jqplot.hex2rgb(ac,ab)}else{throw"invalid color spec"}}};H.jqplot.getColorComponents=function(ag){ag=H.jqplot.colorKeywordMap[ag]||ag;var ae=H.jqplot.normalize2rgb(ag);var ad=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;var ab=ae.match(ad);var ac=[];for(var af=1;af<4;af++){if(ab[af].search(/%/)!=-1){ac[af-1]=parseInt(255*ab[af]/100,10)}else{ac[af-1]=parseInt(ab[af],10)}}ac[3]=parseFloat(ab[4])?parseFloat(ab[4]):1;return ac};H.jqplot.colorKeywordMap={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb( 0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb( 0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb( 0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb( 95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(220, 20, 60)",cyan:"rgb( 0, 255, 255)",darkblue:"rgb( 0, 0, 139)",darkcyan:"rgb( 0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgreen:"rgb( 0, 100, 0)",darkgrey:"rgb(169, 169, 169)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb( 85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb( 72, 61, 139)",darkslategray:"rgb( 47, 79, 79)",darkslategrey:"rgb( 47, 79, 79)",darkturquoise:"rgb( 0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb( 0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb( 30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb( 34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb( 0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb( 75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgray:"rgb(211, 211, 211)",lightgreen:"rgb(144, 238, 144)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb( 32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb( 0, 255, 0)",limegreen:"rgb( 50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb( 0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb( 60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb( 0, 250, 154)",mediumturquoise:"rgb( 72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb( 25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb( 0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb( 65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb( 46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb( 0, 255, 127)",steelblue:"rgb( 70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb( 0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb( 64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)"};H.jqplot.AxisLabelRenderer=function(ab){H.jqplot.ElemContainer.call(this);this.axis;this.show=true;this.label="";this.fontFamily=null;this.fontSize=null;this.textColor=null;this._elem;this.escapeHTML=false;H.extend(true,this,ab)};H.jqplot.AxisLabelRenderer.prototype=new H.jqplot.ElemContainer();H.jqplot.AxisLabelRenderer.prototype.constructor=H.jqplot.AxisLabelRenderer;H.jqplot.AxisLabelRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.AxisLabelRenderer.prototype.draw=function(ab,ac){if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=H('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>');if(Number(this.label)){this._elem.css("white-space","nowrap")}if(!this.escapeHTML){this._elem.html(this.label)}else{this._elem.text(this.label)}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)}return this._elem};H.jqplot.AxisLabelRenderer.prototype.pack=function(){};H.jqplot.AxisTickRenderer=function(ab){H.jqplot.ElemContainer.call(this);this.mark="outside";this.axis;this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.size=4;this.markSize=6;this.show=true;this.showLabel=true;this.label=null;this.value=null;this._styles={};this.formatter=H.jqplot.DefaultTickFormatter;this.prefix="";this.formatString="";this.fontFamily;this.fontSize;this.textColor;this.escapeHTML=false;this._elem;this._breakTick=false;H.extend(true,this,ab)};H.jqplot.AxisTickRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.AxisTickRenderer.prototype=new H.jqplot.ElemContainer();H.jqplot.AxisTickRenderer.prototype.constructor=H.jqplot.AxisTickRenderer;H.jqplot.AxisTickRenderer.prototype.setTick=function(ab,ad,ac){this.value=ab;this.axis=ad;if(ac){this.isMinorTick=true}return this};H.jqplot.AxisTickRenderer.prototype.draw=function(){if(this.label===null){this.label=this.prefix+this.formatter(this.formatString,this.value)}var ac={position:"absolute"};if(Number(this.label)){ac.whitSpace="nowrap"}if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=H(document.createElement("div"));this._elem.addClass("jqplot-"+this.axis+"-tick");if(!this.escapeHTML){this._elem.html(this.label)}else{this._elem.text(this.label)}this._elem.css(ac);for(var ab in this._styles){this._elem.css(ab,this._styles[ab])}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)}if(this._breakTick){this._elem.addClass("jqplot-breakTick")}return this._elem};H.jqplot.DefaultTickFormatter=function(ab,ac){if(typeof ac=="number"){if(!ab){ab=H.jqplot.config.defaultTickFormatString}return H.jqplot.sprintf(ab,ac)}else{return String(ac)}};H.jqplot.AxisTickRenderer.prototype.pack=function(){};H.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new H.jqplot.ShadowRenderer()};H.jqplot.CanvasGridRenderer.prototype.init=function(ac){this._ctx;H.extend(true,this,ac);var ab={lineJoin:"miter",lineCap:"round",fill:false,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:false,strokeStyle:this.shadowColor};this.renderer.shadowRenderer.init(ab)};H.jqplot.CanvasGridRenderer.prototype.createElement=function(ae){var ad;if(this._elem){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){ad=this._elem.get(0);window.G_vmlCanvasManager.uninitElement(ad);ad=null}this._elem.emptyForce();this._elem=null}ad=ae.canvasManager.getCanvas();var ab=this._plotDimensions.width;var ac=this._plotDimensions.height;ad.width=ab;ad.height=ac;this._elem=H(ad);this._elem.addClass("jqplot-grid-canvas");this._elem.css({position:"absolute",left:0,top:0});ad=ae.canvasManager.initCanvas(ad);this._top=this._offsets.top;this._bottom=ac-this._offsets.bottom;this._left=this._offsets.left;this._right=ab-this._offsets.right;this._width=this._right-this._left;this._height=this._bottom-this._top;ad=null;return this._elem};H.jqplot.CanvasGridRenderer.prototype.draw=function(){this._ctx=this._elem.get(0).getContext("2d");var am=this._ctx;var ap=this._axes;am.save();am.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height);am.fillStyle=this.backgroundColor||this.background;am.fillRect(this._left,this._top,this._width,this._height);am.save();am.lineJoin="miter";am.lineCap="butt";am.lineWidth=this.gridLineWidth;am.strokeStyle=this.gridLineColor;var at,ar,aj,ak;var ag=["xaxis","yaxis","x2axis","y2axis"];for(var aq=4;aq>0;aq--){var aw=ag[aq-1];var ab=ap[aw];var au=ab._ticks;var al=au.length;if(ab.show){if(ab.drawBaseline){var av={};if(ab.baselineWidth!==null){av.lineWidth=ab.baselineWidth}if(ab.baselineColor!==null){av.strokeStyle=ab.baselineColor}switch(aw){case"xaxis":ai(this._left,this._bottom,this._right,this._bottom,av);break;case"yaxis":ai(this._left,this._bottom,this._left,this._top,av);break;case"x2axis":ai(this._left,this._bottom,this._right,this._bottom,av);break;case"y2axis":ai(this._right,this._bottom,this._right,this._top,av);break}}for(var an=al;an>0;an--){var ah=au[an-1];if(ah.show){var ae=Math.round(ab.u2p(ah.value))+0.5;switch(aw){case"xaxis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(ae,this._top,ae,this._bottom)}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._bottom;ar=this._bottom+aj;break;case"inside":at=this._bottom-aj;ar=this._bottom;break;case"cross":at=this._bottom-aj;ar=this._bottom+aj;break;default:at=this._bottom;ar=this._bottom+aj;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[ae,at],[ae,ar]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})}ai(ae,at,ae,ar)}break;case"yaxis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(this._right,ae,this._left,ae)}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._left-aj;ar=this._left;break;case"inside":at=this._left;ar=this._left+aj;break;case"cross":at=this._left-aj;ar=this._left+aj;break;default:at=this._left-aj;ar=this._left;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[at,ae],[ar,ae]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}ai(at,ae,ar,ae,{strokeStyle:ab.borderColor})}break;case"x2axis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(ae,this._bottom,ae,this._top)}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._top-aj;ar=this._top;break;case"inside":at=this._top;ar=this._top+aj;break;case"cross":at=this._top-aj;ar=this._top+aj;break;default:at=this._top-aj;ar=this._top;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[ae,at],[ae,ar]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})}ai(ae,at,ae,ar)}break;case"y2axis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(this._left,ae,this._right,ae)}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._right;ar=this._right+aj;break;case"inside":at=this._right-aj;ar=this._right;break;case"cross":at=this._right-aj;ar=this._right+aj;break;default:at=this._right;ar=this._right+aj;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[at,ae],[ar,ae]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}ai(at,ae,ar,ae,{strokeStyle:ab.borderColor})}break;default:break}}}ah=null}ab=null;au=null}ag=["y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"];for(var aq=7;aq>0;aq--){var ab=ap[ag[aq-1]];var au=ab._ticks;if(ab.show){var ac=au[ab.numberTicks-1];var af=au[0];var ad=ab.getLeft();var ao=[[ad,ac.getTop()+ac.getHeight()/2],[ad,af.getTop()+af.getHeight()/2+1]];if(this.shadow){this.renderer.shadowRenderer.draw(am,ao,{lineCap:"butt",fill:false,closePath:false})}ai(ao[0][0],ao[0][1],ao[1][0],ao[1][1],{lineCap:"butt",strokeStyle:ab.borderColor,lineWidth:ab.borderWidth});for(var an=au.length;an>0;an--){var ah=au[an-1];aj=ah.markSize;ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;if(ah.showMark&&ah.mark){switch(ak){case"outside":at=ad;ar=ad+aj;break;case"inside":at=ad-aj;ar=ad;break;case"cross":at=ad-aj;ar=ad+aj;break;default:at=ad;ar=ad+aj;break}ao=[[at,ae],[ar,ae]];if(this.shadow){this.renderer.shadowRenderer.draw(am,ao,{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}ai(at,ae,ar,ae,{strokeStyle:ab.borderColor})}ah=null}af=null}ab=null;au=null}am.restore();function ai(aB,aA,ay,ax,az){am.save();az=az||{};if(az.lineWidth==null||az.lineWidth!=0){H.extend(true,am,az);am.beginPath();am.moveTo(aB,aA);am.lineTo(ay,ax);am.stroke();am.restore()}}if(this.shadow){var ao=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];this.renderer.shadowRenderer.draw(am,ao)}if(this.borderWidth!=0&&this.drawBorder){ai(this._left,this._top,this._right,this._top,{lineCap:"round",strokeStyle:ap.x2axis.borderColor,lineWidth:ap.x2axis.borderWidth});ai(this._right,this._top,this._right,this._bottom,{lineCap:"round",strokeStyle:ap.y2axis.borderColor,lineWidth:ap.y2axis.borderWidth});ai(this._right,this._bottom,this._left,this._bottom,{lineCap:"round",strokeStyle:ap.xaxis.borderColor,lineWidth:ap.xaxis.borderWidth});ai(this._left,this._bottom,this._left,this._top,{lineCap:"round",strokeStyle:ap.yaxis.borderColor,lineWidth:ap.yaxis.borderWidth})}am.restore();am=null;ap=null};H.jqplot.DivTitleRenderer=function(){};H.jqplot.DivTitleRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.DivTitleRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null}var ae=this.renderer;var ad=document.createElement("div");this._elem=H(ad);this._elem.addClass("jqplot-title");if(!this.text){this.show=false;this._elem.height(0);this._elem.width(0)}else{if(this.text){var ab;if(this.color){ab=this.color}else{if(this.textColor){ab=this.textColor}}var ac={position:"absolute",top:"0px",left:"0px"};if(this._plotWidth){ac.width=this._plotWidth+"px"}if(this.fontSize){ac.fontSize=this.fontSize}if(typeof this.textAlign==="string"){ac.textAlign=this.textAlign}else{ac.textAlign="center"}if(ab){ac.color=ab}if(this.paddingBottom){ac.paddingBottom=this.paddingBottom}if(this.fontFamily){ac.fontFamily=this.fontFamily}this._elem.css(ac);if(this.escapeHtml){this._elem.text(this.text)}else{this._elem.html(this.text)}}}ad=null;return this._elem};H.jqplot.DivTitleRenderer.prototype.pack=function(){};var o=0.1;H.jqplot.LinePattern=function(ap,ak){var aj={dotted:[o,H.jqplot.config.dotGapLength],dashed:[H.jqplot.config.dashLength,H.jqplot.config.gapLength],solid:null};if(typeof ak==="string"){if(ak[0]==="."||ak[0]==="-"){var aq=ak;ak=[];for(var ai=0,af=aq.length;ai<af;ai++){if(aq[ai]==="."){ak.push(o)}else{if(aq[ai]==="-"){ak.push(H.jqplot.config.dashLength)}else{continue}}ak.push(H.jqplot.config.gapLength)}}else{ak=aj[ak]}}if(!(ak&&ak.length)){return ap}var ae=0;var al=ak[0];var an=0;var am=0;var ah=0;var ab=0;var ao=function(ar,at){ap.moveTo(ar,at);an=ar;am=at;ah=ar;ab=at};var ad=function(ar,ay){var aw=ap.lineWidth;var au=ar-an;var at=ay-am;var av=Math.sqrt(au*au+at*at);if((av>0)&&(aw>0)){au/=av;at/=av;while(true){var ax=aw*al;if(ax<av){an+=ax*au;am+=ax*at;if((ae&1)==0){ap.lineTo(an,am)}else{ap.moveTo(an,am)}av-=ax;ae++;if(ae>=ak.length){ae=0}al=ak[ae]}else{an=ar;am=ay;if((ae&1)==0){ap.lineTo(an,am)}else{ap.moveTo(an,am)}al-=av/aw;break}}}};var ac=function(){ap.beginPath()};var ag=function(){ad(ah,ab)};return{moveTo:ao,lineTo:ad,beginPath:ac,closePath:ag}};H.jqplot.LineRenderer=function(){this.shapeRenderer=new H.jqplot.ShapeRenderer();this.shadowRenderer=new H.jqplot.ShadowRenderer()};H.jqplot.LineRenderer.prototype.init=function(ac,ah){ac=ac||{};this._type="line";this.renderer.animation={show:false,direction:"left",speed:2500,_supported:true};this.renderer.smooth=false;this.renderer.tension=null;this.renderer.constrainSmoothing=true;this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];this.renderer.bandData=[];this.renderer.bands={show:false,hiData:[],lowData:[],color:this.color,showLines:false,fill:true,fillColor:null,_min:null,_max:null,interval:"3%"};var af={highlightMouseOver:ac.highlightMouseOver,highlightMouseDown:ac.highlightMouseDown,highlightColor:ac.highlightColor};delete (ac.highlightMouseOver);delete (ac.highlightMouseDown);delete (ac.highlightColor);H.extend(true,this.renderer,ac);this.renderer.options=ac;if(this.renderer.bandData.length>1&&(!ac.bands||ac.bands.show==null)){this.renderer.bands.show=true}else{if(ac.bands&&ac.bands.show==null&&ac.bands.interval!=null){this.renderer.bands.show=true}}if(this.fill){this.renderer.bands.show=false}if(this.renderer.bands.show){this.renderer.initBands.call(this,this.renderer.options,ah)}if(this._stack){this.renderer.smooth=false}var ag={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};this.renderer.shapeRenderer.init(ag);var ad=ac.shadowOffset;if(ad==null){if(this.lineWidth>2.5){ad=1.25*(1+(Math.atan((this.lineWidth/2.5))/0.785398163-1)*0.6)}else{ad=1.25*Math.atan((this.lineWidth/2.5))/0.785398163}}var ab={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,angle:this.shadowAngle,offset:ad,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};this.renderer.shadowRenderer.init(ab);this._areaPoints=[];this._boundingBox=[[],[]];if(!this.isTrendline&&this.fill||this.renderer.bands.show){this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColor=null;if(af.highlightMouseDown&&af.highlightMouseOver==null){af.highlightMouseOver=false}H.extend(true,this,{highlightMouseOver:af.highlightMouseOver,highlightMouseDown:af.highlightMouseDown,highlightColor:af.highlightColor});if(!this.highlightColor){var ae=(this.renderer.bands.show)?this.renderer.bands.fillColor:this.fillColor;this.highlightColor=H.jqplot.computeHighlightColors(ae)}if(this.highlighter){this.highlighter.show=false}}if(!this.isTrendline&&ah){ah.plugins.lineRenderer={};ah.postInitHooks.addOnce(v);ah.postDrawHooks.addOnce(Z);ah.eventListenerHooks.addOnce("jqplotMouseMove",g);ah.eventListenerHooks.addOnce("jqplotMouseDown",d);ah.eventListenerHooks.addOnce("jqplotMouseUp",Y);ah.eventListenerHooks.addOnce("jqplotClick",f);ah.eventListenerHooks.addOnce("jqplotRightClick",p)}};H.jqplot.LineRenderer.prototype.initBands=function(ae,ao){var af=ae.bandData||[];var ah=this.renderer.bands;ah.hiData=[];ah.lowData=[];var av=this.data;ah._max=null;ah._min=null;if(af.length==2){if(H.isArray(af[0][0])){var ai;var ab=0,al=0;for(var ap=0,am=af[0].length;ap<am;ap++){ai=af[0][ap];if((ai[1]!=null&&ai[1]>ah._max)||ah._max==null){ah._max=ai[1]}if((ai[1]!=null&&ai[1]<ah._min)||ah._min==null){ah._min=ai[1]}}for(var ap=0,am=af[1].length;ap<am;ap++){ai=af[1][ap];if((ai[1]!=null&&ai[1]>ah._max)||ah._max==null){ah._max=ai[1];al=1}if((ai[1]!=null&&ai[1]<ah._min)||ah._min==null){ah._min=ai[1];ab=1}}if(al===ab){ah.show=false}ah.hiData=af[al];ah.lowData=af[ab]}else{if(af[0].length===av.length&&af[1].length===av.length){var ad=(af[0][0]>af[1][0])?0:1;var aw=(ad)?0:1;for(var ap=0,am=av.length;ap<am;ap++){ah.hiData.push([av[ap][0],af[ad][ap]]);ah.lowData.push([av[ap][0],af[aw][ap]])}}else{ah.show=false}}}else{if(af.length>2&&!H.isArray(af[0][0])){var ad=(af[0][0]>af[0][1])?0:1;var aw=(ad)?0:1;for(var ap=0,am=af.length;ap<am;ap++){ah.hiData.push([av[ap][0],af[ap][ad]]);ah.lowData.push([av[ap][0],af[ap][aw]])}}else{var ak=ah.interval;var au=null;var at=null;var ac=null;var an=null;if(H.isArray(ak)){au=ak[0];at=ak[1]}else{au=ak}if(isNaN(au)){if(au.charAt(au.length-1)==="%"){ac="multiply";au=parseFloat(au)/100+1}}else{au=parseFloat(au);ac="add"}if(at!==null&&isNaN(at)){if(at.charAt(at.length-1)==="%"){an="multiply";at=parseFloat(at)/100+1}}else{if(at!==null){at=parseFloat(at);an="add"}}if(au!==null){if(at===null){at=-au;an=ac;if(an==="multiply"){at+=2}}if(au<at){var aq=au;au=at;at=aq;aq=ac;ac=an;an=aq}for(var ap=0,am=av.length;ap<am;ap++){switch(ac){case"add":ah.hiData.push([av[ap][0],av[ap][1]+au]);break;case"multiply":ah.hiData.push([av[ap][0],av[ap][1]*au]);break}switch(an){case"add":ah.lowData.push([av[ap][0],av[ap][1]+at]);break;case"multiply":ah.lowData.push([av[ap][0],av[ap][1]*at]);break}}}else{ah.show=false}}}var ag=ah.hiData;var aj=ah.lowData;for(var ap=0,am=ag.length;ap<am;ap++){if((ag[ap][1]!=null&&ag[ap][1]>ah._max)||ah._max==null){ah._max=ag[ap][1]}}for(var ap=0,am=aj.length;ap<am;ap++){if((aj[ap][1]!=null&&aj[ap][1]<ah._min)||ah._min==null){ah._min=aj[ap][1]}}if(ah.fillColor===null){var ar=H.jqplot.getColorComponents(ah.color);ar[3]=ar[3]*0.5;ah.fillColor="rgba("+ar[0]+", "+ar[1]+", "+ar[2]+", "+ar[3]+")"}};function G(ac,ab){return(3.4182054+ab)*Math.pow(ac,-0.3534992)}function k(ad,ac){var ab=Math.sqrt(Math.pow((ac[0]-ad[0]),2)+Math.pow((ac[1]-ad[1]),2));return 5.7648*Math.log(ab)+7.4456}function w(ab){var ac=(Math.exp(2*ab)-1)/(Math.exp(2*ab)+1);return ac}function F(aD){var am=this.renderer.smooth;var ax=this.canvas.getWidth();var ah=this._xaxis.series_p2u;var aA=this._yaxis.series_p2u;var az=null;var ag=null;var at=aD.length/ax;var ad=[];var ar=[];if(!isNaN(parseFloat(am))){az=parseFloat(am)}else{az=G(at,0.5)}var ap=[];var ae=[];for(var ay=0,au=aD.length;ay<au;ay++){ap.push(aD[ay][1]);ae.push(aD[ay][0])}function ao(aE,aF){if(aE-aF==0){return Math.pow(10,10)}else{return aE-aF}}var aq,al,ak,aj;var ab=aD.length-1;for(var af=1,av=aD.length;af<av;af++){var ac=[];var an=[];for(var aw=0;aw<2;aw++){var ay=af-1+aw;if(ay==0||ay==ab){ac[aw]=Math.pow(10,10)}else{if(ap[ay+1]-ap[ay]==0||ap[ay]-ap[ay-1]==0){ac[aw]=0}else{if(((ae[ay+1]-ae[ay])/(ap[ay+1]-ap[ay])+(ae[ay]-ae[ay-1])/(ap[ay]-ap[ay-1]))==0){ac[aw]=0}else{if((ap[ay+1]-ap[ay])*(ap[ay]-ap[ay-1])<0){ac[aw]=0}else{ac[aw]=2/(ao(ae[ay+1],ae[ay])/(ap[ay+1]-ap[ay])+ao(ae[ay],ae[ay-1])/(ap[ay]-ap[ay-1]))}}}}}if(af==1){ac[0]=3/2*(ap[1]-ap[0])/ao(ae[1],ae[0])-ac[1]/2}else{if(af==ab){ac[1]=3/2*(ap[ab]-ap[ab-1])/ao(ae[ab],ae[ab-1])-ac[0]/2}}an[0]=-2*(ac[1]+2*ac[0])/ao(ae[af],ae[af-1])+6*(ap[af]-ap[af-1])/Math.pow(ao(ae[af],ae[af-1]),2);an[1]=2*(2*ac[1]+ac[0])/ao(ae[af],ae[af-1])-6*(ap[af]-ap[af-1])/Math.pow(ao(ae[af],ae[af-1]),2);aj=1/6*(an[1]-an[0])/ao(ae[af],ae[af-1]);ak=1/2*(ae[af]*an[0]-ae[af-1]*an[1])/ao(ae[af],ae[af-1]);al=(ap[af]-ap[af-1]-ak*(Math.pow(ae[af],2)-Math.pow(ae[af-1],2))-aj*(Math.pow(ae[af],3)-Math.pow(ae[af-1],3)))/ao(ae[af],ae[af-1]);aq=ap[af-1]-al*ae[af-1]-ak*Math.pow(ae[af-1],2)-aj*Math.pow(ae[af-1],3);var aC=(ae[af]-ae[af-1])/az;var aB,ai;for(var aw=0,au=az;aw<au;aw++){aB=[];ai=ae[af-1]+aw*aC;aB.push(ai);aB.push(aq+al*ai+ak*Math.pow(ai,2)+aj*Math.pow(ai,3));ad.push(aB);ar.push([ah(aB[0]),aA(aB[1])])}}ad.push(aD[ay]);ar.push([ah(aD[ay][0]),aA(aD[ay][1])]);return[ad,ar]}function B(aj){var ai=this.renderer.smooth;var aO=this.renderer.tension;var ab=this.canvas.getWidth();var aB=this._xaxis.series_p2u;var ak=this._yaxis.series_p2u;var aC=null;var aD=null;var aN=null;var aI=null;var aG=null;var am=null;var aL=null;var ag=null;var aE,aF,ax,aw,au,ar;var ae,ac,ao,an;var av,at,aH;var ap=[];var ad=[];var af=aj.length/ab;var aM,aq,az,aA,ay;var al=[];var ah=[];if(!isNaN(parseFloat(ai))){aC=parseFloat(ai)}else{aC=G(af,0.5)}if(!isNaN(parseFloat(aO))){aO=parseFloat(aO)}for(var aK=0,aJ=aj.length-1;aK<aJ;aK++){if(aO===null){am=Math.abs((aj[aK+1][1]-aj[aK][1])/(aj[aK+1][0]-aj[aK][0]));aM=0.3;aq=0.6;az=(aq-aM)/2;aA=2.5;ay=-1.4;ag=am/aA+ay;aI=az*w(ag)-az*w(ay)+aM;if(aK>0){aL=Math.abs((aj[aK][1]-aj[aK-1][1])/(aj[aK][0]-aj[aK-1][0]))}ag=aL/aA+ay;aG=az*w(ag)-az*w(ay)+aM;aN=(aI+aG)/2}else{aN=aO}for(aE=0;aE<aC;aE++){aF=aE/aC;ax=(1+2*aF)*Math.pow((1-aF),2);aw=aF*Math.pow((1-aF),2);au=Math.pow(aF,2)*(3-2*aF);ar=Math.pow(aF,2)*(aF-1);if(aj[aK-1]){ae=aN*(aj[aK+1][0]-aj[aK-1][0]);ac=aN*(aj[aK+1][1]-aj[aK-1][1])}else{ae=aN*(aj[aK+1][0]-aj[aK][0]);ac=aN*(aj[aK+1][1]-aj[aK][1])}if(aj[aK+2]){ao=aN*(aj[aK+2][0]-aj[aK][0]);an=aN*(aj[aK+2][1]-aj[aK][1])}else{ao=aN*(aj[aK+1][0]-aj[aK][0]);an=aN*(aj[aK+1][1]-aj[aK][1])}av=ax*aj[aK][0]+au*aj[aK+1][0]+aw*ae+ar*ao;at=ax*aj[aK][1]+au*aj[aK+1][1]+aw*ac+ar*an;aH=[av,at];al.push(aH);ah.push([aB(av),ak(at)])}}al.push(aj[aJ]);ah.push([aB(aj[aJ][0]),ak(aj[aJ][1])]);return[al,ah]}H.jqplot.LineRenderer.prototype.setGridData=function(aj){var af=this._xaxis.series_u2p;var ab=this._yaxis.series_u2p;var ag=this._plotData;var ak=this._prevPlotData;this.gridData=[];this._prevGridData=[];this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];var ae=this.renderer.bands;var ac=false;for(var ah=0,ad=this.data.length;ah<ad;ah++){if(ag[ah][0]!=null&&ag[ah][1]!=null){this.gridData.push([af.call(this._xaxis,ag[ah][0]),ab.call(this._yaxis,ag[ah][1])])}else{if(ag[ah][0]==null){ac=true;this.gridData.push([null,ab.call(this._yaxis,ag[ah][1])])}else{if(ag[ah][1]==null){ac=true;this.gridData.push([af.call(this._xaxis,ag[ah][0]),null])}}}if(ak[ah]!=null&&ak[ah][0]!=null&&ak[ah][1]!=null){this._prevGridData.push([af.call(this._xaxis,ak[ah][0]),ab.call(this._yaxis,ak[ah][1])])}else{if(ak[ah]!=null&&ak[ah][0]==null){this._prevGridData.push([null,ab.call(this._yaxis,ak[ah][1])])}else{if(ak[ah]!=null&&ak[ah][0]!=null&&ak[ah][1]==null){this._prevGridData.push([af.call(this._xaxis,ak[ah][0]),null])}}}}if(ac){this.renderer.smooth=false;if(this._type==="line"){ae.show=false}}if(this._type==="line"&&ae.show){for(var ah=0,ad=ae.hiData.length;ah<ad;ah++){this.renderer._hiBandGridData.push([af.call(this._xaxis,ae.hiData[ah][0]),ab.call(this._yaxis,ae.hiData[ah][1])])}for(var ah=0,ad=ae.lowData.length;ah<ad;ah++){this.renderer._lowBandGridData.push([af.call(this._xaxis,ae.lowData[ah][0]),ab.call(this._yaxis,ae.lowData[ah][1])])}}if(this._type==="line"&&this.renderer.smooth&&this.gridData.length>2){var ai;if(this.renderer.constrainSmoothing){ai=F.call(this,this.gridData);this.renderer._smoothedData=ai[0];this.renderer._smoothedPlotData=ai[1];if(ae.show){ai=F.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ai[0];ai=F.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ai[0]}ai=null}else{ai=B.call(this,this.gridData);this.renderer._smoothedData=ai[0];this.renderer._smoothedPlotData=ai[1];if(ae.show){ai=B.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ai[0];ai=B.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ai[0]}ai=null}}};H.jqplot.LineRenderer.prototype.makeGridData=function(ai,ak){var ag=this._xaxis.series_u2p;var ab=this._yaxis.series_u2p;var al=[];var ad=[];this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];var af=this.renderer.bands;var ac=false;for(var ah=0;ah<ai.length;ah++){if(ai[ah][0]!=null&&ai[ah][1]!=null){al.push([ag.call(this._xaxis,ai[ah][0]),ab.call(this._yaxis,ai[ah][1])])}else{if(ai[ah][0]==null){ac=true;al.push([null,ab.call(this._yaxis,ai[ah][1])])}else{if(ai[ah][1]==null){ac=true;al.push([ag.call(this._xaxis,ai[ah][0]),null])}}}}if(ac){this.renderer.smooth=false;if(this._type==="line"){af.show=false}}if(this._type==="line"&&af.show){for(var ah=0,ae=af.hiData.length;ah<ae;ah++){this.renderer._hiBandGridData.push([ag.call(this._xaxis,af.hiData[ah][0]),ab.call(this._yaxis,af.hiData[ah][1])])}for(var ah=0,ae=af.lowData.length;ah<ae;ah++){this.renderer._lowBandGridData.push([ag.call(this._xaxis,af.lowData[ah][0]),ab.call(this._yaxis,af.lowData[ah][1])])}}if(this._type==="line"&&this.renderer.smooth&&al.length>2){var aj;if(this.renderer.constrainSmoothing){aj=F.call(this,al);this.renderer._smoothedData=aj[0];this.renderer._smoothedPlotData=aj[1];if(af.show){aj=F.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=aj[0];aj=F.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=aj[0]}aj=null}else{aj=B.call(this,al);this.renderer._smoothedData=aj[0];this.renderer._smoothedPlotData=aj[1];if(af.show){aj=B.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=aj[0];aj=B.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=aj[0]}aj=null}}return al};H.jqplot.LineRenderer.prototype.draw=function(aq,aC,ac,av){var aw;var ak=H.extend(true,{},ac);var ae=(ak.shadow!=r)?ak.shadow:this.shadow;var aD=(ak.showLine!=r)?ak.showLine:this.showLine;var au=(ak.fill!=r)?ak.fill:this.fill;var ab=(ak.fillAndStroke!=r)?ak.fillAndStroke:this.fillAndStroke;var al,ar,ao,ay;aq.save();if(aC.length){if(aD){if(au){if(this.fillToZero){var az=this.negativeColor;if(!this.useNegativeColors){az=ak.fillStyle}var ai=false;var aj=ak.fillStyle;if(ab){var aB=aC.slice(0)}if(this.index==0||!this._stack){var ap=[];var aF=(this.renderer.smooth)?this.renderer._smoothedPlotData:this._plotData;this._areaPoints=[];var aA=this._yaxis.series_u2p(this.fillToValue);var ad=this._xaxis.series_u2p(this.fillToValue);ak.closePath=true;if(this.fillAxis=="y"){ap.push([aC[0][0],aA]);this._areaPoints.push([aC[0][0],aA]);for(var aw=0;aw<aC.length-1;aw++){ap.push(aC[aw]);this._areaPoints.push(aC[aw]);if(aF[aw][1]*aF[aw+1][1]<0){if(aF[aw][1]<0){ai=true;ak.fillStyle=az}else{ai=false;ak.fillStyle=aj}var ah=aC[aw][0]+(aC[aw+1][0]-aC[aw][0])*(aA-aC[aw][1])/(aC[aw+1][1]-aC[aw][1]);ap.push([ah,aA]);this._areaPoints.push([ah,aA]);if(ae){this.renderer.shadowRenderer.draw(aq,ap,ak)}this.renderer.shapeRenderer.draw(aq,ap,ak);ap=[[ah,aA]]}}if(aF[aC.length-1][1]<0){ai=true;ak.fillStyle=az}else{ai=false;ak.fillStyle=aj}ap.push(aC[aC.length-1]);this._areaPoints.push(aC[aC.length-1]);ap.push([aC[aC.length-1][0],aA]);this._areaPoints.push([aC[aC.length-1][0],aA])}if(ae){this.renderer.shadowRenderer.draw(aq,ap,ak)}this.renderer.shapeRenderer.draw(aq,ap,ak)}else{var an=this._prevGridData;for(var aw=an.length;aw>0;aw--){aC.push(an[aw-1])}if(ae){this.renderer.shadowRenderer.draw(aq,aC,ak)}this._areaPoints=aC;this.renderer.shapeRenderer.draw(aq,aC,ak)}}else{if(ab){var aB=aC.slice(0)}if(this.index==0||!this._stack){var af=aq.canvas.height;aC.unshift([aC[0][0],af]);var ax=aC.length;aC.push([aC[ax-1][0],af])}else{var an=this._prevGridData;for(var aw=an.length;aw>0;aw--){aC.push(an[aw-1])}}this._areaPoints=aC;if(ae){this.renderer.shadowRenderer.draw(aq,aC,ak)}this.renderer.shapeRenderer.draw(aq,aC,ak)}if(ab){var at=H.extend(true,{},ak,{fill:false,closePath:false});this.renderer.shapeRenderer.draw(aq,aB,at);if(this.markerRenderer.show){if(this.renderer.smooth){aB=this.gridData}for(aw=0;aw<aB.length;aw++){this.markerRenderer.draw(aB[aw][0],aB[aw][1],aq,ak.markerOptions)}}}}else{if(this.renderer.bands.show){var ag;var aE=H.extend(true,{},ak);if(this.renderer.bands.showLines){ag=(this.renderer.smooth)?this.renderer._hiBandSmoothedData:this.renderer._hiBandGridData;this.renderer.shapeRenderer.draw(aq,ag,ak);ag=(this.renderer.smooth)?this.renderer._lowBandSmoothedData:this.renderer._lowBandGridData;this.renderer.shapeRenderer.draw(aq,ag,aE)}if(this.renderer.bands.fill){if(this.renderer.smooth){ag=this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse())}else{ag=this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse())}this._areaPoints=ag;aE.closePath=true;aE.fill=true;aE.fillStyle=this.renderer.bands.fillColor;this.renderer.shapeRenderer.draw(aq,ag,aE)}}if(ae){this.renderer.shadowRenderer.draw(aq,aC,ak)}this.renderer.shapeRenderer.draw(aq,aC,ak)}}var al=ao=ar=ay=null;for(aw=0;aw<this._areaPoints.length;aw++){var am=this._areaPoints[aw];if(al>am[0]||al==null){al=am[0]}if(ay<am[1]||ay==null){ay=am[1]}if(ao<am[0]||ao==null){ao=am[0]}if(ar>am[1]||ar==null){ar=am[1]}}if(this.type==="line"&&this.renderer.bands.show){ay=this._yaxis.series_u2p(this.renderer.bands._min);ar=this._yaxis.series_u2p(this.renderer.bands._max)}this._boundingBox=[[al,ay],[ao,ar]];if(this.markerRenderer.show&&!au){if(this.renderer.smooth){aC=this.gridData}for(aw=0;aw<aC.length;aw++){if(aC[aw][0]!=null&&aC[aw][1]!=null){this.markerRenderer.draw(aC[aw][0],aC[aw][1],aq,ak.markerOptions)}}}}aq.restore()};H.jqplot.LineRenderer.prototype.drawShadow=function(ab,ad,ac){};function v(ae,ad,ab){for(var ac=0;ac<this.series.length;ac++){if(this.series[ac].renderer.constructor==H.jqplot.LineRenderer){if(this.series[ac].highlightMouseOver){this.series[ac].highlightMouseDown=false}}}}function Z(){if(this.plugins.lineRenderer&&this.plugins.lineRenderer.highlightCanvas){this.plugins.lineRenderer.highlightCanvas.resetCanvas();this.plugins.lineRenderer.highlightCanvas=null}this.plugins.lineRenderer.highlightedSeriesIndex=null;this.plugins.lineRenderer.highlightCanvas=new H.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-lineRenderer-highlight-canvas",this._plotDimensions,this));this.plugins.lineRenderer.highlightCanvas.setContext();this.eventCanvas._elem.bind("mouseleave",{plot:this},function(ab){V(ab.data.plot)})}function X(ah,ag,ae,ad){var ac=ah.series[ag];var ab=ah.plugins.lineRenderer.highlightCanvas;ab._ctx.clearRect(0,0,ab._ctx.canvas.width,ab._ctx.canvas.height);ac._highlightedPoint=ae;ah.plugins.lineRenderer.highlightedSeriesIndex=ag;var af={fillStyle:ac.highlightColor};if(ac.type==="line"&&ac.renderer.bands.show){af.fill=true;af.closePath=true}ac.renderer.shapeRenderer.draw(ab._ctx,ad,af);ab=null}function V(ad){var ab=ad.plugins.lineRenderer.highlightCanvas;ab._ctx.clearRect(0,0,ab._ctx.canvas.width,ab._ctx.canvas.height);for(var ac=0;ac<ad.series.length;ac++){ad.series[ac]._highlightedPoint=null}ad.plugins.lineRenderer.highlightedSeriesIndex=null;ad.target.trigger("jqplotDataUnhighlight");ab=null}function g(af,ae,ai,ah,ag){if(ah){var ad=[ah.seriesIndex,ah.pointIndex,ah.data];var ac=jQuery.Event("jqplotDataMouseOver");ac.pageX=af.pageX;ac.pageY=af.pageY;ag.target.trigger(ac,ad);if(ag.series[ad[0]].highlightMouseOver&&!(ad[0]==ag.plugins.lineRenderer.highlightedSeriesIndex)){var ab=jQuery.Event("jqplotDataHighlight");ab.pageX=af.pageX;ab.pageY=af.pageY;ag.target.trigger(ab,ad);X(ag,ah.seriesIndex,ah.pointIndex,ah.points)}}else{if(ah==null){V(ag)}}}function d(ae,ad,ah,ag,af){if(ag){var ac=[ag.seriesIndex,ag.pointIndex,ag.data];if(af.series[ac[0]].highlightMouseDown&&!(ac[0]==af.plugins.lineRenderer.highlightedSeriesIndex)){var ab=jQuery.Event("jqplotDataHighlight");ab.pageX=ae.pageX;ab.pageY=ae.pageY;af.target.trigger(ab,ac);X(af,ag.seriesIndex,ag.pointIndex,ag.points)}}else{if(ag==null){V(af)}}}function Y(ad,ac,ag,af,ae){var ab=ae.plugins.lineRenderer.highlightedSeriesIndex;if(ab!=null&&ae.series[ab].highlightMouseDown){V(ae)}}function f(ae,ad,ah,ag,af){if(ag){var ac=[ag.seriesIndex,ag.pointIndex,ag.data];var ab=jQuery.Event("jqplotDataClick");ab.pageX=ae.pageX;ab.pageY=ae.pageY;af.target.trigger(ab,ac)}}function p(af,ae,ai,ah,ag){if(ah){var ad=[ah.seriesIndex,ah.pointIndex,ah.data];var ab=ag.plugins.lineRenderer.highlightedSeriesIndex;if(ab!=null&&ag.series[ab].highlightMouseDown){V(ag)}var ac=jQuery.Event("jqplotDataRightClick");ac.pageX=af.pageX;ac.pageY=af.pageY;ag.target.trigger(ac,ad)}}H.jqplot.LinearAxisRenderer=function(){};H.jqplot.LinearAxisRenderer.prototype.init=function(ab){this.breakPoints=null;this.breakTickLabel="&asymp;";this.drawBaseline=true;this.baselineWidth=null;this.baselineColor=null;this.forceTickAt0=false;this.forceTickAt100=false;this.tickInset=0;this.minorTicks=0;this.alignTicks=false;this._autoFormatString="";this._overrideFormatString=false;this._scalefact=1;H.extend(true,this,ab);if(this.breakPoints){if(!H.isArray(this.breakPoints)){this.breakPoints=null}else{if(this.breakPoints.length<2||this.breakPoints[1]<=this.breakPoints[0]){this.breakPoints=null}}}if(this.numberTicks!=null&&this.numberTicks<2){this.numberTicks=2}this.resetDataBounds()};H.jqplot.LinearAxisRenderer.prototype.draw=function(ab,ai){if(this.show){this.renderer.createTicks.call(this,ai);var ah=0;var ac;if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=H(document.createElement("div"));this._elem.addClass("jqplot-axis jqplot-"+this.name);this._elem.css("position","absolute");if(this.name=="xaxis"||this.name=="x2axis"){this._elem.width(this._plotDimensions.width)}else{this._elem.height(this._plotDimensions.height)}this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);if(this._label.show){var ag=this._label.draw(ab,ai);ag.appendTo(this._elem);ag=null}var af=this._ticks;var ae;for(var ad=0;ad<af.length;ad++){ae=af[ad];if(ae.show&&ae.showLabel&&(!ae.isMinorTick||this.showMinorTicks)){this._elem.append(ae.draw(ab,ai))}}ae=null;af=null}return this._elem};H.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._options.min;this.max=this._options.max;this.tickInterval=this._options.tickInterval;this.numberTicks=this._options.numberTicks;this._autoFormatString="";if(this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString){this.tickOptions.formatString=""}};H.jqplot.LinearAxisRenderer.prototype.set=function(){var ai=0;var ad;var ac=0;var ah=0;var ab=(this._label==null)?false:this._label.show;if(this.show){var ag=this._ticks;var af;for(var ae=0;ae<ag.length;ae++){af=ag[ae];if(!af._breakTick&&af.show&&af.showLabel&&(!af.isMinorTick||this.showMinorTicks)){if(this.name=="xaxis"||this.name=="x2axis"){ad=af._elem.outerHeight(true)}else{ad=af._elem.outerWidth(true)}if(ad>ai){ai=ad}}}af=null;ag=null;if(ab){ac=this._label._elem.outerWidth(true);ah=this._label._elem.outerHeight(true)}if(this.name=="xaxis"){ai=ai+ah;this._elem.css({height:ai+"px",left:"0px",bottom:"0px"})}else{if(this.name=="x2axis"){ai=ai+ah;this._elem.css({height:ai+"px",left:"0px",top:"0px"})}else{if(this.name=="yaxis"){ai=ai+ac;this._elem.css({width:ai+"px",left:"0px",top:"0px"});if(ab&&this._label.constructor==H.jqplot.AxisLabelRenderer){this._label._elem.css("width",ac+"px")}}else{ai=ai+ac;this._elem.css({width:ai+"px",right:"0px",top:"0px"});if(ab&&this._label.constructor==H.jqplot.AxisLabelRenderer){this._label._elem.css("width",ac+"px")}}}}}};H.jqplot.LinearAxisRenderer.prototype.createTicks=function(ad){var aM=this._ticks;var aD=this.ticks;var at=this.name;var av=this._dataBounds;var ab=(this.name.charAt(0)==="x")?this._plotDimensions.width:this._plotDimensions.height;var ah;var aY,aB;var aj,ai;var aW,aT;var aA=this.min;var aX=this.max;var aP=this.numberTicks;var a2=this.tickInterval;var ag=30;this._scalefact=(Math.max(ab,ag+1)-ag)/300;if(aD.length){for(aT=0;aT<aD.length;aT++){var aH=aD[aT];var aN=new this.tickRenderer(this.tickOptions);if(H.isArray(aH)){aN.value=aH[0];if(this.breakPoints){if(aH[0]==this.breakPoints[0]){aN.label=this.breakTickLabel;aN._breakTick=true;aN.showGridline=false;aN.showMark=false}else{if(aH[0]>this.breakPoints[0]&&aH[0]<=this.breakPoints[1]){aN.show=false;aN.showGridline=false;aN.label=aH[1]}else{aN.label=aH[1]}}}else{aN.label=aH[1]}aN.setTick(aH[0],this.name);this._ticks.push(aN)}else{if(H.isPlainObject(aH)){H.extend(true,aN,aH);aN.axis=this.name;this._ticks.push(aN)}else{aN.value=aH;if(this.breakPoints){if(aH==this.breakPoints[0]){aN.label=this.breakTickLabel;aN._breakTick=true;aN.showGridline=false;aN.showMark=false}else{if(aH>this.breakPoints[0]&&aH<=this.breakPoints[1]){aN.show=false;aN.showGridline=false}}}aN.setTick(aH,this.name);this._ticks.push(aN)}}}this.numberTicks=aD.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.tickInterval=(this.max-this.min)/(this.numberTicks-1)}else{if(at=="xaxis"||at=="x2axis"){ab=this._plotDimensions.width}else{ab=this._plotDimensions.height}var aq=this.numberTicks;if(this.alignTicks){if(this.name==="x2axis"&&ad.axes.xaxis.show){aq=ad.axes.xaxis.numberTicks}else{if(this.name.charAt(0)==="y"&&this.name!=="yaxis"&&this.name!=="yMidAxis"&&ad.axes.yaxis.show){aq=ad.axes.yaxis.numberTicks}}}aY=((this.min!=null)?this.min:av.min);aB=((this.max!=null)?this.max:av.max);var ao=aB-aY;var aL,ar;var am;if(this.tickOptions==null||!this.tickOptions.formatString){this._overrideFormatString=true}if(this.min==null&&this.max==null&&this.tickInterval==null&&!this.autoscale){if(this.forceTickAt0){if(aY>0){aY=0}if(aB<0){aB=0}}if(this.forceTickAt100){if(aY>100){aY=100}if(aB<100){aB=100}}var aI=H.jqplot.LinearTickGenerator(aY,aB,this._scalefact,aq);var ap=aY+ao*(this.padMin-1);var aJ=aB-ao*(this.padMax-1);if(aY<ap||aB>aJ){ap=aY-ao*(this.padMin-1);aJ=aB+ao*(this.padMax-1);aI=H.jqplot.LinearTickGenerator(ap,aJ,this._scalefact,aq)}this.min=aI[0];this.max=aI[1];this.numberTicks=aI[2];this._autoFormatString=aI[3];this.tickInterval=aI[4]}else{if(aY==aB){var ac=0.05;if(aY>0){ac=Math.max(Math.log(aY)/Math.LN10,0.05)}aY-=ac;aB+=ac}if(this.autoscale&&this.min==null&&this.max==null){var ae,af,al;var aw=false;var aG=false;var au={min:null,max:null,average:null,stddev:null};for(var aT=0;aT<this._series.length;aT++){var aO=this._series[aT];var ax=(aO.fillAxis=="x")?aO._xaxis.name:aO._yaxis.name;if(this.name==ax){var aK=aO._plotValues[aO.fillAxis];var az=aK[0];var aU=aK[0];for(var aS=1;aS<aK.length;aS++){if(aK[aS]<az){az=aK[aS]}else{if(aK[aS]>aU){aU=aK[aS]}}}var an=(aU-az)/aU;if(aO.renderer.constructor==H.jqplot.BarRenderer){if(az>=0&&(aO.fillToZero||an>0.1)){aw=true}else{aw=false;if(aO.fill&&aO.fillToZero&&az<0&&aU>0){aG=true}else{aG=false}}}else{if(aO.fill){if(az>=0&&(aO.fillToZero||an>0.1)){aw=true}else{if(az<0&&aU>0&&aO.fillToZero){aw=false;aG=true}else{aw=false;aG=false}}}else{if(az<0){aw=false}}}}}if(aw){this.numberTicks=2+Math.ceil((ab-(this.tickSpacing-1))/this.tickSpacing);this.min=0;aA=0;af=aB/(this.numberTicks-1);am=Math.pow(10,Math.abs(Math.floor(Math.log(af)/Math.LN10)));if(af/am==parseInt(af/am,10)){af+=am}this.tickInterval=Math.ceil(af/am)*am;this.max=this.tickInterval*(this.numberTicks-1)}else{if(aG){this.numberTicks=2+Math.ceil((ab-(this.tickSpacing-1))/this.tickSpacing);var aC=Math.ceil(Math.abs(aY)/ao*(this.numberTicks-1));var a1=this.numberTicks-1-aC;af=Math.max(Math.abs(aY/aC),Math.abs(aB/a1));am=Math.pow(10,Math.abs(Math.floor(Math.log(af)/Math.LN10)));this.tickInterval=Math.ceil(af/am)*am;this.max=this.tickInterval*a1;this.min=-this.tickInterval*aC}else{if(this.numberTicks==null){if(this.tickInterval){this.numberTicks=3+Math.ceil(ao/this.tickInterval)}else{this.numberTicks=2+Math.ceil((ab-(this.tickSpacing-1))/this.tickSpacing)}}if(this.tickInterval==null){af=ao/(this.numberTicks-1);if(af<1){am=Math.pow(10,Math.abs(Math.floor(Math.log(af)/Math.LN10)))}else{am=1}this.tickInterval=Math.ceil(af*am*this.pad)/am}else{am=1/this.tickInterval}ae=this.tickInterval*(this.numberTicks-1);al=(ae-ao)/2;if(this.min==null){this.min=Math.floor(am*(aY-al))/am}if(this.max==null){this.max=this.min+ae}}}var ay=H.jqplot.getSignificantFigures(this.tickInterval);var aF;if(ay.digitsLeft>=ay.significantDigits){aF="%d"}else{var am=Math.max(0,5-ay.digitsLeft);am=Math.min(am,ay.digitsRight);aF="%."+am+"f"}this._autoFormatString=aF}else{aL=(this.min!=null)?this.min:aY-ao*(this.padMin-1);ar=(this.max!=null)?this.max:aB+ao*(this.padMax-1);ao=ar-aL;if(this.numberTicks==null){if(this.tickInterval!=null){this.numberTicks=Math.ceil((ar-aL)/this.tickInterval)+1}else{if(ab>100){this.numberTicks=parseInt(3+(ab-100)/75,10)}else{this.numberTicks=2}}}if(this.tickInterval==null){this.tickInterval=ao/(this.numberTicks-1)}if(this.max==null){ar=aL+this.tickInterval*(this.numberTicks-1)}if(this.min==null){aL=ar-this.tickInterval*(this.numberTicks-1)}var ay=H.jqplot.getSignificantFigures(this.tickInterval);var aF;if(ay.digitsLeft>=ay.significantDigits){aF="%d"}else{var am=Math.max(0,5-ay.digitsLeft);am=Math.min(am,ay.digitsRight);aF="%."+am+"f"}this._autoFormatString=aF;this.min=aL;this.max=ar}if(this.renderer.constructor==H.jqplot.LinearAxisRenderer&&this._autoFormatString==""){ao=this.max-this.min;var aZ=new this.tickRenderer(this.tickOptions);var aE=aZ.formatString||H.jqplot.config.defaultTickFormatString;var aE=aE.match(H.jqplot.sprintf.regex)[0];var aV=0;if(aE){if(aE.search(/[fFeEgGpP]/)>-1){var aR=aE.match(/\%\.(\d{0,})?[eEfFgGpP]/);if(aR){aV=parseInt(aR[1],10)}else{aV=6}}else{if(aE.search(/[di]/)>-1){aV=0}}var ak=Math.pow(10,-aV);if(this.tickInterval<ak){if(aP==null&&a2==null){this.tickInterval=ak;if(aX==null&&aA==null){this.min=Math.floor(this._dataBounds.min/ak)*ak;if(this.min==this._dataBounds.min){this.min=this._dataBounds.min-this.tickInterval}this.max=Math.ceil(this._dataBounds.max/ak)*ak;if(this.max==this._dataBounds.max){this.max=this._dataBounds.max+this.tickInterval}var aQ=(this.max-this.min)/this.tickInterval;aQ=aQ.toFixed(11);aQ=Math.ceil(aQ);this.numberTicks=aQ+1}else{if(aX==null){var aQ=(this._dataBounds.max-this.min)/this.tickInterval;aQ=aQ.toFixed(11);this.numberTicks=Math.ceil(aQ)+2;this.max=this.min+this.tickInterval*(this.numberTicks-1)}else{if(aA==null){var aQ=(this.max-this._dataBounds.min)/this.tickInterval;aQ=aQ.toFixed(11);this.numberTicks=Math.ceil(aQ)+2;this.min=this.max-this.tickInterval*(this.numberTicks-1)}else{this.numberTicks=Math.ceil((aX-aA)/this.tickInterval)+1;this.min=Math.floor(aA*Math.pow(10,aV))/Math.pow(10,aV);this.max=Math.ceil(aX*Math.pow(10,aV))/Math.pow(10,aV);this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1}}}}}}}}if(this._overrideFormatString&&this._autoFormatString!=""){this.tickOptions=this.tickOptions||{};this.tickOptions.formatString=this._autoFormatString}var aN,a0;for(var aT=0;aT<this.numberTicks;aT++){aW=this.min+aT*this.tickInterval;aN=new this.tickRenderer(this.tickOptions);aN.setTick(aW,this.name);this._ticks.push(aN);if(aT<this.numberTicks-1){for(var aS=0;aS<this.minorTicks;aS++){aW+=this.tickInterval/(this.minorTicks+1);a0=H.extend(true,{},this.tickOptions,{name:this.name,value:aW,label:"",isMinorTick:true});aN=new this.tickRenderer(a0);this._ticks.push(aN)}}aN=null}}if(this.tickInset){this.min=this.min-this.tickInset*this.tickInterval;this.max=this.max+this.tickInset*this.tickInterval}aM=null};H.jqplot.LinearAxisRenderer.prototype.resetTickValues=function(ad){if(H.isArray(ad)&&ad.length==this._ticks.length){var ac;for(var ab=0;ab<ad.length;ab++){ac=this._ticks[ab];ac.value=ad[ab];ac.label=ac.formatter(ac.formatString,ad[ab]);ac.label=ac.prefix+ac.label;ac._elem.html(ac.label)}ac=null;this.min=H.jqplot.arrayMin(ad);this.max=H.jqplot.arrayMax(ad);this.pack()}};H.jqplot.LinearAxisRenderer.prototype.pack=function(ad,ac){ad=ad||{};ac=ac||this._offsets;var ar=this._ticks;var an=this.max;var am=this.min;var ai=ac.max;var ag=ac.min;var ak=(this._label==null)?false:this._label.show;for(var al in ad){this._elem.css(al,ad[al])}this._offsets=ac;var ae=ai-ag;var af=an-am;if(this.breakPoints){af=af-this.breakPoints[1]+this.breakPoints[0];this.p2u=function(au){return(au-ag)*af/ae+am};this.u2p=function(au){if(au>this.breakPoints[0]&&au<this.breakPoints[1]){au=this.breakPoints[0]}if(au<=this.breakPoints[0]){return(au-am)*ae/af+ag}else{return(au-this.breakPoints[1]+this.breakPoints[0]-am)*ae/af+ag}};if(this.name.charAt(0)=="x"){this.series_u2p=function(au){if(au>this.breakPoints[0]&&au<this.breakPoints[1]){au=this.breakPoints[0]}if(au<=this.breakPoints[0]){return(au-am)*ae/af}else{return(au-this.breakPoints[1]+this.breakPoints[0]-am)*ae/af}};this.series_p2u=function(au){return au*af/ae+am}}else{this.series_u2p=function(au){if(au>this.breakPoints[0]&&au<this.breakPoints[1]){au=this.breakPoints[0]}if(au>=this.breakPoints[1]){return(au-an)*ae/af}else{return(au+this.breakPoints[1]-this.breakPoints[0]-an)*ae/af}};this.series_p2u=function(au){return au*af/ae+an}}}else{this.p2u=function(au){return(au-ag)*af/ae+am};this.u2p=function(au){return(au-am)*ae/af+ag};if(this.name=="xaxis"||this.name=="x2axis"){this.series_u2p=function(au){return(au-am)*ae/af};this.series_p2u=function(au){return au*af/ae+am}}else{this.series_u2p=function(au){return(au-an)*ae/af};this.series_p2u=function(au){return au*af/ae+an}}}if(this.show){if(this.name=="xaxis"||this.name=="x2axis"){for(var ao=0;ao<ar.length;ao++){var aj=ar[ao];if(aj.show&&aj.showLabel){var ab;if(aj.constructor==H.jqplot.CanvasAxisTickRenderer&&aj.angle){var aq=(this.name=="xaxis")?1:-1;switch(aj.labelPosition){case"auto":if(aq*aj.angle<0){ab=-aj.getWidth()+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2}else{ab=-aj._textRenderer.height*Math.sin(aj._textRenderer.angle)/2}break;case"end":ab=-aj.getWidth()+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2;break;case"start":ab=-aj._textRenderer.height*Math.sin(aj._textRenderer.angle)/2;break;case"middle":ab=-aj.getWidth()/2+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2;break;default:ab=-aj.getWidth()/2+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2;break}}else{ab=-aj.getWidth()/2}var at=this.u2p(aj.value)+ab+"px";aj._elem.css("left",at);aj.pack()}}if(ak){var ah=this._label._elem.outerWidth(true);this._label._elem.css("left",ag+ae/2-ah/2+"px");if(this.name=="xaxis"){this._label._elem.css("bottom","0px")}else{this._label._elem.css("top","0px")}this._label.pack()}}else{for(var ao=0;ao<ar.length;ao++){var aj=ar[ao];if(aj.show&&aj.showLabel){var ab;if(aj.constructor==H.jqplot.CanvasAxisTickRenderer&&aj.angle){var aq=(this.name=="yaxis")?1:-1;switch(aj.labelPosition){case"auto":case"end":if(aq*aj.angle<0){ab=-aj._textRenderer.height*Math.cos(-aj._textRenderer.angle)/2}else{ab=-aj.getHeight()+aj._textRenderer.height*Math.cos(aj._textRenderer.angle)/2}break;case"start":if(aj.angle>0){ab=-aj._textRenderer.height*Math.cos(-aj._textRenderer.angle)/2}else{ab=-aj.getHeight()+aj._textRenderer.height*Math.cos(aj._textRenderer.angle)/2}break;case"middle":ab=-aj.getHeight()/2;break;default:ab=-aj.getHeight()/2;break}}else{ab=-aj.getHeight()/2}var at=this.u2p(aj.value)+ab+"px";aj._elem.css("top",at);aj.pack()}}if(ak){var ap=this._label._elem.outerHeight(true);this._label._elem.css("top",ai-ae/2-ap/2+"px");if(this.name=="yaxis"){this._label._elem.css("left","0px")}else{this._label._elem.css("right","0px")}this._label.pack()}}}ar=null};function h(ac){var ab;ac=Math.abs(ac);if(ac>=10){ab="%d"}else{if(ac>1){if(ac===parseInt(ac,10)){ab="%d"}else{ab="%.1f"}}else{var ad=-Math.floor(Math.log(ac)/Math.LN10);ab="%."+ad+"f"}}return ab}var a=[0.1,0.2,0.3,0.4,0.5,0.8,1,2,3,4,5];var b=function(ac){var ab=a.indexOf(ac);if(ab>0){return a[ab-1]}else{return a[a.length-1]/100}};var i=function(ac){var ab=a.indexOf(ac);if(ab<a.length-1){return a[ab+1]}else{return a[0]*100}};function c(af,an,am){var ak=Math.floor(am/2);var ac=Math.ceil(am*1.5);var ae=Number.MAX_VALUE;var ab=(an-af);var aq;var aj;var al;var ap;var ah;var ar=H.jqplot.getSignificantFigures;var ai;var ao;for(var ag=0,ad=ac-ak+1;ag<ad;ag++){ai=ak+ag;aq=ab/(ai-1);aj=ar(aq);aq=Math.abs(am-ai)+aj.digitsRight;if(aq<ae){ae=aq;al=ai;ao=aj.digitsRight}else{if(aq===ae){if(aj.digitsRight<ao){al=ai;ao=aj.digitsRight}}}}ap=Math.max(ao,Math.max(ar(af).digitsRight,ar(an).digitsRight));if(ap===0){ah="%d"}else{ah="%."+ap+"f"}aq=ab/(al-1);return[af,an,al,ah,aq]}function S(ac,af){af=af||7;var ae=ac/(af-1);var ad=Math.pow(10,Math.floor(Math.log(ae)/Math.LN10));var ag=ae/ad;var ab;if(ad<1){if(ag>5){ab=10*ad}else{if(ag>2){ab=5*ad}else{if(ag>1){ab=2*ad}else{ab=ad}}}}else{if(ag>5){ab=10*ad}else{if(ag>4){ab=5*ad}else{if(ag>3){ab=4*ad}else{if(ag>2){ab=3*ad}else{if(ag>1){ab=2*ad}else{ab=ad}}}}}}return ab}function M(ac,ab){ab=ab||1;var ae=Math.floor(Math.log(ac)/Math.LN10);var ag=Math.pow(10,ae);var af=ac/ag;var ad;af=af/ab;if(af<=0.38){ad=0.1}else{if(af<=1.6){ad=0.2}else{if(af<=4){ad=0.5}else{if(af<=8){ad=1}else{if(af<=16){ad=2}else{ad=5}}}}}return ad*ag}function t(ad,ac){var af=Math.floor(Math.log(ad)/Math.LN10);var ah=Math.pow(10,af);var ag=ad/ah;var ab;var ae;ag=ag/ac;if(ag<=0.38){ae=0.1}else{if(ag<=1.6){ae=0.2}else{if(ag<=4){ae=0.5}else{if(ag<=8){ae=1}else{if(ag<=16){ae=2}else{ae=5}}}}}ab=ae*ah;return[ab,ae,ah]}H.jqplot.LinearTickGenerator=function(ag,ah,ad,ae){if(ag===ah){ah=(ah)?0:1}ad=ad||1;if(ah<ag){var ai=ah;ah=ag;ag=ai}var ac=[];var aj=M(ah-ag,ad);if(ae==null){ac[0]=Math.floor(ag/aj)*aj;ac[1]=Math.ceil(ah/aj)*aj;ac[2]=Math.round((ac[1]-ac[0])/aj+1);ac[3]=h(aj);ac[4]=aj}else{var af=[];af[0]=Math.floor(ag/aj)*aj;af[1]=Math.ceil(ah/aj)*aj;af[2]=Math.round((af[1]-af[0])/aj+1);af[3]=h(aj);af[4]=aj;if(af[2]===ae){ac=af}else{var ab=S(af[1]-af[0],ae);ac[0]=af[0];ac[2]=ae;ac[4]=ab;ac[3]=h(ab);ac[1]=ac[0]+(ac[2]-1)*ac[4]}}return ac};H.jqplot.LinearTickGenerator.bestLinearInterval=M;H.jqplot.LinearTickGenerator.bestInterval=S;H.jqplot.LinearTickGenerator.bestLinearComponents=t;H.jqplot.LinearTickGenerator.bestConstrainedInterval=c;H.jqplot.MarkerRenderer=function(ab){this.show=true;this.style="filledCircle";this.lineWidth=2;this.size=9;this.color="#666666";this.shadow=true;this.shadowAngle=45;this.shadowOffset=1;this.shadowDepth=3;this.shadowAlpha="0.07";this.shadowRenderer=new H.jqplot.ShadowRenderer();this.shapeRenderer=new H.jqplot.ShapeRenderer();H.extend(true,this,ab)};H.jqplot.MarkerRenderer.prototype.init=function(ab){H.extend(true,this,ab);var ad={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:true};if(this.style.indexOf("filled")!=-1){ad.fill=true}if(this.style.indexOf("ircle")!=-1){ad.isarc=true;ad.closePath=false}this.shadowRenderer.init(ad);var ac={fill:false,isarc:false,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:true};if(this.style.indexOf("filled")!=-1){ac.fill=true}if(this.style.indexOf("ircle")!=-1){ac.isarc=true;ac.closePath=false}this.shapeRenderer.init(ac)};H.jqplot.MarkerRenderer.prototype.drawDiamond=function(ad,ac,ag,af,ai){var ab=1.2;var aj=this.size/2/ab;var ah=this.size/2*ab;var ae=[[ad-aj,ac],[ad,ac+ah],[ad+aj,ac],[ad,ac-ah]];if(this.shadow){this.shadowRenderer.draw(ag,ae)}this.shapeRenderer.draw(ag,ae,ai)};H.jqplot.MarkerRenderer.prototype.drawPlus=function(ae,ad,ah,ag,ak){var ac=1;var al=this.size/2*ac;var ai=this.size/2*ac;var aj=[[ae,ad-ai],[ae,ad+ai]];var af=[[ae+al,ad],[ae-al,ad]];var ab=H.extend(true,{},this.options,{closePath:false});if(this.shadow){this.shadowRenderer.draw(ah,aj,{closePath:false});this.shadowRenderer.draw(ah,af,{closePath:false})}this.shapeRenderer.draw(ah,aj,ab);this.shapeRenderer.draw(ah,af,ab)};H.jqplot.MarkerRenderer.prototype.drawX=function(ae,ad,ah,ag,ak){var ac=1;var al=this.size/2*ac;var ai=this.size/2*ac;var ab=H.extend(true,{},this.options,{closePath:false});var aj=[[ae-al,ad-ai],[ae+al,ad+ai]];var af=[[ae-al,ad+ai],[ae+al,ad-ai]];if(this.shadow){this.shadowRenderer.draw(ah,aj,{closePath:false});this.shadowRenderer.draw(ah,af,{closePath:false})}this.shapeRenderer.draw(ah,aj,ab);this.shapeRenderer.draw(ah,af,ab)};H.jqplot.MarkerRenderer.prototype.drawDash=function(ad,ac,ag,af,ai){var ab=1;var aj=this.size/2*ab;var ah=this.size/2*ab;var ae=[[ad-aj,ac],[ad+aj,ac]];if(this.shadow){this.shadowRenderer.draw(ag,ae)}this.shapeRenderer.draw(ag,ae,ai)};H.jqplot.MarkerRenderer.prototype.drawLine=function(ag,af,ab,ae,ac){var ad=[ag,af];if(this.shadow){this.shadowRenderer.draw(ab,ad)}this.shapeRenderer.draw(ab,ad,ac)};H.jqplot.MarkerRenderer.prototype.drawSquare=function(ad,ac,ag,af,ai){var ab=1;var aj=this.size/2/ab;var ah=this.size/2*ab;var ae=[[ad-aj,ac-ah],[ad-aj,ac+ah],[ad+aj,ac+ah],[ad+aj,ac-ah]];if(this.shadow){this.shadowRenderer.draw(ag,ae)}this.shapeRenderer.draw(ag,ae,ai)};H.jqplot.MarkerRenderer.prototype.drawCircle=function(ac,ai,ae,ah,af){var ab=this.size/2;var ad=2*Math.PI;var ag=[ac,ai,ab,0,ad,true];if(this.shadow){this.shadowRenderer.draw(ae,ag)}this.shapeRenderer.draw(ae,ag,af)};H.jqplot.MarkerRenderer.prototype.draw=function(ab,ae,ac,ad){ad=ad||{};if(ad.show==null||ad.show!=false){if(ad.color&&!ad.fillStyle){ad.fillStyle=ad.color}if(ad.color&&!ad.strokeStyle){ad.strokeStyle=ad.color}switch(this.style){case"diamond":this.drawDiamond(ab,ae,ac,false,ad);break;case"filledDiamond":this.drawDiamond(ab,ae,ac,true,ad);break;case"circle":this.drawCircle(ab,ae,ac,false,ad);break;case"filledCircle":this.drawCircle(ab,ae,ac,true,ad);break;case"square":this.drawSquare(ab,ae,ac,false,ad);break;case"filledSquare":this.drawSquare(ab,ae,ac,true,ad);break;case"x":this.drawX(ab,ae,ac,true,ad);break;case"plus":this.drawPlus(ab,ae,ac,true,ad);break;case"dash":this.drawDash(ab,ae,ac,true,ad);break;case"line":this.drawLine(ab,ae,ac,false,ad);break;default:this.drawDiamond(ab,ae,ac,false,ad);break}}};H.jqplot.ShadowRenderer=function(ab){this.angle=45;this.offset=1;this.alpha=0.07;this.lineWidth=1.5;this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.depth=3;this.strokeStyle="rgba(0,0,0,0.1)";this.isarc=false;H.extend(true,this,ab)};H.jqplot.ShadowRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.ShadowRenderer.prototype.draw=function(ao,am,aq){ao.save();var ab=(aq!=null)?aq:{};var an=(ab.fill!=null)?ab.fill:this.fill;var aj=(ab.fillRect!=null)?ab.fillRect:this.fillRect;var ai=(ab.closePath!=null)?ab.closePath:this.closePath;var af=(ab.offset!=null)?ab.offset:this.offset;var ad=(ab.alpha!=null)?ab.alpha:this.alpha;var ah=(ab.depth!=null)?ab.depth:this.depth;var ap=(ab.isarc!=null)?ab.isarc:this.isarc;var ak=(ab.linePattern!=null)?ab.linePattern:this.linePattern;ao.lineWidth=(ab.lineWidth!=null)?ab.lineWidth:this.lineWidth;ao.lineJoin=(ab.lineJoin!=null)?ab.lineJoin:this.lineJoin;ao.lineCap=(ab.lineCap!=null)?ab.lineCap:this.lineCap;ao.strokeStyle=ab.strokeStyle||this.strokeStyle||"rgba(0,0,0,"+ad+")";ao.fillStyle=ab.fillStyle||this.fillStyle||"rgba(0,0,0,"+ad+")";for(var ae=0;ae<ah;ae++){var al=H.jqplot.LinePattern(ao,ak);ao.translate(Math.cos(this.angle*Math.PI/180)*af,Math.sin(this.angle*Math.PI/180)*af);al.beginPath();if(ap){ao.arc(am[0],am[1],am[2],am[3],am[4],true)}else{if(aj){if(aj){ao.fillRect(am[0],am[1],am[2],am[3])}}else{if(am&&am.length){var ac=true;for(var ag=0;ag<am.length;ag++){if(am[ag][0]!=null&&am[ag][1]!=null){if(ac){al.moveTo(am[ag][0],am[ag][1]);ac=false}else{al.lineTo(am[ag][0],am[ag][1])}}else{ac=true}}}}}if(ai){al.closePath()}if(an){ao.fill()}else{ao.stroke()}}ao.restore()};H.jqplot.ShapeRenderer=function(ab){this.lineWidth=1.5;this.linePattern="solid";this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.isarc=false;this.fillRect=false;this.strokeRect=false;this.clearRect=false;this.strokeStyle="#999999";this.fillStyle="#999999";H.extend(true,this,ab)};H.jqplot.ShapeRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.ShapeRenderer.prototype.draw=function(am,ak,ao){am.save();var ab=(ao!=null)?ao:{};var al=(ab.fill!=null)?ab.fill:this.fill;var ag=(ab.closePath!=null)?ab.closePath:this.closePath;var ah=(ab.fillRect!=null)?ab.fillRect:this.fillRect;var ae=(ab.strokeRect!=null)?ab.strokeRect:this.strokeRect;var ac=(ab.clearRect!=null)?ab.clearRect:this.clearRect;var an=(ab.isarc!=null)?ab.isarc:this.isarc;var ai=(ab.linePattern!=null)?ab.linePattern:this.linePattern;var aj=H.jqplot.LinePattern(am,ai);am.lineWidth=ab.lineWidth||this.lineWidth;am.lineJoin=ab.lineJoin||this.lineJoin;am.lineCap=ab.lineCap||this.lineCap;am.strokeStyle=(ab.strokeStyle||ab.color)||this.strokeStyle;am.fillStyle=ab.fillStyle||this.fillStyle;am.beginPath();if(an){am.arc(ak[0],ak[1],ak[2],ak[3],ak[4],true);if(ag){am.closePath()}if(al){am.fill()}else{am.stroke()}am.restore();return}else{if(ac){am.clearRect(ak[0],ak[1],ak[2],ak[3]);am.restore();return}else{if(ah||ae){if(ah){am.fillRect(ak[0],ak[1],ak[2],ak[3])}if(ae){am.strokeRect(ak[0],ak[1],ak[2],ak[3]);am.restore();return}}else{if(ak&&ak.length){var ad=true;for(var af=0;af<ak.length;af++){if(ak[af][0]!=null&&ak[af][1]!=null){if(ad){aj.moveTo(ak[af][0],ak[af][1]);ad=false}else{aj.lineTo(ak[af][0],ak[af][1])}}else{ad=true}}if(ag){aj.closePath()}if(al){am.fill()}else{am.stroke()}}}}}am.restore()};H.jqplot.TableLegendRenderer=function(){};H.jqplot.TableLegendRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.TableLegendRenderer.prototype.addrow=function(ak,ae,ab,ai){var af=(ab)?this.rowSpacing+"px":"0px";var aj;var ad;var ac;var ah;var ag;ac=document.createElement("tr");aj=H(ac);aj.addClass("jqplot-table-legend");ac=null;if(ai){aj.prependTo(this._elem)}else{aj.appendTo(this._elem)}if(this.showSwatches){ad=H(document.createElement("td"));ad.addClass("jqplot-table-legend jqplot-table-legend-swatch");ad.css({textAlign:"center",paddingTop:af});ah=H(document.createElement("div"));ah.addClass("jqplot-table-legend-swatch-outline");ag=H(document.createElement("div"));ag.addClass("jqplot-table-legend-swatch");ag.css({backgroundColor:ae,borderColor:ae});aj.append(ad.append(ah.append(ag)))}if(this.showLabels){ad=H(document.createElement("td"));ad.addClass("jqplot-table-legend jqplot-table-legend-label");ad.css("paddingTop",af);aj.append(ad);if(this.escapeHtml){ad.text(ak)}else{ad.html(ak)}}ad=null;ah=null;ag=null;aj=null;ac=null};H.jqplot.TableLegendRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null}if(this.show){var ag=this._series;var ac=document.createElement("table");this._elem=H(ac);this._elem.addClass("jqplot-table-legend");var al={position:"absolute"};if(this.background){al.background=this.background}if(this.border){al.border=this.border}if(this.fontSize){al.fontSize=this.fontSize}if(this.fontFamily){al.fontFamily=this.fontFamily}if(this.textColor){al.textColor=this.textColor}if(this.marginTop!=null){al.marginTop=this.marginTop}if(this.marginBottom!=null){al.marginBottom=this.marginBottom}if(this.marginLeft!=null){al.marginLeft=this.marginLeft}if(this.marginRight!=null){al.marginRight=this.marginRight}var ab=false,ai=false,ak;for(var ah=0;ah<ag.length;ah++){ak=ag[ah];if(ak._stack||ak.renderer.constructor==H.jqplot.BezierCurveRenderer){ai=true}if(ak.show&&ak.showLabel){var af=this.labels[ah]||ak.label.toString();if(af){var ad=ak.color;if(ai&&ah<ag.length-1){ab=true}else{if(ai&&ah==ag.length-1){ab=false}}this.renderer.addrow.call(this,af,ad,ab,ai);ab=true}for(var ae=0;ae<H.jqplot.addLegendRowHooks.length;ae++){var aj=H.jqplot.addLegendRowHooks[ae].call(this,ak);if(aj){this.renderer.addrow.call(this,aj.label,aj.color,ab);ab=true}}af=null}}}return this._elem};H.jqplot.TableLegendRenderer.prototype.pack=function(ad){if(this.show){if(this.placement=="insideGrid"){switch(this.location){case"nw":var ac=ad.left;var ab=ad.top;this._elem.css("left",ac);this._elem.css("top",ab);break;case"n":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;var ab=ad.top;this._elem.css("left",ac);this._elem.css("top",ab);break;case"ne":var ac=ad.right;var ab=ad.top;this._elem.css({right:ac,top:ab});break;case"e":var ac=ad.right;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({right:ac,top:ab});break;case"se":var ac=ad.right;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});break;case"s":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;var ab=ad.bottom;this._elem.css({left:ac,bottom:ab});break;case"sw":var ac=ad.left;var ab=ad.bottom;this._elem.css({left:ac,bottom:ab});break;case"w":var ac=ad.left;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({left:ac,top:ab});break;default:var ac=ad.right;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});break}}else{if(this.placement=="outside"){switch(this.location){case"nw":var ac=this._plotDimensions.width-ad.left;var ab=ad.top;this._elem.css("right",ac);this._elem.css("top",ab);break;case"n":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;var ab=this._plotDimensions.height-ad.top;this._elem.css("left",ac);this._elem.css("bottom",ab);break;case"ne":var ac=this._plotDimensions.width-ad.right;var ab=ad.top;this._elem.css({left:ac,top:ab});break;case"e":var ac=this._plotDimensions.width-ad.right;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({left:ac,top:ab});break;case"se":var ac=this._plotDimensions.width-ad.right;var ab=ad.bottom;this._elem.css({left:ac,bottom:ab});break;case"s":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;var ab=this._plotDimensions.height-ad.bottom;this._elem.css({left:ac,top:ab});break;case"sw":var ac=this._plotDimensions.width-ad.left;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});break;case"w":var ac=this._plotDimensions.width-ad.left;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({right:ac,top:ab});break;default:var ac=ad.right;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});break}}else{switch(this.location){case"nw":this._elem.css({left:0,top:ad.top});break;case"n":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;this._elem.css({left:ac,top:ad.top});break;case"ne":this._elem.css({right:0,top:ad.top});break;case"e":var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({right:ad.right,top:ab});break;case"se":this._elem.css({right:ad.right,bottom:ad.bottom});break;case"s":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;this._elem.css({left:ac,bottom:ad.bottom});break;case"sw":this._elem.css({left:ad.left,bottom:ad.bottom});break;case"w":var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({left:ad.left,top:ab});break;default:this._elem.css({right:ad.right,bottom:ad.bottom});break}}}}};H.jqplot.ThemeEngine=function(){this.themes={};this.activeTheme=null};H.jqplot.ThemeEngine.prototype.init=function(){var ae=new H.jqplot.Theme({_name:"Default"});var ah,ac,ag;for(ah in ae.target){if(ah=="textColor"){ae.target[ah]=this.target.css("color")}else{ae.target[ah]=this.target.css(ah)}}if(this.title.show&&this.title._elem){for(ah in ae.title){if(ah=="textColor"){ae.title[ah]=this.title._elem.css("color")}else{ae.title[ah]=this.title._elem.css(ah)}}}for(ah in ae.grid){ae.grid[ah]=this.grid[ah]}if(ae.grid.backgroundColor==null&&this.grid.background!=null){ae.grid.backgroundColor=this.grid.background}if(this.legend.show&&this.legend._elem){for(ah in ae.legend){if(ah=="textColor"){ae.legend[ah]=this.legend._elem.css("color")}else{ae.legend[ah]=this.legend._elem.css(ah)}}}var ad;for(ac=0;ac<this.series.length;ac++){ad=this.series[ac];if(ad.renderer.constructor==H.jqplot.LineRenderer){ae.series.push(new m())}else{if(ad.renderer.constructor==H.jqplot.BarRenderer){ae.series.push(new P())}else{if(ad.renderer.constructor==H.jqplot.PieRenderer){ae.series.push(new e())}else{if(ad.renderer.constructor==H.jqplot.DonutRenderer){ae.series.push(new C())}else{if(ad.renderer.constructor==H.jqplot.FunnelRenderer){ae.series.push(new U())}else{if(ad.renderer.constructor==H.jqplot.MeterGaugeRenderer){ae.series.push(new z())}else{ae.series.push({})}}}}}}for(ah in ae.series[ac]){ae.series[ac][ah]=ad[ah]}}var ab,af;for(ah in this.axes){af=this.axes[ah];ab=ae.axes[ah]=new L();ab.borderColor=af.borderColor;ab.borderWidth=af.borderWidth;if(af._ticks&&af._ticks[0]){for(ag in ab.ticks){if(af._ticks[0].hasOwnProperty(ag)){ab.ticks[ag]=af._ticks[0][ag]}else{if(af._ticks[0]._elem){ab.ticks[ag]=af._ticks[0]._elem.css(ag)}}}}if(af._label&&af._label.show){for(ag in ab.label){if(af._label[ag]){ab.label[ag]=af._label[ag]}else{if(af._label._elem){if(ag=="textColor"){ab.label[ag]=af._label._elem.css("color")}else{ab.label[ag]=af._label._elem.css(ag)}}}}}}this.themeEngine._add(ae);this.themeEngine.activeTheme=this.themeEngine.themes[ae._name]};H.jqplot.ThemeEngine.prototype.get=function(ab){if(!ab){return this.activeTheme}else{return this.themes[ab]}};function K(ac,ab){return ac-ab}H.jqplot.ThemeEngine.prototype.getThemeNames=function(){var ab=[];for(var ac in this.themes){ab.push(ac)}return ab.sort(K)};H.jqplot.ThemeEngine.prototype.getThemes=function(){var ac=[];var ab=[];for(var ae in this.themes){ac.push(ae)}ac.sort(K);for(var ad=0;ad<ac.length;ad++){ab.push(this.themes[ac[ad]])}return ab};H.jqplot.ThemeEngine.prototype.activate=function(ao,au){var ab=false;if(!au&&this.activeTheme&&this.activeTheme._name){au=this.activeTheme._name}if(!this.themes.hasOwnProperty(au)){throw new Error("No theme of that name")}else{var ag=this.themes[au];this.activeTheme=ag;var at,am=false,al=false;var ac=["xaxis","x2axis","yaxis","y2axis"];for(ap=0;ap<ac.length;ap++){var ah=ac[ap];if(ag.axesStyles.borderColor!=null){ao.axes[ah].borderColor=ag.axesStyles.borderColor}if(ag.axesStyles.borderWidth!=null){ao.axes[ah].borderWidth=ag.axesStyles.borderWidth}}for(var ar in ao.axes){var ae=ao.axes[ar];if(ae.show){var ak=ag.axes[ar]||{};var ai=ag.axesStyles;var af=H.jqplot.extend(true,{},ak,ai);at=(ag.axesStyles.borderColor!=null)?ag.axesStyles.borderColor:af.borderColor;if(af.borderColor!=null){ae.borderColor=af.borderColor;ab=true}at=(ag.axesStyles.borderWidth!=null)?ag.axesStyles.borderWidth:af.borderWidth;if(af.borderWidth!=null){ae.borderWidth=af.borderWidth;ab=true}if(ae._ticks&&ae._ticks[0]){for(var ad in af.ticks){at=af.ticks[ad];if(at!=null){ae.tickOptions[ad]=at;ae._ticks=[];ab=true}}}if(ae._label&&ae._label.show){for(var ad in af.label){at=af.label[ad];if(at!=null){ae.labelOptions[ad]=at;ab=true}}}}}for(var an in ag.grid){if(ag.grid[an]!=null){ao.grid[an]=ag.grid[an]}}if(!ab){ao.grid.draw()}if(ao.legend.show){for(an in ag.legend){if(ag.legend[an]!=null){ao.legend[an]=ag.legend[an]}}}if(ao.title.show){for(an in ag.title){if(ag.title[an]!=null){ao.title[an]=ag.title[an]}}}var ap;for(ap=0;ap<ag.series.length;ap++){var aj={};var aq=false;for(an in ag.series[ap]){at=(ag.seriesStyles[an]!=null)?ag.seriesStyles[an]:ag.series[ap][an];if(at!=null){aj[an]=at;if(an=="color"){ao.series[ap].renderer.shapeRenderer.fillStyle=at;ao.series[ap].renderer.shapeRenderer.strokeStyle=at;ao.series[ap][an]=at}else{if((an=="lineWidth")||(an=="linePattern")){ao.series[ap].renderer.shapeRenderer[an]=at;ao.series[ap][an]=at}else{if(an=="markerOptions"){R(ao.series[ap].markerOptions,at);R(ao.series[ap].markerRenderer,at)}else{ao.series[ap][an]=at}}}ab=true}}}if(ab){ao.target.empty();ao.draw()}for(an in ag.target){if(ag.target[an]!=null){ao.target.css(an,ag.target[an])}}}};H.jqplot.ThemeEngine.prototype._add=function(ac,ab){if(ab){ac._name=ab}if(!ac._name){ac._name=Date.parse(new Date())}if(!this.themes.hasOwnProperty(ac._name)){this.themes[ac._name]=ac}else{throw new Error("jqplot.ThemeEngine Error: Theme already in use")}};H.jqplot.ThemeEngine.prototype.remove=function(ab){if(ab=="Default"){return false}return delete this.themes[ab]};H.jqplot.ThemeEngine.prototype.newTheme=function(ab,ad){if(typeof(ab)=="object"){ad=ad||ab;ab=null}if(ad&&ad._name){ab=ad._name}else{ab=ab||Date.parse(new Date())}var ac=this.copy(this.themes.Default._name,ab);H.jqplot.extend(ac,ad);return ac};function x(ad){if(ad==null||typeof(ad)!="object"){return ad}var ab=new ad.constructor();for(var ac in ad){ab[ac]=x(ad[ac])}return ab}H.jqplot.clone=x;function R(ad,ac){if(ac==null||typeof(ac)!="object"){return}for(var ab in ac){if(ab=="highlightColors"){ad[ab]=x(ac[ab])}if(ac[ab]!=null&&typeof(ac[ab])=="object"){if(!ad.hasOwnProperty(ab)){ad[ab]={}}R(ad[ab],ac[ab])}else{ad[ab]=ac[ab]}}}H.jqplot.merge=R;H.jqplot.extend=function(){var ag=arguments[0]||{},ae=1,af=arguments.length,ab=false,ad;if(typeof ag==="boolean"){ab=ag;ag=arguments[1]||{};ae=2}if(typeof ag!=="object"&&!toString.call(ag)==="[object Function]"){ag={}}for(;ae<af;ae++){if((ad=arguments[ae])!=null){for(var ac in ad){var ah=ag[ac],ai=ad[ac];if(ag===ai){continue}if(ab&&ai&&typeof ai==="object"&&!ai.nodeType){ag[ac]=H.jqplot.extend(ab,ah||(ai.length!=null?[]:{}),ai)}else{if(ai!==r){ag[ac]=ai}}}}}return ag};H.jqplot.ThemeEngine.prototype.rename=function(ac,ab){if(ac=="Default"||ab=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default")}if(this.themes.hasOwnProperty(ab)){throw new Error("jqplot.ThemeEngine Error: New name already in use.")}else{if(this.themes.hasOwnProperty(ac)){var ad=this.copy(ac,ab);this.remove(ac);return ad}}throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")};H.jqplot.ThemeEngine.prototype.copy=function(ab,ad,af){if(ad=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme")}if(!this.themes.hasOwnProperty(ab)){var ac="jqplot.ThemeEngine Error: Source name invalid";throw new Error(ac)}if(this.themes.hasOwnProperty(ad)){var ac="jqplot.ThemeEngine Error: Target name invalid";throw new Error(ac)}else{var ae=x(this.themes[ab]);ae._name=ad;H.jqplot.extend(true,ae,af);this._add(ae);return ae}};H.jqplot.Theme=function(ab,ac){if(typeof(ab)=="object"){ac=ac||ab;ab=null}ab=ab||Date.parse(new Date());this._name=ab;this.target={backgroundColor:null};this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null};this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null};this.seriesStyles={};this.series=[];this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null};this.axesStyles={label:{},ticks:{}};this.axes={};if(typeof(ac)=="string"){this._name=ac}else{if(typeof(ac)=="object"){H.jqplot.extend(true,this,ac)}}};var L=function(){this.borderColor=null;this.borderWidth=null;this.ticks=new l();this.label=new q()};var l=function(){this.show=null;this.showGridline=null;this.showLabel=null;this.showMark=null;this.size=null;this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null};var q=function(){this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null;this.fontWeight=null};var m=function(){this.color=null;this.lineWidth=null;this.linePattern=null;this.shadow=null;this.fillColor=null;this.showMarker=null;this.markerOptions=new E()};var E=function(){this.show=null;this.style=null;this.lineWidth=null;this.size=null;this.color=null;this.shadow=null};var P=function(){this.color=null;this.seriesColors=null;this.lineWidth=null;this.shadow=null;this.barPadding=null;this.barMargin=null;this.barWidth=null;this.highlightColors=null};var e=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.highlightColors=null};var C=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.innerDiameter=null;this.thickness=null;this.ringMargin=null;this.highlightColors=null};var U=function(){this.color=null;this.lineWidth=null;this.shadow=null;this.padding=null;this.sectionMargin=null;this.seriesColors=null;this.highlightColors=null};var z=function(){this.padding=null;this.backgroundColor=null;this.ringColor=null;this.tickColor=null;this.ringWidth=null;this.intervalColors=null;this.intervalInnerRadius=null;this.intervalOuterRadius=null;this.hubRadius=null;this.needleThickness=null;this.needlePad=null};H.fn.jqplotChildText=function(){return H(this).contents().filter(function(){return this.nodeType==3}).text()};H.fn.jqplotGetComputedFontStyle=function(){var ae=window.getComputedStyle?window.getComputedStyle(this[0]):this[0].currentStyle;var ac=ae["font-style"]?["font-style","font-weight","font-size","font-family"]:["fontStyle","fontWeight","fontSize","fontFamily"];var af=[];for(var ad=0;ad<ac.length;++ad){var ab=String(ae[ac[ad]]);if(ab&&ab!="normal"){af.push(ab)}}return af.join(" ")};H.fn.jqplotToImageCanvas=function(ad){ad=ad||{};var ao=(ad.x_offset==null)?0:ad.x_offset;var aq=(ad.y_offset==null)?0:ad.y_offset;var af=(ad.backgroundColor==null)?"rgb(255,255,255)":ad.backgroundColor;if(H(this).width()==0||H(this).height()==0){return null}if(!H.jqplot.support_canvas){return null}var ah=document.createElement("canvas");var au=H(this).outerHeight(true);var am=H(this).outerWidth(true);var ag=H(this).offset();var ai=ag.left;var ak=ag.top;var an=0,al=0;var ar=["jqplot-table-legend","jqplot-xaxis-tick","jqplot-x2axis-tick","jqplot-yaxis-tick","jqplot-y2axis-tick","jqplot-y3axis-tick","jqplot-y4axis-tick","jqplot-y5axis-tick","jqplot-y6axis-tick","jqplot-y7axis-tick","jqplot-y8axis-tick","jqplot-y9axis-tick","jqplot-xaxis-label","jqplot-x2axis-label","jqplot-yaxis-label","jqplot-y2axis-label","jqplot-y3axis-label","jqplot-y4axis-label","jqplot-y5axis-label","jqplot-y6axis-label","jqplot-y7axis-label","jqplot-y8axis-label","jqplot-y9axis-label"];var aj,ab,ac,av;for(var at in ar){H(this).find("."+ar[at]).each(function(){aj=H(this).offset().top-ak;ab=H(this).offset().left-ai;av=ab+H(this).outerWidth(true)+an;ac=aj+H(this).outerHeight(true)+al;if(ab<-an){am=am-an-ab;an=-ab}if(aj<-al){au=au-al-aj;al=-aj}if(av>am){am=av}if(ac>au){au=ac}})}ah.width=am+Number(ao);ah.height=au+Number(aq);var ae=ah.getContext("2d");ae.save();ae.fillStyle=af;ae.fillRect(0,0,ah.width,ah.height);ae.restore();ae.translate(an,al);ae.textAlign="left";ae.textBaseline="top";function aw(ay){var az=parseInt(H(ay).css("line-height"),10);if(isNaN(az)){az=parseInt(H(ay).css("font-size"),10)*1.2}return az}function ax(az,ay,aM,aA,aI,aB){var aK=aw(az);var aE=H(az).innerWidth();var aF=H(az).innerHeight();var aH=aM.split(/\s+/);var aL=aH.length;var aJ="";var aG=[];var aO=aI;var aN=aA;for(var aD=0;aD<aL;aD++){aJ+=aH[aD];if(ay.measureText(aJ).width>aE){aG.push(aD);aJ=""}}if(aG.length===0){if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an}ay.fillText(aM,aN,aI)}else{aJ=aH.slice(0,aG[0]).join(" ");if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an}ay.fillText(aJ,aN,aO);aO+=aK;for(var aD=1,aC=aG.length;aD<aC;aD++){aJ=aH.slice(aG[aD-1],aG[aD]).join(" ");if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an}ay.fillText(aJ,aN,aO);aO+=aK}aJ=aH.slice(aG[aD-1],aH.length).join(" ");if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an}ay.fillText(aJ,aN,aO)}}function ap(aA,aD,ay){var aH=aA.tagName.toLowerCase();var az=H(aA).position();var aE=window.getComputedStyle?window.getComputedStyle(aA):aA.currentStyle;var aC=aD+az.left+parseInt(aE.marginLeft,10)+parseInt(aE.borderLeftWidth,10)+parseInt(aE.paddingLeft,10);var aF=ay+az.top+parseInt(aE.marginTop,10)+parseInt(aE.borderTopWidth,10)+parseInt(aE.paddingTop,10);var aG=ah.width;if((aH=="div"||aH=="span")&&!H(aA).hasClass("jqplot-highlighter-tooltip")){H(aA).children().each(function(){ap(this,aC,aF)});var aI=H(aA).jqplotChildText();if(aI){ae.font=H(aA).jqplotGetComputedFontStyle();ae.fillStyle=H(aA).css("color");ax(aA,ae,aI,aC,aF,aG)}}else{if(aH==="table"&&H(aA).hasClass("jqplot-table-legend")){ae.strokeStyle=H(aA).css("border-top-color");ae.fillStyle=H(aA).css("background-color");ae.fillRect(aC,aF,H(aA).innerWidth(),H(aA).innerHeight());if(parseInt(H(aA).css("border-top-width"),10)>0){ae.strokeRect(aC,aF,H(aA).innerWidth(),H(aA).innerHeight())}H(aA).find("div.jqplot-table-legend-swatch-outline").each(function(){var aO=H(this);ae.strokeStyle=aO.css("border-top-color");var aK=aC+aO.position().left;var aL=aF+aO.position().top;ae.strokeRect(aK,aL,aO.innerWidth(),aO.innerHeight());aK+=parseInt(aO.css("padding-left"),10);aL+=parseInt(aO.css("padding-top"),10);var aN=aO.innerHeight()-2*parseInt(aO.css("padding-top"),10);var aJ=aO.innerWidth()-2*parseInt(aO.css("padding-left"),10);var aM=aO.children("div.jqplot-table-legend-swatch");ae.fillStyle=aM.css("background-color");ae.fillRect(aK,aL,aJ,aN)});H(aA).find("td.jqplot-table-legend-label").each(function(){var aL=H(this);var aJ=aC+aL.position().left;var aK=aF+aL.position().top+parseInt(aL.css("padding-top"),10);ae.font=aL.jqplotGetComputedFontStyle();ae.fillStyle=aL.css("color");ae.fillText(aL.text(),aJ,aK)});var aB=null}else{if(aH=="canvas"){ae.drawImage(aA,aC,aF)}}}}H(this).children().each(function(){ap(this,ao,aq)});return ah};H.fn.jqplotToImageStr=function(ac){var ab=H(this).jqplotToImageCanvas(ac);if(ab){return ab.toDataURL("image/png")}else{return null}};H.fn.jqplotToImageElem=function(ab){var ac=document.createElement("img");var ad=H(this).jqplotToImageStr(ab);ac.src=ad;return ac};H.fn.jqplotToImageElemStr=function(ab){var ac="<img src="+H(this).jqplotToImageStr(ab)+" />";return ac};H.fn.jqplotSaveImage=function(){var ab=H(this).jqplotToImageStr({});if(ab){window.location.href=ab.replace("image/png","image/octet-stream")}};H.fn.jqplotViewImage=function(){var ac=H(this).jqplotToImageElemStr({});var ad=H(this).jqplotToImageStr({});if(ac){var ab=window.open("");ab.document.open("image/png");ab.document.write(ac);ab.document.close();ab=null}};var aa=function(){this.syntax=aa.config.syntax;this._type="jsDate";this.proxy=new Date();this.options={};this.locale=aa.regional.getLocale();this.formatString="";this.defaultCentury=aa.config.defaultCentury;switch(arguments.length){case 0:break;case 1:if(j(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var ad=this.options=arguments[0];this.syntax=ad.syntax||this.syntax;this.defaultCentury=ad.defaultCentury||this.defaultCentury;this.proxy=aa.createDate(ad.date)}else{this.proxy=aa.createDate(arguments[0])}break;default:var ab=[];for(var ac=0;ac<arguments.length;ac++){ab.push(arguments[ac])}this.proxy=new Date();this.proxy.setFullYear.apply(this.proxy,ab.slice(0,3));if(ab.slice(3).length){this.proxy.setHours.apply(this.proxy,ab.slice(3))}break}};aa.config={defaultLocale:"en",syntax:"perl",defaultCentury:1900};aa.prototype.add=function(ad,ac){var ab=A[ac]||A.day;if(typeof ab=="number"){this.proxy.setTime(this.proxy.getTime()+(ab*ad))}else{ab.add(this,ad)}return this};aa.prototype.clone=function(){return new aa(this.proxy.getTime())};aa.prototype.getUtcOffset=function(){return this.proxy.getTimezoneOffset()*60000};aa.prototype.diff=function(ac,af,ab){ac=new aa(ac);if(ac===null){return null}var ad=A[af]||A.day;if(typeof ad=="number"){var ae=(this.proxy.getTime()-ac.proxy.getTime())/ad}else{var ae=ad.diff(this.proxy,ac.proxy)}return(ab?ae:Math[ae>0?"floor":"ceil"](ae))};aa.prototype.getAbbrDayName=function(){return aa.regional[this.locale]["dayNamesShort"][this.proxy.getDay()]};aa.prototype.getAbbrMonthName=function(){return aa.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()]};aa.prototype.getAMPM=function(){return this.proxy.getHours()>=12?"PM":"AM"};aa.prototype.getAmPm=function(){return this.proxy.getHours()>=12?"pm":"am"};aa.prototype.getCentury=function(){return parseInt(this.proxy.getFullYear()/100,10)};aa.prototype.getDate=function(){return this.proxy.getDate()};aa.prototype.getDay=function(){return this.proxy.getDay()};aa.prototype.getDayOfWeek=function(){var ab=this.proxy.getDay();return ab===0?7:ab};aa.prototype.getDayOfYear=function(){var ac=this.proxy;var ab=ac-new Date(""+ac.getFullYear()+"/1/1 GMT");ab+=ac.getTimezoneOffset()*60000;ac=null;return parseInt(ab/60000/60/24,10)+1};aa.prototype.getDayName=function(){return aa.regional[this.locale]["dayNames"][this.proxy.getDay()]};aa.prototype.getFullWeekOfYear=function(){var ae=this.proxy;var ab=this.getDayOfYear();var ad=6-ae.getDay();var ac=parseInt((ab+ad)/7,10);return ac};aa.prototype.getFullYear=function(){return this.proxy.getFullYear()};aa.prototype.getGmtOffset=function(){var ab=this.proxy.getTimezoneOffset()/60;var ac=ab<0?"+":"-";ab=Math.abs(ab);return ac+J(Math.floor(ab),2)+":"+J((ab%1)*60,2)};aa.prototype.getHours=function(){return this.proxy.getHours()};aa.prototype.getHours12=function(){var ab=this.proxy.getHours();return ab>12?ab-12:(ab==0?12:ab)};aa.prototype.getIsoWeek=function(){var ae=this.proxy;var ad=ae.getWeekOfYear();var ab=(new Date(""+ae.getFullYear()+"/1/1")).getDay();var ac=ad+(ab>4||ab<=1?0:1);if(ac==53&&(new Date(""+ae.getFullYear()+"/12/31")).getDay()<4){ac=1}else{if(ac===0){ae=new aa(new Date(""+(ae.getFullYear()-1)+"/12/31"));ac=ae.getIsoWeek()}}ae=null;return ac};aa.prototype.getMilliseconds=function(){return this.proxy.getMilliseconds()};aa.prototype.getMinutes=function(){return this.proxy.getMinutes()};aa.prototype.getMonth=function(){return this.proxy.getMonth()};aa.prototype.getMonthName=function(){return aa.regional[this.locale]["monthNames"][this.proxy.getMonth()]};aa.prototype.getMonthNumber=function(){return this.proxy.getMonth()+1};aa.prototype.getSeconds=function(){return this.proxy.getSeconds()};aa.prototype.getShortYear=function(){return this.proxy.getYear()%100};aa.prototype.getTime=function(){return this.proxy.getTime()};aa.prototype.getTimezoneAbbr=function(){return this.proxy.toString().replace(/^.*\(([^)]+)\)$/,"$1")};aa.prototype.getTimezoneName=function(){var ab=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return ab[1]||ab[2]||"GMT"+this.getGmtOffset()};aa.prototype.getTimezoneOffset=function(){return this.proxy.getTimezoneOffset()};aa.prototype.getWeekOfYear=function(){var ab=this.getDayOfYear();var ad=7-this.getDayOfWeek();var ac=parseInt((ab+ad)/7,10);return ac};aa.prototype.getUnix=function(){return Math.round(this.proxy.getTime()/1000,0)};aa.prototype.getYear=function(){return this.proxy.getYear()};aa.prototype.next=function(ab){ab=ab||"day";return this.clone().add(1,ab)};aa.prototype.set=function(){switch(arguments.length){case 0:this.proxy=new Date();break;case 1:if(j(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var ad=this.options=arguments[0];this.syntax=ad.syntax||this.syntax;this.defaultCentury=ad.defaultCentury||this.defaultCentury;this.proxy=aa.createDate(ad.date)}else{this.proxy=aa.createDate(arguments[0])}break;default:var ab=[];for(var ac=0;ac<arguments.length;ac++){ab.push(arguments[ac])}this.proxy=new Date();this.proxy.setFullYear.apply(this.proxy,ab.slice(0,3));if(ab.slice(3).length){this.proxy.setHours.apply(this.proxy,ab.slice(3))}break}return this};aa.prototype.setDate=function(ab){this.proxy.setDate(ab);return this};aa.prototype.setFullYear=function(){this.proxy.setFullYear.apply(this.proxy,arguments);return this};aa.prototype.setHours=function(){this.proxy.setHours.apply(this.proxy,arguments);return this};aa.prototype.setMilliseconds=function(ab){this.proxy.setMilliseconds(ab);return this};aa.prototype.setMinutes=function(){this.proxy.setMinutes.apply(this.proxy,arguments);return this};aa.prototype.setMonth=function(){this.proxy.setMonth.apply(this.proxy,arguments);return this};aa.prototype.setSeconds=function(){this.proxy.setSeconds.apply(this.proxy,arguments);return this};aa.prototype.setTime=function(ab){this.proxy.setTime(ab);return this};aa.prototype.setYear=function(){this.proxy.setYear.apply(this.proxy,arguments);return this};aa.prototype.strftime=function(ab){ab=ab||this.formatString||aa.regional[this.locale]["formatString"];return aa.strftime(this,ab,this.syntax)};aa.prototype.toString=function(){return this.proxy.toString()};aa.prototype.toYmdInt=function(){return(this.proxy.getFullYear()*10000)+(this.getMonthNumber()*100)+this.proxy.getDate()};aa.regional={en:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],formatString:"%Y-%m-%d %H:%M:%S"},fr:{monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],formatString:"%Y-%m-%d %H:%M:%S"},de:{monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],formatString:"%Y-%m-%d %H:%M:%S"},es:{monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},ru:{monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],formatString:"%Y-%m-%d %H:%M:%S"},ar:{monthNames:["كانون الثاني","شباط","آذار","نيسان","آذار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"],dayNamesShort:["سبت","أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة"],formatString:"%Y-%m-%d %H:%M:%S"},pt:{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},"pt-BR":{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"}};aa.regional["en-US"]=aa.regional["en-GB"]=aa.regional.en;aa.regional.getLocale=function(){var ab=aa.config.defaultLocale;if(document&&document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang){ab=document.getElementsByTagName("html")[0].lang;if(!aa.regional.hasOwnProperty(ab)){ab=aa.config.defaultLocale}}return ab};var y=24*60*60*1000;var J=function(ab,ae){ab=String(ab);var ac=ae-ab.length;var ad=String(Math.pow(10,ac)).slice(1);return ad.concat(ab)};var A={millisecond:1,second:1000,minute:60*1000,hour:60*60*1000,day:y,week:7*y,month:{add:function(ad,ab){A.year.add(ad,Math[ab>0?"floor":"ceil"](ab/12));var ac=ad.getMonth()+(ab%12);if(ac==12){ac=0;ad.setYear(ad.getFullYear()+1)}else{if(ac==-1){ac=11;ad.setYear(ad.getFullYear()-1)}}ad.setMonth(ac)},diff:function(af,ad){var ab=af.getFullYear()-ad.getFullYear();var ac=af.getMonth()-ad.getMonth()+(ab*12);var ae=af.getDate()-ad.getDate();return ac+(ae/30)}},year:{add:function(ac,ab){ac.setYear(ac.getFullYear()+Math[ab>0?"floor":"ceil"](ab))},diff:function(ac,ab){return A.month.diff(ac,ab)/12}}};for(var T in A){if(T.substring(T.length-1)!="s"){A[T+"s"]=A[T]}}var D=function(af,ae,ac){if(aa.formats[ac]["shortcuts"][ae]){return aa.strftime(af,aa.formats[ac]["shortcuts"][ae],ac)}else{var ab=(aa.formats[ac]["codes"][ae]||"").split(".");var ad=af["get"+ab[0]]?af["get"+ab[0]]():"";if(ab[1]){ad=J(ad,ab[1])}return ad}};aa.strftime=function(ah,ae,ad,ai){var ac="perl";var ag=aa.regional.getLocale();if(ad&&aa.formats.hasOwnProperty(ad)){ac=ad}else{if(ad&&aa.regional.hasOwnProperty(ad)){ag=ad}}if(ai&&aa.formats.hasOwnProperty(ai)){ac=ai}else{if(ai&&aa.regional.hasOwnProperty(ai)){ag=ai}}if(j(ah)!="[object Object]"||ah._type!="jsDate"){ah=new aa(ah);ah.locale=ag}if(!ae){ae=ah.formatString||aa.regional[ag]["formatString"]}var ab=ae||"%Y-%m-%d",aj="",af;while(ab.length>0){if(af=ab.match(aa.formats[ac].codes.matcher)){aj+=ab.slice(0,af.index);aj+=(af[1]||"")+D(ah,af[2],ac);ab=ab.slice(af.index+af[0].length)}else{aj+=ab;ab=""}}return aj};aa.formats={ISO:"%Y-%m-%dT%H:%M:%S.%N%G",SQL:"%Y-%m-%d %H:%M:%S"};aa.formats.perl={codes:{matcher:/()%(#?(%|[a-z]))/i,Y:"FullYear",y:"ShortYear.2",m:"MonthNumber.2","#m":"MonthNumber",B:"MonthName",b:"AbbrMonthName",d:"Date.2","#d":"Date",e:"Date",A:"DayName",a:"AbbrDayName",w:"Day",H:"Hours.2","#H":"Hours",I:"Hours12.2","#I":"Hours12",p:"AMPM",M:"Minutes.2","#M":"Minutes",S:"Seconds.2","#S":"Seconds",s:"Unix",N:"Milliseconds.3","#N":"Milliseconds",O:"TimezoneOffset",Z:"TimezoneName",G:"GmtOffset"},shortcuts:{F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",D:"%m/%d/%y","#c":"%a %b %e %H:%M:%S %Y",v:"%e-%b-%Y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"}};aa.formats.php={codes:{matcher:/()%((%|[a-z]))/i,a:"AbbrDayName",A:"DayName",d:"Date.2",e:"Date",j:"DayOfYear.3",u:"DayOfWeek",w:"Day",U:"FullWeekOfYear.2",V:"IsoWeek.2",W:"WeekOfYear.2",b:"AbbrMonthName",B:"MonthName",m:"MonthNumber.2",h:"AbbrMonthName",C:"Century.2",y:"ShortYear.2",Y:"FullYear",H:"Hours.2",I:"Hours12.2",l:"Hours12",p:"AMPM",P:"AmPm",M:"Minutes.2",S:"Seconds.2",s:"Unix",O:"TimezoneOffset",z:"GmtOffset",Z:"TimezoneAbbr"},shortcuts:{D:"%m/%d/%y",F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"}};aa.createDate=function(ad){if(ad==null){return new Date()}if(ad instanceof Date){return ad}if(typeof ad=="number"){return new Date(ad)}var ai=String(ad).replace(/^\s*(.+)\s*$/g,"$1");ai=ai.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/,"$1/$2/$3");ai=ai.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i,"$1 $2 $3");var ah=ai.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);if(ah&&ah.length>3){var am=parseFloat(ah[3]);var ag=aa.config.defaultCentury+am;ag=String(ag);ai=ai.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i,ah[1]+" "+ah[2]+" "+ag)}ah=ai.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);function al(aq,ap){var aw=parseFloat(ap[1]);var av=parseFloat(ap[2]);var au=parseFloat(ap[3]);var at=aa.config.defaultCentury;var ao,an,ax,ar;if(aw>31){an=au;ax=av;ao=at+aw}else{an=av;ax=aw;ao=at+au}ar=ax+"/"+an+"/"+ao;return aq.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/,ar)}if(ah&&ah.length>3){ai=al(ai,ah)}var ah=ai.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);if(ah&&ah.length>3){ai=al(ai,ah)}var af=0;var ac=aa.matchers.length;var ak,ab,aj=ai,ae;while(af<ac){ab=Date.parse(aj);if(!isNaN(ab)){return new Date(ab)}ak=aa.matchers[af];if(typeof ak=="function"){ae=ak.call(aa,aj);if(ae instanceof Date){return ae}}else{aj=ai.replace(ak[0],ak[1])}af++}return NaN};aa.daysInMonth=function(ab,ac){if(ac==2){return new Date(ab,1,29).getDate()==29?29:28}return[r,31,r,31,30,31,30,31,31,30,31,30,31][ac]};aa.matchers=[[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,"$2/$1/$3"],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,"$2/$3/$1"],function(ae){var ac=ae.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);if(ac){if(ac[1]){var ad=this.createDate(ac[1]);if(isNaN(ad)){return}}else{var ad=new Date();ad.setMilliseconds(0)}var ab=parseFloat(ac[2]);if(ac[6]){ab=ac[6].toLowerCase()=="am"?(ab==12?0:ab):(ab==12?12:ab+12)}ad.setHours(ab,parseInt(ac[3]||0,10),parseInt(ac[4]||0,10),((parseFloat(ac[5]||0))||0)*1000);return ad}else{return ae}},function(ae){var ac=ae.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);if(ac){if(ac[1]){var ad=this.createDate(ac[1]);if(isNaN(ad)){return}}else{var ad=new Date();ad.setMilliseconds(0)}var ab=parseFloat(ac[2]);ad.setHours(ab,parseInt(ac[3],10),parseInt(ac[4],10),parseFloat(ac[5])*1000);return ad}else{return ae}},function(af){var ad=af.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);if(ad){var ae=new Date();var ag=aa.config.defaultCentury;var ai=parseFloat(ad[1]);var ah=parseFloat(ad[3]);var ac,ab,aj;if(ai>31){ab=ah;ac=ag+ai}else{ab=ai;ac=ag+ah}var aj=W(ad[2],aa.regional[aa.regional.getLocale()]["monthNamesShort"]);if(aj==-1){aj=W(ad[2],aa.regional[aa.regional.getLocale()]["monthNames"])}ae.setFullYear(ac,aj,ab);ae.setHours(0,0,0,0);return ae}else{return af}}];function W(ad,ae){if(ae.indexOf){return ae.indexOf(ad)}for(var ab=0,ac=ae.length;ab<ac;ab++){if(ae[ab]===ad){return ab}}return -1}function j(ab){if(ab===null){return"[object Null]"}return Object.prototype.toString.call(ab)}H.jsDate=aa;H.jqplot.sprintf=function(){function ah(an,aj,ak,am){var al=(an.length>=aj)?"":Array(1+aj-an.length>>>0).join(ak);return am?an+al:al+an}function ae(al){var ak=new String(al);for(var aj=10;aj>0;aj--){if(ak==(ak=ak.replace(/^(\d+)(\d{3})/,"$1"+H.jqplot.sprintf.thousandsSeparator+"$2"))){break}}return ak}function ad(ao,an,aq,al,am,ak){var ap=al-ao.length;if(ap>0){var aj=" ";if(ak){aj="&nbsp;"}if(aq||!am){ao=ah(ao,al,aj,aq)}else{ao=ao.slice(0,an.length)+ah("",ap,"0",true)+ao.slice(an.length)}}return ao}function ai(ar,ak,ap,al,aj,ao,aq,an){var am=ar>>>0;ap=ap&&am&&{"2":"0b","8":"0","16":"0x"}[ak]||"";ar=ap+ah(am.toString(ak),ao||0,"0",false);return ad(ar,ap,al,aj,aq,an)}function ab(an,ao,al,aj,am,ak){if(aj!=null){an=an.slice(0,aj)}return ad(an,"",ao,al,am,ak)}var ac=arguments,af=0,ag=ac[af++];return ag.replace(H.jqplot.sprintf.regex,function(aF,aq,ar,av,aH,aC,ao){if(aF=="%%"){return"%"}var aw=false,at="",au=false,aE=false,ap=false,an=false;for(var aB=0;ar&&aB<ar.length;aB++){switch(ar.charAt(aB)){case" ":at=" ";break;case"+":at="+";break;case"-":aw=true;break;case"0":au=true;break;case"#":aE=true;break;case"&":ap=true;break;case"'":an=true;break}}if(!av){av=0}else{if(av=="*"){av=+ac[af++]}else{if(av.charAt(0)=="*"){av=+ac[av.slice(1,-1)]}else{av=+av}}}if(av<0){av=-av;aw=true}if(!isFinite(av)){throw new Error("$.jqplot.sprintf: (minimum-)width must be finite")}if(!aC){aC="fFeE".indexOf(ao)>-1?6:(ao=="d")?0:void (0)}else{if(aC=="*"){aC=+ac[af++]}else{if(aC.charAt(0)=="*"){aC=+ac[aC.slice(1,-1)]}else{aC=+aC}}}var ay=aq?ac[aq.slice(0,-1)]:ac[af++];switch(ao){case"s":if(ay==null){return""}return ab(String(ay),aw,av,aC,au,ap);case"c":return ab(String.fromCharCode(+ay),aw,av,aC,au,ap);case"b":return ai(ay,2,aE,aw,av,aC,au,ap);case"o":return ai(ay,8,aE,aw,av,aC,au,ap);case"x":return ai(ay,16,aE,aw,av,aC,au,ap);case"X":return ai(ay,16,aE,aw,av,aC,au,ap).toUpperCase();case"u":return ai(ay,10,aE,aw,av,aC,au,ap);case"i":var al=parseInt(+ay,10);if(isNaN(al)){return""}var aA=al<0?"-":at;var aD=an?ae(String(Math.abs(al))):String(Math.abs(al));ay=aA+ah(aD,aC,"0",false);return ad(ay,aA,aw,av,au,ap);case"d":var al=Math.round(+ay);if(isNaN(al)){return""}var aA=al<0?"-":at;var aD=an?ae(String(Math.abs(al))):String(Math.abs(al));ay=aA+ah(aD,aC,"0",false);return ad(ay,aA,aw,av,au,ap);case"e":case"E":case"f":case"F":case"g":case"G":var al=+ay;if(isNaN(al)){return""}var aA=al<0?"-":at;var am=["toExponential","toFixed","toPrecision"]["efg".indexOf(ao.toLowerCase())];var aG=["toString","toUpperCase"]["eEfFgG".indexOf(ao)%2];var aD=Math.abs(al)[am](aC);aD=an?ae(aD):aD;ay=aA+aD;return ad(ay,aA,aw,av,au,ap)[aG]();case"p":case"P":var al=+ay;if(isNaN(al)){return""}var aA=al<0?"-":at;var ax=String(Number(Math.abs(al)).toExponential()).split(/e|E/);var ak=(ax[0].indexOf(".")!=-1)?ax[0].length-1:ax[0].length;var az=(ax[1]<0)?-ax[1]-1:0;if(Math.abs(al)<1){if(ak+az<=aC){ay=aA+Math.abs(al).toPrecision(ak)}else{if(ak<=aC-1){ay=aA+Math.abs(al).toExponential(ak-1)}else{ay=aA+Math.abs(al).toExponential(aC-1)}}}else{var aj=(ak<=aC)?ak:aC;ay=aA+Math.abs(al).toPrecision(aj)}var aG=["toString","toUpperCase"]["pP".indexOf(ao)%2];return ad(ay,aA,aw,av,au,ap)[aG]();case"n":return"";default:return aF}})};H.jqplot.sprintf.thousandsSeparator=",";H.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g;H.jqplot.getSignificantFigures=function(af){var ah=String(Number(Math.abs(af)).toExponential()).split(/e|E/);var ag=(ah[0].indexOf(".")!=-1)?ah[0].length-1:ah[0].length;var ac=(ah[1]<0)?-ah[1]-1:0;var ab=parseInt(ah[1],10);var ad=(ab+1>0)?ab+1:0;var ae=(ag<=ad)?0:ag-ab-1;return{significantDigits:ag,digitsLeft:ad,digitsRight:ae,zeros:ac,exponent:ab}};H.jqplot.getPrecision=function(ab){return H.jqplot.getSignificantFigures(ab).digitsRight}})(jQuery);var backCompat=$.uiBackCompat!==false;$.jqplot.effects={effect:{}};var dataSpace="jqplot.storage.";$.extend($.jqplot.effects,{version:"1.9pre",save:function(b,c){for(var a=0;a<c.length;a++){if(c[a]!==null){b.data(dataSpace+c[a],b[0].style[c[a]])}}},restore:function(b,c){for(var a=0;a<c.length;a++){if(c[a]!==null){b.css(c[a],b.data(dataSpace+c[a]))}}},setMode:function(a,b){if(b==="toggle"){b=a.is(":hidden")?"show":"hide"}return b},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper")){return b.parent()}var c={width:b.outerWidth(true),height:b.outerHeight(true),"float":b.css("float")},e=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),a={width:b.width(),height:b.height()},d=document.activeElement;b.wrap(e);if(b[0]===d||$.contains(b[0],d)){$(d).focus()}e=b.parent();if(b.css("position")==="static"){e.css({position:"relative"});b.css({position:"relative"})}else{$.extend(c,{position:b.css("position"),zIndex:b.css("z-index")});$.each(["top","left","bottom","right"],function(f,g){c[g]=b.css(g);if(isNaN(parseInt(c[g],10))){c[g]="auto"}});b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}b.css(a);return e.css(c).show()},removeWrapper:function(a){var b=document.activeElement;if(a.parent().is(".ui-effects-wrapper")){a.parent().replaceWith(a);if(a[0]===b||$.contains(a[0],b)){$(b).focus()}}return a}});function _normalizeArguments(b,a,c,d){if($.isPlainObject(b)){return b}b={effect:b};if(a===undefined){a={}}if($.isFunction(a)){d=a;c=null;a={}}if($.type(a)==="number"||$.fx.speeds[a]){d=c;c=a;a={}}if($.isFunction(c)){d=c;c=null}if(a){$.extend(b,a)}c=c||a.duration;b.duration=$.fx.off?0:typeof c==="number"?c:c in $.fx.speeds?$.fx.speeds[c]:$.fx.speeds._default;b.complete=d||a.complete;return b}function standardSpeed(a){if(!a||typeof a==="number"||$.fx.speeds[a]){return true}if(typeof a==="string"&&!$.jqplot.effects.effect[a]){if(backCompat&&$.jqplot.effects[a]){return false}return true}return false}$.fn.extend({jqplotEffect:function(i,j,b,h){var g=_normalizeArguments.apply(this,arguments),d=g.mode,e=g.queue,f=$.jqplot.effects.effect[g.effect],a=!f&&backCompat&&$.jqplot.effects[g.effect];if($.fx.off||!(f||a)){if(d){return this[d](g.duration,g.complete)}else{return this.each(function(){if(g.complete){g.complete.call(this)}})}}function c(m){var n=$(this),l=g.complete,o=g.mode;function k(){if($.isFunction(l)){l.call(n[0])}if($.isFunction(m)){m()}}if(n.is(":hidden")?o==="hide":o==="show"){k()}else{f.call(n[0],g,k)}}if(f){return e===false?this.each(c):this.queue(e||"fx",c)}else{return a.call(this,{options:g,duration:g.duration,callback:g.complete,mode:g.mode})}}});var rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/;$.jqplot.effects.effect.blind=function(c,h){var d=$(this),k=["position","top","bottom","left","right","height","width"],i=$.jqplot.effects.setMode(d,c.mode||"hide"),m=c.direction||"up",f=rvertical.test(m),e=f?"height":"width",j=f?"top":"left",p=rpositivemotion.test(m),g={},n=i==="show",b,a,l;if(d.parent().is(".ui-effects-wrapper")){$.jqplot.effects.save(d.parent(),k)}else{$.jqplot.effects.save(d,k)}d.show();l=parseInt(d.css("top"),10);b=$.jqplot.effects.createWrapper(d).css({overflow:"hidden"});a=f?b[e]()+l:b[e]();g[e]=n?String(a):"0";if(!p){d.css(f?"bottom":"right",0).css(f?"top":"left","").css({position:"absolute"});g[j]=n?"0":String(a)}if(n){b.css(e,0);if(!p){b.css(j,a)}}b.animate(g,{duration:c.duration,easing:c.easing,queue:false,complete:function(){if(i==="hide"){d.hide()}$.jqplot.effects.restore(d,k);$.jqplot.effects.removeWrapper(d);h()}})};/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(d){d.jqplot.eventListenerHooks.push(["jqplotMouseMove",f]);d.jqplot.Highlighter=function(h){this.show=d.jqplot.config.enablePlugins;this.markerRenderer=new d.jqplot.MarkerRenderer({shadow:false});this.showMarker=true;this.lineWidthAdjust=2.5;this.sizeAdjust=5;this.showTooltip=true;this.tooltipLocation="nw";this.fadeTooltip=true;this.tooltipFadeSpeed="fast";this.tooltipOffset=2;this.tooltipAxes="both";this.tooltipSeparator=", ";this.tooltipContentEditor=null;this.useAxesFormatters=true;this.tooltipFormatString="%.5P";this.formatString=null;this.yvalues=1;this.bringSeriesToFront=false;this._tooltipElem;this.isHighlighting=false;this.currentNeighbor=null;d.extend(true,this,h)};var b=["nw","n","ne","e","se","s","sw","w"];var e={nw:0,n:1,ne:2,e:3,se:4,s:5,sw:6,w:7};var c=["se","s","sw","w","nw","n","ne","e"];d.jqplot.Highlighter.init=function(k,j,i){var h=i||{};this.plugins.highlighter=new d.jqplot.Highlighter(h.highlighter)};d.jqplot.Highlighter.parseOptions=function(i,h){this.showHighlight=true};d.jqplot.Highlighter.postPlotDraw=function(){if(this.plugins.highlighter&&this.plugins.highlighter.highlightCanvas){this.plugins.highlighter.highlightCanvas.resetCanvas();this.plugins.highlighter.highlightCanvas=null}if(this.plugins.highlighter&&this.plugins.highlighter._tooltipElem){this.plugins.highlighter._tooltipElem.emptyForce();this.plugins.highlighter._tooltipElem=null}this.plugins.highlighter.highlightCanvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.highlighter.highlightCanvas.createElement(this._gridPadding,"jqplot-highlight-canvas",this._plotDimensions,this));this.plugins.highlighter.highlightCanvas.setContext();var h=document.createElement("div");this.plugins.highlighter._tooltipElem=d(h);h=null;this.plugins.highlighter._tooltipElem.addClass("jqplot-highlighter-tooltip");this.plugins.highlighter._tooltipElem.css({position:"absolute",display:"none"});this.eventCanvas._elem.before(this.plugins.highlighter._tooltipElem)};d.jqplot.preInitHooks.push(d.jqplot.Highlighter.init);d.jqplot.preParseSeriesOptionsHooks.push(d.jqplot.Highlighter.parseOptions);d.jqplot.postDrawHooks.push(d.jqplot.Highlighter.postPlotDraw);function a(m,o){var j=m.plugins.highlighter;var p=m.series[o.seriesIndex];var h=p.markerRenderer;var i=j.markerRenderer;i.style=h.style;i.lineWidth=h.lineWidth+j.lineWidthAdjust;i.size=h.size+j.sizeAdjust;var l=d.jqplot.getColorComponents(h.color);var n=[l[0],l[1],l[2]];var k=(l[3]>=0.6)?l[3]*0.6:l[3]*(2-l[3]);i.color="rgba("+n[0]+","+n[1]+","+n[2]+","+k+")";i.init();i.draw(p.gridData[o.pointIndex][0],p.gridData[o.pointIndex][1],j.highlightCanvas._ctx)}function g(A,q,m){var k=A.plugins.highlighter;var D=k._tooltipElem;var r=q.highlighter||{};var t=d.extend(true,{},k,r);if(t.useAxesFormatters){var w=q._xaxis._ticks[0].formatter;var h=q._yaxis._ticks[0].formatter;var E=q._xaxis._ticks[0].formatString;var s=q._yaxis._ticks[0].formatString;var z;var u=w(E,m.data[0]);var l=[];for(var B=1;B<t.yvalues+1;B++){l.push(h(s,m.data[B]))}if(typeof t.formatString==="string"){switch(t.tooltipAxes){case"both":case"xy":l.unshift(u);l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;case"yx":l.push(u);l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;case"x":z=d.jqplot.sprintf.apply(d.jqplot.sprintf,[t.formatString,u]);break;case"y":l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;default:l.unshift(u);l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break}}else{switch(t.tooltipAxes){case"both":case"xy":z=u;for(var B=0;B<l.length;B++){z+=t.tooltipSeparator+l[B]}break;case"yx":z="";for(var B=0;B<l.length;B++){z+=l[B]+t.tooltipSeparator}z+=u;break;case"x":z=u;break;case"y":z=l.join(t.tooltipSeparator);break;default:z=u;for(var B=0;B<l.length;B++){z+=t.tooltipSeparator+l[B]}break}}}else{var z;if(typeof t.formatString==="string"){z=d.jqplot.sprintf.apply(d.jqplot.sprintf,[t.formatString].concat(m.data))}else{if(t.tooltipAxes=="both"||t.tooltipAxes=="xy"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[0])+t.tooltipSeparator+d.jqplot.sprintf(t.tooltipFormatString,m.data[1])}else{if(t.tooltipAxes=="yx"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[1])+t.tooltipSeparator+d.jqplot.sprintf(t.tooltipFormatString,m.data[0])}else{if(t.tooltipAxes=="x"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[0])}else{if(t.tooltipAxes=="y"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[1])}}}}}}if(d.isFunction(t.tooltipContentEditor)){z=t.tooltipContentEditor(z,m.seriesIndex,m.pointIndex,A)}D.html(z);var C={x:m.gridData[0],y:m.gridData[1]};var v=0;var j=0.707;if(q.markerRenderer.show==true){v=(q.markerRenderer.size+t.sizeAdjust)/2}var o=b;if(q.fillToZero&&q.fill&&m.data[1]<0){o=c}switch(o[e[t.tooltipLocation]]){case"nw":var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-j*v;var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-j*v;break;case"n":var p=C.x+A._gridPadding.left-D.outerWidth(true)/2;var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-v;break;case"ne":var p=C.x+A._gridPadding.left+t.tooltipOffset+j*v;var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-j*v;break;case"e":var p=C.x+A._gridPadding.left+t.tooltipOffset+v;var n=C.y+A._gridPadding.top-D.outerHeight(true)/2;break;case"se":var p=C.x+A._gridPadding.left+t.tooltipOffset+j*v;var n=C.y+A._gridPadding.top+t.tooltipOffset+j*v;break;case"s":var p=C.x+A._gridPadding.left-D.outerWidth(true)/2;var n=C.y+A._gridPadding.top+t.tooltipOffset+v;break;case"sw":var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-j*v;var n=C.y+A._gridPadding.top+t.tooltipOffset+j*v;break;case"w":var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-v;var n=C.y+A._gridPadding.top-D.outerHeight(true)/2;break;default:var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-j*v;var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-j*v;break}D.css("left",p);D.css("top",n);if(t.fadeTooltip){D.stop(true,true).fadeIn(t.tooltipFadeSpeed)}else{D.show()}D=null}function f(k,j,n,m,l){var h=l.plugins.highlighter;var o=l.plugins.cursor;if(h.show){if(m==null&&h.isHighlighting){var i=h.highlightCanvas._ctx;i.clearRect(0,0,i.canvas.width,i.canvas.height);if(h.fadeTooltip){h._tooltipElem.fadeOut(h.tooltipFadeSpeed)}else{h._tooltipElem.hide()}if(h.bringSeriesToFront){l.restorePreviousSeriesOrder()}h.isHighlighting=false;h.currentNeighbor=null;i=null}else{if(m!=null&&l.series[m.seriesIndex].showHighlight&&!h.isHighlighting){h.isHighlighting=true;h.currentNeighbor=m;if(h.showMarker){a(l,m)}if(h.showTooltip&&(!o||!o._zoom.started)){g(l,l.series[m.seriesIndex],m)}if(h.bringSeriesToFront){l.moveSeriesToFront(m.seriesIndex)}}else{if(m!=null&&h.isHighlighting&&h.currentNeighbor!=m){if(l.series[m.seriesIndex].showHighlight){var i=h.highlightCanvas._ctx;i.clearRect(0,0,i.canvas.width,i.canvas.height);h.isHighlighting=true;h.currentNeighbor=m;if(h.showMarker){a(l,m)}if(h.showTooltip&&(!o||!o._zoom.started)){g(l,l.series[m.seriesIndex],m)}if(h.bringSeriesToFront){l.moveSeriesToFront(m.seriesIndex)}}}}}}}})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(c){c.jqplot.PointLabels=function(e){this.show=c.jqplot.config.enablePlugins;this.location="n";this.labelsFromSeries=false;this.seriesLabelIndex=null;this.labels=[];this._labels=[];this.stackedValue=false;this.ypadding=6;this.xpadding=6;this.escapeHTML=true;this.edgeTolerance=-5;this.formatter=c.jqplot.DefaultTickFormatter;this.formatString="";this.hideZeros=false;this._elems=[];c.extend(true,this,e)};var a=["nw","n","ne","e","se","s","sw","w"];var d={nw:0,n:1,ne:2,e:3,se:4,s:5,sw:6,w:7};var b=["se","s","sw","w","nw","n","ne","e"];c.jqplot.PointLabels.init=function(j,h,f,g,i){var e=c.extend(true,{},f,g);e.pointLabels=e.pointLabels||{};if(this.renderer.constructor===c.jqplot.BarRenderer&&this.barDirection==="horizontal"&&!e.pointLabels.location){e.pointLabels.location="e"}this.plugins.pointLabels=new c.jqplot.PointLabels(e.pointLabels);this.plugins.pointLabels.setLabels.call(this)};c.jqplot.PointLabels.prototype.setLabels=function(){var f=this.plugins.pointLabels;var h;if(f.seriesLabelIndex!=null){h=f.seriesLabelIndex}else{if(this.renderer.constructor===c.jqplot.BarRenderer&&this.barDirection==="horizontal"){h=0}else{h=(this._plotData.length===0)?0:this._plotData[0].length-1}}f._labels=[];if(f.labels.length===0||f.labelsFromSeries){if(f.stackedValue){if(this._plotData.length&&this._plotData[0].length){for(var e=0;e<this._plotData.length;e++){f._labels.push(this._plotData[e][h])}}}else{var g=this._plotData;if(this.renderer.constructor===c.jqplot.BarRenderer&&this.waterfall){g=this._data}if(g.length&&g[0].length){for(var e=0;e<g.length;e++){f._labels.push(g[e][h])}}g=null}}else{if(f.labels.length){f._labels=f.labels}}};c.jqplot.PointLabels.prototype.xOffset=function(f,e,g){e=e||this.location;g=g||this.xpadding;var h;switch(e){case"nw":h=-f.outerWidth(true)-this.xpadding;break;case"n":h=-f.outerWidth(true)/2;break;case"ne":h=this.xpadding;break;case"e":h=this.xpadding;break;case"se":h=this.xpadding;break;case"s":h=-f.outerWidth(true)/2;break;case"sw":h=-f.outerWidth(true)-this.xpadding;break;case"w":h=-f.outerWidth(true)-this.xpadding;break;default:h=-f.outerWidth(true)-this.xpadding;break}return h};c.jqplot.PointLabels.prototype.yOffset=function(f,e,g){e=e||this.location;g=g||this.xpadding;var h;switch(e){case"nw":h=-f.outerHeight(true)-this.ypadding;break;case"n":h=-f.outerHeight(true)-this.ypadding;break;case"ne":h=-f.outerHeight(true)-this.ypadding;break;case"e":h=-f.outerHeight(true)/2;break;case"se":h=this.ypadding;break;case"s":h=this.ypadding;break;case"sw":h=this.ypadding;break;case"w":h=-f.outerHeight(true)/2;break;default:h=-f.outerHeight(true)-this.ypadding;break}return h};c.jqplot.PointLabels.draw=function(x,j,v){var t=this.plugins.pointLabels;t.setLabels.call(this);for(var w=0;w<t._elems.length;w++){t._elems[w].emptyForce()}t._elems.splice(0,t._elems.length);if(t.show){var r="_"+this._stackAxis+"axis";if(!t.formatString){t.formatString=this[r]._ticks[0].formatString;t.formatter=this[r]._ticks[0].formatter}var D=this._plotData;var A=this._xaxis;var q=this._yaxis;var z,f;for(var w=0,u=t._labels.length;w<u;w++){var o=t._labels[w];if(t.hideZeros&&parseInt(t._labels[w],10)==0){o=""}if(o!=null){o=t.formatter(t.formatString,o)}f=document.createElement("div");t._elems[w]=c(f);z=t._elems[w];z.addClass("jqplot-point-label jqplot-series-"+this.index+" jqplot-point-"+w);z.css("position","absolute");z.insertAfter(x.canvas);if(t.escapeHTML){z.text(o)}else{z.html(o)}var g=t.location;if((this.fillToZero&&D[w][1]<0)||(this.fillToZero&&this._type==="bar"&&this.barDirection==="horizontal"&&D[w][0]<0)||(this.waterfall&&parseInt(o,10))<0){g=b[d[g]]}var n=A.u2p(D[w][0])+t.xOffset(z,g);var h=q.u2p(D[w][1])+t.yOffset(z,g);if(this.renderer.constructor==c.jqplot.BarRenderer){if(this.barDirection=="vertical"){n+=this._barNudge}else{h-=this._barNudge}}z.css("left",n);z.css("top",h);var k=n+z.width();var s=h+z.height();var C=t.edgeTolerance;var e=c(x.canvas).position().left;var y=c(x.canvas).position().top;var B=x.canvas.width+e;var m=x.canvas.height+y;if(n-C<e||h-C<y||k+C>B||s+C>m){z.remove()}z=null;f=null}}};c.jqplot.postSeriesInitHooks.push(c.jqplot.PointLabels.init);c.jqplot.postDrawSeriesHooks.push(c.jqplot.PointLabels.draw)})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(a){a.jqplot.CanvasAxisLabelRenderer=function(b){this.angle=0;this.axis;this.show=true;this.showLabel=true;this.label="";this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif';this.fontSize="11pt";this.fontWeight="normal";this.fontStretch=1;this.textColor="#666666";this.enableFontSupport=true;this.pt2px=null;this._elem;this._ctx;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};a.extend(true,this,b);if(b.angle==null&&this.axis!="xaxis"&&this.axis!="x2axis"){this.angle=-90}var c={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};if(this.pt2px){c.pt2px=this.pt2px}if(this.enableFontSupport){if(a.jqplot.support_canvas_text()){this._textRenderer=new a.jqplot.CanvasFontRenderer(c)}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}};a.jqplot.CanvasAxisLabelRenderer.prototype.init=function(b){a.extend(true,this,b);this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})};a.jqplot.CanvasAxisLabelRenderer.prototype.getWidth=function(d){if(this._elem){return this._elem.outerWidth(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.sin(f.angle)*e)+Math.abs(Math.cos(f.angle)*c);return b}};a.jqplot.CanvasAxisLabelRenderer.prototype.getHeight=function(d){if(this._elem){return this._elem.outerHeight(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.cos(f.angle)*e)+Math.abs(Math.sin(f.angle)*c);return b}};a.jqplot.CanvasAxisLabelRenderer.prototype.getAngleRad=function(){var b=this.angle*Math.PI/180;return b};a.jqplot.CanvasAxisLabelRenderer.prototype.draw=function(c,f){if(this._elem){if(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))}this._elem.emptyForce();this._elem=null}var e=f.canvasManager.getCanvas();this._textRenderer.setText(this.label,c);var b=this.getWidth(c);var d=this.getHeight(c);e.width=b;e.height=d;e.style.width=b;e.style.height=d;e=f.canvasManager.initCanvas(e);this._elem=a(e);this._elem.css({position:"absolute"});this._elem.addClass("jqplot-"+this.axis+"-label");e=null;return this._elem};a.jqplot.CanvasAxisLabelRenderer.prototype.pack=function(){this._textRenderer.draw(this._elem.get(0).getContext("2d"),this.label)}})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(a){a.jqplot.CanvasAxisTickRenderer=function(b){this.mark="outside";this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.angle=0;this.markSize=4;this.show=true;this.showLabel=true;this.labelPosition="auto";this.label="";this.value=null;this._styles={};this.formatter=a.jqplot.DefaultTickFormatter;this.formatString="";this.prefix="";this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif';this.fontSize="10pt";this.fontWeight="normal";this.fontStretch=1;this.textColor="#666666";this.enableFontSupport=true;this.pt2px=null;this._elem;this._ctx;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};a.extend(true,this,b);var c={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};if(this.pt2px){c.pt2px=this.pt2px}if(this.enableFontSupport){if(a.jqplot.support_canvas_text()){this._textRenderer=new a.jqplot.CanvasFontRenderer(c)}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}};a.jqplot.CanvasAxisTickRenderer.prototype.init=function(b){a.extend(true,this,b);this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})};a.jqplot.CanvasAxisTickRenderer.prototype.getWidth=function(d){if(this._elem){return this._elem.outerWidth(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.sin(f.angle)*e)+Math.abs(Math.cos(f.angle)*c);return b}};a.jqplot.CanvasAxisTickRenderer.prototype.getHeight=function(d){if(this._elem){return this._elem.outerHeight(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.cos(f.angle)*e)+Math.abs(Math.sin(f.angle)*c);return b}};a.jqplot.CanvasAxisTickRenderer.prototype.getAngleRad=function(){var b=this.angle*Math.PI/180;return b};a.jqplot.CanvasAxisTickRenderer.prototype.setTick=function(b,d,c){this.value=b;if(c){this.isMinorTick=true}return this};a.jqplot.CanvasAxisTickRenderer.prototype.draw=function(c,f){if(!this.label){this.label=this.prefix+this.formatter(this.formatString,this.value)}if(this._elem){if(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))}this._elem.emptyForce();this._elem=null}var e=f.canvasManager.getCanvas();this._textRenderer.setText(this.label,c);var b=this.getWidth(c);var d=this.getHeight(c);e.width=b;e.height=d;e.style.width=b;e.style.height=d;e.style.textAlign="left";e.style.position="absolute";e=f.canvasManager.initCanvas(e);this._elem=a(e);this._elem.css(this._styles);this._elem.addClass("jqplot-"+this.axis+"-tick");e=null;return this._elem};a.jqplot.CanvasAxisTickRenderer.prototype.pack=function(){this._textRenderer.draw(this._elem.get(0).getContext("2d"),this.label)}})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(a){a.jqplot.CanvasTextRenderer=function(b){this.fontStyle="normal";this.fontVariant="normal";this.fontWeight="normal";this.fontSize="10px";this.fontFamily="sans-serif";this.fontStretch=1;this.fillStyle="#666666";this.angle=0;this.textAlign="start";this.textBaseline="alphabetic";this.text;this.width;this.height;this.pt2px=1.28;a.extend(true,this,b);this.normalizedFontSize=this.normalizeFontSize(this.fontSize);this.setHeight()};a.jqplot.CanvasTextRenderer.prototype.init=function(b){a.extend(true,this,b);this.normalizedFontSize=this.normalizeFontSize(this.fontSize);this.setHeight()};a.jqplot.CanvasTextRenderer.prototype.normalizeFontSize=function(b){b=String(b);var c=parseFloat(b);if(b.indexOf("px")>-1){return c/this.pt2px}else{if(b.indexOf("pt")>-1){return c}else{if(b.indexOf("em")>-1){return c*12}else{if(b.indexOf("%")>-1){return c*12/100}else{return c/this.pt2px}}}}};a.jqplot.CanvasTextRenderer.prototype.fontWeight2Float=function(b){if(Number(b)){return b/400}else{switch(b){case"normal":return 1;break;case"bold":return 1.75;break;case"bolder":return 2.25;break;case"lighter":return 0.75;break;default:return 1;break}}};a.jqplot.CanvasTextRenderer.prototype.getText=function(){return this.text};a.jqplot.CanvasTextRenderer.prototype.setText=function(c,b){this.text=c;this.setWidth(b);return this};a.jqplot.CanvasTextRenderer.prototype.getWidth=function(b){return this.width};a.jqplot.CanvasTextRenderer.prototype.setWidth=function(c,b){if(!b){this.width=this.measure(c,this.text)}else{this.width=b}return this};a.jqplot.CanvasTextRenderer.prototype.getHeight=function(b){return this.height};a.jqplot.CanvasTextRenderer.prototype.setHeight=function(b){if(!b){this.height=this.normalizedFontSize*this.pt2px}else{this.height=b}return this};a.jqplot.CanvasTextRenderer.prototype.letter=function(b){return this.letters[b]};a.jqplot.CanvasTextRenderer.prototype.ascent=function(){return this.normalizedFontSize};a.jqplot.CanvasTextRenderer.prototype.descent=function(){return 7*this.normalizedFontSize/25};a.jqplot.CanvasTextRenderer.prototype.measure=function(d,g){var f=0;var b=g.length;for(var e=0;e<b;e++){var h=this.letter(g.charAt(e));if(h){f+=h.width*this.normalizedFontSize/25*this.fontStretch}}return f};a.jqplot.CanvasTextRenderer.prototype.draw=function(s,n){var r=0;var o=this.height*0.72;var p=0;var l=n.length;var k=this.normalizedFontSize/25;s.save();var h,f;if((-Math.PI/2<=this.angle&&this.angle<=0)||(Math.PI*3/2<=this.angle&&this.angle<=Math.PI*2)){h=0;f=-Math.sin(this.angle)*this.width}else{if((0<this.angle&&this.angle<=Math.PI/2)||(-Math.PI*2<=this.angle&&this.angle<=-Math.PI*3/2)){h=Math.sin(this.angle)*this.height;f=0}else{if((-Math.PI<this.angle&&this.angle<-Math.PI/2)||(Math.PI<=this.angle&&this.angle<=Math.PI*3/2)){h=-Math.cos(this.angle)*this.width;f=-Math.sin(this.angle)*this.width-Math.cos(this.angle)*this.height}else{if((-Math.PI*3/2<this.angle&&this.angle<Math.PI)||(Math.PI/2<this.angle&&this.angle<Math.PI)){h=Math.sin(this.angle)*this.height-Math.cos(this.angle)*this.width;f=-Math.cos(this.angle)*this.height}}}}s.strokeStyle=this.fillStyle;s.fillStyle=this.fillStyle;s.translate(h,f);s.rotate(this.angle);s.lineCap="round";var t=(this.normalizedFontSize>30)?2:2+(30-this.normalizedFontSize)/20;s.lineWidth=t*k*this.fontWeight2Float(this.fontWeight);for(var g=0;g<l;g++){var m=this.letter(n.charAt(g));if(!m){continue}s.beginPath();var e=1;var b=0;for(var d=0;d<m.points.length;d++){var q=m.points[d];if(q[0]==-1&&q[1]==-1){e=1;continue}if(e){s.moveTo(r+q[0]*k*this.fontStretch,o-q[1]*k);e=false}else{s.lineTo(r+q[0]*k*this.fontStretch,o-q[1]*k)}}s.stroke();r+=m.width*k*this.fontStretch}s.restore();return p};a.jqplot.CanvasTextRenderer.prototype.letters={" ":{width:16,points:[]},"!":{width:10,points:[[5,21],[5,7],[-1,-1],[5,2],[4,1],[5,0],[6,1],[5,2]]},'"':{width:16,points:[[4,21],[4,14],[-1,-1],[12,21],[12,14]]},"#":{width:21,points:[[11,25],[4,-7],[-1,-1],[17,25],[10,-7],[-1,-1],[4,12],[18,12],[-1,-1],[3,6],[17,6]]},"$":{width:20,points:[[8,25],[8,-4],[-1,-1],[12,25],[12,-4],[-1,-1],[17,18],[15,20],[12,21],[8,21],[5,20],[3,18],[3,16],[4,14],[5,13],[7,12],[13,10],[15,9],[16,8],[17,6],[17,3],[15,1],[12,0],[8,0],[5,1],[3,3]]},"%":{width:24,points:[[21,21],[3,0],[-1,-1],[8,21],[10,19],[10,17],[9,15],[7,14],[5,14],[3,16],[3,18],[4,20],[6,21],[8,21],[10,20],[13,19],[16,19],[19,20],[21,21],[-1,-1],[17,7],[15,6],[14,4],[14,2],[16,0],[18,0],[20,1],[21,3],[21,5],[19,7],[17,7]]},"&":{width:26,points:[[23,12],[23,13],[22,14],[21,14],[20,13],[19,11],[17,6],[15,3],[13,1],[11,0],[7,0],[5,1],[4,2],[3,4],[3,6],[4,8],[5,9],[12,13],[13,14],[14,16],[14,18],[13,20],[11,21],[9,20],[8,18],[8,16],[9,13],[11,10],[16,3],[18,1],[20,0],[22,0],[23,1],[23,2]]},"'":{width:10,points:[[5,19],[4,20],[5,21],[6,20],[6,18],[5,16],[4,15]]},"(":{width:14,points:[[11,25],[9,23],[7,20],[5,16],[4,11],[4,7],[5,2],[7,-2],[9,-5],[11,-7]]},")":{width:14,points:[[3,25],[5,23],[7,20],[9,16],[10,11],[10,7],[9,2],[7,-2],[5,-5],[3,-7]]},"*":{width:16,points:[[8,21],[8,9],[-1,-1],[3,18],[13,12],[-1,-1],[13,18],[3,12]]},"+":{width:26,points:[[13,18],[13,0],[-1,-1],[4,9],[22,9]]},",":{width:10,points:[[6,1],[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},"-":{width:18,points:[[6,9],[12,9]]},".":{width:10,points:[[5,2],[4,1],[5,0],[6,1],[5,2]]},"/":{width:22,points:[[20,25],[2,-7]]},"0":{width:20,points:[[9,21],[6,20],[4,17],[3,12],[3,9],[4,4],[6,1],[9,0],[11,0],[14,1],[16,4],[17,9],[17,12],[16,17],[14,20],[11,21],[9,21]]},"1":{width:20,points:[[6,17],[8,18],[11,21],[11,0]]},"2":{width:20,points:[[4,16],[4,17],[5,19],[6,20],[8,21],[12,21],[14,20],[15,19],[16,17],[16,15],[15,13],[13,10],[3,0],[17,0]]},"3":{width:20,points:[[5,21],[16,21],[10,13],[13,13],[15,12],[16,11],[17,8],[17,6],[16,3],[14,1],[11,0],[8,0],[5,1],[4,2],[3,4]]},"4":{width:20,points:[[13,21],[3,7],[18,7],[-1,-1],[13,21],[13,0]]},"5":{width:20,points:[[15,21],[5,21],[4,12],[5,13],[8,14],[11,14],[14,13],[16,11],[17,8],[17,6],[16,3],[14,1],[11,0],[8,0],[5,1],[4,2],[3,4]]},"6":{width:20,points:[[16,18],[15,20],[12,21],[10,21],[7,20],[5,17],[4,12],[4,7],[5,3],[7,1],[10,0],[11,0],[14,1],[16,3],[17,6],[17,7],[16,10],[14,12],[11,13],[10,13],[7,12],[5,10],[4,7]]},"7":{width:20,points:[[17,21],[7,0],[-1,-1],[3,21],[17,21]]},"8":{width:20,points:[[8,21],[5,20],[4,18],[4,16],[5,14],[7,13],[11,12],[14,11],[16,9],[17,7],[17,4],[16,2],[15,1],[12,0],[8,0],[5,1],[4,2],[3,4],[3,7],[4,9],[6,11],[9,12],[13,13],[15,14],[16,16],[16,18],[15,20],[12,21],[8,21]]},"9":{width:20,points:[[16,14],[15,11],[13,9],[10,8],[9,8],[6,9],[4,11],[3,14],[3,15],[4,18],[6,20],[9,21],[10,21],[13,20],[15,18],[16,14],[16,9],[15,4],[13,1],[10,0],[8,0],[5,1],[4,3]]},":":{width:10,points:[[5,14],[4,13],[5,12],[6,13],[5,14],[-1,-1],[5,2],[4,1],[5,0],[6,1],[5,2]]},";":{width:10,points:[[5,14],[4,13],[5,12],[6,13],[5,14],[-1,-1],[6,1],[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},"<":{width:24,points:[[20,18],[4,9],[20,0]]},"=":{width:26,points:[[4,12],[22,12],[-1,-1],[4,6],[22,6]]},">":{width:24,points:[[4,18],[20,9],[4,0]]},"?":{width:18,points:[[3,16],[3,17],[4,19],[5,20],[7,21],[11,21],[13,20],[14,19],[15,17],[15,15],[14,13],[13,12],[9,10],[9,7],[-1,-1],[9,2],[8,1],[9,0],[10,1],[9,2]]},"@":{width:27,points:[[18,13],[17,15],[15,16],[12,16],[10,15],[9,14],[8,11],[8,8],[9,6],[11,5],[14,5],[16,6],[17,8],[-1,-1],[12,16],[10,14],[9,11],[9,8],[10,6],[11,5],[-1,-1],[18,16],[17,8],[17,6],[19,5],[21,5],[23,7],[24,10],[24,12],[23,15],[22,17],[20,19],[18,20],[15,21],[12,21],[9,20],[7,19],[5,17],[4,15],[3,12],[3,9],[4,6],[5,4],[7,2],[9,1],[12,0],[15,0],[18,1],[20,2],[21,3],[-1,-1],[19,16],[18,8],[18,6],[19,5]]},A:{width:18,points:[[9,21],[1,0],[-1,-1],[9,21],[17,0],[-1,-1],[4,7],[14,7]]},B:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,15],[17,13],[16,12],[13,11],[-1,-1],[4,11],[13,11],[16,10],[17,9],[18,7],[18,4],[17,2],[16,1],[13,0],[4,0]]},C:{width:21,points:[[18,16],[17,18],[15,20],[13,21],[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5]]},D:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[11,21],[14,20],[16,18],[17,16],[18,13],[18,8],[17,5],[16,3],[14,1],[11,0],[4,0]]},E:{width:19,points:[[4,21],[4,0],[-1,-1],[4,21],[17,21],[-1,-1],[4,11],[12,11],[-1,-1],[4,0],[17,0]]},F:{width:18,points:[[4,21],[4,0],[-1,-1],[4,21],[17,21],[-1,-1],[4,11],[12,11]]},G:{width:21,points:[[18,16],[17,18],[15,20],[13,21],[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[18,8],[-1,-1],[13,8],[18,8]]},H:{width:22,points:[[4,21],[4,0],[-1,-1],[18,21],[18,0],[-1,-1],[4,11],[18,11]]},I:{width:8,points:[[4,21],[4,0]]},J:{width:16,points:[[12,21],[12,5],[11,2],[10,1],[8,0],[6,0],[4,1],[3,2],[2,5],[2,7]]},K:{width:21,points:[[4,21],[4,0],[-1,-1],[18,21],[4,7],[-1,-1],[9,12],[18,0]]},L:{width:17,points:[[4,21],[4,0],[-1,-1],[4,0],[16,0]]},M:{width:24,points:[[4,21],[4,0],[-1,-1],[4,21],[12,0],[-1,-1],[20,21],[12,0],[-1,-1],[20,21],[20,0]]},N:{width:22,points:[[4,21],[4,0],[-1,-1],[4,21],[18,0],[-1,-1],[18,21],[18,0]]},O:{width:22,points:[[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[19,8],[19,13],[18,16],[17,18],[15,20],[13,21],[9,21]]},P:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,14],[17,12],[16,11],[13,10],[4,10]]},Q:{width:22,points:[[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[19,8],[19,13],[18,16],[17,18],[15,20],[13,21],[9,21],[-1,-1],[12,4],[18,-2]]},R:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,15],[17,13],[16,12],[13,11],[4,11],[-1,-1],[11,11],[18,0]]},S:{width:20,points:[[17,18],[15,20],[12,21],[8,21],[5,20],[3,18],[3,16],[4,14],[5,13],[7,12],[13,10],[15,9],[16,8],[17,6],[17,3],[15,1],[12,0],[8,0],[5,1],[3,3]]},T:{width:16,points:[[8,21],[8,0],[-1,-1],[1,21],[15,21]]},U:{width:22,points:[[4,21],[4,6],[5,3],[7,1],[10,0],[12,0],[15,1],[17,3],[18,6],[18,21]]},V:{width:18,points:[[1,21],[9,0],[-1,-1],[17,21],[9,0]]},W:{width:24,points:[[2,21],[7,0],[-1,-1],[12,21],[7,0],[-1,-1],[12,21],[17,0],[-1,-1],[22,21],[17,0]]},X:{width:20,points:[[3,21],[17,0],[-1,-1],[17,21],[3,0]]},Y:{width:18,points:[[1,21],[9,11],[9,0],[-1,-1],[17,21],[9,11]]},Z:{width:20,points:[[17,21],[3,0],[-1,-1],[3,21],[17,21],[-1,-1],[3,0],[17,0]]},"[":{width:14,points:[[4,25],[4,-7],[-1,-1],[5,25],[5,-7],[-1,-1],[4,25],[11,25],[-1,-1],[4,-7],[11,-7]]},"\\":{width:14,points:[[0,21],[14,-3]]},"]":{width:14,points:[[9,25],[9,-7],[-1,-1],[10,25],[10,-7],[-1,-1],[3,25],[10,25],[-1,-1],[3,-7],[10,-7]]},"^":{width:16,points:[[6,15],[8,18],[10,15],[-1,-1],[3,12],[8,17],[13,12],[-1,-1],[8,17],[8,0]]},_:{width:16,points:[[0,-2],[16,-2]]},"`":{width:10,points:[[6,21],[5,20],[4,18],[4,16],[5,15],[6,16],[5,17]]},a:{width:19,points:[[15,14],[15,0],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},b:{width:19,points:[[4,21],[4,0],[-1,-1],[4,11],[6,13],[8,14],[11,14],[13,13],[15,11],[16,8],[16,6],[15,3],[13,1],[11,0],[8,0],[6,1],[4,3]]},c:{width:18,points:[[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},d:{width:19,points:[[15,21],[15,0],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},e:{width:18,points:[[3,8],[15,8],[15,10],[14,12],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},f:{width:12,points:[[10,21],[8,21],[6,20],[5,17],[5,0],[-1,-1],[2,14],[9,14]]},g:{width:19,points:[[15,14],[15,-2],[14,-5],[13,-6],[11,-7],[8,-7],[6,-6],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},h:{width:19,points:[[4,21],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0]]},i:{width:8,points:[[3,21],[4,20],[5,21],[4,22],[3,21],[-1,-1],[4,14],[4,0]]},j:{width:10,points:[[5,21],[6,20],[7,21],[6,22],[5,21],[-1,-1],[6,14],[6,-3],[5,-6],[3,-7],[1,-7]]},k:{width:17,points:[[4,21],[4,0],[-1,-1],[14,14],[4,4],[-1,-1],[8,8],[15,0]]},l:{width:8,points:[[4,21],[4,0]]},m:{width:30,points:[[4,14],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0],[-1,-1],[15,10],[18,13],[20,14],[23,14],[25,13],[26,10],[26,0]]},n:{width:19,points:[[4,14],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0]]},o:{width:19,points:[[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3],[16,6],[16,8],[15,11],[13,13],[11,14],[8,14]]},p:{width:19,points:[[4,14],[4,-7],[-1,-1],[4,11],[6,13],[8,14],[11,14],[13,13],[15,11],[16,8],[16,6],[15,3],[13,1],[11,0],[8,0],[6,1],[4,3]]},q:{width:19,points:[[15,14],[15,-7],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},r:{width:13,points:[[4,14],[4,0],[-1,-1],[4,8],[5,11],[7,13],[9,14],[12,14]]},s:{width:17,points:[[14,11],[13,13],[10,14],[7,14],[4,13],[3,11],[4,9],[6,8],[11,7],[13,6],[14,4],[14,3],[13,1],[10,0],[7,0],[4,1],[3,3]]},t:{width:12,points:[[5,21],[5,4],[6,1],[8,0],[10,0],[-1,-1],[2,14],[9,14]]},u:{width:19,points:[[4,14],[4,4],[5,1],[7,0],[10,0],[12,1],[15,4],[-1,-1],[15,14],[15,0]]},v:{width:16,points:[[2,14],[8,0],[-1,-1],[14,14],[8,0]]},w:{width:22,points:[[3,14],[7,0],[-1,-1],[11,14],[7,0],[-1,-1],[11,14],[15,0],[-1,-1],[19,14],[15,0]]},x:{width:17,points:[[3,14],[14,0],[-1,-1],[14,14],[3,0]]},y:{width:16,points:[[2,14],[8,0],[-1,-1],[14,14],[8,0],[6,-4],[4,-6],[2,-7],[1,-7]]},z:{width:17,points:[[14,14],[3,0],[-1,-1],[3,14],[14,14],[-1,-1],[3,0],[14,0]]},"{":{width:14,points:[[9,25],[7,24],[6,23],[5,21],[5,19],[6,17],[7,16],[8,14],[8,12],[6,10],[-1,-1],[7,24],[6,22],[6,20],[7,18],[8,17],[9,15],[9,13],[8,11],[4,9],[8,7],[9,5],[9,3],[8,1],[7,0],[6,-2],[6,-4],[7,-6],[-1,-1],[6,8],[8,6],[8,4],[7,2],[6,1],[5,-1],[5,-3],[6,-5],[7,-6],[9,-7]]},"|":{width:8,points:[[4,25],[4,-7]]},"}":{width:14,points:[[5,25],[7,24],[8,23],[9,21],[9,19],[8,17],[7,16],[6,14],[6,12],[8,10],[-1,-1],[7,24],[8,22],[8,20],[7,18],[6,17],[5,15],[5,13],[6,11],[10,9],[6,7],[5,5],[5,3],[6,1],[7,0],[8,-2],[8,-4],[7,-6],[-1,-1],[8,8],[6,6],[6,4],[7,2],[8,1],[9,-1],[9,-3],[8,-5],[7,-6],[5,-7]]},"~":{width:24,points:[[3,6],[3,8],[4,11],[6,12],[8,12],[10,11],[14,8],[16,7],[18,7],[20,8],[21,10],[-1,-1],[3,8],[4,10],[6,11],[8,11],[10,10],[14,7],[16,6],[18,6],[20,7],[21,10],[21,12]]}};a.jqplot.CanvasFontRenderer=function(b){b=b||{};if(!b.pt2px){b.pt2px=1.5}a.jqplot.CanvasTextRenderer.call(this,b)};a.jqplot.CanvasFontRenderer.prototype=new a.jqplot.CanvasTextRenderer({});a.jqplot.CanvasFontRenderer.prototype.constructor=a.jqplot.CanvasFontRenderer;a.jqplot.CanvasFontRenderer.prototype.measure=function(c,e){var d=this.fontSize+" "+this.fontFamily;c.save();c.font=d;var b=c.measureText(e).width;c.restore();return b};a.jqplot.CanvasFontRenderer.prototype.draw=function(e,g){var c=0;var h=this.height*0.72;e.save();var d,b;if((-Math.PI/2<=this.angle&&this.angle<=0)||(Math.PI*3/2<=this.angle&&this.angle<=Math.PI*2)){d=0;b=-Math.sin(this.angle)*this.width}else{if((0<this.angle&&this.angle<=Math.PI/2)||(-Math.PI*2<=this.angle&&this.angle<=-Math.PI*3/2)){d=Math.sin(this.angle)*this.height;b=0}else{if((-Math.PI<this.angle&&this.angle<-Math.PI/2)||(Math.PI<=this.angle&&this.angle<=Math.PI*3/2)){d=-Math.cos(this.angle)*this.width;b=-Math.sin(this.angle)*this.width-Math.cos(this.angle)*this.height}else{if((-Math.PI*3/2<this.angle&&this.angle<Math.PI)||(Math.PI/2<this.angle&&this.angle<Math.PI)){d=Math.sin(this.angle)*this.height-Math.cos(this.angle)*this.width;b=-Math.cos(this.angle)*this.height}}}}e.strokeStyle=this.fillStyle;e.fillStyle=this.fillStyle;var f=this.fontSize+" "+this.fontFamily;e.font=f;e.translate(d,b);e.rotate(this.angle);e.fillText(g,c,h);e.restore()}})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(d){var f=0;d.jqplot.CanvasOverlay=function(o){var l=o||{};this.options={show:d.jqplot.config.enablePlugins,deferDraw:false};this.objects=[];this.objectNames=[];this.canvas=null;this.markerRenderer=new d.jqplot.MarkerRenderer({style:"line"});this.markerRenderer.init();this.highlightObjectIndex=null;if(l.objects){var q=l.objects,p;for(var m=0;m<q.length;m++){p=q[m];for(var r in p){switch(r){case"line":this.addLine(p[r]);break;case"horizontalLine":this.addHorizontalLine(p[r]);break;case"dashedHorizontalLine":this.addDashedHorizontalLine(p[r]);break;case"verticalLine":this.addVerticalLine(p[r]);break;case"dashedVerticalLine":this.addDashedVerticalLine(p[r]);break;default:break}}}}d.extend(true,this.options,l)};d.jqplot.CanvasOverlay.postPlotInit=function(o,n,m){var l=m||{};this.plugins.canvasOverlay=new d.jqplot.CanvasOverlay(l.canvasOverlay)};function h(){this.uid=null;this.type=null;this.gridStart=null;this.gridStop=null;this.tooltipWidthFactor=0;this.options={name:null,show:true,lineWidth:2,lineCap:"round",color:"#666666",shadow:true,shadowAngle:45,shadowOffset:1,shadowDepth:3,shadowAlpha:"0.07",xaxis:"xaxis",yaxis:"yaxis",showTooltip:false,showTooltipPrecision:0.6,tooltipLocation:"nw",fadeTooltip:true,tooltipFadeSpeed:"fast",tooltipOffset:4,tooltipFormatString:"%d, %d"}}function b(l){h.call(this);this.type="line";var m={start:[],stop:[]};d.extend(true,this.options,m,l);if(this.options.showTooltipPrecision<0.01){this.options.showTooltipPrecision=0.01}}b.prototype=new h();b.prototype.constructor=b;function e(l){h.call(this);this.type="horizontalLine";var m={y:null,xmin:null,xmax:null,xOffset:"6px",xminOffset:null,xmaxOffset:null};d.extend(true,this.options,m,l);if(this.options.showTooltipPrecision<0.01){this.options.showTooltipPrecision=0.01}}e.prototype=new h();e.prototype.constructor=e;function i(l){h.call(this);this.type="dashedHorizontalLine";var m={y:null,xmin:null,xmax:null,xOffset:"6px",xminOffset:null,xmaxOffset:null,dashPattern:[8,8]};d.extend(true,this.options,m,l);if(this.options.showTooltipPrecision<0.01){this.options.showTooltipPrecision=0.01}}i.prototype=new h();i.prototype.constructor=i;function c(l){h.call(this);this.type="verticalLine";var m={x:null,ymin:null,ymax:null,yOffset:"6px",yminOffset:null,ymaxOffset:null};d.extend(true,this.options,m,l);if(this.options.showTooltipPrecision<0.01){this.options.showTooltipPrecision=0.01}}c.prototype=new h();c.prototype.constructor=c;function k(l){h.call(this);this.type="dashedVerticalLine";this.start=null;this.stop=null;var m={x:null,ymin:null,ymax:null,yOffset:"6px",yminOffset:null,ymaxOffset:null,dashPattern:[8,8]};d.extend(true,this.options,m,l);if(this.options.showTooltipPrecision<0.01){this.options.showTooltipPrecision=0.01}}k.prototype=new h();k.prototype.constructor=k;d.jqplot.CanvasOverlay.prototype.addLine=function(m){var l=new b(m);l.uid=f++;this.objects.push(l);this.objectNames.push(l.options.name)};d.jqplot.CanvasOverlay.prototype.addHorizontalLine=function(m){var l=new e(m);l.uid=f++;this.objects.push(l);this.objectNames.push(l.options.name)};d.jqplot.CanvasOverlay.prototype.addDashedHorizontalLine=function(m){var l=new i(m);l.uid=f++;this.objects.push(l);this.objectNames.push(l.options.name)};d.jqplot.CanvasOverlay.prototype.addVerticalLine=function(m){var l=new c(m);l.uid=f++;this.objects.push(l);this.objectNames.push(l.options.name)};d.jqplot.CanvasOverlay.prototype.addDashedVerticalLine=function(m){var l=new k(m);l.uid=f++;this.objects.push(l);this.objectNames.push(l.options.name)};d.jqplot.CanvasOverlay.prototype.removeObject=function(l){if(d.type(l)=="number"){this.objects.splice(l,1);this.objectNames.splice(l,1)}else{var m=d.inArray(l,this.objectNames);if(m!=-1){this.objects.splice(m,1);this.objectNames.splice(m,1)}}};d.jqplot.CanvasOverlay.prototype.getObject=function(l){if(d.type(l)=="number"){return this.objects[l]}else{var m=d.inArray(l,this.objectNames);if(m!=-1){return this.objects[m]}}};d.jqplot.CanvasOverlay.prototype.get=d.jqplot.CanvasOverlay.prototype.getObject;d.jqplot.CanvasOverlay.prototype.clear=function(l){this.canvas._ctx.clearRect(0,0,this.canvas.getWidth(),this.canvas.getHeight())};d.jqplot.CanvasOverlay.prototype.draw=function(I){var w,t=this.objects,D=this.markerRenderer,q,E;if(this.options.show){this.canvas._ctx.clearRect(0,0,this.canvas.getWidth(),this.canvas.getHeight());for(var F=0;F<t.length;F++){w=t[F];var z=d.extend(true,{},w.options);if(w.options.show){D.shadow=w.options.shadow;w.tooltipWidthFactor=w.options.lineWidth/w.options.showTooltipPrecision;switch(w.type){case"line":D.style="line";z.closePath=false;q=[I.axes[w.options.xaxis].series_u2p(w.options.start[0]),I.axes[w.options.yaxis].series_u2p(w.options.start[1])];E=[I.axes[w.options.xaxis].series_u2p(w.options.stop[0]),I.axes[w.options.yaxis].series_u2p(w.options.stop[1])];w.gridStart=q;w.gridStop=E;D.draw(q,E,this.canvas._ctx,z);break;case"horizontalLine":if(w.options.y!=null){D.style="line";z.closePath=false;var n=I.axes[w.options.xaxis],Q,J,u=I.axes[w.options.yaxis].series_u2p(w.options.y),G=w.options.xminOffset||w.options.xOffset,r=w.options.xmaxOffset||w.options.xOffset;if(w.options.xmin!=null){Q=n.series_u2p(w.options.xmin)}else{if(G!=null){if(d.type(G)=="number"){Q=n.series_u2p(n.min+G)}else{if(d.type(G)=="string"){Q=n.series_u2p(n.min)+parseFloat(G)}}}}if(w.options.xmax!=null){J=n.series_u2p(w.options.xmax)}else{if(r!=null){if(d.type(r)=="number"){J=n.series_u2p(n.max-r)}else{if(d.type(r)=="string"){J=n.series_u2p(n.max)-parseFloat(r)}}}}if(J!=null&&Q!=null){w.gridStart=[Q,u];w.gridStop=[J,u];D.draw([Q,u],[J,u],this.canvas._ctx,z)}}break;case"dashedHorizontalLine":var m=w.options.dashPattern;var C=0;for(var K=0;K<m.length;K++){C+=m[K]}if(w.options.y!=null){D.style="line";z.closePath=false;var n=I.axes[w.options.xaxis],Q,J,u=I.axes[w.options.yaxis].series_u2p(w.options.y),G=w.options.xminOffset||w.options.xOffset,r=w.options.xmaxOffset||w.options.xOffset;if(w.options.xmin!=null){Q=n.series_u2p(w.options.xmin)}else{if(G!=null){if(d.type(G)=="number"){Q=n.series_u2p(n.min+G)}else{if(d.type(G)=="string"){Q=n.series_u2p(n.min)+parseFloat(G)}}}}if(w.options.xmax!=null){J=n.series_u2p(w.options.xmax)}else{if(r!=null){if(d.type(r)=="number"){J=n.series_u2p(n.max-r)}else{if(d.type(r)=="string"){J=n.series_u2p(n.max)-parseFloat(r)}}}}if(J!=null&&Q!=null){w.gridStart=[Q,u];w.gridStop=[J,u];var p=Math.ceil((J-Q)/C);var O=Q,M;for(var K=0;K<p;K++){for(var H=0;H<m.length;H+=2){M=O+m[H];D.draw([O,u],[M,u],this.canvas._ctx,z);O+=m[H];if(H<m.length-1){O+=m[H+1]}}}}}break;case"verticalLine":if(w.options.x!=null){D.style="line";z.closePath=false;var L=I.axes[w.options.yaxis],l,s,v=I.axes[w.options.xaxis].series_u2p(w.options.x),B=w.options.yminOffset||w.options.yOffset,o=w.options.ymaxOffset||w.options.yOffset;if(w.options.ymin!=null){l=L.series_u2p(w.options.ymin)}else{if(B!=null){if(d.type(B)=="number"){l=L.series_u2p(L.min-B)}else{if(d.type(B)=="string"){l=L.series_u2p(L.min)-parseFloat(B)}}}}if(w.options.ymax!=null){s=L.series_u2p(w.options.ymax)}else{if(o!=null){if(d.type(o)=="number"){s=L.series_u2p(L.max+o)}else{if(d.type(o)=="string"){s=L.series_u2p(L.max)+parseFloat(o)}}}}if(s!=null&&l!=null){w.gridStart=[v,l];w.gridStop=[v,s];D.draw([v,l],[v,s],this.canvas._ctx,z)}}break;case"dashedVerticalLine":var m=w.options.dashPattern;var C=0;for(var K=0;K<m.length;K++){C+=m[K]}if(w.options.x!=null){D.style="line";z.closePath=false;var L=I.axes[w.options.yaxis],l,s,v=I.axes[w.options.xaxis].series_u2p(w.options.x),B=w.options.yminOffset||w.options.yOffset,o=w.options.ymaxOffset||w.options.yOffset;if(w.options.ymin!=null){l=L.series_u2p(w.options.ymin)}else{if(B!=null){if(d.type(B)=="number"){l=L.series_u2p(L.min-B)}else{if(d.type(B)=="string"){l=L.series_u2p(L.min)-parseFloat(B)}}}}if(w.options.ymax!=null){s=L.series_u2p(w.options.ymax)}else{if(o!=null){if(d.type(o)=="number"){s=L.series_u2p(L.max+o)}else{if(d.type(o)=="string"){s=L.series_u2p(L.max)+parseFloat(o)}}}}if(s!=null&&l!=null){w.gridStart=[v,l];w.gridStop=[v,s];var p=Math.ceil((l-s)/C);var A=((p*C)-(l-s))/2;var O=l,M,N,P;for(var K=0;K<p;K++){for(var H=0;H<m.length;H+=2){M=O-m[H];if(M<s){M=s}if(O<s){O=s}D.draw([v,O],[v,M],this.canvas._ctx,z);O-=m[H];if(H<m.length-1){O-=m[H+1]}}}}}break;default:break}}}}};d.jqplot.CanvasOverlay.postPlotDraw=function(){var m=this.plugins.canvasOverlay;if(m&&m.highlightCanvas){m.highlightCanvas.resetCanvas();m.highlightCanvas=null}m.canvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(m.canvas.createElement(this._gridPadding,"jqplot-overlayCanvas-canvas",this._plotDimensions,this));m.canvas.setContext();if(!m.deferDraw){m.draw(this)}var l=document.createElement("div");m._tooltipElem=d(l);l=null;m._tooltipElem.addClass("jqplot-canvasOverlay-tooltip");m._tooltipElem.css({position:"absolute",display:"none"});this.eventCanvas._elem.before(m._tooltipElem);this.eventCanvas._elem.bind("mouseleave",{elem:m._tooltipElem},function(n){n.data.elem.hide()});var m=null};function j(q,o,p,n){var s=q.plugins.canvasOverlay;var m=s._tooltipElem;var l=o.options,t,r;m.html(d.jqplot.sprintf(l.tooltipFormatString,n[0],n[1]));switch(l.tooltipLocation){case"nw":t=p[0]+q._gridPadding.left-m.outerWidth(true)-l.tooltipOffset;r=p[1]+q._gridPadding.top-l.tooltipOffset-m.outerHeight(true);break;case"n":t=p[0]+q._gridPadding.left-m.outerWidth(true)/2;r=p[1]+q._gridPadding.top-l.tooltipOffset-m.outerHeight(true);break;case"ne":t=p[0]+q._gridPadding.left+l.tooltipOffset;r=p[1]+q._gridPadding.top-l.tooltipOffset-m.outerHeight(true);break;case"e":t=p[0]+q._gridPadding.left+l.tooltipOffset;r=p[1]+q._gridPadding.top-m.outerHeight(true)/2;break;case"se":t=p[0]+q._gridPadding.left+l.tooltipOffset;r=p[1]+q._gridPadding.top+l.tooltipOffset;break;case"s":t=p[0]+q._gridPadding.left-m.outerWidth(true)/2;r=p[1]+q._gridPadding.top+l.tooltipOffset;break;case"sw":t=p[0]+q._gridPadding.left-m.outerWidth(true)-l.tooltipOffset;r=p[1]+q._gridPadding.top+l.tooltipOffset;break;case"w":t=p[0]+q._gridPadding.left-m.outerWidth(true)-l.tooltipOffset;r=p[1]+q._gridPadding.top-m.outerHeight(true)/2;break;default:t=p[0]+q._gridPadding.left-m.outerWidth(true)-l.tooltipOffset;r=p[1]+q._gridPadding.top-l.tooltipOffset-m.outerHeight(true);break}m.css("left",t);m.css("top",r);if(l.fadeTooltip){m.stop(true,true).fadeIn(l.tooltipFadeSpeed)}else{m.show()}m=null}function g(y,p,r,o){var n=y[0];var m=y[1];var x=Math.round(r[0]);var w=Math.round(r[1]);var t=Math.round(p[0]);var s=Math.round(p[1]);var q=Math.sqrt(Math.pow(x-t,2)+Math.pow(w-s,2));var z=o*q;var v=Math.abs((t-x)*(m-w)-(s-w)*(n-x));var u=(v<z)?true:false;return u}function a(y,v,q,z,w){var x=w.plugins.canvasOverlay;var u=x.objects;var r=u.length;var t,m=false;var p;for(var s=0;s<r;s++){t=u[s];if(t.options.showTooltip){var o=g([v.x,v.y],t.gridStart,t.gridStop,t.tooltipWidthFactor);q=[w.axes[t.options.xaxis].series_p2u(v.x),w.axes[t.options.yaxis].series_p2u(v.y)];if(o&&x.highlightObjectIndex==null){switch(t.type){case"line":j(w,t,[v.x,v.y],q);break;case"horizontalLine":case"dashedHorizontalLine":j(w,t,[v.x,t.gridStart[1]],[q[0],t.options.y]);break;case"verticalLine":case"dashedVerticalLine":j(w,t,[t.gridStart[0],v.y],[t.options.x,q[1]]);break;default:break}x.highlightObjectIndex=s;m=true;break}else{if(o&&x.highlightObjectIndex!==s){p=x._tooltipElem;if(t.fadeTooltip){p.fadeOut(t.tooltipFadeSpeed)}else{p.hide()}switch(t.type){case"line":j(w,t,[v.x,v.y],q);break;case"horizontalLine":case"dashedHorizontalLine":j(w,t,[v.x,t.gridStart[1]],[q[0],t.options.y]);break;case"verticalLine":case"dashedVerticalLine":j(w,t,[t.gridStart[0],v.y],[t.options.x,q[1]]);break;default:break}x.highlightObjectIndex=s;m=true;break}else{if(o){switch(t.type){case"line":j(w,t,[v.x,v.y],q);break;case"horizontalLine":case"dashedHorizontalLine":j(w,t,[v.x,t.gridStart[1]],[q[0],t.options.y]);break;case"verticalLine":case"dashedVerticalLine":j(w,t,[t.gridStart[0],v.y],[t.options.x,q[1]]);break;default:break}m=true;break}}}}}if(!m&&x.highlightObjectIndex!==null){p=x._tooltipElem;t=x.getObject(x.highlightObjectIndex);if(t.fadeTooltip){p.fadeOut(t.tooltipFadeSpeed)}else{p.hide()}x.highlightObjectIndex=null}}d.jqplot.postInitHooks.push(d.jqplot.CanvasOverlay.postPlotInit);d.jqplot.postDrawHooks.push(d.jqplot.CanvasOverlay.postPlotDraw);d.jqplot.eventListenerHooks.push(["jqplotMouseMove",a])})(jQuery);/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: 1.0.0b2_r1012
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
(function(d){d.jqplot.BarRenderer=function(){d.jqplot.LineRenderer.call(this)};d.jqplot.BarRenderer.prototype=new d.jqplot.LineRenderer();d.jqplot.BarRenderer.prototype.constructor=d.jqplot.BarRenderer;d.jqplot.BarRenderer.prototype.init=function(n,p){this.barPadding=8;this.barMargin=10;this.barDirection="vertical";this.barWidth=null;this.shadowOffset=2;this.shadowDepth=5;this.shadowAlpha=0.08;this.waterfall=false;this.groups=1;this.varyBarColor=false;this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColors=[];this.transposedData=true;this.renderer.animation={show:false,direction:"down",speed:3000,_supported:true};this._type="bar";if(n.highlightMouseDown&&n.highlightMouseOver==null){n.highlightMouseOver=false}d.extend(true,this,n);d.extend(true,this.renderer,n);this.fill=true;if(this.barDirection==="horizontal"&&this.rendererOptions.animation&&this.rendererOptions.animation.direction==null){this.renderer.animation.direction="left"}if(this.waterfall){this.fillToZero=false;this.disableStack=true}if(this.barDirection=="vertical"){this._primaryAxis="_xaxis";this._stackAxis="y";this.fillAxis="y"}else{this._primaryAxis="_yaxis";this._stackAxis="x";this.fillAxis="x"}this._highlightedPoint=null;this._plotSeriesInfo=null;this._dataColors=[];this._barPoints=[];var o={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,strokeStyle:this.color,fillStyle:this.color,closePath:this.fill};this.renderer.shapeRenderer.init(o);var m={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,closePath:this.fill};this.renderer.shadowRenderer.init(m);p.postInitHooks.addOnce(h);p.postDrawHooks.addOnce(i);p.eventListenerHooks.addOnce("jqplotMouseMove",b);p.eventListenerHooks.addOnce("jqplotMouseDown",a);p.eventListenerHooks.addOnce("jqplotMouseUp",k);p.eventListenerHooks.addOnce("jqplotClick",e);p.eventListenerHooks.addOnce("jqplotRightClick",l)};function g(s,o,n,v){if(this.rendererOptions.barDirection=="horizontal"){this._stackAxis="x";this._primaryAxis="_yaxis"}if(this.rendererOptions.waterfall==true){this._data=d.extend(true,[],this.data);var r=0;var t=(!this.rendererOptions.barDirection||this.rendererOptions.barDirection==="vertical"||this.transposedData===false)?1:0;for(var p=0;p<this.data.length;p++){r+=this.data[p][t];if(p>0){this.data[p][t]+=this.data[p-1][t]}}this.data[this.data.length]=(t==1)?[this.data.length+1,r]:[r,this.data.length+1];this._data[this._data.length]=(t==1)?[this._data.length+1,r]:[r,this._data.length+1]}if(this.rendererOptions.groups>1){this.breakOnNull=true;var m=this.data.length;var u=parseInt(m/this.rendererOptions.groups,10);var q=0;for(var p=u;p<m;p+=u){this.data.splice(p+q,0,[null,null]);q++}for(p=0;p<this.data.length;p++){if(this._primaryAxis=="_xaxis"){this.data[p][0]=p+1}else{this.data[p][1]=p+1}}}}d.jqplot.preSeriesInitHooks.push(g);d.jqplot.BarRenderer.prototype.calcSeriesNumbers=function(){var q=0;var r=0;var p=this[this._primaryAxis];var o,n,t;for(var m=0;m<p._series.length;m++){n=p._series[m];if(n===this){t=m}if(n.renderer.constructor==d.jqplot.BarRenderer){q+=n.data.length;r+=1}}return[q,r,t]};d.jqplot.BarRenderer.prototype.setBarWidth=function(){var p;var m=0;var n=0;var r=this[this._primaryAxis];var w,q,u;var v=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);m=v[0];n=v[1];var t=r.numberTicks;var o=(t-1)/2;if(r.name=="xaxis"||r.name=="x2axis"){if(this._stack){this.barWidth=(r._offsets.max-r._offsets.min)/m*n-this.barMargin}else{this.barWidth=((r._offsets.max-r._offsets.min)/o-this.barPadding*(n-1)-this.barMargin*2)/n}}else{if(this._stack){this.barWidth=(r._offsets.min-r._offsets.max)/m*n-this.barMargin}else{this.barWidth=((r._offsets.min-r._offsets.max)/o-this.barPadding*(n-1)-this.barMargin*2)/n}}return[m,n]};function f(n){var p=[];for(var r=0;r<n.length;r++){var q=d.jqplot.getColorComponents(n[r]);var m=[q[0],q[1],q[2]];var s=m[0]+m[1]+m[2];for(var o=0;o<3;o++){m[o]=(s>570)?m[o]*0.8:m[o]+0.3*(255-m[o]);m[o]=parseInt(m[o],10)}p.push("rgb("+m[0]+","+m[1]+","+m[2]+")")}return p}d.jqplot.BarRenderer.prototype.draw=function(D,J,p){var G;var z=d.extend({},p);var u=(z.shadow!=undefined)?z.shadow:this.shadow;var M=(z.showLine!=undefined)?z.showLine:this.showLine;var E=(z.fill!=undefined)?z.fill:this.fill;var o=this.xaxis;var H=this.yaxis;var x=this._xaxis.series_u2p;var I=this._yaxis.series_u2p;var C,B;this._dataColors=[];this._barPoints=[];if(this.barWidth==null){this.renderer.setBarWidth.call(this)}var L=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);var w=L[0];var v=L[1];var r=L[2];var F=[];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(v/2-0.5)+r)*(this.barWidth+this.barPadding)}if(M){var t=new d.jqplot.ColorGenerator(this.negativeSeriesColors);var A=new d.jqplot.ColorGenerator(this.seriesColors);var K=t.get(this.index);if(!this.useNegativeColors){K=z.fillStyle}var s=z.fillStyle;var q;var N;var n;if(this.barDirection=="vertical"){for(var G=0;G<J.length;G++){if(this.data[G][1]==null){continue}F=[];q=J[G][0]+this._barNudge;n;if(this._stack&&this._prevGridData.length){n=this._prevGridData[G][1]}else{if(this.fillToZero){n=this._yaxis.series_u2p(0)}else{if(this.waterfall&&G>0&&G<this.gridData.length-1){n=this.gridData[G-1][1]}else{if(this.waterfall&&G==0&&G<this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){n=this._yaxis.series_u2p(0)}else{if(this._yaxis.min>0){n=D.canvas.height}else{n=0}}}else{if(this.waterfall&&G==this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){n=this._yaxis.series_u2p(0)}else{if(this._yaxis.min>0){n=D.canvas.height}else{n=0}}}else{n=D.canvas.height}}}}}if((this.fillToZero&&this._plotData[G][1]<0)||(this.waterfall&&this._data[G][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){z.fillStyle=t.next()}else{z.fillStyle=A.next()}}else{z.fillStyle=K}}else{if(this.varyBarColor&&!this._stack){z.fillStyle=A.next()}else{z.fillStyle=s}}if(!this.fillToZero||this._plotData[G][1]>=0){F.push([q-this.barWidth/2,n]);F.push([q-this.barWidth/2,J[G][1]]);F.push([q+this.barWidth/2,J[G][1]]);F.push([q+this.barWidth/2,n])}else{F.push([q-this.barWidth/2,J[G][1]]);F.push([q-this.barWidth/2,n]);F.push([q+this.barWidth/2,n]);F.push([q+this.barWidth/2,J[G][1]])}this._barPoints.push(F);if(u&&!this._stack){var y=d.extend(true,{},z);delete y.fillStyle;this.renderer.shadowRenderer.draw(D,F,y)}var m=z.fillStyle||this.color;this._dataColors.push(m);this.renderer.shapeRenderer.draw(D,F,z)}}else{if(this.barDirection=="horizontal"){for(var G=0;G<J.length;G++){if(this.data[G][0]==null){continue}F=[];q=J[G][1]-this._barNudge;N;if(this._stack&&this._prevGridData.length){N=this._prevGridData[G][0]}else{if(this.fillToZero){N=this._xaxis.series_u2p(0)}else{if(this.waterfall&&G>0&&G<this.gridData.length-1){N=this.gridData[G-1][1]}else{if(this.waterfall&&G==0&&G<this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){N=this._xaxis.series_u2p(0)}else{if(this._xaxis.min>0){N=0}else{N=D.canvas.width}}}else{if(this.waterfall&&G==this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){N=this._xaxis.series_u2p(0)}else{if(this._xaxis.min>0){N=0}else{N=D.canvas.width}}}else{N=0}}}}}if((this.fillToZero&&this._plotData[G][1]<0)||(this.waterfall&&this._data[G][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){z.fillStyle=t.next()}else{z.fillStyle=A.next()}}}else{if(this.varyBarColor&&!this._stack){z.fillStyle=A.next()}else{z.fillStyle=s}}if(!this.fillToZero||this._plotData[G][0]>=0){F.push([N,q+this.barWidth/2]);F.push([N,q-this.barWidth/2]);F.push([J[G][0],q-this.barWidth/2]);F.push([J[G][0],q+this.barWidth/2])}else{F.push([J[G][0],q+this.barWidth/2]);F.push([J[G][0],q-this.barWidth/2]);F.push([N,q-this.barWidth/2]);F.push([N,q+this.barWidth/2])}this._barPoints.push(F);if(u&&!this._stack){var y=d.extend(true,{},z);delete y.fillStyle;this.renderer.shadowRenderer.draw(D,F,y)}var m=z.fillStyle||this.color;this._dataColors.push(m);this.renderer.shapeRenderer.draw(D,F,z)}}}}if(this.highlightColors.length==0){this.highlightColors=d.jqplot.computeHighlightColors(this._dataColors)}else{if(typeof(this.highlightColors)=="string"){var L=this.highlightColors;this.highlightColors=[];for(var G=0;G<this._dataColors.length;G++){this.highlightColors.push(L)}}}};d.jqplot.BarRenderer.prototype.drawShadow=function(y,E,o){var B;var v=(o!=undefined)?o:{};var r=(v.shadow!=undefined)?v.shadow:this.shadow;var G=(v.showLine!=undefined)?v.showLine:this.showLine;var z=(v.fill!=undefined)?v.fill:this.fill;var n=this.xaxis;var C=this.yaxis;var u=this._xaxis.series_u2p;var D=this._yaxis.series_u2p;var x,A,w,t,s,q;if(this._stack&&this.shadow){if(this.barWidth==null){this.renderer.setBarWidth.call(this)}var F=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);t=F[0];s=F[1];q=F[2];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(s/2-0.5)+q)*(this.barWidth+this.barPadding)}if(G){if(this.barDirection=="vertical"){for(var B=0;B<E.length;B++){if(this.data[B][1]==null){continue}A=[];var p=E[B][0]+this._barNudge;var m;if(this._stack&&this._prevGridData.length){m=this._prevGridData[B][1]}else{if(this.fillToZero){m=this._yaxis.series_u2p(0)}else{m=y.canvas.height}}A.push([p-this.barWidth/2,m]);A.push([p-this.barWidth/2,E[B][1]]);A.push([p+this.barWidth/2,E[B][1]]);A.push([p+this.barWidth/2,m]);this.renderer.shadowRenderer.draw(y,A,v)}}else{if(this.barDirection=="horizontal"){for(var B=0;B<E.length;B++){if(this.data[B][0]==null){continue}A=[];var p=E[B][1]-this._barNudge;var H;if(this._stack&&this._prevGridData.length){H=this._prevGridData[B][0]}else{H=0}A.push([H,p+this.barWidth/2]);A.push([E[B][0],p+this.barWidth/2]);A.push([E[B][0],p-this.barWidth/2]);A.push([H,p-this.barWidth/2]);this.renderer.shadowRenderer.draw(y,A,v)}}}}}};function h(p,o,m){for(var n=0;n<this.series.length;n++){if(this.series[n].renderer.constructor==d.jqplot.BarRenderer){if(this.series[n].highlightMouseOver){this.series[n].highlightMouseDown=false}}}}function i(){if(this.plugins.barRenderer&&this.plugins.barRenderer.highlightCanvas){this.plugins.barRenderer.highlightCanvas.resetCanvas();this.plugins.barRenderer.highlightCanvas=null}this.plugins.barRenderer={highlightedSeriesIndex:null};this.plugins.barRenderer.highlightCanvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.barRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-barRenderer-highlight-canvas",this._plotDimensions,this));this.plugins.barRenderer.highlightCanvas.setContext();this.eventCanvas._elem.bind("mouseleave",{plot:this},function(m){j(m.data.plot)})}function c(t,r,p,o){var n=t.series[r];var m=t.plugins.barRenderer.highlightCanvas;m._ctx.clearRect(0,0,m._ctx.canvas.width,m._ctx.canvas.height);n._highlightedPoint=p;t.plugins.barRenderer.highlightedSeriesIndex=r;var q={fillStyle:n.highlightColors[p]};n.renderer.shapeRenderer.draw(m._ctx,o,q);m=null}function j(o){var m=o.plugins.barRenderer.highlightCanvas;m._ctx.clearRect(0,0,m._ctx.canvas.width,m._ctx.canvas.height);for(var n=0;n<o.series.length;n++){o.series[n]._highlightedPoint=null}o.plugins.barRenderer.highlightedSeriesIndex=null;o.target.trigger("jqplotDataUnhighlight");m=null}function b(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];var n=jQuery.Event("jqplotDataMouseOver");n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o);if(r.series[o[0]].highlightMouseOver&&!(o[0]==r.plugins.barRenderer.highlightedSeriesIndex&&o[1]==r.series[o[0]]._highlightedPoint)){var m=jQuery.Event("jqplotDataHighlight");m.pageX=q.pageX;m.pageY=q.pageY;r.target.trigger(m,o);c(r,s.seriesIndex,s.pointIndex,s.points)}}else{if(s==null){j(r)}}}function a(p,o,s,r,q){if(r){var n=[r.seriesIndex,r.pointIndex,r.data];if(q.series[n[0]].highlightMouseDown&&!(n[0]==q.plugins.barRenderer.highlightedSeriesIndex&&n[1]==q.series[n[0]]._highlightedPoint)){var m=jQuery.Event("jqplotDataHighlight");m.pageX=p.pageX;m.pageY=p.pageY;q.target.trigger(m,n);c(q,r.seriesIndex,r.pointIndex,r.points)}}else{if(r==null){j(q)}}}function k(o,n,r,q,p){var m=p.plugins.barRenderer.highlightedSeriesIndex;if(m!=null&&p.series[m].highlightMouseDown){j(p)}}function e(p,o,s,r,q){if(r){var n=[r.seriesIndex,r.pointIndex,r.data];var m=jQuery.Event("jqplotDataClick");m.pageX=p.pageX;m.pageY=p.pageY;q.target.trigger(m,n)}}function l(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];var m=r.plugins.barRenderer.highlightedSeriesIndex;if(m!=null&&r.series[m].highlightMouseDown){j(r)}var n=jQuery.Event("jqplotDataRightClick");n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o)}}})(jQuery);$.jqplot.config.addDomReference=!0;var isIe8=$.browser.msie&&8===+$.browser.version;$.jqplot.config.imageNumber=0;var puzzleImagesCoordinates=[],puzzleImagesCoordinatesCount=0,puzzleImagesNumber=0;$.browser.msie&&(9!=$.browser.version&&10!=$.browser.version)&&($.browser.version=8);Array.prototype.indexOf||(Array.prototype.indexOf=function(a,c){var d=this.length>>>0,b=Number(c)||0,b=0>b?Math.ceil(b):Math.floor(b);for(0>b&&(b+=d);b<d;b++)if(b in this&&this[b]===a)return b;return-1});
(function(a){a.jqplot.ToolsYAxisTickFormatter=function(c,d){if("number"==typeof d){var b=0==d%1?"%d":"0"===d.toFixed(2).substr(-1)?"%.1f":"%.2f";return a.jqplot.sprintf(b,d)}return String(d)}})(jQuery);
(function(a){a.jqplot.TooltipCanvasAxisTickRenderer=function(c){a.jqplot.CanvasAxisTickRenderer.call(this,c)};a.extend(!0,a.jqplot.TooltipCanvasAxisTickRenderer.prototype,a.jqplot.CanvasAxisTickRenderer.prototype);a.jqplot.TooltipCanvasAxisTickRenderer.prototype.init=function(c){a.jqplot.CanvasAxisTickRenderer.prototype.init.call(this,c)};a.jqplot.TooltipCanvasAxisTickRenderer.prototype.draw=function(c,d){a.jqplot.CanvasAxisTickRenderer.prototype.draw.call(this,c,d);this.tooltip&&(this._elem.css("zIndex",
6),this._elem.css("padding",5),tooltip(this._elem,this.tooltip));return this._elem}})(jQuery);
(function(a){a.jqplot.SimpleImageRenderer=function(){a.jqplot.MarkerRenderer.call(this)};a.extend(!0,a.jqplot.SimpleImageRenderer.prototype,a.jqplot.MarkerRenderer.prototype);a.jqplot.SimpleImageRenderer.prototype.init=function(c,d){a.jqplot.MarkerRenderer.prototype.init.call(this,c,d);this.initImages();this.drawings={}};a.jqplot.SimpleImageRenderer.prototype.initImages=function(){for(var a=0;a<this.images.length;a++)this.images[a].image=new Image,this.images[a].image.src=this.images[a].src;this.imageIndex=
0};a.jqplot.SimpleImageRenderer.prototype.getImage=function(){var a=this.images[this.imageIndex];this.imageIndex=(this.imageIndex+1)%this.images.length;return a};a.jqplot.SimpleImageRenderer.prototype.draw=function(c,d,b){if(!this.drawings[c+d]){this.drawings[c+d]=!0;var e=this.getImage(),f=e.height,g=e.width,h=c-g/2,i=d-f/2;checkIsIE()?b.drawImage(e.image,h,i,g,f):a.jqplot.SimpleImageRenderer.play(20,10,function(){b.clearRect(h,i,g,f);b.drawImage(e.image,h,i,g,f)})}};a.jqplot.SimpleImageRenderer.play=
function(a,d,b,e){var f=0,a=setInterval(function(){try{b(f/d)}catch(g){clearInterval(a)}f++;f>d&&(clearInterval(a),e&&e())},a)};a.jqplot.HtmlImageRenderer=function(){a.jqplot.MarkerRenderer.call(this)};a.extend(!0,a.jqplot.HtmlImageRenderer.prototype,a.jqplot.MarkerRenderer.prototype);a.jqplot.HtmlImageRenderer.prototype.init=function(c,d){a.jqplot.MarkerRenderer.prototype.init.call(this,c,d);this.initImages();this.drawings={};this.plot=a(c.plotId).data("jqplot_plot");this.seriesIndex=c.seriesIndex;
this.zIndex=c.zIndex||0};a.jqplot.HtmlImageRenderer.prototype.initImages=function(){for(var a=0;a<this.images.length;a++)this.images[a].image=new Image,this.images[a].image.src=this.images[a].src;this.imageIndex=0};a.jqplot.HtmlImageRenderer.prototype.getImage=function(){var a=this.images[this.imageIndex];this.imageIndex=(this.imageIndex+1)%this.images.length;return a};a.jqplot.HtmlImageRenderer.prototype.getElement=function(){if(!this.rendererCanvas){var c=this.plot.target,d=a('<div class="imageRendererCanvas"></div>'),
b=this.plot.series[this.seriesIndex];this.x={min:b._xaxis._min,max:b._xaxis._max};this.y={min:b._yaxis._min,max:b._yaxis._max};b=c.find(".jqplot-event-canvas");this.height=b.height();this.width=b.width();d.css({width:this.width,height:this.height,top:b.css("top"),left:b.css("left"),zIndex:this.zIndex});d.insertAfter(c.find(".jqplot-grid-canvas"));this.rendererCanvas=d}return this.rendererCanvas};a.jqplot.HtmlImageRenderer.prototype.drawImage=function(c,d,b,e,f,g,h){c=this.createImage(c,e,f,g,h);c.css({left:d,
top:b,position:"absolute"});0<a('div[imagenumber="'+puzzleImagesNumber+'"]').size()&&a('div[imagenumber="'+puzzleImagesNumber+'"]').removeAttr("imagenumber");c.attr("imagenumber",puzzleImagesNumber);c.attr("onmouseover","$('div[highlighternumber=\""+puzzleImagesNumber+"\"]').show();");c.attr("onmouseout","$('div[highlighternumber=\""+puzzleImagesNumber+"\"]').hide();");this.getElement().append(c);a.jqplot.config.imageNumber++};a.jqplot.HtmlImageRenderer.prototype.createImage=function(c,d,b,e,f){var g=
a("<div></div>");g.css({backgroundImage:"url('"+c.src+"')",backgroundPosition:"-"+d+"px -"+b+"px",width:e,height:f});return g};a.jqplot.HtmlImageRenderer.prototype.doDraw=function(){};a.jqplot.HtmlImageRenderer.prototype.draw=function(a,d,b,e){this.drawings[a+d]?(this.getElement(),this.doDraw(a,d,b,e)):this.drawings[a+d]=!0};a.jqplot.HtmlSimpleImageRenderer=function(){a.jqplot.HtmlImageRenderer.call(this)};a.extend(!0,a.jqplot.HtmlSimpleImageRenderer.prototype,a.jqplot.HtmlImageRenderer.prototype);
a.jqplot.HtmlSimpleImageRenderer.prototype.doDraw=function(a,d){var b=this.getImage();this.drawImage(b.image,a-this.imageDrawableWidth/2,d-this.imageDrawableHeight/2,0,0,this.imageDrawableWidth,this.imageDrawableHeight)};a.jqplot.HtmlPuzzleImageRenderer=function(){a.jqplot.HtmlImageRenderer.call(this);puzzleImagesCoordinates=[];puzzleImagesNumber=puzzleImagesCoordinatesCount=0};a.jqplot.HtmlPuzzleImageRenderer.drawTimeout=500;a.extend(!0,a.jqplot.HtmlPuzzleImageRenderer.prototype,a.jqplot.HtmlImageRenderer.prototype);
a.jqplot.HtmlPuzzleImageRenderer.prototype.doDraw=function(c,d){var b=this.height-this.imageDrawableHeight,e=Math.round((this.height-d)/(this.imageDrawableHeight*this.coeff));1>e&&(e=1);var f=this;setTimeout(function(){a.jqplot.SimpleImageRenderer.play(70,e-1,function(a){-1==puzzleImagesCoordinates.indexOf(c)&&(puzzleImagesCoordinates[puzzleImagesCoordinatesCount]=c,puzzleImagesCoordinatesCount++);puzzleImagesNumber=puzzleImagesCoordinates.indexOf(c);var d=f.getImage(),e=c-f.imageDrawableWidth/2,
a=0==a?e:e+5*Math.random();f.drawImage(d.image,a,b,d.sx,d.sy,f.imageWidth,f.imageHeight);b-=f.imageDrawableHeight*f.coeff})},a.jqplot.HtmlPuzzleImageRenderer.drawTimeout)};a.jqplot.HtmlLongImageRenderer=function(){a.jqplot.HtmlImageRenderer.call(this)};a.extend(!0,a.jqplot.HtmlLongImageRenderer.prototype,a.jqplot.HtmlImageRenderer.prototype);a.jqplot.HtmlLongImageRenderer.prototype.doDraw=function(c,d){var b,e;if(1<this.images.length&&isIe8)for(var f=0;this.images.length>f;f++)this.images[f].bottomImage&&
(e=this.createImage(this.images[f].image,0,b.height-b.bottomHeight,b.width,b.bottomHeight)),this.images[f].topImage&&(b=this.images[f]);else b=this.images[0],e=this.createImage(b.image,0,b.height-b.bottomHeight,b.width,b.bottomHeight);f=this.height-d-b.yPadding;b.minHeight&&f<b.minHeight&&(f=b.minHeight);e.css({top:this.height-b.bottomHeight,left:c-b.width/2,position:"absolute"});e.attr("onmouseover","$('div[highlighternumber=\""+a.jqplot.config.imageNumber+"\"]').show();");e.attr("onmouseout","$('div[highlighternumber=\""+
a.jqplot.config.imageNumber+"\"]').hide();");this.getElement().append(e);e=f-b.bottomHeight;f=this.createImage(b.image,0,0,b.width,0);f.css({position:"absolute",bottom:b.bottomHeight,left:c-b.width/2,height:0});f.attr("imagenumber",a.jqplot.config.imageNumber);f.attr("onmouseover","$('div[highlighternumber=\""+a.jqplot.config.imageNumber+"\"]').show();");f.attr("onmouseout","$('div[highlighternumber=\""+a.jqplot.config.imageNumber+"\"]').hide();");this.getElement().append(f);f.animate({height:"+"+
e},1E3);a.jqplot.config.imageNumber++};a.jqplot.ImageMarkerRenderer=function(){a.jqplot.SimpleImageRenderer.call(this)};a.extend(!0,a.jqplot.ImageMarkerRenderer.prototype,a.jqplot.SimpleImageRenderer.prototype);a.jqplot.ImageMarkerRenderer.prototype.init=function(c,d){a.jqplot.SimpleImageRenderer.prototype.init.call(this,c,d)};a.jqplot.ImageMarkerRenderer.prototype.draw=function(c,d,b){if(!this.drawings[c+d]){this.drawings[c+d]=!0;var e=this.getImage(),f=b.canvas.height-d,g=f*e.width/e.height,h=c-
g/2;checkIsIE()?b.drawImage(e.image,h,d,g,f):a.jqplot.SimpleImageRenderer.play(20,10,function(){b.clearRect(h,d,g,f);b.drawImage(e.image,h,d,g,f)})}};a.jqplot.ImageMarkerRenderer.slideUpImage=function(c,d,b,e,f,g,h,i,j,k,l){a.jqplot.SimpleImageRenderer.play(j,k,function(a){a=i*(1-a);d.drawImage(c,f,g,h,i,b,e,h,i);checkIsIE()||d.clearRect(b-1,e,h+2,a)},l)};a.jqplot.ImagePuzzleRenderer=function(){a.jqplot.ImageMarkerRenderer.call(this)};a.jqplot.ImagePuzzleRenderer.drawTimeout=1E3;a.extend(!0,a.jqplot.ImagePuzzleRenderer.prototype,
a.jqplot.ImageMarkerRenderer.prototype);a.jqplot.ImagePuzzleRenderer.prototype.getImage=function(){var a=Math.floor(5*Math.random());return this.images[a]};a.jqplot.ImagePuzzleRenderer.prototype.draw=function(c,d,b){if(!this.drawings[c+d]){this.drawings[c+d]=!0;var e=b.canvas.height-this.imageDrawableHeight,f=Math.round((b.canvas.height-d)/(this.imageDrawableHeight*this.coeff));1>f&&(f=1);var g=this;setTimeout(function(){a.jqplot.SimpleImageRenderer.play(70,f-1,function(d){var f=g.getImage(),j=c-
g.imageDrawableWidth/2,d=0==d?j:j+5*Math.random();checkIsIE()&&(b=a("canvas.jqplot-series-canvas")[0].getContext("2d"));b.drawImage(f.image,f.sx,f.sy,g.imageWidth,g.imageHeight,d,e,g.imageDrawableWidth,g.imageDrawableHeight);e-=g.imageDrawableHeight*g.coeff})},a.jqplot.ImagePuzzleRenderer.drawTimeout)}};a.jqplot.LongImageRenderer=function(){a.jqplot.ImageMarkerRenderer.call(this)};a.jqplot.LongImageRenderer.drawTimeout=1E3;a.extend(!0,a.jqplot.LongImageRenderer.prototype,a.jqplot.ImageMarkerRenderer.prototype);
a.jqplot.LongImageRenderer.prototype.draw=function(c,d,b){if(!this.drawings[c+d]){this.drawings[c+d]=!0;var e=this.getImage();setTimeout(function(){var f=b.canvas.height,g=e.bottomHeight;c-=e.width/2;a.jqplot.ImageMarkerRenderer.slideUpImage(e.image,b,c,b.canvas.height-g,0,e.height-g,e.width,g,1,1);var h=f-d-g;f-d<e.minHeight&&(d=f-e.minHeight,h=e.minHeight-g);e.yPadding&&(d+=e.yPadding,h-=e.yPadding);a.jqplot.ImageMarkerRenderer.slideUpImage(e.image,b,c,d,0,0,e.width,h,20,10);a.jqplot.LongImageRenderer.drawTimeout=
100},a.jqplot.LongImageRenderer.drawTimeout)}}})(jQuery);$.fn.qtip.zindex=1049;var tooltipPositionDefault={target:"rightBottom",tip:"leftTop"};function createChosenBox(a){$(a).chosen()}function createOption(a,c,d,b){var e=document.createElement("option");e.appendChild(document.createTextNode(a));e.setAttribute("value",c);e.defaultSelected=d;e.selected=b;return e}
function checkIsIE(){return document.all&&!document.querySelector||document.all&&document.querySelector&&!document.getElementsByClassName}function updateChosenBox(a,c,d){createChosenBox(a);c&&($(a).attr("data-placeholder",c),$(a).prepend(createOption("","",!0,!0)));$(d).each(function(b,d){$(a).append(createOption(d,d,0==b&&!c,0==b&&!c))});$(a).chosen().trigger("liszt:updated")}function hideTooltip(a){try{$(a).qtip("destroy")}catch(c){}}
function getTooltipPosition(a){return!a?tooltipPositionDefault:"rightTop"==a?{target:"rightTop",tip:"leftBottom"}:"leftTop"==a?{target:"leftTop",tip:"rightBottom"}:tooltipPositionDefault}function showTooltip(a,c){showTooltipWithWidth(a,c,"160px")}
function showTooltipWithWidth(a,c,d){getTooltipPosition();try{$(a).qtip({content:c,position:{my:"left center",at:"right center",adjust:{x:3,y:3}},show:{when:!1,ready:!0},hide:!1,style:{classes:"ui-tooltip-red ui-tooltip-shadow ui-tooltip-rounded",width:d}})}catch(b){}}function createToolTip(a,c){$(a).qtip({content:c,position:{my:"top left",target:"mouse",adjust:{x:10,y:10}},hide:{fixed:!0},style:"ui-tooltip-shadow"})}function drawWT(){}
function yRange(a){for(var c,d,b=0;b<a.length;b++){if(!c||a[b][1]<c)c=a[b][1];if(!d||a[b][1]>d)d=a[b][1]}a=0.1*(d-c);if(0==a||1>a)d+=1,c-=1;c=Math.floor(c-a);d=Math.floor(d+a);return{min:c,max:d}}function showModal(a){$(a).modal()}function scrollToElement(a){window.setTimeout(function(){$("html, body").animate({scrollTop:$(a).offset().top},700)},100)}function metricConverter(a,c,d,b){$(c,a).each(function(a,c){var g=$(c).data(b);if(g&&d==b)return g;$(c).data(b,g)})}
var _restrictedActivities={Sex:1,Generic:1,Other:1,"Insanity Dig Deeper":1,"Insanity Plyometric Cardio Circuit":1,"Insanity Cardio Power & Resistance":1,"Insanity Cardio Recovery":1,"Insanity Pure Cardio & Cardio Abs":1,"Insanity Core Cardio & Balance":1,"Insanity Max Interval Circuit":1,"Insanity Interval Plyo":1,"Insanity Max Cardio Conditioning":1,"Insanity Max Recovery":1};
function setActivities(a,c){var a=$(a),d=function(b){b=$("<optgroup label='"+b+"'></optgroup>");a.append(b);return b},b=c.result.output.activity_types,e=function(a){$(b).each(function(b,c){_restrictedActivities[c.activity_type_name]||a(c)})},f={};e(function(a){f[a.activity_type_id]={o:a,childs:null,addChild:function(a){this.childs||(this.childs={});this.childs[a.o.activity_type_id]=a},id:function(){return this.o.activity_type_id},name:function(){return this.o.activity_type_name}}});e(function(a){a.parent_activity_type_id&&
f[a.parent_activity_type_id]&&f[a.parent_activity_type_id].addChild(f[a.activity_type_id])});var e=d("Popular"),g=function(a,b,c){var b=b?b+" - "+c.name():c.name(),d=createOption(b,c.id());d.setAttribute("for_routes",c.o.for_routes);a.append(d);for(var e in c.childs)g(a,b,c.childs[e])},h;for(h in f){var i=f[h];if(!i.o.parent_activity_type_id){var j=createOption(i.name(),i.id());j.setAttribute("for_routes",i.o.for_routes);e.append(j);j=d(i.name());g(j,null,i)}}a.chosen()}
$.jqplotCommon={noDataIndicator:{show:!0,indicator:'<div style="color: #e1e1e1; font-weight: bold; font-size: 55px">No data</div>'},grid:{shadow:!0,renderer:jQuery.jqplot.CustomCanvasGridRenderer,rendererOptions:{bottomAreaPercent:1,gridInterval:15}}};
function printPage(){isIe8&&$("body").CanvasHack();setTimeout(function(){$(".imageRendererCanvas").find("div").each(function(){if("none"!=$(this).css("background-image")){var a="";isIe8&&(a='<div style = "overflow: hidden; position: absolute; height: '+$(this).css("height")+"; width: "+$(this).css("width")+';">');a+='<img style="display: block;';isIe8||(a+="position: absolute;");a+='" src="'+$(this).css("background-image").replace(/"/g,"").replace(/url\(|\)$/ig,"")+'"/>';isIe8||(a+="</div>");$(this).prepend(a)}});
window.print()},500)}
function getDateWithOffset(a,c){var d=function(a){if(!a)return null;a.setHours(12<a.getHours()?a.getHours()+2:0);return a},b,e=a||new Date;b=e.getFullYear();for(var f=e.getMonth(),e=e.getDate(),g=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=g.exec(c);h;){switch(h[2]||"d"){case "d":case "D":e+=parseInt(h[1],10);break;case "w":case "W":e+=7*parseInt(h[1],10);break;case "m":case "M":f+=parseInt(h[1],10);e=Math.min(e,32-d(new Date(b,f,32)).getDate());break;case "y":case "Y":b+=parseInt(h[1],10),e=Math.min(e,
32-d(new Date(b,f,32)).getDate())}h=g.exec(c)}if(b=new Date(b,f,e))b.setHours(0),b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);return d(b)}function isNULL(a,c){return void 0==a[c]||null==a[c]}function wrapMMFWidget(a,c){$(a).find("select:visible").each(function(a,b){$(b).chosen().change(function(){c&&c.view&&c.view.$("[name="+b.name+"]").change()})});$(a).find("button").each(function(a,b){$(b).addClass("orangebtn button")})}
function waitForSelectLoaded(a,c){var d=setInterval(function(){$(a)&&0<$(a).find("option").length&&(clearInterval(d),c())},100)}(function(a){a.fn.CanvasHack=function(){this.find("canvas").filter(function(){return"absolute"==a(this).css("position")}).wrap(function(){var c=a(this),d=a("<div />").css({position:"absolute",top:c.css("top"),left:c.css("left")});c.css({top:"0",left:"0"});return d});return this}})(jQuery);(function(a){a.Placeholder={settings:{color:"rgb(169,169,169)",dataName:"original-font-color"},init:function(b){if(b){a.extend(a.Placeholder.settings,b)}var c=function(b){return a(b).val()};var d=function(b,c){a(b).val(c)};var e=function(b){return a(b).attr("placeholder")};var f=function(a){var b=c(a);return b.length===0||b==e(a)};var g=function(b){a(b).data(a.Placeholder.settings.dataName,a(b).css("color"));a(b).css("color",a.Placeholder.settings.color)};var h=function(b){a(b).css("color",a(b).data(a.Placeholder.settings.dataName));a(b).removeData(a.Placeholder.settings.dataName)};var i=function(a){d(a,e(a));g(a)};var j=function(b){if(a(b).data(a.Placeholder.settings.dataName)){d(b,"");h(b)}};var k=function(){if(f(this)){j(this)}};var l=function(){if(f(this)){i(this)}};var m=function(){if(f(this)){j(this)}};a("textarea, input[type='text']").each(function(b,c){if(a(c).attr("placeholder")){a(c).focus(k);a(c).blur(l);a(c).bind("parentformsubmitted",m);a(c).trigger("blur");a(c).parents("form").submit(function(){a(c).trigger("parentformsubmitted")})}});return this},cleanBeforeSubmit:function(b){if(!b){b=a("form")}a(b).find("textarea, input[type='text']").trigger("parentformsubmitted");return b}}})(jQuery);function mapChartData(dataPoints) {
    return jQuery.map(dataPoints, function (dataPoint) {
        var result = [[new Date(dataPoint.dateTime).getTime(), dataPoint.value]];
        return result;
    });
}

function mapChartDataWithConversionFactor(dataPoints, conversionFactor) {
    return $.map(dataPoints, function (dataPoint) {
        return [
            [new Date(dataPoint.dateTime).getTime(), dataPoint.value * conversionFactor]
        ];
    });
}

var chartConfigurations = [
    {
        usageKeys:["distanceBar", "distanceLine"],
        configuration:function () {

            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var targetMarking = $chart.data()["showTargetLine"] ? [$chart.data()["challengeTargetMarking"]] : [];
                        return getMarkings(axes, targetMarking);
                    }
                },
                series:{
                    stack:true,
                    bars:{
                        show:true,
                        barWidth:getBarWidth(getStartOfDayTime($chart.data()["startTime"]), getEndOfDayTime($chart.data()["endTime"]) ),
                        lineWidth:1,
                        fill: true,
                        fillColor: {
                            colors: [
                                { opacity: 1 },
                                { opacity: 0.7 }
                            ]
                        },
                        align:"centre",
                        interval:1
                    },
                    color:"#ABD033"
                },
                selection:{
                    mode:"x"
                },
                yaxis:{
                    min:$chart.data()["yAxisMin"],
                    max:$chart.data()["yAxisMax"],
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    tickColor: "#DADADA",
                    tickLength: 6,
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    autoscaleMargin: 0.10
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:useImperial ? mapChartDataWithConversionFactor(chartData.dataPoints, getKilometresToMilesConversionFactor()) : mapChartData(chartData.dataPoints)
                    }
                ]
            };
        } ,
        getConversionFactor : function () {
            return getKilometresToMilesConversionFactor();
        }
        ,
        getMeasurementUnit: function (measurementUnitType) {

            var UNITS = {
                IMPERIAL : "Miles",
                METRIC : "Km"
            }

            return UNITS[measurementUnitType];
        }
    },
    {
        usageKeys:["food"],
        configuration:function () {
            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var targetMarking = $chart.data()["showTargetLine"] ? [$chart.data()["challengeTargetMarking"]] : [];
                        return getMarkings(axes, targetMarking);
                    }
                },
                series : {
                    points:{
                        symbol:'image',
                        imgURL:lvContextRoot+'/resources/assets/images/challenges/graph_tick.png',
                        show:true
                    }
                },
                yaxis:{
                    min:0,
                    max:30,
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]) ,
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                selection:{
                    mode:"x"
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:mapChartData(chartData.dataPoints)
                    }
                ]
            }
        }
    },
    {
        usageKeys:["glucose"],
        configuration:function () {
            //if show target line
            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var glucoseTargetMarking = {
                            color:'#E4F5E2',
                            yaxis:{
                                from:4,
                                to:12
                            }
                        };
                        return getMarkings(axes, [glucoseTargetMarking]);
                    }
                },
                series: {
                    points:{
                        symbol:'image',
                        imgURL:lvContextRoot+'/resources/assets/images/challenges/teardrop.png',
                        show:true
                    }
                },
                yaxis:{
                    min:0,
                    max:40,
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                selection:{
                    mode:"x"
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:mapChartData(chartData.dataPoints)
                    }
                ]
            }
        }
    },
    {
        usageKeys:["weight"],
        configuration:function () {

            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var targetMarking = $chart.data()["showTargetLine"] ? [$chart.data()["challengeTargetMarking"]] : [];
                        return getMarkings(axes, targetMarking);
                    }
                },
                series:{
                    stack:true,
                    bars:{
                        show:true,
                        barWidth:getBarWidth(getStartOfDayTime($chart.data()["startTime"]), getEndOfDayTime($chart.data()["endTime"]) ),
                        lineWidth:1,
                        fill: true,
                        fillColor: {
                            colors: [
                                { opacity: 1 },
                                { opacity: 0.7 }
                            ]
                        },
                        align:"centre",
                        interval:1
                    },
                    color:"#ABD033"
                },
                selection:{
                    mode:"x"
                },
                yaxis:{
                    min:$chart.data()["yAxisMin"],
                    max:$chart.data()["yAxisMax"],
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    tickColor: "#DADADA",
                    tickLength: 6,
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    autoscaleMargin: 0.10
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:useImperial ? mapChartDataWithConversionFactor(chartData.dataPoints, getKilogramsToPoundsConversionFactor()) : mapChartData(chartData.dataPoints)
                    }
                ]
            };
        } ,
        getConversionFactor : function () {
            return getKilogramsToPoundsConversionFactor();
        }
        ,
        getMeasurementUnit: function (measurementUnitType) {

            var UNITS = {
                IMPERIAL : "Lbs",
                METRIC : "Kg"
            }

            return UNITS[measurementUnitType];
        }
    },
    {
        usageKeys:["workouttime"],
        configuration:function () {
            //if show target line
            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var targetMarking = $chart.data()["showTargetLine"] ? [$chart.data()["challengeTargetMarking"]] : [];
                        return getMarkings(axes, targetMarking);
                    }
                },
                series: {
                    points:{
                        symbol:'image',
                        imgURL:lvContextRoot+'/resources/assets/images/challenges/teardrop.png',
                        show:true
                    }
                },
                yaxis:{
                    min:0,
                    max:4000,
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                selection:{
                    mode:"x"
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:mapChartData(chartData.dataPoints)
                    }
                ]
            }
        }
    },
    {
        usageKeys:["distanceMilesBar"],
        configuration:function () {

            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var targetMarking = $chart.data()["showTargetLine"] ? [$chart.data()["challengeTargetMarking"]] : [];
                        return getMarkings(axes, targetMarking);
                    }
                },
                series:{
                    stack:true,
                    bars:{
                        show:true,
                        barWidth:getBarWidth(getStartOfDayTime($chart.data()["startTime"]), getEndOfDayTime($chart.data()["endTime"]) ),
                        lineWidth:1,
                        fill: true,
                        fillColor: {
                            colors: [
                                { opacity: 1 },
                                { opacity: 0.7 }
                            ]
                        },
                        align:"centre",
                        interval:1
                    },
                    color:"#ABD033"
                },
                selection:{
                    mode:"x"
                },
                yaxis:{
                    min:$chart.data()["yAxisMin"],
                    max:$chart.data()["yAxisMax"],
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    tickColor: "#DADADA",
                    tickLength: 6,
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    autoscaleMargin: 0.10
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:mapChartDataWithConversionFactor(chartData.dataPoints, getKilometresToMilesConversionFactor())
                    }
                ]
            };
        } ,
        getConversionFactor : function () {
            return getKilometresToMilesConversionFactor();
        }
        ,
        getMeasurementUnit: function (measurementUnitType) {

            var UNITS = {
                IMPERIAL : "Miles"
            }

            return UNITS[measurementUnitType];
        }
    },
    {
        usageKeys:["asthma"],
        configuration:function () {
            //if show target line
            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var asthmaTargetMarking = {
                            color:'#E4F5E2',
                            yaxis:{
                                from:4,
                                to:12
                            }
                        };
                        return getMarkings(axes, [asthmaTargetMarking]);
                    }
                },
                series: {
                    points:{
                        symbol:'image',
                        imgURL:lvContextRoot+'/resources/assets/images/challenges/teardrop.png',
                        show:true
                    }
                },
                yaxis:{
                    min:$chart.data()["yAxisMin"],
                    max:$chart.data()["yAxisMax"],
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                selection:{
                    mode:"x"
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:mapChartData(chartData.dataPoints)
                    }
                ]
            }
        }
    },
    {
        usageKeys:["stepsBar"],
        configuration:function () {

            return {
                grid:{
                    hoverable:true,
                    markings:function (axes) {
                        var targetMarking = $chart.data()["showTargetLine"] ? [$chart.data()["challengeTargetMarking"]] : [];
                        return getMarkings(axes, targetMarking);
                    }
                },
                series:{
                    stack:true,
                    bars:{
                        show:true,
                        barWidth:getBarWidth(getStartOfDayTime($chart.data()["startTime"]), getEndOfDayTime($chart.data()["endTime"]) ),
                        lineWidth:1,
                        fill: true,
                        fillColor: {
                            colors: [
                                { opacity: 1 },
                                { opacity: 0.7 }
                            ]
                        },
                        align:"centre",
                        interval:1
                    },
                    color:"#ABD033"
                },
                selection:{
                    mode:"x"
                },
                yaxis:{
                    min:$chart.data()["yAxisMin"],
                    max:$chart.data()["yAxisMax"],
                    tickColor: "#DADADA",
                    tickLength: 6
                },
                xaxis:{
                    tickColor: "#DADADA",
                    tickLength: 6,
                    mode:"time",
                    ticks:function(range) {
                        return getXAxisLabelsWithReadingsCount();
                    },
                    min:getStartOfDayTime($chart.data()["startTime"]),
                    max:getEndOfDayTime($chart.data()["endTime"]),
                    autoscaleMargin: 0.10
                }
            };
        },
        getSeries:function (chartData, useImperial) {
            return {
                chartSeries:[
                    {
                        data:mapChartData(chartData.dataPoints)
                    }
                ]
            }
        }
    }
];

function getChartConfiguration(key) {
    for (cc in chartConfigurations) {
        var usageKeys = chartConfigurations[cc].usageKeys,
                usageKey = key.toLowerCase();

        usageKeys = $.map(usageKeys, function(element) {
            return element.toLowerCase();
        });

        if ($.inArray(usageKey, usageKeys) != -1) {
            return chartConfigurations[cc];
        }
    }

    //logToConsole("Please configure key/graph mapping for graphType/key ['" + key + "'].");
}

function loadChart(chartData, startTime, endTime, useImperial, canSwitchUnits) {

    var showTargetLine = getShowTargetLineFlag(chartData);

    $chart.data({useImperial :useImperial});
    $chart.data({showTargetLine : showTargetLine});

    $chart.data({graphType:chartData.graphType});

    var chartConfiguration = getChartConfiguration(chartData.graphType);

    if (canSwitchUnits) {
        var imperialUnit = chartConfiguration.getMeasurementUnit("IMPERIAL");
        var metricUnit = chartConfiguration.getMeasurementUnit("METRIC");
        var conversionFactor = chartConfiguration.getConversionFactor();
        $chart.data({conversionFactor : conversionFactor});
        $("#imperialUnit~div").html(imperialUnit);
        $("#metricUnit~div").html(metricUnit);
        $("#switchUnits").show();
    }

    setTargetValue(chartData);

    addYAxisMinMaxValues(chartData);

    $chart.data("chartConfigurator", function (chartData) {
        return chartConfiguration.configuration(chartData);
    });

    $chart.data({
        currentTime:startTime,
        viewMode:lv.challenges.chart.VIEW_MODE.MONTH
    });

    $chart.data(chartConfiguration.getSeries(chartData, useImperial));

    lv.challenges.chart.setStartMarking(startTime);
    lv.challenges.chart.setEndMarking(endTime);
    lv.challenges.chart.setTargetMarking(showTargetLine);
    lv.challenges.chart.setDateRange();
}

function getXAxisLabels() {
    var result = [],
        chartViewMode = $chart.data("viewMode"),
        $chartCurrentDate = $("#chartCurrentDate");

    switch(chartViewMode) {
        case lv.challenges.chart.VIEW_MODE.WEEK:
            result = lv.challenges.chart.getWeekViewLabels($chartCurrentDate);
            break;

        case lv.challenges.chart.VIEW_MODE.MONTH:
            result = lv.challenges.chart.getMonthViewLabels($chartCurrentDate);
            break;

        case lv.challenges.chart.VIEW_MODE.YEAR:
            result = lv.challenges.chart.getYearViewLabels($chartCurrentDate);
            break;

        default:
            break;
    }
    return result;
}

function getXAxisLabelsWithReadingsCount() {
    var xAxisLabels = getXAxisLabels();
    var xAxisLabelsWithReadingsCount = [];
    var labelYAxisValues;
    var graphType = $chart.data("graphType");
    if(graphType === 'food') {
        $.each( xAxisLabels, function( key, value ) {
            labelYAxisValues = lv.challenges.chart.getYAxisValuesForChartLabel(value);
            var pTagLeft = "";
            if (labelYAxisValues.length == 0) {
                pTagLeft = "<p class='ReadingCount0'>";
            }else {
                pTagLeft = "<p class='ReadingCount'>";
            }

            var total = 0;
            for (var i = 0; i < labelYAxisValues.length; i++) {
                total += parseInt(labelYAxisValues[i]);
            }

            xAxisLabelsWithReadingsCount.push([value[0], value[1]+"<br/>"+pTagLeft+total +"</p>"]);
        });
    }
    else {
        $.each( xAxisLabels, function( key, value ) {
            labelYAxisValues = lv.challenges.chart.getYAxisValuesForChartLabel(value);
            var pTagLeft = "";
            if (labelYAxisValues.length == 0) {
                pTagLeft = "<p class='ReadingCount0'>";
            }else {
                pTagLeft = "<p class='ReadingCount'>";
            }

            xAxisLabelsWithReadingsCount.push([value[0], value[1]+"<br/>"+pTagLeft+labelYAxisValues.length +"</p>"]);
        });
    }


    return xAxisLabelsWithReadingsCount;
}

function getStartOfDayTime(dateTime) {
    return lv.challenges.chart.dateHelper.getStartOfDayTime(dateTime);
}

function getEndOfDayTime(dateTime) {
    return lv.challenges.chart.dateHelper.getEndOfDayTime(dateTime);
}

function getMidDayTime(dateTime) {
    return lv.challenges.chart.dateHelper.getMidDayTime(dateTime);
}


function getBarWidth(startTime, endTime) {
    //var ticks = getTicks();
    var barWidth =  (endTime - startTime)/13;
    return barWidth;
}

function getMarkings(axes, targetMarkings) {
    if (targetMarkings) {
        return $.merge(getMarkingsForMinorTicks(axes), targetMarkings);
    }

    return getMarkingsForMinorTicks(axes);
}

function getMarkingsForMinorTicks(axes) {
    var markings = [];
    var xaxis_markings_count = 40.00;
    var xaxis_step = (axes.xaxis.max - axes.xaxis.min )/xaxis_markings_count;
    for (var x = Math.floor(axes.xaxis.min); x < axes.xaxis.max; x += xaxis_step)
        markings.push({ color: '#FFFFFF',
            xaxis: { from: x, to: x }
        });

    var yaxis_markings_count = 20.00;
    var yaxis_step = (axes.yaxis.max - axes.yaxis.min )/yaxis_markings_count;

    for (var y = Math.floor(axes.yaxis.min); y < axes.yaxis.max; y += yaxis_step)
        markings.push({ color: '#FFFFFF',
            yaxis: { from: y, to: y }
        });

    return markings;
}

function shouldAddUpValuesWhenAggregating(graphType) {

}

function setTargetValue(chartData) {
    var targetValue = chartData.targetValue;

    if(isConversionFactorApplicable($chart)) {
        targetValue = targetValue * $chart.data()["conversionFactor"]
    }

    $chart.data({targetValue : targetValue});
}

function getKilometresToMilesConversionFactor() {
    return (1/1.609344);
}

function getKilogramsToPoundsConversionFactor() {
    return (2.20462262185);
}

function getShowTargetLineFlag(chartData) {
    return chartData.showTargetLine;
}

function useAbsoluteYAxisMinMaxValues(chartData) {

    /*if (chartData.graphData[0].length == 0) {
        return true;
    } */

    if (chartData.relativeMax == 0) {
        return true;
    }



    var values = getValues(chartData, isConversionFactorApplicable());

    if (getShowTargetLineFlag(chartData) &&
        chartData.targetValue > getMaxValue(values)) {
        return true;
    }

    return false;
}

function isConversionFactorApplicable() {
    return $chart.data()["useImperial"] && $chart.data()["conversionFactor"];
}

function getValues(chartData, isConversionFactorApplicable) {
    var values = jQuery.map(chartData.dataPoints, function (dataPoint) {

        if (isConversionFactorApplicable) {

            return dataPoint.value * $chart.data()["conversionFactor"];
        }

        return dataPoint.value;
    });

    return values;
}

function addYAxisMinMaxValues(chartData) {

    var yAxisMax = 0;

    var yAxisMin = 0;

    if (useAbsoluteYAxisMinMaxValues(chartData)) {
        yAxisMax = chartData.absoluteMax ;
        yAxisMin = chartData.absoluteMin ;
    }
    else {
        var values = getValues(chartData, isConversionFactorApplicable());
        var dataPointsMin = getMinValue(values);
        var dataPointsMax = getMaxValue(values);
        yAxisMax =  ( ( chartData.relativeMax + 100.00) * dataPointsMax ) / 100.00;
        yAxisMin = ( ( 100.00 - chartData.relativeMin) * dataPointsMin ) / 100.00;

        if (yAxisMin < 0) {
            yAxisMin = 0;
        }
    }

    $chart.data({yAxisMax : yAxisMax});
    $chart.data({yAxisMin : yAxisMin});
}


function getMaxValue(array) {
    return Math.max.apply( null, array );
}

function getMinValue(array) {
    return Math.min.apply( null, array );
};var chalStartTimeMilli = $("#chalStartTimeMilli").val();
var chalEndTimeMilli = $("#chalEndTimeMilli").val();
var userMeasurementUnit = $("#userMeasurementUnit").val();
var chalChartsGetDataURL = $("#chalChartsGetDataURL").val();
var chalID = $("#chalID").val();
var chalStartTime = $("#chalStartTime").val();
var chalEndTime = $("#chalEndTime").val();
var isRegForChal = $("#isRegForChal").val();
var isOnHistoryDetailPage = $("#isOnHistoryDetailPage").val();

var $chart;
var lvContextRoot = $("#globalContextRoot").val();
function showChart(url, id, startDate, endDate, useImperial) {
    console.log("url: "+ url)
    console.log("id: "+ id)
    console.log("startDate: "+ startDate)
    console.log("endDate: "+ endDate)
    console.log("useImperial: "+ useImperial)
    if (typeof url != 'undefined' && undefined != url) {
        $.get(url, {challengeIdentifier: id, startDate: startDate, endDate: endDate}, function (chartDataJSON) {
            var chartData = $.parseJSON(chartDataJSON),
                startDateTime = parseInt(chalStartTimeMilli),
                endDateTime = parseInt(chalEndTimeMilli);

            if (chartData.graphType != 'glucose') {
                //Hack - adjust each data point time to mid day
                chartData.dataPoints = adjustDataPointsTime(chartData.dataPoints);
            }
            if (chartData.isLinkedToGraph) {
                $("#chartsContainer").show();
                var canSwitchUnits = chartData.canSwitchUnits;
                loadChart(chartData, startDateTime, endDateTime, useImperial, canSwitchUnits);
                $("#chartsContainer").show();

                var currentView = $(".btn-group > .active").html();
                if(currentView){
                    currentView = currentView.trim();
                    if(currentView =="Week"){
                        lv.challenges.chart.switchToWeekView();
                    }else if(currentView == "Month"){
                        lv.challenges.chart.switchToMonthView();
                    }else{
                        lv.challenges.chart.switchToYearView();
                    }
                }
            }

        });
    }
}

function adjustDataPointsTime(points) {
    var adjusted = [];
    $.each( points, function( key, point ) {
        var midDayTime = getMidDayTime(point.dateTime);
        var pointValue = point.value;
        console.log(getMidDayTime(point.dateTime))
        console.log(pointValue)
        adjusted.push({dateTime :getMidDayTime(point.dateTime), value: point.value});
    });
    return adjusted;
}

function loadChallengesChart() {
    $("#chartsContainer").hide();
    $chart = $("#chart");
    var imperialUnit = 'IMPERIAL_UNIT';
    var userMeasurementUnit = userMeasurementUnit;

    if ((isRegForChal === 'true') || (isOnHistoryDetailPage === 'true')) {
        var url = chalChartsGetDataURL;
        var id = chalID;
        var startDate = chalStartTime;
        var endDate = chalEndTime;
        var useImperial = (userMeasurementUnit == imperialUnit);
        showChart(url, id, startDate, endDate, useImperial);

        $("input[name=units]:radio").change(function () {
            var selectedMeasurementUnit = $("input[name=units]:checked").val();
            var useImperial = (selectedMeasurementUnit == 'IMPERIAL_UNIT');
            showChart(url, id, startDate, endDate, useImperial);
        });
    }
}

//show graph only after the page is fully loaded including images - This is for the graph to display in IE8
$(window).load(function () {
    if ($.browser.msie && $.browser.version <= 8){
        loadChallengesChart();
    }
});

//Android and safari browser not working with window.load so using document.ready instead
$(document).ready(function () {
    if (!($.browser.msie && $.browser.version <= 8)){
        loadChallengesChart();
    }
});var lv = lv || {};

$.extend(true, lv, {
    challenges:{
        getStartAndEndTime:function (challengeId) {
            return $.get('/startAndEndTime',
                {challengeId:challengeId});
        },
        chart:{
            VIEW_MODE:{
                WEEK:0,
                MONTH:1,
                YEAR:2
            },
            getWeekViewLabels:function($chartCurrentDate) {
                var result = [],
                    min = this.dateHelper.getMidDayTime($chart.data("startTime"));
                $chartCurrentDate.html('<h3> Week of ' + new Date(min).toString('dd MMMM') + '</h3>');

                for (var i = 0; i < 7; i++) {
                    var dateOffset = new Date(min).add(i).days(),
                        label = (new Date(dateOffset)).getDayName("ddd");

                    result.push([dateOffset.getTime(), label]);
                }

                return result;
            },
            getMonthViewLabels:function($chartCurrentDate) {
                var result = [],
                    min = this.dateHelper.getMidDayTime($chart.data("startTime")) ;

                $chartCurrentDate.html('<h3>' + new Date(min).toString('MMMM yyyy') + '</h3>');

                var slidingWindow = new Date(min),
                    initialMonth = slidingWindow.getMonth();

                while (slidingWindow.getMonth() == initialMonth) {
                    result.push([slidingWindow.getTime(), "Week " + slidingWindow.toString('dd/MM')]);
                    slidingWindow.add(7).days();
                }

                return result;
            },
            getYearViewLabels:function($chartCurrentDate) {
                var result = [],
                    min = this.dateHelper.getMidDayTime($chart.data("startTime"));

                $chartCurrentDate.html('<h3>' + new Date(min).toString('yyyy') + '</h3>');

                var slidingWindow = new Date(min),
                    initialYear = slidingWindow.getYear();

                while (slidingWindow.getYear() == initialYear) {
                    result.push([slidingWindow.getTime(), slidingWindow.toString('MMM')]);
                    slidingWindow.add(1).month();
                }

                return result;
            },
            plot:function () {
                var graphType = $chart.data("graphType");
                var useImperial = $chart.data("useImperial") ;
                var allSeries = this.getAllSeries(graphType);
                var options = $chart.data("chartConfigurator")($chart.data());
                var thePlot = $.plot($chart, allSeries , options);

                this.doShowYAxisLabel(thePlot, this.getYAxisLabel(graphType, useImperial));


                if (this.isGlucoseGraph(graphType)) {
                    this.doShowTargetLabel(thePlot, 12, "Healthy Zone");
                }

                this.doShowReadingsHeading(thePlot, graphType);
            },
            doShowYAxisLabel : function(plot, labelMessage) {
                var axes = plot.getAxes();
                var yAxisMidPoint = (axes.yaxis.min + axes.yaxis.max)/2.00;
                var o = plot.pointOffset({ x: axes.xaxis.min, y: yAxisMidPoint});
                if($.browser.msie && $.browser.version <= 8){     /* if IE 8 or below*/
                    $chart.append('<div class = "rotatedB4IE9" style="position:absolute;left:' + (-60) + 'px;top:' + o.top + 'px;color:#666;font-size:smaller">'+labelMessage+'</div>');
                } else {
                    $chart.append('<div class = "rotated" style="position:absolute;left:' + (-60) + 'px;top:' + o.top + 'px;color:#666;font-size:smaller">'+labelMessage+'</div>');
                }

            },
            doShowReadingsHeading: function(plot, graphType) {
                var o = plot.pointOffset({ x: plot.getAxes().xaxis.min, y:plot.getAxes().yaxis.min});
                var totalsUnit = this.getTotalsUnit(graphType);
                $chart.append('<div class="rotatedXAxisTitle" style="position:absolute;left:' + (o.left-53) + 'px;top:' + (o.top+15) + 'px;color:#666;font-size:11px">Total<br>'+totalsUnit+'</div>');
            },
            doShowTargetLabel: function(plot, targetMin, labelMessage) {
                var axes = plot.getAxes();
                var o = plot.pointOffset({ x: axes.xaxis.max, y: axes.yaxis.min});
                if($.browser.msie ){     /* if IE 8 or below*/
                    if ($.browser.version <= 8)  {
                        $chart.append('<div class = "rotatedB4IE9 idealRange" style="position:absolute;left:'+ (o.left+5) +'px;top:'+(o.top-145)+'px;color:#008000;font-size:smaller">'+labelMessage+'</div>');
                    }else {
                        $chart.append('<div class = "rotated idealRange" style="position:absolute;left:'+ (o.left-35) +'px;top:'+(o.top-109)+'px;color:#008000;font-size:smaller">'+labelMessage+'</div>');
                    }
                }
                else{
                    $chart.append('<div class = "rotated idealRange" style="position:absolute;left:'+ (o.left-35) +'px;top:'+(o.top - 109)+'px;color:#008000;font-size:smaller">'+labelMessage+'</div>');
                }
            }
            ,
            getYAxisLabel: function(graphType, useImperial) {
              if (this.isDistanceGraph(graphType) && useImperial ) {
                  return 'Distance (mi)';
              } else if (this.isDistanceGraph(graphType)) {
                  return 'Distance (km)';
              }
              else if (this.isGlucoseGraph(graphType)) {
                  return 'Glucose (mmol/L)';
              }else if (this.isFoodGraph(graphType)) {
                  return 'Meals';
              }else if (this.isWeightGraph(graphType) && useImperial ) {
                  return 'Weight (Lbs)';
              }else if (this.isWeightGraph(graphType) && !useImperial ) {
                  return 'Weight (Kgs)';
              }else if (this.isDistanceGraph(graphType)) {
                  return 'Weight (Kg)';
              }else if (this.isWorkoutTimeGraph(graphType)) {
                  return 'Time (seconds)';
              }else if (this.isDistanceMilesGraph(graphType)) {
                  return 'Distance (mi)';
              }
              else if (this.isStepsGraph(graphType)) {
                  return 'Number of Steps';
              }
              else if (this.isAsthmaGraph(graphType)) {
                  return 'Peak flow rate';
              }
            } ,
            getTotalsUnit: function(graphType) {
                if(this.isDistanceGraph(graphType)) {
                    return "workouts";
                }
                else if (this.isFoodGraph(graphType)) {
                    return "meals";
                }
                else if (this.isGlucoseGraph(graphType)) {
                    return "readings";
                }
                else if (this.isWeightGraph(graphType)) {
                    return "weight";
                }
                else if (this.isWorkoutTimeGraph(graphType)) {
                    return "workout<br />time";
                }
                else if (this.isDistanceMilesGraph(graphType)) {
                    return "miles";
                }
                else if (this.isStepsGraph(graphType)) {
                    return "steps";
                }
                else if (this.isAsthmaGraph(graphType)) {
                    return 'flow rate';
                }
            }
            ,
            isDistanceGraph: function(graphType) {
                return graphType === 'distanceBar' || graphType === 'distanceBar';
            },
            isGlucoseGraph: function(graphType) {
                return graphType === 'glucose';
            },
            isFoodGraph: function(graphType) {
                return graphType === 'food';
            },
            isWeightGraph: function(graphType) {
                return graphType === 'weight';
            },
            isWorkoutTimeGraph: function(graphType) {
                return graphType === 'workouttime';
            },
            isDistanceMilesGraph: function(graphType) {
                return graphType === 'distanceMilesBar';
            },
            isAsthmaGraph: function(graphType) {
                return graphType === 'asthma';
            },
            isStepsGraph: function(graphType){
                return graphType === 'stepsBar';
            },
            getAllSeries: function(graphType) {

                var chartLabels = this.getChartLabels();
                var allSeries = []; //each element is of the form {data:[[x1, y1], [x2, y2], ..., [xn,yn]]} or {data:[[x1, y1], [x2, y2], ..., [xn,yn]], points:{...}}

                var showNoDataSeries = { distanceBar : false,distanceLine : false,food:false, glucose:false, weight:false, workouttime:false, distanceMilesBar:false, asthma: false, stepsBar : false}[graphType] ;
                if (showNoDataSeries) {
                    allSeries.push(this.getNoDataSeries(chartLabels));
                }

                var showAggregateSteppingSeries = { distanceBar : false,distanceLine : false,food:true, glucose:false, weight:false, workouttime:false, distanceMilesBar:false, asthma: false, stepsBar:false}[graphType] ;
                if (showAggregateSteppingSeries) {
                    allSeries.push(this.getAggregateSteppingSeries(chartLabels));
                }

                var showAggregateSeries = { distanceBar : true,distanceLine : true,food:false, glucose:false, weight:false, workouttime:false, distanceMilesBar:true, asthma: false, stepsBar:true}[graphType] ;
                if(showAggregateSeries) {
                    allSeries.push(this.getAggregateSeries(chartLabels));
                }

                var showSeriesWithoutAggregation =  { distanceBar : false,distanceLine : false,food:false, glucose:true, weight:true, workouttime:true, distanceMilesBar:false, asthma: true, stepsBar:false}[graphType] ;
                if (showSeriesWithoutAggregation) {
                    allSeries.push(this.getPlainSeries(chartLabels));
                }

                return allSeries;
            },
            getChartLabelsOffsetFunction: function() {
                var currentViewMode = $chart.data("viewMode");

                var offsetFunction;

                if (currentViewMode == this.VIEW_MODE.WEEK) {
                    offsetFunction = "days";
                } else if (currentViewMode == this.VIEW_MODE.MONTH) {
                    offsetFunction = "weeks";
                } else {
                    offsetFunction = "months";
                }

                return offsetFunction;

            },
            getChartLabelsTimeFunction: function() {
                var currentViewMode = $chart.data("viewMode");

                var labelTimeFunction;

                if (currentViewMode == this.VIEW_MODE.WEEK) {
                    labelTimeFunction = "getWeekViewLabels";
                } else if (currentViewMode == this.VIEW_MODE.MONTH) {
                    labelTimeFunction = "getMonthViewLabels";
                } else {
                    labelTimeFunction = "getYearViewLabels";
                }

                return labelTimeFunction;

            }
            ,
            getChartLabels: function() {
                var labelTimeFunction = this.getChartLabelsTimeFunction();

                var chartLabels = this[labelTimeFunction]($("#chartCurrentDate"));

                return chartLabels;
            }
            ,
            getYAxisValuesForChartLabel:function(chartLabel) {
                var chartData = $chart.data("chartSeries")[0].data;
                var labelTime = new Date(chartLabel[0]),
                    labelTimeOffset = new Date(chartLabel[0]).add(1)[this.getChartLabelsOffsetFunction()]().add(-1).milliseconds();

                var yAxisValues = [];
                for (var k = 0; k < chartData.length; k++) {
                    var date = new Date(chartData[k][0]),
                        value = chartData[k][1];

                    if (date.between(labelTime, labelTimeOffset)) {
                        yAxisValues.push(value);
                    }
                }

                return yAxisValues;
            },
            getChartLabelsWithoutData: function(chartLabels) {
                var labelsWithoutData = [];
                var labelYAxisValues;
                for (var i = 0; i < chartLabels.length; i++) {
                    labelYAxisValues = this.getYAxisValuesForChartLabel(chartLabels[i]);
                    if ( labelYAxisValues.length == 0 ) {
                        labelsWithoutData.push(chartLabels[i]);
                    }
                }

            return labelsWithoutData;
            },
            getNoDataSeries : function(chartLabels) {
                var labelsWithoutData = this.getChartLabelsWithoutData(chartLabels);

                var dataPoints = [];
                $.each( labelsWithoutData, function( key, value ) {
                    dataPoints.push([value[0], 1]);
                });

                var series = {
                    data:dataPoints,
                    points: {
                        symbol:'image',
                        imgURL:lvContextRoot +'/resources/assets/images/challenges/cross_tick.png',
                        show:true
                    }
                };

                return series;
            },
            getPlainSeries : function(chartLabels) {
                var dataPoints = this.getDataPointsForChartLabels(chartLabels);

                var series = {data:dataPoints};

                return series;
            }
            ,
            getAggregateSeries: function(chartLabels) {
                var dataPoints = this.getAggregateDataPointsForChartLabels(chartLabels);
                var series = {data:dataPoints};
                return series;
            }
            ,
            getAggregateSteppingSeries: function(chartLabels) {
                var aggregateDataPoints = this.getAggregateDataPointsForChartLabels(chartLabels);
                var dataPoints = [];
                $.each( aggregateDataPoints, function( key, value ) {

                    for (var i =1; i <= value[1] ; i++) {
                        dataPoints.push([value[0], i]);
                    }

                });

                var series = {data:dataPoints};

                return series;
            }
            ,
            getDataPointsForChartLabels: function(chartLabels) {
                var result = [];
                var labelYAxisValues;
                for (var i = 0; i < chartLabels.length; i++) {
                    var labelTime = chartLabels[i][0];
                    labelYAxisValues = this.getYAxisValuesForChartLabel(chartLabels[i]);

                    $.each( labelYAxisValues, function( key, value ) {
                        result.push([labelTime, value]);
                    });

                }

                return result;
            }
            ,
            getAggregateDataPointsForChartLabels:function (chartLabels) {
                var result = [];
                var labelYAxisValues;
                for (var i = 0; i < chartLabels.length; i++) {
                    var labelTime = chartLabels[i][0];
                    labelYAxisValues = this.getYAxisValuesForChartLabel(chartLabels[i]);

                    var sum = 0;
                    $.each( labelYAxisValues, function( key, value ) {
                       sum = sum + value;
                    });

                    result.push([labelTime, sum]);
                }

                return result;
            },
            setTargetMarking:function (showTargetLine) {

                if(showTargetLine)  {
                    var from = $chart.data()["targetValue"];
                    var to = 1.2 * from;
                    $chart.data({
                        challengeTargetMarking:{
                            color:'#E4F5E2',
                            yaxis:{
                                from:from ,
                                to:to
                            }
                        }
                    });
                }

            }
            ,
            setStartMarking:function (startTime) {
                var chartWidth = 15000000;
                $chart.data({
                    challengeStartTime:startTime,
                    challengeStartMarking : {
                        color:'#88ff88',
                        xaxis:{
                            from:startTime - chartWidth / 2 ,
                            to:startTime + chartWidth / 2
                        }
                    }
                });

            },
            setEndMarking:function (endTime) {
                var chartWidth = 15000000;
                $chart.data({
                    challengeEndTime:endTime,
                    challengeEndMarking:{
                        color:'#ff8888',
                        xaxis:{
                            from:endTime - chartWidth / 2,
                            to:endTime + chartWidth / 2
                        }
                    }
                });
            },

            bindForMouseWheel:function($chart) {
                $chart.mousewheel(function (event) {
                    event.preventDefault();
                    var wheelDelta = event.originalEvent.wheelDelta,
                        wheelPushedForward = wheelDelta > 0;

                    if (wheelPushedForward)
                        lv.challenges.chart.switchToWeekView();
                    else
                        lv.challenges.chart.switchToMonthView();
                });
            },
            bindForDoubleClick:function($chart) {
            },
            bindForMouseDrag:function ($chart) {

            },
            bindForSelected:function (callback) {
                $chart.bind("plotselected", function (event, ranges) {
                    var data = $chart.data("chartSeries")[0].data,
                        selectedStartTime = ranges.xaxis.from,
                        selectedEndTime = ranges.xaxis.to;

                    var entries = [];

                    for (d in data) {
                        var dataTime = data[d][0];
                        if (dataTime > selectedStartTime && dataTime < selectedEndTime) {
                            entries.push(data[d]);
                        }
                    }

                    callback(selectedStartTime, selectedEndTime, entries);
                });
            },
            bindForTooltip:function (callback) {
                $chart.data("previousPoint", null);

                $chart.bind("plothover", function (event, pos, item) {
                    if (item) {
                        var previousPoint = $chart.data("previousPoint");

                        if (previousPoint != item.datapoint) {
                            previousPoint = item.datapoint;

                            $("#chartTooltip").remove();

                            var $element = $('<div id="chartTooltip">');

                            callback(item, $element);

                            $element.appendTo("body").fadeIn(200);
                        }
                    }
                    else {
                        $("#chartTooltip").remove();
                        $chart.data("previousPoint", null);
                    }
                });
            },
            setDateRange:function () {
                var currentTime = $chart.data("currentTime");

                if ($chart.data("viewMode") == this.VIEW_MODE.MONTH) {
                    $chart.data({
                        startTime:this.dateHelper.getMonthStart(currentTime),
                        endTime:this.dateHelper.getMonthEnd(currentTime)
                    });
                } else if ($chart.data("viewMode") == this.VIEW_MODE.YEAR) {
                    $chart.data({
                        startTime:this.dateHelper.getYearStart(currentTime),
                        endTime:this.dateHelper.getYearEnd(currentTime)
                    });
                } else {
                    $chart.data({
                        startTime:this.dateHelper.getWeekStart(currentTime),
                        endTime:this.dateHelper.getWeekEnd(currentTime)
                    });
                }

                this.plot();
            },
            pageBackward:function () {
                var viewMode = $chart.data("viewMode"),
                    currentTime = $chart.data("currentTime"),
                    startTimeBound = $chart.data("challengeStartTime");

                if (viewMode == this.VIEW_MODE.WEEK)
                    $chart.data("currentTime", this.dateHelper.getPreviousWeek(currentTime, startTimeBound));
                else if (viewMode == this.VIEW_MODE.MONTH)
                    $chart.data("currentTime", this.dateHelper.getPreviousMonth(currentTime, startTimeBound));

                this.setDateRange();

            },
            pageForward:function () {
                var viewMode = $chart.data("viewMode"),
                    currentTime = $chart.data("currentTime"),
                    endTimeBound = $chart.data("challengeEndTime");

                if (viewMode == this.VIEW_MODE.WEEK)
                    $chart.data("currentTime", this.dateHelper.getNextWeek(currentTime, endTimeBound));
                else if (viewMode == this.VIEW_MODE.MONTH)
                    $chart.data("currentTime", this.dateHelper.getNextMonth(currentTime, endTimeBound));

                this.setDateRange();
            },
            switchToWeekView:function () {
                this.setDateRange($chart.data("viewMode", this.VIEW_MODE.WEEK));
            },
            switchToMonthView:function () {
                console.log("testing lng...")
                this.setDateRange($chart.data("viewMode", this.VIEW_MODE.MONTH));
            },
            switchToYearView:function () {
                this.setDateRange($chart.data("viewMode", this.VIEW_MODE.YEAR));
            },
            dateHelper:{
                getYearStart: function (time) {
                    var d = new Date(time);

                    d.setMonth(0);
                    d.setDate(1);

                    return d;
                },
                getYearEnd: function (time) {
                    var d = new Date(time);

                    d.setMonth(11);
                    d.setDate(31);

                    return d;
                },
                getMonthStart:function (time) {
                    var d = new Date(time);

                    d.setDate(1);
                    d.setMonth(d.getMonth());

                    return d;
                },
                getMonthEnd:function (time) {
                    var d = new Date(time),
                        daysInMonth = new Date(d.getYear(), d.getMonth(), 0).getDate();

                    d.setDate(daysInMonth - 1);

                    return d;
                },
                getWeekStart:function (time) {
                    var date = new Date(time),
                        day = date.getDay(),
                        diff = date.getDate() - day + (day == 0 ? -6 : 1);

                    return (new Date(date.setDate(diff))).getTime();
                },
                getWeekEnd:function (time) {
                    var date = new Date(time),
                        day = date.getDay(),
                        diff = date.getDate() - day + (day == 0 ? -6 : 7);

                    return (new Date(date.setDate(diff))).getTime();
                },
                getPreviousWeek:function (time, startTimeBound) {
                    var previousWeek = (new Date(time)).add(-1).weeks();

                    return previousWeek <= startTimeBound ? startTimeBound : previousWeek;
                },
                getNextWeek:function (time, endTimeBound) {
                    var nextWeek = (new Date(time)).add(1).weeks();

                    return nextWeek >= endTimeBound ? endTimeBound : nextWeek;
                },
                getPreviousMonth:function (time, startTimeBound) {
                    var previousMonth = (new Date(time)).add(-1).months();

                    return previousMonth <= startTimeBound ? startTimeBound : previousMonth;
                },
                getNextMonth:function (time, endTimeBound) {
                    var nextMonth = (new Date(time)).add(1).months();

                    return nextMonth >= endTimeBound ? endTimeBound : nextMonth;
                } ,
                getStartOfDayTime: function (dateTime) {
                    var start = new Date(dateTime);
                    start.setHours(0,0,0,0);

                    return start.getTime();
                } ,
                getEndOfDayTime: function (dateTime) {
                    var end = new Date(dateTime);
                    end.setHours(23,59,59,999);

                    return end.getTime();
                },
                getMidDayTime: function (dateTime) {

                    var end = new Date(dateTime);
                    end.setHours(12,0,0,0);

                    return end.getTime();
                }
            }
        }
    }
});/*! Javascript plotting library for jQuery, v. 0.7.
 *
 * Released under the MIT license by IOLA, December 2007.
 *
 */

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 * 
 * Version 1.1.
 * 
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function(B){B.color={};B.color.make=function(F,E,C,D){var G={};G.r=F||0;G.g=E||0;G.b=C||0;G.a=D!=null?D:1;G.add=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]+=I}return G.normalize()};G.scale=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]*=I}return G.normalize()};G.toString=function(){if(G.a>=1){return"rgb("+[G.r,G.g,G.b].join(",")+")"}else{return"rgba("+[G.r,G.g,G.b,G.a].join(",")+")"}};G.normalize=function(){function H(J,K,I){return K<J?J:(K>I?I:K)}G.r=H(0,parseInt(G.r),255);G.g=H(0,parseInt(G.g),255);G.b=H(0,parseInt(G.b),255);G.a=H(0,G.a,1);return G};G.clone=function(){return B.color.make(G.r,G.b,G.g,G.a)};return G.normalize()};B.color.extract=function(D,C){var E;do{E=D.css(C).toLowerCase();if(E!=""&&E!="transparent"){break}D=D.parent()}while(!B.nodeName(D.get(0),"body"));if(E=="rgba(0, 0, 0, 0)"){E="transparent"}return B.color.parse(E)};B.color.parse=function(F){var E,C=B.color.make;if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10))}if(E=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10),parseFloat(E[4]))}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55)}if(E=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55,parseFloat(E[4]))}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return C(parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16))}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return C(parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16))}var D=B.trim(F).toLowerCase();if(D=="transparent"){return C(255,255,255,0)}else{E=A[D]||[0,0,0];return C(E[0],E[1],E[2])}};var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {
    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85 // set to 0 to avoid background
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync

                    // mode specific options
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: 3, // number or [number, "unit"]
                    monthNames: null, // list of names of months
                    timeformat: null, // format string to use
                    twelveHourClock: false // 12 or 24 time in time mode
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled 
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // or "center" 
                        horizontal: false
                    },
                    shadowSize: 3
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                hooks: {}
            },
            canvas = null,      // the canvas for the plot itself
            overlay = null,     // canvas for interactive stuff on top of plot
            eventHolder = null, // jQuery object that events should be bound to
            ctx = null, octx = null,
            xaxes = [], yaxes = [],
            plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
            canvasWidth = 0, canvasHeight = 0,
            plotWidth = 0, plotHeight = 0,
            hooks = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return canvas; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top)
            };
        };
        plot.shutdown = shutdown;
        plot.resize = function () {
            getCanvasDimensions();
            resizeCanvas(canvas);
            resizeCanvas(overlay);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        //setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {
            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {
            var i;

            $.extend(true, options, opts);

            if (options.xaxis.color == null)
                options.xaxis.color = options.grid.color;
            if (options.yaxis.color == null)
                options.yaxis.color = options.grid.color;

            if (options.xaxis.tickColor == null) // backwards-compatibility
                options.xaxis.tickColor = options.grid.tickColor;
            if (options.yaxis.tickColor == null) // backwards-compatibility
                options.yaxis.tickColor = options.grid.tickColor;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // fill in defaults in axes, copy at least always the
            // first as the rest of the code assumes it'll be there
            for (i = 0; i < Math.max(1, options.xaxes.length); ++i)
                options.xaxes[i] = $.extend(true, {}, options.xaxis, options.xaxes[i]);
            for (i = 0; i < Math.max(1, options.yaxes.length); ++i)
                options.yaxes[i] = $.extend(true, {}, options.yaxis, options.yaxes[i]);

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes 
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {
            var i;

            // collect what we already got of colors
            var neededColors = series.length,
                usedColors = [],
                assignedColors = [];
            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    --neededColors;
                    if (typeof sc == "number")
                        assignedColors.push(sc);
                    else
                        usedColors.push($.color.parse(series[i].color));
                }
            }

            // we might need to generate more colors if higher indices
            // are assigned
            for (i = 0; i < assignedColors.length; ++i) {
                neededColors = Math.max(neededColors, assignedColors[i] + 1);
            }

            // produce colors as needed
            var colors = [], variation = 0;
            i = 0;
            while (colors.length < neededColors) {
                var c;
                if (options.colors.length == i) // check degenerate case
                    c = $.color.make(100, 100, 100);
                else
                    c = $.color.parse(options.colors[i]);

                // vary color if needed
                var sign = variation % 2 == 1 ? -1 : 1;
                c.scale('rgb', 1 + sign * Math.ceil(variation / 2) * 0.2)

                // FIXME: if we're getting to close to something else,
                // we should probably skip this one
                colors.push(c);

                ++i;
                if (i >= options.colors.length) {
                    i = 0;
                    ++variation;
                }
            }

            // fill in the options
            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                var data = s.data, format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        format.push({ y: true, number: true, required: false, defaultValue: 0 });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.x)
                                    updateAxis(s.xaxis, val, val);
                                if (f.y)
                                    updateAxis(s.yaxis, val, val);
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points,
                    ps = s.datapoints.pointsize;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta = s.bars.align == "left" ? 0 : -s.bars.barWidth/2;
                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function makeCanvas(skipPositioning, cls) {
            var c = document.createElement('canvas');
            c.className = cls;
            c.width = canvasWidth;
            c.height = canvasHeight;

            if (!skipPositioning)
                $(c).css({ position: 'absolute', left: 0, top: 0 });

            $(c).appendTo(placeholder);

            if (!c.getContext) // excanvas hack
                c = window.G_vmlCanvasManager.initElement(c);

            // used for resetting in case we get replotted
            c.getContext("2d").save();

            return c;
        }

        function getCanvasDimensions() {
            canvasWidth = placeholder.width();
            canvasHeight = placeholder.height();

            if (canvasWidth <= 0 || canvasHeight <= 0)
                throw "Invalid dimensions for plot, width = " + canvasWidth + ", height = " + canvasHeight;
        }

        function resizeCanvas(c) {
            // resizing should reset the state (excanvas seems to be
            // buggy though)
            if (c.width != canvasWidth)
                c.width = canvasWidth;

            if (c.height != canvasHeight)
                c.height = canvasHeight;

            // so try to get back to the initial state (even if it's
            // gone now, this should be safe according to the spec)
            var cctx = c.getContext("2d");
            cctx.restore();

            // and save again
            cctx.save();
        }

        function setupCanvases() {
            var reused,
                existingCanvas = placeholder.children("canvas.base"),
                existingOverlay = placeholder.children("canvas.overlay");

            if (existingCanvas.length == 0 || existingOverlay == 0) {
                // init everything

                placeholder.html(""); // make sure placeholder is clear

                placeholder.css({ padding: 0 }); // padding messes up the positioning

                if (placeholder.css("position") == 'static')
                    placeholder.css("position", "relative"); // for positioning labels and overlay

                getCanvasDimensions();

                canvas = makeCanvas(true, "base");
                overlay = makeCanvas(false, "overlay"); // overlay canvas for interactive features

                reused = false;
            }
            else {
                // reuse existing elements

                canvas = existingCanvas.get(0);
                overlay = existingOverlay.get(0);

                reused = true;
            }

            ctx = canvas.getContext("2d");
            octx = overlay.getContext("2d");

            // we include the canvas in the event holder too, because IE 7
            // sometimes has trouble with the stacking order
            eventHolder = $([overlay, canvas]);

            if (reused) {
                // run shutdown in the old plot object
                placeholder.data("plot").shutdown();

                // reset reused canvases
                plot.resize();

                // make sure overlay pixels are cleared (canvas is cleared when we redraw)
                octx.clearRect(0, 0, canvasWidth, canvasHeight);

                // then whack any remaining obvious garbage left
                eventHolder.unbind();
                placeholder.children().not([canvas, overlay]).remove();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);
                eventHolder.mouseleave(onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {
            console.log("AAAAAAAAAAAAAAAAAA")
            var opts = axis.options, i, ticks = axis.ticks || [], labels = [],
                l, w = opts.labelWidth, h = opts.labelHeight, dummyDiv;

            function makeDummyDiv(labels, width) {
                return $('<div style="position:absolute;top:-10000px;' + width + 'font-size:smaller">' +
                    '<div class="' + axis.direction + 'Axis ' + axis.direction + axis.n + 'Axis">'
                    + labels.join("") + '</div></div>')
                    .appendTo(placeholder);
            }

            if (axis.direction == "x") {
                // to avoid measuring the widths of the labels (it's slow), we
                // construct fixed-size boxes and put the labels inside
                // them, we don't need the exact figures and the
                // fixed-size box content is easy to center
                if (w == null)
                    w = Math.floor(canvasWidth / (ticks.length > 0 ? ticks.length : 1));

                // measure x label heights
                if (h == null) {
                    labels = [];
                    for (i = 0; i < ticks.length; ++i) {
                        l = ticks[i].label;
                        if (l)

            console.log("BBBBBBBBBBB" + i)
                            labels.push('<div class="tickLabel" style="float:left;width:' + w + 'px"> <h4>' + l + '</h4> </div>');
                    }

                    if (labels.length > 0) {
                        // stick them all in the same div and measure
                        // collective height
                        labels.push('<div style="clear:left"></div>');
                        dummyDiv = makeDummyDiv(labels, "width:10000px;");
                        h = dummyDiv.height();
                        dummyDiv.remove();
                    }
                }
            }
            else if (w == null || h == null) {
                // calculate y label dimensions
                for (i = 0; i < ticks.length; ++i) {
                    l = ticks[i].label;
                    if (l)
            console.log("CCCCCCCCCCCCCCC" + i)
                        labels.push('<div class="tickLabel"><h4>' + l + '</h4></div>');
                }

                if (labels.length > 0) {
                    dummyDiv = makeDummyDiv(labels, "");
                    if (w == null)
                        w = dummyDiv.children().width();
                    if (h == null)
            console.log("DDDDDDDDDDDD")
                        h = dummyDiv.find("div.tickLabel").height();
                    dummyDiv.remove();
                }
            }

            if (w == null)
                w = 0;
            if (h == null)
                h = 0;

            axis.labelWidth = w;
            axis.labelHeight = h;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                tickLength = axis.options.tickLength,
                axismargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                all = axis.direction == "x" ? xaxes : yaxes,
                index;

            // determine axis margin
            var samePosition = $.grep(all, function (a) {
                return a && a.options.position == pos && a.reserveSpace;
            });
            if ($.inArray(axis, samePosition) == samePosition.length - 1)
                axismargin = 0; // outermost

            // determine tick length - if we're innermost, we can use "full"
            if (tickLength == null)
                tickLength = "full";

            var sameDirection = $.grep(all, function (a) {
                return a && a.reserveSpace;
            });

            var innermost = $.inArray(axis, sameDirection) == 0;
            if (!innermost && tickLength == "full")
                tickLength = 5;

            if (!isNaN(+tickLength))
                padding += +tickLength;

            // compute box
            if (axis.direction == "x") {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axismargin;
                    axis.box = { top: canvasHeight - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axismargin, height: lh };
                    plotOffset.top += lh + axismargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axismargin, width: lw };
                    plotOffset.left += lw + axismargin;
                }
                else {
                    plotOffset.right += lw + axismargin;
                    axis.box = { left: canvasWidth - plotOffset.right, width: lw };
                }
            }

            // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // set remaining bounding box coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left;
                axis.box.width = plotWidth;
            }
            else {
                axis.box.top = plotOffset.top;
                axis.box.height = plotHeight;
            }
        }

        function setupGrid() {
            var i, axes = allAxes();

            // first calculate the plot and axis box dimensions

            $.each(axes, function (_, axis) {
                axis.show = axis.options.show;
                if (axis.show == null)
                    axis.show = axis.used; // by default an axis is visible if it's got data

                axis.reserveSpace = axis.show || axis.options.reserveSpace;

                setRange(axis);
            });

            allocatedAxes = $.grep(axes, function (axis) { return axis.reserveSpace; });

            plotOffset.left = plotOffset.right = plotOffset.top = plotOffset.bottom = 0;
            if (options.grid.show) {
                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);

                    // find labelWidth/Height for axis
            console.log("EEEEEEEEEEEEE")
                    measureTickLabels(axis);
                });

                // with all dimensions in house, we can compute the
                // axis boxes, start from the outside (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                var minMargin = options.grid.minBorderMargin;
                if (minMargin == null) {
                    minMargin = 0;
                    for (i = 0; i < series.length; ++i)
                        minMargin = Math.max(minMargin, series[i].points.radius + series[i].points.lineWidth/2);
                }

                for (var a in plotOffset) {
                    plotOffset[a] += options.grid.borderWidth;
                    plotOffset[a] = Math.max(minMargin, plotOffset[a]);
                }
            }

            plotWidth = canvasWidth - plotOffset.left - plotOffset.right;
            plotHeight = canvasHeight - plotOffset.bottom - plotOffset.top;

            // now we got the proper plotWidth/Height, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (options.grid.show) {
                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });

                insertAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
            // heuristic based on the model a*sqrt(x) fitted to
            // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? canvasWidth : canvasHeight);

            var delta = (axis.max - axis.min) / noTicks,
                size, generator, unit, formatter, i, magn, norm;

            if (opts.mode == "time") {
                // pretty handling of time

                // map of app. size of time units in milliseconds
                var timeUnitSize = {
                    "second": 1000,
                    "minute": 60 * 1000,
                    "hour": 60 * 60 * 1000,
                    "day": 24 * 60 * 60 * 1000,
                    "month": 30 * 24 * 60 * 60 * 1000,
                    "year": 365.2425 * 24 * 60 * 60 * 1000
                };


                // the allowed tick sizes, after 1 year we use
                // an integer algorithm
                var spec = [
                    [1, "second"], [2, "second"], [5, "second"], [10, "second"],
                    [30, "second"],
                    [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
                    [30, "minute"],
                    [1, "hour"], [2, "hour"], [4, "hour"],
                    [8, "hour"], [12, "hour"],
                    [1, "day"], [2, "day"], [3, "day"],
                    [0.25, "month"], [0.5, "month"], [1, "month"],
                    [2, "month"], [3, "month"], [6, "month"],
                    [1, "year"]
                ];

                var minSize = 0;
                if (opts.minTickSize != null) {
                    if (typeof opts.tickSize == "number")
                        minSize = opts.tickSize;
                    else
                        minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
                }

                for (var i = 0; i < spec.length - 1; ++i)
                    if (delta < (spec[i][0] * timeUnitSize[spec[i][1]]
                        + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
                        && spec[i][0] * timeUnitSize[spec[i][1]] >= minSize)
                        break;
                size = spec[i][0];
                unit = spec[i][1];

                // special-case the possibility of several years
                if (unit == "year") {
                    magn = Math.pow(10, Math.floor(Math.log(delta / timeUnitSize.year) / Math.LN10));
                    norm = (delta / timeUnitSize.year) / magn;
                    if (norm < 1.5)
                        size = 1;
                    else if (norm < 3)
                        size = 2;
                    else if (norm < 7.5)
                        size = 5;
                    else
                        size = 10;

                    size *= magn;
                }

                axis.tickSize = opts.tickSize || [size, unit];

                generator = function(axis) {
                    var ticks = [],
                        tickSize = axis.tickSize[0], unit = axis.tickSize[1],
                        d = new Date(axis.min);

                    var step = tickSize * timeUnitSize[unit];

                    if (unit == "second")
                        d.setUTCSeconds(floorInBase(d.getUTCSeconds(), tickSize));
                    if (unit == "minute")
                        d.setUTCMinutes(floorInBase(d.getUTCMinutes(), tickSize));
                    if (unit == "hour")
                        d.setUTCHours(floorInBase(d.getUTCHours(), tickSize));
                    if (unit == "month")
                        d.setUTCMonth(floorInBase(d.getUTCMonth(), tickSize));
                    if (unit == "year")
                        d.setUTCFullYear(floorInBase(d.getUTCFullYear(), tickSize));

                    // reset smaller components
                    d.setUTCMilliseconds(0);
                    if (step >= timeUnitSize.minute)
                        d.setUTCSeconds(0);
                    if (step >= timeUnitSize.hour)
                        d.setUTCMinutes(0);
                    if (step >= timeUnitSize.day)
                        d.setUTCHours(0);
                    if (step >= timeUnitSize.day * 4)
                        d.setUTCDate(1);
                    if (step >= timeUnitSize.year)
                        d.setUTCMonth(0);


                    var carry = 0, v = Number.NaN, prev;
                    do {
                        prev = v;
                        v = d.getTime();
                        ticks.push(v);
                        if (unit == "month") {
                            if (tickSize < 1) {
                                // a bit complicated - we'll divide the month
                                // up but we need to take care of fractions
                                // so we don't end up in the middle of a day
                                d.setUTCDate(1);
                                var start = d.getTime();
                                d.setUTCMonth(d.getUTCMonth() + 1);
                                var end = d.getTime();
                                d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
                                carry = d.getUTCHours();
                                d.setUTCHours(0);
                            }
                            else
                                d.setUTCMonth(d.getUTCMonth() + tickSize);
                        }
                        else if (unit == "year") {
                            d.setUTCFullYear(d.getUTCFullYear() + tickSize);
                        }
                        else
                            d.setTime(v + step);
                    } while (v < axis.max && v != prev);

                    return ticks;
                };

                formatter = function (v, axis) {
                    var d = new Date(v);

                    // first check global format
                    if (opts.timeformat != null)
                        return $.plot.formatDate(d, opts.timeformat, opts.monthNames);

                    var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
                    var span = axis.max - axis.min;
                    var suffix = (opts.twelveHourClock) ? " %p" : "";

                    if (t < timeUnitSize.minute)
                        fmt = "%h:%M:%S" + suffix;
                    else if (t < timeUnitSize.day) {
                        if (span < 2 * timeUnitSize.day)
                            fmt = "%h:%M" + suffix;
                        else
                            fmt = "%b %d %h:%M" + suffix;
                    }
                    else if (t < timeUnitSize.month)
                        fmt = "%b %d";
                    else if (t < timeUnitSize.year) {
                        if (span < timeUnitSize.year)
                            fmt = "%b";
                        else
                            fmt = "%b %y";
                    }
                    else
                        fmt = "%y";

                    return $.plot.formatDate(d, fmt, opts.monthNames);
                };
            }
            else {
                // pretty rounding of base-10 numbers
                var maxDec = opts.tickDecimals;
                var dec = -Math.floor(Math.log(delta) / Math.LN10);
                if (maxDec != null && dec > maxDec)
                    dec = maxDec;

                magn = Math.pow(10, -dec);
                norm = delta / magn; // norm is between 1.0 and 10.0

                if (norm < 1.5)
                    size = 1;
                else if (norm < 3) {
                    size = 2;
                    // special case for 2.5, requires an extra decimal
                    if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                        size = 2.5;
                        ++dec;
                    }
                }
                else if (norm < 7.5)
                    size = 5;
                else
                    size = 10;

                size *= magn;

                if (opts.minTickSize != null && size < opts.minTickSize)
                    size = opts.minTickSize;

                axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
                axis.tickSize = opts.tickSize || size;

                generator = function (axis) {
                    var ticks = [];

                    // spew out all possible ticks
                    var start = floorInBase(axis.min, axis.tickSize),
                        i = 0, v = Number.NaN, prev;
                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

                formatter = function (v, axis) {
                    return v.toFixed(axis.tickDecimals);
                };
            }

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = generator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    generator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (axis.mode != "time" && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(delta) / Math.LN10) + 1),
                            ts = generator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }

            axis.tickGenerator = generator;
            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };
            else
                axis.tickFormatter = formatter;
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                // generate the ticks
                    ticks = oticks({ min: axis.min, max: axis.max });
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData)
                drawGrid();

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData)
                drawGrid();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    var axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    if (xrange.from == xrange.to && yrange.from == yrange.to)
                        continue;

                    // then draw
                    xrange.from = xrange.axis.p2c(xrange.from);
                    xrange.to = xrange.axis.p2c(xrange.to);
                    yrange.from = yrange.axis.p2c(yrange.from);
                    yrange.to = yrange.axis.p2c(yrange.to);

                    if (xrange.from == xrange.to || yrange.from == yrange.to) {
                        // draw line
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = m.lineWidth || options.grid.markingsLineWidth;
                        ctx.moveTo(xrange.from, yrange.from);
                        ctx.lineTo(xrange.to, yrange.to);
                        ctx.stroke();
                    }
                    else {
                        // fill area
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                            xrange.to - xrange.from,
                            yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            var axes = allAxes(), bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue

                ctx.strokeStyle = axis.options.tickColor || $.color.parse(axis.options.color).scale('a', 0.22).toString();
                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth;
                    else
                        yoff = plotHeight;

                    if (ctx.lineWidth == 1) {
                        x = Math.floor(x) + 0.5;
                        y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks
                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full" && bw > 0
                        && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                ctx.lineWidth = bw;
                ctx.strokeStyle = options.grid.borderColor;
                ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
            }

            ctx.restore();
        }

        function insertAxisLabels() {
            console.log("FFFFFFFFFFFFFFF")
            placeholder.find(".tickLabels").remove();

            console.log("GGGGGGGGGGGGG")
            var html = ['<div class="tickLabels" style="font-size:smaller">'];

            var axes = allAxes();
            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box;
                if (!axis.show)
                    continue;
                //debug: html.push('<div style="position:absolute;opacity:0.10;background-color:red;left:' + box.left + 'px;top:' + box.top + 'px;width:' + box.width +  'px;height:' + box.height + 'px"></div>')
                html.push('<div class="' + axis.direction + 'Axis ' + axis.direction + axis.n + 'Axis" style="color:' + axis.options.color + '">');
                for (var i = 0; i < axis.ticks.length; ++i) {
                    var tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    var pos = {}, align;

                    if (axis.direction == "x") {
                        align = "center";
                        pos.left = Math.round(plotOffset.left + axis.p2c(tick.v) - axis.labelWidth/2);
                        if (axis.position == "bottom")
                            pos.top = box.top + box.padding;
                        else
                            pos.bottom = canvasHeight - (box.top + box.height - box.padding);
                    }
                    else {
                        pos.top = Math.round(plotOffset.top + axis.p2c(tick.v) - axis.labelHeight/2);
                        if (axis.position == "left") {
                            pos.right = canvasWidth - (box.left + box.width - box.padding)
                            align = "right";
                        }
                        else {
                            pos.left = box.left + box.padding;
                            align = "left";
                        }
                    }

                    pos.width = axis.labelWidth;

                    var style = ["position:absolute", "text-align:" + align ];
                    for (var a in pos)
                        style.push(a + ":" + pos[a] + "px")

            console.log("HHHHHHHHHHHHH" +a)
                    html.push('<div class="tickLabel" style="' + style.join(';') + '"><h4>' + tick.label + '</h4></div>');
                }
                html.push('</div>');
            }

            html.push('</div>');

            placeholder.append(html.join(""));
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;
            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                    series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                    series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                getFillStyle(series.points, series.color), 0, false,
                series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, offset, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.beginPath();
                c.moveTo(left, bottom);
                c.lineTo(left, top);
                c.lineTo(right, top);
                c.lineTo(right, bottom);
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fill();
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom + offset);
                if (drawLeft)
                    c.lineTo(left, top + offset);
                else
                    c.moveTo(left, top + offset);
                if (drawTop)
                    c.lineTo(right, top + offset);
                else
                    c.moveTo(right, top + offset);
                if (drawRight)
                    c.lineTo(right, bottom + offset);
                else
                    c.moveTo(right, bottom + offset);
                if (drawBottom)
                    c.lineTo(left, bottom + offset);
                else
                    c.moveTo(left, bottom + offset);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, offset, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, offset, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;
            var barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;
            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, 0, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {
            placeholder.find(".legend").remove();

            if (!options.legend.show)
                return;

            var fragments = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;
            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                label = s.label;
                if (!label)
                    continue;

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                if (lf)
                    label = lf(label, s);

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + s.color + ';overflow:hidden"></div></div></td>' +
                        '<td class="legendLabel">' + label + '</td>');
            }
            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    ps = s.datapoints.pointsize,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby
                    var barLeft = s.bars.align == "left" ? 0 : -s.bars.barWidth/2,
                        barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                                my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                                my >= Math.min(b, y) && my <= Math.max(b, y)))
                            item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                    dataIndex: j,
                    series: series[i],
                    seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                    function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                    function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
                pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                            h.point[0] == item.datapoint[0] &&
                            h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, 30);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            octx.clearRect(0, 0, canvasWidth, canvasHeight);
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number")
                point = s.data[point];

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis;

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = $.color.parse(series.color).scale('a', 0.5).toString();
            var radius = 1.5 * pointRadius,
                x = axisx.p2c(x),
                y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = $.color.parse(series.color).scale('a', 0.5).toString();
            var fillStyle = $.color.parse(series.color).scale('a', 0.5).toString();
            var barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;
            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                0, function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness)
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.7";

    $.plot.plugins = [];

    // returns a string with the date d formatted according to fmt
    $.plot.formatDate = function(d, fmt, monthNames) {
        var leftPad = function(n) {
            n = "" + n;
            return n.length == 1 ? "0" + n : n;
        };

        var r = [];
        var escape = false, padNext = false;
        var hours = d.getUTCHours();
        var isAM = hours < 12;
        if (monthNames == null)
            monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if (fmt.search(/%p|%P/) != -1) {
            if (hours > 12) {
                hours = hours - 12;
            } else if (hours == 0) {
                hours = 12;
            }
        }
        for (var i = 0; i < fmt.length; ++i) {
            var c = fmt.charAt(i);

            if (escape) {
                switch (c) {
                    case 'h': c = "" + hours; break;
                    case 'H': c = leftPad(hours); break;
                    case 'M': c = leftPad(d.getUTCMinutes()); break;
                    case 'S': c = leftPad(d.getUTCSeconds()); break;
                    case 'd': c = "" + d.getUTCDate(); break;
                    case 'm': c = "" + (d.getUTCMonth() + 1); break;
                    case 'y': c = "" + d.getUTCFullYear(); break;
                    case 'b': c = "" + monthNames[d.getUTCMonth()]; break;
                    case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
                    case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
                    case '0': c = ""; padNext = true; break;
                }
                if (c && padNext) {
                    c = leftPad(c);
                    padNext = false;
                }
                r.push(c);
                if (!padNext)
                    escape = false;
            }
            else {
                if (c == "%")
                    escape = true;
                else
                    r.push(c);
            }
        }
        return r.join("");
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);
(function ($) {
    function processRawData(plot, series, datapoints) {


        var handlers = {
            image: function (ctx, x, y, radius, shadow) {
                var plotOffset = plot.getPlotOffset();

                ctx.moveTo(x, y);

                var img = new Image();

                img.onload = function () {
                    var xOffset = x + plotOffset.left - img.width / 2,
                        yOffset = y + plotOffset.top - img.height / 2;
                    ctx.drawImage(img, xOffset, yOffset);
                }

                img.src = imgURL;
            }
        }

        var s = series.points.symbol,
            imgURL = series.points.imgURL;


        if (handlers[s])
            series.points.symbol = handlers[s];
    }

    function init(plot) {
        plot.hooks.processDatapoints.push(processRawData);
    }

    $.plot.plugins.push({
        init: init,
        name: 'imageSymbol',
        version: '1.0'
    });
})(jQuery);
/*
Flot plugin for stacking data sets, i.e. putting them on top of each
other, for accumulative graphs.

The plugin assumes the data is sorted on x (or y if stacking
horizontally). For line charts, it is assumed that if a line has an
undefined gap (from a null point), then the line above it should have
the same gap - insert zeros instead of "null" if you want another
behaviour. This also holds for the start and end of the chart. Note
that stacking a mix of positive and negative values in most instances
doesn't make sense (so it looks weird).

Two or more series are stacked when their "stack" attribute is set to
the same key (which can be any number or string or just "true"). To
specify the default stack, you can set

  series: {
    stack: null or true or key (number/string)
  }

or specify it for a specific series

  $.plot($("#placeholder"), [{ data: [ ... ], stack: true }])
  
The stacking order is determined by the order of the data series in
the array (later series end up on top of the previous).

Internally, the plugin modifies the datapoints in each series, adding
an offset to the y value. For line series, extra data points are
inserted through interpolation. If there's a second y value, it's also
adjusted (e.g for bar charts or filled areas).
*/

(function ($) {
    var options = {
        series: { stack: null } // or number/string
    };
    
    function init(plot) {
        function findMatchingSeries(s, allseries) {
            var res = null
            for (var i = 0; i < allseries.length; ++i) {
                if (s == allseries[i])
                    break;
                
                if (allseries[i].stack == s.stack)
                    res = allseries[i];
            }
            
            return res;
        }
        
        function stackData(plot, s, datapoints) {
            if (s.stack == null)
                return;

            var other = findMatchingSeries(s, plot.getData());
            if (!other)
                return;

            var ps = datapoints.pointsize,
                points = datapoints.points,
                otherps = other.datapoints.pointsize,
                otherpoints = other.datapoints.points,
                newpoints = [],
                px, py, intery, qx, qy, bottom,
                withlines = s.lines.show,
                horizontal = s.bars.horizontal,
                withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y),
                withsteps = withlines && s.lines.steps,
                fromgap = true,
                keyOffset = horizontal ? 1 : 0,
                accumulateOffset = horizontal ? 0 : 1,
                i = 0, j = 0, l;

            while (true) {
                if (i >= points.length)
                    break;

                l = newpoints.length;

                if (points[i] == null) {
                    // copy gaps
                    for (m = 0; m < ps; ++m)
                        newpoints.push(points[i + m]);
                    i += ps;
                }
                else if (j >= otherpoints.length) {
                    // for lines, we can't use the rest of the points
                    if (!withlines) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                    }
                    i += ps;
                }
                else if (otherpoints[j] == null) {
                    // oops, got a gap
                    for (m = 0; m < ps; ++m)
                        newpoints.push(null);
                    fromgap = true;
                    j += otherps;
                }
                else {
                    // cases where we actually got two points
                    px = points[i + keyOffset];
                    py = points[i + accumulateOffset];
                    qx = otherpoints[j + keyOffset];
                    qy = otherpoints[j + accumulateOffset];
                    bottom = 0;

                    if (px == qx) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);

                        newpoints[l + accumulateOffset] += qy;
                        bottom = qy;
                        
                        i += ps;
                        j += otherps;
                    }
                    else if (px > qx) {
                        // we got past point below, might need to
                        // insert interpolated extra point
                        if (withlines && i > 0 && points[i - ps] != null) {
                            intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
                            newpoints.push(qx);
                            newpoints.push(intery + qy);
                            for (m = 2; m < ps; ++m)
                                newpoints.push(points[i + m]);
                            bottom = qy; 
                        }

                        j += otherps;
                    }
                    else { // px < qx
                        if (fromgap && withlines) {
                            // if we come from a gap, we just skip this point
                            i += ps;
                            continue;
                        }
                            
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                        
                        // we might be able to interpolate a point below,
                        // this can give us a better y
                        if (withlines && j > 0 && otherpoints[j - otherps] != null)
                            bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);

                        newpoints[l + accumulateOffset] += bottom;
                        
                        i += ps;
                    }

                    fromgap = false;
                    
                    if (l != newpoints.length && withbottom)
                        newpoints[l + 2] += bottom;
                }

                // maintain the line steps invariant
                if (withsteps && l != newpoints.length && l > 0
                    && newpoints[l] != null
                    && newpoints[l] != newpoints[l - ps]
                    && newpoints[l + 1] != newpoints[l - ps + 1]) {
                    for (m = 0; m < ps; ++m)
                        newpoints[l + ps + m] = newpoints[l + m];
                    newpoints[l + 1] = newpoints[l - ps + 1];
                }
            }

            datapoints.points = newpoints;
        }
        
        plot.hooks.processDatapoints.push(stackData);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'stack',
        version: '1.2'
    });
})(jQuery);
/*
Flot plugin for selecting regions.

The plugin defines the following options:

  selection: {
    mode: null or "x" or "y" or "xy",
    color: color
  }

Selection support is enabled by setting the mode to one of "x", "y" or
"xy". In "x" mode, the user will only be able to specify the x range,
similarly for "y" mode. For "xy", the selection becomes a rectangle
where both ranges can be specified. "color" is color of the selection
(if you need to change the color later on, you can get to it with
plot.getOptions().selection.color).

When selection support is enabled, a "plotselected" event will be
emitted on the DOM element you passed into the plot function. The
event handler gets a parameter with the ranges selected on the axes,
like this:

  placeholder.bind("plotselected", function(event, ranges) {
    alert("You selected " + ranges.xaxis.from + " to " + ranges.xaxis.to)
    // similar for yaxis - with multiple axes, the extra ones are in
    // x2axis, x3axis, ...
  });

The "plotselected" event is only fired when the user has finished
making the selection. A "plotselecting" event is fired during the
process with the same parameters as the "plotselected" event, in case
you want to know what's happening while it's happening,

A "plotunselected" event with no arguments is emitted when the user
clicks the mouse to remove the selection.

The plugin allso adds the following methods to the plot object:

- setSelection(ranges, preventEvent)

  Set the selection rectangle. The passed in ranges is on the same
  form as returned in the "plotselected" event. If the selection mode
  is "x", you should put in either an xaxis range, if the mode is "y"
  you need to put in an yaxis range and both xaxis and yaxis if the
  selection mode is "xy", like this:

    setSelection({ xaxis: { from: 0, to: 10 }, yaxis: { from: 40, to: 60 } });

  setSelection will trigger the "plotselected" event when called. If
  you don't want that to happen, e.g. if you're inside a
  "plotselected" handler, pass true as the second parameter. If you
  are using multiple axes, you can specify the ranges on any of those,
  e.g. as x2axis/x3axis/... instead of xaxis, the plugin picks the
  first one it sees.
  
- clearSelection(preventEvent)

  Clear the selection rectangle. Pass in true to avoid getting a
  "plotunselected" event.

- getSelection()

  Returns the current selection in the same format as the
  "plotselected" event. If there's currently no selection, the
  function returns null.

*/

(function ($) {
    function init(plot) {
        var selection = {
                first: { x: -1, y: -1}, second: { x: -1, y: -1},
                show: false,
                active: false
            };

        // FIXME: The drag handling implemented here should be
        // abstracted out, there's some similar code from a library in
        // the navigation plugin, this should be massaged a bit to fit
        // the Flot cases here better and reused. Doing this would
        // make this plugin much slimmer.
        var savedhandlers = {};

        var mouseUpHandler = null;
        
        function onMouseMove(e) {
            if (selection.active) {
                updateSelection(e);
                
                plot.getPlaceholder().trigger("plotselecting", [ getSelection() ]);
            }
        }

        function onMouseDown(e) {
            if (e.which != 1)  // only accept left-click
                return;
            
            // cancel out any text selections
            document.body.focus();

            // prevent text selection and drag in old-school browsers
            if (document.onselectstart !== undefined && savedhandlers.onselectstart == null) {
                savedhandlers.onselectstart = document.onselectstart;
                document.onselectstart = function () { return false; };
            }
            if (document.ondrag !== undefined && savedhandlers.ondrag == null) {
                savedhandlers.ondrag = document.ondrag;
                document.ondrag = function () { return false; };
            }

            setSelectionPos(selection.first, e);

            selection.active = true;

            // this is a bit silly, but we have to use a closure to be
            // able to whack the same handler again
            mouseUpHandler = function (e) { onMouseUp(e); };
            
            $(document).one("mouseup", mouseUpHandler);
        }

        function onMouseUp(e) {
            mouseUpHandler = null;
            
            // revert drag stuff for old-school browsers
            if (document.onselectstart !== undefined)
                document.onselectstart = savedhandlers.onselectstart;
            if (document.ondrag !== undefined)
                document.ondrag = savedhandlers.ondrag;

            // no more dragging
            selection.active = false;
            updateSelection(e);

            if (selectionIsSane())
                triggerSelectedEvent();
            else {
                // this counts as a clear
                plot.getPlaceholder().trigger("plotunselected", [ ]);
                plot.getPlaceholder().trigger("plotselecting", [ null ]);
            }

            return false;
        }

        function getSelection() {
            if (!selectionIsSane())
                return null;

            var r = {}, c1 = selection.first, c2 = selection.second;
            $.each(plot.getAxes(), function (name, axis) {
                if (axis.used) {
                    var p1 = axis.c2p(c1[axis.direction]), p2 = axis.c2p(c2[axis.direction]); 
                    r[name] = { from: Math.min(p1, p2), to: Math.max(p1, p2) };
                }
            });
            return r;
        }

        function triggerSelectedEvent() {
            var r = getSelection();

            plot.getPlaceholder().trigger("plotselected", [ r ]);

            // backwards-compat stuff, to be removed in future
            if (r.xaxis && r.yaxis)
                plot.getPlaceholder().trigger("selected", [ { x1: r.xaxis.from, y1: r.yaxis.from, x2: r.xaxis.to, y2: r.yaxis.to } ]);
        }

        function clamp(min, value, max) {
            return value < min ? min: (value > max ? max: value);
        }

        function setSelectionPos(pos, e) {
            var o = plot.getOptions();
            var offset = plot.getPlaceholder().offset();
            var plotOffset = plot.getPlotOffset();
            pos.x = clamp(0, e.pageX - offset.left - plotOffset.left, plot.width());
            pos.y = clamp(0, e.pageY - offset.top - plotOffset.top, plot.height());

            if (o.selection.mode == "y")
                pos.x = pos == selection.first ? 0 : plot.width();

            if (o.selection.mode == "x")
                pos.y = pos == selection.first ? 0 : plot.height();
        }

        function updateSelection(pos) {
            if (pos.pageX == null)
                return;

            setSelectionPos(selection.second, pos);
            if (selectionIsSane()) {
                selection.show = true;
                plot.triggerRedrawOverlay();
            }
            else
                clearSelection(true);
        }

        function clearSelection(preventEvent) {
            if (selection.show) {
                selection.show = false;
                plot.triggerRedrawOverlay();
                if (!preventEvent)
                    plot.getPlaceholder().trigger("plotunselected", [ ]);
            }
        }

        // function taken from markings support in Flot
        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = plot.getAxes();

            for (var k in axes) {
                axis = axes[k];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? plot.getXAxes()[0] : plot.getYAxes()[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }
            
            return { from: from, to: to, axis: axis };
        }
        
        function setSelection(ranges, preventEvent) {
            var axis, range, o = plot.getOptions();

            if (o.selection.mode == "y") {
                selection.first.x = 0;
                selection.second.x = plot.width();
            }
            else {
                range = extractRange(ranges, "x");

                selection.first.x = range.axis.p2c(range.from);
                selection.second.x = range.axis.p2c(range.to);
            }

            if (o.selection.mode == "x") {
                selection.first.y = 0;
                selection.second.y = plot.height();
            }
            else {
                range = extractRange(ranges, "y");

                selection.first.y = range.axis.p2c(range.from);
                selection.second.y = range.axis.p2c(range.to);
            }

            selection.show = true;
            plot.triggerRedrawOverlay();
            if (!preventEvent && selectionIsSane())
                triggerSelectedEvent();
        }

        function selectionIsSane() {
            var minSize = 5;
            return Math.abs(selection.second.x - selection.first.x) >= minSize &&
                Math.abs(selection.second.y - selection.first.y) >= minSize;
        }

        plot.clearSelection = clearSelection;
        plot.setSelection = setSelection;
        plot.getSelection = getSelection;

        plot.hooks.bindEvents.push(function(plot, eventHolder) {
            var o = plot.getOptions();
            if (o.selection.mode != null) {
                eventHolder.mousemove(onMouseMove);
                eventHolder.mousedown(onMouseDown);
            }
        });


        plot.hooks.drawOverlay.push(function (plot, ctx) {
            // draw selection
            if (selection.show && selectionIsSane()) {
                var plotOffset = plot.getPlotOffset();
                var o = plot.getOptions();

                ctx.save();
                ctx.translate(plotOffset.left, plotOffset.top);

                var c = $.color.parse(o.selection.color);

                ctx.strokeStyle = c.scale('a', 0.8).toString();
                ctx.lineWidth = 1;
                ctx.lineJoin = "round";
                ctx.fillStyle = c.scale('a', 0.4).toString();

                var x = Math.min(selection.first.x, selection.second.x),
                    y = Math.min(selection.first.y, selection.second.y),
                    w = Math.abs(selection.second.x - selection.first.x),
                    h = Math.abs(selection.second.y - selection.first.y);

                ctx.fillRect(x, y, w, h);
                ctx.strokeRect(x, y, w, h);

                ctx.restore();
            }
        });
        
        plot.hooks.shutdown.push(function (plot, eventHolder) {
            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mousedown", onMouseDown);
            
            if (mouseUpHandler)
                $(document).unbind("mouseup", mouseUpHandler);
        });

    }

    $.plot.plugins.push({
        init: init,
        options: {
            selection: {
                mode: null, // one of null, "x", "y" or "xy"
                color: "#e8cfac"
            }
        },
        name: 'selection',
        version: '1.1'
    });
})(jQuery);
/**
 * jqPlot
 * Pure JavaScript plotting plugin using jQuery
 *
 * Version: @VERSION
 *
 * Copyright (c) 2009-2011 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot dot com or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * sprintf functions contained in jqplot.sprintf.js by Ash Searle:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 *
 * included jsDate library by Chris Leonello:
 *
 * Copyright (c) 2010-2011 Chris Leonello
 *
 * jsDate is currently available for use in all personal or commercial projects 
 * under both the MIT and GPL version 2.0 licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly.
 *
 * jsDate borrows many concepts and ideas from the Date Instance 
 * Methods by Ken Snyder along with some parts of Ken's actual code.
 * 
 * Ken's origianl Date Instance Methods and copyright notice:
 * 
 * Ken Snyder (ken d snyder at gmail dot com)
 * 2008-09-10
 * version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 * Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * jqplotToImage function based on Larry Siden's export-jqplot-to-png.js.
 * Larry has generously given permission to adapt his code for inclusion
 * into jqPlot.
 *
 * Larry's original code can be found here:
 *
 * https://github.com/lsiden/export-jqplot-to-png
 * 
 * 
 */
if(!document.createElement("canvas").getContext){(function(){var ab=Math;var n=ab.round;var l=ab.sin;var A=ab.cos;var H=ab.abs;var N=ab.sqrt;var d=10;var f=d/2;var z=+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];function y(){return this.context_||(this.context_=new D(this))}var t=Array.prototype.slice;function g(j,m,p){var i=t.call(arguments,2);return function(){return j.apply(m,i.concat(t.call(arguments)))}}function af(i){return String(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function Y(m,j,i){if(!m.namespaces[j]){m.namespaces.add(j,i,"#default#VML")}}function R(j){Y(j,"g_vml_","urn:schemas-microsoft-com:vml");Y(j,"g_o_","urn:schemas-microsoft-com:office:office");if(!j.styleSheets.ex_canvas_){var i=j.createStyleSheet();i.owningElement.id="ex_canvas_";i.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}R(document);var e={init:function(i){var j=i||document;j.createElement("canvas");j.attachEvent("onreadystatechange",g(this.init_,this,j))},init_:function(p){var m=p.getElementsByTagName("canvas");for(var j=0;j<m.length;j++){this.initElement(m[j])}},initElement:function(j){if(!j.getContext){j.getContext=y;R(j.ownerDocument);j.innerHTML="";j.attachEvent("onpropertychange",x);j.attachEvent("onresize",W);var i=j.attributes;if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"}else{j.width=j.clientWidth}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"}else{j.height=j.clientHeight}}return j},uninitElement:function(j){if(j.getContext){var i=j.getContext();delete i.element_;delete i.canvas;j.innerHTML="";j.context_=null;j.getContext=null;j.detachEvent("onpropertychange",x);j.detachEvent("onresize",W)}}};function x(j){var i=j.srcElement;switch(j.propertyName){case"width":i.getContext().clearRect();i.style.width=i.attributes.width.nodeValue+"px";i.firstChild.style.width=i.clientWidth+"px";break;case"height":i.getContext().clearRect();i.style.height=i.attributes.height.nodeValue+"px";i.firstChild.style.height=i.clientHeight+"px";break}}function W(j){var i=j.srcElement;if(i.firstChild){i.firstChild.style.width=i.clientWidth+"px";i.firstChild.style.height=i.clientHeight+"px"}}e.init();var k=[];for(var ae=0;ae<16;ae++){for(var ad=0;ad<16;ad++){k[ae*16+ad]=ae.toString(16)+ad.toString(16)}}function B(){return[[1,0,0],[0,1,0],[0,0,1]]}function J(p,m){var j=B();for(var i=0;i<3;i++){for(var ah=0;ah<3;ah++){var Z=0;for(var ag=0;ag<3;ag++){Z+=p[i][ag]*m[ag][ah]}j[i][ah]=Z}}return j}function v(j,i){i.fillStyle=j.fillStyle;i.lineCap=j.lineCap;i.lineJoin=j.lineJoin;i.lineWidth=j.lineWidth;i.miterLimit=j.miterLimit;i.shadowBlur=j.shadowBlur;i.shadowColor=j.shadowColor;i.shadowOffsetX=j.shadowOffsetX;i.shadowOffsetY=j.shadowOffsetY;i.strokeStyle=j.strokeStyle;i.globalAlpha=j.globalAlpha;i.font=j.font;i.textAlign=j.textAlign;i.textBaseline=j.textBaseline;i.arcScaleX_=j.arcScaleX_;i.arcScaleY_=j.arcScaleY_;i.lineScale_=j.lineScale_}var b={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};function M(j){var p=j.indexOf("(",3);var i=j.indexOf(")",p+1);var m=j.substring(p+1,i).split(",");if(m.length!=4||j.charAt(3)!="a"){m[3]=1}return m}function c(i){return parseFloat(i)/100}function r(j,m,i){return Math.min(i,Math.max(m,j))}function I(ag){var i,ai,aj,ah,ak,Z;ah=parseFloat(ag[0])/360%360;if(ah<0){ah++}ak=r(c(ag[1]),0,1);Z=r(c(ag[2]),0,1);if(ak==0){i=ai=aj=Z}else{var j=Z<0.5?Z*(1+ak):Z+ak-Z*ak;var m=2*Z-j;i=a(m,j,ah+1/3);ai=a(m,j,ah);aj=a(m,j,ah-1/3)}return"#"+k[Math.floor(i*255)]+k[Math.floor(ai*255)]+k[Math.floor(aj*255)]}function a(j,i,m){if(m<0){m++}if(m>1){m--}if(6*m<1){return j+(i-j)*6*m}else{if(2*m<1){return i}else{if(3*m<2){return j+(i-j)*(2/3-m)*6}else{return j}}}}var C={};function F(j){if(j in C){return C[j]}var ag,Z=1;j=String(j);if(j.charAt(0)=="#"){ag=j}else{if(/^rgb/.test(j)){var p=M(j);var ag="#",ah;for(var m=0;m<3;m++){if(p[m].indexOf("%")!=-1){ah=Math.floor(c(p[m])*255)}else{ah=+p[m]}ag+=k[r(ah,0,255)]}Z=+p[3]}else{if(/^hsl/.test(j)){var p=M(j);ag=I(p);Z=p[3]}else{ag=b[j]||j}}}return C[j]={color:ag,alpha:Z}}var o={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"};var L={};function E(i){if(L[i]){return L[i]}var p=document.createElement("div");var m=p.style;try{m.font=i}catch(j){}return L[i]={style:m.fontStyle||o.style,variant:m.fontVariant||o.variant,weight:m.fontWeight||o.weight,size:m.fontSize||o.size,family:m.fontFamily||o.family}}function u(m,j){var i={};for(var ah in m){i[ah]=m[ah]}var ag=parseFloat(j.currentStyle.fontSize),Z=parseFloat(m.size);if(typeof m.size=="number"){i.size=m.size}else{if(m.size.indexOf("px")!=-1){i.size=Z}else{if(m.size.indexOf("em")!=-1){i.size=ag*Z}else{if(m.size.indexOf("%")!=-1){i.size=(ag/100)*Z}else{if(m.size.indexOf("pt")!=-1){i.size=Z/0.75}else{i.size=ag}}}}}i.size*=0.981;i.family="'"+i.family.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'";return i}function ac(i){return i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family}var s={butt:"flat",round:"round"};function S(i){return s[i]||"square"}function D(i){this.m_=B();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=d*1;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=i;var m="width:"+i.clientWidth+"px;height:"+i.clientHeight+"px;overflow:hidden;position:absolute";var j=i.ownerDocument.createElement("div");j.style.cssText=m;i.appendChild(j);var p=j.cloneNode(false);p.style.backgroundColor="red";p.style.filter="alpha(opacity=0)";i.appendChild(p);this.element_=j;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1}var q=D.prototype;q.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null}this.element_.innerHTML=""};q.beginPath=function(){this.currentPath_=[]};q.moveTo=function(j,i){var m=V(this,j,i);this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};q.lineTo=function(j,i){var m=V(this,j,i);this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};q.bezierCurveTo=function(m,j,ak,aj,ai,ag){var i=V(this,ai,ag);var ah=V(this,m,j);var Z=V(this,ak,aj);K(this,ah,Z,i)};function K(i,Z,m,j){i.currentPath_.push({type:"bezierCurveTo",cp1x:Z.x,cp1y:Z.y,cp2x:m.x,cp2y:m.y,x:j.x,y:j.y});i.currentX_=j.x;i.currentY_=j.y}q.quadraticCurveTo=function(ai,m,j,i){var ah=V(this,ai,m);var ag=V(this,j,i);var aj={x:this.currentX_+2/3*(ah.x-this.currentX_),y:this.currentY_+2/3*(ah.y-this.currentY_)};var Z={x:aj.x+(ag.x-this.currentX_)/3,y:aj.y+(ag.y-this.currentY_)/3};K(this,aj,Z,ag)};q.arc=function(al,aj,ak,ag,j,m){ak*=d;var ap=m?"at":"wa";var am=al+A(ag)*ak-f;var ao=aj+l(ag)*ak-f;var i=al+A(j)*ak-f;var an=aj+l(j)*ak-f;if(am==i&&!m){am+=0.125}var Z=V(this,al,aj);var ai=V(this,am,ao);var ah=V(this,i,an);this.currentPath_.push({type:ap,x:Z.x,y:Z.y,radius:ak,xStart:ai.x,yStart:ai.y,xEnd:ah.x,yEnd:ah.y})};q.rect=function(m,j,i,p){this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath()};q.strokeRect=function(m,j,i,p){var Z=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath();this.stroke();this.currentPath_=Z};q.fillRect=function(m,j,i,p){var Z=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+p);this.lineTo(m,j+p);this.closePath();this.fill();this.currentPath_=Z};q.createLinearGradient=function(j,p,i,m){var Z=new U("gradient");Z.x0_=j;Z.y0_=p;Z.x1_=i;Z.y1_=m;return Z};q.createRadialGradient=function(p,ag,m,j,Z,i){var ah=new U("gradientradial");ah.x0_=p;ah.y0_=ag;ah.r0_=m;ah.x1_=j;ah.y1_=Z;ah.r1_=i;return ah};q.drawImage=function(aq,m){var aj,ah,al,ay,ao,am,at,aA;var ak=aq.runtimeStyle.width;var ap=aq.runtimeStyle.height;aq.runtimeStyle.width="auto";aq.runtimeStyle.height="auto";var ai=aq.width;var aw=aq.height;aq.runtimeStyle.width=ak;aq.runtimeStyle.height=ap;if(arguments.length==3){aj=arguments[1];ah=arguments[2];ao=am=0;at=al=ai;aA=ay=aw}else{if(arguments.length==5){aj=arguments[1];ah=arguments[2];al=arguments[3];ay=arguments[4];ao=am=0;at=ai;aA=aw}else{if(arguments.length==9){ao=arguments[1];am=arguments[2];at=arguments[3];aA=arguments[4];aj=arguments[5];ah=arguments[6];al=arguments[7];ay=arguments[8]}else{throw Error("Invalid number of arguments")}}}var az=V(this,aj,ah);var p=at/2;var j=aA/2;var ax=[];var i=10;var ag=10;ax.push(" <g_vml_:group",' coordsize="',d*i,",",d*ag,'"',' coordorigin="0,0"',' style="width:',i,"px;height:",ag,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var Z=[];Z.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",n(az.x/d),",","Dy=",n(az.y/d),"");var av=az;var au=V(this,aj+al,ah);var ar=V(this,aj,ah+ay);var an=V(this,aj+al,ah+ay);av.x=ab.max(av.x,au.x,ar.x,an.x);av.y=ab.max(av.y,au.y,ar.y,an.y);ax.push("padding:0 ",n(av.x/d),"px ",n(av.y/d),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",Z.join(""),", sizingmethod='clip');")}else{ax.push("top:",n(az.y/d),"px;left:",n(az.x/d),"px;")}ax.push(' ">','<g_vml_:image src="',aq.src,'"',' style="width:',d*al,"px;"," height:",d*ay,'px"',' cropleft="',ao/ai,'"',' croptop="',am/aw,'"',' cropright="',(ai-ao-at)/ai,'"',' cropbottom="',(aw-am-aA)/aw,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",ax.join(""))};q.stroke=function(al){var aj=[];var Z=false;var m=10;var am=10;aj.push("<g_vml_:shape",' filled="',!!al,'"',' style="position:absolute;width:',m,"px;height:",am,'px;"',' coordorigin="0,0"',' coordsize="',d*m,",",d*am,'"',' stroked="',!al,'"',' path="');var an=false;var ag={x:null,y:null};var ak={x:null,y:null};for(var ah=0;ah<this.currentPath_.length;ah++){var j=this.currentPath_[ah];var ai;switch(j.type){case"moveTo":ai=j;aj.push(" m ",n(j.x),",",n(j.y));break;case"lineTo":aj.push(" l ",n(j.x),",",n(j.y));break;case"close":aj.push(" x ");j=null;break;case"bezierCurveTo":aj.push(" c ",n(j.cp1x),",",n(j.cp1y),",",n(j.cp2x),",",n(j.cp2y),",",n(j.x),",",n(j.y));break;case"at":case"wa":aj.push(" ",j.type," ",n(j.x-this.arcScaleX_*j.radius),",",n(j.y-this.arcScaleY_*j.radius)," ",n(j.x+this.arcScaleX_*j.radius),",",n(j.y+this.arcScaleY_*j.radius)," ",n(j.xStart),",",n(j.yStart)," ",n(j.xEnd),",",n(j.yEnd));break}if(j){if(ag.x==null||j.x<ag.x){ag.x=j.x}if(ak.x==null||j.x>ak.x){ak.x=j.x}if(ag.y==null||j.y<ag.y){ag.y=j.y}if(ak.y==null||j.y>ak.y){ak.y=j.y}}}aj.push(' ">');if(!al){w(this,aj)}else{G(this,aj,ag,ak)}aj.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",aj.join(""))};function w(m,ag){var j=F(m.strokeStyle);var p=j.color;var Z=j.alpha*m.globalAlpha;var i=m.lineScale_*m.lineWidth;if(i<1){Z*=i}ag.push("<g_vml_:stroke",' opacity="',Z,'"',' joinstyle="',m.lineJoin,'"',' miterlimit="',m.miterLimit,'"',' endcap="',S(m.lineCap),'"',' weight="',i,'px"',' color="',p,'" />')}function G(aq,ai,aK,ar){var aj=aq.fillStyle;var aB=aq.arcScaleX_;var aA=aq.arcScaleY_;var j=ar.x-aK.x;var p=ar.y-aK.y;if(aj instanceof U){var an=0;var aF={x:0,y:0};var ax=0;var am=1;if(aj.type_=="gradient"){var al=aj.x0_/aB;var m=aj.y0_/aA;var ak=aj.x1_/aB;var aM=aj.y1_/aA;var aJ=V(aq,al,m);var aI=V(aq,ak,aM);var ag=aI.x-aJ.x;var Z=aI.y-aJ.y;an=Math.atan2(ag,Z)*180/Math.PI;if(an<0){an+=360}if(an<0.000001){an=0}}else{var aJ=V(aq,aj.x0_,aj.y0_);aF={x:(aJ.x-aK.x)/j,y:(aJ.y-aK.y)/p};j/=aB*d;p/=aA*d;var aD=ab.max(j,p);ax=2*aj.r0_/aD;am=2*aj.r1_/aD-ax}var av=aj.colors_;av.sort(function(aN,i){return aN.offset-i.offset});var ap=av.length;var au=av[0].color;var at=av[ap-1].color;var az=av[0].alpha*aq.globalAlpha;var ay=av[ap-1].alpha*aq.globalAlpha;var aE=[];for(var aH=0;aH<ap;aH++){var ao=av[aH];aE.push(ao.offset*am+ax+" "+ao.color)}ai.push('<g_vml_:fill type="',aj.type_,'"',' method="none" focus="100%"',' color="',au,'"',' color2="',at,'"',' colors="',aE.join(","),'"',' opacity="',ay,'"',' g_o_:opacity2="',az,'"',' angle="',an,'"',' focusposition="',aF.x,",",aF.y,'" />')}else{if(aj instanceof T){if(j&&p){var ah=-aK.x;var aC=-aK.y;ai.push("<g_vml_:fill",' position="',ah/j*aB*aB,",",aC/p*aA*aA,'"',' type="tile"',' src="',aj.src_,'" />')}}else{var aL=F(aq.fillStyle);var aw=aL.color;var aG=aL.alpha*aq.globalAlpha;ai.push('<g_vml_:fill color="',aw,'" opacity="',aG,'" />')}}}q.fill=function(){this.stroke(true)};q.closePath=function(){this.currentPath_.push({type:"close"})};function V(j,Z,p){var i=j.m_;return{x:d*(Z*i[0][0]+p*i[1][0]+i[2][0])-f,y:d*(Z*i[0][1]+p*i[1][1]+i[2][1])-f}}q.save=function(){var i={};v(this,i);this.aStack_.push(i);this.mStack_.push(this.m_);this.m_=J(B(),this.m_)};q.restore=function(){if(this.aStack_.length){v(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};function h(i){return isFinite(i[0][0])&&isFinite(i[0][1])&&isFinite(i[1][0])&&isFinite(i[1][1])&&isFinite(i[2][0])&&isFinite(i[2][1])}function aa(j,i,p){if(!h(i)){return}j.m_=i;if(p){var Z=i[0][0]*i[1][1]-i[0][1]*i[1][0];j.lineScale_=N(H(Z))}}q.translate=function(m,j){var i=[[1,0,0],[0,1,0],[m,j,1]];aa(this,J(i,this.m_),false)};q.rotate=function(j){var p=A(j);var m=l(j);var i=[[p,m,0],[-m,p,0],[0,0,1]];aa(this,J(i,this.m_),false)};q.scale=function(m,j){this.arcScaleX_*=m;this.arcScaleY_*=j;var i=[[m,0,0],[0,j,0],[0,0,1]];aa(this,J(i,this.m_),true)};q.transform=function(Z,p,ah,ag,j,i){var m=[[Z,p,0],[ah,ag,0],[j,i,1]];aa(this,J(m,this.m_),true)};q.setTransform=function(ag,Z,ai,ah,p,j){var i=[[ag,Z,0],[ai,ah,0],[p,j,1]];aa(this,i,true)};q.drawText_=function(am,ak,aj,ap,ai){var ao=this.m_,at=1000,j=0,ar=at,ah={x:0,y:0},ag=[];var i=u(E(this.font),this.element_);var p=ac(i);var au=this.element_.currentStyle;var Z=this.textAlign.toLowerCase();switch(Z){case"left":case"center":case"right":break;case"end":Z=au.direction=="ltr"?"right":"left";break;case"start":Z=au.direction=="rtl"?"right":"left";break;default:Z="left"}switch(this.textBaseline){case"hanging":case"top":ah.y=i.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":ah.y=-i.size/2.25;break}switch(Z){case"right":j=at;ar=0.05;break;case"center":j=ar=at/2;break}var aq=V(this,ak+ah.x,aj+ah.y);ag.push('<g_vml_:line from="',-j,' 0" to="',ar,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!ai,'" stroked="',!!ai,'" style="position:absolute;width:1px;height:1px;">');if(ai){w(this,ag)}else{G(this,ag,{x:-j,y:0},{x:ar,y:i.size})}var an=ao[0][0].toFixed(3)+","+ao[1][0].toFixed(3)+","+ao[0][1].toFixed(3)+","+ao[1][1].toFixed(3)+",0,0";var al=n(aq.x/d+1-ao[0][0])+","+n(aq.y/d-2*ao[1][0]);ag.push('<g_vml_:skew on="t" matrix="',an,'" ',' offset="',al,'" origin="',j,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',af(am),'" style="v-text-align:',Z,";font:",af(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",ag.join(""))};q.fillText=function(m,i,p,j){this.drawText_(m,i,p,j,false)};q.strokeText=function(m,i,p,j){this.drawText_(m,i,p,j,true)};q.measureText=function(m){if(!this.textMeasureEl_){var i='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",i);this.textMeasureEl_=this.element_.lastChild}var j=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(j.createTextNode(m));return{width:this.textMeasureEl_.offsetWidth}};q.clip=function(){};q.arcTo=function(){};q.createPattern=function(j,i){return new T(j,i)};function U(i){this.type_=i;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}U.prototype.addColorStop=function(j,i){i=F(i);this.colors_.push({offset:j,color:i.color,alpha:i.alpha})};function T(j,i){Q(j);switch(i){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=i;break;default:O("SYNTAX_ERR")}this.src_=j.src;this.width_=j.width;this.height_=j.height}function O(i){throw new P(i)}function Q(i){if(!i||i.nodeType!=1||i.tagName!="IMG"){O("TYPE_MISMATCH_ERR")}if(i.readyState!="complete"){O("INVALID_STATE_ERR")}}function P(i){this.code=this[i];this.message=i+": DOM Exception "+this.code}var X=P.prototype=new Error;X.INDEX_SIZE_ERR=1;X.DOMSTRING_SIZE_ERR=2;X.HIERARCHY_REQUEST_ERR=3;X.WRONG_DOCUMENT_ERR=4;X.INVALID_CHARACTER_ERR=5;X.NO_DATA_ALLOWED_ERR=6;X.NO_MODIFICATION_ALLOWED_ERR=7;X.NOT_FOUND_ERR=8;X.NOT_SUPPORTED_ERR=9;X.INUSE_ATTRIBUTE_ERR=10;X.INVALID_STATE_ERR=11;X.SYNTAX_ERR=12;X.INVALID_MODIFICATION_ERR=13;X.NAMESPACE_ERR=14;X.INVALID_ACCESS_ERR=15;X.VALIDATION_ERR=16;X.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=e;CanvasRenderingContext2D=D;CanvasGradient=U;CanvasPattern=T;DOMException=P;G_vmlCanvasManager._version=888})()};/**
 * Created by jesse3 on 7/31/14.
 */

$(document).ready(function(){
    var challengeCurrentButton = $("#challengeCurrentButton");
    var challengeCompletedButton = $("#challengeCompletedButton");


    challengeCurrentButton.on("click", function(){
        swopButtons(challengeCurrentButton, challengeCompletedButton);
    });

    challengeCompletedButton.on("click", function(){
        swopButtons(challengeCompletedButton, challengeCurrentButton);
    });

    function swopButtons(clickedButton, otherButton){
        clickedButton.removeClass("orange");
        otherButton.addClass("orange");
    }
});

var chalID = $("#chalID").val();
var chalWallSysMsgURL = $("#chalWallSysMsgURL").val();
var isAfterAcceptingChallenge = $("#isAfterAcceptingChallenge").val();
var userIsProviderMember = $("#userIsProviderMember").val();
var engagementRefreshUrl = $("#engagementRefreshUrl").val();
var isAfterQuittingChallenge = $("#isAfterQuittingChallenge").val();
var isUserLoggedIn = $("#isUserLoggedIn").val();
var chalGetPrivacyURL = $("#chalGetPrivacyURL").val();
var chalSavePrivacyURL = $("#chalSavePrivacyURL").val();
var chalFriendCheck = $("#chalFriendCheck").val();
var chalFriendsInviteModalURL = $("#chalFriendsInviteModalURL").val();
var chalDeclarationToolModalURL = $("#chalDeclarationToolModalURL").val();
var chalAcceptDeclarationURL = $("#chalAcceptDeclarationURL").val();
var chalPromiseModalURL = $("#chalPromiseModalURL").val();
var chalQuitURL = $("#chalQuitURL").val();
var chalWallURL = $("#chalWallURL").val();
var chalLikeURL = $("#chalLikeURL").val();
var chalRepeatableIconVal = $("#chalRepeatableIcon").val();
var chalInviteIconVal = $("#chalInvitedIcon").val();
var chalRecommendIconVal = $("#chalRecommendIcon").val();
var chalActiveIconVal = $("#chalActiveIcon").val();
var chalDataWaitingIconVal = $("#chalDataWaitingIcon").val();
var chalNotEligibleIcon = $("#chalNotEligibleIcon").val();
var isRegisteredForChallenge = $("#isRegisteredForChallenge").val();

function loadSystemMessagesWall($systemMessagesContainer) {
    $.ajax({
        type: 'GET',
        url: chalWallSysMsgURL,
        success: function (wallSystemMessagesHTML) {
            $("#wallSystemMessagesLoading").hide();
            $systemMessagesContainer.html(wallSystemMessagesHTML);
            formatScreenName();
        },
        error: function (e, r, w) {
            $("#wallSystemMessagesLoading").hide();
        }
    });
}

$(function () {
    var $systemMessagesContainer = $("#systemMessagesContainer");
    loadSystemMessagesWall($systemMessagesContainer);

    $('#membersTakingChallengeTabGroup button:first').tab('show');

    $('#declarationModal').on('hidden', function () {
        $("#acceptDeclaration").qtip("destroy");
    });

    $("#acceptDeclaration").on("change", function() {
        if (isDeclarationFormValid()) {
            $("#acceptDeclaration").qtip("destroy");
        } else {
            showDeclarationTooltip("acceptDeclaration", "You cannot close this challenge without acknowledging the terms and conditions", "top left", "bottom center");
        }
    });

    $("#editPromiseModal").on("hide", function() {
        var promiseQtip ="promise";
        $("#" + promiseQtip).qtip("destroy");
    });

    if(isAfterAcceptingChallenge === 'true'){
        showOverlay("acceptChallengeOverlay");

        if(userIsProviderMember === 'true'){
            triggerEngagementRefresh(engagementRefreshUrl);
        }
    }

    if(isAfterQuittingChallenge === 'true' && userIsProviderMember === 'true'){
        triggerEngagementRefresh(engagementRefreshUrl);
    }

    if(isUserLoggedIn === 'true'){
        moduleLoadIconHovers();
        loadWall();
    }

    createPrivacyModal(chalGetPrivacyURL, chalSavePrivacyURL);

    setPrivacyIcons();
    setMembersBlock();

});

function setMembersBlock(){
    var element;
    var div;
    if(chalFriendCheck === 'true'){
        element = $("#challengeChampionsBlock");
        div = $("#completed");
    }
    else{
        element = $("#challengeParticipantsBlock");
        div = $("#current");
    }

    if(element) {
        element.addClass("active");
        div.addClass("active");
    }
}

function acceptChallenge(challengeId, inviterUserIdHint) {
    var url = $("#chalAcceptInviteModalURL").val();
    showChallengeAcceptModal(challengeId, $("#challengeInviteModalContainer"), url, inviterUserIdHint);
}

function showChallengeInviteModal(challengeId) {
    if (typeof chalFriendsInviteModalURL != 'undefined' && undefined != chalFriendsInviteModalURL) {
        var $friendInviteModel = $("#friendInviteModal");
        $('#loadingImage').show();
        $.get(chalFriendsInviteModalURL, {challengeId: challengeId}, function (modal) {
            $friendInviteModel.html(modal);
            $friendInviteModel.modal("show");
            $('#loadingImage').hide();
        });
    }
}

function showDeclarationModal(challengeId) {
    if (typeof chalDeclarationToolModalURL != 'undefined' && undefined != chalDeclarationToolModalURL) {
        $.get(chalDeclarationToolModalURL, function (modal) {
            var declarationModal = $('#declarationModal');
            declarationModal.html(modal);

            declarationModal.modal("show");
        });
    }
}

function closeDeclarationModal(){
    $('#declarationModal').modal('hide');
    $("#acceptDeclaration").qtip("destroy");

}

function signDeclaration(challengeId) {
    if (isDeclarationFormValid()) {

        var url = chalAcceptDeclarationURL;

        $('#declarationModal').modal('hide');

        $("#acceptDeclaration").qtip("destroy");

        document.location.href = url;

    } else {
        showDeclarationTooltip("acceptDeclaration", "You cannot close this challenge without acknowledging the terms and conditions", "top left", "bottom center");
    }
}

function isDeclarationFormValid() {
    var checked = $("#acceptDeclaration").attr("checked");
    return checked == "checked";
}

function showDeclarationTooltip(node, content, toolTipPos, targetPos) {
    $("#" + node).qtip({
        content: content,
        position: {
            my: toolTipPos,
            at: targetPos,
            adjust: {
                x: 10,  y: 3
            }
        },
        show: {
            when: false,
            ready: true
        },
        hide: false,
        style: {
            classes: 'ui-tooltip-red ui-tooltip-shadow ui-tooltip-rounded modal-tooltip',
            width: "160px"
        }
    });
}


function showChallengePromiseModal(challengeId) {
    if (typeof chalPromiseModalURL != 'undefined' && undefined != chalPromiseModalURL) {
        var $editPromiseModel = $("#editPromiseModal");
        $.get(chalPromiseModalURL, {challengeId: challengeId}, function (modal) {
            $editPromiseModel.html(modal);
            $editPromiseModel.modal("show");
            //The next line is a workaround to make sure escaped special characters get unescaped in the edit promise block
            $('#promise').val($('<div/>').html($('#promise').val()).text());
        });
    }
}

function confirmQuitChallenge() {
    $('#quitChallengeModal').modal("show");
}

function quitChallenge() {
    var url = chalQuitURL;
    $("#confirmQuitChallenge").modal("hide");
    showOverlay("quitChallengeOverlay");
    document.location.href = url;
}

function loadWall() {
    if (typeof chalWallURL != 'undefined' && undefined != chalWallURL) {
        $("#ajaxImageChallengeWallLoading").show();
        $.ajax({
            type: 'GET',
            url: chalWallURL,
            success: function (wallHTML) {
                $("#ajaxImageChallengeWallLoading").hide();
                $("#challengeWall").append(wallHTML);
                $(".news-box").first().css({"border-top": "none"});
            },
            error: function (e, r, w) {
                $("#ajaxImageChallengeWallLoading").hide();
            }
        });
    }
}

function refreshWall() {
    $("#challengeWall").html("");
    loadWall();
    return false;
}

function likeChallenge() {
    if (typeof chalLikeURL != 'undefined' && undefined != chalLikeURL) {
        $("#like").replaceWith("Liked");
        $("#ajaxImageLikeArticle").show();
        $.ajax({
            type: "GET",
            url: chalLikeURL,
            data: {challengeId: chalID},
            success: function (data) {
                $("#ajaxImageLikeArticle").hide();
                var likeCountText = $("#challengesLikeCount").text();
                var likeCount = parseInt(likeCountText) + 1;
                $("#challengesLikeCount").text(likeCount);
                refreshWall();
            },
            error: function () {
            }
        })
    }
}

function attatchTip(id, hoverMessage){
    $("#"+id).qtip({
        content:{
            text:hoverMessage
        },
        position:{
            my:"left center",
            at:"right center",
            target:'mouse',
            adjust:{
                x:10, y:0
            }
        }
    });
}

var challengeNamePlaceHolder = /{challengeName}/g
var challengeName = $("h1").html();
function moduleLoadIconHovers() {
    $(".repeatableIcon").each(function () {
        //var iconImgId = $(this).attr('id');
        //var challengeName = $("#"+iconImgId+"Value").val();
        var hoverMessage = chalRepeatableIconVal.replace(challengeNamePlaceHolder, challengeName);

        var qtipOptions = {
            content: {
                text: hoverMessage
            },
            position: {
                my: "left center",
                at: "right center"
            }
        };

        if($(window).width() < 768) {
            qtipOptions.position = {
                viewport: $(window)
            };
            qtipOptions.style = {
                width: '150px'
            };
        }

        $(this).qtip(qtipOptions);
    });

    $(".invitedIcon").each(function () {
//        var iconImgId = $(this).attr('id');
//        var challengeName = $("#"+iconImgId+"Value").val();
        var hoverMessage = chalInviteIconVal.replace(challengeNamePlaceHolder, challengeName);

        var qtipOptions = {
            content: {
                text: hoverMessage
            },
            position: {
                my: "left center",
                at: "right center"
            }
        };

        if($(window).width() < 768) {
            qtipOptions.position = {
                viewport: $(window)
            };
            qtipOptions.style = {
                width: '150px'
            };
        }

        $(this).qtip(qtipOptions);
    });

    $(".recommendIcon").each(function () {
//        var iconImgId = $(this).attr('id');
//        var challengeName = $("#"+iconImgId+"Value").val();
        var hoverMessage = chalRecommendIconVal.replace(challengeNamePlaceHolder, challengeName);

        var qtipOptions = {
            content: {
                text: hoverMessage
            },
            position: {
                my: "left center",
                at: "right center"
            }
        };

        if($(window).width() < 768) {
            qtipOptions.position = {
                viewport: $(window)
            };
            qtipOptions.style = {
                width: '150px'
            };
        }

        $(this).qtip(qtipOptions);
    });

    $(".activeIcon").each(function () {
        var iconImgId = $(this).attr('id');
        var challengeName = $("#"+iconImgId+"Value").val();
        var hoverMessage = chalActiveIconVal.replace(challengeNamePlaceHolder, challengeName);

        var qtipOptions = {
            content: {
                text: hoverMessage
            },
            position: {
                my: "left center",
                at: "right center"
            }
        };

        if($(window).width() < 768) {
            qtipOptions.position = {
                viewport: $(window)
            };
            qtipOptions.style = {
                width: '150px'
            };
        }

        $(this).qtip(qtipOptions);
    });


    $(".dataWaitingIcon").each(function () {
        var iconImgId = $(this).attr('id');
        var challengeName = $("#"+iconImgId+"Value").val();
        var hoverMessage = chalDataWaitingIconVal.replace(challengeNamePlaceHolder, challengeName);

        var qtipOptions = {
            content: {
                text: hoverMessage
            },
            position: {
                my: "left center",
                at: "right center"
            }
        };

        if($(window).width() < 768) {
            qtipOptions.position = {
                viewport: $(window)
            };
            qtipOptions.style = {
                width: '150px'
            };
        }

        $(this).qtip(qtipOptions);
    });

    $(".notEligibleIcon").each(function () {
//        var iconImgId = $(this).attr('id');
//        var challengeName = $("#"+iconImgId+"Value").val();
        var hoverMessage = chalNotEligibleIcon.replace(challengeNamePlaceHolder, challengeName);

        var qtipOptions = {
            content: {
                text: hoverMessage
            },
            position: {
                my: "left center",
                at: "right center"
            }
        };

        if($(window).width() < 768) {
            qtipOptions.position = {
                viewport: $(window)
            };
            qtipOptions.style = {
                width: '150px'
            };
        }

        $(this).qtip(qtipOptions);
    });
}

function formatScreenName(){
    $(".wallPostScreenName").each(function (){
        $(this).html("<strong>" + formatLongText($(this).text()) + "</strong>");
    })
}

function loadFriends() {
    $("#challengeParticipants").hide();
    $("#ajaxImageFriendsLoading").show();
    $.ajax({
        type: 'GET',
        url: $("#loadFriendsURL").val(),
        data: {challengeId: $("#chalID").val()},
        success: function (friendsHtml) {
            $("#ajaxImageFriendsLoading").hide();
            $("#challengeParticipants").html(friendsHtml);
            $("#challengeParticipants").show();
            $("#current").addClass("active");
        },
        error: function (e, r, w) {
            $("#ajaxImageFriendsLoading").hide();
        }
    });
}

$(window).load(function(){
    if (isRegisteredForChallenge == 'true'){
        $('.how-to-complete-accepted-content').css('display','inline');
        $('.how-to-complete-content').css('display','none');
    }
});

$(window).resize(function(){
    loadChallengesChart();
});

$(document).ready(function () {
    loadFriends();
});
