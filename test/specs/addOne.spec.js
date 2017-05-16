import addOne from '@/addOne'

describe('Library', function () {
  /**
   * @test {addOne}
   */
  describe('#addOne()', function () {
    it('should add one', function (done) {
      const two = addOne(1)
      assert.equal(two, 2)
      done()
    })
  })
})

