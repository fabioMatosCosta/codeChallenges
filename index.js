// /* Search for letters */
// import change from './challenges/search_for_letters.js';

// /* Tests */ 
// console.log('Search for letters:');
// console.log('Input: a **&  bZ, Output:', change('a **&  bZ'));
// console.log('Input: aaaaaaaa79345675, Output:', change('aaaaaaa79345675'));
// console.log('Input: &%#*, Output:', change('&%#*'));
// console.log('Input: AAAAA&%#*, Output:', change('AAAAA&%#*'));

// /* Edge case tests */
// console.log('Input: "", Output:', change(''));
// console.log('Input: "abcdefghijklmnopqrstuvwxyz", Output:', change('abcdefghijklmnopqrstuvwxyz'));
// console.log('Input: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", Output:', change('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// console.log('Input: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", Output:', change('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'));
// console.log('Input: "1234567890!@#$%^&*()", Output:', change('1234567890!@#$%^&*()'));
// console.log('Input: "The quick brown fox jumps over the lazy dog", Output:', change('The quick brown fox jumps over the lazy dog'));
// console.log('Input: "zzzzzzzzzzzzzzzzzzzzzzzzzz", Output:', change('zzzzzzzzzzzzzzzzzzzzzzzzzz'));
// console.log('Input: "aA", Output:', change('aA'));
// console.log('Input: "    ", Output:', change('    '));
// console.log('Input: "abcxyzABCXYZ", Output:', change('abcxyzABCXYZ'));

// /* Cat in Hats */
// import height from './challenges/cat_in_hats.js';

// /* Tests */

// console.log('Input: 7, Output: 3331148.800 = ', height(7));
// console.log('Input: 0, Output: 2000000.000 = ', height(0));

/* What comes after */
import comes_after from './challenges/what_cames_after.js';

console.log('Input: "are you really learning Ruby?", Output:', comes_after('are you really learning Ruby?', 'r'));
console.log('Input: "Katy Perry is on the radio!", Output:', comes_after('Katy Perry is on the radio!', 'r'));
console.log('Input: "Pirates say arrrrrrrrr.", Output:', comes_after('Pirates say arrrrrrrrr.', 'r'));
console.log('Input: "r8 your friend", Output:', comes_after('r8 your friend', 'r'));
