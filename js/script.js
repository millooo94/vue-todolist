const app = new Vue({
    el: '.container',
    data: {
        arrTodo: [
            {
                todo: 'Studiare',
                status: false,
            },
            {
                todo: 'Fare la spesa',
                status: true,
            },
            {
                todo: 'Cucinare',
                status: false,
            },
        ],
        newTodo: {
            todo: '',
            status: false
        }
    },
    methods: {
        removeTodo(index){
            this.arrTodo.splice(index, 1)
        },
        addTodo(){
            this.arrTodo.push(this.newTodo)
            this.newTodo.todo = '';
        },
        changeStatus() {
            if (this.arrTodo.status) {
                !this.arrTodo.status
            }

        }
    },
})


