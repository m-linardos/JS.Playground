var x = 5;
undefined
5*6
30
x*6
30
Math.sqrt(2);
1.4142135623730951
Math.PI
3.141592653589793
alert(x)
undefined
var nums = [1,2,4,7,19]
undefined
nums.length
5
nums[2]
4

var a = new Array();
undefined
a(0) + "abc"
TypeError: a is not a function
debugger eval code:1:1
a[0] + "abc"
"undefinedabc"
a[12] + "def"
"undefineddef"
a[0] = "abc"
"abc"
a[12] = "def"
"def"
a.length
13
a[5]
undefined

function doubleIt(x) {return x * 2}
undefined
doubleIt(10)
20
doubleIt("abc")
NaN

window.doubleIt

alert("hello")
var mybackup = alert
undefined
alert = 5
5
mybackup
function alert()

alert = mybackup
function alert()

alert("hello")
window.location
Location about:home


090619

test
ReferenceError: test is not defined
debugger eval code:1:1
5 + test
ReferenceError: test is not defined
debugger eval code:1:1
5/0
Infinity
var a= 5/0
undefined
a
Infinity
a+5
Infinity
a+abc
ReferenceError: abc is not defined
debugger eval code:1:1
a + "abc"
"Infinityabc"
a + "beyond"
"Infinitybeyond"
a + "and beyond"
"Infinityand beyond"
a-1
Infinity