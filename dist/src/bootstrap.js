"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
/* Routers Import */
const Courses_router_1 = __importDefault(require("./modules/Courses/Courses.router"));
const bootstarp = (app, express) => {
    app.use(express.json());
    app.use((0, helmet_1.default)());
    app.use(helmet_1.default.crossOriginEmbedderPolicy({
        policy: "credentialless"
    }));
    app.use((0, morgan_1.default)("common"));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use((0, cors_1.default)());
    app.use("/api/courses", Courses_router_1.default);
};
exports.default = bootstarp;
