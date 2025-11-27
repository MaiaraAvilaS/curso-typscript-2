"use strict";
//const admin = 1
//const read = 2
//const backup = 3
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Andre',
    age: 40,
    role: Role.backup
};
//# sourceMappingURL=index.js.map