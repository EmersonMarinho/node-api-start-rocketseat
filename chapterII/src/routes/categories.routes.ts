import { Router, Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ message: "Category Already Exists " });
  }

  categoriesRepository.create({ name, description });

  response.status(201).send();
});

categoriesRoutes.get("/", (_request: Request, response: Response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
