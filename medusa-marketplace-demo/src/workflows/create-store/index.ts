import {
  createWorkflow,
  when,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { createStoresWorkflow } from "@medusajs/medusa/core-flows";

import { linkUserToStoreStep } from "./steps/link-user-to-store";
import { createUserStep } from "./steps/create-user";

export type CreateStoreInput = {
  store_name: string;
  // first_name: string;
  // last_name: string;
  email: string;
  password: string;
  is_super_admin?: boolean;
};

export const createStoreWorkflow = createWorkflow(
  "create-store",
  (input: CreateStoreInput) => {
    const stores = createStoresWorkflow.runAsStep({
      input: {
        stores: [
          {
            name: input.store_name,
            supported_currencies: [{ currency_code: "usd", is_default: true }],
          },
        ],
      },
    });

    const store = stores[0];

    const { user, registerResponse } = createUserStep(input);

    // super admins users do not have a link to store
    // so they will see all products and orders
    const userStoreLinkArray = when(input, (input) => {
      return !input.is_super_admin;
    }).then(() => {
      return linkUserToStoreStep({ userId: user.id, storeId: store.id });
    });

    return new WorkflowResponse({
      store,
      user,
      userStoreLinkArray,
      registerResponse,
    });
  }
);
