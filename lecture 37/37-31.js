const map = new Map();
console.log(map); //Map(0) {}

map.set("key1", "value1");
console.log(map); //Map(1) { 'key1' => 'value1' }

map.set("key1", "value1").set("key2", "value2");
console.log(map); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
