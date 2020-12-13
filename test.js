var array = [
    [0,1,2,3,4],
    [4,3,2,1,0],
    [5,6,7,8,9]
];
var Delete = array.splice(2,1);
var n = 1;
function deleteColumnumn(array, column) {
    do {
        for (i = 0; i < array.length; i++) {
            array[i].splice(column[0] - n, 1)
        }
        column.splice(0,1);
        n++;
    } while (column.length > 0)
    return array;
}
var column = [1,2];
deleteColumnumn(array, column);
console.log(array);

// var mang1 = [0,1,2,3,4];
// var mang2 = [4,3,2,1,0];
// var mang3 = [5,6,7,8,9];
// var mang = [mang1,mang2,mang3];
// var xoa = mang.splice(1,1);
// for (var i = 0 ; i < length.mang11 ; i++)
// {
//     if (( mang1[i] = mang1[1]) && (mang1[i] = mang1[4] ))
//     {
//         var xoa = mang1.splice(1,1);
//     }
    
// }
// console.log(mang);

