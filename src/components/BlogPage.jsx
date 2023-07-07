// import Map from "react-map-gl";

import PostCard from "./PostCard";
import { Link } from "wouter";

const BlogPage = ({ blogs }) => {


  return (
    <>
      <h1 className="mt-14 font-serif text-neutral-700 text-4xl tracking-wider text-center md:text-7xl">
        The Blog
      </h1>
      <h2 className="md:mb-16 mt-10 mb-10 font-serif text-neutral-400 text-3xl tracking-wider text-center md:text-4xl">
        <i>my latest posts:</i>
      </h2>

      <div className="block md:flex md:grid md:grid-cols-2 md:justify-items-center">
        {blogs.map((blog, index) => (
          <Link
            href={ "/blog/" + index }
            key={index}
            data-index={index}
          >
            <a href="" key={index}>
              <PostCard
                key={index}
                image={blog.images[0]}
                title={blog.title}
                date={blog.date}
              />
            </a>
          </Link>
        ))}
        <br />
        <br />
      </div>
    </>
  );
};

export default BlogPage;
