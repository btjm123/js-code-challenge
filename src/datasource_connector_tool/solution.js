// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

/* MODEL VIEW CONTROLLER FRAMEWORK */

// Price Model
class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy;
        this.sell = sell;
        this.id = id;
        this.pair = pair;
        this.timestamp = timestamp;
    }
    mid() {
        return (this.buy + this.sell)/2;
    }
    quote() {
        var ans="";
        for (var i=3;i<this.pair.length;i++) ans += this.pair[i];
        return ans;
    }
} 

// DataSource Controller
class DataSource {
  getPrices() {
    return fetch('https://static.ngnrs.io/test/prices').then(response => {
            return response.json()
      }).then(data => {
            console.log(data['data']['prices']);
            var priceList = [];
            let dataArray = data['data']['prices'];
            
            for (var i=0;i<dataArray.length;i++) {
                let newPrice = new Price(dataArray[i].buy, dataArray[i].sell, dataArray[i].id, dataArray[i].pair, dataArray[i].timestamp);
                priceList.push(newPrice);
            }
            return priceList;
      }, err => {
          return err;
      })
  }
}

// Abstraction 
let ds = new DataSource();
ds.getPrices().then(prices => {
    prices.forEach(price => {
        console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
    });
}).catch(error => {
    console.err(error)
})
