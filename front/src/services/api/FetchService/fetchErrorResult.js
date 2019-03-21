import FetchResult from './fetchResult'

class FetchErrorResult extends FetchResult {
    constructor (result) {
        super(result);
        this.data = null;
    }
}

export default FetchErrorResult;