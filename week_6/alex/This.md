# This

This는 해당 scope내에 this를 포함하고 있는 객체를 지칭하며 read-only 값에 접근할 때 쓰인다.

​	var test = 

​		{

​			name : "test name",

​			speak() { return 'my name is $(this.name)';},

​		}

​	

​	test.speak();



​	var test_speak = test.speak();



​	var test 2 =

​		{

​			name: "test name2",

​			speak_hi(){ return 'Hi $(this.name)';},

​			speak_by: function()

​				{

​					speak_bye(){ return 'Bye $(this.name)';},

​				}			

​		}



var test 2 =

​		{

​			name: "test name2";

​			speak_hi(){ return 'Hi $(this.name)';};

​			var self = this;

​			speak_by: function()

​				{

​					let name2 = self.name;

​					speak_bye(){ return 'Bye $(this.name2)';},

​				}			

​		}