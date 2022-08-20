// code your solution here
function superbowlWin(record) {
  let win = record.find((entry) => entry.result === "W");
  return win ? win.year : undefined;
}
