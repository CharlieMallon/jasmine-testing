describe("whatCanIDrink", function(){

    beforeEach(function() {
        age = new whatCanIDrink;
    }); 

    describe("age test", function(){
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function(){
            age.value(0)
            expect(value).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        })
        it("should return Drink Toddy", function(){
        age.value(14)
        expect(value).toBe("Drink Toddy")
        })
        it("should return Drink Coke", function(){
        age.value(18)
        expect(value).toBe("Drink Coke")
        })
        it("should return Drink Beer", function(){
        age.value(21)
        expect(value).toBe("Drink Beer")
        })
        it("should return Drink Whisky", function(){
        age.value(130)
        expect(value).toBe("Drink Whisky")
        })
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function(){
        age.value(140)
        expect(value).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        })
    })
})