# Jest Testing Examples :rocket:

## Purpose :dark_sunglasses:

The purpose of this repository is to have a series of jest examples to reference to later.

### Analogies :open_book:

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
|       |                           |          |                |             |
|       |                           |          |                |             |
|       |                           |          |                |             |

#### Jest

| Done? | Method            |               When to use                | How to use |         File          |
| ----- | ----------------- | :--------------------------------------: | :--------: | :-------------------: |
|       | toMatchSnapshot() | To make sure UI does not randomly change |            | Look at pizza.test.js |
|       |                   |                                          |            |                       |
|       |                   |                                          |            |                       |
|       |                   |                                          |            |                       |

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

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
