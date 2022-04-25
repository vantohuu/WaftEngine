
const sort = {};

sort.selectionSort = (arr) => {
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        let Min = arr[i];
        let iMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (Min > arr[j]) {
                Min = arr[j];
                iMin = j;
            }
        }
        if (i != iMin) {
            arr[iMin] = arr[i];
            arr[i] = Min;
        }
    }
    return arr;
}

sort.bubbleSort = (arr) => {
    let gt;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] > arr[j]) {
                gt = arr[j];
                arr[j] = arr[i];
                arr[i] = gt;
            }

    }
    return arr;
}

sort.insertionSort = (arr) => {
    let key;
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    //console.log(arr);
    return arr;
}

sort.binaryinsertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let l = 0;
        let r = i - 1;
        while (l <= r) {
            let m = parseInt((parseInt(l) + parseInt(r)) / 2);
            if (arr[m] > key) {
                r = m - 1;
            } else l = m + 1;
        }

        for (let j = i - 1; j >= l; --j) {
            arr[j + 1] = arr[j];
        }
        arr[l] = key;
    }
    //console.log(arr);
    return arr;
}

sort.shakerSort = (arr) => {
    let l = 0;
    let r = arr.length - 1;
    let k = r;
    while (l < r) {
        for (let i = r; i > l; i--) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                k = i;
            }
        }
        l = k;
        for (let i = l; i < r; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                k = i;
            }
        }
        r = k;
    }
    //console.log(arr);
    return arr;
}

sort.shellSort = (arr) => {
    let n = arr.length;
    for (let i = parseInt(n / 2); i >= 1; i = parseInt(i / 2)) {
        for (let j = i; j < arr.length; j++) {
            let temp = arr[j];
            let pos = j - i;
            while (pos >= 0 && arr[pos] > temp) {
                arr[pos + i] = arr[pos];
                pos -= i;
            }
            arr[pos + i] = temp;
        }
    }
    //console.log(arr);
    return arr;
}


const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

const mergesort = (arr) => {
    const half = arr.length / 2
    if (arr.length < 2) {
        return arr
    }
    const left = arr.splice(0, half)
    return merge(sort.mergeSort(left), sort.mergeSort(arr))
}

sort.mergeSort = (arr) => {
    let array = mergesort(arr);
    //console.log(arr)
    return array;
}

sort.countingSort = (arr) => {
    let n = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let range = max - min + 1;
    let count = [];
    let output = [];
    for (let i = 0; i < range; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        output[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    arr = output;
    return arr;
}
const countSort = (arr, n, exp) => {
    let output = [];
    let i;
    let count = [];
    for (let i = 0; i < 10; i++)
        count[i] = 0;

    for (i = 0; i < n; i++)
        count[Math.floor(arr[i] / exp) % 10]++;

    for (i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (i = 0; i < n; i++)
        arr[i] = output[i];
}
sort.radixSort = (arr) => {
    let m = Math.max(...arr);
    let n = arr.length;
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        countSort(arr, n , exp)
    return arr;
}

const quicksort = (arr, l, r) =>
{
    let x = arr[parseInt((l+r)/2)];
    let l1 = l;
    let r1 = r;
    while (l1 < r1)
    {
        while (arr[l1] < x) l1++;
        while (arr[r1] > x) r1--;
        if (l1 <= r1) {
            [arr[r1], arr[l1]] = [arr[l1], arr[r1]];
            l1 ++;
            r1 --;
        }  
    }
    if (l1 < r) quicksort(arr, l1, r);
    if (r1 > l) quicksort(arr, l, r1);
    
} 

sort.quickSort = (arr) =>
{
    quicksort(arr, 0, arr.length - 1);
    return arr;
}

sort.flashSort = (arr) =>
{
    var max = 0, min = arr[0];
    var n = arr.length;
    var m = ~~(0.45 * n);
    var l = new Array(m);
 
    for (var i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
 
     if (min === arr[max]) {
        return arr;
    }
 
    var c1 = (m - 1) / (arr[max] - min);
 
 
    for (var k = 0; k < m; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (arr[j] - min));
        ++l[k];
    }
 
    for (var p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }
 
    var hold = arr[max];
    arr[max] = arr[0];
    arr[0] = hold;
 
    //permutation
    var move = 0, t, flash;
    j = 0; 
    k = m - 1;
  
    while (move < (n - 1)) {
        while (j > (l[k] - 1)) {
            ++j;
            k = ~~(c1 * (arr[j] - min));
        }
        if (k < 0) break;
        flash = arr[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++move;
        }
    }
 
    //insertion
    for (j = 1; j < n; j++) {
        hold = arr[j];
         i = j - 1;
        while (i >= 0 && arr[i] > hold) {
            arr[i + 1] = arr[i--];
        }
        arr[i + 1] = hold;
    }
    return arr;
}

export default sort;