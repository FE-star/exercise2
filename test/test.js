var add = require('../lib/add');

describe('大数相加add方法', function () {
    it('字符串"42329"加上字符串"21532"等于"63861"', function () {
        add('42329', '21532')
            .should.equal('63861');
    });

    it('"843529812342341234"加上"236124361425345435"等于"1079654173767686669"', function () {
        add('843529812342341234', '236124361425345435')
            .should.equal('1079654173767686669');
    });

    function add(A, B) {
        //判断A、B值的类型，要求字符串，不满足条件则抛出异常
        if (typeof A !== 'string' || typeof B !== 'string') {
            throw new Error("数据类型错误，大数相加值需为字符串");
        }
        //数字翻转便于计算
        A = A.split('').reverse();
        B = B.split('').reverse();
        //获取较长的位数
        const maxLength = Math.max(A.length, B.length);
        //临时变了存储
        let tempA = 0; //临时存储A的值
        let tempB = 0;//临时存储B的值
        let tempSum = 0;//临时存储tempA+tempB的和
        let extNum = 0;//满10进1
        //计算结果
        const result = []; //位数相加的和
        //遍历每一位数字，并求和，满10进1
        for (let i = 0; i < maxLength; ++i) {
            //缺位补0
            tempA = A[i] || 0;
            tempB = B[i] || 0;
            //tempA+tempB
            tempSum = Number(tempA) + Number(tempB);
            //进一,需要当前位数+1
            if (extNum) {
                tempSum += extNum;
            }
            //存储满10进一
            extNum = tempSum >= 10 ? 1 : 0;
            //保存当前求和,不是最后一为则取余数保存
            if (i === (maxLength - 1) && extNum) {
                result.push(tempSum);
            }
            else {
                result.push(tempSum % 10);
            }
        }
        // 总和数字翻转并返回
        return result.reverse().join('');

    }
})