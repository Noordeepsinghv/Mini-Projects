function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal <= 0) {
        alert("Please enter a positive number for Principal");
        document.getElementById("principal").focus();
        return;
    }

    var interest = (principal * rate * years) / 100;
    var totalAmount = parseFloat(principal) + parseFloat(interest);
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML =
        "If you deposit <span id='output'>" + principal + "</span>,<br>" +
        "at an interest rate of <span id='output'>" + rate + "%</span>.<br>" +
        "You will receive an amount of <span id='output'>" + totalAmount.toFixed(2) + "</span>,<br>" +
        "in the year <span id='output'>" + year + "</span>.";                   
}
function updateRate() {
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rateValue").value = rateValue + "%";
}
function updateRateValue() {
    var rate = document.getElementById("rateValue").value;
    document.getElementById("rate").value = rate;
}

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleThemeChange(queary) {
  if (queary.matches) {
    document.body.classList.add('dark-mode');
    document.getElementById("DayNightIcon").src = "solid-white-moon-symbol.png";
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById("DayNightIcon").src = "solid-black-sun-symbol.png";
  }
}

// Initial check
handleThemeChange(darkModeQuery);

// Listen for changes
darkModeQuery.addEventListener('change', handleThemeChange);


function toggleDayNight() {
    const body = document.body;
    const icon = document.getElementById("DayNightIcon");
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        icon.src = "solid-black-sun-symbol.png"; // Day icon
    } else {
        body.classList.add('dark-mode');
        icon.src = "solid-white-moon-symbol.png"; // Night icon
    }
}