import sum from "./sum";

// this is fo JS

test("testing for sum function",()=>{
    let a = 10;
    let b = 20;
    let output = a + b
    expect(sum(a,b)).toBe(output);
})

test('testing again for new parameters',()=>{
    let a = 100;
    let b = 2000;
    let output = a + b
    expect(sum(a,b)).toBe(output);
})