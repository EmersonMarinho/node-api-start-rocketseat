import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { injectable, inject } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const ParseFile = csvParse();

      stream.pipe(ParseFile);

      ParseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({ name, description });
      })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      const exitsCategory = this.categoriesRepository.findByName(name);

      if (!exitsCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
