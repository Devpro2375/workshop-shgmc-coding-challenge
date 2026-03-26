const htmlChallenges = [
  {
    id: 'html-1', title: 'Your First Heading', difficulty: 'Easy',
    description: 'HTML uses tags like <h1> to <h6> for headings. h1 is the biggest, h6 is smallest. Try adding a heading and a paragraph below it!',
    concepts: ['Headings', 'Paragraphs'],
    starterCode: `<!-- Add a big heading saying "Hello World" -->\n<!-- Then add a paragraph saying "I am learning HTML" -->\n\n`,
    solution: `<h1>Hello World</h1>\n<p>I am learning HTML</p>`,
    explanation: `📌 <h1> creates the biggest heading — browsers show it large & bold.\n📌 <p> creates a paragraph of normal text.\n📌 Every tag has an opening <h1> and closing </h1> — closing tag has a /.\n📌 h1 to h6 go from biggest to smallest. Use h1 for the main title of the page.`,
    hints: ['Use <h1>Your Text</h1> for a big heading', '<p>Your text</p> creates a paragraph', 'Every opening tag <h1> needs a closing tag </h1>'],
    validate: (code) => code.includes('<h1>') && code.includes('<p>')
  },
  {
    id: 'html-2', title: 'Making a List', difficulty: 'Easy',
    description: 'Lists are everywhere on the web! Use <ul> for bullet points and <li> for each item. Make a list of 3 things you like.',
    concepts: ['Lists', '<ul>', '<li>'],
    starterCode: `<!-- Make a bullet point list with 3 items -->\n\n`,
    solution: `<ul>\n  <li>Pizza</li>\n  <li>Coding</li>\n  <li>Music</li>\n</ul>`,
    explanation: `📌 <ul> = Unordered List (bullet points). Use <ol> for numbered lists.\n📌 <li> = List Item — each item goes inside its own <li> tag.\n📌 The browser automatically adds bullets (•) for <ul> and numbers for <ol>.\n📌 Lists are used everywhere: menus, navigation, feature lists, etc.`,
    hints: ['<ul> starts an unordered (bullet) list', 'Each item goes inside <li>Item</li>', 'Close the list with </ul>'],
    validate: (code) => code.includes('<ul>') && code.includes('<li>')
  },
  {
    id: 'html-3', title: 'Adding a Link', difficulty: 'Easy',
    description: 'Links connect pages together! The <a> tag creates a clickable link. The href attribute tells where the link goes.',
    concepts: ['Links', 'href attribute'],
    starterCode: `<!-- Create a link that says "Visit Google" and goes to https://google.com -->\n\n`,
    solution: `<a href="https://google.com">Visit Google</a>`,
    explanation: `📌 <a> is the "anchor" tag — it creates clickable links.\n📌 href="URL" tells the browser WHERE to go when clicked.\n📌 The text between <a> and </a> is what the user sees and clicks.\n📌 Links are the backbone of the web — they connect pages together!`,
    hints: ['Use <a href="URL">Link Text</a>', 'href means "hypertext reference" — the web address', 'The text between <a> and </a> is what users click'],
    validate: (code) => code.includes('<a') && code.includes('href=')
  },
  {
    id: 'html-4', title: 'Adding an Image', difficulty: 'Easy',
    description: 'Images make pages come alive! The <img> tag adds pictures. It needs src (image URL) and alt (description for screen readers).',
    concepts: ['Images', 'src', 'alt attribute'],
    starterCode: `<!-- Add an image using this URL: https://picsum.photos/300/200 -->\n<!-- Don't forget the alt text! -->\n\n`,
    solution: `<img src="https://picsum.photos/300/200" alt="A random photo">`,
    explanation: `📌 <img> is self-closing — no </img> needed (it has no inner content).\n📌 src="URL" tells the browser where to find the image file.\n📌 alt="text" describes the image for blind users using screen readers.\n📌 alt text also shows up if the image fails to load.`,
    hints: ['<img> is a self-closing tag — no </img> needed', 'src="URL" tells the browser where the image is', 'alt="description" helps blind users understand the image'],
    validate: (code) => code.includes('<img') && code.includes('src=') && code.includes('alt=')
  },
  {
    id: 'html-5', title: 'Building a Form', difficulty: 'Easy',
    description: 'Forms collect user input! Use <input> for text boxes and <button> for submit. Let\'s make a simple login form.',
    concepts: ['Forms', 'Input', 'Button'],
    starterCode: `<form>\n  <!-- Add a text input for "Name" -->\n  <!-- Add a password input -->\n  <!-- Add a submit button -->\n  \n</form>`,
    solution: `<form>\n  <input type="text" placeholder="Your Name">\n  <input type="password" placeholder="Password">\n  <button type="submit">Login</button>\n</form>`,
    explanation: `📌 <form> wraps all the inputs — it groups them together.\n📌 type="text" creates a normal text box, type="password" hides the text.\n📌 placeholder shows gray hint text inside the input.\n📌 <button type="submit"> sends the form data (to a server in real apps).`,
    hints: ['<input type="text"> creates a text box', '<input type="password"> hides what you type', '<button>Click Me</button> creates a button'],
    validate: (code) => code.includes('type="text"') && code.includes('<button')
  },
  {
    id: 'html-6', title: 'Bold, Italic & More', difficulty: 'Easy',
    description: 'You can style text right in HTML! Use <strong> for bold, <em> for italic, and <br> for a line break.',
    concepts: ['Text Formatting', 'strong', 'em'],
    starterCode: `<!-- Write: "HTML is awesome" where "awesome" is bold -->\n<!-- On the next line write: "I love coding" where "love" is italic -->\n\n`,
    solution: `HTML is <strong>awesome</strong>\n<br>\nI <em>love</em> coding`,
    explanation: `📌 <strong> makes text bold — it also tells search engines this text is important.\n📌 <em> makes text italic — it adds emphasis (stress on the word).\n📌 <br> creates a line break — like pressing Enter. It's self-closing.\n📌 You can nest tags: <strong><em>bold and italic</em></strong>`,
    hints: ['<strong>text</strong> makes text bold', '<em>text</em> makes text italic', '<br> adds a line break (no closing tag needed)'],
    validate: (code) => code.includes('<strong>') && code.includes('<em>')
  },
  {
    id: 'html-7', title: 'Creating a Table', difficulty: 'Easy',
    description: 'Tables organize data in rows and columns. Use <table>, <tr> for rows, <th> for headers, and <td> for data cells.',
    concepts: ['Tables', '<tr>', '<td>'],
    starterCode: `<!-- Create a table with 2 columns: Name and Age -->\n<!-- Add 2 rows of data -->\n<table border="1">\n  \n</table>`,
    solution: `<table border="1">\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Rahul</td>\n    <td>20</td>\n  </tr>\n  <tr>\n    <td>Priya</td>\n    <td>21</td>\n  </tr>\n</table>`,
    explanation: `📌 <table> creates the table container.\n📌 <tr> = Table Row — each row of the table.\n📌 <th> = Table Header — bold & centered by default (for column titles).\n📌 <td> = Table Data — normal cells that hold your data.`,
    hints: ['<tr> creates a new row', '<th> is for header cells (bold by default)', '<td> is for normal data cells'],
    validate: (code) => code.includes('<tr>') && code.includes('<td>')
  },
  {
    id: 'html-8', title: 'Page Structure', difficulty: 'Easy',
    description: 'Every HTML page has a structure: <header> for the top, <main> for content, <footer> for the bottom. This helps browsers & search engines understand your page.',
    concepts: ['Semantic HTML', 'header', 'main', 'footer'],
    starterCode: `<!-- Build a page with header, main, and footer -->\n\n`,
    solution: `<header>\n  <h1>My Website</h1>\n</header>\n<main>\n  <p>Welcome to my page!</p>\n</main>\n<footer>\n  <p>Made with ❤️ in 2026</p>\n</footer>`,
    explanation: `📌 <header> = top section (logo, navigation, title).\n📌 <main> = the main content of the page (what the page is about).\n📌 <footer> = bottom section (copyright, links, credits).\n📌 These "semantic" tags help Google understand your page = better SEO!`,
    hints: ['<header> goes at the top — put your title here', '<main> is where your main content goes', '<footer> goes at the bottom — copyright, credits etc.'],
    validate: (code) => code.includes('<header>') && code.includes('<main>') && code.includes('<footer>')
  }
];

