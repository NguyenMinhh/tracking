import axios from './axiosConfig';

/**
 * make request to server with method get
 * @param1 {url} connect to web service
 * @param2 {customConfig}
 * @param3 {dispatch}
 * @param4 {customLoading}
 * @param5 {isAutoFinishedReq}
 * @param6 {isAutoCatchError}
 * @param7 {hasCancelRequest}
 * @returns {resolve or reject}
 */
export const getAPI = (url, customConfig = {}, dispatch,
    customLoading = null, isAutoFinishedReq = true,
    isAutoCatchError = true,
    hasCancelRequest = true) => new Promise((resolve, reject) => {

    const config = customConfig;
    axios.get(url, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        });
});

/**
 * make request to server with method post
 * @param1 {url} connect to web service
 * @param2 {body}
 * @param3 {customConfig}
 * @param4 {dispatch}
 * @param5 {customLoading}
 * @param6 {isAutoFinishedReq}
 * @param7 {isAutoCatchError}
 * @param8 {hasCancelRequest}
 * @returns {resolve or reject}
 */
export const postAPI = (url, body, customConfig = {}, dispatch,
    customLoading = null, isAutoFinishedReq = true,
    isAutoCatchError = true,
    hasCancelRequest = true) => new Promise((resolve, reject) => {

    const config = customConfig;
    axios.post(url, body, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject();
        });
});
