function escapeHTML(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  escapeHTML.replacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
  };

  return str.replace(/[&<>"'`]/g, function (m) {
    return escapeHTML.replacements[m];
  });
}

module.exports = escapeHTML;
