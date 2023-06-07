import "./App.css";
import { Route } from "wouter";
import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <NavigationMenu />

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
