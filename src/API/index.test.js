import { signin, signup } from "./index";

describe("API test", () => {
  describe("signin function", () => {
    const validUser = {
      email: "user@mail.com",
      password: "pw"
    };

    it("returns invalid credentials when necessary", async () => {
      const actual = await signin({ email: "invalid", password: "invalid" });
      const expected = { error: "Invalid credentials" };
      expect(actual).toEqual(expected);
    });

    it("return token if credentials are correct", async () => {
      const actual = await signin(validUser);
      expect(actual).toHaveProperty("token");
    });
  });

  describe("signup function", () => {
    describe("returns the correct object for empty fields", () => {
      test("all fields", async () => {
        const actual = await signup();
        const expected = {
          email: "Required",
          password: "Required",
          confirmPassword: "Required"
        };
        expect(actual).toEqual(expected);
      });
      test("missing email and confirmPassword fields", async () => {
        const actual = await signup({
          password: "mail"
        });
        const expected = {
          email: "Required",
          confirmPassword: "Required"
        };
        expect(actual).toEqual(expected);
      });
    });
    it("returns an error if passwords does not match", async () => {
      const actual = await signup({
        email: "mail",
        password: "pw",
        confirmPassword: "pw2"
      });
      const expected = {
        error: "Passwords does not match"
      };
      expect(actual).toEqual(expected);
    });
    it("returns a token if everything is ok", async () => {
      const actual = await signup({
        email: "user@mail.com",
        password: "pw",
        confirmPassword: "pw"
      });
      expect(actual).toHaveProperty("token");
    });
  });
});
