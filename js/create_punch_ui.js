/**
 * Created by 404labs.
 */
var add_image_1_click = 0;
var add_image_2_click = 0;

$(document).ready(function(){
    var add_image_1_menu = $('#add_image_1_menu');
    var add_image_2_menu = $('#add_image_2_menu');

    $('.modal-trigger').leanModal();
    var SPEED = 200
    // add_image_1_menu.find("img").hide(SPEED);
    add_image_1_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
    add_image_1_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
    add_image_1_menu.find(":nth-child(2) img").animate({left: "42%", top: "165px"}, 200);
    add_image_1_menu.find(".menu-item img").animate({left: "42%", top: "165px"}, 200);

    add_image_2_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
    add_image_2_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
    add_image_2_menu.find(":nth-child(2) img").animate({left: "42%", top: "165px"}, 200);
    add_image_2_menu.find(".menu-item img").animate({left: "42%", top: "165px"}, 200);


    $('#add_image_1').on('click', function(){
        console.log("called");


        if(add_image_1_click == 0){
            add_image_1_menu.find(".menu-item img").animate({left: "23%", top: "94px"}, 200);
            add_image_1_menu.find(":nth-child(2) img").animate({left: "153px", top: "94px"}, 200);
            add_image_1_menu.find(":nth-child(3) img").animate({left: "93px", top: "94px"}, 200);
            add_image_1_menu.find(":nth-child(3) img").animate({left: "160px", top: "120px"}, 200);
            $("#image_1_opacity").css("background-color", "rgba(0,0,0,0.5)");

            add_image_1_click = 1;
        }
        else{
            add_image_1_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
            add_image_1_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
            add_image_1_menu.find(":nth-child(2) img").animate({left: "42%", top: "165px"}, 200);
            add_image_1_menu.find(".menu-item img").animate({left: "42%", top: "165px"}, 200);
              // add_image_1_menu.find(":nth-child(3) img").hide()
            $("#image_1_opacity").css("background-color", "rgba(0,0,0,0)");

            add_image_1_click = 0;
        }


    });


    $('#add_image_2').on('click', function(){

        if(add_image_2_click == 0){
            add_image_2_menu.find(".menu-item img").animate({left: "23%", top: "94px"}, 200);
            add_image_2_menu.find(":nth-child(2) img").animate({left: "153px", top: "94px"}, 200);
            add_image_2_menu.find(":nth-child(3) img").animate({left: "93px", top: "94px"}, 200);
            add_image_2_menu.find(":nth-child(3) img").animate({left: "160px", top: "120px"}, 200);

            $("#image_2_opacity").css("background-color", "rgba(0,0,0,0.5)");

            add_image_2_click = 1;
        }
        else{
            add_image_2_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
            add_image_2_menu.find(":nth-child(3) img").animate({left: "42%", top: "165px"}, 200);
            add_image_2_menu.find(":nth-child(2) img").animate({left: "42%", top: "165px"}, 200);
            add_image_2_menu.find(".menu-item img").animate({left: "42%", top: "165px"}, 200);

            $("#image_2_opacity").css("background-color", "rgba(0,0,0,0)");

            add_image_2_click = 0;
        }


    });

});

function uploadFromFile(i){
    if(i == 1){
        alert(1);
    }
    else{
        alert(2);
    }
}


function getImageURL(image_obj, i){

    if(image_obj.files && image_obj.files[0]){
        var reader = new FileReader();

        reader.onload = function (e){
            if(i == 1){
                $("#new_punch_image_div_1").css('background', 'url('+e.target.result+') no-repeat center');
                $("#new_punch_image_div_1").css('background-size', '100% 380px');

                $("#add_image_1").click();
            }
            else if(i == 2){
                $("#new_punch_image_div_2").css('background', 'url('+e.target.result+') no-repeat center');
                $("#new_punch_image_div_2").css('background-size', '100% 380px');

                $("#add_image_2").click();
            }
        };

        reader.readAsDataURL(image_obj.files[0]);
    }
}

function getTextToUpload(i){
    var txt;
    if(i == 1){
        txt = $("#upload_text_1").val();
    }
    else if(i == 2){
        txt = $("#upload_text_2").val();
    }
}


function selectTag(tag_obj){

    if(tag_obj.attr('is_selected') == "0"){
        tag_obj.css('background-color', 'rgba(238, 58, 59, 1)');
        tag_obj.css('color', 'rgba(255, 255, 255, 1)');
        tag_obj.css('border', 'none');

        tag_obj.attr('is_selected', "1");
    }
    else if(tag_obj.attr('is_selected') == "1"){
        tag_obj.css('background-color', 'rgba(255, 255, 255, 0)');
        tag_obj.css('color', '#ff4545');
        tag_obj.css('border', '1px solid #ff4545');

        tag_obj.attr('is_selected', "0");
    }

}
