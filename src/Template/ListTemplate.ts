import FullList from "../Model/FullList";

interface Template {
  section: HTMLElement;
  clearList(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements Template {
  section: HTMLElement;
  // Create a singleton instance
  static instance: ListTemplate = new ListTemplate();
  private constructor() {
    this.section = document.querySelector("[data-todo-list]") as HTMLElement;
  }

  clearList(): void {
    this.section.innerHTML = "";
  }

  // Render The Current List[] from FullList
  render(fullList: FullList): void {
    this.clearList();
    fullList.list.forEach((list) => {
      const div = document.createElement("div") as HTMLDivElement;
      const inputCheck = document.createElement("input") as HTMLInputElement;
      const inputText = document.createElement("input") as HTMLInputElement;
      const button = document.createElement("button") as HTMLButtonElement;

      inputCheck.type = "checkbox";
      inputCheck.name = `${list.todo}Check`;
      inputCheck.id = `${list.todo}Check`;
      inputCheck.checked = list.completed;

      inputText.type = "text";
      inputText.name = `${list.todo}Text`;
      inputText.id = `${list.todo}Text`;
      inputText.value = list.todo;
      inputText.readOnly = true;

      button.textContent = "X";
      button.title = "Delete Todo";
      button.ariaLabel = " Delete Todo";

      div.append(inputCheck);
      div.append(inputText);
      div.append(button);
      this.section.append(div);

      // Event Listeners for every Todo List
      inputCheck.addEventListener<"change">("change", () => {
        list.completed = !list.completed;
        fullList.save();
      });

      button.addEventListener<"click">("click", () => {
        fullList.removeItem(list.id);
        this.render(fullList);
      });
    });
  }
}
