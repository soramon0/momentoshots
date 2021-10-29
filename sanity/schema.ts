const schema = [
  {
    name: 'collection',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'main_image',
        type: 'collection_image',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'items',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'collection_item',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'collection_image',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'caption',
        type: 'string',
      },
      {
        name: 'alt',
        type: 'string',
      },
    ],
  },
  {
    name: 'collection_item',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'collection',
        type: 'reference',
        to: [
          {
            type: 'collection',
          },
        ],
      },
      {
        name: 'image',
        type: 'collection_image',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'featured',
        type: 'boolean',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
        initialValue: false,
      },
    ],
  },
  {
    name: 'contact',
    type: 'document',
    fields: [
      {
        name: 'fullname',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'phone',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'message',
        type: 'text',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
    ],
  },
  {
    name: 'review',
    type: 'document',
    fields: [
      {
        name: 'fullname',
        type: 'string',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'avatar',
        type: 'collection_image',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'keywords',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'content',
        type: 'text',
        codegen: { required: true },
        validation: (Rule) => Rule.required(),
      },
    ],
  },
];

export default schema;
