import { Injectable } from '@nestjs/common';
import { Prisma, Tasks } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks(): Promise<Tasks[]> {
    return this.prisma.tasks.findMany();
  }

  async createTask(data: Prisma.TasksCreateInput): Promise<Tasks> {
    return this.prisma.tasks.create({
      data,
    });
  }

  async deleteTask(where: Prisma.TasksWhereUniqueInput): Promise<Tasks> {
    return this.prisma.tasks.delete({
      where,
    });
  }

  async updateTask(params: {
    where: Prisma.TasksWhereUniqueInput;
    data: Prisma.TasksUpdateInput;
  }): Promise<Tasks> {
    return this.prisma.tasks.update(params);
  }
}
