import Map, { Marker } from "react-map-gl";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

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
    lon && setLongitude(lon)
  }, [lon])

  useEffect(() => {
    console.log('Updated Latitude and Longitude from PostDetail:')
    console.log(longitude);
    console.log(latitude);
  }, [latitude, longitude]);

  return (
    <>
      <ScrollToTop />
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
                src={images?.[1]}
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

        <div className="mb-16 mt-14">
          <p className="pt-5 tracking-wider text-zinc-800">
            <img
              src={images?.[2]}
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
      </div>
      {latitude && longitude && (
        <dir className="flex justify-center w-full pb-10">
          <Map
            initialViewState={{
              latitude: latitude,
              longitude: longitude,
              zoom: 12,
            }}
            style={{ width: 600, height: 300 }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          >
            <Marker longitude={lon} latitude={lat} color="red" />
          </Map>
        </dir>
      )}
    </>
  );
};

export default PostDetail;
