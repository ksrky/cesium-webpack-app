import defaultValue from"../Core/defaultValue.js";import defined from"../Core/defined.js";import DeveloperError from"../Core/DeveloperError.js";import Event from"../Core/Event.js";import knockout from"../ThirdParty/knockout.js";function createCommand(e,r){if(!defined(e))throw new DeveloperError("func is required.");r=defaultValue(r,!0);var t=new Event,o=new Event;function n(){if(!n.canExecute)throw new DeveloperError("Cannot execute command, canExecute is false.");var r,a={args:arguments,cancel:!1};return t.raiseEvent(a),a.cancel||(r=e.apply(null,arguments),o.raiseEvent(r)),r}return n.canExecute=r,knockout.track(n,["canExecute"]),Object.defineProperties(n,{beforeExecute:{value:t},afterExecute:{value:o}}),n}export default createCommand;