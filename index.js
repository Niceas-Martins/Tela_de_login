
let sub = document.querySelectorAll('.submit')
let entre =document.querySelectorAll('.Entre')
let login = document.querySelectorAll('.Login')
let sub1 = document.querySelectorAll('.submit1')
let back = document.querySelectorAll('.back')
sub.forEach(function(submit){
    submit.addEventListener("mouseover", function(){
        submit.style.backgroundColor= "Black"
    })
    submit.addEventListener("mouseout", function(){
        submit.style.backgroundColor= ""
    })
    submit.addEventListener("click", function(){
        submit.style.backgroundColor = "Black"
        window.location.href = 'index1.html'
    }) 

})

entre.forEach(function(entre){
    entre.addEventListener("mouseover", function(){
        entre.style.backgroundColor = "Black"
    }) 
    entre.addEventListener("click", function(){
        entre.style.backgroundColor = "Black"
        window.location.href = 'index1.html'
    }) 
    entre.addEventListener("mouseout", function(){
        entre.style.backgroundColor= ""
    })
})

sub1.forEach(function(sub){
    sub.addEventListener("mouseover", function(){
        sub.style.backgroundColor= "Black"
    })
    sub.addEventListener("mouseout", function(){
        sub.style.backgroundColor= ""
    })
    sub.addEventListener("click", function(){
        sub.style.backgroundColor = "Black"
        window.location.href = 'index.html'
    }) 

})



login.forEach(function(login){
     login.addEventListener("mouseover",function(){
        login.style.backgroundColor = "black"
     })
     login.addEventListener("click",function(){
        login.style.backgroundColor = "black"
        window.location.href = "index2.html"
     })
     login.addEventListener("mouseout", function(){
        login.style.backgroundColor = ""
     })
})

back.forEach(function(back){
    back.addEventListener("mouseover", function(){
         back.style.backgroundColor = "black"
    })
    back.addEventListener("mouseout", function(){
        back.style.backgroundColor = ""
   })
    back.addEventListener("click", function(){
         back.style.backgroundColor = "black"
         window.location.href = "index.html"
    })
})