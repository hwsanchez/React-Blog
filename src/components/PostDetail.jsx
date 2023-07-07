import Map, { Marker } from "react-map-gl";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import SetDate from "./SetDate";
import "mapbox-gl/dist/mapbox-gl.css";

const PostDetail = ({
  id,
  title,
  category,
  author,
  date,
  location,
  lat,
  lon,
  images,
  content,
}) => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    lat && setLatitude(lat);
  }, [lat]);

  useEffect(() => {
    lon && setLongitude(lon);
  }, [lon]);

  return (
    <>
      <ScrollToTop />
      {/* Main Wrapper! */}
      <div className="mx-10 sm:mx-24">
        <div className="mt-12 mb-8">
          <Link href="/blog">
            <a
              href="#"
              className="sm:inline-block mb-10 text-sm px-2 py-2 leading-none border rounded text-stone-600 border-stone-400 hover:border-transparent hover:bg-stone-600 hover:text-white duration-500 delay-100"
            >
              back to blogs
            </a>
          </Link>
        </div>
        <SetDate date={date} parent={"postDetail"} />

        <h1 className="font-serif text-center mt-10 mb-8 text-4xl sm:text-6xl">
          {title}
        </h1>
        <div className="md:flex justify-between pt-12">
          <h2 className=" text-zinc-500"> {author}</h2>
          <h3 className="text-zinc-400 mr-10"> {category}</h3>
        </div>
        <h3 className="md:text-right mb-6 text-zinc-400 mr-10"> {location}</h3>
        <p className="tracking-wider text-zinc-800"> {content}</p>
        {/* image and text container: */}
        <div>
          {/* second paragraph with pic */}
          <div className="flex sm:block mt-10">
            <p className="pt-5 tracking-wider text-zinc-800">
              <img
                src={images?.[1]}
                alt="2nd paragraph image"
                className="sm:float-left sm:pr-8 pb-4 sm:w-3/6 w-full h-auto "
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
              reiciendis, suscipit blanditiis tempore. suscipit blanditiis
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

        {/* Third paragraph with pic */}
        <div className="flex sm:block my-10 ">
          <p className="pt-5 tracking-wider text-zinc-800">
            <img
              src={images?.[2]}
              alt="3rd paragraph image"
              className="sm:float-right sm:pl-8 pb-4 sm:w-3/6 w-full h-auto"
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
            blanditiis tempore. Repudiandae unde nisi iste alias nam cumque
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
            blanditiis tempore. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Repudiandae unde nisi iste alias nam cumque
            molestias eligendi itaque esse et ad ratione perspiciatis quia at,
            doloribus reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Repudiandae unde nisi iste
            alias nam cumque molestias eligendi itaque esse et ad ratione
            perspiciatis quia at, doloribus reiciendis, suscipit blanditiis
            tempore. Repudiandae unde nisi iste alias nam cumque molestias
            eligendi itaque esse et ad ratione perspiciatis quia at, doloribus
            reiciendis, suscipit blanditiis tempore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex justify-center">
          {latitude && longitude && (
            <Map
              initialViewState={{
                latitude: latitude,
                longitude: longitude,
                zoom: 9,
              }}
              style={{ width: 500, height: 380 }}
              mapStyle="mapbox://styles/mapbox/light-v11"
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            >
              <Marker longitude={lon} latitude={lat} color="red" />
            </Map>
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
