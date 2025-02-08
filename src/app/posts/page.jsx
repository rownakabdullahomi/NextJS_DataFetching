export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-green-700 p-6 rounded-lg shadow-lg"
        >
          <p className="font-bold text-lg text-red-600">Id: {post.id}</p>
          <p className="text-yellow-600">User Id: {post.userId}</p>
          <p className="font-semibold text-blue-600">Title: {post.title}</p>
          <p className="text-gray-400">{post.body}</p>
        </div>
      ))}
      {/* <p>{JSON.stringify(posts)}</p> */}
    </div>
  );
};

export default Posts;
