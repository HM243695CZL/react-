import request from "../utils/request"
let index = {
    namespace: "index",
    state: {
        num: 0
    },
    effects: {
        //异步action
        *changeNum({payload}, {select, put, call}){
            //发送请求
            let res = yield call(request("test.php"));
            console.log(res);
            yield put({
                type: "addNum",
                payload
            })
        }
    },
    reducers: {
        addNum(state, {payload}){
            return {
                num: state.num + payload.num
            }
        }
    }
};
export default index;