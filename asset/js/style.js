/**
 * Created by Nguyen Phuong Thanh on 11/25/2015.
 */
$(document).ready(function(){
    if($(window).width() > 1024){
        $('.dropdown-toggle', $(".navbar")).removeAttr('data-toggle');
        /*$('.dropdown').hover(function(){
            $(this).addClass('open');
        },function(){
            $(this).removeClass('open');
        });*/

    }
    $(".default-skin").customScrollbar({
        vScroll:false,
        hScroll: true,
        /*skin: "default-skin",*/
        updateOnWindowResize: true
    });
    $('.tab-list-customize li a').on('click', function(e){
        e.preventDefault();
        $('.tab-list-customize li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.tab-content-customize .tab-pane').removeClass('active');
        var currentContent = $(this).attr('href');
        $(currentContent).addClass('active');
    })
    $('.nested-tab').nestedTab();
    $('.dropdown').hover(function(){
        $('body').addClass('overlay');
    }, function(){
        $('body').removeClass('overlay');
    })
})
$.fn.changeActive = function(id) {
    id.find('.item').on('click', function(){
        id.find('.item').removeClass('active');
        $(this).toggleClass('active');
    })
};

$.fn.nestedTab = function() {
    var tabList = $(this).find('.tab');
    $('.nested-tab .tab .title-tab').click(function(){
        /*tabList.removeCl;ass('active');*/
        var currentTab = $(this).parent('.tab');
        $('.nested-tab .tab.active').find('i').removeClass('fa-minus').addClass('fa-plus');
        $('.nested-tab .tab').not(currentTab).removeClass('active');

        /*console.log($(id).find('.tab').not($(this)).length());
        console.log($(id).find('.tab').length());*/
        currentTab.toggleClass('active');
        $(this).find('i').toggleClass('fa-plus').toggleClass('fa-minus');
    })
};