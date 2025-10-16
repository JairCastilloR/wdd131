
function getQueryParams() {
  const params = {};
  location.search
    .substring(1)
    .split("&")
    .forEach(pair => {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
  return params;
}

window.addEventListener("DOMContentLoaded", () => {
  const params = getQueryParams();
  const reviewDiv = document.getElementById("reviewDetails");

  
  let html = "<h2>Your Review</h2><ul>";
  html += `<li>Product: ${params.product}</li>`;
  html += `<li>Rating: ${params.rating}</li>`;
  html += `<li>Installation Date: ${params.installdate}</li>`;


  if (params.feature) {

    const feats = Array.isArray(params.feature) ? params.feature : [params.feature];
    html += `<li>Features: ${feats.join(", ")}</li>`;
  } else {
    html += `<li>Features: None selected</li>`;
  }

  if (params.reviewText) {
    html += `<li>Review Text: ${params.reviewText}</li>`;
  }
  if (params.username) {
    html += `<li>User Name: ${params.username}</li>`;
  }
  html += "</ul>";
  reviewDiv.innerHTML = html;

  
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count += 1;
  localStorage.setItem("reviewCount", count);

  const countDiv = document.getElementById("reviewCount");
  countDiv.innerHTML = `<p>Total reviews submitted from this browser: <strong>${count}</strong></p>`;
});
