
let type = document.querySelectorAll(".type")

let arr = Array.from(type)

arr.map((item)=>{
    let counter = 0;
    let text = item.innerHTML;
    item.innerHTML = ""
    function typejs(){
        item.innerHTML += text.charAt(counter++) 
        if(counter == text.length){
            clearInterval(stop)
        }
    }

    let stop = setInterval(()=>{
        typejs()
    },item.dataset.delay/text.length)
})

