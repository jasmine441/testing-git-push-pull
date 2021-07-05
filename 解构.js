// 解构：结构化赋值

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6,
    }
};

let { x, y, z } = bar();

console.log(x, y, z);

let defaults = {
    options: {
        remove: true,
        enable: false,
        instance: {},
    },
    log: {
        warn: true,
        error: true,
    },
};

// 已经有一个config对象，有了一部分的值，想要把所有空槽的位置用默认值设定，又不想覆盖已经存在的部分。

let config = {
    options: {
        remove: false,
        instance: null,
    },
};