import { Router, Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (_request: Request, response: Response) => {
  return listCategoriesController.handle(_request, response);
});

export { categoriesRoutes };
