function checkForSpam(str) {
  "use strict";
  let lowerString = str.toLowerCase();
  console.log(lowerString);
  let spamWord = lowerString.includes("sale") || lowerString.includes("spam");
  return spamWord;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
