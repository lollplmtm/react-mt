
import qs from 'querystring'

const query = {
    parse (str) {
        str = str.replace('?', '')
        return qs.parse(str)
    },
    stringify (obj) {
        return '?' + qs.stringify(obj)
    }
}

export default query