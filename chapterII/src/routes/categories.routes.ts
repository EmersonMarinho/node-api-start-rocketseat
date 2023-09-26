import { Router, Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategorySerivce = new CreateCategoryService(categoriesRepository);

  createCategorySerivce.execute({ name, description });

  response.status(201).send();
});

categoriesRoutes.get("/", (_request: Request, response: Response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
