const addform=document.querySelector('.add');
const list=document.querySelector('.todos');

const generatetemplate=(todo=>{
    
    let html=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${todo}</span>
              <i class="far fa-edit edit" ></i>
              <i class="far fa-trash-alt delete"></i>
            </li>
    `;
    list.innerHTML+=html;
   
    localStorage.setItem('todos',JSON.stringify(html));
 console.log(html, '<<<<<<<<<<<')


})


addform.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addform.add.value.trim();

    if(todo.length){
        generatetemplate(todo);
        addform.reset();
    }
    
});
//delete
list.addEventListener('click',e=>{
   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
   }
});
//edit
list.addEventListener('click',e=>{
    if(e.target.classList.contains('edit')){
        const edithtml=(todo=>{
            const newhtml=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>${todo}</span>
              <i class="far fa-edit edit" ></i>
              <i class="far fa-trash-alt delete"></i>
            </li>
    `;
    list.innerHTML=newhtml;
    

})

        
    }
    
});




let data =  localStorage.getItem('todos');
data = JSON.parse(data);
console.log(data);
