// Which values does the while loop show?

let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4
// starts at i = 1 because of "++i"; the "new" value

let i = 0;
while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5
// starts at i = 0 because of "i++"; the "old" value