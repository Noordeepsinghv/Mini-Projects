const display = document.querySelector("div#display input");
const buttons = document.querySelectorAll(".calc-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    handleInput(btn);
  });
});

function handleInput(btn) {
  if (!btn) return;

  var value = btn.getAttribute("data-key");
  var start = display.selectionStart;
  var end = display.selectionEnd;
  var hasSelection = start !== end;

  switch (value) {
    case "AC": {
      display.value = "";
      display.selectionStart = 0;
      display.selectionEnd = 0;
      break;
    }
    case "C": {
      if (hasSelection) {
        display.value = display.value.slice(0, start) + display.value.slice(end);
        display.selectionStart = start;
        display.selectionEnd = start;
      } else if (start > 0) {
        display.value = display.value.slice(0, start - 1) + display.value.slice(start);
        display.selectionStart = start - 1;
        display.selectionEnd = start - 1;
      }
      break;
    }
    case "=": {
      if (!display.value.trim()) break;
      try {
        var result = eval(display.value);
        display.value = result;
        display.selectionStart = String(result).length;
        display.selectionEnd = display.selectionStart;
      } catch (err) {
        // Keep the current value on error; optionally could show feedback.
      }
      break;
    }
    default: {
      if (hasSelection) {
        display.value = display.value.slice(0, start) + value + display.value.slice(end);
        display.selectionStart = start + value.length;
        display.selectionEnd = start + value.length;
      } else {
        display.value = display.value.slice(0, start) + value + display.value.slice(start);
        display.selectionStart = start + value.length;
        display.selectionEnd = start + value.length;
      }
    }
  }

  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 150);

  // Scroll to the end to keep caret visible.
  display.scrollLeft = display.scrollWidth;
};

const isDisplayFocused = () => {
  return document.activeElement === display;
  // OR: return display.matches(":focus");
};

document.addEventListener("keydown", (e) => {
  let key = e.key;

  // map special keys
  if (key === "Enter") key = "=";
  if (key === "Escape") key = "AC";
  if (key === "Backspace" || key === "Delete") key = "C";
  
  let btn = document.querySelector(`.calc-btn[data-key="${key}"]`);

  if (!btn) return; // ignore unsupported keys so native navigation still works

  e.preventDefault();
  handleInput(btn);
});

document.addEventListener("click", () => {
  var start = display.selectionStart;
  var end = display.selectionEnd;
  
  console.log(start, end);
});
