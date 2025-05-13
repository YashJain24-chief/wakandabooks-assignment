const businessSchema = {
  title: "business schema",
  version: 0,
  description: "Describes a business",
  type: "object",
  primaryKey: "id",
  properties: {
    id: { type: "string", maxLength: 100 },
    name: { type: "string" },
  },
  required: ["id", "name"],
};

export default businessSchema;
