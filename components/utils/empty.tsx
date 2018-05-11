export function empty(document: any): boolean {
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