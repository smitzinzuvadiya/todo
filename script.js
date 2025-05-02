let arr = [];

function add(){
    let data = document.getElementById('todo-input');
    let indata = data.value.trim();
    if(indata === ""){
        return;
    }
    arr.push(indata);
    data.value = '';
    display();
}

function display(){
    let d = document.getElementById('display');
    d.innerText = '';
    for(let i=0;i<arr.length;i++){

        d.innerText += i+1+" "+arr[i] + '\n';
    }
}

function remove(){
    let i = prompt('give no of task you wont to delete')
    i = parseInt(i)-1;
    if(i>=0 && i<=arr.length){
            arr.splice(i,1);
            display();
        }
        else {
            alert("Invalid task number");
        }
    
}

document.getElementById('todo-input').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        add();
    }
})




