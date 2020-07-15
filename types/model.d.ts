declare interface ArrayAction<T> {
  data: T[];
  type: string;
}

declare interface ErrorAction {
  error: string;
  type: string;
}

declare interface UserData {
  id: number;
  name: string;
}
