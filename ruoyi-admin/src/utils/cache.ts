
const sessionCache = {
    // @ts-ignore
    set (key, value) {
        if (!sessionStorage) {
            return
        }
        if (key != null && value != null) {
            sessionStorage.setItem(key, value)
        }
    },
    // @ts-ignore
    get (key) {
        if (!sessionStorage) {
            return null
        }
        if (key == null) {
            return null
        }
        return sessionStorage.getItem(key)
    },
    // @ts-ignore
    setJSON (key, jsonValue) {
        if (jsonValue != null) {
            this.set(key, JSON.stringify(jsonValue))
        }
    },
    // @ts-ignore
    getJSON (key) {
        const value = this.get(key)
        if (value != null) {
            return JSON.parse(value)
        }
        return null
    },
    // @ts-ignore
    remove (key) {
        sessionStorage.removeItem(key)
    }
}
const localCache = {
    // @ts-ignore
    set (key, value) {
        if (!localStorage) {
            return
        }
        if (key != null && value != null) {
            localStorage.setItem(key, value)
        }
    },
    // @ts-ignore
    get (key) {
        if (!localStorage) {
            return null
        }
        if (key == null) {
            return null
        }
        return localStorage.getItem(key)
    },
    // @ts-ignore
    setJSON (key, jsonValue) {
        if (jsonValue != null) {
            this.set(key, JSON.stringify(jsonValue))
        }
    },
    // @ts-ignore
    getJSON (key) {
        const value = this.get(key)
        if (value != null) {
            return JSON.parse(value)
        }
        return null
    },
    // @ts-ignore
    remove (key) {
        localStorage.removeItem(key)
    }
}

export default {
    /**
     * 会话级缓存
     */
    session: sessionCache,
    /**
     * 本地缓存
     */
    local: localCache
}
