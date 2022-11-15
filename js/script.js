const app = new Vue({
    el: '.container',
    data: {
        arrTodo: [
            {
                todo: 'Studiare',
                status: true,
            },
            {
                todo: 'Fare la spesa',
                status: false,
            },
            {
                todo: 'Cucinare',
                status: true,
            },
        ],
        inputTextTodo:"",
    },
    methods: {
        removeTodo(index){
            this.arrTodo.splice(index, 1)
        },
        addTodo(){
            if(this.inputTextTodo.trim()){
                this.arrTodo.push({todo: this.inputTextTodo.trim(), status:true});
                this.inputTextTodo = '';
            }
            
            
        },
        changeStatus(element) {
            if (element.status) {
                element.status = false
            } else {
                element.status = true
            }
        }
    },
})


