export interface Item {
  todo: string;
  id: string;
  completed: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _todo: string = "",
    private _id: string = "",
    private _completed: boolean = false
  ) {}

  /* Todo Value */
  set todo(value: string) {
    this._todo = value;
  }

  get todo(): string {
    return this._todo;
  }

  /* Id Value */
  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id;
  }

  /* Completed Value */
  set completed(value: boolean) {
    this._completed = value;
  }

  get completed(): boolean {
    return this._completed;
  }
}
