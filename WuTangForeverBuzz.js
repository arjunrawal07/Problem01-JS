class WuTangForeverBuzz {
  wuTangClan() {
    let output = "";
    for (let i = 1; i <= 15; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += "WuTangForever\n";
      } else if (i % 3 === 0) {
        output += "Wu\n";
      } else if (i % 5 === 0) {
        output += "Tang\n";
      } else {
        output += i + "\n";
      }
    }
    return output;
  }
}

module.exports = WuTangForeverBuzz;
