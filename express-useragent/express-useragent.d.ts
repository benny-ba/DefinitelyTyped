// Type definitions for express-useragent 0.2.4
// Project: https://www.npmjs.org/package/express-useragent
// Definitions by: Isman Usoh <https://github.com/isman-usoh/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare namespace Express {
    interface ExpressUserAgent {
        isMobile: boolean;
        isTablet: boolean;
        isiPad: boolean;
        isiPod: boolean;
        isiPhone: boolean;
        isAndroid: boolean;
        isBlackberry: boolean;
        isOpera: boolean;
        isIE: boolean;
        isEdge: boolean;
        isIECompatibilityMode: boolean;
        isSafari: boolean;
        isFirefox: boolean;
        isWebkit: boolean;
        isChrome: boolean;
        isKonqueror: boolean;
        isOmniWeb: boolean;
        isSeaMonkey: boolean;
        isFlock: boolean;
        isAmaya: boolean;
        isEpiphany: boolean;
        isDesktop: boolean;
        isWindows: boolean;
        isWindowsPhone: boolean;
        isLinux: boolean;
        isLinux64: boolean;
        isMac: boolean;
        isChromeOS: boolean;
        isBada: boolean;
        isSamsung: boolean;
        isRaspberry: boolean;
        isBot: boolean;
        isCurl: boolean;
        isAndroidTablet: boolean;
        isWinJs: boolean;
        isKindleFire: boolean;
        isSilk: boolean;
        isCaptive: boolean;
        isSmartTV: boolean;
        silkAccelerated: boolean;
        browser: string;
        version: string;
        os: string;
        platform: string;
        geoIp: any;
        source: string;
    }

    interface Request {
        useragent?: ExpressUserAgent;
    }
}

declare module "express-useragent" {
    import express = require("express");

    export function parse(source: string): Express.ExpressUserAgent;
    export function express(): (req: express.Request, res: express.Response, next?: Function) => void;
}
