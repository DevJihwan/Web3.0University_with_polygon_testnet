export default class Storage {
    static encryptMnemonic = 'encrypt_mnemonic';

    static async set(key, value) {
        if (typeof key !== "string") {
            throw 'key는 문자열입니다';
        }

        let obj = {}

        obj[key] = value;
        return new Promise((resolve, reject) => {
            chrome.storage.local.set(obj, () => {
                resolve();
            })
        })
    }

    static async get(key, defaultValue = '') {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get((data) => {
                if (data[key] === undefined) {
                    resolve(defaultValue);
                    return;
                }

                resolve(data[key]);
            })
        })
    }

    static async setEncryptMnemonic(encryptMnemonic) {
        await this.set(this.encryptMnemonic, encryptMnemonic);
    }

    static async getEncryptMnemonic() {
        return await this.get(this.encryptMnemonic, '');
    }

    static async clear(){
        await chrome.storage.local.clear();
    }

}