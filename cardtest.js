const expect = chai.expect

describe("card constructor", function() {
    it("creates the teams array correctly", function() {
        // Arrange & Act
        const board = new Board()
        // Assert
        expect(raceGame).to.be.a("array")
        expect(players).to.have.lengthOf(0)
    })
})