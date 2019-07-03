import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

const urlFor = source => imageUrlBuilder(client).image(source);
const {projectId, dataset} = client.config()

const serializers = {
  types: {
    captionedImage: ({ node }) => (
      <figure>
        <img src={urlFor(node).url()} alt={node.alt} />
      </figure>
    )
  }
}

function BlockContent(props) {
  return (
    <PortableText
      serializers={serializers}
      projectId={projectId}
      dataset={dataset}
      {...props}
    />
  )
}

BlockContent.defaultSerializers = serializers

export default BlockContent