// Greeting message by time of day

window.onload = function () { 
    const hour = new Date().getHours(); 
    let greeting; 
    if (hour < 12) greeting = "Good Morning!"; 
    else if (hour < 18) greeting = "Good Afternoon!"; 
    else greeting = "Good Evening!"; 
    alert(greeting); 
};



// Floating button toggle 

document.addEventListener("DOMContentLoaded", () => { 
    const btn = document.getElementById("contact-btn"); 
    const card = document.getElementById("contact-card"); 
    btn.addEventListener("click", () => { 
        card.classList.toggle("show"); 
    }); 
});
