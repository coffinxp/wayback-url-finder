document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("urlInput");
  const domainBtn = document.getElementById("domainBtn");
  const wildcardBtn = document.getElementById("wildcardBtn");
  const specificBtn = document.getElementById("specificBtn");
  const extensionsBtn = document.getElementById("extensionsBtn");
  const toast = document.getElementById("toast");

  // Set current tab URL by default
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const currentTab = tabs[0];
    if (currentTab && currentTab.url) {
      urlInput.value = currentTab.url;
    }
  });

  // Show toast notification
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Set button loading state
  function setButtonLoading(button, isLoading) {
    if (isLoading) {
      button.classList.add("loading");
    } else {
      button.classList.remove("loading");
    }
  }

  function openWaybackURL(type) {
    let urlToInsert = urlInput.value.trim();
    if (!urlToInsert) {
      showToast("Please enter a URL");
      return;
    }

    // Check if the URL has a protocol, if not add https://
    if (!urlToInsert.match(/^https?:\/\//i)) {
      urlToInsert = "https://" + urlToInsert;
    }

    let finalURL = "";
    let button;

    try {
      const parsedURL = new URL(urlToInsert);
      const hostname = parsedURL.hostname;
      const fullURL = parsedURL.origin + parsedURL.pathname;

      if (type === "wildcard") {
        // *.domain.com/*
        finalURL = `https://web.archive.org/cdx/search/cdx?url=*.${hostname}/*&collapse=urlkey&output=text&fl=original`;
        button = wildcardBtn;
      } else if (type === "domain") {
        // domain.com/*
        finalURL = `https://web.archive.org/cdx/search/cdx?url=${hostname}/*&collapse=urlkey&output=text&fl=original`;
        button = domainBtn;
      } else if (type === "specific") {
        // full path
        finalURL = `https://web.archive.org/cdx/search/cdx?url=${fullURL}/*&collapse=urlkey&output=text&fl=original`;
        button = specificBtn;
      } else if (type === "extensions") {
        // Files with specific extensions
        finalURL = `https://web.archive.org/cdx/search/cdx?url=*.${hostname}/*&collapse=urlkey&output=text&fl=original&filter=original:.*\.(xls|xml|xlsx|json|pdf|sql|doc|docx|pptx|txt|zip|tar\.gz|tgz|bak|7z|rar|log|cache|secret|db|backup|yml|gz|git|config|csv|yaml|md|md5|exe|dll|bin|ini|bat|sh|tar|deb|rpm|iso|img|apk|msi|env|dmg|tmp|crt|pem|key|pub|asc)$`;
        button = extensionsBtn;
      }

      // Set loading state
      setButtonLoading(button, true);

      // Open the URL after a short delay to show loading state
      setTimeout(() => {
        browser.tabs.create({ url: finalURL });
        setButtonLoading(button, false);
        showToast("Opening Wayback Machine...");
      }, 500);
    } catch {
      showToast("Invalid URL format. Please enter a valid URL.");
      return;
    }
  }

  domainBtn.addEventListener("click", () => openWaybackURL("domain"));
  wildcardBtn.addEventListener("click", () => openWaybackURL("wildcard"));
  specificBtn.addEventListener("click", () => openWaybackURL("specific"));
  extensionsBtn.addEventListener("click", () => openWaybackURL("extensions"));
});
