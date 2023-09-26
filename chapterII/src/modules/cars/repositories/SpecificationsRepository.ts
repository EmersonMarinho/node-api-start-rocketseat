import { Specification } from "../model/Specification";
import {
  ICreateSpeficiationDTO,
  ISpecificationRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpeficiationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((spec) => spec.name == name);
    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
