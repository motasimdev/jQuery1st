$(function(){
    $("#toggle").click(function(){
        $(".box").toggle(1000)
    })
    
    // ===============================/
    $("#fadeOutIn").click(function(){
        $(".box").fadeToggle(1000)
    })
    // =========================
    $("#slideUpDown").click(function(){
        $(".box").slideToggle(1000)
    })
    // ============================
    $("#addClass").click(function(){
        $(".box").toggleClass("bou")
    })
    

})