function openAgeChecker() {
    document.getElementById("ageCheckerModal").style.display = "flex";
}

function closeAgeChecker() {
    document.getElementById("ageCheckerModal").style.display = "none";
}

function checkAge() {
    var age = document.getElementById("age").value;
    age = parseInt(age);

    if (age >= 18) {
        document.getElementById("result").innerHTML = "<div class='card'>You are an adult</div>";
    } else {
        document.getElementById("result").innerHTML = "<div class='card'>You are a child</div>";
    }
}


    window.addEventListener("scroll", function(){
        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 50);
    })

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }