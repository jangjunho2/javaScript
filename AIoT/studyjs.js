// import _ from "lodash";

// import getType from "./getType";

// console.log("hello world!!");
// console.log(_.camelCase("Hello world"));

// console.log(typeof "Hello world");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);

// console.log(getType("Hello world"));
// console.log(getType(123));
// console.log(getType(true));
// console.log(getType(undefined));
// console.log(getType(null));
// console.log(getType({}));
// console.log(getType([]));

// console.log(2 + 3);
// console.log(4 - 9);
// console.log(4 * 5);
// console.log(15 / 5);
// console.log(7 % 2);

// let a = 5;
// a = a + 1;
// console.log("a: ", a);
// a += 1;
// console.log("a: ", a);

// // const a=1;
// // const b=2;
// // const c=3;
// console.log(a === b);
// console.log(a !== b);
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);

// // const a=1 ===1
// const b = "AB" === "AB";
// const c = true;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log("and: ", a && b && c);
// console.log("or: ", a || b || c);
// console.log("not: ", !a);

// const a = 1 === 2;
// console.log(a ? "참" : "거짓");

// const a = 2;

// switch (a) {
//   case 0:
//     console.log("a is 0");
//     break;
//   case 2:
//     console.log("a is 2");
//     break;
//   default:
//     console.log("rest...");
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
/*
function scope() {
  if (true) {
    const a = 123;
    console.log(123);
  }
}

// 두개 이상의 매개변수 사용시 소괄호 묶음
const squareArrow3 = (x, y) => x * y;
console.log("squareArrow3: ", squareArrow3(3, 4));

// 객체 자료형
A = { email: "sh@ut.ac.kr", tel: "123-4567" };
console.log(A.email);
console.log(A["tel"]);

// 객체 자료형으로 화살표 함수의 반환값으로 사용할떄는 소괄호 사용
const squareArrow4 = (x, y) => ({ "3의 4승": x ** y });
console.log("squareArrow4: ", squareArrow4(3, 4));

// IIFE
const a = 7;
function double() {
  console.log(a * 2);
}
double();

(function () {
  console.log(a * 2);
})();
*/

const mike = {
  name: "mike",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

mike.normal();
mike.arrow();
