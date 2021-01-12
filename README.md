![React-JS-June-2020](https://github.com/BoykoPetevBoev/React-JS-June-2020/blob/master/_README/React.jpg)

![React-JS-June-2020](https://github.com/BoykoPetevBoev/React-JS-June-2020/blob/master/_README/ReactJS-Certificate.png)

---

## Themes

* Components
* Routing
* Single Page Applicaion
* Forms
* React Hooks
* Authentication
* Advanced Techniques

# JavaScript code snippets

## Import
### imn→
```javascript 
import 'module';
```                  
### imp→
```javascript 
import moduleName from 'module';
```  
### imd→
```javascript 
import {  } from 'module';
```        

## Require
### rqr→	
```javascript 
require('package');
```   
### req→	
```javascript 
const Name = require('Name');
```    

## Export
### mde→	
```javascript 
module.exports = { };
```                        
### enf→	 
```javascript 
export const functionName = (params) => {};
```  
### edf→	
```javascript 
export default function TEST(params) {};
```     
### ecl→	 
```javascript 
export default class className {};
```           


## Class 
### con→ 	 
```javascript 
constructor(params) {}
```     
### met→	 
```javascript 
methodName(params) {}
```      
### pge→	  
```javascript 
get propertyName() {}
```      
### pse→	 
```javascript 
set propertyName(value) {}
``` 

## Various methods 
### anfn→	 
```javascript  
(params) => {}
```                        
### nfn→	 
```javascript  
const name = (params) => {}
```            
### thenc→	 
```javascript  
.then(result => {})
.catch(err => {});
``` 

## Loops
### fre→	
forEach loop in ES6 syntax 
```javascript 
array.forEach(currentItem => {});
``` 
### fof→	
for ... of loop  
```javascript 
for (const item of object) {}
```     
### fin→	
for ... in loop  
```javascript 
for (const item in object) {}
```    

## Destructing
### dob→	
```javascript 
const {propertyName} = object;
```    
### dar→	
```javascript 
const [propertyName] = array;
```     

## Console 
### clg→    
```javascript
 console.log(object);
 ```   
### cer→  
```javascript
 console.error(object);
 ``` 
### clt→   
```javascript
 console.table(object);
``` 

## Reactjs 
### rcc→   
class component skeleton
```javascript
import React, { Component } from 'react';

class TEST extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
export default TEST;
```
### rrc→  
class component skeleton with react-redux connect
```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}
class TEST extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
export default connect(
    mapStateToProps,
)(TEST);
```
### rccp→	 
class component skeleton with prop types after the class
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TEST extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}
TEST.propTypes = {

};
export default TEST;
```
### rcjc→	 
class component skeleton without import and default export lines
```javascript
class TEST extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
```
<!-- ### rcfc→	 
class component skeleton that contains all the lifecycle methods
```javascript

``` -->
### rwwd→	 
class component without import statements
```javascript
class TEST extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
TEST.propTypes = {

};
export default TEST;
```
### rpc→	 
class pure component skeleton with prop types after the class
```javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TEST extends PureComponent {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
TEST.propTypes = {

};
export default TEST;
```
### rsc→	 
stateless component skeleton
```javascript
import React from 'react';

const TEST = () => {
    return (
        <div>
            
        </div>
    );
};
export default TEST;
```
### rscp→	 
stateless component with prop types skeleton
```javascript
import React from 'react';
import PropTypes from 'prop-types';

const TEST = props => {
    return (
        <div>
            
        </div>
    );
};
TEST.propTypes = {
    
};
export default TEST;
```
### rscm→	 
memoize stateless component skeleton
```javascript
import React, { memo } from 'react';

const TEST = memo(() => {
    return (
        <div>
            
        </div>
    );
});
export default TEST;
```
### rscpm→   
memoize stateless component with prop types skeleton
```javascript
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TEST = memo((props) => {
    return (
        <div>
            
        </div>
    );
});
TEST.propTypes = {
    
};
export default TEST;
```
### rsf→	 
stateless named function skeleton
```javascript
import React from 'react';

function TEST(props) {
    return (
        <div>
            
        </div>
    );
}
export default TEST;
```
### rsfp→	 
stateless named function with prop types skeleton
```javascript
import React from 'react';
import PropTypes from 'prop-types';

TEST.propTypes = {
    
};
function TEST(props) {
    return (
        <div>
            
        </div>
    );
}
export default TEST;
```
### rsi→	 
stateless component with prop types and implicit return
```javascript
import React from 'react';

const TEST = (props) => (
    
);
export default TEST;
```
### fcc→	 
class component with flow types skeleton
```javascript
import * as React from 'react';
type Props = {
  
};
type State = {
  
};
export class TEST extends React.Component<Props, State>{
  render() {
    return (
      <div>
        
      </div>
    );
  };
};
```
### fsf→	 
stateless named function skeleton with flow types skeleton
```javascript
import * as React from 'react';
type Props = {
  
};
export function TEST(props: Props) {
  return (
    <div>
      
    </div>
  );
};
```
### fsc→	 
stateless component with flow types skeleton
```javascript
import * as React from 'react';
type Props = {
    
};
export const TEST = (props: Props) => {
    return (
        <div>
            
        </div>
    );
};
```
### rpt→	 
empty propTypes declaration
```javascript
TEST.propTypes = {};
```
### rdp→	 
empty defaultProps declaration
```javascript
TEST.defaultProps = {};
```
### con→	 
class default constructor with props
```javascript
constructor(params) {}
```
### conc→	 
class default constructor with props and context
```javascript
constructor(props, context) {
    super(props, context);
    
}

```
### est→	 
empty state object
```javascript
this.state = {};
```
### cwm→	 
componentWillMount method
```javascript
componentWillMount() {}
```
### cdm→	 
componentDidMount method
```javascript
componentDidMount() {}
```
### cwr→	 
componentWillReceiveProps method
```javascript
componentWillReceiveProps(nextProps) {}
```
### scu→	 
shouldComponentUpdate method
```javascript
shouldComponentUpdate(nextProps, nextState) {}
```
### cwup→	 
componentWillUpdate method
```javascript
componentWillUpdate(nextProps, nextState) {}
```
### cdup→	 
componentDidUpdate method
```javascript
componentDidUpdate(prevProps, prevState) {}
```
### cwun→	 
componentWillUnmount metho
```javascript
componentWillUnmount() {}
```
### gsbu→	 
getSnapshotBeforeUpdate method
```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {}
```
### gdsfp→   
static getDerivedStateFromProps method
```javascript
static getDerivedStateFromProps(nextProps, prevState) {}
```
### cdc→	 
componentDidCatch method
```javascript
componentDidCatch(error, info) {}

```
### ren→	 
render method
```javascript
render() {
    return (
        <div>
            
        </div>
    );
}
```
### sst→	 
this.setState with object as parameter
```javascript
this.setState();
```
### ssf→	 
this.setState with function as parameter
```javascript
this.setState((state, props) => { 
    return {  }
});

```
### props→   
this.props
```javascript
this.props.
```
### state→   
this.state
```javascript
this.state.
```
### bnd→	 
binds the this of method inside the constructor
```javascript
this. = this..bind(this);
```
### disp→	 
MapDispatchToProps redux function
```javascript
function mapDispatchToProps(dispatch) {
    return {
    }
}
```

## PropTypes

| Trigger | Content |
| ------- | ------- | 
| pta→	    | PropTypes.array| 
| ptar→	    | PropTypes.array.isRequired| 
| ptb→	    | PropTypes.bool| 
| ptbr→	    | PropTypes.bool.isRequired| 
| ptf→	    | PropTypes.func| 
| ptfr→	    | PropTypes.func.isRequired| 
| ptn→	    | PropTypes.number| 
| ptnr→	    | PropTypes.number.isRequired| 
| pto→	    | PropTypes.object| 
| ptor→	    | PropTypes.object.isRequired| 
| pts→	    | PropTypes.string| 
| ptsr→	    | PropTypes.string.isRequired| 
| ptsm→	    | PropTypes.symbol| 
| ptsmr→	| PropTypes.symbol.isRequired| 
| ptan→	    | PropTypes.any| 
| ptanr→	| PropTypes.any.isRequired| 
| ptnd→	    | PropTypes.node| 
| ptndr→	| PropTypes.node.isRequired| 
| ptel→	    | PropTypes.element| 
| ptelr→	| PropTypes.element.isRequired| 
| pti→	    | PropTypes.instanceOf(ClassName)| 
| ptir→	    | PropTypes.instanceOf(ClassName).isRequired| 
| pte→	    | PropTypes.oneOf(['News', 'Photos'])| 
| pter→	    | PropTypes.oneOf(['News', 'Photos']).isRequired| 
| ptet→	    | PropTypes.oneOfType([PropTypes.string, PropTypes.number])| 
| ptetr→	| PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired| 
| ptao→	    | PropTypes.arrayOf(PropTypes.number)| 
| ptaor→	| PropTypes.arrayOf(PropTypes.number).isRequired| 
| ptoo→	    | PropTypes.objectOf(PropTypes.number)| 
| ptoor→	| PropTypes.objectOf(PropTypes.number).isRequired| 
| ptoos→	| PropTypes.objectOf(PropTypes.shape())| 
| ptoosr→	| PropTypes.objectOf(PropTypes.shape()).isRequired| 
| ptsh→	    | PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number})| 
| ptshr→	| PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired| 
