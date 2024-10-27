import {
  type MedusaNextFunction,
  type MedusaRequest,
  type MedusaResponse,
} from "@medusajs/framework/http";

export async function moveIdsToQueryFromFilterableFields(req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) {
  // do this, otherwise the 'filterableFields' will be overwritten in 
  // https://github.com/medusajs/medusa/blob/develop/packages/medusa/src/api/admin/products/middlewares.ts#L49
  if (req.filterableFields) {
    req.query["id"] = req.filterableFields.id as string[];
  }

  return next();
};
