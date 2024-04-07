//import placeholderImage from "../../assets/images/placeholder.svg";

function iopt(url, maxWidth) {
  if (!url) {
    return "";
  }

  const encodedUrl = btoa(unescape(encodeURIComponent(url)))
    .split("/")
    .join("-");

  if (maxWidth) {
    return `https://www.iopt.cc/img/e/${encodedUrl},${maxWidth}.jpg`;
  }

  return `https://www.iopt.cc/img/e/${encodedUrl}.jpg`;
}

export default iopt;
