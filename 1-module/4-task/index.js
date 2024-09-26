function checkSpam(str) {
  const spamW = ['1xBet', 'XXX'];
  for (const word of spamW) {
    if (str.toLowerCase().includes(word.toLowerCase())) {
      return true;
    }
  }
  return false;
}

