function solution(nums) {
    const pkmSet = [...new Set(nums)].length;
    const pkmNum = nums.length/2;
    if (pkmSet >= pkmNum) return pkmNum;
    return pkmSet;
}