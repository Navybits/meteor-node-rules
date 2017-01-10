# navybits:meteor-node-rules
___
**navybits:meteor-node-rules** is a simple wrapper on  [node-rules](https://www.npmjs.com/package/node-rules) npm package .  
### Dependencies
  - ecmascript  
  
### Installation:
```sh
meteor add navybits:meteor-node-rules
```
### Use
simple example from the npmjs page :

```javascript
/*
The following instruction has been changed in order to assign the right
rules engine class to the variable RuleEngine.
*/
var RuleEngine = MeteorRules ; //require('node-rules');

/*--- From here every thing must work correctly-----*/

//define the rules 
var rules = [{
    "condition": function(R) {
        R.when(this && (this.transactionTotal < 500));
    },
    "consequence": function(R) {
        this.result = false;
        R.stop();
    }
}];
 
//sample fact to run the rules on	 
var fact = {
    "name":"user4",
    "application":"MOB2",
    "transactionTotal":400,
    "cardType":"Credit Card",
};
 
//initialize the rule engine 
var R = new RuleEngine(rules);
 
//Now pass the fact on to the rule engine for results 
R.execute(fact,function(result){ 
 
    if(result.result) 
        console.log("Payment Accepted"); 
    else 
        console.log("Payment Rejected");
    
});
```

You can review the npm package link for more details :  
[https://www.npmjs.com/package/node-rules](https://www.npmjs.com/package/node-rules)

### Version
1.0.0

### License

MIT
