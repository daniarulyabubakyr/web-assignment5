// Change these two values before submitting the assignment.
var studentName = "Your Full Name";
var studentGroup = "Your Group";

// The script is shared. Each if statement checks whether we are on that page.
// Tasks 0 and 1: first script, variables, and operators.
if (document.getElementById("intro-page")) {
    console.log("Student: " + studentName);
    console.log("Group: " + studentGroup);

    document.getElementById("student-name").textContent = studentName;
    document.getElementById("student-group").textContent = studentGroup;

    var greeting = "Hello";
    var subject = "JavaScript!";
    var firstNumber = 12;
    var secondNumber = 4;
    var isLearning = true;

    var addition = firstNumber + secondNumber;
    var subtraction = firstNumber - secondNumber;
    var multiplication = firstNumber * secondNumber;
    var division = firstNumber / secondNumber;
    var joinedStrings = greeting + ", " + subject;

    console.log("String:", greeting);
    console.log("Numbers:", firstNumber, secondNumber);
    console.log("Boolean:", isLearning);
    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);
    console.log("Multiplication:", multiplication);
    console.log("Division:", division);
    console.log("Concatenation:", joinedStrings);

    document.getElementById("addition-result").textContent = addition;
    document.getElementById("subtraction-result").textContent = subtraction;
    document.getElementById("multiplication-result").textContent = multiplication;
    document.getElementById("division-result").textContent = division;
    document.getElementById("joined-strings").textContent = joinedStrings;

    alert("Hello, JavaScript World!");
}

// Task 2: replace a paragraph's text.
if (document.getElementById("change-text")) {
    document.getElementById("change-text").addEventListener("click", function () {
        document.getElementById("changing-text").textContent = "The paragraph has been changed with JavaScript!";
    });
}

// Task 3: use booleans to switch between two styles.
var colorChanged = false;
var sizeChanged = false;

if (document.getElementById("style-box")) {
    document.getElementById("change-color").addEventListener("click", function () {
        if (colorChanged) {
            document.getElementById("style-box").style.backgroundColor = "#f0f5fc";
            colorChanged = false;
        } else {
            document.getElementById("style-box").style.backgroundColor = "#d1fae5";
            colorChanged = true;
        }
    });

    document.getElementById("change-size").addEventListener("click", function () {
        if (sizeChanged) {
            document.getElementById("style-box").style.fontSize = "16px";
            sizeChanged = false;
        } else {
            document.getElementById("style-box").style.fontSize = "24px";
            sizeChanged = true;
        }
    });
}

// Task 4: create a new li or remove the last li.
function updateItemMessage() {
    var count = document.getElementById("item-list").children.length;
    if (count === 0) {
        document.getElementById("item-message").textContent = "The list is empty. Add an item to start again.";
    } else if (count === 1) {
        document.getElementById("item-message").textContent = "1 item in the list.";
    } else {
        document.getElementById("item-message").textContent = count + " items in the list.";
    }
    document.getElementById("remove-item").disabled = count === 0;
}

