function successTemplate(data, success = true) {
  return { success, data };
}

function errorTemplate(error, success = false) {
  return { success, error };
}

module.exports = { successTemplate, errorTemplate };
