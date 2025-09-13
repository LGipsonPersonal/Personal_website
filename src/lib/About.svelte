<section id="about" class="about">
  <img src="./Profile_photo.jpg" alt="Luke Gipson" class="profile-photo" />
  <div class="about-text">
    <h2>About</h2>
    <p>
      Hi, my name is <strong>Lukes Gipson</strong> (but I go by Luke), and I am a Software Developer at 
      <a href="https://www.keybridgeti.com/" target="_blank" class="highlight">KeyBridge Technologies, LLC</a>. My work has mostly consisted of front end development and analyzing client's software for standards compliance, though I have worn many hats.
    </p>
    <p>
      My technical background includes experience with <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Python</strong>, <strong>Vue</strong>, <strong>Svelte</strong>, <strong>Node.js</strong>, and <strong>Gitlab CI/CD</strong>.
    </p>
    <p>
      My Education includes a Bachelor's degree in Computer Science from <strong>Oklahoma State University</strong> (Go Pokes).
    </p>
    <p>
      Outside of work, I'm an avid runner and gamer, and I like teaching myself new technologies. I like spending time with friends and family, and eating good food.
    </p>
    <p class="subtle">
      <a href="https://github.com/LGipsonPersonal" target="_blank">GitHub</a> &nbsp;|&nbsp;
      <a href="https://cas.okstate.edu/computer_science/student_awards/awardees_bio/gipson_luke_bio.html" target="_blank">Awards & Bio</a>
    </p>
  </div>
</section>

<style>
  .about {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 3rem 2rem 0 2rem;
    margin: 0 auto;
  }
  .profile-photo {
    width: 350px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    border: none;
    background: #fff;
  }
  .about-text {
    flex: 1;
    margin-top: 1.5rem;
  }
  .about-text h2 {
    font-size: 2.7rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: #222;
    text-align: left;
    border-bottom: 3px solid #2ecc7a;
    display: inline-block;
    padding-bottom: 0.2rem;
  }
  .about-text p {
    color: #222;
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
    text-align: left;
  }
  .about-text strong {
    font-weight: 700;
  }
  .highlight {
    color: #2ecc7a;
    font-weight: 600;
    text-decoration: none;
  }
  .subtle {
    color: #2ecc7a;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1.5rem;
  }
  .subtle a {
    color: #2ecc7a;
    text-decoration: underline;

  }
  @media (max-width: 900px) {
    .about {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .about-text {
      margin-top: 0;
    }
    .profile-photo {
      width: 220px;
    }
  }
</style>
