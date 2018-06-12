export default class utils {
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

        public static guid(): string {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                        let r = Math.random() * 16 | 0
                        let v = c == 'x' ? r : (r & 0x3 | 0x8)
                        return v.toString(16)
                })
        }

        public static removeEmpty(documents: any[]): any[] {
                let buf: any[] = []

                for (let element of documents) {
                        if (utils.empty(element) === false) {
                                buf.push(element)
                        }
                }

                return buf
        }
}