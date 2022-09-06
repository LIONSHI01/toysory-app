export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "thumbImage",
      title: "ThumbImage",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "detailImage",
      title: "DetailImage",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "originalPrice",
      title: "OriginalPrice",
      type: "number",
    },
    {
      name: "salePrice",
      title: "SalePrice",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
