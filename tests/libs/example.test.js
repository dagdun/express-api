const { example, convertArray } = require('../../libs/example')

describe('example test function', () => {
  it('should be int', () => {
    expect(example(4)).toEqual(40)
  })

  // it('convert array', () => {
  //   const data1 = [
  //     ['01/01/2020', 5],
  //     ['02/01/2020', 7],
  //     ['03/01/2020', 3],
  //   ]
  //   const data2 = [
  //     ['01/01/2020', 7],
  //     ['03/01/2020', 2],
  //   ]
  //   const expect = [
  //     ['01/01/2020', 5, 7],
  //     ['02/01/2020', 7, null],
  //     ['03/01/2020', 3, 2],
  //   ]
  //   const result = convertArray(data1, data2)
  //   expect(result).toEqual(expect)
  // })
})
