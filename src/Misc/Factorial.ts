// Memoized Factorial code

export function factorialR(num : number){
    return num === 0 ? 1 : (num * factorial(num - 1));
}

export function factorial(num : number) {
    let total = 1; 
    for (var i = 1; i <= num; ++i) {
        total = total * i; 
    }
    return total; 
}

const memoize = (fn: (...args: any[]) => any) => {
    const cache : any = {}; // 1
    return (...args : any[]) => { // 2
      const stringifiedArgs = JSON.stringify(args); // 3

      let message = '';
      if(typeof cache[stringifiedArgs] === 'undefined') {
          message = "memoize: calculate for " + stringifiedArgs;
          cache[stringifiedArgs] = fn(...args);
        } else {
         message = "memoize: cached value for " + stringifiedArgs;
        }

        return { result: cache[stringifiedArgs], message };
    };
};

export const memoFactorialR = memoize(factorialR);

export function memoFactorial(num: number) : any {
    var cachedResults : any = null;

    if (!cachedResults) {
        cachedResults = {};
    }

    if (!cachedResults[num]) {
        if (num === 0) {
            cachedResults[num] = 0;
        } else if (num === 1) {
            cachedResults[num] = 1;
        } else {
            cachedResults[num] =
                memoFactorial(num - 1) + memoFactorial(num - 2);
        }
    }
    return cachedResults[num];
}