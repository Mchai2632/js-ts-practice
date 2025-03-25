/** ES6+ 進階特性（解構與展開） */

function mergeUser(
    defaultUser: { name: string; age: number; isAdmin: boolean },
    customUser: { name?: string; age?: number; isAdmin?: boolean }
) {
    return { ...defaultUser, ...customUser };
}

const defaultUser = {
    name: "Guest",
    age: 18,
    isAdmin: false,
};

const customUser = {
    name: "Alice",
    isAdmin: true,
};

const mergedUser = mergeUser(defaultUser, customUser);
console.log(mergedUser);