if (document.getElementById("item-list")) {
    document.getElementById("add-item").addEventListener("click", function () {
        var list = document.getElementById("item-list");
        var item = document.createElement("li");
        item.textContent = "Item " + (list.children.length + 1);
        list.appendChild(item);
        updateItemMessage();
    });

    document.getElementById("remove-item").addEventListener("click", function () {
        var list = document.getElementById("item-list");
        if (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
        updateItemMessage();
    });
}

// Task 5: mouse events change the box color.
function highlightBox() {
    document.getElementById("mouse-box").style.backgroundColor = "#d1fae5";
}

function restoreBox() {
    document.getElementById("mouse-box").style.backgroundColor = "#dbeafe";
}

if (document.getElementById("mouse-box")) {
    var mouseBox = document.getElementById("mouse-box");
    mouseBox.addEventListener("mouseover", highlightBox);
    mouseBox.addEventListener("mouseout", restoreBox);
    // Let keyboard and touch users try the same example.
    mouseBox.addEventListener("focus", highlightBox);
    mouseBox.addEventListener("blur", restoreBox);
    mouseBox.addEventListener("touchstart", highlightBox);
    mouseBox.addEventListener("touchend", restoreBox);
    mouseBox.addEventListener("touchcancel", restoreBox);
}

// Task 6: read the input after a key is released.
function showTypedText() {
    var text = document.getElementById("keyboard-input").value;
    if (text === "") {
        document.getElementById("keyboard-output").textContent = "Your text will appear here.";
    } else {
        document.getElementById("keyboard-output").textContent = text;
    }
}

if (document.getElementById("keyboard-input")) {
    document.getElementById("keyboard-input").addEventListener("keyup", showTypedText);
    // Also support pasting and mobile keyboards.
    document.getElementById("keyboard-input").addEventListener("input", showTypedText);
}

// Task 7: one basic function handles all four operations.
function calculate(operation) {
    var firstInput = document.getElementById("first-number");
    var secondInput = document.getElementById("second-number");
    var output = document.getElementById("calculator-result");
    output.className = "";

    if (firstInput.value === "" || secondInput.value === "") {
        output.textContent = "Please enter both numbers.";
        output.className = "error";
        return;
    }

    var a = Number(firstInput.value);
    var b = Number(secondInput.value);
    var result;

    if (!isFinite(a) || !isFinite(b)) {
        output.textContent = "Please enter valid, finite numbers.";
        output.className = "error";
        return;
    }

    if (operation === "+") {
        result = a + b;
    } else if (operation === "-") {
        result = a - b;
    } else if (operation === "*") {
        result = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            output.textContent = "Cannot divide by zero. Enter a different second number.";
            output.className = "error";
            return;
        }
        result = a / b;
    }

    if (!isFinite(result)) {
        output.textContent = "The result is too large. Try smaller numbers.";
        output.className = "error";
        return;
    }

    output.textContent = result;
}

if (document.getElementById("calculator-result")) {
    document.getElementById("calculate-add").addEventListener("click", function () {
        calculate("+");
    });
    document.getElementById("calculate-subtract").addEventListener("click", function () {
        calculate("-");
    });
    document.getElementById("calculate-multiply").addEventListener("click", function () {
        calculate("*");
    });
    document.getElementById("calculate-divide").addEventListener("click", function () {
        calculate("/");
    });
}

// Task 8: this array exists only while the page is open.
// Each task stores its text and a boolean that says whether it is completed.
var tasks = [];

function addTask() {
    var input = document.getElementById("task-input");
    var text = input.value.trim();
    var message = document.getElementById("task-message");

    if (text === "") {
        message.textContent = "Please enter a task before adding it.";
        message.className = "hint error";
        input.focus();
        return;
    }

    tasks.push({ text: text, completed: false });
    input.value = "";
    message.textContent = "Task added.";
    message.className = "hint";
    renderTasks();
    input.focus();
}

// Give each row its own index so its checkbox and button update the right task.
function createTaskRow(index) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    var text = document.createElement("span");
    var deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.checked = tasks[index].completed;
    // textContent displays task text safely, including any typed HTML.
    text.textContent = tasks[index].text;
    if (tasks[index].completed) {
        text.className = "completed";
    }

    checkbox.addEventListener("change", function () {
        tasks[index].completed = checkbox.checked;
        if (checkbox.checked) {
            text.className = "completed";
        } else {
            text.className = "";
        }
    });

    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function () {
        tasks.splice(index, 1);
        renderTasks();
        document.getElementById("task-message").textContent = "Task deleted.";
        document.getElementById("task-message").className = "hint";
        document.getElementById("task-input").focus();
    });

    label.appendChild(checkbox);
    label.appendChild(text);
    item.appendChild(label);
    item.appendChild(deleteButton);
    document.getElementById("task-list").appendChild(item);
}

// Rebuild the list after adding or deleting so every index stays correct.
function renderTasks() {
    document.getElementById("task-list").textContent = "";
    for (var i = 0; i < tasks.length; i++) {
        createTaskRow(i);
    }
    document.getElementById("empty-tasks").hidden = tasks.length > 0;
}

if (document.getElementById("todo-form")) {
    document.getElementById("todo-form").addEventListener("submit", function (event) {
        // Stop the form from reloading the page. Enter also submits this form.
        event.preventDefault();
        addTask();
    });
}
