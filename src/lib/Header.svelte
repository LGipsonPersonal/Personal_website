<script>
  let title = "Luke Gipson";
</script>

<header>
  <nav>
    <h1>{title}</h1>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    background: #fafafa;
    border-bottom: 3px solid #2ecc7a;
    padding:1rem;
    text-align: left;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;


  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #222;
    margin: 0;

    display: inline-block;
    padding-bottom: 0.2rem;
  }
  nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav a {
    color: #222;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.2s;
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
  }
  nav a:hover {
    color: #2ecc7a;
    border-bottom: 2px solid #2ecc7a;
  }
  @media (max-width: 900px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1rem;
    }
    nav ul {
      margin-top: 1rem;
      gap: 1.2rem;
    }
    h1 {
      font-size: 1.5rem;
    }
  }
</style>