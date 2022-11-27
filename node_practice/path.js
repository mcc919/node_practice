const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('______________________');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('basename():', path.basename(string));
console.log("path.basename():", path.basename(string, path.extname(string)));
console.log('----------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C://users//hotaek han',
    name: 'path',
    ext: '.js',
}));

console.log('path.normalize():', path.normalize('C://users\\\\hotaekhan\\\path.js'));
console.log('path.isAbsoulte():', path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));

console.log('path.relative():', path.relative('C:\\users\\한호택의 노트북\\Desktop', 'C:\\users\\한호택의 노트북\\Desktop\\nodejs'));