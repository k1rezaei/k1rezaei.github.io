---
layout: homepage
---

## Bio
I am a third-year Ph.D. student at the University of Maryland, 
advised by
<a href="https://www.cs.umd.edu/~sfeizi/">Prof. Feizi</a>
and <a href="https://www.cs.umd.edu/~hajiagha/">Prof. Hajiaghayi</a>. 
My research focuses on the interpretability of generative AI models from both a model perspective—localizing knowledge within models, detecting, and explaining their failure modes—and a data perspective, analyzing the impact of individual data points on a model through challenges like unlearning and data selection for language model pretraining.
Furthermore, I have proposed methods for integrating ads into the output of LLMs as a strategy to monetize them effectively.

 
## News
<div id="news">
    <div class="news-item"><span class="news-date-paper">[Mar 25]</span> Our paper "Online Advertisements with LLMs: Opportunities and Challenges" is accepted to <i>ACM SIGecom Exchanges 2025</i>.</div> 
    <div class="news-item"><span class="news-date-internship">[Jan 25]</span> I'll be joining <i>Google as Student Researcher</i> for Spring 2025 to work on data selection in large language model pretraining.</div>
    <div class="news-item"><span class="news-date-blog">[Jan 25]</span> My internship project "RESTOR: Knowledge Recovery through Machine Unlearning" is now on <a href="https://arxiv.org/abs/2411.00204">arXiv</a>.</div>
    <div class="news-item">
    <span class="news-date-blog">[Nov 24]</span>
    See our <a href="https://vision-mech-intp.github.io/2024/11/19/blogpost.html">blogpost</a> on Mechanstic Interpretability Beyond Language Models!
    </div>
    <div class="news-item"><span class="news-date-paper">[Sep 24]</span> Our paper "Ad Auctions for LLMs via Retrieval Augmented Generation" is accepted to <i>NeurIPS 2024</i>.</div>
    <div class="news-item"><span class="news-date-paper">[May 24]</span> Our paper "On Mechanistic Knowledge Localization in Text-to-Image Generative Models" is accepted to <i>ICML 2024</i>.</div>
    <div class="news-item"><span class="news-date-internship">[Mar 24]</span> I will be joining <i>MOSAIC at Allen Institute for AI (Ai2)</i> as <i>Research Intern</i> in summer 2024!</div>
  <div class="button-container">
    <button id="show-more-button" class="toggle-button" onclick="toggleNews()">Show more</button>
  </div>
</div>

<div id="more-news" style="display: none;">
    <div class="news-item"><span class="news-date-paper">[Jan 24]</span> Our papers "PRIME: Prioritizing Interpretability in Failure Mode Extraction" and "Robustness of AI-Image Detectors: Fundamental Limits and Practical Attacks" are accepted to <i>ICLR 2024</i>.</div>
    <div class="news-item"><span class="news-date-paper">[Dec 23]</span> Our paper "Regret Analysis of Repeated  Delegated Choice" is accepted to AAAI 2024.</div>
    <div class="news-item"><span class="news-date-blog">[Nov 23]</span> We posted our draft "Online Advertisements with LLMs: Opportunities and Challenges" on arXiv.</div>
    <div class="news-item"><span class="news-date-blog">[Oct 23]</span> Our work "Robustness of AI-Image Detectors: Fundamental Limits and Practical Attacks" was covered by
      <a href="https://www.theregister.com/2023/10/02/watermarking_security_checks/">Register</a>, 
      <a href="https://www.wired.com/story/artificial-intelligence-watermarking-issues/">Wired</a>, and 
      <a href="https://arstechnica.com/ai/2023/10/researchers-show-how-easy-it-is-to-defeat-ai-watermarks/">Arstechnica</a>.
    </div>
    <div class="news-item"><span class="news-date-competition">[May 23]</span> Our team, UMD RED, ranked 3-rd in ICPC NAC 2023 and proceeded to ICPC World Finals 2023.</div>
    <div class="news-item"><span class="news-date-paper">[May 23]</span> Our paper "Delegating to Multiple Agents" is accepted to EC 2023.</div>
    <div class="news-item"><span class="news-date-paper">[Apr 23]</span> Our paper "Run-off Election: Improved Provable Defense against Data Poisoning Attacks" is accepted to ICML 2023.</div>
    <div class="news-item"><span class="news-date-paper">[Apr 23]</span> Our paper "Text-To-Concept (and Back) via Cross-Model Alignment" is accepted to ICML 2023.</div>
    <div class="news-item"><span class="news-date-competition">[Feb 23]</span> Our team, UMD RED, is qualified to compete in ICPC NAC 2023 at UCF.</div>
  <div class="button-container">
    <button class="toggle-button" onclick="toggleNews()">Show less</button>
  </div>
</div>

<style>
.news-item {
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}

.news-item:last-child {
  border-bottom: none;
}

.news-date-paper {
  color: #8B0000;
  font-weight: bold;
}

.news-date-internship {
  color: #00008B;
  font-weight: bold;
}

.news-date-blog {
  color: #4B0082;
  font-weight: bold;
}

.news-date-competition {
  color: #006400;
  font-weight: bold;
}
</style>

<style>
  .button-container {
    text-align: center;
    margin: 20px 0;
  }

  .toggle-button {
    background-color: #d3d3d3; /* Brighter gray */
    color: black;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  .toggle-button:hover {
    background-color: #c0c0c0; /* Slightly darker gray */
    transform: scale(1.05);
  }

  .toggle-button:active {
    background-color: #a9a9a9; /* Even darker gray */
    transform: scale(1);
  }
</style>

<script>
  function toggleNews() {
    var moreNews = document.getElementById("more-news");
    var newsButton = document.getElementById("show-more-button");
    
    if (moreNews.style.display === "none") {
      moreNews.style.display = "block";
      newsButton.style.display = "none";
    } else {
      moreNews.style.display = "none";
      newsButton.style.display = "inline";
    }
  }
</script>


{% include_relative _includes/publications.md %}
{% include_relative _includes/services.md %}
