// import Map from "react-map-gl";

import PostCard from "./postCard";
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

      <div className="md:flex m-auto md:grid md:grid-cols-2 md:justify-items-center">
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
                title={blog.blogTitle}
                date={blog.date}
              />
            </a>
          </Link>
        ))}
        <br />
        <br />
      </div>

      {/* Mapbox Test! */}
      {/* <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      /> */}
    </>
  );
};

export default BlogPage;
