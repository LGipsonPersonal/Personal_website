<script>
  import Header from './lib/Header.svelte';
  import About from './lib/About.svelte';
  import Portfolio from './lib/Portfolio.svelte';
  import Experience from './lib/Experience.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<main>
  <Header />
  <About />
  <Experience />
  <Portfolio />
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #f5f6fa;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  }

</style>