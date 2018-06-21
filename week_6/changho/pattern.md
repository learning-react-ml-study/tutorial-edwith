# 자바스크립트 패턴
## Singleton pattern

싱글톤패턴은 특정 클래스의 객체를 한개만 유지하는 패턴이다. 자바스크립트에서는 객체 리터럴을 이용한 객체 생성방법이 싱글톤 패턴과 유사하다. 
```javascript
// ES5
var UserStore = (function() {
    var _data = [];

    function add(item) {
        _data.push(item);
    }
    function get(id) {
        return _data.find((d) => {
            return d.id === id;
        });
    }
    return {
        add: add,
        get: get
    }
})();

// ES6
const _data = [];
const UserStore = {
    add: item => _data.push(item),
    get: id => _data.find(d => d.id === id)
}
Object.freeze(UserStore); // UserStore의 속성을 읽기 전용으로 바꾼다. 더 이상 
// UserStores는 확장 할 수 없고 모든 속성이 읽기 전용이라 수정 할 수 없다
export default UserStore;
```
[참조](https://www.sitepoint.com/javascript-design-patterns-singleton/)

## 팩토리 패턴
팩토리 패턴은 나머지 코드들과 객체 생성을 캡슐화 하고 분리하는 패턴이다. 객체의 생성이 복잡하거나 변경 될 수 있는 상황에서는 이 패턴이 깔끔한 상태를 유지하는데 어느 정도 유용한 완충 역할을 할 수 있다. 

- simple factory
 - 다른 객체를 캡슐화 하여 어플리케이션의 나머지 코드로부터 보호하는 객체의 역할을 하는 객체이다. 
```javascript
var user = UserFactory.createUser();
var admin = USerFactory.createUser('admin');
var customer = UserFactory.createUser('customer');
// 실제 createUSer
UserFactory.createUser = function(type) {
    if(type === 'admin') {
        return new Admin();
    } else if(type === 'customer') {
        return new Customer();
    }
}
```
