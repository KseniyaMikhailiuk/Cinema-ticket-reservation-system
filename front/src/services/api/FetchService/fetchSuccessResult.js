import * as HttpStatus from 'http-status-codes'
import FetchResult from './fetchResult'

class FethSuccessResult extends FetchResult {
    constructor(result) {

        super(HttpStatus.OK);

        if (result.status === HttpStatus.NO_CONTENT){
            this.data = true;
        }
        else {
            this.data = result;
        }
    }
}

export default FethSuccessResult;