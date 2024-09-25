var log = require("fancy-log");

function defaultTask(cb) {
  log("Hello lunch and learn from gulp!");
  cb();
}

exports.default = defaultTask;
