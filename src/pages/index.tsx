/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from 'next/link';
import * as React from 'react';
import { Post } from 'typing';

import { urlFor } from '@/lib/sanitycms/sanity';
import { sanityClient } from '@/lib/sanitycms/sanity.server';

import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
interface HomePageProps {
  posts: [Post]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <div className='max-w-7xl mx-auto'>
      <Seo templateTitle='Home' />
      <Seo />
      <section
        className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0"
      >
        <div className="px-10 space-y-5">
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>
              Medium
            </span>{" "}
            is a place to write, read and connect
          </h1>
          <h2>
            It&apos;s easy and free to post your thinking on any topic and connect with milions of readers.
          </h2>
        </div>
        <NextImage layout='intrinsic' className='hidden pr-11 md:inline-flex h-32 lg:h-full' src="/svg/medium-1.svg" width={300} height={400} alt="logo" draggable="false" />
      </section>
      {/* Posts */}
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map(post => (
          <Link href={`/post/${post.slug.current}`} key={post._id} passHref>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <NextImage
                priority
                className=' w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-out'
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                src={urlFor(post.mainImage).url()!}
                width={200} height={140} alt="post-img" />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">{post.description} by {post.author.name}</p>
                </div>
                <img src={urlFor(post.author.image).url()!} alt="author-img" className='h-12 w-12 rounded-full' draggable="false" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author->{
  name,
  image
},
description,
mainImage,
slug
}`;
  const posts = await sanityClient.fetch(query)
  if (!posts) {
    return {
      notFound: true,
    }
  }
  return {
    props: { posts }
  }
}