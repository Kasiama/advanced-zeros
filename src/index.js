 /*module.exports = function getZerosCount(number, base) {
    let prineDeviders = [];
     for(let i = 2; i<=base; i++){
         while (base%i==0){
             base/=i;
             prineDeviders.push(i);
         }
     }
     prineDeviders.reverse();
     let j =1;
     let res = [];
     for (let i = 0; i < prineDeviders.length; i++)
    { 
        let sum = 0;
        let n = number;
        while (n >= 1) {
            let temp = parseInt(n / prineDeviders[i]);
            n = temp;
            sum = sum + temp;

        }
        if (prineDeviders[i]==prineDeviders[i+1])
    {
        i++;
    }
        res.push(Math.floor(sum / j));

    }
    return Math.min.apply(null, res);
 }*/
 module.exports = function getZerosCount(number, base) {
  


    let primeDev = [];

        for(let k = 2;k<=base;k++) {
            while (base % k == 0) {
                primeDev.push(k);
                base = base / k;
            }
        }
    primeDev.reverse();
   


    let  j=1;
    let res =[];

    for (i = 0; i < primeDev.length; i++)
    { 
        var sum = 0;
        var n = number;
        while (n >= 1) {
            var temp = parseInt(n / primeDev[i]);
            n = temp;
            sum = sum + temp;

        }
        if (primeDev[i]==primeDev[i+1])
    {
        j++;
    }
        res.push(Math.floor(sum / j));

    }

    console.log(res);
       return Math.min.apply(null, res);
}





