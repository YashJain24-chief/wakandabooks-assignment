const articleSchema = {
  title: "article schema",
  version: 0,
  description: "Describes an article linked to a business",
  type: "object",
  primaryKey: "id",
  properties: {
    id: { type: "string", maxLength: 100 },
    name: { type: "string" },
    qty: { type: "number" },
    selling_price: { type: "number" },
    business_id: { type: "string" },
  },
  required: ["id", "name", "qty", "selling_price", "business_id"],
};

export default articleSchema;
