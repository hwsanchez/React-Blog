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

function App() {
  // Boolean State to flag a fetch or not
  const [shouldFetchData, setShouldFetchData] = useState(true);

  // array for fetched blogs
  const [blogsArray, setBlogsArray] = useState([]);

  // Calling the Effect to fetch all blogs:
  useEffect(() => {
    console.log("Fetching data...");
    if (shouldFetchData) {
      fetch("/data.json")
        .then((data) => data.json())
        .then((jsonData) => {
          setBlogsArray(jsonData);
          console.log("This is jsonData:");
          console.log(typeof jsonData);
          console.log(jsonData);

          setShouldFetchData(false);
          // Empty dependency array -> it will only run on the initial render of the component
        });
      // added an extra .then() method since state updates are asynchronous in React
    }
  }, []);

  useEffect(() => {
    console.log('Updated blogsArray:');
    console.log(blogsArray);
  }, [blogsArray])

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
        <BlogPage />
      </Route>

      <Route path="/contact">
        <ContactPage />
      </Route>

      <FooterSection />
    </>
  );
}

export default App;
