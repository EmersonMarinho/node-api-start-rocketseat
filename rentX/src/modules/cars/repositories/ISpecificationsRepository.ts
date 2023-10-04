import { Specification } from "../entities/Specification";

interface ICreateSpeficiationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpeficiationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpeficiationDTO, ISpecificationRepository };
