// age checker script 
function openAgeChecker() {
    document.getElementById("ageCheckerModal").style.display = "flex";
}

function closeAgeChecker() {
    document.getElementById("ageCheckerModal").style.display = "none";
}

function checkAge() {
    var ageInput = document.getElementById("age");
    var age = ageInput.value.trim();

    var resultContainer = document.getElementById("result");

    if (age === "") {
        resultContainer.innerHTML = "<div class='resultcard invalid-age-card'>Enter your age</div>";
        return;
    }

    age = parseInt(age);

    if (age >= 18) {

        resultContainer.innerHTML = "<div class='resultcard adult-card'><img src='Assets/img/Adult1.jpg' alt='Adult Image'><p>You are an adult</p></div>";

    } else if (age >= 1) {
        resultContainer.innerHTML = "<div class='resultcard child-card'><img src='Assets/img/Child1.jpg' alt='Child Image'><p>You are a child</p></div>";
    } else {

        resultContainer.innerHTML = "<div class='resultcard invalid-age-card'>Invalid Age!</div>";
    }
}



// window scrolling animation 
    window.addEventListener("scroll", function(){
        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 100);
    })

    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