const cssChallenges = [
  {
    id: 'css-1', title: 'Change Colors', difficulty: 'Easy',
    description: 'CSS changes how things look! Use color for text color and background-color for background. Try changing the colors of the heading below.',
    concepts: ['color', 'background-color'],
    starterCode: `<style>\n  h1 {\n    /* Change text color to white */\n    /* Change background to purple */\n    \n  }\n</style>\n<h1>Hello CSS!</h1>`,
    solution: `<style>\n  h1 {\n    color: white;\n    background-color: purple;\n  }\n</style>\n<h1>Hello CSS!</h1>`,
    explanation: `📌 CSS goes inside <style> tags in HTML.\n📌 h1 { } is a "selector" — it targets all <h1> elements.\n📌 color: changes the TEXT color.\n📌 background-color: changes the BACKGROUND color.\n📌 Every property ends with a semicolon ;`,
    hints: ['color: white; changes text color', 'background-color: purple; changes background', 'Don\'t forget the semicolons!'],
    validate: (code) => code.includes('color:') && code.includes('background')
  },
  {
    id: 'css-2', title: 'Font & Text', difficulty: 'Easy',
    description: 'Make your text look amazing! Use font-size to change size, font-family to change the font, and text-align to center it.',
    concepts: ['font-size', 'font-family', 'text-align'],
    starterCode: `<style>\n  p {\n    /* Make font size 24px */\n    /* Change font to Arial */\n    /* Center the text */\n    \n  }\n</style>\n<p>I look awesome now!</p>`,
    solution: `<style>\n  p {\n    font-size: 24px;\n    font-family: Arial;\n    text-align: center;\n  }\n</style>\n<p>I look awesome now!</p>`,
    explanation: `📌 font-size: sets how big the text is (px = pixels).\n📌 font-family: changes the font style (Arial, Verdana, Times, etc.).\n📌 text-align: center puts text in the middle. Also works: left, right.\n📌 These 3 properties control 90% of text styling!`,
    hints: ['font-size: 24px; makes text bigger', 'font-family: Arial; changes the font', 'text-align: center; centers text'],
    validate: (code) => code.includes('font-size') && code.includes('text-align')
  },
  {
    id: 'css-3', title: 'Box Model: Padding & Margin', difficulty: 'Easy',
    description: 'Every element is a box! Padding adds space INSIDE the box, margin adds space OUTSIDE. Border creates the box outline.',
    concepts: ['padding', 'margin', 'border'],
    starterCode: `<style>\n  .box {\n    background-color: #6c63ff;\n    color: white;\n    /* Add 20px padding (inside space) */\n    /* Add 10px margin (outside space) */\n    /* Add a 2px solid white border */\n    \n  }\n</style>\n<div class="box">I am a box!</div>\n<div class="box">Me too!</div>`,
    solution: `<style>\n  .box {\n    background-color: #6c63ff;\n    color: white;\n    padding: 20px;\n    margin: 10px;\n    border: 2px solid white;\n  }\n</style>\n<div class="box">I am a box!</div>\n<div class="box">Me too!</div>`,
    explanation: `📌 padding = space INSIDE the box (between text and border).\n📌 margin = space OUTSIDE the box (between this box and others).\n📌 border = the outline: width style color (e.g., 2px solid white).\n📌 Think of it like a gift box: padding is the foam inside, border is the box, margin is the gap between boxes.`,
    hints: ['padding: 20px; adds space inside the box', 'margin: 10px; adds space between boxes', 'border: 2px solid white; draws a border'],
    validate: (code) => code.includes('padding') && code.includes('margin') && code.includes('border')
  },
  {
    id: 'css-4', title: 'Flexbox: Center Anything', difficulty: 'Easy',
    description: 'Flexbox is the easiest way to center and align things! Use display: flex, then justify-content and align-items to position items.',
    concepts: ['display: flex', 'justify-content', 'align-items'],
    starterCode: `<style>\n  .container {\n    height: 200px;\n    background: #1a1a2e;\n    /* Make this a flex container */\n    /* Center items horizontally */\n    /* Center items vertically */\n    \n  }\n  .item {\n    background: #6c63ff;\n    color: white;\n    padding: 20px;\n    border-radius: 8px;\n  }\n</style>\n<div class="container">\n  <div class="item">I'm centered!</div>\n</div>`,
    solution: `<style>\n  .container {\n    height: 200px;\n    background: #1a1a2e;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .item {\n    background: #6c63ff;\n    color: white;\n    padding: 20px;\n    border-radius: 8px;\n  }\n</style>\n<div class="container">\n  <div class="item">I'm centered!</div>\n</div>`,
    explanation: `📌 display: flex turns a container into a "flex box" — its children become flexible.\n📌 justify-content: center → centers items left-to-right (horizontal).\n📌 align-items: center → centers items top-to-bottom (vertical).\n📌 These 3 lines are the most popular way to center anything in CSS!`,
    hints: ['display: flex; turns on flexbox', 'justify-content: center; centers horizontally', 'align-items: center; centers vertically'],
    validate: (code) => code.includes('display: flex') && code.includes('justify-content') && code.includes('align-items')
  },
  {
    id: 'css-5', title: 'Hover Effects', difficulty: 'Easy',
    description: 'Make things interactive! Use :hover to change styles when someone moves their mouse over an element.',
    concepts: [':hover', 'transition', 'cursor'],
    starterCode: `<style>\n  .btn {\n    background: #6c63ff;\n    color: white;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 8px;\n    font-size: 16px;\n    cursor: pointer;\n    /* Add smooth transition */\n    \n  }\n  /* Add hover: change background to #8b5cf6, make slightly bigger with transform: scale(1.1) */\n  \n</style>\n<button class="btn">Hover over me!</button>`,
    solution: `<style>\n  .btn {\n    background: #6c63ff;\n    color: white;\n    padding: 12px 24px;\n    border: none;\n    border-radius: 8px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  .btn:hover {\n    background: #8b5cf6;\n    transform: scale(1.1);\n  }\n</style>\n<button class="btn">Hover over me!</button>`,
    explanation: `📌 :hover is a "pseudo-class" — it applies styles when mouse is over the element.\n📌 transition: all 0.3s makes changes smooth (0.3 seconds to animate).\n📌 transform: scale(1.1) makes the element 10% bigger.\n📌 Without transition, the change would be instant and jarring!`,
    hints: ['transition: all 0.3s; makes changes smooth', '.btn:hover { } adds styles on mouse hover', 'transform: scale(1.1) makes it 10% bigger'],
    validate: (code) => code.includes(':hover') && code.includes('transition')
  },
  {
    id: 'css-6', title: 'CSS Variables', difficulty: 'Easy',
    description: 'CSS variables let you save values and reuse them! Define them with -- prefix and use them with var(). Change once, update everywhere!',
    concepts: ['CSS Variables', ':root', 'var()'],
    starterCode: `<style>\n  :root {\n    /* Define --main-color as #6c63ff */\n    /* Define --text-color as white */\n    \n  }\n  .card {\n    /* Use var(--main-color) for background */\n    /* Use var(--text-color) for color */\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n  }\n</style>\n<div class="card">\n  <h2>CSS Variables Rock!</h2>\n  <p>Change the variable, everything updates!</p>\n</div>`,
    solution: `<style>\n  :root {\n    --main-color: #6c63ff;\n    --text-color: white;\n  }\n  .card {\n    background: var(--main-color);\n    color: var(--text-color);\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n  }\n</style>\n<div class="card">\n  <h2>CSS Variables Rock!</h2>\n  <p>Change the variable, everything updates!</p>\n</div>`,
    explanation: `📌 :root means "the whole page" — variables defined here work everywhere.\n📌 --name: value defines a variable (must start with --).\n📌 var(--name) uses the variable wherever you need that value.\n📌 Change the variable once, and every place using it updates automatically!`,
    hints: ['Define variables in :root { --name: value; }', 'Use them with var(--name)', 'Try changing the value — everything using it updates!'],
    validate: (code) => code.includes('--') && code.includes('var(--')
  },
  {
    id: 'css-7', title: 'CSS Grid Layout', difficulty: 'Easy',
    description: 'CSS Grid makes layouts easy! Use display: grid and grid-template-columns to create columns. gap adds space between items.',
    concepts: ['display: grid', 'grid-template-columns', 'gap'],
    starterCode: `<style>\n  .grid {\n    /* Make this a grid with 3 equal columns */\n    /* Add 10px gap between items */\n    \n  }\n  .card {\n    background: #6c63ff;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    border-radius: 8px;\n  }\n</style>\n<div class="grid">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n  <div class="card">Card 4</div>\n  <div class="card">Card 5</div>\n  <div class="card">Card 6</div>\n</div>`,
    solution: `<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n  }\n  .card {\n    background: #6c63ff;\n    color: white;\n    padding: 20px;\n    text-align: center;\n    border-radius: 8px;\n  }\n</style>\n<div class="grid">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n  <div class="card">Card 4</div>\n  <div class="card">Card 5</div>\n  <div class="card">Card 6</div>\n</div>`,
    explanation: `📌 display: grid turns the container into a grid layout.\n📌 grid-template-columns: 1fr 1fr 1fr creates 3 equal columns.\n📌 1fr = "1 fraction" of available space (equal sharing).\n📌 gap: 10px adds space between all grid items (rows & columns).`,
    hints: ['display: grid; turns on CSS Grid', 'grid-template-columns: 1fr 1fr 1fr; makes 3 equal columns', 'gap: 10px; adds space between grid items'],
    validate: (code) => code.includes('display: grid') && code.includes('grid-template-columns')
  },
  {
    id: 'css-8', title: 'Simple Animation', difficulty: 'Easy',
    description: 'CSS can animate things! Use @keyframes to define the animation steps and animation property to apply it. Let\'s make a bouncing box!',
    concepts: ['@keyframes', 'animation'],
    starterCode: `<style>\n  .ball {\n    width: 50px;\n    height: 50px;\n    background: #6c63ff;\n    border-radius: 50%;\n    /* Add animation: bounce 1s infinite */\n    \n  }\n  /* Create @keyframes bounce: at 50% move up using transform: translateY(-80px) */\n  \n</style>\n<div class="ball"></div>`,
    solution: `<style>\n  .ball {\n    width: 50px;\n    height: 50px;\n    background: #6c63ff;\n    border-radius: 50%;\n    animation: bounce 1s infinite;\n  }\n  @keyframes bounce {\n    0% { transform: translateY(0); }\n    50% { transform: translateY(-80px); }\n    100% { transform: translateY(0); }\n  }\n</style>\n<div class="ball"></div>`,
    explanation: `📌 @keyframes defines what happens at each step of the animation.\n📌 0% = start, 50% = middle, 100% = end of the animation.\n📌 animation: bounce 1s infinite → name, duration, repeat forever.\n📌 transform: translateY(-80px) moves the element up by 80 pixels.`,
    hints: ['animation: bounce 1s infinite; applies the animation', '@keyframes bounce { } defines what happens', 'transform: translateY(-80px) moves it up 80px'],
    validate: (code) => code.includes('@keyframes') && code.includes('animation')
  }
];

