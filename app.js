console.log("Hello world!");

const blogPost = {
  title: "Loren's Blog",
  author: {
    name: "Loren",
    age: 29,
    favouriteColour: "orange",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost);

console.log(blogPost.tags[2]);
console.log("There are ${blogPost.tags.length} tags for ${blogPost.title}");
