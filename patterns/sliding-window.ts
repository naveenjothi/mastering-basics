function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let map: Record<string, number> = {};
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char] != undefined && map[char] >= j) {
      j = map[char] + 1;
    }
    map[char] = i;
    maxLen = Math.max(maxLen, i - j + 1);
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring("abcbacdab")); // Output: 4

function lengthOfSubstringWithKDistinctChars(s: string, k: number): number {
  const map: Record<string, number> = {};
  let maxLengthWithKDistinctChars = 0;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] ?? 0) + 1;
    while (Object.entries(map).length > k) {
      map[s[j]] -= 1;
      if (map[s[j]] == 0) delete map[s[j]];
      j++;
    }
    maxLengthWithKDistinctChars = Math.max(
      maxLengthWithKDistinctChars,
      i - j + 1
    );
  }
  return maxLengthWithKDistinctChars;
}

console.log(lengthOfSubstringWithKDistinctChars("abcbacdab", 4)); // Output: 9
