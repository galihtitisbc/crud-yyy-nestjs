import { Injectable } from '@nestjs/common';
import { Employee, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class EmployeeService {
  constructor(private readonly db: DatabaseService) {}
  async create(
    createEmployeeDto: Prisma.EmployeeCreateInput,
  ): Promise<Employee> {
    return this.db.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(
    role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
  ): Promise<Employee[] | null> {
    if (role) {
      return this.db.employee.findMany({
        where: {
          role: role,
        },
      });
    }
    return this.db.employee.findMany();
  }

  async findOne(id: number): Promise<Employee> {
    return this.db.employee.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateEmployeeDto: Prisma.EmployeeUpdateInput,
  ): Promise<Employee> {
    return this.db.employee.update({
      where: {
        id: id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number): Promise<Employee> {
    return this.db.employee.delete({
      where: {
        id: id,
      },
    });
  }
}
