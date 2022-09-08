export default {
  name: "product",
  title: "Product",
  type: "document",
  initialValue: {
    onSale: false,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam rerum reiciendis, dolores repudiandae aliquid beatae quibusdam eum molestias laudantium. Unde, repudiandae necessitatibus assumenda dolorum quaerat beatae voluptas reiciendis laboriosam consequatur.",
  },
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
      name: "bannerImage",
      title: "BannerImage",
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
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "onSale",
      title: "OnSale",
      type: "boolean",
    },
    {
      name: "specification",
      title: "Specification",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
