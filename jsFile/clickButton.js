const $counter= document.getElementById('counter');
const $increase= document.getElementById('increase');
const $decrease= document.getElementById('decrease');

let num = 0;

$increase.addEventListener('click',function () {
    num++;
    $counter.innerHTML=num;
    console.log(`증가버튼 클릭 현재클릭수 ${num}`)
})


$decrease.addEventListener('click',function () {
    if(num>0) {
        num--;
        $counter.innerHTML = num;
        console.log(`감소버튼 클릭 현재클릭수 ${num}`)
    }else {
        console.log(`${num}에서는 작동하지않습니다!!`)
    }
})
