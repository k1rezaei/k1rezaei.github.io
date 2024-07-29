---
layout: homepage
---

## About Me

I am a second-year Ph.D. student at the University of Maryland, 
advised by
<a href="https://www.cs.umd.edu/~sfeizi/">Prof. Feizi</a>.
 My research centers around Deep Learning Robustness and Interpretability, with a keen interest in comprehending what models learn, how they utilize their knowledge for predictions, and understanding their successes and failures. I strive to represent these concepts in easily understandable terms, often using languages.
 
 <!-- In addition to my work in Deep Learning Robustness and Interpretability, I work in the area of Mechanism Design where my focus revolves around delegated choice mechanisms, addressing challenges such as information asymmetry and misaligned utility between principal and agents. -->

<!-- ## News
- **[May 2024]** Our paper "On Mechanistic Knowledge Localization in Text-to-Image Generative Models" is accepted to ICML 2024.
- **[March 2024]** I will be joining to <a href="">MOSAIC</a> at Allen Institute for AI as <strong>Research Intern</strong> in summer 2024!
- **[Jan 2024]** Our papers "PRIME: Prioritizing Interpretability in Failure Mode Extraction" and "Robustness of AI-Image Detectors: Fundamental Limits and Practical Attacks" are accepted to ICLR 2024.
- **[Dec 2023]** Our paper "Regret Analysis of Repeated Delegated Choice" is accepted to AAAI 2024.
- **[Nov 2023]** We posted our draft "Online Advertisements with LLMs: Opportunities and Challenges" on arXiv.
- **[Oct. 2023]** Our work "Robustness of AI-Image Detectors: Fundamental Limits and Practical Attacks" was covered by
<a href="https://www.theregister.com/2023/10/02/watermarking_security_checks/">Register</a>, 
<a href="https://www.wired.com/story/artificial-intelligence-watermarking-issues/">Wired</a>, and 
<a href="https://arstechnica.com/ai/2023/10/researchers-show-how-easy-it-is-to-defeat-ai-watermarks/">Arstechnica</a>.

- **[May. 2023]** Our team, UMD RED, ranked 3-rd in ICPC NAC 2023 and proceeded to ICPC World Finals 2023.
- **[May. 2023]** Our paper "Delegating to Multiple Agents" is accepted to EC 2023.
- **[Apr. 2023]** Our paper "Run-off Election: Improved Provable Defense against Data Poisoning Attacks" is accepted to ICML 2023.
- **[Apr. 2023]** Our paper "Text-To-Concept (and Back) via Cross-Model Alignment" is accepted to ICML 2023.
- **[Feb. 2023]** Our team, UMD RED, is qualified to compete in ICPC NAC 2023 at UCF. -->

## News

<div id="news">
  <ul>
    <li><strong>[May 2024]</strong> Our paper "On Mechanistic Knowledge Localization in Text-to-Image Generative Models" is accepted to ICML 2024.</li>
    <li><strong>[March 2024]</strong> I will be joining <a href="">MOSAIC</a> at Allen Institute for AI (Ai2) as <strong>Research Intern</strong> in summer 2024!</li>
    <li><strong>[Jan 2024]</strong> Our papers "PRIME: Prioritizing Interpretability in Failure Mode Extraction" and "Robustness of AI-Image Detectors: Fundamental Limits and Practical Attacks" are accepted to ICLR 2024.</li>
    <li><strong>[Dec 2023]</strong> Our paper "Regret Analysis of Repeated Delegated Choice" is accepted to AAAI 2024.</li>
  </ul>
  <div class="button-container">
    <button class="toggle-button" onclick="toggleNews()">Show more</button>
  </div>
</div>

<div id="more-news" style="display: none;">
  <ul>
    <li><strong>[Nov 2023]</strong> We posted our draft "Online Advertisements with LLMs: Opportunities and Challenges" on arXiv.</li>
    <li><strong>[Oct. 2023]</strong> Our work "Robustness of AI-Image Detectors: Fundamental Limits and Practical Attacks" was covered by
      <a href="https://www.theregister.com/2023/10/02/watermarking_security_checks/">Register</a>, 
      <a href="https://www.wired.com/story/artificial-intelligence-watermarking-issues/">Wired</a>, and 
      <a href="https://arstechnica.com/ai/2023/10/researchers-show-how-easy-it-is-to-defeat-ai-watermarks/">Arstechnica</a>.
    </li>
    <li><strong>[May 2023]</strong> Our team, UMD RED, ranked 3-rd in ICPC NAC 2023 and proceeded to ICPC World Finals 2023.</li>
    <li><strong>[May 2023]</strong> Our paper "Delegating to Multiple Agents" is accepted to EC 2023.</li>
    <li><strong>[Apr. 2023]</strong> Our paper "Run-off Election: Improved Provable Defense against Data Poisoning Attacks" is accepted to ICML 2023.</li>
    <li><strong>[Apr. 2023]</strong> Our paper "Text-To-Concept (and Back) via Cross-Model Alignment" is accepted to ICML 2023.</li>
    <li><strong>[Feb. 2023]</strong> Our team, UMD RED, is qualified to compete in ICPC NAC 2023 at UCF.</li>
  </ul>
  <div class="button-container">
    <button class="toggle-button" onclick="toggleNews()">Show less</button>
  </div>
</div>

<style>
  .button-container {
    text-align: center;
    margin: 20px 0;
  }

  .toggle-button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  .toggle-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  .toggle-button:active {
    background-color: #004080;
    transform: scale(1);
  }
</style>

<script>
  function toggleNews() {
    var moreNews = document.getElementById("more-news");
    var newsButton = document.getElementById("news").getElementsByTagName("button")[0];
    
    if (moreNews.style.display === "none") {
      moreNews.style.display = "block";
      newsButton.innerText = "Show less";
    } else {
      moreNews.style.display = "none";
      newsButton.innerText = "Show more";
    }
  }
</script>

<!-- {% include_relative _includes/news.md %} -->
{% include_relative _includes/publications.md %}
{% include_relative _includes/services.md %}
