import Validator from "../validator";

test("corrected username", () => {
  const received = Validator.validateUsername("admin");
  expect(received).toBeTruthy();
});

test("Заглавные буквы", () => {
  const received = Validator.validateUsername("ADMIN");
  expect(received).toBeTruthy();
});

test("имя включает кириллицу", () => {
  const received = Validator.validateUsername("яADMIN");
  expect(received).toBeFalsy();
});
test("Меньше 4 цифр подряд ", () => {
  const received = Validator.validateUsername("ad984min");
  expect(received).toBeTruthy();
});

test("имя заканчивается цифрами", () => {
  const received = Validator.validateUsername("admiN__11");
  expect(received).toBeFalsy();
});
test("имя начинается с подчеркивания", () => {
  const received = Validator.validateUsername("_admin");
  expect(received).toBeFalsy();
});
test("имя начинается с цифры", () => {
  const received = Validator.validateUsername("10admin");
  expect(received).toBeFalsy();
});
test("имя заканчивается дефисом", () => {
  const received = Validator.validateUsername("admin-");
  expect(received).toBeFalsy();
});
test("имя начинается с дефиса", () => {
  const received = Validator.validateUsername("-admin");
  expect(received).toBeFalsy();
});
test("имя заканчивается подчеркиванием", () => {
  const received = Validator.validateUsername("admin_");
  expect(received).toBeFalsy();
});

test("Больше трех цифр подряд", () => {
  const received = Validator.validateUsername("ad1984min");
  expect(received).toBeFalsy();
});
