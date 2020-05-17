const STORAGE_KEY = "todo-storage";
new Vue({
    el:"#app",
    data:{
        // string, boolean
        todos:[],
        index:0,
        control:null
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    methods : {
        toggle:function(todo){
            todo.done= !todo.done;
        },    
        addAct(e){
            if(e.target.value.length!=0)
            {
                for(var i=0; i<this.todos.length; i++)
                {
                    this.control=false;
                    if(e.target.value == this.todos[i].text){
                        this.control = true;
                        return true;
                        break;
                    }
                }
                if(this.control == false || this.todos.length==0)
                {
                    this.todos.push({text:e.target.value, done:false});  
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos)); 
                    return false;   
                }
            }
        },
        delbut(tx){

            console.log(tx.key);

            for(var i=0; i<this.todos.length; i++)
            {
                if(this.todos[i].text==tx)
                {
                    this.index = i;
                    break;
                }
                else
                    this.index = -1;
            }

            if(this.index!=-1)
            {
                console.log(this.index); 
                this.todos.splice(this.index,1);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));      
            }                    
        },
    }
});