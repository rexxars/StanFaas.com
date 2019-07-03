import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'jan70117',
  dataset: 'production',
  useCdn: true
});
