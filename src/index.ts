interface Access {
    access: string;
}

const checkAccess = (userAccessList: Access[], neededAccess: Access[]): boolean => {
    let hasAccess: boolean = false;
    for ( const userAccess of userAccessList) {
        console.log(`userAccess: ${userAccess.access}`)
        const userAccessSplit: String[] = userAccess.access.split(".");

        for ( const access of neededAccess) {
            console.log(`access: ${access.access}`)
            const accessSplit: String[] = access.access.split(".");
            let accessMatch: boolean = true;

            for ( let i = 0; i < accessSplit.length; i++) {
                if ( accessSplit[i] === "*") {
                    continue;
                }

                if ( accessSplit[i] !== userAccessSplit[i]) {
                    accessMatch = false;
                    break;
                }
            }

            if ( accessMatch) {
                hasAccess = true;
                break;
            }
        }


    }

    return hasAccess;
};

exports.default = checkAccess;