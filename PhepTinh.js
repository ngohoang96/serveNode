class PhepTinh {
    constructor(tenPhepTinh, soA, soB) {
       this.tenPhepTinh = tenPhepTinh;
       this.soA = soA;
       this.soB = soB;
    }
     getSign() {
        const { tenPhepTinh } = this;
        if (tenPhepTinh === 'Cong') return '+';
        if (tenPhepTinh === 'Tru') return '-';
        if (tenPhepTinh === 'Chia') return '/';
        return '*';
    }
     getResultString() {
        const { soA, soB } = this;
        const chuoiPhepTinh = `${soA} ${this.getSign()} ${soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`;
    }
}
 module.exports = PhepTinh;