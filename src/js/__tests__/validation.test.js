import Validator from "../validator";

test("corrected username", () => {
  const username = new Validator("admin");
  const received = username.validateUsername();
  expect(received).toBeTruthy();
});

test("Заглавные буквы", () => {
  const username = new Validator("ADMIN");
  const received = username.validateUsername();
  expect(received).toBeTruthy();
});
test("Меньше 4 цифр подряд ", () => {
  const username = new Validator("ad984min");
  const received = username.validateUsername();
  expect(received).toBeTruthy();
});

test("имя заканчивается цифрами", () => {
  const username = new Validator("admiN__11");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
test("имя начинается с подчеркивания", () => {
  const username = new Validator("_admin");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
test("имя начинается с цифры", () => {
  const username = new Validator("10admin");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
test("имя заканчивается дефисом", () => {
  const username = new Validator("admin-");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
test("имя начинается с дефиса", () => {
  const username = new Validator("-admin");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
test("имя заканчивается подчеркиванием", () => {
  const username = new Validator("admin_");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});

test("Больше трех цифр подряд", () => {
  const username = new Validator("ad1984min");
  const received = username.validateUsername();
  expect(received).toBeFalsy();
});
