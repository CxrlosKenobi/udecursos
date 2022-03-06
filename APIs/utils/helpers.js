function checkBooleanRegex(regex, value) {
  if (value.match(regex) !== null) {
    return value.match(regex)[0] === value
  } else return false;
}

module.exports = {
  checkBooleanRegex
};
