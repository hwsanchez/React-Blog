import { useState, useEffect } from "react";
import SetDate from "./SetDate";

const PostCard = ({ id, image, title, date }) => {


  const [niceDate, setNiceDate] = useState("");
  useEffect(() => {
    setNiceDate()
  }, [])

 
  return (
    <>
      <div key={id} className="mb-20 mx-10 md:max-w-sm">
        <img data-key={ id } src={image} alt={image} className="w-full h-auto ml-auto mr-auto" />
        <h2 className="font-serif text-3xl font-thin text-zinc-500 mt-5">{title}</h2>
        <SetDate date={ date } parent={ "postCard"} />
      </div>
    </>
  );
};

export default PostCard;
