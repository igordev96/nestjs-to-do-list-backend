import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Tasks, Prisma } from '@prisma/client';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks(): Promise<Tasks[]> {
    return this.tasksService.getTasks();
  }

  @Post()
  async createTask(@Body() tasksData: Prisma.TasksCreateInput): Promise<Tasks> {
    return this.tasksService.createTask(tasksData);
  }

  @Put('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() tasksData: Tasks,
  ): Promise<Tasks> {
    return this.tasksService.updateTask({ where: { id }, data: tasksData });
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<Tasks> {
    return this.tasksService.deleteTask({ id });
  }
}
