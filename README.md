

![React-JS-June-2020]()

## За курса

**Обучението дава знания и практически умения** за разработването на **Single Page Applications (SPA)**, ползвайки технологията **ReactJS** - една от **най-популярните** и **бързи библиотеки** за изобразяване на **клиентски интерфейс, разработвана** и **поддържана** от **Facebook** и **Instagram**. Ще обърнем специално внимание на **синтаксиса JSX**, подготвяне на приложението за публикуване с **WebPack**, работа със **заявки** и **Promises**.

## Умения

- Работа с шаблони и рутиране
- Основни познания по React и JSX
- Работа с отдалечени REST услуги
- Какво е Single Page Applicaion
- Клиентски приложения с React
- Компонентно-базирани приложения

## Теми

* Components
* Routing
* Single Page Applicaion
* Forms
* React Hooks
* Authentication
* Advanced Techniques
 

<!-- ## Сертификат

![Certificate]() -->

## JavaScript code snippets

### Import and export

| Code | Trigger | Content |
| ---- | ------- | ------- |
| `import moduleName from 'module';` | imp→	| imports entire module import fs from 'fs' |
| `import 'module';` | imn→	| imports entire module without module name import 'animate.css' |
| `import {  } from 'module';` | imd→	| imports only a portion of the module using destructing import {rename} from 'fs' |
| `import * as alias from 'module';` | ime→	| imports everything as alias from the module import * as localAlias from 'fs' |
| `import { originalName as alias } from 'module';` | ima→	| imports only a portion of the module as alias import { rename as localRename } from 'fs' |
| `require('package');` | rqr→	| require package require('') |
| `const packageName = require('packageName');` | req→	| require package to const const packageName = require('packageName') |
| `module.exports = {
    
};
` | mde→	| default module.exports module.exports = {} |
| `export const exportVariable = localVariable;` | env→	| exports name variable export const nameVariable = localVariable |
| `export const functionName = (params) => {
    
};
` | enf→	| exports name function export const log = (parameter) => { console.log(parameter);} |
| `export default function TEST(params) {
    
};
` | edf→	| exports default function export default function fileName (parameter){ console.log(parameter);} |
| `export default class className {
    
};` | ecl→	| exports default class export default class Calculator { } |
| `export default class className extends baseclassName {
    
};
` | ece→	| exports default class by extending a base one export default class Calculator extends BaseClass { } |
 
### Class helpers

| Trigger |	Content |
| ------- | ------- |
| con→ 	| adds default constructor in the class constructor() {} |
| met→	| creates a method inside a class add() {} |
| pge→	| creates a getter property get propertyName() {return value;} |
| pse→	| creates a setter property set propertyName(value) {} |

### Various methods 

| Trigger |	Content | 
| ------- | ------- |
| fre→	| forEach loop in ES6 syntax array.forEach(currentItem => {}) |
| fof→	| for ... of loop for(const item of object) {} |
| fin→	| for ... in loop for(const item in object) {} |
| anfn→	| creates an anonymous function (params) => {} |
| nfn→	| creates a named function const add = (params) => {} |
| dob→	| destructing object syntax const {rename} = fs |
| dar→	| destructing array syntax const [first, second] = [1,2] |
| sti→	| set interval helper method setInterval(() => {}); |
| sto→	| set timeout helper method setTimeout(() => {}); |
| prom→	| creates a new Promise return new Promise((resolve, reject) => {}); |
| thenc→	| adds then and catch declaration to a promise .then((res) => {}).catch((err) => {}); |

### Console methods

| Trigger |	Content |
| ------- | ------- |
| cas→	| console alert method console.assert(expression, object) |
| ccl→	| console clear console.clear() |
| cco→	| console count console.count(label) |
| cdb→	| console debug console.debug(object) |
| cdi→	| console dir console.dir |
| cer→	| console error console.error(object) |
| cgr→	| console group console.group(label) |
| cge→	| console groupEnd console.groupEnd() |
| clg→	| console log console.log(object) |
| clo→	| console log object with name console.log('object :>> ', object); |
| ctr→	| console trace console.trace(object) |
| cwa→	| console warn console.warn |
| cin→	| console info console.info |
| clt→	| console table console.table |
| cti→	| console time console.time |
| cte→	| console timeEnd console.timeEnd |

### Reactjs code snippets

