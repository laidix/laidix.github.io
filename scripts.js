// 1. Define the color combinations
var combos = {
    '#250D2D': '#A469DB', // Dark Purple BG, Lighter Purple Text/Accents
    '#1D1A0F': '#DBC66E', // Dark Brown BG, Gold Text/Accents
    '#382925': '#FFB5A0', // Dark Burgundy BG, Light Peach Text/Accents
    '#2A2E23': '#B1D18A', // Dark Green-Grey BG, Muted Green Text/Accents
};

// 2. Get an array of just the background colors (the keys)
var bg_colors = Object.keys(combos); 

// 3. Select a random background color (random key)
var random_bg = bg_colors[Math.floor(Math.random() * bg_colors.length)];

// 4. Look up the corresponding accent/text color (the value)
var accent_color = combos[random_bg];

// 5. Apply the colors

// Apply the background color to the body (most reliable method)
document.body.style.backgroundColor = random_bg;

// Apply the accent color to the text container
document.querySelector(".text-content").style.color = accent_color;

// Apply the accent color to the four corner SVGs and the arrow using `currentColor`
document.querySelectorAll(".corner-svg, .arrow").forEach(svg => {
    svg.style.color = accent_color; 
});

const hrElement = document.querySelector("hr"); 

if (hrElement) {
    // 2. Set the background-color property
    hrElement.style.backgroundColor = accent_color; 
}

document.addEventListener('DOMContentLoaded', () => {
    // Select the anchor tag inside the arrow SVG
    const arrowLink = document.querySelector('#arrow-down a');
    
    if (arrowLink) {
        arrowLink.addEventListener('click', function(e) {
            // 1. Prevent the default instant jump behavior
            e.preventDefault();
            
            // 2. Get the target section's ID (e.g., #next-section)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 3. Use the scrollIntoView method for smooth scrolling
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.querySelector(".content").style.color = accent_color;
document.querySelector(".followbtn").style.color = accent_color;
document.querySelector(".footer").style.backgroundColor = accent_color;
document.querySelector(".footer").style.color = backgroundColor;