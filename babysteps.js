//console.log(process.argv);
var sum = 0;
for (var x in process.argv) {
    //console.log(process.argv[x]);
    if(x > 1) {
        sum = sum + Number(process.argv[x]);
    }
}
console.log(sum);
