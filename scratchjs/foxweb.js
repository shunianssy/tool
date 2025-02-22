class hello {
    getInfo() {
        return {
            id: "thefoxwbeinteractive114514",
            name: "小狐狸的网站交互",
            color1: "#ba2be2",
            blocks: [
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
                },
                {
                    opcode: "md5_encryption", 
                    blockType: Scratch.BlockType.REPORTER,
                    text: "MD5 加密 [input]",
                    arguments: {
                        input: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello, world!"
                        }
                    }
                },
                {
                    opcode: "get_html_source", 
                    blockType: Scratch.BlockType.REPORTER,
                    text: "获取网页源码 [url]",
                    arguments: {
                        url: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://shunian.scerpark.cn/"
                        }
                    }
                },
                {
                    opcode: "open_html_page",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "打开新页面运行 HTML [html]",
                    arguments: {
                        html: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "<html><body><h1>Hello World</h1></body></html>"
                        }
                    }
                },
                {
                    opcode: "redirect_to_site",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "本页定向跳转网站 [url]",
                    arguments: {
                        url: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://space.bilibili.com/3493133419546943?spm_id_from=333.1007.0.0"
                        }
                    }
                },
                {
                    opcode: "run_js",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "在这里运行 JS [jsCode]",
                    arguments: {
                        jsCode: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "alert('Hello World!')"
                        }
                    }
                },
                {
                    opcode: "js_alert",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "JS 弹出提示 [message]",
                    arguments: {
                        message: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello, this is a JS alert!"
                        }
                    }
                },
                {
                    opcode: "get_website_content",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "获取网址 [url] 的链接内容",
                    arguments: {
                        url: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://shunian.scerpark.cn/"
                        }
                    }
                },
                {
                    opcode: "get_current_url", 
                    blockType: Scratch.BlockType.REPORTER,
                    text: "获取当前页面网址",
                    arguments: {}
                }
            ]
        };
    }

    // 获取浏览器信息
    get_browser_info() {
        return navigator.userAgent;
    }

    // 打开新窗口
    open_new_window(args) {
        window.open(args.url, '_blank');
    }

    // 获取网页 HTML 源码
    get_html_source(args) {
        return fetch(args.url)
            .then(response => response.text())
            .catch(error => "无法获取网页源码");
    }
    
    // MD5 加密函数
    md5_encryption(args) {
        return this.md5(args.input);
    }

    // 原生 JavaScript 实现的 MD5 加密函数
    md5(input) {
        // Helper functions
        function F(x, y, z) { return (x & y) | (~x & z); }
        function G(x, y, z) { return (x & z) | (y & ~z); }
        function H(x, y, z) { return x ^ y ^ z; }
        function I(x, y, z) { return y ^ (x | ~z); }

        function leftRotate(x, c) {
            return (x << c) | (x >>> (32 - c));
        }

        function toHexStr(input) {
            let hex = '';
            for (let i = 0; i < input.length; i++) {
                hex += ('0' + input[i].toString(16)).slice(-2);
            }
            return hex;
        }

        function utf8Encode(str) {
            let utf8 = [];
            for (let i = 0; i < str.length; i++) {
                let code = str.charCodeAt(i);
                if (code <= 0x7f) {
                    utf8.push(code);
                } else if (code <= 0x7ff) {
                    utf8.push(0xc0 | (code >> 6));
                    utf8.push(0x80 | (code & 0x3f));
                } else if (code <= 0xffff) {
                    utf8.push(0xe0 | (code >> 12));
                    utf8.push(0x80 | ((code >> 6) & 0x3f));
                    utf8.push(0x80 | (code & 0x3f));
                } else if (code <= 0x10ffff) {
                    utf8.push(0xf0 | (code >> 18));
                    utf8.push(0x80 | ((code >> 12) & 0x3f));
                    utf8.push(0x80 | ((code >> 6) & 0x3f));
                    utf8.push(0x80 | (code & 0x3f));
                }
            }
            return utf8;
        }

        // Padding and processing
        let inputArray = utf8Encode(input);
        inputArray.push(0x80);  // Append a single '1' bit, the byte 0x80
        while ((inputArray.length % 64) !== 56) {
            inputArray.push(0x00);  // Pad with zero bytes
        }

        // Append the length of the original message (in bits) as a 64-bit integer
        let bitLength = input.length * 8;
        for (let i = 0; i < 8; i++) {
            inputArray.push((bitLength >>> (i * 8)) & 0xFF);
        }

        // Initialize MD5 buffer
        let A = 0x67452301;
        let B = 0xEFCDAB89;
        let C = 0x98BADCFE;
        let D = 0x10325476;

        // Process the message in 512-bit blocks
        for (let i = 0; i < inputArray.length; i += 64) {
            let block = inputArray.slice(i, i + 64);
            let X = [];
            for (let j = 0; j < 16; j++) {
                X[j] = (block[j * 4]) | (block[j * 4 + 1] << 8) | (block[j * 4 + 2] << 16) | (block[j * 4 + 3] << 24);
            }

            let a = A, b = B, c = C, d = D;

            // Main loop (64 rounds)
            for (let j = 0; j < 64; j++) {
                let div16 = Math.floor(j / 16);
                let f, g;

                if (div16 === 0) {
                    f = F(b, c, d);
                    g = j;
                } else if (div16 === 1) {
                    f = G(b, c, d);
                    g = (5 * j + 1) % 16;
                } else if (div16 === 2) {
                    f = H(b, c, d);
                    g = (3 * j + 5) % 16;
                } else {
                    f = I(b, c, d);
                    g = (7 * j) % 16;
                }

                let temp = d;
                d = c;
                c = b;
                b = b + leftRotate(a + f + X[g], [7, 12, 17, 22][div16]);
                a = temp;
            }

            A = (A + a) & 0xFFFFFFFF;
            B = (B + b) & 0xFFFFFFFF;
            C = (C + c) & 0xFFFFFFFF;
            D = (D + d) & 0xFFFFFFFF;
        }

        // Final MD5 hash value
        let result = [A, B, C, D];
        return toHexStr(result);
    }
       // 获取网页 HTML 源码
    get_html_source(args) {
        return fetch(args.url)
            .then(response => response.text())
            .catch(error => "无法获取网页源码");
    }

    // 打开新页面并运行 HTML
    open_html_page(args) {
        const newWindow = window.open();
        newWindow.document.write(args.html);
        newWindow.document.close();
    }

    // 本页定向跳转
    redirect_to_site(args) {
        window.location.href = args.url;
    }

    // 运行 JS 代码
    run_js(args) {
        try {
            eval(args.jsCode);
        } catch (error) {
            return "JS 执行失败: " + error.message;
        }
    }
    // 弹出 JS 提示框
    js_alert(args) {
        alert(args.message);
    }
    // 获取当前页面的网址
    get_current_url() {
        return window.location.href;
    }
       // 获取网址的内容（获取网页中的所有链接）
    get_website_content(args) {
        return fetch(args.url)
            .then(response => response.text())
            .then(html => {
                // 提取网页中的所有链接
                const links = html.match(/href="([^"]*)"/g) || [];
                return links.map(link => link.replace(/href="([^"]*)"/, "\$1"));
            })
            .catch(error => "无法获取网页内容");
    }

}

// 注册扩展
Scratch.extensions.register(new hello());
    
