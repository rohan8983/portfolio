import * as React from "react";

const Portpolio = () => {
  return (
    <div id="wrapper">
      {/* <!-- Header --> */}
      <header id="header" className="alt">
        <span className="logo">
          <img src="images/logo.svg" alt="" />
        </span>
        <h1>Rohan Chougule</h1>
        <p>Passionate JavaScript Developer</p>
      </header>

      {/* <!-- Nav --> */}
      <nav id="nav">
        <ul>
          <li>
            <a href="#intro" className="active">
              {"<Introduction/>"}
            </a>
          </li>
          <li>
            <a href="#skills">{"<Skills/>"}</a>
          </li>
          <li>
            <a href="#experience">{"<Experience/>"}</a>
          </li>
          <li>
            <a href="#contact">{"<Contact/>"}</a>
          </li>
        </ul>
      </nav>

      {/* <!-- Main --> */}
      <div id="main">
        {/* <!-- Introduction --> */}
        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Introduction</h2>
              </header>
              <p>
                /* Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam. */
              </p>
            </div>
            <span className="image">
              <img src="images/rohan.png" alt="" />
            </span>
          </div>
        </section>

        {/* <!-- First Section --> */}
        <section id="skills" className="main special">
          <header className="major">
            <h2>Skills</h2>
          </header>
          <ul className="features">
            <li id="js">
              <span className="icon solid major style1">
                <img src="images/js.png" width="130" />
              </span>
              <h3>JavaScript</h3>
            </li>
            <li id="react">
              <span className="icon major style3">
                <img src="images/react.png" width="130" />
              </span>
              <h3>ReactJs</h3>
            </li>
            <li id="node">
              <span className="icon major style5">
                <img src="images/node.png" width="130" />
              </span>
              <h3>NodeJs</h3>
            </li>
            <li id="react native">
              <span className="icon solid major style1">
                <img src="images/react.png" width="130" />
              </span>
              <h3>React Native</h3>
            </li>
            <li id="typescript">
              <span className="icon major style3">
                <img src="images/typescript.png" width="130" />
              </span>
              <h3>Typescript</h3>
            </li>
            <li id="html">
              <span className="icon major style5">
                <img src="images/html.png" width="130" />
              </span>
              <h3>HTML</h3>
            </li>
            <li id="github">
              <span className="icon solid major style1">
                <img src="images/github.png" width="130" />
              </span>
              <h3>GitHub</h3>
            </li>
          </ul>
          {/* <footer className="major">
            <ul className="actions special">
              <li>
                <a href="generic.html" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </footer> */}
        </section>

        {/* <!-- Second Section --> */}
        <section id="experience" className="main special">
          <header className="major">
            <h2>Experience</h2>
            <p>
              Donec imperdiet consequat consequat. Suspendisse feugiat congue
              <br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.
            </p>
          </header>
          <ul className="statistics">
            <li className="style1">
              <span className="icon solid fa-code-branch"></span>
              <strong>5,120</strong> Etiam
            </li>
            <li className="style2">
              <span className="icon fa-folder-open"></span>
              <strong>8,192</strong> Magna
            </li>
            <li className="style3">
              <span className="icon solid fa-signal"></span>
              <strong>2,048</strong> Tempus
            </li>
            <li className="style4">
              <span className="icon solid fa-laptop"></span>
              <strong>4,096</strong> Aliquam
            </li>
            <li className="style5">
              <span className="icon fa-gem"></span>
              <strong>1,024</strong> Nullam
            </li>
          </ul>
          <p className="content">
            Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu
            arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac
            arcu sit amet, fermentum pellentesque et purus. Integer maximus
            varius lorem, sed convallis diam accumsan sed. Etiam porttitor
            placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
            ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget
            purus nec nulla mattis et accumsan ut magna libero. Morbi auctor
            iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque.
            Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui
            curabitur lacinia.
          </p>
          <footer className="major">
            <ul className="actions special">
              <li>
                <a href="generic.html" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </footer>
        </section>

        {/* <!-- Get Started --> */}
        <section id="contact" className="main special">
          <header className="major">
            <h2>Address & Contact</h2>
          </header>
          <dl className="alt">
            <dt>Address</dt>
            <dd>Karad-Dhebewadi Rd, Wing, Maharashtra 415122</dd>
            <dt>Phone</dt>
            <dd>(+91) 9511998983</dd>
            <dt>Email</dt>
            <dd>
              <a href="#">rohanchougule3410@outlook.com</a>
            </dd>
          </dl>
        </section>
      </div>

      {/* <!-- Footer --> */}
      <footer id="footer">
        {/* <section>
          <h2>Aliquam sed mauris</h2>
          <p>
            Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
            magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris.
            Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas
            velit, vitae tincidunt odio.
          </p>
          <ul className="actions">
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section> */}
        <section>
          {/* <h2>Address & Contact</h2>
          <dl className="alt">
            <dt>Address</dt>
            <dd>Karad-Dhebewadi Rd, Wing, Maharashtra 415122</dd>
            <dt>Phone</dt>
            <dd>(+91) 9511998983</dd>
            <dt>Email</dt>
            <dd>
              <a href="#">rohanchougule3410@outlook.com</a>
            </dd>
          </dl> */}
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter alt">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f alt">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram alt">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github alt">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Portpolio;
