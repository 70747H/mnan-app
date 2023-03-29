import { TodoDto } from 'src/todos/dto/todo.dto';
import { TodoEntity } from 'src/todos/entities/todo.entity';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;

  const todoDto: TodoDto = { id, name, description };
  return todoDto;
};
