const accum = s => s.split('').reduce((acc, cur, index)=> acc + '-' + cur.toUpperCase()+cur.repeat(index).toLowerCase());
