import { type SchemaTypeDefinition } from "sanity";

import content from "./schemas/content";
import category from "./schemas/category";
import post from "./schemas/post";
import work from "./schemas/work";
import author from "./schemas/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, work, author, category, content],
};
