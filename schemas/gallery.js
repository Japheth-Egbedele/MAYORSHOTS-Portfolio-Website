export default {
  name: 'gallery',
  title: 'Portfolio Gallery',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Upload Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' }
    }
  ]
}