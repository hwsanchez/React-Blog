const PostCard = ({ id, image, title, date }) => {

 
  return (
    <>
      <div key={id} className="mx-auto ml-20 mr-20 mb-20 md:max-w-md">
        <img data-key={ id } src={image} alt={image} className="w-full h-auto ml-auto mr-auto" />
        <h2 className="font-serif text-3xl font-thin text-zinc-500 mt-5">{title}</h2>
        <p className="font-sans text-s text-neutral-400">{date}</p>
      </div>
    </>
  );
};

export default PostCard;
