import Map from "react-map-gl";
import { Link } from 'wouter';

const PostDetail = ({
  id,
  title,
  category,
  author,
  date,
  location,
  images,
  content,
}) => {
  return (
    <>
      <div className="mx-10 mt-20 mb-10">
        <Link href="/blog">
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-stone-600 border-stone-400 hover:border-transparent hover:bg-stone-600 hover:text-white mt-4 sm:mt-0 duration-500 delay-100"
          >
            back to blogs
          </a>
        </Link>
        <p className="text-center font-sans text-xs text-zinc-400">{date}</p>

        <h1 className="font-serif text-center mt-10 mb-8 text-6xl">{title}</h1>
        <div className="md:flex justify-between pt-12">
          <h2 className=" text-zinc-500"> {author}</h2>
          <h3 className="text-zinc-400 mr-10"> {category}</h3>
        </div>
        <h3 className="md:text-right mb-6 text-zinc-400 mr-10"> {location}</h3>
        <p className="tracking-wider text-zinc-800"> {content}</p>
        {/* image and text container: */}
        <div>
          <div className="mt-10">
            <p className="pt-5 tracking-wider text-zinc-800">
              <img
                src={images[1]}
                alt="desk"
                className="float-left max-w-md pr-8 pb-4"
              />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae unde nisi iste alias nam cumque molestias eligendi
              itaque esse et ad ratione perspiciatis quia at, doloribus
              reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Repudiandae unde nisi iste
              alias nam cumque molestias eligendi itaque esse et ad ratione
              perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
              tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae unde nisi iste alias nam cumque molestias eligendi
              itaque esse et ad ratione perspiciatis quia at, doloribus
              reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Repudiandae unde nisi iste
              alias nam cumque molestias eligendi itaque esse et ad ratione
              perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
              tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae unde nisi iste alias nam cumque molestias eligendi
              itaque esse et ad ratione perspiciatis quia at, doloribus
              reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Repudiandae unde nisi iste
              alias nam cumque molestias eligendi itaque esse et ad ratione
              perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
              tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae unde nisi iste alias nam cumque molestias eligendi
              itaque esse et ad ratione perspiciatis quia at, doloribus
              reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Repudiandae unde nisi iste
              alias nam cumque molestias eligendi itaque esse et ad ratione
              perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
              tempore. Repudiandae unde nisi iste alias nam cumque molestias
              eligendi itaque esse et ad ratione perspiciatis quia at, doloribus
              reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Repudiandae unde nisi iste
              alias nam cumque molestias eligendi itaque esse et ad ratione
              perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
              tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae unde nisi iste alias nam cumque molestias eligendi
              itaque esse et ad ratione perspiciatis quia at, doloribus
              reiciendis, suscipit blanditiis tempore.
            </p>
          </div>
        </div>

        <div className="mb-16 mt-14">
          {/* Mapbox Test! */}
          <p className="pt-5 tracking-wider text-zinc-800">
            <img
              src={images[2]}
              alt="desk"
              className="float-right max-w-md pl-5 pb-4"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae unde nisi iste alias nam cumque molestias eligendi
            itaque esse et ad ratione perspiciatis quia at, doloribus
            reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repudiandae unde nisi iste alias nam
            cumque molestias eligendi itaque esse et ad ratione perspiciatis
            quia at, doloribus reiciendis, suscipit blanditiis tempore. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde
            nisi iste alias nam cumque molestias eligendi itaque esse et ad
            ratione perspiciatis quia at, doloribus reiciendis, suscipit
            blanditiis tempore. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Repudiandae unde nisi iste alias nam cumque
            molestias eligendi itaque esse et ad ratione perspiciatis quia at,
            doloribus reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Repudiandae unde nisi iste
            alias nam cumque molestias eligendi itaque esse et ad ratione
            perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
            tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae unde nisi iste alias nam cumque molestias eligendi
            itaque esse et ad ratione perspiciatis quia at, doloribus
            reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repudiandae unde nisi iste alias nam
            cumque molestias eligendi itaque esse et ad ratione perspiciatis
            quia at, doloribus reiciendis, suscipit blanditiis tempore. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde
            nisi iste alias nam cumque molestias eligendi itaque esse et ad
            ratione perspiciatis quia at, doloribus reiciendis, suscipit
            blanditiis tempore.
          </p>
        </div>
      </div>
      <dir className="flex ju bg-red-700">
        {/* #map { position: absolute; top: 0; bottom: 0; width: 100%; } */}
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: 900, height: 400 }}
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}

        />
      </dir>
    </>
  );
};

export default PostDetail;
