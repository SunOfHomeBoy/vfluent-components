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

        public static removeEmpty(elements: any[]): any[] {
                let buffers: any[] = []

                for (let element of elements) {
                        if (utils.empty(element) === false) {
                                buffers.push(element)
                        }
                }

                return buffers
        }
}