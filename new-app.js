// [ ] make a form that when you submit the form it adds a task to the todo list with a name and a date it is supposed to be done
// [ ] each task should have a checkbox next to it
// [ ] when the checkbox is clicked the task should move from the todo to the done.
var taskOne = { name: "do some stuff", date: "02/16/2016" };
var todos = [taskOne];

$(document).ready(function(){
  $( "#submitTodo" ).click(function() {
 // fetch form taskName and dueDate.
    var taskName = $("#taskName").val()
    var dueDate = $("#dueDate").val()
    alert(taskName + " " + dueDate);
  });
})
