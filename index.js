"use strict";
// Logger for quick deploy production modify by Buminta
window.console = (function (originConsole) {

    if (!window.console || !originConsole) {
        originConsole = {};
    }

    var isDebug = false, isSaveLog = false,
        logArray = {
            logs: [],
            errors: [],
            warns: [],
            infos: []
        };

    return {
        log: function () {
            this.addLog(arguments, "logs");
            isDebug && originConsole.log && originConsole.log.apply(originConsole, arguments);
        },
        warn: function () {
            this.addLog(arguments, "warns");
            isDebug && originConsole.warn && originConsole.warn.apply(originConsole, arguments);
        },
        error: function () {
            this.addLog(arguments, "errors");
            isDebug && originConsole.error && originConsole.error.apply(originConsole, arguments);
        },
        info: function () {
            this.addLog(arguments, "infos");
            isDebug && originConsole.info && originConsole.info.apply(originConsole, arguments);
        },
        group: function () {
            isDebug && originConsole.group && originConsole.group.apply(originConsole, arguments);
        },
        groupEnd: function () {
            isDebug && originConsole.groupEnd && originConsole.groupEnd.apply(originConsole, arguments);
        },
        debug: function (bool) {
            isDebug = bool;
        },
        saveLog: function (bool) {
            isSaveLog = bool;
        },
        addLog: function (agrs, array) {
            if (!isSaveLog) {
                return;
            }
            logArray[array || "logs"].push(agrs);
        },
        logArray: function () {
            return logArray;
        }
    };

}(window.console));
