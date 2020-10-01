describe("fizzBuzz", function(){

    beforeEach(function() {
        num = new fizzBuzz;
    }); 

    describe("number test", function(){
        it ("should return error if we don't supply a numbers", function(){
            expect(fizzBuzz("Hitchhikers")).toBe("Error!")
        })
        it("should return FizzBuzz", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz")
        })
        it("should return Fizz", function(){
            expect(fizzBuzz(3)).toBe("Fizz")
        })
        it("should return Buzz", function(){
            expect(fizzBuzz(5)).toBe("Buzz")
        })
        it("should return number", function(){
            expect(fizzBuzz(4)).toBe(4)
        })
    })
})