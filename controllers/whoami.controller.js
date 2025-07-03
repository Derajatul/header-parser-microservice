function getWhoami(req, res) {
  const ipaddress =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress,
    language,
    software,
  });
}

module.exports = { getWhoami };
