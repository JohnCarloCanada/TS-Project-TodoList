import "./style/style.css";
import ListItem from "./Model/ListItem";
import FullList from "./Model/FullList";
import ListTemplate from "./Template/ListTemplate";

const initApp = (): void => {
  // Assign Instances
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  // Assign Selectors
  const dataInput = document.querySelector("[data-input]") as HTMLFormElement;
  const clearBtn = document.querySelector("[data-clear]") as HTMLButtonElement;
  const inputText = dataInput.querySelector(
    "input[name='todoinput']"
  ) as HTMLInputElement;

  // Submit Event
  dataInput.addEventListener<"submit">("submit", (e) => {
    e.preventDefault();

    if (!inputText.value || inputText.value.trim() === "") return;

    // Add New Todo Item
    const newText: string = inputText.value.trim().replace(/\s+/g, " ");
    const newID: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(newText, newID.toString());

    // Add the new item to the TodoList
    fullList.addItem(newItem);

    dataInput.reset();
    inputText.focus();

    // Render The List
    template.render(fullList);
  });

  clearBtn.addEventListener<"click">("click", () => {
    fullList.clearCompleted();
    template.render(fullList);
  });

  // Load The List from the local storage
  fullList.load();

  // Render The List
  template.render(fullList);
};

document.addEventListener<"DOMContentLoaded">("DOMContentLoaded", initApp);
