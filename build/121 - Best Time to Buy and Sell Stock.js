"use strict";
function maxProfit(prices) {
    if (prices.length === 1) {
        // If there is only element in the array, we can only buy and never sell so there's no profit
        return 0;
    }
    let l = 0;
    let r = 1;
    let maxProfit = 0;
    while (r <= prices.length - 1) {
        if (prices[l] > prices[r]) {
            l = r;
        }
        else {
            let profit = prices[r] - prices[l];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
        r++;
    }
    return maxProfit;
}
