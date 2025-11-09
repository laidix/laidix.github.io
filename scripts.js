// 1. Define the color combinations
var combos = {
    '#250D2D': '#A469DB',
    '#1D1A0F': '#DBC66E',
    '#382925': '#FFB5A0',
    '#2A2E23': '#B1D18A',
};

// 2. Get an array of just the background colors (the keys)
var bg_colors = Object.keys(combos); 

// 3. Select a random background color (random key)
var random_bg = bg_colors[Math.floor(Math.random() * bg_colors.length)];

// 4. Look up the corresponding text color (the value)
var text_color = combos[random_bg];

// 5. Apply the colors (assuming '.hero' is the element you want to style)

// Apply background color to the first CSS rule (as in your original code)
document.styleSheets[0].cssRules[0].style.backgroundColor = random_bg;

// Apply text color to an element with the class 'hero'
// NOTE: Use [0] to select the first element returned by getElementsByClassName
document.getElementsByClassName("hero")[0].style.color = text_color;

//color: rgba(164, 105, 219, 1);