const InstagramLinks = ({ postArray }) => {
  const instagramPosts = postArray[0]?.instagramPosts.map((post) => (
    <a href={post.instagramLink} target="_blank">
      <img src={post.instagramImage} alt="instagram Image" />
    </a>
  ));

  // const instagramPostsSmallScreen = (
  //   <div className="flex">
  //     <a
  //       href={postArray[0]?.instagramPosts[0].instagramLink[0]}
  //       target="_blank"
  //     >
  //       <img src={postArray[0]?.instagramImage[0]} alt="" />
  //     </a>
  //   </div>
  // );

  return (
    <>
      {console.log("Coming from Instagram Link Component!!!")}
      {console.log(postArray)}
      <div className="mx-6 mt-4">
        <p className="hidden sm:block my-5 text-sm font-thin tracking-widest text-gray-800">
          Checkout my latest Instagram posts...
        </p>
        <div className="hidden sm:flex  gap-2">{instagramPosts}</div>
      </div>
    </>
  );
};

export default InstagramLinks;
