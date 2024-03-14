const rootEl = document.getElementById("root");

function init() {
  chrome.devtools.inspectedWindow.eval(
    "shadow.cljs.devtools.client.env.devtools_info()",
    function (result, isException) {
      if (isException) {
        console.log("shadow-cljs not found on page");
        rootEl.innerHTML = "shadow-cljs not found on page.";
      } else {
        console.log("shadow-cljs devtools found on page", result);

        var iframe = document.createElement("iframe");
        iframe.src =
          "http" +
          (result.ssl ? "s" : "") +
          "://" +
          result.server_host +
          ":" +
          result.server_port;

        rootEl.innerHTML = "";
        rootEl.append(iframe);
      }
    }
  );
}

function stop() {
    rootEl.innerHTML = "";
}