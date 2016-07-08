$(document).ready(function(){

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );

    $("#change_password_section").hide();
    $("#ask_for_support_section").hide();
    $("#report_bug_section").hide();

    $("#change_password_settings").on("click", function(){
        changePassword();
    });

    $("#user_support_settings").on("click", function(){
        getSupport();
    });

    $("#report_bug_link").on("click", function(){
        reportBug();
    });

    //$('#navbar_2 #nav_section_2 ul.tabs').tabs();

    //#navbar_2 .nav-wrapper #nav_section_2 div ul
    //var tabs = $('#navbar_2 .nav-wrapper #nav_section_2 div ul.tabs');
    $(".tabs").tabs();


});

function enableFormElement(obj_id){
    var obj = $("#"+obj_id);

    $(".main_body input[type!='file']").prop("disabled", true);

    obj.prop("disabled", false);
    obj.focus();
}

function changePassword(){
    $("#change_password_section").toggle(1000);
}

function getSupport(){
    $("#ask_for_support_section").toggle(1000);
}

function reportBug(){
    $("#report_bug_section").toggle(1000);
}

function changeProfilePic(obj_id) {
    var elem = document.getElementById(obj_id);
    if(elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
    }
}
