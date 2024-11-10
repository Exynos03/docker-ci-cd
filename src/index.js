"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prima = new client_1.PrismaClient;
function insertUser(userName, password, firsName, lasrName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prima.user.create({
            data: {
                email: userName,
                password,
                firsName,
                lasrName
            }
        });
        console.log(res);
    });
}
function updateUser(userName_1, _a) {
    return __awaiter(this, arguments, void 0, function* (userName, { firsName, lasrName }) {
        const res = yield prima.user.update({
            where: { email: userName },
            data: { firsName, lasrName }
        });
        console.log(res);
    });
}
function deleteUser(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prima.user.delete({
            where: { email: userName }
        });
        console.log(res);
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prima.user.findMany();
        console.log(res);
    });
}
// deleteUser('sumitghosh345@gmail.com')
// insertUser('sumitghosh345@gmail.com', 'sumit123', 'sumit', 'ghosh')
// updateUser('sumitghosh345@gmail.com', {firsName: 'Basudeb', lasrName: 'Ghosh'})
getUsers();
