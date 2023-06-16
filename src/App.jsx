import { Route } from "wouter";
import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import FooterSection from "./components/FooterSection";
import "./App.css";

// Effect declaration:
import { useEffect, useState } from "react";
import SubscribeForm from "./components/SubscribeForm";
import PostDetail from "./components/PostDetail";

function App() {
  // Boolean State to flag a fetch or not
  const [shouldFetchData, setShouldFetchData] = useState(true);

  // array for fetched blogs
  const [blogsArray, setBlogsArray] = useState([]);

  // New simplified fetch section:

  const fetchData = async () => {
    if (shouldFetchData) {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setBlogsArray(jsonData);
      setShouldFetchData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Updated blogsArray:');
    console.log(blogsArray);
  }, [blogsArray]);

  return (
    <>
      <NavigationMenu />

      <Route path="/">
        <HomePage />
      </Route>

      <Route path="/home">
        <HomePage />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/blog">
        <BlogPage blogs={blogsArray} />
      </Route>

      <Route path="/blog/:id">
        {(params) => (
          <PostDetail
            id={params.id}
            title={blogsArray[params.id].blogTitle}
            category={blogsArray[params.id].category}
            author={blogsArray[params.id].author}
            date={blogsArray[params.id].date}
            location={blogsArray[params.id].location}
            images={blogsArray[params.id].images}
            content={blogsArray[params.id].content}
          />
        )}
      </Route>

      {/* // render-prop style
<Route path="/users/:id">
  {params => <UserPage id={params.id} />}
</Route> */}

      <Route path="/contact">
        <ContactPage />
      </Route>

      <SubscribeForm />
      <FooterSection />
    </>
  );
}

export default App;
