const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');
var delet = document.querySelector('#delete');
// this function will allow us to add elements when we click the button
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else
    {li = document.createElement('li');
    delbtn=document.createElement('span');
    delbtn.className='material-icons md-24';
    delbtn.innerHTML='delete';
    li.innerHTML = txt;
    li.appendChild(delbtn);
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    delet = document.querySelector('#delete');
}
};

delet.addEventListener('click', function(e){
    el.parentNode.removeChild(el);
})


//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};
