const str= `
010-1234-3662
kkkkk@naver.com
https://heropy.blog/2018/10/28/regexp/
The the quick brown in the lake.
aaabbbsssddd
`

console.log(
    str.match(/(?<=\@).{1,}/g)
)