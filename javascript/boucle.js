// ex 01

var Sum = 0;
for (var i = 5; i <= 10; i++) {
    sum += i * i;
}
console.log(sum)

var count = 0;
for (var i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++;
        var sum = 0;
        var min = 1,
        var max = 6;
        for (i = 0; i < 20; i++) {
            var dice = Math.floor(Math.random() * (max - min + 1) + min)
            if (dice >= 5) {
                sum += dice;
            }

            var box1 = 12;
            var box2 = 5;
            for (var i = 12; i < 14; i++) {
                box1 = box2;
                console.log(box1 + box2);
                box2 = box1 + i;
                console.log(box1);
                console.log(box2);
                console.log(i);
            }
            var box1 = 12;
            for (var i = 12; i !== 0; i = i - 3) {
                console.log(box1);
                box1 = box1 - i;
                console.log(box1);
                console.log(i);
            }

        }
    }
}