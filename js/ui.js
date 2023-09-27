$(function () {
    const $gnb = $('#header .gnb_area ul li a');

    let arrTopVal = [];

    // 브라우저 로드시 각 section의 탑의 위치 값
    $(window).on('load', function () {
        for(let i=0; i<$gnb.length; i++){
            arrTopVal[i] = $('section .nav_tag').eq(i).offset().top;   
        }

        // console.log(arrTopVal); // [-120, 700, 1420, 2240, 4119]
    });

    // 브라우저 스크롤 이동시 #header action
    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();

        // console.log(scrollTop)

        if(scrollTop == 0){
            // $('body').removeClass('scr_off');
            $('#header').removeClass('on');
            // $('#header .ham_btn').removeClass('on');
            // $('#header .gnb_area').removeClass('on');
        }else{
            $('#header').addClass('on');
        }

        for(let i=0; i<$gnb.length; i++){
            // console.log(i);
            if(scrollTop >= arrTopVal[i]){
                $gnb.eq(i).parent().addClass('on');
                $gnb.eq(i).parent().siblings().removeClass('on');
            }else if(scrollTop < arrTopVal[0]){
                $gnb.parent().removeClass('on');
            }
        }

        // 스크롤이 bottom에 닿을 시 gnb의 마지막 클래스 값
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
            $gnb.parent().last().addClass('on');
            $gnb.parent().last().siblings().removeClass('on');
        }
    });

    // 모바일 navigation
    $('#header .ham_btn button').on('click', function () {
        $('body').toggleClass('scr_off');
        $('#header .ham_btn').toggleClass('on');
        $('#header .gnb_area').toggleClass('on');
    });
    /* 
    $('#header .ham_btn button').on('click', function () {
        let scrollTop = $(window).scrollTop();

        if(scrollTop == 0){
            $('#header').toggleClass('on');
        }

        $('body').toggleClass('scr_off');
        $('#header .ham_btn').toggleClass('on');
        $('#header .gnb_area').toggleClass('on');
    });
    */
});