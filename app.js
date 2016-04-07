var todos = [{text: "Learn VueJS"}]

if(window.localStorage){
	localStorage.setItem("todos", localStorage.getItem("todos") || JSON.stringify(todos));
} else {
	alert("Your browser does not support LocalStorage. Todo's will not be saved")
}

new Vue({
    el: "#app",
    data: {
        value: "",
        todos: JSON.parse(localStorage.getItem("todos"))
    },
    methods: {
        addTodo: function(){
            var item = this.value;
            if(item.trim() !== ""){
                this.todos.push({text: item});
                localStorage.setItem("todos", JSON.stringify(this.todos));
                this.value = ""
            }
        },
        removeTodo: function($index){
            this.todos.splice($index, 1);
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    }
})
