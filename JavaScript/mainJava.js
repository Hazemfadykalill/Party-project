
$(function () {
    $(".loader").fadeOut(2000, function () {
      $(".loading").slideUp(1000, function () {
        $("body").css("overflow", "auto");
      });
    });
  });

window.onload = function() {
   
    countDownToTime("10 october 2021 9:56:00");
  }
$("#iconOpen").on("click", function(){
    $("#iconOpen").animate({left:300},1000,function(){
       
    });
  
    $("#boxContainer").animate({left:0},1000);


  

});
$(".blackIcon").on("click", function(){
    $("#iconOpen").animate({left:0},1000,function(){
      
    });
  



    $("#boxContainer").animate({left:-300},1000);

});
// textAreaUser 100 character
$("#textAreaUser").on("keyup", function(e){
    
    let str=$("#textAreaUser").val();
    let arr=Array.from(str);
    if(arr.length==0 ){
        $("#countMessageCharacter").html("100");
         
        
    }
    else if(arr.length<=100 && arr.length>0  ){
        $("#countMessageCharacter").html(arr.length);

    }
    // else if(arr.length==100   ){
    //     $("#countMessageCharacter").html("100");

    // }

    else{

        $("#countMessageCharacter").html("100+");
        
         
    }
});
// to add class active to links
$(".links a").on("click", function(){
    $(".links a").removeClass("active");
    $(this).addClass("active");
    let topP=$($(this).attr("href")).offset().top;
    $("body").animate({scrollTop:"topP"},2000);
    

});
// singer buttons
$(".sameSinger").on("click", function(){
    let x=$(this).next(); 
     $(".sameSingerCaption").not(x.slideToggle(2000)).slideUp(2000);
  
});

// Days And Hours Minutes and Seconds
  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
        // to get milliseconds
    futureDate = (futureDate.getTime()/1000);
   

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $("#countDay").html(`${days} `);
    $("#countHour").html(`${hours} `);
    $("#countMinutes").html(`${ mins } `);
    $('#countSeconds').html(`${ secs} `)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }