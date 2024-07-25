document.getElementById('myButton').addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
