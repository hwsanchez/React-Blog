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

function App() {
  //Supabase posts table will load in this array with Use State Hook:
  const [postsArray, setPostsArray] = useState([]);

  // This array contains all images of the Webpage:
  const [imagesArray, setImagesArray] = useState([]);

  // Boolean State to flag a fetch or not
  const [shouldFetchData, setShouldFetchData] = useState(true);

  const getPosts = async () => {
    const { data } = await supabase.from("posts").select();
    setPostsArray(data);
  };

  const getImages = async () => {
    const { data } = await supabase.from("gingImages").select();
    setImagesArray(data);
    console.log("IMAGES:");
    console.log(data);
  };

  //Use Effect hook to load postArray from Supabase DB:
  useEffect(() => {
    getPosts();
  }, []);

  // useEffect hook to load webpage images:
  useEffect(() => {
    getImages();
  }, []);

  // // array for fetched blogs
  // const [blogsArray, setBlogsArray] = useState([]);

  // New simplified fetch section:

  

  // const fetchData = async () => {
  //   if (shouldFetchData) {
  //     const response = await fetch("/data.json");
  //     const jsonData = await response.json();
  //     setBlogsArray(jsonData);
  //     setShouldFetchData(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log("Updated blogsArray:");
  //   console.log(blogsArray);
  // }, [blogsArray]);

  useEffect(() => {
    console.log("COMING FROM SUPABASE!!");
    console.log(postsArray);
  }, [postsArray]);

  useEffect(() => {
    console.log("Updated webPageImagesArray:");
    console.log(imagesArray);
  }, [imagesArray]);

  return (
    <>
      <NavigationMenu />

      <Route path="/">
        {imagesArray && <HomePage heroPic={imagesArray?.[0]?.images[0]} />}
      </Route>

      <Route path="/home">
        <ScrollToTop />
        {imagesArray && <HomePage heroPic={ imagesArray?.[0]?.images[0]} />}
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

      <SubscribeForm />
      <FooterSection />
    </>
  );
}

export default App;
