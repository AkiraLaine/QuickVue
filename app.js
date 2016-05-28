var initialData = [{task: "Learn VueJS", completed: false}]

if(window.localStorage){
	localStorage.setItem("todos", localStorage.getItem("todos") || JSON.stringify(initialData));
} else {
	document.getElementByID("app").append("Your browser does not support LocalStorage. Todo's will not be saved")
}

Vue.component("todos", {
	template: "#app-template",
	data: function() {
		return {
			value: "",
			todos: JSON.parse(localStorage.getItem("todos"))
		}
	},
	methods: {
			addTodo: function(){
				var item = this.value;
				if(item.trim() !== ""){
						this.todos.push({task: item, completed: false});
						localStorage.setItem("todos", JSON.stringify(this.todos));
						this.value = ""
				}
			},
			removeTodo: function($index){
				this.todos.splice($index, 1);
				localStorage.setItem("todos", JSON.stringify(this.todos));
			},
			toggleStatus: function(todo){
				todo.completed = !todo.completed;
				localStorage.setItem("todos", JSON.stringify(this.todos))
			},
			archiveAll: function(){
				this.todos = this.todos.filter(function(todo) {
					return !todo.completed
				})
			}
	}
})

new Vue({
    el: "#app"
})
