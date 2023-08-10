const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// product
var mainImg = document.getElementById('main-img')
var samlling = document.querySelectorAll('.smail-img')

samlling.forEach(img => {
    img.addEventListener('click', () => {
        mainImg.src = img.src
    })
})


// item detail
var pro = document.querySelectorAll('.pro')
pro.forEach(item => {
    item.addEventListener('click', () => {
        window.location.href = 'sproduct.html'
    })
})


// ! header search box
document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.querySelector(".searchIcon");
    var searchModal = document.getElementById("searchTool");

    searchButton.addEventListener("click", function () {
        searchModal.classList.toggle("hover");
    });
});

let btn1 = document.getElementById('toTop')
btn1.style.display = 'none'
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        btn1.style.display = 'block'
    } else {
        btn1.style.display = 'none'
    }
})

btn1.onclick = () => {
    window.scrollTo({
        to: 0,
        behavior: 'smooth'
    })
}

const title = document.querySelector('.title')
const titleIcon = document.querySelector('.icon-close')


title.addEventListener("click", () => {
    document.querySelector('.col-title-2').style.left = '0'

})
titleIcon.addEventListener("click", ()=>{
    document.querySelector('.col-title-2').style.left = '-500px'
})

// phan trang

let thisPage = 1
let litmit = 6
let list = document.querySelectorAll('.col-md-6')

function loadItem(){
    let beginGet = litmit* (thisPage -1)
    let endGet = litmit* thisPage - 1
    list.forEach((item, key) =>{
        if(key >=beginGet && key <=endGet){
            item.style.display = 'block'
        }else {
            item.style.display = 'none'
        }
    })
    listpage()
}
loadItem()

function listpage(){
    let count = Math.ceil(list.length / litmit)
    document.querySelector('.listPage').innerHTML = ''

    if(thisPage!=1){
        let prev = document.createElement('li')
        prev.innerText = 'PREV'
        prev.setAttribute('onclick', "changePage("+ (thisPage - 1) +")")
        document.querySelector('.listPage').appendChild(prev)

    }

    for(var i = 1; i<=count; i++){
        let newPage = document.createElement('li')
        newPage.innerText = i
        if(i == thisPage) {
            newPage.classList.add('active')
        }
        newPage.setAttribute('onclick', "changepage("+ i +")")
        document.querySelector('.listPage').appendChild(newPage)
    }
    if(thisPage!=count) {
        let next = document.createElement('li')
        next.innerText = 'NEXT'
        next.setAttribute('onclick', "changePage("+ (thisPage + 1) +")")
        document.querySelector('.listPage').appendChild(next)
    }
}
function changepage(i){
    thisPage = i
    loadItem()
}