import ListItem from "./ListItem";
interface List {
  list: ListItem[];
  save(): void;
  addItem(itemObj: ListItem): void;
  load(): void;
  removeItem(itemId: string): void;
  clearCompleted(): void;
}

interface StoredTodoList {
  _todo: string;
  _id: string;
  _completed: boolean;
}

export default class FullList implements List {
  // Create a singleton instance
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}

  // For getting all the items in the list
  get list(): ListItem[] {
    return this._list;
  }

  // Different methods for different actions

  /**
   * The `load` function retrieves stored todo lists from local storage and creates new `ListItem`
   * objects for each one.
   */
  load(): void {
    const storedTodoList: StoredTodoList[] | null = JSON.parse(
      localStorage.getItem("TodoList")!
    );

    storedTodoList?.forEach((list) => {
      const newTodoList = new ListItem(list._todo, list._id, list._completed);

      FullList.instance.addItem(newTodoList);
    });
  }

  /**
   * The save function saves the current state of the TodoList to the browser's localStorage.
   */
  save(): void {
    localStorage.setItem("TodoList", JSON.stringify(this._list));
  }

  /**
   * The `addItem` function adds a new item to a list and saves the updated list.
   * @param {ListItem} itemObj - The itemObj parameter is an object representing a new item to be added
   * to the list.
   */
  addItem(itemObj: ListItem): void {
    const newTodoList = [...this._list, itemObj];
    this._list = [...newTodoList];
    this.save();
  }

  /**
   * The `removeItem` function removes an item from a todo list based on its ID.
   * @param {string} itemId - The `itemId` parameter is a string that represents the unique identifier
   * of the item that needs to be removed from the list.
   */
  removeItem(itemId: string): void {
    const newTodoList = this._list.filter((list) => list.id !== itemId);
    this._list = [...newTodoList];
    this.save();
  }

  /**
   * The clearCompleted function removes all completed items from the todo list and saves the updated
   * list.
   */
  clearCompleted(): void {
    const newTodoList = this._list.filter((list) => !list.completed);
    this._list = [...newTodoList];
    this.save();
  }
}
