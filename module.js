class X {
    constructor() {
        this.x = 10;
        this.xx = 'asdasd'.includes('d');
        this.xxx = 'xxx';
    }
}

console.log(1)
const p = Promise.reject('a').then(null, console.log.bind(console));

export default X;