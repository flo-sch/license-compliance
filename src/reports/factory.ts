import { Detailed } from "./detailed";
import { Invalid } from "./invalid";
import { Reporter } from "./reporter";
import { Summary } from "./summary";
import { Report } from "../enumerations";
import { Factory as FormatFactory } from "../formatters";
import { configuration } from "../main";

export class Factory {

    public static getInstance(type: Report = configuration.report): Reporter {
        const classes = { Detailed, Invalid, Summary };
        return new classes[type](FormatFactory.getInstance());
    }
}
