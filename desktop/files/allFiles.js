$(document).ready(function(){
    $(".header-right div").on("click",function(event){
        var target = event.target || event.srcElement;
                                                                //do it using the word searching "textContent" if the error persists
        target=target.getAttribute("data-id");

        if(target==0){
            window.open("index.html","_self");
            
        }
        if(target==1){
            window.open("destination-moon.html","_self");
           
        }
        if(target==2){
            window.open("crew-commander.html","_self");
           
        }
        if(target==3){
            window.open("technology-vehicle.html","_self");
           
        }
    });

    $(".body-left-scroll div").on("click",function(event){
        var target=event.target || event.srcElement;
        target=target.getAttribute("data-id");
       
        if(target==0){
            window.open("crew-commander.html","_self");
        }
        if(target==1){
            window.open("crew-specialist.html","_self");
        }
        if(target==2){
            window.open("crew-pilot.html","_self");
        }
        if(target==3){
            window.open("crew-engineer.html","_self");
        }
    });
    $(".body-right-top div").on("click",function(event){
        var target=event.target || event.srcElement;
        target=target.getAttribute("data-id");
        if(target==0){
            window.open("destination-moon.html","_self");
        }
        if(target==1){
            window.open("destination-mars.html","_self");
        }
        if(target==2){
            window.open("destination-europa.html","_self");
        }
        if(target==3){
            window.open("destination-titan.html","_self");
        }

    });
    $(".body-left-scroll div").on("click",function(event){
        var target=event.target|| event.srcElement;
        // target=target.getAttribute("data-id");
        target=target.innerHTML;
        console.log(target);
        // if(target==="vehicle"){
        //     window.open("technology-vehicle.html","_self");
        // }
        // if(target==="spaceport"){
        //     window.open("technology-spaceport.html","_self");
        // }
        // if(target==="capsule"){
        //     window.open("technology-capsule.html","_self");
        // }
        if(target==="<span>1</span>" || target==="1"){
            window.open("technology-vehicle.html","_self");
        }
        if(target==="<span>2</span>" || target==="2"){
            window.open("technology-spaceport.html","_self");
        }
        if(target==="<span>3</span>" ||target==="3"){
            window.open("technology-capsule.html","_self");
        }
    });
});