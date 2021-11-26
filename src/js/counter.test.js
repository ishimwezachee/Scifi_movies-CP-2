import counter from './counter.js'


test('Counter return length to array',()=>{
    const myArr =[1,2,3,4]
    expect(counter(myArr)).toBe(4);

})