var domain = document.referrer;
  var allowDomain = "fypnews.id";
  console.log(domain);
  if (domain.includes(allowDomain) || domain.includes('embedd.eu.org')) {
    console.log("allow to play");
  } else {
    window.location.href = "https://www.linkzhe.eu.org";
    window.location.replace("https://www.linkzhe.eu.org");
    document.getElementById("app").innerHTML = "";
  }
