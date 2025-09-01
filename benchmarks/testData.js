
const testData = {
    shallow: {
        small: {
            a: 1,
            c: 2,
            b: 3,
            d: 4
        },
        medium: Object.fromEntries(
            Array.from({ length: 100 }, (_, i) => [`key${(Math.random() * 1000).toFixed(0)}`, i])
        ),
        large: Object.fromEntries(
            Array.from({ length: 1000 }, (_, i) => [`key${(Math.random() * 10000).toFixed(0)}`, i])
        )
    },

    nested: {
        small: {
            d: { b: 1, a: 2 },
            a: { z: 3, y: 4 },
            c: { x: 5, w: 6 }
        },
        medium: {
            level1: {
                level2: {
                    level3: {
                        d: { b: 1, a: 2 },
                        a: { z: 3, y: 4 },
                        c: { x: 5, w: 6 }
                    },
                    data: Array.from({ length: 50 }, (_, i) => ({
                        id: i,
                        nested: { value: i * 2 }
                    }))
                }
            }
        },
        large: (() => {
            const createNestedObject = (depth, breadth) => {
                if (depth === 0) return Math.random();
                const obj = {};
                for (let i = 0; i < breadth; i++) {
                    obj[`key${i}`] = createNestedObject(depth - 1, breadth);
                }
                return obj;
            };
            return createNestedObject(5, 5);
        })()
    },

    mixed: {
        data: {
            users: Array.from({ length: 100 }, (_, i) => ({
                id: i,
                name: `User ${i}`,
                preferences: {
                    theme: Math.random() > 0.5 ? 'dark' : 'light',
                    notifications: {
                        email: Math.random() > 0.5,
                        push: Math.random() > 0.5,
                        settings: {
                            frequency: Math.random() > 0.5 ? 'daily' : 'weekly',
                            categories: Array.from(
                                { length: Math.floor(Math.random() * 5) + 1 },
                                (_, j) => `category${j}`
                            )
                        }
                    }
                }
            }))
        }
    }
};

module.exports = testData;