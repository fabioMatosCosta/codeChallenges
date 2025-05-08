// Description:
/*Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
"aaaaaaa79345675"  =>  "10000000000000000000000000"
"&%#*"  =>  "00000000000000000000000000"
*/

function change(string){
  let res = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  for( let i=0 ; i<string.length ; i++){
    switch(string[i].toLowerCase()){
      case 'a':
        res[0] = 1;
        break;
      case 'b':
        res[1] = 1;
        break;
      case 'c':
        res[2] = 1;
        break;
      case 'd':
        res[3] = 1;
        break;
      case 'e':
        res[4] = 1;
        break;
      case 'f':
        res[5] = 1;
        break;
      case 'g':
        res[6] = 1;
        break;
      case 'h':
        res[7] = 1;
        break;
      case 'i':
        res[8] = 1;
        break;
      case 'j':
        res[9] = 1;
        break;
      case 'k':
        res[10] = 1;
        break;
      case 'l':
        res[11] = 1;
        break;
      case 'm':
        res[12] = 1;
        break;
      case 'n':
        res[13] = 1;
        break;
      case 'o' :
        res[14] = 1;
        break;
      case 'p':
        res[15] = 1;
        break;
      case 'q':
        res[16] = 1;
        break;
      case 'r':
        res[17] = 1;
        break;
      case 's':
        res[18] = 1;
        break;
      case 't':
        res[19] = 1;
        break;
      case 'u':
        res[20] = 1;
        break;
      case 'v':
        res[21] = 1;
        break;
      case 'w':
        res[22] = 1;
        break;
      case 'x':
        res[23] = 1;
        break;
      case 'y':
        res[24] = 1;
        break;
      case 'z':
        res[25] = 1;
        break;
    }
  }
  
  return res.join('');
}

export default change ; 