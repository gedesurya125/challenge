function validateTime(time) {
  const myRegex = /^([0-1]{0,1}[0-9]{0,1}|[0-2]{0,1}[0-3]{0,1})\:[0-5][0-9]$/
  return myRegex.test(time);
}