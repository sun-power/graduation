/**
 * Created by Administrator on 2017/4/5.
 */
$(function(){
    //头部header开始
    $(".login-a").click(function(){
       $(".login").show();
    });
    $(".header-left .li1").mouseenter(function(){
        $(".li1-login").slideDown(500);
        $(".i1").fadeOut(500);
        $(".i1i").fadeIn(500);
    });
    $(".li1-login-p1").mouseenter(function(){
        $(".li1-login-p1").css({
            "border":"1px solid red",
            "color":"red"
        })
    });
    $(".login-left").mouseenter(function(){
        var index=$(this).index();
        $(".login-left").eq(index).addClass("login-left1").siblings().removeClass("login-left1");
    });
    $(".login-left").mouseleave(function(){
        $(".login-left").removeClass("login-left1");
    })
    $(".header-left .li1").mouseleave(function(){
        $(".li1-login").slideUp(500);
        $(".i1").fadeIn(500);
        $(".i1i").fadeOut(500);
    });
    $(".header-left .li2-span").mouseenter(function(){
        $(".header-left-div").show();
        $(".i2").hide();
        $(".i2i").show();
    });
    $(".header-left .li2-span").mouseleave(function(){
        $(".header-left-div").hide();
        $(".i2i").hide();
        $(".i2").show();
    });
    $(".header-right>li").mouseenter(function(){
        var index = $(this).index();
        if(index==0){
            $(".header-right-ul1").slideDown(500);
            $(".header-right-li1 .i4i").fadeIn();
            $(".header-right-li1 .i4").fadeOut();
            $(this).addClass("border");
        }
        else if(index==1){
            $(".header-right-div1").show();
            $(".header-right-li4 .i4i").fadeIn();
            $(".header-right-li4 .i4").fadeOut();
            $(this).addClass("border");
        }
        else if(index==2){
                $(".header-right-ul2").slideDown(500);
                $(".header-right-li2 .i4ia").fadeIn();
                $(".header-right-li2 .i4a").fadeOut();
                $(this).addClass("border");
        }
        else if(index==3){
            $(".header-right-ul3").slideDown(500);
            $(".header-right-li3 .i4ia").fadeIn();
            $(".header-right-li3 .i4a").fadeOut();
            $(this).addClass("border");
        }
        else if(index==4){
            $(".header-right-div2").show();
            $(".header-right-li5 .i4ia").fadeIn();
            $(".header-right-li5 .i4a").fadeOut();
            $(this).addClass("border");
        }
    });
    $(".header-right>li").mouseleave(function(){
        var index = $(this).index();
        if(index==0) {
            $(".header-right-ul1").hide();
            $(".header-right-li1 .i4").fadeIn();
            $(".header-right-li1 .i4i").fadeOut();
            $(this).removeClass("border");

        }
         else if(index==1){
            $(".header-right-div1").hide();
            $(".header-right-li4 .i4").fadeIn();
            $(".header-right-li4 .i4i").fadeOut();
            $(this).removeClass("border");
        }
        else if(index==2){
            $(".header-right-ul2").hide();
            $(".header-right-li2 .i4a").fadeIn();
            $(".header-right-li2 .i4ia").fadeOut();
            $(this).removeClass("border");
        }
        else if(index==3){
            $(".header-right-ul3").hide();
            $(".header-right-li3 .i4a").fadeIn();
            $(".header-right-li3 .i4ia").fadeOut();
            $(this).removeClass("border");
        }
        else if(index==4){
            $(".header-right-div2").hide();
            $(".header-right-li5 .i4a").fadeIn();
            $(".header-right-li5 .i4ia").fadeOut();
            $(this).removeClass("border");
        }
    });
    $(".i7").mouseenter(function(){
       $(".header-right-div3").show();
    });
    $(".i7").mouseleave(function(){
        $(".header-right-div3").hide();
    });
    //头部header结束
    //head开始
    $(".head-p").click(function(){
        $(".logo-top-img2").animate({
            "width":"1200px",
            "height":"300px"
        }).slideDown("fast");
        $(".logo-top-img1").hide();
        $(".head-p").hide();
        $(".head-p1").show();
    });
    $(".head-p1").click(function(){
        $(".logo-top-img2").animate({
            "height":"60px",
            "width":"1200px"
        }).slideUp();
        $(".logo-top-img1").css("height","60px").show();
        $(".head-p1").hide();
        $(".head-p").show();
    });
    $(".middle-head-ul").mouseenter(function(){
        $(".middle-head-ul").css("height","60px");
        $(".i9i").show();
        $(".i9").hide();
    });
    $(".middle-head-ul").mouseleave(function(){
        $(".middle-head-ul").css("height","30px");
        $(".i9").show();
        $(".i9i").hide();
    });
    $(".middle-head-ul li").click(function(){
        var index = $(this).index();
        $(".middle-head-ul li").eq(index).prependTo(".middle-head-ul");
    });
    $(".logo-right").mouseenter(function(){
        $(".logo-right").addClass("logo-right1");
        $(".shop-div").show();
    });
    $(".logo-right").mouseleave(function(){
        $(".logo-right").removeClass("logo-right1");
        $(".shop-div").hide();
    });
    //head结束
    //轮播图开始
    var num=$(".banner-imgbox img").size();
    //图片自动播放
    var timer = setInterval(move,3000);
    var i=0;
    function move(){
        i++;
        if(i==num){
            i=0;
        }
        $(".banner-imgbox-ul>li").eq(i).html("<span class='banner-imgbox-span3'></span>").
        siblings().html("");
        $(".banner-imgbox img").eq(i).show().siblings().hide();
    }
    $(".banner-imgbox-ul>li").mouseenter(function(){
        var index = $(this).index();
        $(".banner-imgbox-ul>li").eq(index).html("<span class='banner-imgbox-span3'></span>").
        siblings().html("");
        $(".banner-imgbox img").eq(index).show().siblings().hide();
    });
    $(".banner-imgbox>img").mouseenter(function(){
        clearInterval(timer);
    });
    $(".banner-imgbox>img").mouseleave(function(){
        timer=setInterval(move,3000);
    });
    //点击隐藏箭头使图片滚动
    $(".banner").mouseenter(function(){
        $(".banner-imgbox-span1").show();
        $(".banner-imgbox-span2").show();
    });
    $(".banner").mouseleave(function(){
        $(".banner-imgbox-span1").hide();
        $(".banner-imgbox-span2").hide();
    });
    $(".banner-imgbox-span1").click(function(){
        i--;
        if (i==-1){
            i=num-1;
        }
        $(".banner-imgbox-ul>li").eq(i).html("<span class='banner-imgbox-span3'></span>").
        siblings().html("");
        $(".banner-imgbox img").eq(i).show().siblings().hide();
    });
    $(".banner-imgbox-span2").click(function(){
        move();
    });
    //轮播图结束
    //bannerIn开始
    $(".bannerIn-left>li").mouseenter(function(){
        var index = $(this).index();
        $(".bannerIn-li-i"+(index+1)).css("display","none");
        $(".bannerIn-li-i"+(index+1)+"i").css("display","block");
        $(".bannerIn-left>li").eq(index).addClass("bannerIn-left-li").
        siblings().removeClass("bannerIn-left-li");
        $(".li-div").eq(index).css({'top':-(index*33)}).show();
    });
    $(".bannerIn-left>li").mouseleave(function(){
        var index = $(this).index();
        $(".bannerIn-li-i"+(index+1)).css("display","block");
        $(".bannerIn-li-i"+(index+1)+"i").css("display","none");
        $(".bannerIn-left>li").eq(index).removeClass("bannerIn-left-li");
        $(".li-div").eq(index).hide();
    });
    //bannerIn结束
    //showtime开始
    $(".showtime-top").mouseenter(function(){
        $(".i14").show();
        $(".i14i").hide();
        $(" .i15").show();
        $(".i15i").hide();
    });
    $(".showtime-top ").mouseleave(function(){
        $(".i14 ").hide();
        $(".i14i").show();
        $(".i15").hide();
        $(" .i15i").show();
    });
    var num1 =$(".showtimeIn-ul").size();
    $(".i15").click(function(){
        i++;
        if(i==num1){
            i=0;
        }
        $(".showtimeIn-ul").eq(i).show().siblings().hide();
    });
    $(".i14").click(function(){
        i--;
        if(i==-1){
            i==num1-1;
        }
        $(".showtimeIn-ul").eq(i).show().siblings().hide();
    });
    $(".showtime-bottom .img1").mouseenter(function(){
        var index= $(this).index();
        $(".showtime-bottom .img1").eq(index).animate({
            left:"60px"
        },500);
    });
    //showtime结束
    //show开始
    $(".show-t-left2a").mouseenter(function(){
        $(".show-t-img1").animate({
            left: "40px"
        },500)
    });
    $(".show-t-left2a").mouseleave(function(){
        $(".show-t-img1").animate({
            left: "50px"
        },500)
    });
    $(".show-t-left2b").mouseenter(function(){
        $(".show-t-img2").animate({
            left: "40px"
        },500)
    });
    $(".show-t-left2b").mouseleave(function(){
        $(".show-t-img2").animate({
            left: "50px"
        },500)
    })
    $(".show-t-left2c").mouseenter(function(){
        $(".show-t-img3").animate({
            left: "40px"
        },500)
    });
    $(".show-t-left2c").mouseleave(function(){
        $(".show-t-img3").animate({
            left: "50px"
        },500)
    })
    $(".show-t-left2d").mouseenter(function(){
        $(".show-t-img4").animate({
            left: "40px"
        },500)
    });
    $(".show-t-left2d").mouseleave(function(){
        $(".show-t-img4").animate({
            left: "50px"
        },500)
    });
    $(".show-t-left2e").mouseenter(function(){
        $(".show-t-img5").animate({
            left: "40px"
        },500)
    });
    $(".show-t-left2e").mouseleave(function(){
        $(".show-t-img5").animate({
            left: "50px"
        },500)
    });
    $(".show-t-left2f").mouseenter(function(){
        $(".show-t-img6").animate({
            left: "30px"
        },500)
    });
    $(".show-t-left2f").mouseleave(function(){
        $(".show-t-img6").animate({
            left: "40px"
        },500)
    });
    //show结束
    //固定顶部窗口开始
    $(window).scroll(function(){
        var scrollTop=$(document).scrollTop();
        if(scrollTop>=630){
            $(".searchFix").show();
        }else{
            $(".searchFix").hide();
        }
    });
    $(".searchFix h3").mouseenter(function(){
        $(".bannerIn-left").css({
            "position":"position",
            "z-index":"1000",
            "top":"50px",
            "left":"0"
        }).appendTo(".searchFix h3");
        $(".if1i").show();
        $(".if1").hide();
    });
    $(".searchFix h3").mouseleave(function(){
        $(".bannerIn-left").css({
            "position":"absolute",
            "top":"0",
            "left":"0"
        }).appendTo(".bannerIn");
        $(".if1").show();
        $(".if1i").hide();
    });
    //固定顶部窗口结束
    //右侧窗口开始
    //$(".rightMenu>p").mouseenter(function(){
    //    var index = $(this).index();
    //    if (index!=0)
    //    $(".rightMenu>p").eq(index).addClass("rightMenu-p").
    //    html("<img src='images/r"+(index+1)+".png'alt='loading..'/>").
    //    siblings().removeClass("rightMenu-p");
    //});
    //$(".rightMenu>p").mouseleave(function(){
    //    var index = $(this).index();
    //    if (index!=0)
    //        $(".rightMenu>p").eq(index).removeClass("rightMenu-p").
    //        html("<img src='images/right"+(index+1)+".png'alt='loading..'/>");
    //});
    //右侧窗口结束
    //menu菜单开始
    var num2=$(".menu-b-img").size();
    var timer1=setInterval(change,500);
    var timer2=setInterval(show,4000);
    var n=0;
    var m=0;
    function show() {
        n++;
        if (n == num2) {
            n = 0;
        }
        $(".menu-b-img").eq(n).show().siblings().hide();
    }
    function change(){
        n++;
        if(n==num2){
            n=0;
        }
        m++;
        if(m==8){
            m=0;
            $(".m-b-middle-ul .li1 span").remove();
            $(".m-b-middle-ul .li2 span").remove();
            $(".m-b-middle-ul .li3 span").remove();
        }
        $(".m-b-middle-ul .li1").append("<span class='menu-sprite'></span>");
        $(".m-b-middle-ul .li2").append("<span class='menu-sprite'></span>");
        $(".m-b-middle-ul .li3").append("<span class='menu-sprite'></span>");
    }




    //$(".m-b-middle-ul li").click(function(){
    //
    //});
    //menu菜单结束
});