import { Repository, getRepository } from "typeorm";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpeficiationDTO,
  ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpeficiationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const findSpecifications = await this.repository.findOne({
      name,
    });
    return findSpecifications;
  }
}

export { SpecificationsRepository };
