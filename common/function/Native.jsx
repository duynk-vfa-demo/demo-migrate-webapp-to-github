// Only place that talks to the native bridge (sample: no real bridge)
class Native {
    static getAccessToken(callback) {
        callback('');
    }
}

export default Native;
