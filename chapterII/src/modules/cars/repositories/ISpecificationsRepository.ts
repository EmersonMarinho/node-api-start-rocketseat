import { Specification } from "../entities/Specification";

interface ICreateSpeficiationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpeficiationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ICreateSpeficiationDTO, ISpecificationRepository };
