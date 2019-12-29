import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category.model';
import {CategoryRepository} from '../../model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent  {

  selectedCategory: Category = null;


  @Output() category = new EventEmitter<Category>();

  constructor(private categoryRepository: CategoryRepository
  ) {
  }


  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
}
