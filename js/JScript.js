    $(document).ready(function () {
        //        $(".btn-floating").click(function () {
        //            $(".btn-floating span.first").toggleClass("first-one");
        //            $(".btn-floating span.second").toggleClass("second-one");
        //            $(".btn-floating span.third").toggleClass("third-one");
        //            $(".btn-floating span").toggleClass("toggleIcon");
        //        });

        setTimeout(function(){
            $(".mySkills").show();
        },2000);
        
        $(".leftBtn .btn-floating").click(function () {
            $(".leftBtn ul li:nth-child(1)").toggleClass("nth-child-1");
            $(".leftBtn ul li:nth-child(2)").toggleClass("nth-child-2");
            $(".leftBtn ul li:nth-child(3)").toggleClass("nth-child-3");
            $(".leftBtn ul li:nth-child(4)").toggleClass("nth-child-4");

            $(".btn-floating span.first").toggleClass("first-one");
            $(".btn-floating span.second").toggleClass("second-one");
            $(".btn-floating span.third").toggleClass("third-one");
            $(".btn-floating span").toggleClass("toggleIcon");
        });


        $(".leftBtn ul li:first-child").click(function () {
            $(".skillRanges").hide();
            $(".four").hide();
            $(".technicalSkills").slideUp();
            $(".contactMe").slideUp();
            $(".close").hide();
            $(".project1").hide();
            $("#first").css({
                'width': '100%',
                'height': '100%',
                //'-webkit-transform': 'scale(100)',
                'border-radius': '0px',
                '-webkit-transition': 'all .5s ease-in-out',
                'z-index': '9999',
                'display': 'block',
                'position': 'absolute',
                'left': '0px',
                'bottom': '0px'
            });
            setTimeout(function () {
                $(".aboutMe").show("slow");
                //$(".close").show();
            }, 1000);
            setTimeout(function () {
                $(".close").show();
            }, 2000);
        });

        $(".leftBtn ul li:nth-child(2)").click(function () {
            $(".skillRanges").hide();
            $(".four").hide();
            $(".aboutMe").slideUp();
            $(".contactMe").slideUp();
            $(".close").hide();
            $(".project1").hide();
            $("#second").css({
                'width': '100%',
                'height': '100%',
                //'-webkit-transform': 'scale(100)',
                'border-radius': '0px',
                '-webkit-transition': 'all .5s ease-in-out',
                'z-index': '0',
                'display': 'block',
                'position': 'absolute',
                'left': '0px',
                'bottom': '0px'
            });
            setTimeout(function () {
                $(".technicalSkills").show("slow");
                //$(".close").show();
            }, 1000);
            setTimeout(function () {
                $(".close").show();
            }, 2000);
        });

        $(".leftBtn ul li:nth-child(3)").click(function () {
            $(".skillRanges").hide();
            $(".four").hide();
            $(".aboutMe").hide();
            $(".technicalSkills").hide();
            $(".contactMe").hide();
            $("#third").css({
                'width': '100%',
                'height': '100%',
                //'-webkit-transform': 'scale(100)',
                'border-radius': '0px',
                '-webkit-transition': 'all .5s ease-in-out',
                'z-index': '0',
                'display': 'block',
                'position': 'absolute',
                'left': '0px',
                'bottom': '0px'
            });
            
            setTimeout(function () {
                $(".myCareer").show();
                $(".myCareer .project1:first-child").show();
                $(".project1:first-child").addClass("myWidth");
            }, 2000);

            setTimeout(function () {
            $(".myCareer").show();
                $(".myCareer .project1:nth-child(2)").show();
                $(".project1:nth-child(2)").addClass("myWidth");
            }, 3000);

            setTimeout(function () {
            $(".myCareer").show();
                $(".myCareer .project1:nth-child(3)").show();
                $(".project1:nth-child(3)").addClass("myWidth");
            }, 4000);

            setTimeout(function () {
            $(".myCareer").show();
                $(".myCareer .project1:last-child").show();
                $(".project1:last-child").addClass("myWidth");
            }, 5000);
            
        });

        $(".leftBtn ul li:last-child").click(function () {
            $(".skillRanges").hide();
            $(".four").hide();
            $(".aboutMe").slideUp();
            $(".technicalSkills").slideUp();
            $(".close").hide();
            $(".project1").hide();
            $("#fourth").css({
                'width': '100%',
                'height': '100%',
                //'-webkit-transform': 'scale(100)',
                'border-radius': '0px',
                '-webkit-transition': 'all .5s ease-in-out',
                'z-index': '0',
                'display': 'block',
                'position': 'absolute',
                'left': '0px',
                'bottom': '0px'
            });
            setTimeout(function () {
                $(".contactMe").show("slow");
                //$(".close").show();
            }, 1000);
            setTimeout(function () {
                $(".close").show();
            }, 2000);
        });

        $(".close").click(function () {
            $(".aboutMe").hide();
            $(".technicalSkills").hide();
            $(".contactMe").hide();
            $(".close").hide();
            $(".skillRanges").hide();
            $(".project1").hide();
            $("#first").css({
                'width':'0%',
                'height':'0%',
                'border-radius':'50%',
            });
            
            $("#second").css({
                'width':'0%',
                'height':'0%',
                'border-radius':'50%',
            });
            
            $("#third").css({
                'width':'0%',
                'height':'0%',
                'border-radius':'50%',
            });

            $("#fourth").css({
                'width':'0%',
                'height':'0%',
                'border-radius':'50%',
            });

            $(".four").css({
                'width':'0%',
                'height':'100%'
                
            });
        });

        $(".mySkills").click(function(){
            
            var divHeight=$(window).height()-$(".skillRanges").height();
            $(".skillRanges").css("margin-top",divHeight/2);
            $(".aboutMe").hide();
            $("#first").hide();
            $("#second").hide();
            $("#third").hide();
            $("#fourth").hide();
            $(".four").hide();
            $(".project1").hide();
            $(".technicalSkills").hide();
            $(".contactMe").hide();
            $(".close").hide();
            //$(".skillRanges").hide();
            
            $(".four").css({
                'width': '100%',
                'height': '100%',
                //'-webkit-transform': 'scale(0)',
                '-webkit-transition': 'all 1s',
                'z-index': '0',
                'display': 'block',
                'position': 'absolute',
                'right': '0px',
                'bottom': '0px'
            });
            

            setTimeout(function(){
                $(".skillRanges").show();
            },1000);
            
            setTimeout(function(){
                $(".html").show();
                $(".pointer").show();
            },2000);

            setTimeout(function(){
                $(".jquery").show();
                $(".pointer1").show();
            },3000);

            setTimeout(function(){
                $(".css").show();
                $(".pointer2").show();
            },4000);

            setTimeout(function(){
                $(".photoshop").show();
                $(".pointer3").show();
                $(".close").show();
            },5000);
        });
    });


    
