const name = "Vibhav";
let age = 23;

console.log(`My name is ${name} and I'm ${age} years of age.`);

const gameName = new String(" VIBHAVJ-com-dot ");

console.table({
  gameName,
  length: gameName.length,
  charAt: gameName.charAt(2),
  indexOf: gameName.indexOf("V"),
  toupperCase: gameName.toUpperCase(),
  tolowercase: gameName.toLowerCase(),
  blink: gameName.blink(),
  slice: gameName.slice(-5, 4),
  sustring: gameName.substring(0, 4),
  split: gameName.split("-"),
  anchor: gameName.anchor(),
  trim: gameName.trim(),
});

// Outputs
/* 
My name is Vibhav and I'm 23 years of age.
┌─────────────┬────────────┬───────┬────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────────────────────────────────────────────┐
│   (index)   │     0      │   1   │   2    │  3  │  4  │  5  │  6  │  7  │  8  │  9  │ 10  │ 11  │ 12  │ 13  │ 14  │ 15  │ 16  │                   Values                    │
├─────────────┼────────────┼───────┼────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────────────────────────────────────────────┤
│  gameName   │    ' '     │  'V'  │  'I'   │ 'B' │ 'H' │ 'A' │ 'V' │ 'J' │ '-' │ 'c' │ 'o' │ 'm' │ '-' │ 'd' │ 'o' │ 't' │ ' ' │                                             │
│   length    │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │                     17                      │
│   charAt    │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │                     'I'                     │
│   indexOf   │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │                      1                      │
│ toupperCase │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │             ' VIBHAVJ-COM-DOT '             │
│ tolowercase │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │             ' vibhavj-com-dot '             │
│    blink    │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     '<blink> VIBHAVJ-com-dot </blink>'      │
│    slice    │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │                     ''                      │
│  sustring   │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │                   ' VIB'                    │
│    split    │ ' VIBHAVJ' │ 'com' │ 'dot ' │     │     │     │     │     │     │     │     │     │     │     │     │     │     │                                             │
│   anchor    │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │ '<a name="undefined"> VIBHAVJ-com-dot </a>' │
│    trim     │            │       │        │     │     │     │     │     │     │     │     │     │     │     │     │     │     │              'VIBHAVJ-com-dot'              │
└─────────────┴────────────┴───────┴────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────────────────────────────────────────────┘
*/
