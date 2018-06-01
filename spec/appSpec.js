describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click()
      expect(counter.innerHTML).toBe('120');
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.id).toBe('click-me');
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(3)).toBe(6);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
        expect(factorial(-1)).toBe(1);
    })
  })

  describe("Computer", () => {
    computer = new Computer;
    it("is created with a hard drive size of 512", () => {
        expect(computer.hardDriveSpace).toBe(512);
    })

    describe("installProgram", () => {
      pc = new Computer;
      beforeEach(function(done){
        pc.installProgram(100, function() {
          done();
        })
      })
  
      it("can install a program if there is sufficient space", (done) => {
        expect(pc.hardDriveSpace).toBe(412)
        done();
      })


      lapi = new Computer;
      beforeEach(function(done){
        lapi.installProgram(600, function() {
          done();
        })
      })
      it("will not install the program if there is insufficient space", (done) => {
        expect(lapi.hardDriveSpace).toBe(512)
        done();
      })
    })

    describe("format", () => {
      reader = new Computer;
      beforeEach(function(done){
        reader.installProgram(312, function(){
          done();
        })
      
      })
      it("resets the hard drive to 512, even after programs have been installed", (done) => {
        reader.format();
        expect(reader.hardDriveSpace).toBe(512)
        done();
      });
    })

  })

})