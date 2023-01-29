"use strict";
const checkAccess = (userAccessList, neededAccess) => {
    let hasAccess = false;
    for (const userAccess of userAccessList) {
        console.log(`userAccess: ${userAccess.access}`);
        const userAccessSplit = userAccess.access.split(".");
        for (const access of neededAccess) {
            console.log(`access: ${access.access}`);
            const accessSplit = access.access.split(".");
            let accessMatch = true;
            for (let i = 0; i < accessSplit.length; i++) {
                if (accessSplit[i] === "*") {
                    continue;
                }
                if (accessSplit[i] !== userAccessSplit[i]) {
                    accessMatch = false;
                    break;
                }
            }
            if (accessMatch) {
                hasAccess = true;
                break;
            }
        }
    }
    return hasAccess;
};
const accessList = [
    { access: "frankfurt.talebes.abc" },
];
// checkAccess([
//     { access: "frankfurt.talebes.create" },
// ], accessList)
console.log(checkAccess([
    { access: "frankfurt.talebes.create" },
], accessList)); // true
