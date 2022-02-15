export interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: post,
  _updatedAt: string,
  author: {
    _ref: string,
    _type: reference
  },
  body: [
    {
      _key: string,
      _type: block,
      children: [
        {
          _key: string,
          _type: span,
          marks: [],
          text: string
        }
      ],
      markDefs: [],
      style: normal
    },
    {
      _key: string,
      _type: image,
      asset: {
        _ref: string,
        _type: reference
      }
    },
    {
      _key: string,
      _type: block,
      children: [
        {
          _key: string,
          _type: span,
          marks: [],
          text: Boom!
        }
      ],
      markDefs: [],
      style: normal
    }
  ],
  description: string,
  mainImage: {
    _type: image,
    asset: {
      _ref: string,
      _type: reference
    }
  },
  slug: {
    _type: slug,
    current: string
  },
  title: string
}