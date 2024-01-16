import { type SchemaTypeDefinition } from "sanity";

import content from "./schemas/content";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, content],
};
