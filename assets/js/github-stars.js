// Fill every [data-github-stars="owner/repo"] element with the repo's live star count.
// Counts are cached in sessionStorage for 10 minutes to stay under GitHub's unauthenticated rate limit.
(function () {
  const TTL = 10 * 60 * 1000;

  function cached(repo) {
    try {
      const hit = JSON.parse(sessionStorage.getItem("gh-stars:" + repo));
      if (hit && Date.now() - hit.t < TTL) return hit.n;
    } catch (e) {}
    return null;
  }

  function show(repo, n) {
    document.querySelectorAll('[data-github-stars="' + repo + '"]').forEach((el) => {
      const count = el.querySelector(".stars-count") || el;
      count.textContent = n.toLocaleString("en-US");
      el.hidden = false;
    });
  }

  const repos = new Set([...document.querySelectorAll("[data-github-stars]")].map((el) => el.dataset.githubStars).filter(Boolean));
  repos.forEach((repo) => {
    const n = cached(repo);
    if (n !== null) return show(repo, n);
    fetch("https://api.github.com/repos/" + repo)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        try {
          sessionStorage.setItem("gh-stars:" + repo, JSON.stringify({ n: d.stargazers_count, t: Date.now() }));
        } catch (e) {}
        show(repo, d.stargazers_count);
      })
      .catch(() => {});
  });
})();
