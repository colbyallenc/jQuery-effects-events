
    // $("p").click(function(){

    //     $(this).hide();
    // });

    $(".red").on("click", function(){
        $(this).fadeOut(400);
    });

    $("li").on("click", function(){
        console.log("this is a li: ", $(this).html())
    })

    // $("button").click(function(){
    //     $("input").toggle()
    // })

    // $("input").keyup(function(){
    //     var name = $(this).val()
    //     console.log(name)
    //     var fullThing = "hello" + name

    //     $("h1").text(fullThing);
    // })



   $("sign-up-form").submit(function(){
       var username = $("input[name='username]").val();
       console.log("Username is: ", username)
       var password = $("input[name='password']").val();
   })