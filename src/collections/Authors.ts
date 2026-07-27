import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'active', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      label: 'Biografia',
      type: 'richText',
    },
    {
      name: 'role',
      label: 'Cargo ou função',
      type: 'text',
    },
    {
      name: 'email',
      label: 'E-mail público',
      type: 'email',
    },
    {
      name: 'active',
      label: 'Ativo',
      type: 'checkbox',
      defaultValue: true,
      index: true,
    },
  ],
}