| Trigger | Content |
| ------- | ------- |
| rcc→	| class component skeleton|
| rrc→	| class component skeleton with react-redux connect|
| rrdc→	| class component skeleton with react-redux connect and dispatch|
| rccp→	| class component skeleton with prop types after the class|
| rcjc→	| class component skeleton without import and default export lines|
| rcfc→	| class component skeleton that contains all the lifecycle methods|
| rwwd→	| class component without import statements|
| rpc→	| class pure component skeleton with prop types after the class|
| rsc→	| stateless component skeleton|
| rscp→	| stateless component with prop types skeleton|
| rscm→	| memoize stateless component skeleton|
| rscpm→| memoize stateless component with prop types skeleton|
| rsf→	| stateless named function skeleton|
| rsfp→	| stateless named function with prop types skeleton|
| rsi→	| stateless component with prop types and implicit return|
| fcc→	| class component with flow types skeleton|
| fsf→	| stateless named function skeleton with flow types skeleton|
| fsc→	| stateless component with flow types skeleton|
| rpt→	| empty propTypes declaration|
| rdp→	| empty defaultProps declaration|
| con→	| class default constructor with props|
| conc→	| class default constructor with props and context|
| est→	| empty state object|
| cwm→	| componentWillMount method|
| cdm→	| componentDidMount method|
| cwr→	| componentWillReceiveProps method|
| scu→	| shouldComponentUpdate method|
| cwup→	| componentWillUpdate method|
| cdup→	| componentDidUpdate method|
| cwun→	| componentWillUnmount method
| gsbu→	| getSnapshotBeforeUpdate method|
| gdsfp→ | static getDerivedStateFromProps method|
| cdc→	| componentDidCatch method|
| ren→	| render method|
| sst→	| this.setState with object as parameter|
| ssf→	| this.setState with function as parameter|
| props| →	this.props|
| state| →	this.state|
| bnd→	| binds the this of method inside the constructor|
| disp→	| MapDispatchToProps redux function|

The following table lists all the snippets that can be used for prop types. Every snippet regarding prop types begins with pt so it's easy to group it all together and explore all the available options. On top of that each prop type snippets has one equivalent when we need to declare that this property is also required.

For example pta creates the PropTypes.array and ptar creates the PropTypes.array.isRequired

| Trigger | Content |
| ------- | ------- | 
| pta→	| PropTypes.array| 
| ptar→	| PropTypes.array.isRequired| 
| ptb→	| PropTypes.bool| 
| ptbr→	| PropTypes.bool.isRequired| 
| ptf→	| PropTypes.func| 
| ptfr→	| PropTypes.func.isRequired| 
| ptn→	| PropTypes.number| 
| ptnr→	| PropTypes.number.isRequired| 
| pto→	| PropTypes.object| 
| ptor→	| PropTypes.object.isRequired| 
| pts→	| PropTypes.string| 
| ptsr→	| PropTypes.string.isRequired| 
| ptsm→	| PropTypes.symbol| 
| ptsmr→	| PropTypes.symbol.isRequired| 
| ptan→	| PropTypes.any| 
| ptanr→	| PropTypes.any.isRequired| 
| ptnd→	| PropTypes.node| 
| ptndr→	| PropTypes.node.isRequired| 
| ptel→	| PropTypes.element| 
| ptelr→	| PropTypes.element.isRequired| 
| pti→	| PropTypes.instanceOf(ClassName)| 
| ptir→	| PropTypes.instanceOf(ClassName).isRequired| 
| pte→	| PropTypes.oneOf(['News', 'Photos'])| 
| pter→	| PropTypes.oneOf(['News', 'Photos']).isRequired| 
| ptet→	| PropTypes.oneOfType([PropTypes.string, PropTypes.number])| 
| ptetr→	| PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired| 
| ptao→	| PropTypes.arrayOf(PropTypes.number)| 
| ptaor→	| PropTypes.arrayOf(PropTypes.number).isRequired| 
| ptoo→	| PropTypes.objectOf(PropTypes.number)| 
| ptoor→	| PropTypes.objectOf(PropTypes.number).isRequired| 
| ptoos→	| PropTypes.objectOf(PropTypes.shape())| 
| ptoosr→	| PropTypes.objectOf(PropTypes.shape()).isRequired| 
| ptsh→	| PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number})| 
| ptshr→	| PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired| 