import {Item,ItemCategory} from './Item.model';

// Enum for Toy Categories
type Category = 'Plush' | 'Action Figures' | 'Educational' | 'Outdoor' | 'Puzzles';

// Enum for Toy Age Groups
type AgeGroup = '0-2 years' | '3-5 years' | '6-8 years' | '9-12 years' | '12+ years';

// Enum for Toy Types
type ToyType = 'Stuffed Animal' | 'Building Blocks' | 'Doll' | 'Game' | 'Vehicle';


export class Toy implements Item{
    getCategory():ItemCategory{
        return ItemCategory.TOY;
    }

     // Private attributes
  private name: string;
  private price: number;
  private toyCategory: Category;
  private ageGroup: AgeGroup;
  private toyType: ToyType;
  private brand: string;

  // Constructor
  constructor(
    name: string,
    price: number,
    category: Category,
    ageGroup: AgeGroup,
    toyType: ToyType,
    brand: string
  ) {
    this.name = name;
    this.price = price;
    this.toyCategory = category;
    this.ageGroup = ageGroup;
    this.toyType = toyType;
    this.brand = brand;
  }

  // Getter functions for all attributes
  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
getToyCategory():Category{
    return this.toyCategory;
}
  getAgeGroup(): AgeGroup {
    return this.ageGroup;
  }

  getToyType(): ToyType {
    return this.toyType;
  }

  getBrand(): string {
    return this.brand;
  }
}