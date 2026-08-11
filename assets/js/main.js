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

function togglePubs() {
  var morePubs = document.getElementById("more-pubs");
  var pubsButton = document.getElementById("show-more-pubs-button");

  if (morePubs.style.display === "none") {
    morePubs.style.display = "block";
    pubsButton.style.display = "none";
  } else {
    morePubs.style.display = "none";
    pubsButton.style.display = "inline";
  }
}
