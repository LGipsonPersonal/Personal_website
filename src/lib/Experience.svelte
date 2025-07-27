<script>
 let experiences = [
    {
      title: "Software Developer",
      company: "KeyBridge Technologies, Inc.",
      duration: "June 2023 – Present",
      description: "Front-end development and standards compliance analysis for client software. Contributed to multiple web projects, collaborated with cross-functional teams, and supported CI/CD pipelines."
    },
    {
      title: "Software Developer Intern",
      company: "KeyBridge Technologies, Inc.",
      duration: "Jan 2023 – May 2023",
      description: "Supported development of web applications, performed code reviews, and contributed to documentation and testing efforts."
    },
    {
      title: "Research Assistant",
      company: "Oklahoma State University",
      duration: "Jan 2022 – Apr 2022",
      description: "Developed virtual learning environments using Unity for university research. Assisted in designing interactive educational simulations and collaborated with faculty on project requirements."
    },
  ];
</script>

<section class="experience" id="experience">
  <h2>Experience</h2>
  <ul>
    {#each experiences as experience}
      <li>
        <h3>{experience.title}</h3>
        <p><strong>{experience.company}</strong> | {experience.duration}</p>
        <p>{experience.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    padding: 2rem;


  }
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    border-bottom: 3px solid #2ecc7a;
    display: inline-block;
    color: #222;
    padding-bottom: 0.2rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 2rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1.2rem;
  }
  h3 {
    margin: 0 0 0.3rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #222;
  }
  p {
    margin: 0.2rem 0;
    color: #444;
    font-size: 1.08rem;
    line-height: 1.6;
  }
</style>