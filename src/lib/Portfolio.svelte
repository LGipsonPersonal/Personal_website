<script>
  let projects = [
    {
      title: "Company Portal (WIP)",
      description: "I've been using Svelte to build a typical company website containing things like Timesheets, company insurance information, etc etc, combined with a task management app that allows users contextualize HR information with their current tasks.",
      image: "/src/assets/svelte.svg",
      link: "https://github.com/LGipsonPersonal/OnlinePortal"
    },
    {
      title: "Snippet Box (WIP)",
      description: "I've also been Using Go to build a web application which lets people paste and share snippets of text. This project is made with the help of the \"Let's Go\" book by Alex Edwards.",
      image: "/src/assets/Go_Logo_Blue.svg",
      link: "https://github.com/LGipsonPersonal/snippetBoxPersonal"
    },
  ];
</script>

<section id="portfolio" class="portfolio">
  <h2>Portfolio</h2>
  <div class="portfolio-list">
    {#each projects as project}
      <a class="portfolio-item" href={project.link} target="_blank">
        <img src={project.image} alt={project.title} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .portfolio {
    padding: 3rem 2rem 0 2rem;

    background: #fafafa;
  }
  .portfolio h2 {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    font-weight: 700;
    border-bottom: 3px solid #2ecc7a;
    display: inline-block;
    color: #222;
    padding-bottom: 0.2rem;
  }
  .portfolio-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .portfolio-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    text-decoration: none;
    color: inherit;
    width: 340px;
    min-height: 180px;
    padding: 1.5rem;
    transition: box-shadow 0.2s;
    margin-bottom: 2rem;
  }
  .portfolio-item:hover {
    box-shadow: 0 4px 24px rgba(44,204,122,0.15);
  }
  .portfolio-item img {
    max-height: 48px;
    margin-bottom: 1rem;
    border-radius: 6px;
    background: #f5f6fa;
  }
  .portfolio-item h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: #222;
    font-weight: 600;
  }
  .portfolio-item p {
    font-size: 1.08rem;
    color: #444;
    margin: 0;
    line-height: 1.6;
  }
  @media (max-width: 900px) {
    .portfolio-list {
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
    }
    .portfolio-item {
      width: 100%;
      min-width: 0;
    }
    .portfolio {
      padding: 2rem 1rem 0 1rem;
    }
  }
</style>