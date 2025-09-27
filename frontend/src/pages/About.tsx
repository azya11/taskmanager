const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About This Template</h1>
        <div className="about-content">
          <p>
            This is a universal full-stack template built with modern web technologies.
            It provides a solid foundation for building scalable web applications.
          </p>
          
          <h2>Frontend Technologies</h2>
          <ul>
            <li>React 18 with TypeScript</li>
            <li>Vite for fast development</li>
            <li>React Router for navigation</li>
            <li>Axios for API calls</li>
            <li>Modern CSS with responsive design</li>
          </ul>
          
          <h2>Backend Technologies</h2>
          <ul>
            <li>Node.js with Express</li>
            <li>TypeScript for type safety</li>
            <li>CORS and Helmet for security</li>
            <li>Environment configuration</li>
            <li>RESTful API structure</li>
          </ul>
          
          <h2>Features</h2>
          <ul>
            <li>Hot reload for development</li>
            <li>TypeScript across the stack</li>
            <li>Proxy configuration for API calls</li>
            <li>Error handling middleware</li>
            <li>Clean project structure</li>
            <li>Ready for deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;