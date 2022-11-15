export default class Validation {
    static basic8 = /^.{8,}$/;
    static all_basic8 = /^[\da-zA-Z!@#]{8,}$/;
    static nickname = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/;

    static check(value, reg) {
        const regex = new RegExp(reg);
        return regex.test(value);
    }
}