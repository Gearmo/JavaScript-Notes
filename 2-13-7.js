let n = prompt("Tell me the number");

for (let i = 2; i <= n; i++) {
    let count = 0;

    for (let j = 2; j <= i; j++) {

        if (i % j == 0) ++count;

        if (count > 1) break;

    }

    if (count == 1) alert(i);
}