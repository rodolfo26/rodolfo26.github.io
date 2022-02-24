var isValidationErrors = ($("#isValidationErrors").val() === 'true');
var loginAuthCallBackURL = $("#loginAuthCallBackURL").val();
var loginSpringSecCheckURL = $("#loginSpringSecCheckURL").val();
var loginProductUpdateURL = $("#loginProductUpdateURL").val();
var loginMemberLoginURL = $("#loginMemberLoginURL").val();

var memAuthPageURL = $("#memAuthPageURL").val();
var memAuthPageState = $("#memAuthPageState").val();
var memAuthPageResponseType = $("#memAuthPageResponseType").val();
var memClientId = $("#memClientId").val();
var provLogin = $("#provLogin").val();

$(window).load(function() {
    $("#loginUserNameInput").focus();
});

$(document).ready(function () {
    if (!isValidationErrors) {
        $("#authErrors").val('');
    }
    /* Get values from the hidden fields. These values are set in the controller */
    var showLvLogin = $("#showLvLogin").val();
    var hasCookie = $("#hasCookie").val();
    var referred = $("#referred").val();

    function clearValidation(){
        $(this).qtip("destroy");
        $(this).removeClass("validationFail");
    }

    $("#loginUserNameInput").on("keyup", function() {
        clearValidation();
    });

    if (referred == "true") {
        $("#loginChanger").hide();
    } else {
        $("#loginChanger").show();
    }

    /* If no cookie found, show the question page */
    if (hasCookie == "false") {
        $("#combinedLoginContainer").hide();
        $("#preLoginContainer").show();
    } else {
        /* If hidden field is how LV login, show LV and hide disco logins */
        if (showLvLogin == "true") {
            /* If cookie found, hide the question */
            $("#combinedLoginContainer").show();
            $("#preLoginContainer").hide();
            showLv();
        } else {
            showProviderLogin();
        }
    }

    /* Set the cookie value based on the answer to the question. Do ajax call to controller to set cookie value */
    $("input:radio[name=discoProd]").on("click", function () {
        var value = $(this).val();
        saveCookieValue(value);
    });

    $('#loginPasswordInput').keyup(function (e) {
        clearValidation();
        if (e.which == 13) {
            $('#ajaxImage').show()
            $(".frmLvLogin#loginForm").submit();
        }
    });

    var errorText = $(this).find("#authErrors").val();
    /* Authentication was successful, redirect to dashboard page */
    if (errorText == undefined) {
        window.location = loginAuthCallBackURL;
    } else {
        /* If authentication fails, show fail reason */
        $("#ajaxImage").hide();
        if (errorText == 'Bad credentials') {
            $("#failReason").html("Invalid username or password, please try again.");
        } else {
            $("#failReason").html(errorText);
        }

    }

});

function showMainQuestion() {
    $("#combinedLoginContainer").hide();
    $("#preLoginContainer").show();
    return false;
}

/* Shows LV login screen  */
function showLv() {
    $("#memberLogonMessage").hide();
    $("#nonMemberLogonMessage").show();

    $("#cookieIsDisc").hide();
    $("#cookieIsLv").show();

    $("#lvLoginContainer").show();
    $("#discoLoginContainer").html('');
    $("#discoLoginContainer").hide();
}

/* Shows Discovery login screen */
function showProviderLogin() {
    window.location= provLogin;
}

/* Submit the form via AJAX call */
function loginSubmit() {
    if (isFormValid()) {
        $("#ajaxImage").show();
        $.ajax({
            type:'POST',
            url: loginSpringSecCheckURL,
            data:$('.frmLvLogin#loginForm').serialize(),
            dataType:"HTML",
            success:function (response) {
                var errorText = $(response).find("#authErrors").val();
                /* Authentication was successful, redirect to dashboard page */
                if (errorText == undefined) {
                    window.location = loginAuthCallBackURL;
                } else {
                    /* If authentication fails, show fail reason */
                    $("#ajaxImage").hide();
                    if (errorText == 'Bad credentials') {
                        $("#failReason").html("Invalid username or password, please try again.");
                    } else {
                        $("#failReason").html(errorText);
                    }

                }
            },
            error:function (jqXHR, textStatus, errorThrown) {
                $("#ajaxImage").hide();
            }
        });
    }
}

/* Check if form is valid ie. all required fields filled in */
function isFormValid() {
    var isValid = false;
    /* Clear previous failed messages */
    $("#failReason").html("");
    /* Clear previous validation messages */
    $("#loginUserNameInput").qtip("destroy");
    $("#loginPasswordInput").qtip("destroy");
    /* Get username and password values */
    var userName = $("#loginUserNameInput").val();
    var password = $("#loginPasswordInput").val();
    /* Show validation message if input fields dont have values */
    if (userName == "") {
        showValidationTooltip("loginUserNameInput", $("#loginUserNameInput").attr("validationMessage"));
        $("#loginUserNameInput").addClass("validationFail");

    }
    if (password == "") {
        showValidationTooltip("loginPasswordInput", $("#loginPasswordInput").attr("validationMessage"));
        $("#loginPasswordInput").addClass("validationFail");

    }

    /* Only if both fields have values is the form valid */
    if (userName != "" && password != "") {
        isValid = true;
    }
    return isValid;
}

function getIframeHtml() {
    var discoLoginUrl = getDiscoLoginUrl();
    return '<iframe class="inner" allowTransparency="true" frameborder="0" scrolling="no" src="' + discoLoginUrl + '" style="height: 250px;" />';
}

function getDiscoLoginUrl() {
    var thePort = "";
    if (location.port) {
        thePort = ":" + location.port;
    }
    var redirectURI = 'https://' + document.domain + thePort + loginMemberLoginURL;
    return memAuthPageURL+'?client_id='+memClientId+'&state='+memAuthPageState+'&response_type='+memAuthPageResponseType+'&redirect_uri=' + redirectURI;
}

/* Ajax call to the server to save the cookie value */
function saveCookieValue(value) {
    $.ajax({
        type:'POST',
        url: loginProductUpdateURL,
        data:{ answer : value },
        success:function () {
            /* Show appropriate login box depending on the answer */
            if (value == "Yes") {
                showProviderLogin();
            } else {
                /* Hide the question when ajax call finishes */
                $("#preLoginContainer").hide();
                $("#combinedLoginContainer").show();
                showLv();
            }
        },
        error:function (e, r, w) {
            $("#ajaxImage").hide();
        }
    });
}
