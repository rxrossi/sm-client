import { signin, signup } from "./index";

describe("API test", () => {
  describe("signin function", () => {
    const validUser = {
      email: "user@mail.com",
      password: "pw"
    };

    it("returns invalid credentials when necessary", () => {
      const actual = signin({ email: "invalid", password: "invalid" });
      const expected = { error: "Invalid credentials" };
      expect(actual).toEqual(expected);
    });

    it("return token if credentials are correct", () => {
      const actual = signin(validUser);
      expect(actual).toHaveProperty("token");
    });
  });

  describe("signup function", () => {
    describe("returns the correct object for empty fields", () => {
      test("all fields", () => {
        const actual = signup();
        const expected = {
          email: "Required",
          password: "Required",
          confirmPassword: "Required"
        };
        expect(actual).toEqual(expected);
      });
      test("missing email and confirmPassword fields", () => {
        const actual = signup({
          password: "mail"
        });
        const expected = {
          email: "Required",
          confirmPassword: "Required"
        };
        expect(actual).toEqual(expected);
      });
    });
    it("returns an error if passwords does not match", () => {
      const actual = signup({
        email: "mail",
        password: "pw",
        confirmPassword: "pw2"
      });
      const expected = {
        error: "Passwords does not match"
      };
      expect(actual).toEqual(expected);
    });
    it("returns a token if everything is ok", () => {
      const actual = signup({
        email: "user@mail.com",
        password: "pw",
        confirmPassword: "pw"
      });
      expect(actual).toHaveProperty("token");
    });
  });
});
