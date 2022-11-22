function checkURL(url) {
  // This regex checks URLs with users, passwords, domains & TLDs, ports and routes (probably).
  const regex = /^[a-z]{1,5}:[\/]{0,3}([0-9a-zA-Z\.-]+(:.*)?@)?([0-9a-zA-z]+\.)+([0-9a-zA-Z]{2,3}|[0-9]{1,3})(:[0-9]{1,5})?(\/[a-zA-Z0-9\.\/-?&_+]*)?$/

  return regex.test(url)
}
