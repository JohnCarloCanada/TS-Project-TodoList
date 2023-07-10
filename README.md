# TS-Project-TodoList `based on the tutorial typescript of Dave Gray`
  The provided code represents a TypeScript implementation of a Todo List project. The project consists of several modules and classes that work together to create and manage a list of todo items. Here's a description of the project:

- ListItem: This class represents a single todo item and implements the Item interface. It has properties such as todo (the description of the item), id (a unique identifier), and completed (a boolean flag indicating whether the item is completed or not). It provides getters and setters for these properties.

- FullList: This class implements the List interface and represents the entire todo list. It provides methods for managing the list, including load() (retrieves stored todo lists from local storage and creates ListItem objects for each), save() (saves the current state of the list to the browser's localStorage), addItem() (adds a new item to the list), removeItem() (removes an item from the list based on its ID), and clearCompleted() (removes all completed items from the list). It uses the localStorage API for persistence.

- ListTemplate: This class implements the Template interface and is responsible for rendering the todo list on the webpage. It has a section property representing the HTML section element where the list will be displayed. The render() method takes a FullList object and generates the necessary HTML elements to display the list. It includes event listeners for marking items as completed and deleting items from the list.

- initApp(): This function initializes the application. It assigns instances of FullList and ListTemplate, retrieves HTML elements using selectors, and sets up event listeners for submitting new todo items and clearing completed items. It also loads the list from local storage and renders it using the template.

  The project follows a modular structure, separating concerns into different classes. It leverages TypeScript's type annotations and interfaces to provide type safety and enforce structure. The application handles basic functionality such as adding, removing, and marking items as completed, and it persists the list using local storage.
