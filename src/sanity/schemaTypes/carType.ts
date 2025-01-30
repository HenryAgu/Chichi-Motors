import { defineType, defineField } from 'sanity'

export const carType = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'New' },
          { title: 'Used', value: 'Used' },
        ],
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'price',
      title: 'Price Range',
      type: 'string',
    }),
    defineField({
      name: 'interiorColor',
      title: 'Interior Color',
      type: 'string',
    }),
    defineField({
      name: 'exteriorColor',
      title: 'Exterior Color',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Car Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Enable hotspot for image cropping
          },
        },
      ],
    }),

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'image',
    },
  },
})
