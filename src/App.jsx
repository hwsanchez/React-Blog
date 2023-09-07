import { Route } from "wouter";
import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import FooterSection from "./components/FooterSection";
import "./App.css";
import { supabase } from "./supabaseClient";
import ScrollToTop from "./components/ScrollToTop";
import Subscribers from "./components/Subscribers";
//

// UseEffect declaration:
import { useEffect, useState } from "react";
import SubscribeForm from "./components/SubscribeForm";
import PostDetail from "./components/PostDetail";
import SubscribePage from "./components/SubscribePage";
import InstagramLinks from "./components/InstagramLinks";

function App() {
  //Supabase posts table will load in this array with Use State Hook:
  const [postsArray, setPostsArray] = useState([]);

  // This array contains all images of the Webpage:
  const [imagesArray, setImagesArray] = useState([]);

  // Boolean State to flag a fetch or not
  const [shouldFetchData, setShouldFetchData] = useState(true);

  //This array will hold all Instagram posts data:
  const [instagramArray, setInstagramArray] = useState([]);

  const getPosts = async () => {
    const { data } = await supabase.from("posts").select();
    setPostsArray(data);
  };

  const getImages = async () => {
    const { data } = await supabase.from("gingImages").select();
    setImagesArray(data);
  };

  // const getInstagram = async () => {
  //   const { data } = await supabase.from("InstagramImages").select();
  //   setInstagramArray(data);
  // };


  //Use Effect hook to load postArray from Supabase DB:
  useEffect(() => {
    getPosts();
  }, []);

  // useEffect hook to load webpage images:
  useEffect(() => {
    getImages();
  }, []);

  // useEffect hook to load all Instagram posts data:
  // useEffect(() => {
  //   getInstagram()
  // }, []);

  // useEffect(() => {
  //   console.log("COMING FROM SUPABASE!!");
  //   console.log(postsArray);
  // }, [postsArray]);

  useEffect(() => {
    console.log("Updated imagesArray:");
    console.log(imagesArray);
  }, [imagesArray]);

  // useEffect(() => {
  //   console.log('Updated Instagram data:')
  //   console.log(instagramArray);
  // }, [instagramArray])

  return (
    <>
      
      <NavigationMenu />

      <Route path="/">
        {imagesArray && <HomePage heroPic={imagesArray?.[0]?.images[0]} />}
      </Route>

      <Route path="/home">
        <ScrollToTop />
        {imagesArray && <HomePage heroPic={imagesArray?.[0]?.images[0]} />}
      </Route>

      <Route path="/about">
        <ScrollToTop />
        {imagesArray && <AboutPage nerraPic={imagesArray?.[0]?.images[1]} />}
      </Route>

      <Route path="/blog">
        <ScrollToTop />
        <BlogPage blogs={postsArray} />
      </Route>

      <Route path="/blog/:id">
        {(params) => {
          return (
            postsArray && (
              <PostDetail
                id={params.id}
                title={postsArray?.[params.id]?.title}
                category={postsArray?.[params.id]?.category}
                author={postsArray?.[params.id]?.author}
                date={postsArray?.[params.id]?.date}
                location={postsArray?.[params.id]?.location}
                lat={postsArray?.[params.id]?.lat}
                lon={postsArray?.[params.id]?.lon}
                images={postsArray?.[params.id]?.images}
                content={postsArray?.[params.id]?.content}
              />
            )
          );
        }}
      </Route>

      <Route path="/subscribe">
        <SubscribePage />
      </Route>

      {/* Route for administration of users: */}
      <Route path="/subscribers">
        <Subscribers />
      </Route>

      {imagesArray && <InstagramLinks postArray={imagesArray} />} 

      {/* {imagesArray && <InstagramLinks instagramImages={imagesArray?.[1]?.images} />} */}

      <SubscribeForm />
      <FooterSection />
    </>
  );
}

export default App;
