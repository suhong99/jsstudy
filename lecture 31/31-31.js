const url = "https://example.com";

// 'http:// 또는 'https://'로 시작하는지

console.log(/^https?:\/\//.test(url)); //true

// 'com'으로 끝나는지

console.log(/com$/.test(url)); //true
