import defined from"../../Core/defined.js";import DeveloperError from"../../Core/DeveloperError.js";import knockout from"../../ThirdParty/knockout.js";import createCommand from"../createCommand.js";function HomeButtonViewModel(e,o){if(!defined(e))throw new DeveloperError("scene is required.");this._scene=e,this._duration=o;var t=this;this._command=createCommand((function(){t._scene.camera.flyHome(t._duration)})),this.tooltip="View Home",knockout.track(this,["tooltip"])}Object.defineProperties(HomeButtonViewModel.prototype,{scene:{get:function(){return this._scene}},command:{get:function(){return this._command}},duration:{get:function(){return this._duration},set:function(e){if(defined(e)&&e<0)throw new DeveloperError("value must be positive.");this._duration=e}}});export default HomeButtonViewModel;