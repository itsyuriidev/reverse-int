module.exports = function reverse (n) {
    let num = String(n);
    let str = '';
    for (let i = num.length; i >= 0; i--){
      if(num[i] >= 0) {
        str += num[i];
      }
    }return str;
  };
