function error(message, status = 500, data = []) {
    const e = new Error(message);
    e.status = status;
    e.data = data;
    return e;
}

module.exports = { error };
