function superbowlWin(record) {
    const winningRecord = record.find(obj => obj.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  