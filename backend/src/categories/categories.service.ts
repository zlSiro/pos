import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepository : Repository<Category>
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    // const category = new Category()
    // category.name = createCategoryDto.name
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({id})
    if (!category) {
      throw new NotFoundException("La categoria no existe...")
    }
    return category
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id)
    category.name = updateCategoryDto.name
    return await this.categoryRepository.save(category)
  }

  async remove(id: number) {
    const category = await this.findOne(id)
    await this.categoryRepository.remove(category)
    return "Categoria elminada."
  }
}
