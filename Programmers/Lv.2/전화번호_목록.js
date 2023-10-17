function solution(phone_book) {
  const hashMap = {};

  for (let phoneNumber of phone_book) {
    hashMap[phoneNumber] = true;
  }

  for (let phoneNumber of phone_book) {
    for (let i = 1; i < phoneNumber.length; i++) {
      const prefix = phoneNumber.slice(0, i);
      if (hashMap[prefix]) {
        return false;
      }
    }
  }

  return true;
}
