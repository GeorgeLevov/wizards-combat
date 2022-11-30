import { Client as Appwrite, Databases, Account, Client } from "appwrite";
import { Server } from "./utils/config";

let appwrite = new Client();
appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
const account = new Account(appwrite);
const database = new Databases(appwrite, Server.databaseID);

let api = {
    sdk: null,

    createAnonymous: () => {
        return api.sdk.account.createAnonymousSession();
    },

    getAccount: () => {
        return api.sdk.account.get();
    },

    deleteCurrentSession: () => {
        return api.sdk.account.deleteSession("current");
    },

    // createDocument: (collectionId, data, read, write) => {
    //     return api
    //         .provider()
    //         .database.createDocument(
    //             collectionId,
    //             "unique()",
    //             data,
    //             read,
    //             write
    //         );
    // },

    // listDocuments: (collectionId) => {
    //     return api.provider().database.listDocuments(collectionId);
    // },

    // updateDocument: (collectionId, documentId, data, read, write) => {
    //     return api
    //         .provider()
    //         .database.updateDocument(
    //             collectionId,
    //             documentId,
    //             data,
    //             read,
    //             write
    //         );
    // },

    deleteDocument: (collectionId, documentId) => {
        return api.sdk.database.deleteDocument(collectionId, documentId);
    },
};

api.sdk = { database, account };

export default api;
