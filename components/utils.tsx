export default class utils {
        public static readonly hexDigits: string = '0123456789abcdef'

        public static str(document: any): string {
                return String(document || '')
        }

        public static dict(document: any): any {
                return Object(document || {})
        }

        public static empty(document: any): boolean {
                if (document === null) {
                        return true
                }

                switch (typeof (document)) {
                        case 'undefined':
                                return true

                        case 'boolean':
                                return document === false

                        case 'number':
                                return document === 0

                        case 'string':
                                return document.length === 0

                        case 'function':
                                return true
                }

                if (document instanceof Array) {
                        return document.length === 0
                }

                return Object.keys(document).length === 0
        }

        public static nonempty(document: any): boolean {
                return utils.empty(document) === false
        }

        public static isFunc(document: any): boolean {
                return typeof (document) === 'function'
        }

        public static uuid(prefix?: string): string {
                let buf = [prefix]

                for (let i = 0; i < 36; i++) {
                        buf.push(utils.hexDigits.substr(Math.floor(Math.random() * 0x10), 1))
                }

                buf[20] = utils.hexDigits.substr((parseInt(buf[20], 16) & 0x3) | 0x8, 1)
                buf[9] = buf[14] = buf[19] = buf[24] = '-'

                return buf.join('')
        }

        public static vwidth(str: string, size: number = 0): number {
                for (let char of str.split('')) {
                        size += char < 'A' || ('Z' < char && char.charCodeAt(0) < 128)
                                ? 0.6
                                : 1
                }

                return size
        }
}