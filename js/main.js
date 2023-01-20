var elForm = document.querySelector('.form');
var elInp = document.querySelector('.inp');
var elBtn = document.querySelector('.btn');
var elList = document.querySelector('.list');

var data = ['Olma', 'anor', 'ananas', 'kivi','banan','apelsin', 'mandarin','uzum','shaftoli', 'qulupnay', 'qovun','tarvuz', 'gilos','olcha','limon', 'sliva', 'nok', "o'rik", 'behi', "po'rtaxol", 'anjir', 'mango', 'kokos' ,'malina', 'tut','maymunjon','xurmo', 'zaytun', 'smorodina',"olxo'ri"];


elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    elList.innerHTML = ''
    var val = elInp.value;
    var newArr = [];
    data.forEach((e)=> {
        if(e.toString().toLowerCase().indexOf(val.trim().toLowerCase()) != -1 && val.trim() !== ''){
            newArr.push(e);
        elInp.style.border ='none'
        console.log(data);
        }
        elInp.value = '';
    });
    newArr.forEach((e,i)=>{
        var newLi = document.createElement('li');
        newLi.textContent = i+1+". " + e ;
        elList.appendChild(newLi);
    })
    console.log(newArr);
})
