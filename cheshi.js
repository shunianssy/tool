class hello {
    getInfo() {
        return {
            id: "fsashdajvudafjgkhjifasdnfahk",
            name: "hello",
            color1: "#ba2be2",
            blocks: [
                {
                    opcode: "return_ces", 
                    blockType: Scratch.BlockType.REPORTER,
                    text: "计算[temp]",
                    arguments: {
                        temp: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "sin(34) + 1 + 2 + 4 * 5"
                        }
                    }
                },
                {
                    opcode: "get_browser_info", 
                    blockType: Scratch.BlockType.REPORTER,
                    text: "输出浏览器信息",
                    arguments: {}
                },
                {
                    opcode: "open_new_window",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "打开新窗口 [url]",
                    arguments: {
                        url: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://space.bilibili.com/3493133419546943?spm_id_from=333.1007.0.0"
                        }
                    }
                }
            ]
        };
    }

    // 计算表达式并支持三角函数等
    return_ces(args) {
        try {
            // 替换表达式中的三角函数为 Math 库函数
            let expression = args.temp.replace(/sin\(/g, "Math.sin(")
                                       .replace(/cos\(/g, "Math.cos(")
                                       .replace(/tan\(/g, "Math.tan(")
                                       .replace(/log\(/g, "Math.log(")
                                       .replace(/sqrt\(/g, "Math.sqrt(")
                                       .replace(/pi/g, "Math.PI")
                                       .replace(/e/g, "Math.E");

            // 使用 eval 计算表达式
            return eval(expression);
        } catch (e) {
            return "错误的表达式";
        }
    }

    // 获取浏览器信息
    get_browser_info() {
        return navigator.userAgent;
    }

    // 打开新窗口
    open_new_window(args) {
        window.open(args.url, '_blank');
    }
}

// 注册扩展
Scratch.extensions.register(new hello());
