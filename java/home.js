let userData =JSON.parse(localStorage.getItem(`data`))
let userLogin 
userData.forEach(user => {
    userLogin =user.userName
});
document.getElementById(`login`).innerHTML =`Hi ${userLogin}`

let logoutBtn =document.getElementById(`logoutBtn`)
logoutBtn.addEventListener(`click`,function(){
    localStorage.clear(userData)
    window.location.assign(`index.html`)
})

window.addEventListener(`scroll`,function(){
    let windowScroll = window.scrollY
    if(windowScroll > 100){
       $('.navbar').animate({'top':'0px' ,'width':'100%'})
       $('.to-up').css('display','flex')
    }
    else if(windowScroll < 100){
        $('.navbar').animate({'top':'50px' ,'width':'70%'})
       $('.to-up').css('display','none')
    }
    $('.to-up').click(()=>window.scrollTo(0,0))
})

let random =document.querySelectorAll(`#random`)
function randomRev(){
    for( let i=0 ; i <random.length ;i++ ){
        random[i].innerHTML =Math.round(Math.random()*4000)+`k`
    }
}
setInterval(randomRev ,2000)

$(document).ready(()=>{
    $('#loading img').fadeOut(2000 ,()=>{
        $('#loading').slideUp(2000 ,()=>{
            $('#loading').remove()
            $('body').css('overflow' ,'auto')
        })
    })
})