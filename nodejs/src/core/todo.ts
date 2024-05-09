export type Todo = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deadlineAt: Date;
  title: string;
  description: string;
  isDone: boolean;
};
