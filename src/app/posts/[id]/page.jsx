import Link from "next/link";
import React from "react";

const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params
 
  // fetch data
  const singlePost = await getSinglePost(id)
 
 
  return {
    title: singlePost.title,
    description: singlePost.body
  }
}

const SinglePost = async ({ params }) => {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div className="h-screen place-content-center place-items-center space-y-4">
      {/* Single Post {JSON.stringify(singlePost)} */}
      <p className="font-bold text-lg text-red-600">Id: {singlePost.id}</p>
      <p className="text-yellow-600">User Id: {singlePost.userId}</p>
      <p className="font-semibold text-blue-600">Title: {singlePost.title}</p>
      <p className="text-gray-400">{singlePost.body}</p>
      <Link href={"/posts"}>Go Back</Link>
    </div>
  );
};

export default SinglePost;
