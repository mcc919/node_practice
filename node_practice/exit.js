let i = 4;
setInterval(() => {
    if (i === 0) {
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i -= 1;
}, 1000);