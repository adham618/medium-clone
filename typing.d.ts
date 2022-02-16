export interface Post {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: post,
  _updatedAt: string,
  author: {
    _ref: string,
    _type: reference
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: author,
    _updatedAt: string,
  bio: [
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
    }
  ],
  image: {
    _type: image,
    asset: {
      _ref: string
      _type: reference
    }
  },
  name: string,
  slug: {
    _type: slug,
    current: string
  }
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
  comments: Comment[]
}

export interface Comment {
  comment: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}