function solution(price, money, count) {
  let cnt = 0;
  for (i = 1; i <= count; i++) {
    cnt += i;
  }
  return price * cnt - money <= 0 ? 0 : price * cnt - money;
}
