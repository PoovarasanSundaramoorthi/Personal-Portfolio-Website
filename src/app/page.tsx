"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import resume from "../../public/resume.pdf";

function Resume() {
  const targetDate = new Date("2021-11-14");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDiff = Math.abs(currentDate.getTime() - targetDate.getTime());
      const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));

      const years = Math.floor(totalDays / 365);
      const months = Math.floor((totalDays % 365) / 30);
      const days = Math.floor((totalDays % 365) % 30);

      setYears(years);
      setMonths(months);
      setDays(days);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <html>
      <Head>
        <title>Resume Landing Page using HTML CSS using NextJS</title>
      </Head>

      <body>
        <nav id="navbar" className="navbar">
          <a href="#"></a>
        </nav>
        {/* name */}
        <div className="container">
          {/* NAVIGATION MENU */}

          <div className="menu">
            <a href="#welcome-section" className="menu-icon fas fa-home"></a>
            <a href="#about" className="menu-icon fas fa-user"></a>
            <a href="#projects" className="menu-icon fas fa-code"></a>
            <a href="#experience" className="menu-icon fas fa-briefcase"></a>
            <a href="#contact" className="menu-icon fas fa-envelope"></a>
          </div>

          {/* MAIN "WINDOW" */}

          <div className="portfolio">
            {/* HEADER SECTION */}

            <section className="header">
              <img
                className="header-img"
                src="https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1>Poovarasan S</h1>
              <h2>Frontend Developer</h2>
              <div className="socials">
                <a
                  href="#https://www.linkedin.com/in/poovarasan-s-21301a242"
                  target="_blank"
                  className="fab fa-linkedin-in"
                  id="profile-link"
                ></a>
                <a
                  href="https://github.com/PoovarasanSundaramoorthi?tab=repositories"
                  target="_blank"
                  className="fab fa-github"
                ></a>
                <a
                  href="https://stackoverflow.com/users/20730213/poovarasan-s?tab=profile"
                  target="_blank"
                  className="fab fa-codepen"
                ></a>
              </div>
              <a href="" target="_blank" className="cta">
                DownIoad CV
              </a>
            </section>

            {/* CONTENT SECTION */}

            <div className="content">
              {/* HOME */}

              <section className="content-card home" id="welcome-section">
                <h1>Hello, I am Poovarasan</h1>
              </section>

              {/* ABOUT ME */}

              <section className="content-card about" id="about">
                <h1>About me</h1>
                <div className="about-item about-me">
                  <p>
                    Hello! I am Poovarasan, a frontend developer passionate about creating engaging and user-friendly
                    websites. With 2 years of experience in the field, I specialize in HTML, CSS, and Bootstrap, along
                    with frameworks like React, React Native and NextJs. I love solving problems and collaborating with
                    teams to build intuitive interfaces. Continuous learning is important to me, and I stay up-to-date
                    with the latest industry trends and tools. I enjoy bringing designs to life and optimizing user
                    experiences. Lets connect and bring your digital ideas to reality!
                  </p>
                  <p>
                    I am a lifelong learner and continuously keep up with the latest trends and advancements in frontend
                    development. I enjoy exploring new frameworks, tools, and best practices to enhance my skill set and
                    deliver cutting-edge solutions.
                  </p>
                  <p>
                    My focus on the backend side lies in working with Express.js, a powerful and flexible Node.js
                    framework. I have built RESTful APIs, implemented middleware, and integrated various libraries and
                    packages to create efficient and secure server-side functionality.
                  </p>
                </div>
                <div className="col-2">
                  <div className="about-item skills">
                    <h1>Skills</h1>
                    <span className="skill">HTML</span>
                    <span className="skill">CSS</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">Node.js</span>
                    <span className="skill">React</span>
                    <span className="skill">AWS</span>
                    <span className="skill">GCP</span>
                    <span className="skill">Vercel</span>
                    <span className="skill">Heroku</span>
                    <span className="skill">Render</span>
                    <span className="skill">SASS</span>
                    <span className="skill">Sengrid</span>
                    <span className="skill">Git</span>
                    <span className="skill">Android Studio</span>

                    <span className="skill">API</span>
                    <span className="skill">MongoDB</span>
                    <span className="skill">Express</span>
                    <span className="skill">Bootstrap</span>
                    <span className="skill">MUI</span>
                  </div>

                  <div className="about-item languages">
                    <h1>Languages</h1>
                    <div className="language">
                      <p>Tamil</p>
                      <span className="bar">
                        <span className="tamil"></span>
                      </span>
                    </div>
                    <div className="language">
                      <p>English</p>
                      <span className="bar">
                        <span className="english"></span>
                      </span>
                    </div>
                    {/* <div className="language">
                      <p>french</p>
                      <span className="bar">
                        <span className="french"></span>
                      </span>
                    </div> */}
                  </div>
                </div>
              </section>

              {/* PROJECTS */}

              <section className="content-card projects" id="projects">
                <h1>Projects</h1>
                <div className="col-2 project-list">
                  <div className="project-tile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdI-E54dTNQRCNTOOkFGKsyzq6hhBw-nWWTjSP_02aTvYeeZ39o2OuKKJ5pWHAdI15Sk&usqp=CAU"
                      alt="Kharpi"
                    />
                    <div className="overlay">
                      <div className="project-description">
                        <h3>Kharpi</h3>
                        <p>
                          Karpi is an online Web application. they provide all the extra curricular activity courses for
                          the children, All childrenss quiz and homework is maintained by this application.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="project-tile">
                    <img
                      src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Productivity_Tools_to_Get_You_More_Time.jpg"
                      alt="Relisafe"
                    />
                    <div className="overlay">
                      <div className="project-description">
                        <h3>Relisafe</h3>
                        <p>
                          Its a Web based Tool application. Maintain to spare parts analytical calculations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="project-tile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5OxKfHoBSr_kw2wsHdfpbpVUKt9vSYilbw&usqp=CAU"
                      alt="Shanthi Jewellers"
                    />
                    <div className="overlay">
                      <div className="project-description">
                        <h3>Shanthi Jewellers</h3>
                        <p>
                         Its a Android Application. Attendance (face-recognition) , Jewellery Making Details, Ads, expenses Other Details maintained.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="project-tile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdidzPx9sphgg2s8CyPyVF-m1aSr-yTN2Mg&usqp=CAU"
                      alt="Saloon App"
                    />
                    <div className="overlay">
                      <div className="project-description">
                        <h3>Saloon App</h3>
                        <p>
                          Its a Android Application. Customers Booking appoinments, cheat allocation, waiting time, offers, stripe online Payment and administration details Maintaing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="https://github.com/PoovarasanSundaramoorthi">see more...</a>
              </section>

              {/* EXPERIENCE */}

              <section className="content-card experience" id="experience">
                <h1>Experience</h1>
                <div className="timeline">
                  <div className="timeline-items">
                    <div className="timeline-item">
                      <div className="timeline-date">2021 - now</div>
                      <div className="timeline-content">
                        <h3>
                          <a href="https://aviartechservices.com/" target="_blank">
                            Aviar Technology Services
                          </a>
                        </h3>
                        <p>
                          I am a dedicated and passionate full-stack developer with expertise in both front-end and
                          back-end technologies. With 1.8 years of experience in the industry, I have successfully
                          delivered robust and scalable web applications.
                        </p>
                        <p>Professional in MERN stack developement</p>
                      </div>
                      <div className="counting-date">
                        <div className="counting-date__item">
                          <p className="counting-date__value">{years}</p>
                          <p className="counting-date__label">Years</p>
                        </div>
                        <div className="counting-date__item">
                          <p className="counting-date__value">{months}</p>
                          <p className="counting-date__label">Months</p>
                        </div>
                        <div className="counting-date__item">
                          <p className="counting-date__value">{days}</p>
                          <p className="counting-date__label">Days</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="timeline-item">
                      <div className="timeline-date">2015 - 2022</div>
                      <div className="timeline-content">
                        <h3>timeline item 2</h3>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iusto accusantium nostrum
                          eligendi debitis quisquam. Corporis at voluptatem culpa officia.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">2014 - 2015</div>
                      <div className="timeline-content">
                        <h3>timeline item 3</h3>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iusto accusantium nostrum
                          eligendi debitis quisquam. Corporis at voluptatem culpa officia.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </section>

              <section className="content-card experience" id="experience">
                <h1>Education</h1>
                <div className="timeline">
                  <div className="timeline-items">
                    <div className="timeline-item">
                      <div className="timeline-date">2016 - 2020</div>
                      <div className="timeline-content">
                        <h3>SKP Engineering College Tiruvannamalai</h3>
                        <p>Computer Science and Engineering - 6.15 CGPA </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">2014 - 2016</div>
                      <div className="timeline-content">
                        <h3>Government Boys Higher Secondary School Kalasapakkam</h3>
                        <p>
                          12th Standard <br />
                          Maths Biology - 70 %
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-date">2009 - 2014</div>
                      <div className="timeline-content">
                        <h3>Government Boys Higher Secondary School Kalasapakkam</h3>
                        <p>SSLC - 85 %</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* CONTACT */}

              <section className="content-card contact" id="contact">
                <h1>Contact</h1>
                <form className="form" id="form" action="#">
                  <div className="input-box">
                    <input type="text" className="text-input" name="name" placeholder="Name" required />
                  </div>
                  <div className="input-box">
                    <input type="email" className="text-input" name="email" id="email" placeholder="Email" required />
                  </div>
                  <div className="input-box">
                    <input
                      type="subject"
                      className="text-input"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <textarea name="text" className="message" placeholder="Message..." required></textarea>
                  </div>
                  <div className="input-box">
                    <input type="submit" className="submit-btn" id="submit" value="submit" />
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
        {/* <script src="script.js"></script> */}
      </body>
    </html>
  );
}

export default Resume;
