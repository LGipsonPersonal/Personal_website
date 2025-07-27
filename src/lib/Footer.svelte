<script>
  let contactInfo = {
    email: 'gipsonluke97@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/luke-gipson-bb7b8032b',
  };
</script>

<footer>
  <div class="footer-content">
    <h2>Contact</h2>
    <p>
      <a href={contactInfo.linkedIn} target="_blank" rel="noreferrer" class="highlight">LinkedIn</a> &nbsp;|&nbsp;
      <a href={`mailto:${contactInfo.email}`} class="highlight">{contactInfo.email}</a>
    </p>
    <p class="copyright">© {new Date().getFullYear()} Luke Gipson</p>
  </div>
</footer>

<style>
  footer {
    background: #fafafa;
    color: #222;
    padding-bottom: 0.5rem;
    border-top: 3px solid #2ecc7a;
    margin-top: 1rem;
  }
  .footer-content {
    margin: auto;
    padding: 0 1rem;
    max-width: 900px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-content h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #222;
    border-bottom: 3px solid #2ecc7a;
    display: inline-block;
    padding-bottom: 0.2rem;
  }
  .footer-content p {
    font-size: 1.08rem;
    margin: 0.5rem 0;
    color: #444;
  }
  .highlight {
    color: #2ecc7a;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }
  .highlight:hover {
    text-decoration: underline;
    color: #222;
  }
  .copyright {
    margin-top: 1.5rem;
    font-size: 0.95rem;
    color: #888;
  }
  @media (max-width: 900px) {
    .footer-content {
      padding: 0 1rem;
      text-align: center;
    }
    .footer-content h2 {
      font-size: 1.5rem;
    }
  }
</style>