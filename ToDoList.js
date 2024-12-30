const todolist = [];

function addTask(){
    const dueDate = document.querySelector(
        '.due-date-input');
    const TaskElem = document.querySelector('.js-task');
    const date = dueDate.value;
    const task = TaskElem.value;
    const taskObj = {
        date ,
        task
    }
    if(task !='' && date !=''){
    todolist.push( taskObj);
    TaskElem.value='';
    }

}
function displayTasks(){
    const ListElem = document.querySelector('.js-tasklist');
    ListElem.innerHTML = '';
    for(let i = 0 ; i < todolist.length ; i++ )
    { 
        const date = todolist[i].date;
        const task = todolist[i].task;
        ListElem.innerHTML += `<p class="tasks"
        > ${task}/t ${date}/t
        <button class="delete-task" 
        onclick=" todolist.splice(${ i }, 1);
        displayTasks();"
        >Delete</button> </p>`;
    } 
}

