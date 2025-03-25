function fetchUserData(): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "MC",
            });
        }, 1000);
    });
}

async function main() {
    console.log("fetching data .....");
    try {
        const user = await fetchUserData();
        console.log("user data : ", user);
    } catch (error) {
        console.log(error);
    }
}
main();
