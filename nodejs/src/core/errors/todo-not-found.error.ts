export class TodoNotFoundError extends Error {
  constructor(public readonly id: number) {
    super(`Todo with id ${id} not found`);
  }
}