const jsChallenges = [
  {
    id: 'js-1', title: 'Hello Console!', difficulty: 'Easy',
    description: 'console.log() prints messages to the console. It\'s how developers check if their code works. Try printing your name!',
    concepts: ['console.log', 'Strings'],
    starterCode: `// Print "Hello World" to the console\n\n\n// Print your name\n\n\n// Print a number\n\n`,
    solution: `console.log("Hello World");\n\nconsole.log("My name is Dev");\n\nconsole.log(42);`,
    explanation: `📌 console.log() prints anything to the console — your debugging best friend!\n📌 Text (strings) go in quotes: "Hello" or 'Hello' — both work.\n📌 Numbers don't need quotes: 42 is a number, "42" is text.\n📌 You can print multiple things: console.log("Age:", 20)`,
    hints: ['console.log("text") prints text', 'Put text inside quotes: "like this"', 'Numbers don\'t need quotes: console.log(42)'],
    validate: (code) => code.includes('console.log')
  },
  {
    id: 'js-2', title: 'Variables', difficulty: 'Easy',
    description: 'Variables store data! Use let for things that change and const for things that stay the same. Like labeled boxes holding your stuff.',
    concepts: ['let', 'const', 'Variables'],
    starterCode: `// Create a variable "name" with your name\n\n\n// Create a variable "age" with your age\n\n\n// Print: "Hi, I am [name] and I am [age] years old"\nconsole.log();\n`,
    solution: `const name = "Dev";\n\nlet age = 20;\n\nconsole.log("Hi, I am " + name + " and I am " + age + " years old");`,
    explanation: `📌 const = constant, value can't change later (use for fixed things like names).\n📌 let = the value CAN change later (use for things like scores, counters).\n📌 "text" + variable joins them together (called concatenation).\n📌 Rule of thumb: use const by default, let only when value will change.`,
    hints: ['const name = "Dev"; creates a constant', 'let age = 20; creates a changeable variable', 'Use + to join strings: "Hello " + name'],
    validate: (code) => (code.includes('let ') || code.includes('const ')) && code.includes('console.log')
  },
  {
    id: 'js-3', title: 'Simple Math', difficulty: 'Easy',
    description: 'JavaScript can do math! Use +, -, *, / for basic operations. Let\'s calculate some things!',
    concepts: ['Arithmetic', 'Operators', 'Math'],
    starterCode: `let a = 10;\nlet b = 3;\n\n// Print a + b\nconsole.log("Sum:", );\n\n// Print a * b\nconsole.log("Product:", );\n\n// Print the remainder of a / b (use %)\nconsole.log("Remainder:", );\n`,
    solution: `let a = 10;\nlet b = 3;\n\nconsole.log("Sum:", a + b);\n\nconsole.log("Product:", a * b);\n\nconsole.log("Remainder:", a % b);`,
    explanation: `📌 + adds, - subtracts, * multiplies, / divides — just like math class.\n📌 % (modulo) gives the REMAINDER: 10 % 3 = 1 (because 10 ÷ 3 = 3 remainder 1).\n📌 JS follows math order: * and / happen before + and -.\n📌 Use parentheses to control order: (2 + 3) * 4 = 20`,
    hints: ['a + b adds the numbers', 'a * b multiplies them', 'a % b gives the remainder (10 % 3 = 1)'],
    validate: (code) => code.includes('+') && code.includes('*') && code.includes('console.log')
  },
  {
    id: 'js-4', title: 'If / Else', difficulty: 'Easy',
    description: 'Make decisions in your code! if checks a condition — if true, run the code. else runs when the condition is false.',
    concepts: ['if', 'else', 'Conditions'],
    starterCode: `let score = 75;\n\n// If score >= 80, print "Great job!"\n// If score >= 50, print "You passed!"\n// Otherwise, print "Try again!"\n\n`,
    solution: `let score = 75;\n\nif (score >= 80) {\n  console.log("Great job!");\n} else if (score >= 50) {\n  console.log("You passed!");\n} else {\n  console.log("Try again!");\n}`,
    explanation: `📌 if (condition) checks if something is true or false.\n📌 >= means "greater than or equal to", == means "equal to".\n📌 else if adds another condition to check (like a backup plan).\n📌 else catches everything that didn't match above — the "otherwise" case.\n📌 Only ONE block runs — JS checks top to bottom and stops at the first match.`,
    hints: ['if (condition) { code } runs code when true', 'else if (condition) { } adds another check', 'else { } runs when nothing else matched'],
    validate: (code) => code.includes('if') && code.includes('else') && code.includes('console.log')
  },
  {
    id: 'js-5', title: 'Arrays', difficulty: 'Easy',
    description: 'Arrays are lists of items! Use [] to create them. You can add, remove, and access items by their position (starting from 0).',
    concepts: ['Arrays', 'push', 'length'],
    starterCode: `// Create an array of 3 fruits\nlet fruits = [];\n\n// Print the first fruit (index 0)\nconsole.log("First:", );\n\n// Add "Mango" to the end\n\n\n// Print how many fruits total\nconsole.log("Total:", );\n\n// Print the whole array\nconsole.log("All fruits:", fruits);\n`,
    solution: `let fruits = ["Apple", "Banana", "Orange"];\n\nconsole.log("First:", fruits[0]);\n\nfruits.push("Mango");\n\nconsole.log("Total:", fruits.length);\n\nconsole.log("All fruits:", fruits);`,
    explanation: `📌 Arrays start counting at 0: fruits[0] is the FIRST item, fruits[1] is second.\n📌 .push("item") adds an item to the END of the array.\n📌 .length tells you how many items are in the array.\n📌 Arrays can hold anything: numbers, strings, even other arrays!`,
    hints: ['let fruits = ["Apple", "Banana"] creates an array', 'fruits[0] gets the first item (counting starts at 0)', 'fruits.push("Mango") adds to the end'],
    validate: (code) => code.includes('[') && code.includes(']') && code.includes('console.log')
  },
  {
    id: 'js-6', title: 'Loops', difficulty: 'Easy',
    description: 'Loops repeat code! A for loop runs code a specific number of times. Great for going through arrays or repeating tasks.',
    concepts: ['for loop', 'Iteration'],
    starterCode: `// Print numbers 1 to 5 using a for loop\n\n\n// Bonus: Loop through this array and print each color\nlet colors = ["Red", "Green", "Blue"];\n\n`,
    solution: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n\nlet colors = ["Red", "Green", "Blue"];\nfor (let i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}`,
    explanation: `📌 for (start; condition; step) — 3 parts separated by semicolons.\n📌 let i = 1 → start at 1. i <= 5 → keep going while i is 5 or less. i++ → add 1 each time.\n📌 i++ is shorthand for i = i + 1.\n📌 To loop through an array: start at 0, go while i < array.length.`,
    hints: ['for (let i = 1; i <= 5; i++) counts from 1 to 5', 'i++ means i = i + 1 (increase by 1)', 'Use array.length to loop through all items'],
    validate: (code) => code.includes('for') && code.includes('console.log')
  },
  {
    id: 'js-7', title: 'Functions', difficulty: 'Easy',
    description: 'Functions are reusable blocks of code! Define once, use many times. They can take inputs (parameters) and return outputs.',
    concepts: ['function', 'Parameters', 'return'],
    starterCode: `// Create a function "greet" that takes a name and returns "Hello, [name]!"\n\n\n// Test it\nconsole.log(greet("Rahul"));\nconsole.log(greet("Priya"));\n\n// Create a function "add" that takes 2 numbers and returns their sum\n\n\nconsole.log("5 + 3 =", add(5, 3));\n`,
    solution: `function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet("Rahul"));\nconsole.log(greet("Priya"));\n\nfunction add(a, b) {\n  return a + b;\n}\n\nconsole.log("5 + 3 =", add(5, 3));`,
    explanation: `📌 function name(params) { } defines a reusable block of code.\n📌 Parameters (like "name") are inputs — placeholders for values you pass in.\n📌 return sends a value back to where the function was called.\n📌 greet("Rahul") calls the function and "Rahul" becomes the name parameter.`,
    hints: ['function name(param) { return value; }', 'Parameters are inputs: function greet(name)', 'return sends a value back to where it was called'],
    validate: (code) => code.includes('function') && code.includes('return')
  },
  {
    id: 'js-8', title: 'DOM: Change the Page!', difficulty: 'Easy',
    description: 'JavaScript can change what\'s on the page! Use document.querySelector to select an element, then change its .textContent or .style.',
    concepts: ['querySelector', 'textContent', 'style'],
    starterCode: `// Select the heading and change its text to "JavaScript is Fun!"\nconst heading = document.querySelector("h1");\n\n\n// Change the heading color to "#6c63ff"\n\n\n// Change the paragraph text to "I just changed this with JS!"\nconst para = document.querySelector("p");\n\n\nconsole.log("Done! Check the preview tab!");`,
    html: `<h1>Change Me!</h1>\n<p>Change me too!</p>`,
    solution: `const heading = document.querySelector("h1");\nheading.textContent = "JavaScript is Fun!";\n\nheading.style.color = "#6c63ff";\n\nconst para = document.querySelector("p");\npara.textContent = "I just changed this with JS!";\n\nconsole.log("Done! Check the preview tab!");`,
    explanation: `📌 document.querySelector("h1") finds the FIRST h1 on the page.\n📌 .textContent = "new text" replaces the text inside that element.\n📌 .style.color = "blue" changes CSS properties directly from JS.\n📌 This is the DOM (Document Object Model) — JS's way of talking to HTML!`,
    hints: ['document.querySelector("h1") selects the first h1', '.textContent = "new text" changes the text', '.style.color = "blue" changes the CSS color'],
    validate: (code) => code.includes('querySelector') && code.includes('textContent')
  }
];

export const modules = [
  { id: 'html', name: 'HTML', icon: '🏗️', color: '#e44d26', challenges: htmlChallenges },
  { id: 'css', name: 'CSS', icon: '🎨', color: '#264de4', challenges: cssChallenges },
  { id: 'js', name: 'JavaScript', icon: '⚡', color: '#f7df1e', challenges: jsChallenges }
];
