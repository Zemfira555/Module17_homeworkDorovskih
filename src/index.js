
    export function division(a, b) {
      return a / b;
    }
  
    export function factorial(n) {
        let result = 1;
        for (let i = n; i >= 1; --i) {
          
          result = result*i;
        } 
          return result;
      };
      
      export function compare(a,b,c) {
        if (a > b) {
            if (a > c) {
              return(a)
          } else {
              return(c)
          }
        } else if (b > c) {
            return(b)
        } else {
            return(c)
        }
    };
      
      


