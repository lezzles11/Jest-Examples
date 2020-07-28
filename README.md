# Jest Testing Examples :rocket:

![Testing](https://www.dropbox.com/s/lxia0rv3s1z678n/Screen%20Shot%202020-07-28%20at%2010.22.52.png?raw=1)

## Purpose :dark_sunglasses:

The purpose of this repository is to have a series of jest examples to reference to later.
![Why Test?](https://www.dropbox.com/s/ejcoyyalt0iokss/Screen%20Shot%202020-07-28%20at%2010.24.20.png?raw=1)

### Analogies :open_book:

![Kinds of Tests](https://www.dropbox.com/s/1a882xd3esybee0/Screen%20Shot%202020-07-28%20at%2010.24.29.png?raw=1)

| Done? | Component         | When to use | Estimated Time | Actual Time |
| ----- | ----------------- | :---------: | :------------: | :---------: |
|       | Unit Tests        |      H      |     1 hour     |             |
|       | Integration Tests |             |                |             |
|       | End to End Test   |             |                |             |
|       |                   |             |                |             |

      You are essentially a grammer editor for a book - you want to make sure that the book follows certain rules, so you write scripts that check for those rules.

##### Common Errors

- [ ] Syntax errors (you wrote something wrong)
      E.g., Code language - not closing bracket / quotes

```
console.log("hello)
```

- [ ] Runtime errors (the code fails)
      e.g., If the method does not exist, and you try to call a method

```
// if the method printMe does not exist...
window.printMe()
```

- [ ] Semantic errors (logical errors )
      e.g., the logic does not makes sense / not accurate

```
if (player === "green") {
    console.log("red")
}
```

##### Good practices

- [ ] Print out a cheatsheet of how to debug!
- [ ] console.log EVERY STEP (what did you expect it to output?)
- [ ] Use typeof to check type of variable
- [ ] debugger;

##### What should I test?

| Done? | Component                 | Priority | Estimated Time | Actual Time |
| ----- | ------------------------- | :------: | :------------: | :---------: |
|       | Data (look at pizza.json) |    H     |     1 hour     |             |
|       | Server                    |          |                |             |
|       | HTTP Requests             |          |                |             |
|       |                           |          |                |             |

#### Jest

Key things to know

- [ ] Jest will test files that have the .test.js or .spec.js extension
- [ ] Jest will also test all files under the \_ _ tests _ \_ directory

| Done? | Method            |               When to use                |                            How to use                            |         File          |
| ----- | ----------------- | :--------------------------------------: | :--------------------------------------------------------------: | :-------------------: |
|       | toMatchSnapshot() | To make sure UI does not randomly change | It takes the UI component, and thenc ompares it to the reference | Look at pizza.test.js |
|       |                   |    Callbacks, Async, Await, Promises     |          [Docs](https://jestjs.io/docs/en/asynchronous)          |                       |
|       |                   |                                          |                                                                  |                       |

- [ ] The describe keyword helps to provide a better structure to test cases

```
describe("My first Jest Test specifications, sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 5 + 5 to equal 10", () => {
    expect(sum(5, 5)).toBe(10);
  });
});

```

![Image](https://www.dropbox.com/s/qssnbo02fau4wwc/Screen%20Shot%202020-07-27%20at%2014.01.49.png?raw=1)

- [ ] To only execute one test, do test.only("") instead of test("")
- [ ]

##### Additional LIbraries

| Done? | When to use     |                                Library                                 | How to use |                                            Example                                             |
| ----- | --------------- | :--------------------------------------------------------------------: | :--------: | :--------------------------------------------------------------------------------------------: |
|       | Fetching Data   |               [Moxios](https://github.com/axios/moxios)                |            |   [Example](https://codewithhugo.com/testing-an-express-app-with-supertest-moxios-and-jest/)   |
|       | Testing JQuery  | [jQuery](https://github.com/facebook/jest/tree/master/examples/jquery) |            |                                                                                                |
|       | Testing Classes |      [Testing Classes](https://jestjs.io/docs/en/es6-class-mocks)      |            |                                                                                                |
|       | Express         |       [Jest-Express](https://github.com/jameswlane/jest-express)       |            | [Example](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/) |
|       | HTTP Requests   |         [Supertest](https://github.com/visionmedia/supertest)          |            |   [Example](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)    |
|       |                 |                                                                        |            |                                                                                                |

### User Stories :telescope:

1. Users will be able to look through the various examples and understand how to test well.

## Sprint :athletic_shoe:

| Done? | Component                 | Priority | Estimated Time | Actual Time |
| ----- | ------------------------- | :------: | :------------: | :---------: |
|       | Jest Explanation          |    H     |    30 mins     |             |
|       | What should I test?       |    M     |    30 mins     |             |
|       | Run through five examples |    M     |     1 hour     |             |

### Daily Stand Up :hourglass:

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)
[Testing Axios](https://github.com/axios/moxios)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
