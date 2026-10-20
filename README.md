# Assignment #5 — JavaScript Basics (DOM Manipulation & Events)

A beginner-friendly university project with five linked pages. It demonstrates JavaScript variables, DOM manipulation, mouse and keyboard events, a calculator, and a temporary to-do list.

## Technologies

- HTML5 for page structure
- CSS3 for shared styling and responsive layouts
- Vanilla JavaScript for interactions

No frameworks, packages, database, or localStorage are needed.

## Files and completed tasks

| File | What it does |
| --- | --- |
| `index.html` | Task 0: connected script, name/group in the console, and welcome alert. Task 1: string, number, and boolean variables, arithmetic, and string concatenation. |
| `dom.html` | Task 2: change paragraph text. Task 3: change background color and font size. Task 4: create list items and remove the last one. |
| `events.html` | Task 5: change and restore box color with mouseover/mouseout. Task 6: show typed text with keyup. |
| `calculator.html` | Task 7: addition, subtraction, multiplication, and division with missing-input and division-by-zero checks. |
| `todo.html` | Task 8: add nonempty tasks, mark them complete with checkboxes and strikethrough, and delete them. |
| `style.css` | Shared Arial typography, light background, blue buttons, cards, navigation, and mobile layout. |
| `script.js` | All task functionality, grouped by task with simple comments. |
| `README.md` | Project description, running instructions, and publishing instructions. |

## Run the project

1. Keep all eight files together in one folder.
2. Open `script.js` in a text editor. Replace `Your Full Name` and `Your Group` on the first lines with your details.
3. Double-click `index.html` to open it in a browser. No installation or build command is required.
4. Dismiss the “Hello, JavaScript World!” alert.
5. Open Developer Tools with F12 or right-click → Inspect, then select Console to see Tasks 0 and 1.
6. Use the navigation bar to visit and try the remaining tasks.

The alert appears each time the introduction page loads. It does not appear on other pages.
To-do tasks exist only in the JavaScript array for the current page visit. Reloading the page clears them. Leaving the page does not save them.

## Publish with GitHub Pages

1. Sign in to GitHub and open the public repository [web-assignment5](https://github.com/daniarulyabubakyr/web-assignment5).
2. Choose **Add file → Upload files** and upload all eight project files into the repository root. `index.html` must be at the root, not inside another folder.
3. Commit the uploaded files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then click **Save**.
7. Wait for deployment to finish. GitHub Pages will display your website link: `https://daniarulyabubakyr.github.io/web-assignment5/`.
8. Open that link and check all five pages. Submit the repository link and published website link as required by your instructor.

All page and asset links are relative, so the project also works inside a GitHub Pages repository subfolder. This project is prepared for publishing; creating the repository and enabling Pages are separate steps.

Reference: [GitHub's official publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## How to explain the code

- `defer` runs the script after the HTML has been read.
- `getElementById()` finds an HTML element by its ID.
- Each page check prevents the shared script from using elements that are not on the current page.
- `addEventListener()` runs a function when an event happens.
- `textContent` changes text, and `style` changes a CSS property.
- `createElement()` and `appendChild()` build list items. `removeChild()` removes an item.
- The calculator uses `Number()` to convert input text and `if/else` to choose the operation.
- The to-do array stores each task's text and completion boolean. `push()` adds a task, and `splice()` removes one.
- A loop displays the array. `createTaskRow(index)` gives each checkbox and Delete button the index of its task.
- `preventDefault()` stops the to-do form from refreshing the page.

## Quick manual check

- Reload Introduction: check the exact welcome alert, your details, and arithmetic results (16, 8, 48, 3) in the console.
- DOM: change text, toggle both styles, add items, remove all items, then add again.
- Events: hover over and leave the box; type, erase, and paste into the input.
- Calculator: try all operations, decimals, negative numbers, empty fields, and division by zero.
- To-Do List: reject a blank task; add several tasks; check and uncheck them; delete a middle task; reload to clear the array.
- Resize the browser or use a phone to check the navigation and layout.
