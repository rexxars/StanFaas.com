export default {
  name: 'captionedImage',
  title: 'Captioned image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      options: { isHighlighted: true }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: { isHighlighted: true }
    }
  ]
};
