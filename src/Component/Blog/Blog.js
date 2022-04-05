import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div>
        <h3>1. What is context API? How it works?</h3>
        <p>
          Context API is a React API that can solve a lot of problems that
          modern applications face related to state management and how they are
          passing state to their components. React.createContext() is all we
          need. It returns a consumer and a provider. Provider is a component
          that as it's names suggests provides the state to its children. It
          will hold the "store" and be the parent of all the components that
          might need that store. Consumer as it so happens is a component that
          consumes and uses the state.
        </p>
      </div>
      <div>
        <h3>What is Semantic Tag?</h3>
        <p>
          In HTML5, Semantic tags are defining specific tags to indicate clearly
          what role is played by the content those tags contain. That explicit
          information helps robots/crawlers like Google and Bing to better
          understand which content is important, which is a subsidiary, which is
          for navigation, and so on.
        </p>
      </div>
    </div>
  );
};

export default Blog;
