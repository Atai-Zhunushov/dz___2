////1
const borderInner = document.getElementById('border_inner')
const animate = () => {
    let a = 0;
    let s = 2 * Math.PI / 180;
    setInterval(()=> {
        a += s
        borderInner.style.left = 235 + 250 * Math.sin(a) + 'px';
        borderInner.style.top = 235 + 250 * Math.cos(a) + 'px';
    },20)
}
animate()


////2

const text = document.querySelector('.text')

let count = 0;

const interval = setInterval(() => {
    count++
    text.innerText = count
    if (count === 300){
        clearInterval(interval)
        alert(`Timer doshol do 5 minut`)
}
},1000)

