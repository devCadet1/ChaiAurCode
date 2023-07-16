//  A callback is a function passed as an argument to another function.
//  This technique allows a function to call another function.
//  A callback function can run after another function has finished.

// Function Sequence

// JavaScripts functions are executed in the sequence they are called. Not in the sequence they are created or defined.
/*
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>Function Sequence</h2>
<p>JavaScript functions are executed in the sequence they are called.</p>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
</script>

</body>
</html>

*/

// The output of above code would be "Goodbye" as mySecond is executed last