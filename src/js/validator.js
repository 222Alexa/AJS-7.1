export default class Validator {
  static validateUsername(username) {
    const template1 = /^[^_\W\d-][\w-]*[^_\W\d-]+$/.test(username); // 'Допустимые символы A-Z,a-z,0-9,-,_'
    const template2 = /\d{4}/.test(username);
    return template1 && !template2;
  }
}
