(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[3489,260,29,41],[2121,0,1366,768],[0,0,2119,2087],[2121,770,1395,587],[3489,130,128,128],[3489,0,128,128]]}
];


// symbols:



(lib.Path_15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BACKGROUND = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn_home = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.JUDUL1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.off = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.on = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.off();
	this.instance.parent = this;
	this.instance.setTransform(-64,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.18,scaleY:1.18,x:-75,y:-75},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-57,y:-57},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-64,128,128);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-412.65,-256.5,825.3,513,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.6,-256.5,825.3,513);


(lib.judulpelajaran = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.JUDUL1();
	this.instance.parent = this;
	this.instance.setTransform(-389.4,-163.8,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.4,-163.8,778.8,327.7);


(lib.home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_home();
	this.instance.parent = this;
	this.instance.setTransform(-35,-34.4,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.04,scaleY:0.04,x:-39,y:-39},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-31,y:-30},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-34.4,70,69);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40314D").s().p("AjtAsQhjgTAAgZQAAgZBjgSQBigRCLgBQCLABBjARQBjASAAAZQAAAZhjATQhjASiLAAQiLAAhigSg");
	this.shape.setTransform(33.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,67.4,12.3), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7E7E7").s().p("AhGg7ICNhRIg8DrIhOAug");
	this.shape.setTransform(7.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,14.1,28.3), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40314D").s().p("AjtAsQhjgTAAgZQAAgZBjgSQBigRCLgBQCLABBjARQBjASAAAZQAAAZhjATQhjASiLAAQiLAAhigSg");
	this.shape.setTransform(33.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,67.4,12.3), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D4D5").s().p("Am6D1Qi2hmgBiPQABiOC2hlQC4hmECAAQEDAAC4BmQC2BlAACOQAACPi2BmQi4BkkDABQkCgBi4hkg");
	this.shape.setTransform(62.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,125.1,69.1), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D4D5").s().p("Am6D1Qi2hmgBiPQABiOC2hlQC4hmECAAQEDAAC4BmQC2BlAACOQAACPi2BmQi4BkkDABQkCgBi4hkg");
	this.shape.setTransform(62.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,125.1,69.1), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D4D5").s().p("Am6D1Qi2hmgBiPQABiOC2hlQC4hmECAAQEDAAC4BmQC2BlAACOQAACPi2BmQi4BkkDABQkCgBi4hkg");
	this.shape.setTransform(62.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,125.1,69.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D4D5").s().p("Am6D1Qi2hmgBiPQABiOC2hlQC4hmECAAQEDAAC4BmQC2BlAACOQAACPi2BmQi4BkkDABQkCgBi4hkg");
	this.shape.setTransform(62.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,125.1,69.1), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D4D5").s().p("Am6D1Qi2hmgBiPQABiOC2hlQC4hmECAAQEDAAC4BmQC2BlAACOQAACPi2BmQi4BkkDABQkCgBi4hkg");
	this.shape.setTransform(62.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,125.1,69.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40314D").s().p("AjtAsQhjgTAAgZQAAgZBjgSQBjgRCKgBQCLABBjARQBjASAAAZQAAAZhjATQhjASiLAAQiKAAhjgSg");
	this.shape.setTransform(33.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.4,12.3), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40314D").s().p("AjtAsQhjgSAAgaQAAgYBjgSQBjgTCKAAQCMAABiATQBjASAAAYQAAAahjASQhiASiMAAQiKAAhjgSg");
	this.shape.setTransform(33.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,67.4,12.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40314D").s().p("AjtAsQhjgTAAgZQAAgYBjgTQBjgSCKAAQCLAABjASQBjATAAAYQAAAZhjATQhjASiLAAQiKAAhjgSg");
	this.shape.setTransform(33.7,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,67.4,12.4), null);


(lib.Group_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C5560").s().p("AlmjKQAEgFAEgCILGGcQgHADgCAEg");
	this.shape.setTransform(37.6,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C545E").s().p("AlkjMIAEgDILFGcIgEADg");
	this.shape_1.setTransform(37,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B525C").s().p("AljjMIACgDILFGcIgCACg");
	this.shape_2.setTransform(36.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B515A").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_3.setTransform(36.5,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B4F58").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_4.setTransform(36.3,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B4E56").s().p("AljjMIACgCILFGcIgCACg");
	this.shape_5.setTransform(36.2,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B4C55").s().p("AlijMIABgCILFGbIgCADg");
	this.shape_6.setTransform(36.1,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B4B53").s().p("AljjMIACgCILFGcIgBABg");
	this.shape_7.setTransform(35.9,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B4951").s().p("AljjMIABgCILGGbIgCADg");
	this.shape_8.setTransform(35.8,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A474F").s().p("AlijMIABgDILFGcIgBADg");
	this.shape_9.setTransform(35.7,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A464D").s().p("AlijMIABgDILFGcIgBADg");
	this.shape_10.setTransform(35.6,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A454B").s().p("AljjMIABgDILFGcIAAADg");
	this.shape_11.setTransform(35.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.Group_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A444A").s().p("AljjMIABgDILFGcIgBADg");
	this.shape.setTransform(35.7,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILFGbIAAAEg");
	this.shape_1.setTransform(35.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4146").s().p("AlejCQgEgCgCgFQgCgGAAgEIABgGILEGcIAAAGQAAAGACAEQACAEAEADg");
	this.shape_2.setTransform(35.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.Group_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B515A").s().p("AFiDPIrFmcIACgBILFGdg");
	this.shape.setTransform(36.6,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B525C").s().p("AljjNIACAAILFGbIgCAAg");
	this.shape_1.setTransform(36.3,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545E").s().p("AlkjNIAEgBILFGcIgEABg");
	this.shape_2.setTransform(36.1,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C5560").s().p("AlkjMIAEgCILFGbIgEACg");
	this.shape_3.setTransform(35.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,72.2,41.7), null);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#868685").s().p("AlgjLQgBgDgDgCILDGaQAEACACAFg");
	this.shape.setTransform(35.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0.2,0.2,71.5,41.9), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlhjGIAAgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0,0,71.2,42.8), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlhjGIAAgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILFGcIAAADg");
	this.shape_1.setTransform(35.6,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A444A").s().p("AlijMIAAgDILFGcIAAADg");
	this.shape_2.setTransform(35.6,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,71.2,43.5), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C5560").s().p("AlmjKQAEgFAEgCILGGcQgHADgCAEg");
	this.shape.setTransform(37.6,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C545E").s().p("AlkjMIAEgDILFGcIgEADg");
	this.shape_1.setTransform(37,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B525C").s().p("AljjMIACgDILFGcIgCACg");
	this.shape_2.setTransform(36.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B515A").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_3.setTransform(36.5,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B4F58").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_4.setTransform(36.3,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B4E56").s().p("AljjMIACgCILFGcIgCACg");
	this.shape_5.setTransform(36.2,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B4C55").s().p("AlijMIABgCILFGbIgCADg");
	this.shape_6.setTransform(36.1,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B4B53").s().p("AljjMIACgCILFGcIgBABg");
	this.shape_7.setTransform(35.9,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B4951").s().p("AljjMIABgCILGGbIgCADg");
	this.shape_8.setTransform(35.8,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A474F").s().p("AlijMIABgDILFGcIgBADg");
	this.shape_9.setTransform(35.7,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A464D").s().p("AlijMIABgDILFGcIgBADg");
	this.shape_10.setTransform(35.6,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A454B").s().p("AljjMIABgDILFGcIAAADg");
	this.shape_11.setTransform(35.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A444A").s().p("AljjMIABgDILFGcIgBADg");
	this.shape.setTransform(35.7,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILFGbIAAAEg");
	this.shape_1.setTransform(35.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4146").s().p("AlejCQgEgCgCgFQgCgGAAgEIABgGILEGcIAAAGQAAAGACAEQACAEAEADg");
	this.shape_2.setTransform(35.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B515A").s().p("AFiDPIrFmcIACgBILFGdg");
	this.shape.setTransform(36.6,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B525C").s().p("AljjNIACAAILFGbIgCAAg");
	this.shape_1.setTransform(36.3,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545E").s().p("AlkjNIAEgBILFGcIgEABg");
	this.shape_2.setTransform(36.1,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C5560").s().p("AlkjMIAEgCILFGbIgEACg");
	this.shape_3.setTransform(35.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,72.2,41.7), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#868685").s().p("AlgjLQgBgDgDgCILDGaQAEACACAFg");
	this.shape.setTransform(35.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0.2,0.2,71.5,41.9), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlhjGIAAgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,71.2,42.8), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlhjGIAAgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILFGcIAAADg");
	this.shape_1.setTransform(35.6,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A444A").s().p("AlijMIAAgDILFGcIAAADg");
	this.shape_2.setTransform(35.6,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,71.2,43.5), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C5560").s().p("AlmjKQAEgFAFgCILFGcQgHADgCAEg");
	this.shape.setTransform(37.6,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C545E").s().p("AlkjMIAEgDILFGcIgEADg");
	this.shape_1.setTransform(37,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B525C").s().p("AljjMIACgDILFGcIgCACg");
	this.shape_2.setTransform(36.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B515A").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_3.setTransform(36.5,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B4F58").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_4.setTransform(36.3,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B4E56").s().p("AljjMIACgCILFGcIgCACg");
	this.shape_5.setTransform(36.2,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B4C55").s().p("AlijMIABgCILFGbIgCADg");
	this.shape_6.setTransform(36.1,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B4B53").s().p("AljjMIACgCILFGcIgBABg");
	this.shape_7.setTransform(35.9,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B4951").s().p("AljjMIABgCILGGbIgBADg");
	this.shape_8.setTransform(35.8,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A474F").s().p("AljjMIABgDILGGcIgBADg");
	this.shape_9.setTransform(35.7,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A464D").s().p("AljjMIABgDILFGcIgBADg");
	this.shape_10.setTransform(35.7,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A454B").s().p("AljjMIABgDILFGcIAAADg");
	this.shape_11.setTransform(35.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A444A").s().p("AljjMIABgDILFGcIAAADg");
	this.shape.setTransform(35.7,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILGGbIgCAEg");
	this.shape_1.setTransform(35.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4146").s().p("AlejCQgEgCgCgFQgCgGAAgEIABgGILEGcIAAAGQAAAGACAEQACAEAEADg");
	this.shape_2.setTransform(35.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B515A").s().p("AFiDPIrFmcIACgBILFGdg");
	this.shape.setTransform(36.5,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B525C").s().p("AljjNIACAAILFGbIgCAAg");
	this.shape_1.setTransform(36.3,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545E").s().p("AljjNIACgBILFGcIgCABg");
	this.shape_2.setTransform(36,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C5560").s().p("AlkjMIAEgCILFGbIgEACg");
	this.shape_3.setTransform(35.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,72.1,41.7), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#868685").s().p("AlfjKQgCgFgEgCILFGbQAEADACAFg");
	this.shape.setTransform(35.9,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0.2,0.1,71.5,41.9), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlijGIABgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,71.2,42.8), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlijGIABgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILGGcIgCADg");
	this.shape_1.setTransform(35.6,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A444A").s().p("AlijMIAAgDILFGcIAAADg");
	this.shape_2.setTransform(35.5,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,71.2,43.5), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C5560").s().p("AlmjKQAEgFAFgCILFGcQgHADgCAEg");
	this.shape.setTransform(37.6,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C545E").s().p("AlkjMIAEgDILFGcIgEADg");
	this.shape_1.setTransform(37,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B525C").s().p("AljjMIACgDILFGcIgCACg");
	this.shape_2.setTransform(36.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B515A").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_3.setTransform(36.5,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B4F58").s().p("AljjMIACgCILFGbIgCADg");
	this.shape_4.setTransform(36.3,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B4E56").s().p("AljjMIACgCILFGcIgCACg");
	this.shape_5.setTransform(36.2,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B4C55").s().p("AlijMIABgCILFGbIgCADg");
	this.shape_6.setTransform(36.1,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B4B53").s().p("AljjMIACgCILFGcIgBABg");
	this.shape_7.setTransform(35.9,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B4951").s().p("AljjMIABgCILGGbIgBADg");
	this.shape_8.setTransform(35.8,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A474F").s().p("AljjMIABgDILGGcIgBADg");
	this.shape_9.setTransform(35.7,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A464D").s().p("AljjMIABgDILFGcIgBADg");
	this.shape_10.setTransform(35.7,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A454B").s().p("AljjMIABgDILFGcIAAADg");
	this.shape_11.setTransform(35.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A444A").s().p("AljjMIABgDILFGcIAAADg");
	this.shape.setTransform(35.7,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILGGbIgCAEg");
	this.shape_1.setTransform(35.6,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4146").s().p("AlejCQgEgCgCgFQgCgGAAgEIABgGILEGcIAAAGQAAAGACAEQACAEAEADg");
	this.shape_2.setTransform(35.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B515A").s().p("AFiDPIrFmcIACgBILFGdg");
	this.shape.setTransform(36.5,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B525C").s().p("AljjNIACAAILFGbIgCAAg");
	this.shape_1.setTransform(36.3,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545E").s().p("AljjNIACgBILFGcIgCABg");
	this.shape_2.setTransform(36,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C5560").s().p("AlkjMIAEgCILFGbIgEACg");
	this.shape_3.setTransform(35.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,72.1,41.7), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#868685").s().p("AlfjKQgCgFgEgCILFGbQAEADACAFg");
	this.shape.setTransform(35.9,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0.2,0.1,71.5,41.9), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlijGIABgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,71.2,42.8), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A4146").s().p("AlijGIABgFQAAgGgCgEILFGcQACAEAAAGIAAAFg");
	this.shape.setTransform(35.6,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4248").s().p("AlijMIAAgDILGGcIgCADg");
	this.shape_1.setTransform(35.6,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A444A").s().p("AlijMIAAgDILFGcIAAADg");
	this.shape_2.setTransform(35.5,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,71.2,43.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F8F7").s().p("Aj3hkQgQgJgBgNQgBgMANgKQARgIAWABQAWAAAQAJIG4D9IhIAqg");
	this.shape.setTransform(29.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA4F4F").s().p("Ai6h2QgPgJgXgBQgVgBgSAJIAFgDQARgLAYAAQAYAAARALIG4D8IgKAFg");
	this.shape_1.setTransform(30.8,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F48485").s().p("AkLhZQgYgNAAgTQAAgTAXgOQAYgOAhAAQAhAAAXAOIG/EBIhxBCg");
	this.shape_2.setTransform(29.5,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F15F5F").s().p("Ag2mOIBwhCIgDNfIhwBCg");
	this.shape_3.setTransform(52.9,73.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F26C6C").s().p("AjUE/QgYgNAAgUIADteQAAATAXANIG/ECIgCNgg");
	this.shape_4.setTransform(23.7,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,58.7,120.2), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F8F7").s().p("Aj3hjQgPgKgCgMQgBgNANgKQASgIAWABQAWAAAPAJIG4D9IhIAqg");
	this.shape.setTransform(29.6,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D4950").s().p("Ai6h3QgPgJgXAAQgVgBgSAIIAEgDQASgKAYAAQAYAAARAKIG4D9IgKAFg");
	this.shape_1.setTransform(30.8,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#485760").s().p("AkLhZQgYgNAAgTQAAgUAYgNQAXgOAhAAQAhAAAXAOIG/EBIhwBCg");
	this.shape_2.setTransform(29.5,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#556A74").s().p("Ag2mOIBwhCIgDNfIhvBBg");
	this.shape_3.setTransform(52.9,73.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D4950").s().p("AjVE/QgXgOAAgTIADteQAAATAXANIG/EDIgCNeg");
	this.shape_4.setTransform(23.7,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,58.7,120.1), null);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADACAC").s().p("AiPBPIARgMQA5gnA7ghQA/glBAgeIAUgKIAGAEIgTAKQhGAig4AhQg/Ajg1AmIgRALg");
	this.shape.setTransform(51.6,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADACAC").s().p("AiPBPIAQgKQA2gnA/gkQA6ghBHgiIASgJIAGAEIgSAJQhDAgg8AkQg+Aig3AnIgQALg");
	this.shape_1.setTransform(47.4,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADACAC").s().p("AiOBPIANgJQA3goA/gjQBDgnBAgeIARgIIAHAFIgRAIQhEAfg+AkQg7Ahg7ArIgOAJg");
	this.shape_2.setTransform(43.3,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADACAC").s().p("AiOBPIAMgIQA4gpA/gkQA9gjBIgiIAPgHIAGAEIgOAIQhKAjg6AhQhAAkg3AoIgNAJg");
	this.shape_3.setTransform(39.2,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADACAC").s().p("AiPBPIALgHQA6grA/gjQBBglBGggIANgHIAHAEIgOAHQhHAgg/AmQhDAlg1AnIgLAIg");
	this.shape_4.setTransform(35.1,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADACAC").s().p("AiOBPIAJgGQA2goBEgnQBBgmBIggIALgGIAHAFIgLAFQhHAghCAmQhCAmg3ApIgKAGg");
	this.shape_5.setTransform(30.9,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADACAC").s().p("AiPBPIAHgEQA5grBEgmQBBgnBMghIAHgEIAGAEIgHAFQhIAfhEAoQhAAjg9AuIgGAEg");
	this.shape_6.setTransform(22.7,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADACAC").s().p("AiPBPIADgCQA7gtBGgmQBCgnBPgjIADgCIAHAEIgEACQhLAihGAnQhGAog5AsIgCACg");
	this.shape_7.setTransform(14.4,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,65.9,38.2), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADACAC").s().p("AiPBPIARgLQA1gmA/gjQBCgnA9gcIAUgKIAGAFIgTAKQg+AchAAmQg9Aig3AmIgRAMg");
	this.shape.setTransform(51.6,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADACAC").s().p("AiPBPIAQgKQA9grA4gfQA8gkBFggIASgJIAGAFIgSAJQhDAfg9AkQg9Aig3AnIgQALg");
	this.shape_1.setTransform(47.4,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADACAC").s().p("AiOBPIANgJQA4goA+gkQA8giBHgiIARgIIAHAFIgRAIQhCAehBAmQhCAlgzAlIgOAKg");
	this.shape_2.setTransform(43.3,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADACAC").s().p("AiOBPIAMgIQA4gpA/gkQBAglBFggIAPgHIAGAFIgOAHQhHAhg9AjQg/Ajg4ApIgNAJg");
	this.shape_3.setTransform(39.2,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADACAC").s().p("AiPBPIAMgHQA6grA+gjQA7giBMgkIANgGIAGAFIgMAGQhCAehEAnQhAAkg5AqIgLAHg");
	this.shape_4.setTransform(35,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADACAC").s().p("AiOBPIAJgGQA3gqBDglQA/glBKgiIALgFIAHAFIgLAFQhLAhg+AlQhBAlg4AqIgKAGg");
	this.shape_5.setTransform(30.9,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADACAC").s().p("AiOBPIAGgEQA4gqBFgnQBBgnBMghIAHgEIAHAEIgHAEQhLAhhDAnQhFAog3ApIgFAEg");
	this.shape_6.setTransform(22.6,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADACAC").s().p("AiPBPIADgCQA9guBDgmQBJgqBJgfIADgCIAHAEIgEACQhLAhhGAoQhGAog5AsIgDACg");
	this.shape_7.setTransform(14.4,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,65.9,38.2), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADACAC").s().p("AiOBPIARgMQA3gnA9ghQA6giBEghIAUgKIAHAEIgVAKQhFAig5AhQg+Ajg0AmIgRALg");
	this.shape.setTransform(51.5,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADACAC").s().p("AiPBPIAQgKQA2gnA/gkQA6ghBGgiIATgJIAGAEIgSAJQhDAgg9AkQg9Aig3AnIgQALg");
	this.shape_1.setTransform(47.4,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADACAC").s().p("AiPBPIAPgJQA2goBAgjQBCgnBAgeIARgIIAGAFIgQAIQhHAhg7AiQg7Ahg7ArIgOAJg");
	this.shape_2.setTransform(43.3,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADACAC").s().p("AiPBPIANgIQA5gpA/gkQA8gjBJgiIAOgHIAHAEIgPAIQhLAjg5AhQg/Akg5AoIgLAJg");
	this.shape_3.setTransform(39.1,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADACAC").s().p("AiPBPIALgHQA6grA/gjQBAglBHggIANgHIAGAEIgMAHQhIAgg/AmQg/Akg5AoIgLAIg");
	this.shape_4.setTransform(35,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADACAC").s().p("AiPBPIAJgGQA3goBEgnQA9gkBMgiIALgGIAGAFIgLAFQhIAhhAAlQhDAmg3ApIgJAGg");
	this.shape_5.setTransform(30.9,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADACAC").s().p("AiOBPIAFgEQA6grBDgmQBBgnBMghIAIgEIAHAEIgIAFQhIAfhFAoQg/Ajg9AuIgGAEg");
	this.shape_6.setTransform(22.6,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADACAC").s().p("AiOBPIACgCQA7gtBFgmQBCgnBPgjIAEgCIAGAEIgDACQhMAihFAnQhGAog5AsIgDACg");
	this.shape_7.setTransform(14.3,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,65.9,38.2), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADACAC").s().p("AiPBPIARgLQA1gmA/gjQBCgnA9gcIAUgKIAGAFIgTAJQg/Aeg/AlQg9Aig3AmIgRAMg");
	this.shape.setTransform(51.6,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADACAC").s().p("AiPBPIAQgKQA9grA4gfQA8gkBFggIASgJIAGAFIgSAJQhAAeg/AlQg7Agg6ApIgQALg");
	this.shape_1.setTransform(47.4,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADACAC").s().p("AiOBPIANgJQA0glBCgnQA8giBHgiIARgIIAHAFIgRAIQg+AchFAoQg/Ajg2AnIgOAKg");
	this.shape_2.setTransform(43.3,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADACAC").s().p("AiOBPIAMgIQA4gpA/gkQBAglBFggIAPgHIAGAFIgOAHQhEAfhAAlQg/Ajg4ApIgNAJg");
	this.shape_3.setTransform(39.2,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADACAC").s().p("AiPBPIAMgHQA6grA+gjQA7giBMgkIANgGIAGAFIgMAGQhCAehEAnQhAAkg5AqIgLAHg");
	this.shape_4.setTransform(35,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADACAC").s().p("AiOBPIAJgGQA3gqBDglQA/glBKgiIALgFIAHAFIgLAFQhLAhg+AlQhBAlg4AqIgKAGg");
	this.shape_5.setTransform(30.9,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADACAC").s().p("AiPBPIAHgEQA3gqBGgnQBBgnBMghIAHgEIAGAEIgHAEQhMAhhAAnQhGAng3AqIgGAEg");
	this.shape_6.setTransform(22.7,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ADACAC").s().p("AiPBPIADgCQA+guBDgmQBGgpBLggIADgCIAHAEIgEACQhLAhhGAoQhGAog5AsIgDACg");
	this.shape_7.setTransform(14.4,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,65.9,38.2), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F8F7").s().p("Aj3hkQgQgJgBgNQgBgMANgKQARgIAWABQAXAAAPAJIG4D9IhIAqg");
	this.shape.setTransform(29.6,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFA857").s().p("Ai6h2QgQgJgWgBQgWgBgRAJIAEgDQASgLAYAAQAYAAARALIG4D8IgKAFg");
	this.shape_1.setTransform(30.8,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDCE8F").s().p("AkLhZQgYgOAAgSQAAgUAXgNQAXgOAiAAQAhAAAYAOIG+EBIhxBCg");
	this.shape_2.setTransform(29.4,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B766").s().p("Ag2mOIBwhCIgDNfIhwBCg");
	this.shape_3.setTransform(52.9,73.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FECC80").s().p("AjUE+QgYgNAAgUIADtcQABARAWANIG/EDIgDNeg");
	this.shape_4.setTransform(23.7,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,58.7,120.2), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AorhZQAVgVAygqQBMhBA1geQAygdBPgaQA0gQAVgEILFGcQghAIgoAMQhPAagyAcQg0AehNBCQgnAgggAfg");
	mask.setTransform(55.6,32.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, null, null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AorhZQAVgVAygqQBMhBA1geQAygdBPgaQA0gQAVgEILFGcQghAIgoAMQhPAagyAcQg0AehNBCQgnAgggAfg");
	mask.setTransform(55.6,32.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, null, null);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnGipQA0geBNgYQAugOAZgFILFGcQgWADgxAQQhNAYg0Aeg");
	mask.setTransform(45.5,24.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, null, null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnGipQA0geBNgYQAwgPAXgEILFGcQgWADgxAQQhNAYg0Aeg");
	mask.setTransform(45.5,24.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, null, null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnHh+QB6hxBQguILFGbQgyAdhPBDQgoAhghAfg");
	mask.setTransform(45.6,28.6);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, null, null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnHh+QB6hxBQguILFGbQgyAdhPBDQgoAhghAfg");
	mask.setTransform(45.6,28.6);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, null, null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnHh+QB6hxBQguILFGbQgyAdhPBDQgnAhgiAfg");
	mask.setTransform(45.6,28.6);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, null, null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnHh+QB6hxBQguILFGbQgyAdhPBDQgnAhgiAfg");
	mask.setTransform(45.6,28.6);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, null, null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AorhZQAggeAnghQBNhBA0geQAzgdBOgaQA0gQAVgEILFGcQghAIgoAMQhPAagyAcQg0AehNBCQgnAgggAfg");
	mask.setTransform(55.6,32.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, null, null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AorhZQAggeAnghQBNhBA0geQAzgdBOgaQA0gQAVgEILFGcQghAIgoAMQhPAagyAcQg0AehNBCQgnAgggAfg");
	mask.setTransform(55.6,32.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup, null, null);


(lib.btn_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.on();
	this.instance.parent = this;
	this.instance.setTransform(-64,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.18,scaleY:1.18,x:-75,y:-75},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-56,y:-56},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-64,128,128);


(lib.btn_exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQCLIgQgMIhAhAIgDAFIg8A7IgQAMIgKAAIgQgMIgZgZQgQgRAQgSIBEhDIgFgDIg+g+QgSgSASgTIAbgaQASgTATASIBBBDIBEhEQAHgIAJAAQAJAAAIAIIAZAZQAFAFAIAMIAAAJIgNARIg5A6IgHAEIBBBAIAMAQIAAAJIgLAPIgYAYIgPALg");
	this.shape.setTransform(0.1,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E43C3E").s().p("Aj+CoIGmmmQBXBYAAB7QAAB7hXBYQhYBXh7AAQh8AAhXhXg");
	this.shape_1.setTransform(4.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F04E48").s().p("AjTDUQhXhYAAh8QAAh7BXhXQBYhYB7AAQB8AABYBYQBXBXAAB7QAAB8hXBYQhYBXh8AAQh7AAhYhXg");
	this.shape_2.setTransform(0,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A53436").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7QAAB8hXBXQhYBYh8AAQh7AAhYhYg");
	this.shape_3.setTransform(0,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{scaleX:1,scaleY:1,y:3.1}},{t:this.shape_2,p:{scaleX:1,scaleY:1,y:-3.1}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:4.4,y:1.3}},{t:this.shape,p:{scaleX:1,scaleY:1,y:-3.5}}]}).to({state:[{t:this.shape_3,p:{scaleX:1.126,scaleY:1.126,y:3.5}},{t:this.shape_2,p:{scaleX:1.126,scaleY:1.126,y:-3.5}},{t:this.shape_1,p:{scaleX:1.126,scaleY:1.126,x:4.9,y:1.5}},{t:this.shape,p:{scaleX:1.126,scaleY:1.126,y:-4}}]},1).to({state:[{t:this.shape_3,p:{scaleX:0.911,scaleY:0.911,y:2.9}},{t:this.shape_2,p:{scaleX:0.911,scaleY:0.911,y:-2.8}},{t:this.shape_1,p:{scaleX:0.911,scaleY:0.911,x:4,y:1.2}},{t:this.shape,p:{scaleX:0.911,scaleY:0.911,y:-3.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-33,59.8,66);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BACKGROUND();
	this.instance.parent = this;
	this.instance.setTransform(-640.3,-360,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.3,-360,1280.6,720);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape.setTransform(51.7,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgCNeIgBABg");
	this.shape_1.setTransform(53,73.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_2.setTransform(54.3,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_3.setTransform(55.7,72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgCNeIgBABg");
	this.shape_4.setTransform(50.4,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D5D1").s().p("AjwiIIACgCIHfEUIgDABg");
	this.shape_5.setTransform(27.8,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7D5D1").s().p("AjxiJIADgBIHgEUIgDABg");
	this.shape_6.setTransform(29.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7D5D1").s().p("AjtiHIAEgBIHXEQIgCABg");
	this.shape_7.setTransform(30.7,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7D5D1").s().p("AjsiGIABgDIHYERIgCACg");
	this.shape_8.setTransform(26.9,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA4F4F").s().p("AgEmsIAJgFIAANdIgJAGg");
	this.shape_9.setTransform(56.7,71.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9F8F7").s().p("AgomXIBRgvIAANdIhRAwg");
	this.shape_10.setTransform(53.1,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA4F4F").s().p("AiWgcIAAh0IEtCtIAAB0g");
	this.shape_11.setTransform(23.7,37.2);

	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(29.4,60.1,1,1,0,0,0,29.4,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,58.7,120.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgCNeIgBABg");
	this.shape.setTransform(51.7,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgCNdIgBACg");
	this.shape_1.setTransform(53,73.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_2.setTransform(54.3,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_3.setTransform(55.7,72);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_4.setTransform(50.3,75.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D5D1").s().p("AjwiJIACgBIHfEUIgDABg");
	this.shape_5.setTransform(27.8,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7D5D1").s().p("AjxiJIAEgBIHeEUIgCABg");
	this.shape_6.setTransform(29.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7D5D1").s().p("AjtiIIAEAAIHXEQIgCABg");
	this.shape_7.setTransform(30.7,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7D5D1").s().p("AjsiGIABgCIHYEQIgCABg");
	this.shape_8.setTransform(26.8,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D4950").s().p("AgEmrIAJgGIAANdIgJAGg");
	this.shape_9.setTransform(56.7,71.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9F8F7").s().p("AgomWIBRgwIAANdIhRAwg");
	this.shape_10.setTransform(53.1,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#92407E").s().p("AiWgcIAAh0IEtCtIAAB0g");
	this.shape_11.setTransform(23.7,37.2);

	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(29.3,60.1,1,1,0,0,0,29.3,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,58.7,120.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape.setTransform(51.6,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_1.setTransform(53,73.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgBNeIgCABg");
	this.shape_2.setTransform(54.3,72.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgCNeIgBABg");
	this.shape_3.setTransform(55.7,72.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7D5D1").s().p("AAAmuIACgBIgCNeIgBABg");
	this.shape_4.setTransform(50.3,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7D5D1").s().p("AjwiIIACgCIHfEUIgDABg");
	this.shape_5.setTransform(27.8,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7D5D1").s().p("AjxiJIADgBIHgEUIgDABg");
	this.shape_6.setTransform(29,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7D5D1").s().p("AjtiIIAEAAIHYEQIgDABg");
	this.shape_7.setTransform(30.7,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7D5D1").s().p("AjsiGIABgDIHYERIgDACg");
	this.shape_8.setTransform(26.8,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFA857").s().p("AgEmsIAJgFIAANdIgJAGg");
	this.shape_9.setTransform(56.6,71.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9F8F7").s().p("AgomXIBRgvIAANdIhRAwg");
	this.shape_10.setTransform(53,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B766").s().p("AiWgcIAAh1IEtCuIAAB1g");
	this.shape_11.setTransform(23.7,37.2);

	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(29.3,60.1,1,1,0,0,0,29.3,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,58.7,120.2), null);


(lib.ClipGroup_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AljjHIACgMILFGcIgCALg");
	mask.setTransform(35.6,22.2);

	// Layer_3
	this.instance = new lib.Group_27();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.7,1,1,0,0,0,35.6,21.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_2, new cjs.Rectangle(0.1,1,71.2,42.5), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AljjHIACgMILFGcIgCALg");
	mask.setTransform(35.6,22.2);

	// Layer_3
	this.instance = new lib.Group_20();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.7,1,1,0,0,0,35.6,21.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(0.1,1,71.2,42.5), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AljjHIACgMILFGcIgCALg");
	mask.setTransform(35.6,22.2);

	// Layer_3
	this.instance = new lib.Group_13();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.7,1,1,0,0,0,35.6,21.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(0,1,71.2,42.5), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AljjHIACgMILFGcIgCALg");
	mask.setTransform(35.6,22.2);

	// Layer_3
	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.7,1,1,0,0,0,35.6,21.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,1,71.2,42.5), null);


(lib.ClipGroup_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlhjJQAAgFgCgFILFGdQACAEAAAFg");
	mask.setTransform(35.6,21.2);

	// Layer_3
	this.instance = new lib.Group_28();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.4,1,1,0,0,0,35.6,21.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_2, new cjs.Rectangle(0,0,71.2,42.3), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlhjJQAAgFgCgFILFGdQACAEAAAFg");
	mask.setTransform(35.6,21.2);

	// Layer_3
	this.instance = new lib.Group_21();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.4,1,1,0,0,0,35.6,21.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(0,0,71.2,42.3), null);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlhjJQAAgFgCgFILFGdQACAEAAAFg");
	mask.setTransform(35.6,21.2);

	// Layer_3
	this.instance = new lib.Group_14();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.4,1,1,0,0,0,35.6,21.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, new cjs.Rectangle(0,0,71.2,42.3), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlhjJQAAgFgCgFILFGdQACAEAAAFg");
	mask.setTransform(35.6,21.2);

	// Layer_3
	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(35.6,21.4,1,1,0,0,0,35.6,21.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,71.2,42.3), null);


(lib.ClipGroup_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACzB2IjDhcQjuh1hihwQgBgDgDgCILDGaQAEACACAFQg/gkhzg3g");
	mask.setTransform(35.9,21.1);

	// Layer_3
	this.instance = new lib.Group_29();
	this.instance.parent = this;
	this.instance.setTransform(35.9,21.1,1,1,0,0,0,35.9,21.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_2, new cjs.Rectangle(0.2,0.2,71.5,41.9), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACzB2IjDhcQjuh1hihwQgBgDgDgCILDGaQAEACACAFQg/gkhzg3g");
	mask.setTransform(35.9,21.1);

	// Layer_3
	this.instance = new lib.Group_22();
	this.instance.parent = this;
	this.instance.setTransform(35.9,21.1,1,1,0,0,0,35.9,21.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0.2,0.2,71.5,41.9), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AC0B3IjDhdQjvh0hhhwQgCgFgEgCILFGbQAEADACAFQg/glhzg2g");
	mask.setTransform(35.9,21);

	// Layer_3
	this.instance = new lib.Group_15();
	this.instance.parent = this;
	this.instance.setTransform(35.9,21.1,1,1,0,0,0,35.9,21.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(0.2,0.1,71.5,41.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AC0B3IjDhdQjvh0hhhwQgCgFgEgCILFGbQAEADACAFQg/glhzg2g");
	mask.setTransform(35.9,21);

	// Layer_3
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(35.9,21.1,1,1,0,0,0,35.9,21.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.2,0.1,71.5,41.9), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsjLQAMgHAHAFILGGbQgJgEgKAGg");
	mask.setTransform(36.5,20.8);

	// Layer_3
	this.instance = new lib.Group_30();
	this.instance.parent = this;
	this.instance.setTransform(36.1,20.8,1,1,0,0,0,36.1,20.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(0,0,72.2,41.7), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsjLQAMgHAHAFILGGbQgJgEgKAGg");
	mask.setTransform(36.5,20.8);

	// Layer_3
	this.instance = new lib.Group_23();
	this.instance.parent = this;
	this.instance.setTransform(36.1,20.8,1,1,0,0,0,36.1,20.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,72.2,41.7), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsjLQAMgHAHAFILGGbQgJgEgKAGg");
	mask.setTransform(36.5,20.8);

	// Layer_3
	this.instance = new lib.Group_16();
	this.instance.parent = this;
	this.instance.setTransform(36.1,20.8,1,1,0,0,0,36.1,20.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(0,0,72.1,41.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsjLQAMgHAHAFILGGbQgJgEgKAGg");
	mask.setTransform(36.5,20.8);

	// Layer_3
	this.instance = new lib.Group_9();
	this.instance.parent = this;
	this.instance.setTransform(36.1,20.8,1,1,0,0,0,36.1,20.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,72.1,41.7), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alei/QgEgCgCgFQgCgGAAgEQAAgGACgGILFGcQgCAIAAAEQAAAGACAEQACAEAEADg");
	mask.setTransform(35.9,22.1);

	// Layer_3
	this.instance = new lib.Group_31();
	this.instance.parent = this;
	this.instance.setTransform(35.9,22.1,1,1,0,0,0,35.9,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alei/QgEgCgCgFQgCgGAAgEQAAgGACgGILFGcQgCAIAAAEQAAAGACAEQACAEAEADg");
	mask.setTransform(35.9,22.1);

	// Layer_3
	this.instance = new lib.Group_24();
	this.instance.parent = this;
	this.instance.setTransform(35.9,22.1,1,1,0,0,0,35.9,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alei/QgEgCgCgFQgCgGAAgEIACgMILFGcIgCAMQAAAGACAEQACAEAEADg");
	mask.setTransform(35.9,22.1);

	// Layer_3
	this.instance = new lib.Group_17();
	this.instance.parent = this;
	this.instance.setTransform(35.9,22.1,1,1,0,0,0,35.9,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alei/QgEgCgCgFQgCgGAAgEIACgMILFGcIgCAMQAAAGACAEQACAEAEADg");
	mask.setTransform(35.9,22.1);

	// Layer_3
	this.instance = new lib.Group_10();
	this.instance.parent = this;
	this.instance.setTransform(35.9,22.1,1,1,0,0,0,35.9,22.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,71.8,44.2), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alvi8QAGgXATgLILGGbQgTAKgGAYg");
	mask.setTransform(36.8,22.3);

	// Layer_3
	this.instance = new lib.Group_32();
	this.instance.parent = this;
	this.instance.setTransform(36.8,22.3,1,1,0,0,0,36.8,22.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alvi8QAGgXATgLILGGbQgTAKgGAYg");
	mask.setTransform(36.8,22.3);

	// Layer_3
	this.instance = new lib.Group_25();
	this.instance.parent = this;
	this.instance.setTransform(36.8,22.3,1,1,0,0,0,36.8,22.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alvi8QAGgXAUgLILFGbQgTAKgGAYg");
	mask.setTransform(36.8,22.3);

	// Layer_3
	this.instance = new lib.Group_18();
	this.instance.parent = this;
	this.instance.setTransform(36.8,22.3,1,1,0,0,0,36.8,22.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Alvi8QAGgXAUgLILFGbQgTAKgGAYg");
	mask.setTransform(36.8,22.3);

	// Layer_3
	this.instance = new lib.Group_11();
	this.instance.parent = this;
	this.instance.setTransform(36.8,22.3,1,1,0,0,0,36.8,22.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,73.5,44.7), null);


(lib.btn_profil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAiAAIAAB7IBBAAIAAAeg");
	this.shape.setTransform(39.4,96);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBNIAAiZIAhAAIAACZg");
	this.shape_1.setTransform(28.3,96);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BNIAAiZIBpAAIAAAeIhGAAIAAAhIBCAAIAAAdIhCAAIAAA9g");
	this.shape_2.setTransform(17.3,96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4A5QgYgXAAgiQAAggAYgYQAXgWAhAAQAiAAAXAWQAYAYAAAgQAAAigYAXQgXAWgiAAQghAAgXgWgAgfgiQgNAOAAAUQAAAVANAOQANAOASAAQATAAAOgOQANgOAAgVQAAgUgNgOQgOgOgTAAQgSAAgNAOg");
	this.shape_3.setTransform(0.1,95.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBNIghgxIgYAAIAAAxIgiAAIAAiZIA6AAQAjAAAPAMQAPAMAAAcQAAAkgdAKIAnA3gAgggBIAZAAQARAAAGgFQAGgGAAgMQAAgNgGgEQgHgFgPgBIgaAAg");
	this.shape_4.setTransform(-17.1,96);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BNIAAiZIA2AAQAjAAAQAOQAQAOAAAcQAAAbgQAOQgRANgiAAIgTAAIAAArgAgZAEIAWAAQARABAFgHQAHgGAAgOQAAgNgIgGQgIgFgQgBIgTAAg");
	this.shape_5.setTransform(-34.3,96);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E16539").s().p("AgZCNQAdgoAJghQAKgiAQhrIAPhlIgFC9QgGAXgPAfQgeA+gzAsg");
	this.shape_6.setTransform(-1.3,-29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F37740").s().p("AgPD/IgvgYIj7kFIgCgCQgBgCADgGQAJgSAYgRQAMgIAKgFIDTCaQAWiSAbhuQAQg/AuggQAYgRAUgEIBegYQATgDAdAQQAfASAHAWQAEARAMEJIAME3IlLAQg");
	this.shape_7.setTransform(-7.9,-35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F342D").s().p("ABECJIgPgsIAKgBQANgCAGgFQAIgHgCgfQgDgggLgEQgKgDgKAHIgIAJIgThSIgFgNIhlAgIgsgZIgshDIA7AEIA8gPIB/gSIBKBSIAPBqIg8CFg");
	this.shape_8.setTransform(0.7,-92);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCDAC4").s().p("AgdCWQgRgCgYgtQgXgogCgUQgBgOAGhGIAGhFIAqgoIB3APIATDJQgZAWgcAWQg1ApgRAAIgCgBg");
	this.shape_9.setTransform(1.1,-84.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E16539").s().p("AgxACIAihSIBBAjIgiB+g");
	this.shape_10.setTransform(-7.3,-43.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCDAC4").s().p("AgBAPIhdhXIAAgIQABgIAGgCQAGgCBCAsIBAAsIAhgkIAFACQAEACAAAEIAAA4IAFAdIg7Ang");
	this.shape_11.setTransform(-43,-49);

	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-76.4,1,1,0,0,0,7,14.1);
	this.instance.alpha = 0.23;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BEBEBE").s().p("AgfARQgCgDAEgDIA3gdQADgCADAEQACAEgEACIg3AdIgCABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_12.setTransform(-25.8,-57.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1F1F1").s().p("Ahvg3IAAgPIDfB/IAAAOg");
	this.shape_13.setTransform(-47.5,-52.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BEBEBE").s().p("AiLBKIEXihIAAANIkXCig");
	this.shape_14.setTransform(-22.2,-54.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BEBEBE").s().p("Ah8BHQgDgCAAgDQAAgCADgCIDmiEQAIgEAHAEIAHAEIj4CLg");
	this.shape_15.setTransform(-40.7,-65.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BEBEBE").s().p("AiABEID4iMIAJAFIj4CMg");
	this.shape_16.setTransform(-39,-64.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BEBEBE").s().p("AiABDID4iKIAJAEIj4CMg");
	this.shape_17.setTransform(-37.3,-63.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BEBEBE").s().p("AiABDID4iKIAJAEIj4CLg");
	this.shape_18.setTransform(-35.5,-62.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BEBEBE").s().p("AiABEID4iMIAJAGIj4CKg");
	this.shape_19.setTransform(-33.8,-61.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BEBEBE").s().p("AiABDID4iLIAJAFIj3CMg");
	this.shape_20.setTransform(-32,-60.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BEBEBE").s().p("Ah3BHIgIgEID3iMIAFADQADACAAADQAAACgDACIjmCEQgDADgEAAQgEAAgDgDg");
	this.shape_21.setTransform(-30.3,-59.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1F1F1").s().p("Aj1AUIEYihIDTB6IkYChg");
	this.shape_22.setTransform(-32.8,-61.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BEBEBE").s().p("AiSBOIEZihIAMAGIkZChg");
	this.shape_23.setTransform(-44,-91.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1F1F1").s().p("AgFB2IAAjyIALAHIAADyg");
	this.shape_24.setTransform(-58,-71.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4F4E4E").s().p("Ah6gdID1iOIAADKIj1CNg");
	this.shape_25.setTransform(-43.4,-79.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F1F1F1").s().p("AiMgnIEZiiIAADyIkZCig");
	this.shape_26.setTransform(-43.4,-79.4);

	this.instance_1 = new lib.Path_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.7,-100.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F37740").s().p("AhXg/QAEgRAUgOQAJgIAJgDIBDAyIBCAjIgiB+g");
	this.shape_27.setTransform(-11.1,-46.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCDAC4").s().p("Ag8A6QgDgBgBgFIAAgEIArgRIgNg5QgNg8AEgEQAEgFAKAHIAKAHIAeBMIA2A5IgmApg");
	this.shape_28.setTransform(-21.7,-61.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F1B486").s().p("AgcABIADgJIATgPIAjgSIguBTg");
	this.shape_29.setTransform(3,-71.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCDAC4").s().p("Ag9gSIBcgtIAfBPIhlAwg");
	this.shape_30.setTransform(6,-70.4);

	this.instance_2 = new lib.Path_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.3,-2.7,1,1,0,0,0,33.6,6.2);
	this.instance_2.alpha = 0.25;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EE428E").s().p("Am5D0Qi4hlAAiPQAAiOC4hlQC3hmECAAQEDAAC4BmQC2BlAACOQAACPi2BlQi4BlkDAAQkCAAi3hlg");
	this.shape_31.setTransform(0,-5.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#813051").s().p("AmrD8QiyhdgSiHIgCAAIAAinIA6AAQBMhbCXg2QCbg4C5AAQC6AACbA4QCXA2BMBbIA1AAIAABoQAEAVAAASQAACPi2BlQi4BlkDAAQj2AAi1hdg");
	this.shape_32.setTransform(0,10.4);

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,34,1,1,0,0,0,62.6,34.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag6BbIAAi1IAoAAIAACRIBNAAIAAAkg");
	this.shape_33.setTransform(46.7,113.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTBbIAAi1IAnAAIAAC1g");
	this.shape_34.setTransform(33.6,113.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag9BbIAAi1IB8AAIAAAkIhUAAIAAAnIBPAAIAAAjIhPAAIAABHg");
	this.shape_35.setTransform(20.6,113.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhDBDQgcgbAAgoQAAgnAcgbQAcgbAnAAQAoAAAcAbQAcAbAAAnQAAAogcAbQgcAbgoAAQgnAAgcgbgAglgpQgQASAAAXQAAAYAQASQAPARAWAAQAXAAAQgRQAPgSAAgYQAAgXgPgSQgQgRgXAAQgWAAgPARg");
	this.shape_36.setTransform(0.1,113.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAeBbIgog6IgcAAIAAA6IgpAAIAAi1IBFAAQAqAAASAOQASAPAAAfQAAArgjANIAvBBgAgmgBIAeAAQAUAAAHgHQAIgHAAgOQAAgPgIgGQgIgFgTAAIgeAAg");
	this.shape_37.setTransform(-20.2,113.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhIBbIAAi1IBBAAQApAAATAQQATAQAAAiQABAhgVAQQgTAPgoAAIgYAAIAAAzgAgfAFIAcAAQATAAAIgHQAGgIABgQQAAgQgKgHQgKgGgTAAIgXAAg");
	this.shape_38.setTransform(-40.7,113.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrBDIAAiFIAeAAIAABqIA5AAIAAAbg");
	this.shape_39.setTransform(34.5,84);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_40.setTransform(24.9,84);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgtBDIAAiFIBbAAIAAAaIg9AAIAAAdIA6AAIAAAZIg6AAIAAA1g");
	this.shape_41.setTransform(15.2,84);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgxAyQgVgUAAgeQAAgdAVgUQAUgUAdAAQAeAAAUAUQAVAUAAAdQAAAegVAUQgUAUgeAAQgdAAgUgUgAgbgeQgMANAAARQAAASAMANQALAMAQAAQARAAALgMQAMgNAAgSQAAgRgMgNQgLgMgRAAQgQAAgLAMg");
	this.shape_42.setTransform(0.1,83.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAWBDIgdgrIgVAAIAAArIgeAAIAAiFIAzAAQAfAAANAKQAOALAAAXQAAAggaAJIAiAwgAgcgBIAWAAQAPAAAFgFQAFgFAAgLQAAgLgFgEQgGgEgOAAIgWAAg");
	this.shape_43.setTransform(-14.9,84);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag0BDIAAiFIAvAAQAeAAAOAMQAPAMAAAZQAAAYgPALQgPAMgdAAIgSAAIAAAlgAgXAEIAVAAQAOAAAGgFQAEgGAAgMQABgMgIgFQgGgFgOAAIgSAAg");
	this.shape_44.setTransform(-30,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regY:34.6,scaleX:1,scaleY:1,y:34,regX:62.6,x:0.1}},{t:this.shape_32,p:{scaleX:1,scaleY:1,y:10.4}},{t:this.shape_31,p:{scaleX:1,scaleY:1,y:-5.6}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:4.3,y:-2.7,regY:6.2}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:6,y:-70.4}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:3,y:-71.1}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:-21.7,y:-61.6}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:-11.1,y:-46.2}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:-58.7,y:-100.3}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:-43.4,y:-79.4}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:-43.4,y:-79.4}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:-58,y:-71.6}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:-44,y:-91.8}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:-32.8,y:-61.1}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:-30.3,y:-59.6}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:-32,y:-60.7}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:-33.8,y:-61.7}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:-35.5,y:-62.7}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:-37.3,y:-63.7}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:-39,y:-64.7}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:-40.7,y:-65.8}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:-22.2,y:-54.4}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:-47.5,y:-52.7}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:-25.8,y:-57.5}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-48.7,y:-76.4}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:-43,y:-49}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:-7.3,y:-43.7}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:1.1,y:-84.8}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.7,y:-92}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:-7.9,y:-35.7}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-1.3,y:-29.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_3,p:{regY:34.5,scaleX:1.186,scaleY:1.186,y:40.2,regX:62.6,x:0.1}},{t:this.shape_32,p:{scaleX:1.186,scaleY:1.186,y:12.3}},{t:this.shape_31,p:{scaleX:1.186,scaleY:1.186,y:-6.7}},{t:this.instance_2,p:{scaleX:1.186,scaleY:1.186,x:5.1,y:-3.2,regY:6.2}},{t:this.shape_30,p:{scaleX:1.186,scaleY:1.186,x:7.2,y:-83.5}},{t:this.shape_29,p:{scaleX:1.186,scaleY:1.186,x:3.6,y:-84.4}},{t:this.shape_28,p:{scaleX:1.186,scaleY:1.186,x:-25.8,y:-73.1}},{t:this.shape_27,p:{scaleX:1.186,scaleY:1.186,x:-13.2,y:-54.8}},{t:this.instance_1,p:{scaleX:1.186,scaleY:1.186,x:-69.6,y:-119}},{t:this.shape_26,p:{scaleX:1.186,scaleY:1.186,x:-51.5,y:-94.2}},{t:this.shape_25,p:{scaleX:1.186,scaleY:1.186,x:-51.5,y:-94.2}},{t:this.shape_24,p:{scaleX:1.186,scaleY:1.186,x:-68.9,y:-84.9}},{t:this.shape_23,p:{scaleX:1.186,scaleY:1.186,x:-52.2,y:-109}},{t:this.shape_22,p:{scaleX:1.186,scaleY:1.186,x:-38.9,y:-72.5}},{t:this.shape_21,p:{scaleX:1.186,scaleY:1.186,x:-35.9,y:-70.7}},{t:this.shape_20,p:{scaleX:1.186,scaleY:1.186,x:-38,y:-72}},{t:this.shape_19,p:{scaleX:1.186,scaleY:1.186,x:-40.1,y:-73.2}},{t:this.shape_18,p:{scaleX:1.186,scaleY:1.186,x:-42.1,y:-74.4}},{t:this.shape_17,p:{scaleX:1.186,scaleY:1.186,x:-44.2,y:-75.6}},{t:this.shape_16,p:{scaleX:1.186,scaleY:1.186,x:-46.3,y:-76.8}},{t:this.shape_15,p:{scaleX:1.186,scaleY:1.186,x:-48.3,y:-78}},{t:this.shape_14,p:{scaleX:1.186,scaleY:1.186,x:-26.4,y:-64.5}},{t:this.shape_13,p:{scaleX:1.186,scaleY:1.186,x:-56.3,y:-62.5}},{t:this.shape_12,p:{scaleX:1.186,scaleY:1.186,x:-30.6,y:-68.2}},{t:this.instance,p:{scaleX:1.186,scaleY:1.186,x:-57.7,y:-90.6}},{t:this.shape_11,p:{scaleX:1.186,scaleY:1.186,x:-51,y:-58.1}},{t:this.shape_10,p:{scaleX:1.186,scaleY:1.186,x:-8.7,y:-51.9}},{t:this.shape_9,p:{scaleX:1.186,scaleY:1.186,x:1.3,y:-100.7}},{t:this.shape_8,p:{scaleX:1.186,scaleY:1.186,x:0.8,y:-109.1}},{t:this.shape_7,p:{scaleX:1.186,scaleY:1.186,x:-9.4,y:-42.4}},{t:this.shape_6,p:{scaleX:1.186,scaleY:1.186,x:-1.6,y:-34.5}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.instance_3,p:{regY:34.6,scaleX:0.876,scaleY:0.876,y:29.8,regX:62.5,x:0}},{t:this.shape_32,p:{scaleX:0.876,scaleY:0.876,y:9.1}},{t:this.shape_31,p:{scaleX:0.876,scaleY:0.876,y:-4.9}},{t:this.instance_2,p:{scaleX:0.876,scaleY:0.876,x:3.8,y:-2.4,regY:6.1}},{t:this.shape_30,p:{scaleX:0.876,scaleY:0.876,x:5.3,y:-61.6}},{t:this.shape_29,p:{scaleX:0.876,scaleY:0.876,x:2.7,y:-62.2}},{t:this.shape_28,p:{scaleX:0.876,scaleY:0.876,x:-19,y:-53.9}},{t:this.shape_27,p:{scaleX:0.876,scaleY:0.876,x:-9.7,y:-40.4}},{t:this.instance_1,p:{scaleX:0.876,scaleY:0.876,x:-51.4,y:-87.9}},{t:this.shape_26,p:{scaleX:0.876,scaleY:0.876,x:-38,y:-69.5}},{t:this.shape_25,p:{scaleX:0.876,scaleY:0.876,x:-38,y:-69.5}},{t:this.shape_24,p:{scaleX:0.876,scaleY:0.876,x:-50.8,y:-62.7}},{t:this.shape_23,p:{scaleX:0.876,scaleY:0.876,x:-38.5,y:-80.4}},{t:this.shape_22,p:{scaleX:0.876,scaleY:0.876,x:-28.7,y:-53.5}},{t:this.shape_21,p:{scaleX:0.876,scaleY:0.876,x:-26.5,y:-52.2}},{t:this.shape_20,p:{scaleX:0.876,scaleY:0.876,x:-28,y:-53.1}},{t:this.shape_19,p:{scaleX:0.876,scaleY:0.876,x:-29.6,y:-54}},{t:this.shape_18,p:{scaleX:0.876,scaleY:0.876,x:-31.1,y:-54.9}},{t:this.shape_17,p:{scaleX:0.876,scaleY:0.876,x:-32.6,y:-55.8}},{t:this.shape_16,p:{scaleX:0.876,scaleY:0.876,x:-34.2,y:-56.7}},{t:this.shape_15,p:{scaleX:0.876,scaleY:0.876,x:-35.6,y:-57.6}},{t:this.shape_14,p:{scaleX:0.876,scaleY:0.876,x:-19.5,y:-47.6}},{t:this.shape_13,p:{scaleX:0.876,scaleY:0.876,x:-41.6,y:-46.1}},{t:this.shape_12,p:{scaleX:0.876,scaleY:0.876,x:-22.6,y:-50.3}},{t:this.instance,p:{scaleX:0.876,scaleY:0.876,x:-42.6,y:-66.9}},{t:this.shape_11,p:{scaleX:0.876,scaleY:0.876,x:-37.7,y:-42.8}},{t:this.shape_10,p:{scaleX:0.876,scaleY:0.876,x:-6.4,y:-38.3}},{t:this.shape_9,p:{scaleX:0.876,scaleY:0.876,x:1,y:-74.3}},{t:this.shape_8,p:{scaleX:0.876,scaleY:0.876,x:0.6,y:-80.5}},{t:this.shape_7,p:{scaleX:0.876,scaleY:0.876,x:-6.9,y:-31.2}},{t:this.shape_6,p:{scaleX:0.876,scaleY:0.876,x:-1.2,y:-25.5}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-108,125.1,219.7);


(lib.btn_pend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBNIhJhgIAABgIgiAAIAAiZIAgAAIBLBiIAAhiIAiAAIAACZg");
	this.shape.setTransform(89.1,90.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBNIgOghIg/AAIgPAhIgkAAIBCiZIAgAAIBDCZgAgTANIAmAAIgTgrg");
	this.shape_1.setTransform(70.9,90.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguA8QgTgSAAgiIAAhVIAiAAIAABUQAAATAJALQAIAKAOAAQAOAAAJgKQAIgLAAgTIAAhUIAjAAIAABVQAAAigTASQgSASgdAAQgcAAgSgSg");
	this.shape_2.setTransform(53.1,91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAiAAIAAB7IBBAAIAAAeg");
	this.shape_3.setTransform(37.9,90.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguA8QgTgSAAgiIAAhVIAiAAIAABUQAAATAJALQAIAKAOAAQAOAAAJgKQAIgLAAgTIAAhUIAjAAIAABVQAAAigTASQgSASgdAAQgcAAgSgSg");
	this.shape_4.setTransform(21.3,91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBNIAAg9Ig8AAIAAA9IgjAAIAAiZIAjAAIAABAIA8AAIAAhAIAiAAIAACZg");
	this.shape_5.setTransform(3.1,90.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBNIgPghIg/AAIgPAhIgkAAIBDiZIAfAAIBDCZgAgTANIAmAAIgTgrg");
	this.shape_6.setTransform(-14.5,90.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFBNIAAiZIA3AAQAoAAAWAUQAWAVAAAjQAAAjgWAVQgVAVgrAAgAgiAvIAVAAQAXAAAMgMQANgMAAgXQAAgWgNgLQgMgNgZAAIgTAAg");
	this.shape_7.setTransform(-32.5,90.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlBNIhIhgIAABgIgjAAIAAiZIAgAAIBLBiIAAhiIAiAAIAACZg");
	this.shape_8.setTransform(-50.7,90.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4BNIAAiZIBvAAIAAAfIhMAAIAAAgIBEAAIAAAbIhEAAIAAAhIBOAAIAAAeg");
	this.shape_9.setTransform(-67.5,90.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BNIAAiZIA3AAQAhAAARAOQAQAOAAAcQAAAbgRAOQgQANghAAIgUAAIAAArgAgZAEIAWAAQAQABAHgHQAGgGAAgOQAAgNgIgFQgIgHgQAAIgTAAg");
	this.shape_10.setTransform(-83.7,90.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D4950").s().p("AgsBNIAAjNIBZA0IAADNg");
	this.shape_11.setTransform(-16.5,-24.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#485760").s().p("Am4DLIMYnJIBZA0IsYHJg");
	this.shape_12.setTransform(23.2,-58.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9D2D2").s().p("AjghJIAAhvIHBECIAABvg");
	this.shape_13.setTransform(-27.6,-32.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA4F4F").s().p("AmLDTIMXnJIAAAkIsXHJg");
	this.shape_14.setTransform(34.6,-49.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA4F4F").s().p("Aj3h8IAAgkIHvEdIAAAkg");
	this.shape_15.setTransform(-29.8,-41.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFEEEE").s().p("AmBCnIMDm8IAABvIsDG8g");
	this.shape_16.setTransform(33.5,-41.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA4F4F").s().p("AgWBbIAAjPIAtAaIAADPg");
	this.shape_17.setTransform(-52.3,-45.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C6C").s().p("AqDBWIMYnJIHvEeIsYHJg");
	this.shape_18.setTransform(9.8,-65.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA4F4F").s().p("Aj3h8IAAgkIHvEdIAAAkg");
	this.shape_19.setTransform(-29.8,-24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA4F4F").s().p("AmLDTIMXnJIAAAkIsXHJg");
	this.shape_20.setTransform(34.6,-32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F26C6C").s().p("AqDBWIMYnJIHvEeIsYHJg");
	this.shape_21.setTransform(9.8,-48.7);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(3.3,-10.3,1,1,0,0,0,33.6,6.2);
	this.instance.alpha = 0.25;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE428E").s().p("Am5D0Qi4hlAAiPQAAiOC4hlQC3hmECAAQEDAAC3BmQC4BlgBCOQABCPi4BlQi3BlkDAAQkCAAi3hlg");
	this.shape_22.setTransform(3.3,-10.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#813051").s().p("AmrD8QizhdgQiHIgDAAIAAinIA7AAQBLhbCXg2QCbg4C5AAQC6AACcA4QCXA2BLBbIA1AAIAABoQAFAXgBAQQABCPi4BlQi3BlkDAAQj2AAi1hdg");
	this.shape_23.setTransform(3.3,5.3);

	this.instance_1 = new lib.Path_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.4,28.9,1,1,0,0,0,62.6,34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAqBZIhThvIAABvIgoAAIAAixIAlAAIBWByIAAhyIAoAAIAACxg");
	this.shape_24.setTransform(103.2,105.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA2BZIgRgnIhJAAIgRAnIgqAAIBNixIAlAAIBNCxgAgWAQIAsAAIgWgzg");
	this.shape_25.setTransform(82.1,105.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag2BFQgVgVAAgmIAAhjIAnAAIAABiQAAAVAKAMQAKANAQAAQARAAAKgNQAJgMAAgVIAAhiIAoAAIAABjQAAAngVAUQgWAVghAAQggAAgWgVg");
	this.shape_26.setTransform(61.5,105.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIAoAAIAACOIBLAAIAAAjg");
	this.shape_27.setTransform(43.8,105.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag2BFQgVgVAAgmIAAhjIAnAAIAABiQAAAVAKAMQAKANAQAAQARAAAKgNQAJgMAAgVIAAhiIAoAAIAABjQAAAngVAUQgWAVghAAQggAAgWgVg");
	this.shape_28.setTransform(24.7,105.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAjBZIAAhGIhFAAIAABGIgoAAIAAixIAoAAIAABKIBFAAIAAhKIAoAAIAACxg");
	this.shape_29.setTransform(3.6,105.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA1BZIgQgnIhKAAIgQAnIgqAAIBMixIAmAAIBNCxgAgVAQIArAAIgWgzg");
	this.shape_30.setTransform(-16.7,105.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhQBZIAAixIA/AAQAvAAAZAYQAaAWAAAqQAAAogZAZQgZAYgyAAgAgoA2IAZAAQAaAAAPgOQAPgOAAgaQAAgZgPgOQgPgOgdAAIgWAAg");
	this.shape_31.setTransform(-37.6,105.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAqBZIhThvIAABvIgoAAIAAixIAlAAIBWByIAAhyIAoAAIAACxg");
	this.shape_32.setTransform(-58.7,105.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhBBZIAAixICAAAIAAAkIhYAAIAAAkIBPAAIAAAhIhPAAIAAAlIBaAAIAAAjg");
	this.shape_33.setTransform(-78.1,105.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhFBZIAAixIA/AAQAnAAATAQQASAQAAAhQABAggUAPQgSAPgnAAIgYAAIAAAygAgeAFIAbAAQATAAAHgHQAHgIAAgPQAAgQgJgHQgKgGgSAAIgXAAg");
	this.shape_34.setTransform(-96.8,105.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAfBBIg9hQIAABQIgdAAIAAiBIAbAAIA/BTIAAhTIAdAAIAACBg");
	this.shape_35.setTransform(75.1,76.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAnBBIgMgcIg1AAIgMAcIgfAAIA4iBIAbAAIA4CBgAgPALIAfAAIgQgkg");
	this.shape_36.setTransform(59.8,76.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgmAyQgQgPgBgcIAAhHIAdAAIAABGQAAAPAHAKQAIAIALABQANgBAGgIQAIgKgBgPIAAhGIAdAAIAABHQAAAcgPAPQgQAPgYAAQgXAAgPgPg");
	this.shape_37.setTransform(44.7,76.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgpBBIAAiBIAdAAIAABnIA2AAIAAAag");
	this.shape_38.setTransform(31.9,76.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgmAyQgRgPABgcIAAhHIAdAAIAABGQgBAPAIAKQAHAIALABQANgBAGgIQAIgKAAgPIAAhGIAcAAIAABHQAAAcgPAPQgPAPgZAAQgXAAgPgPg");
	this.shape_39.setTransform(18,76.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAaBBIAAgzIgzAAIAAAzIgdAAIAAiBIAdAAIAAA2IAzAAIAAg2IAdAAIAACBg");
	this.shape_40.setTransform(2.6,76.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAnBBIgMgcIg1AAIgMAcIgfAAIA4iBIAbAAIA4CBgAgPALIAgAAIgRgkg");
	this.shape_41.setTransform(-12.2,76.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag6BBIAAiBIAuAAQAiAAASARQATARAAAeQAAAegSARQgSASgkAAgAgdAnIASAAQATAAALgKQALgKAAgTQAAgSgLgKQgLgLgVAAIgQAAg");
	this.shape_42.setTransform(-27.4,76.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAfBBIg9hQIAABQIgdAAIAAiBIAbAAIA/BTIAAhTIAdAAIAACBg");
	this.shape_43.setTransform(-42.8,76.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgvBBIAAiBIBdAAIAAAaIhAAAIAAAbIA5AAIAAAXIg5AAIAAAbIBCAAIAAAag");
	this.shape_44.setTransform(-56.8,76.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgzBBIAAiBIAuAAQAdAAANAMQAOALABAYQgBAXgOAMQgOALgbAAIgRAAIAAAkgAgVAEIATAAQANAAAFgFQAFgGABgLQAAgMgHgEQgHgFgNAAIgQAAg");
	this.shape_45.setTransform(-70.5,76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:62.6,regY:34.6,scaleX:1,scaleY:1,x:3.4,y:28.9}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:3.3,y:5.3}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:3.3,y:-10.7}},{t:this.instance,p:{scaleX:1,scaleY:1,x:3.3,y:-10.3,regY:6.2}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:9.8,y:-48.7}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:34.6,y:-32.7}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:-29.8,y:-24.1}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:9.8,y:-65.8}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:-52.3,y:-45.5}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:33.5,y:-41.8}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:-29.8,y:-41.2}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:34.6,y:-49.8}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:-27.6,y:-32.5}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:23.2,y:-58.1}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:-16.5,y:-24.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1,p:{regX:62.5,regY:34.5,scaleX:1.157,scaleY:1.157,x:3.8,y:33.4}},{t:this.shape_23,p:{scaleX:1.157,scaleY:1.157,x:3.9,y:6.2}},{t:this.shape_22,p:{scaleX:1.157,scaleY:1.157,x:3.9,y:-12.4}},{t:this.instance,p:{scaleX:1.157,scaleY:1.157,x:3.8,y:-11.9,regY:6.2}},{t:this.shape_21,p:{scaleX:1.157,scaleY:1.157,x:11.4,y:-56.4}},{t:this.shape_20,p:{scaleX:1.157,scaleY:1.157,x:40,y:-37.8}},{t:this.shape_19,p:{scaleX:1.157,scaleY:1.157,x:-34.5,y:-27.8}},{t:this.shape_18,p:{scaleX:1.157,scaleY:1.157,x:11.4,y:-76.2}},{t:this.shape_17,p:{scaleX:1.157,scaleY:1.157,x:-60.5,y:-52.7}},{t:this.shape_16,p:{scaleX:1.157,scaleY:1.157,x:38.8,y:-48.4}},{t:this.shape_15,p:{scaleX:1.157,scaleY:1.157,x:-34.5,y:-47.6}},{t:this.shape_14,p:{scaleX:1.157,scaleY:1.157,x:40,y:-57.6}},{t:this.shape_13,p:{scaleX:1.157,scaleY:1.157,x:-31.9,y:-37.6}},{t:this.shape_12,p:{scaleX:1.157,scaleY:1.157,x:26.9,y:-67.2}},{t:this.shape_11,p:{scaleX:1.157,scaleY:1.157,x:-19,y:-28.8}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.instance_1,p:{regX:62.6,regY:34.6,scaleX:0.843,scaleY:0.843,x:2.9,y:24.4}},{t:this.shape_23,p:{scaleX:0.843,scaleY:0.843,x:2.8,y:4.5}},{t:this.shape_22,p:{scaleX:0.843,scaleY:0.843,x:2.8,y:-9}},{t:this.instance,p:{scaleX:0.843,scaleY:0.843,x:2.8,y:-8.7,regY:6.1}},{t:this.shape_21,p:{scaleX:0.843,scaleY:0.843,x:8.3,y:-41.1}},{t:this.shape_20,p:{scaleX:0.843,scaleY:0.843,x:29.1,y:-27.5}},{t:this.shape_19,p:{scaleX:0.843,scaleY:0.843,x:-25.1,y:-20.3}},{t:this.shape_18,p:{scaleX:0.843,scaleY:0.843,x:8.3,y:-55.4}},{t:this.shape_17,p:{scaleX:0.843,scaleY:0.843,x:-44.1,y:-38.3}},{t:this.shape_16,p:{scaleX:0.843,scaleY:0.843,x:28.2,y:-35.2}},{t:this.shape_15,p:{scaleX:0.843,scaleY:0.843,x:-25.1,y:-34.7}},{t:this.shape_14,p:{scaleX:0.843,scaleY:0.843,x:29.1,y:-41.9}},{t:this.shape_13,p:{scaleX:0.843,scaleY:0.843,x:-23.2,y:-27.4}},{t:this.shape_12,p:{scaleX:0.843,scaleY:0.843,x:19.5,y:-48.9}},{t:this.shape_11,p:{scaleX:0.843,scaleY:0.843,x:-13.9,y:-20.9}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.7,-103,194.4,209.6);


(lib.btn_musik = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btn_stop.addEventListener("click", stop_musik.bind(this));
		function stop_musik()
		{
			createjs.Sound.stop("musik");
			this.gotoAndStop(1);
		}
		
		createjs.Sound.play("musik");
	}
	this.frame_1 = function() {
		this.stop();
		this.btn_play.addEventListener("click", play_musik.bind(this));
		function play_musik()
		{
			createjs.Sound.play("musik");
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.btn_stop = new lib.Symbol2();
	this.btn_stop.name = "btn_stop";
	this.btn_stop.parent = this;
	this.btn_stop.setTransform(-2,-1);
	new cjs.ButtonHelper(this.btn_stop, 0, 1, 2);

	this.btn_play = new lib.btn_play();
	this.btn_play.name = "btn_play";
	this.btn_play.parent = this;
	this.btn_play.setTransform(1.5,1);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_stop}]}).to({state:[{t:this.btn_play}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-76,150.8,150.8);


(lib.btn_materi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBNIAAiZIAhAAIAACZg");
	this.shape.setTransform(40.4,106.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBNIghgxIgYAAIAAAxIgiAAIAAiZIA6AAQAjAAAPANQAPALAAAcQAAAkgdAKIAnA3gAggAAIAZAAQARgBAGgFQAGgGAAgMQAAgNgGgEQgHgFgPgBIgaAAg");
	this.shape_1.setTransform(28.7,106.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BNIAAiZIBtAAIAAAfIhLAAIAAAfIBDAAIAAAcIhDAAIAAAhIBNAAIAAAeg");
	this.shape_2.setTransform(12.3,106.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBNIAAh7IgsAAIAAgeIB5AAIAAAeIgsAAIAAB7g");
	this.shape_3.setTransform(-2.7,106.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAuBNIgOghIhAAAIgNAhIglAAIBCiZIAhAAIBCCZgAgSANIAlAAIgTgrg");
	this.shape_4.setTransform(-18.6,106.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0BNIAAhgIgqBTIgTAAIgqhTIAABgIgiAAIAAiZIAvAAIAmBUIAohUIAuAAIAACZg");
	this.shape_5.setTransform(-37.8,106.4);

	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-44.3,1,1,0,0,0,29.4,60.1);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.9,-51.7,1,1,0,0,0,29.3,60.1);

	this.instance_2 = new lib.Group();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.7,-58.3,1,1,0,0,0,29.3,60.1);

	this.instance_3 = new lib.Path_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,7,1,1,0,0,0,33.6,6.2);
	this.instance_3.alpha = 0.25;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE428E").s().p("Am5D0Qi4hlAAiPQAAiOC4hlQC3hmECAAQEDAAC4BmQC2BlAACOQAACPi2BlQi4BlkDAAQkCAAi3hlg");
	this.shape_6.setTransform(0,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#813051").s().p("AmrD8QiyhdgSiHIgCAAIAAinIA6AAQBMhbCXg2QCbg4C5AAQC6AACbA4QCXA2BMBbIA1AAIAABoQAEAVAAASQAACPi2BlQi4BlkDAAQj2AAi1hdg");
	this.shape_7.setTransform(0,20.8);

	this.instance_4 = new lib.Path_3_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,44.4,1,1,0,0,0,62.6,34.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBdIAAi5IApAAIAAC5g");
	this.shape_8.setTransform(48.9,128.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeBdIgog7IgdAAIAAA7IgpAAIAAi5IBGAAQArAAASAPQATAOAAAhQAAAsgkANIAvBCgAgngBIAfAAQAUAAAIgHQAHgHAAgPQAAgPgIgGQgIgFgTAAIgfAAg");
	this.shape_9.setTransform(34.7,128.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBdIAAi5ICFAAIAAAlIhbAAIAAAmIBSAAIAAAjIhSAAIAAAmIBfAAIAAAlg");
	this.shape_10.setTransform(14.9,128.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBdIAAiVIg0AAIAAgkICRAAIAAAkIg1AAIAACVg");
	this.shape_11.setTransform(-3.3,128.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA4BdIgRgoIhNAAIgRAoIgtAAIBRi5IAnAAIBRC5gAgWARIAtAAIgXg2g");
	this.shape_12.setTransform(-22.5,128.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA+BdIAAh0IgyBlIgYAAIgyhlIAAB0IgpAAIAAi5IA4AAIAvBlIAwhlIA4AAIAAC5g");
	this.shape_13.setTransform(-45.8,128.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBEIAAiHIAdAAIAACHg");
	this.shape_14.setTransform(35.8,94.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWBEIgdgrIgVAAIAAArIgeAAIAAiHIAzAAQAfAAANALQAOAKAAAYQAAAggaAJIAjAxgAgcgBIAWAAQAPAAAFgFQAGgFAAgLQAAgLgGgEQgGgEgNAAIgXAAg");
	this.shape_15.setTransform(25.5,94.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxBEIAAiHIBhAAIAAAbIhDAAIAAAcIA8AAIAAAZIg8AAIAAAcIBFAAIAAAbg");
	this.shape_16.setTransform(10.9,94.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBEIAAhtIgnAAIAAgaIBrAAIAAAaIgnAAIAABtg");
	this.shape_17.setTransform(-2.4,94.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AApBEIgNgdIg4AAIgMAdIghAAIA7iHIAdAAIA7CHgAgQAMIAhAAIgRgng");
	this.shape_18.setTransform(-16.5,94.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAuBEIAAhVIglBKIgRAAIglhKIAABVIgeAAIAAiHIApAAIAiBKIAjhKIApAAIAACHg");
	this.shape_19.setTransform(-33.5,94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:62.6,scaleX:1,scaleY:1,x:0.1,y:44.4}},{t:this.shape_7,p:{scaleX:1,scaleY:1,y:20.8}},{t:this.shape_6,p:{scaleX:1,scaleY:1,y:4.8}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:1,y:7}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:8.7,y:-58.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:-2.9,y:-51.7,regY:60.1}},{t:this.instance,p:{regX:29.4,scaleX:1,scaleY:1,x:-15.1,y:-44.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_4,p:{regX:62.5,scaleX:1.211,scaleY:1.211,x:0,y:53.8}},{t:this.shape_7,p:{scaleX:1.211,scaleY:1.211,y:25.2}},{t:this.shape_6,p:{scaleX:1.211,scaleY:1.211,y:5.8}},{t:this.instance_3,p:{scaleX:1.211,scaleY:1.211,x:1.2,y:8.4}},{t:this.instance_2,p:{scaleX:1.211,scaleY:1.211,x:10.6,y:-70.6}},{t:this.instance_1,p:{scaleX:1.211,scaleY:1.211,x:-3.5,y:-62.5,regY:60.1}},{t:this.instance,p:{regX:29.3,scaleX:1.211,scaleY:1.211,x:-18.3,y:-53.6}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.instance_4,p:{regX:62.6,scaleX:0.887,scaleY:0.887,x:0.1,y:39.3}},{t:this.shape_7,p:{scaleX:0.887,scaleY:0.887,y:18.5}},{t:this.shape_6,p:{scaleX:0.887,scaleY:0.887,y:4.3}},{t:this.instance_3,p:{scaleX:0.887,scaleY:0.887,x:0.9,y:6.2}},{t:this.instance_2,p:{scaleX:0.887,scaleY:0.887,x:7.7,y:-51.7}},{t:this.instance_1,p:{scaleX:0.887,scaleY:0.887,x:-2.6,y:-45.9,regY:60}},{t:this.instance,p:{regX:29.3,scaleX:0.887,scaleY:0.887,x:-13.4,y:-39.2}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,-118.4,125.1,240.5);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898989").s().p("AliilIAAhRILFGcIAABRg");
	this.shape.setTransform(36.8,71.2);

	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(56.9,55.6,1,1,0,0,0,55.6,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3C2C0").s().p("AmSDAQAhgeAmghQBNhBA0geQAzgdBOgYQAogMAhgIIBJhBQBPhCAygdQA1geBMgYQAygPAWgEIAABRIl6DZQgDgHgHgCQgHgBgIAEQgRAKgHAYIl6Dbg");
	this.shape_1.setTransform(112.6,68.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545D").s().p("AjCBmIGFjhQgBAIAAAEQAAAHABADImFDhg");
	this.shape_2.setTransform(90.6,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D5B66").s().p("AomhdIGHjhILFGbImGDig");
	this.shape_3.setTransform(55.1,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4147").s().p("AlijCIAAgWILFGcIAAAVg");
	this.shape_4.setTransform(35.5,77);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.2,35.9,1,1,0,0,0,45.6,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C545D").s().p("AgOAiQgHgCgDgHQgBgDAAgHQgBgEACgIQAHgXARgKQAIgFAHACQAHACADAHQACAEAAAGIgCALQgHAYgSAKQgFADgGAAIgDAAg");
	this.shape_5.setTransform(112.6,73.7);

	this.instance_2 = new lib.ClipGroup_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.9,51.7,1,1,0,0,0,36.8,22.3);

	this.instance_3 = new lib.ClipGroup_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.8,54.9,1,1,0,0,0,35.9,22.1);

	this.instance_4 = new lib.ClipGroup_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.1,49.8,1,1,0,0,0,36.5,20.8);

	this.instance_5 = new lib.ClipGroup_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.4,50.3,1,1,0,0,0,35.9,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C545D").s().p("AjBBwQAAgGgBgEIGFjhIAAAWImFDhg");
	this.shape_6.setTransform(134.6,60.9);

	this.instance_6 = new lib.ClipGroup_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.7,51.3,1,1,0,0,0,35.6,21.4);

	this.instance_7 = new lib.ClipGroup_7_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79.7,51.6,1,1,0,0,0,35.6,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,7.3,154.2,91.5), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898989").s().p("AliilIAAhRILFGcIAABRg");
	this.shape.setTransform(36.8,71.2);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(56.9,55.6,1,1,0,0,0,55.6,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3C2C0").s().p("AmSDAQAhgeAmghQBNhBA0geQAzgdBOgYQAogMAhgIIBJhBQBPhCAygdQA1geBMgYQAygPAWgEIAABRIl6DZQgDgHgHgCQgHgBgIAEQgRAKgHAYIl6Dbg");
	this.shape_1.setTransform(112.6,68.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545D").s().p("AjCBmIGFjhQgBAIAAAEQAAAHABADImFDhg");
	this.shape_2.setTransform(90.6,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D5B66").s().p("AomhdIGHjhILFGbImGDig");
	this.shape_3.setTransform(55.1,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4147").s().p("AlijCIAAgWILFGcIAAAVg");
	this.shape_4.setTransform(35.5,77);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.2,35.9,1,1,0,0,0,45.6,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C545D").s().p("AgOAiQgHgCgDgHQgBgDAAgHQgBgEACgIQAHgXARgKQAIgFAHACQAHACADAHQACAEAAAGIgCALQgHAYgSAKQgFADgGAAIgDAAg");
	this.shape_5.setTransform(112.6,73.7);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.9,51.7,1,1,0,0,0,36.8,22.3);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.8,54.9,1,1,0,0,0,35.9,22.1);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.1,49.8,1,1,0,0,0,36.5,20.8);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.4,50.3,1,1,0,0,0,35.9,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C545D").s().p("AjBBwQAAgGgBgEIGFjhIAAAWImFDhg");
	this.shape_6.setTransform(134.6,60.9);

	this.instance_6 = new lib.ClipGroup_6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.7,51.3,1,1,0,0,0,35.6,21.4);

	this.instance_7 = new lib.ClipGroup_7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79.7,51.6,1,1,0,0,0,35.6,21.7);

	this.instance_8 = new lib.ClipGroup_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(107.3,24.3,1,1,0,0,0,45.5,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D5B66").s().p("AomhdIGIjhILFGbImHDig");
	this.shape_7.setTransform(99.1,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,154.2,98.8), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898989").s().p("AliilIAAhQILFGbIAABQg");
	this.shape.setTransform(36.8,71.2);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(56.9,55.6,1,1,0,0,0,55.6,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3C2C0").s().p("AmSDAQAhgeAnghQBMhBA0geQAzgdBOgYQAogMAhgIIBJhBQBPhCAygdQA1geBMgYQAygPAWgEIAABRIl6DZQgDgHgHgBQgHgCgIAFQgRAKgHAYIl6Dag");
	this.shape_1.setTransform(112.6,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545D").s().p("AjCBmIGFjhIgBAMQAAAHABADImFDhg");
	this.shape_2.setTransform(90.6,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D5B66").s().p("AomhdIGHjhILFGbImGDig");
	this.shape_3.setTransform(55.1,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4147").s().p("AlijCIAAgWILFGcIAAAVg");
	this.shape_4.setTransform(35.5,77);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.2,35.9,1,1,0,0,0,45.6,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C545D").s().p("AgOAiQgHgCgDgHQgBgDAAgHIABgMQAHgXARgKQAIgFAHACQAHACADAHQACAEAAAGIgCALQgHAYgSAKQgGADgFAAIgDAAg");
	this.shape_5.setTransform(112.6,73.7);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.9,51.7,1,1,0,0,0,36.8,22.3);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.8,54.9,1,1,0,0,0,35.9,22.1);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.1,49.8,1,1,0,0,0,36.5,20.8);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.4,50.3,1,1,0,0,0,35.9,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C545D").s().p("AjBBwQAAgGgBgEIGFjhIAAAWImFDhg");
	this.shape_6.setTransform(134.7,60.9);

	this.instance_6 = new lib.ClipGroup_6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.7,51.3,1,1,0,0,0,35.6,21.4);

	this.instance_7 = new lib.ClipGroup_7_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79.7,51.6,1,1,0,0,0,35.6,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,7.3,154.2,91.5), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#898989").s().p("AliilIAAhQILFGbIAABQg");
	this.shape.setTransform(36.8,71.2);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(56.9,55.6,1,1,0,0,0,55.6,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3C2C0").s().p("AmSDAQAhgeAnghQBMhBA0geQAzgdBOgYQAogMAhgIIBJhBQBPhCAygdQA1geBMgYQAygPAWgEIAABRIl6DZQgDgHgHgBQgHgCgIAFQgRAKgHAYIl6Dag");
	this.shape_1.setTransform(112.6,68.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C545D").s().p("AjCBmIGFjhIgBAMQAAAHABADImFDhg");
	this.shape_2.setTransform(90.6,86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D5B66").s().p("AomhdIGHjhILFGbImGDig");
	this.shape_3.setTransform(55.1,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4147").s().p("AlijCIAAgWILFGcIAAAVg");
	this.shape_4.setTransform(35.5,77);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.2,35.9,1,1,0,0,0,45.6,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C545D").s().p("AgOAiQgHgCgDgHQgBgDAAgHIABgMQAHgXARgKQAIgFAHACQAHACADAHQACAEAAAGIgCALQgHAYgSAKQgGADgFAAIgDAAg");
	this.shape_5.setTransform(112.6,73.7);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.9,51.7,1,1,0,0,0,36.8,22.3);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.8,54.9,1,1,0,0,0,35.9,22.1);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.1,49.8,1,1,0,0,0,36.5,20.8);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(79.4,50.3,1,1,0,0,0,35.9,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C545D").s().p("AjBBwQAAgGgBgEIGFjhIAAAWImFDhg");
	this.shape_6.setTransform(134.7,60.9);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.7,51.3,1,1,0,0,0,35.6,21.4);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(79.7,51.6,1,1,0,0,0,35.6,21.7);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(107.3,24.3,1,1,0,0,0,45.5,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D5B66").s().p("AolhdIGGjhILFGbImGDig");
	this.shape_7.setTransform(99.1,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,154.2,98.8), null);


(lib.btn_kom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBNIAAiZIAhAAIAACZg");
	this.shape.setTransform(75.7,86.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8A0IAUgZQAaAXATAAQAKAAAFgFQAGgDgBgHQABgIgGgDQgGgFgQgEQgagGgNgJQgNgLAAgWQAAgVAQgMQAQgNAXAAQAPAAAQAGQAPAFALAKIgRAZQgUgPgVAAQgIAAgFAEQgFAEAAAGQAAAHAGAFQAGADAVAGQAWAFAMAKQAMAKAAAWQAAAUgPANQgQAMgaABQgjAAgdgcg");
	this.shape_1.setTransform(64.4,86.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBNIhHhgIAABgIgjAAIAAiZIAgAAIBKBiIAAhiIAjAAIAACZg");
	this.shape_2.setTransform(48.1,86.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BNIAAiZIBuAAIAAAfIhMAAIAAAgIBDAAIAAAcIhDAAIAAAfIBNAAIAAAfg");
	this.shape_3.setTransform(31.4,86.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBNIAAh7IgsAAIAAgeIB5AAIAAAeIgsAAIAAB7g");
	this.shape_4.setTransform(16.3,86.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BNIAAiZIBvAAIAAAfIhMAAIAAAgIBEAAIAAAcIhEAAIAAAfIBOAAIAAAfg");
	this.shape_5.setTransform(1.9,86.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BNIAAiZIA3AAQAhAAARAOQAQANAAAdQAAAcgQANQgRANghAAIgUAAIAAArgAgZAFIAWAAQAQAAAHgGQAGgIAAgNQAAgNgIgFQgIgHgQABIgTAAg");
	this.shape_6.setTransform(-14.3,86.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA0BNIAAhgIgqBTIgTAAIgqhTIAABgIgiAAIAAiZIAvAAIAmBTIAohTIAuAAIAACZg");
	this.shape_7.setTransform(-33.3,86.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4A4QgYgWAAgiQAAggAYgXQAXgYAhAAQAiAAAXAYQAYAXAAAgQAAAigYAWQgXAYgiAAQghAAgXgYgAgfgiQgNAOAAAUQAAAVANAOQANAPASAAQATAAAOgPQANgOAAgVQAAgUgNgOQgOgOgTAAQgSAAgNAOg");
	this.shape_8.setTransform(-53.9,86.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBNIgsg9IgPARIAAAsIgjAAIAAiZIAjAAIAABAIA5hAIAqAAIg9BEIAeAoIAfAtg");
	this.shape_9.setTransform(-71.1,86.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ADACAC").s().p("AiPBPQA9gtBGgpQBDgnBSgkIAGAFQhQAjhEAoQhJApg5Asg");
	this.shape_10.setTransform(-45.8,-60.9);

	this.instance = new lib.Group_1_3();
	this.instance.parent = this;
	this.instance.setTransform(-18.9,-45.3,1,1,0,0,0,33,19.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ADACAC").s().p("AiOBPIAHgFQA5gqBDgmQBBgnBKggIAJgFIAGAFIgJAEQhMAig9AlQhDAmg5ApIgIAGg");
	this.shape_11.setTransform(-25.2,-48.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ADACAC").s().p("AiOBPIAEgDQA6gsBEgnQBEgnBLghIAGgDIAHAFIgGADQhHAehIAqQhDAlg6AtIgFADg");
	this.shape_12.setTransform(-33.4,-53.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ADACAC").s().p("AiPBPIACgBQA/gwBCglQBAgmBTgkIACgBIAGAEIgBABQhLAghIArQhGAng7AtIgBABg");
	this.shape_13.setTransform(-41.7,-58.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ADACAC").s().p("AiPBPQA9guBGgnQBIgqBOgiIAFAFQhPAihEAoQhFAng9Avg");
	this.shape_14.setTransform(-6.4,-84.6);

	this.instance_1 = new lib.Group_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.6,-69,1,1,0,0,0,33,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ADACAC").s().p("AiPBPIAIgFQA5gqBDgmQA9gkBOgjIAJgFIAGAFIgJAEQhDAehHApQhEAng3ApIgIAFg");
	this.shape_15.setTransform(14.3,-72.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ADACAC").s().p("AiOBPIAEgDQA/gvA/gjQA/gmBQgjIAGgDIAHAEIgGADQhOAjhBAmQhFAng5ArIgEADg");
	this.shape_16.setTransform(6.1,-77.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ADACAC").s().p("AiPBPIACgBQA7gtBGgoQBAgmBTgkIACgBIAHAEIgCABQhQAjhDAnQhDAng9AuIgCABg");
	this.shape_17.setTransform(-2.2,-82.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAE9E8").s().p("AorhZQAVgWAygpQBMhBA1geQAbgQAigOQAvgTBCgSQAZgIADAAILFGcIgcAHQhAASgxAUQgnARgWAMQg0AehNBCQgnAhggAeg");
	this.shape_18.setTransform(-19.7,-43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9F8F7").s().p("AorhZQB6hxBQguQAbgPAjgPQAsgTA6gQQAfgIAFAAILFGbIgkAJQg3APgvATQghANgdARQgyAdhPBCQgoAhgiAfg");
	this.shape_19.setTransform(20.6,-66.4);

	this.instance_2 = new lib.Group_26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,-45.7,1,1,0,0,0,77,53);

	this.instance_3 = new lib.Group_19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-49.3,1,1,0,0,0,77,49.4);

	this.instance_4 = new lib.Path_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.3,-10.9,1,1,0,0,0,33.6,6.2);
	this.instance_4.alpha = 0.25;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE428E").s().p("Am6D0Qi2hlAAiPQAAiOC2hlQC4hmECAAQEDAAC4BmQC2BlAACOQAACPi2BlQi4BlkDAAQkCAAi4hlg");
	this.shape_20.setTransform(5,-14.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#813051").s().p("AmrD8QiyhdgRiHIgCAAIAAinIA5AAQBMhbCXg2QCbg4C5AAQC6AACbA4QCYA2BLBbIA1AAIAABoQAEAXAAAQQAACPi2BlQi4BlkDAAQj2AAi1hdg");
	this.shape_21.setTransform(5,1.1);

	this.instance_5 = new lib.Path_3_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5,24.7,1,1,0,0,0,62.6,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUBcIAAi3IApAAIAAC3g");
	this.shape_22.setTransform(91,104.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhIA/IAYgeQAeAaAZAAQALAAAHgFQAGgFAAgIQAAgJgHgEQgHgFgTgFQgggIgQgLQgPgMABgbQgBgaAUgOQASgOAbgBQATAAASAHQATAGAOAMIgVAeQgYgTgZAAQgKAAgGAGQgGAFAAAHQAAAIAHAGQAIAEAZAHQAbAGAOAMQAOANAAAYQAAAagSAPQgTAPgeAAQgsABgighg");
	this.shape_23.setTransform(77.5,104.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAsBcIhXhzIAABzIgpAAIAAi3IAmAAIBaB2IAAh2IAqAAIAAC3g");
	this.shape_24.setTransform(57.9,104.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhDBcIAAi3ICEAAIAAAlIhbAAIAAAmIBSAAIAAAiIhSAAIAAAmIBeAAIAAAkg");
	this.shape_25.setTransform(37.7,104.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBcIAAiUIg0AAIAAgjICRAAIAAAjIg0AAIAACUg");
	this.shape_26.setTransform(19.7,104.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhDBcIAAi3ICEAAIAAAlIhbAAIAAAmIBSAAIAAAiIhSAAIAAAmIBeAAIAAAkg");
	this.shape_27.setTransform(2.3,104.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhJBcIAAi3IBCAAQAqAAATAQQATAQABAjQAAAhgVAQQgTAQgoAAIgZAAIAAAzgAgfAFIAcAAQAUAAAHgHQAHgJABgPQAAgQgKgIQgKgGgUAAIgXAAg");
	this.shape_28.setTransform(-17.2,104.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA+BcIAAhzIgyBkIgXAAIgyhkIAABzIgqAAIAAi3IA4AAIAvBkIAwhkIA4AAIAAC3g");
	this.shape_29.setTransform(-40.1,104.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhEBEQgcgbAAgpQAAgoAcgcQAcgbAoAAQApAAAcAbQAcAcAAAoQAAApgcAbQgcAbgpAAQgoAAgcgbgAgmgpQgQARAAAYQAAAZAQARQAQARAWAAQAXAAAQgRQAQgRAAgZQAAgYgQgRQgQgSgXAAQgWAAgQASg");
	this.shape_30.setTransform(-64.8,104.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBcIg1hJIgTAVIAAA0IgpAAIAAi3IApAAIAABLIBFhLIAzAAIhJBRIAjAwIAmA2g");
	this.shape_31.setTransform(-85.6,104.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_32.setTransform(63.4,72.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgyAsIARgVQAVASARAAQAHAAAFgDQAFgEAAgFQAAgHgFgDQgFgDgNgDQgXgGgKgIQgLgIAAgTQAAgSAOgKQANgKASAAQANAAANAFQANAEAKAIIgPAVQgRgNgRABQgHAAgEADQgEADAAAGQAAAGAFADQAFADASAEQASAFAKAIQAKAJAAASQAAARgNALQgNAKgVABQgeAAgYgXg");
	this.shape_33.setTransform(53.9,72.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAfBAIg9hPIAABPIgcAAIAAh/IAaAAIA/BRIAAhRIAcAAIAAB/g");
	this.shape_34.setTransform(40.3,72.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AguBAIAAh/IBbAAIAAAaIg/AAIAAAaIA5AAIAAAXIg5AAIAAAbIBBAAIAAAZg");
	this.shape_35.setTransform(26.3,72.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNBAIAAhmIglAAIAAgZIBlAAIAAAZIgkAAIAABmg");
	this.shape_36.setTransform(13.8,72.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AguBAIAAh/IBbAAIAAAaIg/AAIAAAaIA5AAIAAAXIg5AAIAAAbIBBAAIAAAZg");
	this.shape_37.setTransform(1.6,72.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgyBAIAAh/IAtAAQAdAAAOALQANAMAAAXQAAAXgOAMQgOALgcgBIgRAAIAAAkgAgWADIAUAAQANABAGgFQAEgGAAgLQAAgLgGgFQgHgFgNABIgRAAg");
	this.shape_38.setTransform(-11.9,72.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AArBAIAAhQIgjBGIgPAAIgjhGIAABQIgdAAIAAh/IAnAAIAgBGIAhhGIAnAAIAAB/g");
	this.shape_39.setTransform(-27.9,72.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgvAvQgTgTgBgcQABgbATgUQAUgSAbgBQAdABATASQATAUAAAbQAAAcgTATQgTAUgdAAQgbAAgUgUgAgagdQgLANAAAQQAAARALAMQALAMAPAAQARAAAKgMQAMgMgBgRQABgQgMgNQgKgMgRABQgPgBgLAMg");
	this.shape_40.setTransform(-45,72.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAXBAIglgyIgNAOIAAAkIgcAAIAAh/IAcAAIAAA1IAvg1IAkAAIgzA4IAYAiIAbAlg");
	this.shape_41.setTransform(-59.5,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{regX:62.6,scaleX:1,scaleY:1,x:5,y:24.7,regY:34.6}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:5,y:1.1}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:5,y:-14.9}},{t:this.instance_4,p:{scaleX:1,scaleY:1,x:-2.3,y:-10.9}},{t:this.instance_3,p:{scaleX:1,scaleY:1,x:0.4,y:-49.3,regY:49.4}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:0.4,y:-45.7}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:20.6,y:-66.4}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:-19.7,y:-43.2}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:-2.2,y:-82.2}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:6.1,y:-77.4}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:14.3,y:-72.6}},{t:this.instance_1,p:{regX:33,scaleX:1,scaleY:1,x:20.6,y:-69,regY:19.1}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:-6.4,y:-84.6}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:-41.7,y:-58.5}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:-33.4,y:-53.7}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:-25.2,y:-48.9}},{t:this.instance,p:{regX:33,scaleX:1,scaleY:1,x:-18.9,y:-45.3}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:-45.8,y:-60.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_5,p:{regX:62.5,scaleX:1.203,scaleY:1.203,x:6,y:29.7,regY:34.6}},{t:this.shape_21,p:{scaleX:1.203,scaleY:1.203,x:6,y:1.3}},{t:this.shape_20,p:{scaleX:1.203,scaleY:1.203,x:6,y:-18}},{t:this.instance_4,p:{scaleX:1.203,scaleY:1.203,x:-2.8,y:-13.1}},{t:this.instance_3,p:{scaleX:1.203,scaleY:1.203,x:0.5,y:-59.2,regY:49.4}},{t:this.instance_2,p:{scaleX:1.203,scaleY:1.203,x:0.5,y:-54.9}},{t:this.shape_19,p:{scaleX:1.203,scaleY:1.203,x:24.8,y:-79.9}},{t:this.shape_18,p:{scaleX:1.203,scaleY:1.203,x:-23.7,y:-52}},{t:this.shape_17,p:{scaleX:1.203,scaleY:1.203,x:-2.7,y:-98.9}},{t:this.shape_16,p:{scaleX:1.203,scaleY:1.203,x:7.3,y:-93.1}},{t:this.shape_15,p:{scaleX:1.203,scaleY:1.203,x:17.2,y:-87.4}},{t:this.instance_1,p:{regX:32.9,scaleX:1.203,scaleY:1.203,x:24.7,y:-82.9,regY:19.1}},{t:this.shape_14,p:{scaleX:1.203,scaleY:1.203,x:-7.7,y:-101.8}},{t:this.shape_13,p:{scaleX:1.203,scaleY:1.203,x:-50.2,y:-70.4}},{t:this.shape_12,p:{scaleX:1.203,scaleY:1.203,x:-40.2,y:-64.6}},{t:this.shape_11,p:{scaleX:1.203,scaleY:1.203,x:-30.3,y:-58.8}},{t:this.instance,p:{regX:32.9,scaleX:1.203,scaleY:1.203,x:-22.8,y:-54.4}},{t:this.shape_10,p:{scaleX:1.203,scaleY:1.203,x:-55.2,y:-73.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.instance_5,p:{regX:62.5,scaleX:0.837,scaleY:0.837,x:4.2,y:20.6,regY:34.5}},{t:this.shape_21,p:{scaleX:0.837,scaleY:0.837,x:4.2,y:0.9}},{t:this.shape_20,p:{scaleX:0.837,scaleY:0.837,x:4.2,y:-12.5}},{t:this.instance_4,p:{scaleX:0.837,scaleY:0.837,x:-1.9,y:-9.1}},{t:this.instance_3,p:{scaleX:0.837,scaleY:0.837,x:0.4,y:-41.3,regY:49.3}},{t:this.instance_2,p:{scaleX:0.837,scaleY:0.837,x:0.4,y:-38.2}},{t:this.shape_19,p:{scaleX:0.837,scaleY:0.837,x:17.3,y:-55.6}},{t:this.shape_18,p:{scaleX:0.837,scaleY:0.837,x:-16.4,y:-36.2}},{t:this.shape_17,p:{scaleX:0.837,scaleY:0.837,x:-1.8,y:-68.8}},{t:this.shape_16,p:{scaleX:0.837,scaleY:0.837,x:5.1,y:-64.8}},{t:this.shape_15,p:{scaleX:0.837,scaleY:0.837,x:12,y:-60.8}},{t:this.instance_1,p:{regX:32.9,scaleX:0.837,scaleY:0.837,x:17.2,y:-57.8,regY:19}},{t:this.shape_14,p:{scaleX:0.837,scaleY:0.837,x:-5.3,y:-70.9}},{t:this.shape_13,p:{scaleX:0.837,scaleY:0.837,x:-34.9,y:-49}},{t:this.shape_12,p:{scaleX:0.837,scaleY:0.837,x:-28,y:-44.9}},{t:this.shape_11,p:{scaleX:0.837,scaleY:0.837,x:-21.1,y:-40.9}},{t:this.instance,p:{regX:33,scaleX:0.837,scaleY:0.837,x:-15.8,y:-37.9}},{t:this.shape_10,p:{scaleX:0.837,scaleY:0.837,x:-38.4,y:-51}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-98.7,163.8,201);


(lib.btn_evaluasi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBNIAAiZIAhAAIAACZg");
	this.shape.setTransform(63.6,98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8A1IAUgaQAaAXATAAQAKgBAFgEQAGgEgBgGQABgIgGgDQgGgFgQgEQgbgGgMgJQgMgLAAgWQAAgWAPgLQAQgMAXgBQAPABAPAFQAPAGAMAJIgRAZQgUgPgVAAQgIAAgFAEQgFAEAAAGQAAAIAGADQAGAFAVAEQAWAGAMAKQAMALAAAVQAAAUgPANQgQANgaAAQgjAAgdgbg");
	this.shape_1.setTransform(52.3,98.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvBNIgPghIhAAAIgNAhIglAAIBDiZIAgAAIBCCZgAgSAOIAlAAIgTgsg");
	this.shape_2.setTransform(36.2,98.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguA8QgTgSAAgiIAAhVIAiAAIAABUQAAATAJALQAIAKAOAAQAOAAAJgKQAIgLAAgTIAAhUIAjAAIAABVQAAAigTASQgSASgdAAQgcAAgSgSg");
	this.shape_3.setTransform(18.4,98.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAjAAIAAB6IBAAAIAAAfg");
	this.shape_4.setTransform(3.2,98.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBNIgPghIhAAAIgOAhIgkAAIBDiZIAfAAIBDCZgAgTAOIAmAAIgTgsg");
	this.shape_5.setTransform(-12.9,98.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBNIg9iZIAlAAIAmBhIAnhhIAlAAIg+CZg");
	this.shape_6.setTransform(-30.5,98.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BNIAAiZIBtAAIAAAfIhLAAIAAAgIBDAAIAAAcIhDAAIAAAfIBNAAIAAAfg");
	this.shape_7.setTransform(-45.8,98.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D54E4E").s().p("AAGAfQgLgEgLgMQgLgMgCgMQgDgMAHgHQAHgGANAEQALAEALAMQAKAMADAMQACANgGAGQgEADgGAAIgKgBg");
	this.shape_8.setTransform(54.8,-107.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F16161").s().p("Aj7EIQgNgEgLgMQgKgMgDgNQgDgMAHgHIIKnUQgGAGACAMQADANALAMQAKAMANAEQAMAEAHgGIoKHUQgEAEgHAAIgIgBg");
	this.shape_9.setTransform(28.3,-83.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E485B").s().p("AAAgMIANAOIgZAKg");
	this.shape_10.setTransform(-4.1,-54.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFEEEE").s().p("AABgwIAzA4IhnApg");
	this.shape_11.setTransform(-0.2,-58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ADACAC").s().p("AiOBPQA8gtBGgpQBEgnBSgkIAGAFQhRAjhEAoQhJApg4Asg");
	this.shape_12.setTransform(-46.3,-48.9);

	this.instance = new lib.Group_1_1();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-33.2,1,1,0,0,0,32.9,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ADACAC").s().p("AiPBPIAIgFQA4gqBEgmQBBgnBKggIAJgFIAGAFIgJAEQhMAig9AlQg/Ajg9AsIgIAGg");
	this.shape_13.setTransform(-25.7,-36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ADACAC").s().p("AiOBPIAEgDQA6gsBEgnQBHgpBIgfIAGgDIAGAFIgFADQhHAehHAqQhDAlg7AtIgFADg");
	this.shape_14.setTransform(-33.9,-41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ADACAC").s().p("AiOBPIABgBQA/gwBCglQBGgoBNgiIACgBIAHAEIgCABQhNAihGApQhGAng6AtIgCABg");
	this.shape_15.setTransform(-42.2,-46.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ADACAC").s().p("AiOBPQA4grBJgqQBIgqBOgiIAHAFQhPAihGAoQhEAng9Avg");
	this.shape_16.setTransform(-6.8,-72.6);

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.1,-56.9,1,1,0,0,0,33,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ADACAC").s().p("AiPBPIAIgFQA5gqBDgmQA+gkBNgjIAJgFIAHAFIgKAEQhDAehHApQhFAng2ApIgIAFg");
	this.shape_17.setTransform(13.8,-60.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ADACAC").s().p("AiPBPIAFgDQA+gvBAgjQA9glBSgkIAGgDIAGAEIgFADQhPAjg/AmQhFAng5ArIgFADg");
	this.shape_18.setTransform(5.6,-65.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ADACAC").s().p("AiOBPIABgBQA7gtBGgoQBAgmBTgkIACgBIAHAEIgDABQhPAjhDAnQhGAog6AtIgCABg");
	this.shape_19.setTransform(-2.7,-70.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAE9E8").s().p("AorhZIBHg/QBNhBA0geQAbgQAigOQAvgTBCgSQAZgIADAAILFGcIgcAHQhAASgxAUQgnARgWAMQg0AehNBCIhHA/g");
	this.shape_20.setTransform(-20.2,-31.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9F8F7").s().p("AoshZQAUgTA2guQBOhBAzgdQAbgPAjgPQAsgTA7gQQAfgIAEAAILGGbIgkAJQg3APgxATQggANgdARQgzAdhOBCIhKBAg");
	this.shape_21.setTransform(20.1,-54.4);

	this.instance_2 = new lib.Group_12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-33.6,1,1,0,0,0,77.1,53);

	this.instance_3 = new lib.Group_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-37.2,1,1,0,0,0,77.1,49.4);

	this.instance_4 = new lib.Path_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.8,1.2,1,1,0,0,0,33.6,6.2);
	this.instance_4.alpha = 0.25;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE428E").s().p("Am6D0Qi3hlABiPQgBiOC3hlQC4hmECAAQEDAAC3BmQC4BlAACOQAACPi4BlQi3BlkDAAQkCAAi4hlg");
	this.shape_22.setTransform(4.5,-2.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#813051").s().p("AmqD8Qi0hdgQiHIgCAAIAAinIA5AAQBMhbCXg2QCbg4C5AAQC6AACbA4QCXA2BMBbIA1AAIAABoQAFAXAAAQQAACPi4BlQi3BlkDAAQj3AAizhdg");
	this.shape_23.setTransform(4.5,13.1);

	this.instance_5 = new lib.Path_3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.5,36.7,1,1,0,0,0,62.6,34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTBZIAAixIAnAAIAACxg");
	this.shape_24.setTransform(73.6,114.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhGA8IAYgdQAdAaAXAAQALAAAGgFQAHgEAAgJQAAgHgHgFQgHgFgSgFQgfgHgPgLQgOgMAAgZQAAgaASgOQASgNAbAAQASAAARAGQASAGANALIgUAdQgXgRgYAAQgKAAgFAFQgGAEAAAIQAAAIAHAFQAHAEAYAGQAaAHAOALQAOAMAAAZQAAAYgSAOQgSAPgdAAQgqAAgiggg");
	this.shape_25.setTransform(60.5,114.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA2BZIgRgnIhKAAIgQAnIgqAAIBMixIAmAAIBNCxgAgWAQIAsAAIgWgzg");
	this.shape_26.setTransform(42,114.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2BFQgVgVAAgmIAAhjIAnAAIAABiQAAAVAKAMQAKANAQAAQARAAAKgNQAJgMAAgVIAAhiIAoAAIAABjQAAAngVAUQgWAVghAAQggAAgWgVg");
	this.shape_27.setTransform(21.3,114.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIAoAAIAACOIBLAAIAAAjg");
	this.shape_28.setTransform(3.7,114.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA1BZIgQgnIhKAAIgQAnIgqAAIBMixIAmAAIBNCxgAgVAQIArAAIgWgzg");
	this.shape_29.setTransform(-14.9,114.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBZIhHixIArAAIAsBxIAthxIArAAIhHCxg");
	this.shape_30.setTransform(-35.3,114.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhBBZIAAixICAAAIAAAkIhYAAIAAAkIBPAAIAAAhIhPAAIAAAlIBbAAIAAAjg");
	this.shape_31.setTransform(-53,114.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOBEIAAiGIAdAAIAACGg");
	this.shape_32.setTransform(55.9,86.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag1AuIASgWQAXATARAAQAIAAAFgDQAFgEAAgGQgBgGgEgEQgFgDgOgEQgYgGgLgIQgLgJAAgTQAAgTAOgLQAOgKATAAQAOAAANAFQAOAEAKAJIgPAWQgSgNgSAAQgHAAgEADQgFAEAAAGQAAAFAGAEQAFADASAFQAUAFAKAIQAKAKAAASQAAASgNAMQgNALgXAAQgfAAgagYg");
	this.shape_33.setTransform(46,86.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AApBEIgNgdIg3AAIgNAdIggAAIA6iGIAcAAIA7CGgAgQAMIAhAAIgRgng");
	this.shape_34.setTransform(31.8,86.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpA0QgQgQAAgdIAAhKIAfAAIAABJQAAAQAHAKQAIAJALAAQANAAAHgJQAIgKAAgQIAAhJIAeAAIAABKQAAAegQAPQgRAQgZAAQgYAAgRgQg");
	this.shape_35.setTransform(16.2,86.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgrBEIAAiGIAfAAIAABrIA4AAIAAAbg");
	this.shape_36.setTransform(2.8,86.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AApBEIgMgdIg5AAIgMAdIggAAIA7iGIAbAAIA7CGgAgQAMIAhAAIgRgng");
	this.shape_37.setTransform(-11.3,86.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMBEIg2iGIAhAAIAhBUIAjhUIAgAAIg2CGg");
	this.shape_38.setTransform(-26.8,86.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgxBEIAAiGIBhAAIAAAbIhCAAIAAAbIA7AAIAAAZIg7AAIAAAcIBEAAIAAAbg");
	this.shape_39.setTransform(-40.3,86.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,x:4.5,y:36.7,regX:62.6}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:4.5,y:13.1}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:4.5,y:-2.9}},{t:this.instance_4,p:{regY:6.2,scaleX:1,scaleY:1,x:-2.8,y:1.2}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:-37.2,regX:77.1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:-33.6,regX:77.1}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:20.1,y:-54.4}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:-20.2,y:-31.1}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:-2.7,y:-70.2}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:5.6,y:-65.4}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:13.8,y:-60.6}},{t:this.instance_1,p:{regY:19.1,scaleX:1,scaleY:1,x:20.1,y:-56.9,regX:33}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:-6.8,y:-72.6}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:-42.2,y:-46.4}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:-33.9,y:-41.6}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:-25.7,y:-36.8}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-19.5,y:-33.2}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:-46.3,y:-48.9}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:-0.2,y:-58.5}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:-4.1,y:-54.8}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:28.3,y:-83.9}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:54.8,y:-107.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_5,p:{scaleX:1.157,scaleY:1.157,x:5.3,y:42.5,regX:62.6}},{t:this.shape_23,p:{scaleX:1.157,scaleY:1.157,x:5.2,y:15.2}},{t:this.shape_22,p:{scaleX:1.157,scaleY:1.157,x:5.2,y:-3.3}},{t:this.instance_4,p:{regY:6.1,scaleX:1.157,scaleY:1.157,x:-3.2,y:1.3}},{t:this.instance_3,p:{scaleX:1.157,scaleY:1.157,y:-43.1,regX:77.1}},{t:this.instance_2,p:{scaleX:1.157,scaleY:1.157,y:-38.9,regX:77.1}},{t:this.shape_21,p:{scaleX:1.157,scaleY:1.157,x:23.3,y:-62.9}},{t:this.shape_20,p:{scaleX:1.157,scaleY:1.157,x:-23.3,y:-36}},{t:this.shape_19,p:{scaleX:1.157,scaleY:1.157,x:-3.1,y:-81.2}},{t:this.shape_18,p:{scaleX:1.157,scaleY:1.157,x:6.4,y:-75.6}},{t:this.shape_17,p:{scaleX:1.157,scaleY:1.157,x:16,y:-70.1}},{t:this.instance_1,p:{regY:19,scaleX:1.157,scaleY:1.157,x:23.3,y:-65.9,regX:33}},{t:this.shape_16,p:{scaleX:1.157,scaleY:1.157,x:-7.9,y:-84}},{t:this.shape_15,p:{scaleX:1.157,scaleY:1.157,x:-48.8,y:-53.7}},{t:this.shape_14,p:{scaleX:1.157,scaleY:1.157,x:-39.3,y:-48.2}},{t:this.shape_13,p:{scaleX:1.157,scaleY:1.157,x:-29.7,y:-42.6}},{t:this.instance,p:{scaleX:1.157,scaleY:1.157,x:-22.5,y:-38.4}},{t:this.shape_12,p:{scaleX:1.157,scaleY:1.157,x:-53.6,y:-56.5}},{t:this.shape_11,p:{scaleX:1.157,scaleY:1.157,x:-0.3,y:-67.7}},{t:this.shape_10,p:{scaleX:1.157,scaleY:1.157,x:-4.8,y:-63.4}},{t:this.shape_9,p:{scaleX:1.157,scaleY:1.157,x:32.8,y:-97}},{t:this.shape_8,p:{scaleX:1.157,scaleY:1.157,x:63.4,y:-124.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.instance_5,p:{scaleX:0.879,scaleY:0.879,x:3.9,y:32.2,regX:62.5}},{t:this.shape_23,p:{scaleX:0.879,scaleY:0.879,x:3.9,y:11.5}},{t:this.shape_22,p:{scaleX:0.879,scaleY:0.879,x:3.9,y:-2.5}},{t:this.instance_4,p:{regY:6.1,scaleX:0.879,scaleY:0.879,x:-2.5,y:1}},{t:this.instance_3,p:{scaleX:0.879,scaleY:0.879,y:-32.7,regX:77}},{t:this.instance_2,p:{scaleX:0.879,scaleY:0.879,y:-29.5,regX:77}},{t:this.shape_21,p:{scaleX:0.879,scaleY:0.879,x:17.7,y:-47.8}},{t:this.shape_20,p:{scaleX:0.879,scaleY:0.879,x:-17.7,y:-27.4}},{t:this.shape_19,p:{scaleX:0.879,scaleY:0.879,x:-2.4,y:-61.6}},{t:this.shape_18,p:{scaleX:0.879,scaleY:0.879,x:4.9,y:-57.4}},{t:this.shape_17,p:{scaleX:0.879,scaleY:0.879,x:12.1,y:-53.2}},{t:this.instance_1,p:{regY:19,scaleX:0.879,scaleY:0.879,x:17.6,y:-50.1,regX:32.9}},{t:this.shape_16,p:{scaleX:0.879,scaleY:0.879,x:-6,y:-63.8}},{t:this.shape_15,p:{scaleX:0.879,scaleY:0.879,x:-37.1,y:-40.8}},{t:this.shape_14,p:{scaleX:0.879,scaleY:0.879,x:-29.8,y:-36.6}},{t:this.shape_13,p:{scaleX:0.879,scaleY:0.879,x:-22.6,y:-32.4}},{t:this.instance,p:{scaleX:0.879,scaleY:0.879,x:-17.1,y:-29.1}},{t:this.shape_12,p:{scaleX:0.879,scaleY:0.879,x:-40.7,y:-42.9}},{t:this.shape_11,p:{scaleX:0.879,scaleY:0.879,x:-0.2,y:-51.4}},{t:this.shape_10,p:{scaleX:0.879,scaleY:0.879,x:-3.6,y:-48.2}},{t:this.shape_9,p:{scaleX:0.879,scaleY:0.879,x:24.9,y:-73.7}},{t:this.shape_8,p:{scaleX:0.879,scaleY:0.879,x:48.1,y:-94.5}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-110.8,154.2,225.2);


(lib.tombol = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_kom.addEventListener("click", kompetensi.bind(this));
		
		function kompetensi()
		{
			exportRoot.gotoAndStop("hal1");
		}
		
		this.btn_pend.addEventListener("click", Pendahuluan.bind(this));
		
		function Pendahuluan()
		{
			exportRoot.gotoAndStop("hal2");
		}
		
		this.btn_materi.addEventListener("click", materi.bind(this));
		
		function materi()
		{
			exportRoot.gotoAndStop("hal3");
		}
		
		this.btn_evaluasi.addEventListener("click", evaluasi.bind(this));
		
		function evaluasi()
		{
			exportRoot.gotoAndStop("hal4");
		}
		
		this.btn_profil.addEventListener("click", profile.bind(this));
		
		function profile()
		{
			exportRoot.gotoAndStop("hal5");
		}
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(1));

	// Layer_1
	this.instance = new lib.judulpelajaran("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.8,-630.8,0.477,0.349,0,0,0,0.2,-0.1);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,scaleX:0.81,scaleY:0.59,y:-344.4,alpha:1},15,cjs.Ease.get(0.5)).to({startPosition:0},5).wait(17));

	// btn_kom
	this.btn_kom = new lib.btn_kom();
	this.btn_kom.name = "btn_kom";
	this.btn_kom.parent = this;
	this.btn_kom.setTransform(-350,165,0.93,0.93);
	this.btn_kom.alpha = 0.289;
	this.btn_kom._off = true;
	new cjs.ButtonHelper(this.btn_kom, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_kom).wait(9).to({_off:false},0).to({y:-64.1,alpha:1},7).wait(21));

	// btn_pend
	this.btn_pend = new lib.btn_pend();
	this.btn_pend.name = "btn_pend";
	this.btn_pend.parent = this;
	this.btn_pend.setTransform(-170.2,161.2,0.93,0.93,0,0,0,0.1,0.1);
	this.btn_pend.alpha = 0.289;
	this.btn_pend._off = true;
	new cjs.ButtonHelper(this.btn_pend, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_pend).wait(14).to({_off:false},0).to({y:-67.9,alpha:1},7).wait(16));

	// btn_materi
	this.btn_materi = new lib.btn_materi();
	this.btn_materi.name = "btn_materi";
	this.btn_materi.parent = this;
	this.btn_materi.setTransform(9,146.7,0.93,0.93,0,0,0,0.1,0.1);
	this.btn_materi.alpha = 0.289;
	this.btn_materi._off = true;
	new cjs.ButtonHelper(this.btn_materi, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_materi).wait(19).to({_off:false},0).to({y:-82.4,alpha:1},7).wait(11));

	// btn_evalusi
	this.btn_evalusi = new lib.btn_evaluasi();
	this.btn_evalusi.name = "btn_evalusi";
	this.btn_evalusi.parent = this;
	this.btn_evalusi.setTransform(188.6,153.9,0.93,0.93,0,0,0,0.1,0.1);
	this.btn_evalusi.alpha = 0.289;
	this.btn_evalusi._off = true;
	new cjs.ButtonHelper(this.btn_evalusi, 0, 1, 2);

	this.btn_evaluasi = new lib.btn_evaluasi();
	this.btn_evaluasi.name = "btn_evaluasi";
	this.btn_evaluasi.parent = this;
	this.btn_evaluasi.setTransform(188.6,-75.2,0.93,0.93,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn_evaluasi, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_evalusi}]},24).to({state:[{t:this.btn_evaluasi}]},7).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.btn_evalusi).wait(24).to({_off:false},0).to({_off:true,y:-75.2,alpha:1},7).wait(6));

	// btn_profil
	this.btn_profil = new lib.btn_profil();
	this.btn_profil.name = "btn_profil";
	this.btn_profil.parent = this;
	this.btn_profil.setTransform(368.1,156.4,0.93,0.93,0,0,0,0,0.1);
	this.btn_profil.alpha = 0.289;
	this.btn_profil._off = true;
	new cjs.ButtonHelper(this.btn_profil, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_profil).wait(29).to({_off:false},0).to({y:-72.7,alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.1,-687.9,371.5,114.3);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{home:0,hal1:1,hal2:2,hal3:3,hal4:4,hal5:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btn_close.addEventListener("click", close.bind(this));
		function close()
		{
			window.close();
		}
		
		this.btn_home.addEventListener("click", home.bind(this));
		function home()
		{
			this.gotoAndStop("home")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// tombol&musk
	this.instance = new lib.btn_musik();
	this.instance.parent = this;
	this.instance.setTransform(869.2,68.7,0.55,0.55,0,0,0,0,0.2);

	this.btn_close = new lib.btn_exit();
	this.btn_close.name = "btn_close";
	this.btn_close.parent = this;
	this.btn_close.setTransform(962.5,65.9);
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2);

	this.btn_home = new lib.home();
	this.btn_home.name = "btn_home";
	this.btn_home.parent = this;
	this.btn_home.setTransform(63.4,67.4);
	new cjs.ButtonHelper(this.btn_home, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_home},{t:this.btn_close},{t:this.instance}]}).wait(6));

	// tombol halaman
	this.instance_1 = new lib.tombol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(518.2,553,1,1,0,0,0,-2.3,0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiWElIgGgCQgCgBgCgEQgDgEgBgFQgCgGAAgJQAAgIACgGQABgGACgDQACgEADgCQADgCADAAIB6AAIAAm5IhxBDQgIAEgFABQgGABgDgDQgDgDgBgHQgBgGAAgLIABgNIACgJQABgDADgDQACgDAEgCICGhWIAEgCIAHgCIAJgBIANgBIASABQAHABAEACQAEABACADIABAFIAAH+IBpAAQAEAAADACQADACACAEIADAJIABAOQAAAJgBAGIgEAJIgFAFIgGACg");
	this.shape.setTransform(662.6,504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB3DaQgHgBgEgBQgEgCgCgDQgCgCAAgDIAAjtQAAgigFgVQgGgWgKgPQgKgPgRgIQgQgIgWAAQgbAAgbAUQgcAUgfAlIAAEbQAAADgCACQgBADgFACQgEABgHABIgSABIgSgBQgHgBgEgBQgFgCgBgDQgCgCAAgDIAAmUQAAgDABgDQACgDAEgBQAEgCAGgBIARgBIAQABQAHABADACIAGAEIABAGIAAA2QAignAigRQAigSAhAAQApAAAcANQAbAOARAXQARAXAIAfQAHAeAAArIAAD3QAAADgCACQgBADgFACQgEABgHABIgSABIgSgBg");
	this.shape_1.setTransform(593,511.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhSDWQgbgIgRgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQAOgZAagQQAagRAmgIQAlgJAuAAIA4AAIAAgfQAAgXgFgSQgFgSgLgMQgLgMgRgGQgSgGgZAAQgbAAgVAHQgXAGgQAIQgQAIgLAGQgLAHgGAAQgDgBgDgBIgFgGQgCgDAAgGIgBgMQAAgLABgGQACgIAGgFQAGgGAOgHQAQgJATgGQATgHAXgEQAXgEAXAAQArAAAeAKQAfAJATAUQASATAKAcQAIAcAAAmIAAEQQAAAFgEADQgEACgFACIgTABIgSgBQgIgCgDgCQgDgDAAgFIAAgpQgaAcghAQQghAQgjAAQggAAgZgIgAgXAYQgXAEgPALQgOAKgHAOQgHAOgBATQAAAfAVASQATATAkAAQAdAAAZgOQAZgPAbgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_2.setTransform(545.5,511.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD0DaQgHgBgEgBQgEgCgCgDQgCgCAAgDIAAj2QABgZgFgVQgEgWgLgPQgJgPgQgIQgPgIgVAAQgZAAgaAUQgaAUgfAlIAAEbQAAADgCACQgCADgDACQgFABgHABIgSABIgRgBQgHgBgEgBQgFgCgBgDQgCgCAAgDIAAj2QAAgZgFgVQgFgWgKgPQgKgPgPgIQgOgIgWAAQgZAAgaAUQgaAUgfAlIAAEbQAAADgCACQgBADgFACQgDABgIABIgSABIgSgBQgHgBgEgBQgEgCgCgDQgCgCAAgDIAAmUQAAgDABgDQACgDAEgBQAEgCAHgBIAQgBIARABQAGABAEACIAFAEIABAGIAAA2QAignAhgRQAggSAgAAQAaAAATAFQAUAHAQAKQAPAKAKAQQALAOAHARQAUgWASgPQASgPARgJQARgKAQgEQAQgEAQAAQAnAAAaANQAbAOARAXQAQAXAHAfQAHAfAAAhIAAEAQAAADgCACQgBADgEACQgFABgHABIgSABIgTgBg");
	this.shape_3.setTransform(488.1,511.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSDWQgbgIgRgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQANgZAagQQAbgRAmgIQAlgJAuAAIA4AAIAAgfQAAgXgFgSQgFgSgKgMQgMgMgRgGQgSgGgZAAQgbAAgWAHQgVAGgRAIQgQAIgLAGQgLAHgGAAQgDgBgDgBIgFgGQgBgDgBgGIgBgMQAAgLACgGQABgIAGgFQAGgGAPgHQAPgJATgGQATgHAXgEQAXgEAXAAQArAAAfAKQAeAJATAUQATATAIAcQAJAcAAAmIAAEQQAAAFgEADQgEACgFACIgTABIgSgBQgIgCgDgCQgDgDAAgFIAAgpQgaAcghAQQghAQgjAAQggAAgZgIgAgXAYQgXAEgPALQgOAKgHAOQgHAOAAATQgBAfAVASQAUATAjAAQAdAAAZgOQAZgPAbgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_4.setTransform(427.9,511.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRE6QgHgBgEgCQgFgCgBgCQgCgDAAgDIAApYQAAgDACgDQABgDAFgBQAEgCAHgBIARgBIASABQAHABAEACQAFABABADQACADAAADIAAJYQAAADgCADQgBACgFACQgEACgHABIgSAAIgRAAg");
	this.shape_5.setTransform(396.6,502.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhSDWQgbgIgRgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQAOgZAagQQAagRAmgIQAlgJAuAAIA4AAIAAgfQAAgXgFgSQgFgSgLgMQgLgMgRgGQgSgGgZAAQgbAAgVAHQgWAGgRAIQgQAIgLAGQgLAHgGAAQgDgBgDgBIgFgGQgBgDgBgGIgBgMQAAgLABgGQACgIAGgFQAGgGAOgHQAPgJAUgGQATgHAXgEQAXgEAXAAQArAAAeAKQAfAJATAUQASATAKAcQAIAcAAAmIAAEQQAAAFgEADQgEACgFACIgTABIgSgBQgIgCgDgCQgDgDAAgFIAAgpQgaAcghAQQghAQgjAAQggAAgZgIgAgXAYQgXAEgPALQgOAKgHAOQgHAOgBATQAAAfAVASQAUATAjAAQAdAAAZgOQAZgPAbgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_6.setTransform(362.8,511.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACYElIgMgDQgEgCgCgDQgCgCAAgEIAAkCIkHAAIAAECQAAAEgCACQgCADgEACIgMADIgTAAIgSAAIgMgDQgFgCgCgDQgBgCAAgEIAAotQAAgDABgDQACgDAFgBIAMgDQAHgBALAAQALAAAIABIAMADQAEABACADQACADAAADIAADpIEHAAIAAjpQAAgDACgDQACgDAEgBIAMgDQAHgBAMAAQALAAAHABIAMADQAFABABADQACADAAADIAAItQAAAEgCACQgBADgFACIgMADIgSAAIgTAAg");
	this.shape_7.setTransform(313.4,504.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AB3DaQgHgBgEgBQgEgCgCgDQgCgCAAgDIAAjtQAAgigFgVQgGgWgKgPQgKgPgRgIQgQgIgWAAQgbAAgbAUQgcAUgfAlIAAEbQAAADgCACQgBADgFACQgEABgHABIgSABIgSgBQgHgBgEgBQgFgCgBgDQgCgCAAgDIAAmUQAAgDABgDQACgDAEgBQAEgCAGgBIARgBIAQABQAHABADACIAGAEIABAGIAAA2QAignAigRQAigSAhAAQApAAAcANQAbAOARAXQARAXAIAfQAHAeAAArIAAD3QAAADgCACQgBADgFACQgEABgHABIgSABIgSgBg");
	this.shape_8.setTransform(603.5,397.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhTDWQgagIgRgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQANgZAagQQAbgRAlgIQAmgJAvAAIA3AAIAAgfQAAgXgFgSQgFgSgKgMQgMgMgSgGQgRgGgZAAQgbAAgWAGQgVAHgQAIQgRAIgLAGQgLAHgGAAQgDgBgDgBIgEgGQgCgDgBgGIgCgMQAAgLADgGQAAgIAHgFQAGgGAPgHQAPgJATgGQATgHAXgEQAXgEAWAAQAsAAAfAKQAeAJATAUQATATAIAcQAJAcAAAmIAAEQQAAAFgEADQgEADgFABIgTABIgSgBQgIgBgDgDQgDgDAAgFIAAgpQgbAcggAQQggAQgkAAQggAAgagIgAgXAYQgXAEgOALQgQAKgGAOQgIAOABATQAAAfAUASQATATAkAAQAdAAAZgOQAYgPAcgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_9.setTransform(556,397.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRErQgHgBgEgCQgEgCgCgCQgCgDAAgDIAAmUQAAgDACgDQACgCAEgCIALgDIARgBIATABIAKADQAFACACACQABADAAADIAAGUQAAADgBADQgCACgFACQgDACgHABIgTAAIgRAAgAgjjaQgKgKAAgZQAAgaAKgKQAKgJAaAAQAZAAAKAJQAKAJAAAaQAAAagKAJQgKAKgaAAQgaAAgJgJg");
	this.shape_10.setTransform(524.7,389.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag3DbQgUgDgQgFQgPgGgLgGQgKgGgGgEQgFgEgCgIQgCgJAAgOIABgNIACgKQABgDADgCQACgCAEAAQAFAAAJAHIAYAMQAOAIAUAGQASAGAagBQARAAAQgDQAPgEALgIQALgIAHgMQAGgNAAgQQAAgRgIgMQgKgMgOgIQgPgJgRgHIgkgPQgUgHgRgKQgTgJgOgOQgOgOgJgTQgJgUAAgaQAAgYAJgVQAJgXASgQQATgRAcgJQAcgKAjAAQAQAAAQADQARACANAEQANAEAJAFQAJAEAFAFIAGAFIADAHIABAIIABAMIgBAOIgDAJQgBADgCACQgCABgEAAQgEAAgHgEQgIgGgMgFQgMgGgQgFQgQgEgWgBQgRABgPAEQgPAEgJAIQgJAIgEALQgGAKAAAMQABASAIANQAKALAOAJQAPAJARAHIAmAPQASAIAUAJQASAJAOANQAOANAJAUQAJASAAAaQAAAfgLAZQgMAXgVARQgVARgdAIQgeAJgiAAQgVAAgTgDg");
	this.shape_11.setTransform(496.1,397.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSElIgLgDQgFgCgCgDQgBgCgBgEIAAotQAAgDACgDQACgDAFgBIAMgDQAIgBAJAAQALAAAIABIAMADQAEABABADQADADAAADIAAItQAAAEgDACQgBADgEACIgMADIgTAAIgSAAg");
	this.shape_12.setTransform(466.6,389.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRErQgHgBgEgCQgEgCgCgCQgCgDAAgDIAAmUQAAgDACgDQACgCAEgCIALgDIARgBIASABIALADQAFACABACQACADAAADIAAGUQAAADgCADQgBACgFACQgDACgIABIgSAAIgRAAgAgjjaQgKgKAAgZQAAgaAKgKQAKgJAZAAQAaAAAKAJQAKAJAAAaQAAAagKAJQgKAKgaAAQgaAAgJgJg");
	this.shape_13.setTransform(423.6,389.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AB3DaQgHgBgEgBQgEgCgCgDQgCgCAAgDIAAjtQAAgigFgVQgGgWgKgPQgKgPgRgIQgQgIgWAAQgbAAgbAUQgcAUgfAlIAAEbQAAADgCACQgBADgFACQgEABgHABIgSABIgSgBQgHgBgEgBQgFgCgBgDQgCgCAAgDIAAmUQAAgDABgDQACgDAEgBQAEgCAGgBIARgBIAQABQAHABADACIAGAEIABAGIAAA2QAignAigRQAigSAhAAQApAAAcANQAbAOARAXQARAXAIAfQAHAeAAArIAAD3QAAADgCACQgBADgFACQgEABgHABIgSABIgSgBg");
	this.shape_14.setTransform(389,397.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRElIgMgDQgFgCgCgDQgBgCAAgEIAAotQAAgDACgDQABgDAGgBIALgDQAHgBAKAAQALAAAIABIALADQAFABACADQABADAAADIAAItQAAAEgBACQgCADgFACIgLADIgTAAIgRAAg");
	this.shape_15.setTransform(353.2,389.9);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(501.9,390.5);
	this.instance_2.alpha = 0.289;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AibEnQgGAAgFgCQgFgBgDgDQgEgFgBgGQgCgHAAgJIABgQQABgHACgFQACgFADgFQAEgGAFgGIB1h3QApgqAWggQAZggANgbQANgbAFgWQADgWABgUQgBgSgGgSQgHgRgMgNQgMgOgSgHQgTgIgYABQgbgBgXAIQgXAIgQAIQgRAKgLAHQgMAIgGAAQgCAAgEgCQgCgCgBgEIgDgKIgBgRIABgLIABgJIADgHQACgDAFgEQAGgFANgIQANgIAUgIQAUgIAZgFQAXgGAaAAQAqAAAfAMQAgAMAVAVQAVAUAKAbQALAcAAAfQAAAcgGAcQgEAbgQAhQgQAegeAoQgeAngyA0IhbBfID8AAQADAAAEACQADADACADQADAEABAHIABAOIgBAOIgDALQgCAEgDACQgEACgEAAg");
	this.shape_16.setTransform(661.1,389.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhSDWQgbgIgRgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQANgZAagQQAbgRAmgIQAlgJAuAAIA4AAIAAgfQAAgXgFgSQgFgSgKgMQgMgMgRgGQgSgGgZAAQgbAAgWAGQgWAHgQAIQgQAIgLAGQgLAHgGAAQgDgBgDgBIgFgGQgBgDgBgGIgBgMQAAgLACgGQABgIAGgFQAGgGAPgHQAPgJATgGQATgHAXgEQAXgEAXAAQArAAAfAKQAeAJATAUQATATAIAcQAJAcAAAmIAAEQQAAAFgEADQgEADgFABIgTABIgSgBQgIgBgDgDQgDgDAAgFIAAgpQgaAcghAQQghAQgjAAQggAAgZgIgAgXAYQgXAEgPALQgOAKgHAOQgHAOAAATQgBAfAVASQAUATAjAAQAdAAAZgOQAZgPAbgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_17.setTransform(545.4,397.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AD0DaQgHgBgEgBQgEgCgCgDQgBgCgBgDIAAj2QABgZgFgVQgEgWgLgPQgKgPgPgIQgPgIgVAAQgZAAgaAUQgaAUgfAlIAAEbQAAADgCACQgBADgFACQgEABgHABIgSABIgRgBQgHgBgEgBQgFgCgBgDQgCgCAAgDIAAj2QAAgZgFgVQgFgWgJgPQgLgPgPgIQgOgIgWAAQgZAAgaAUQgaAUgfAlIAAEbQAAADgBACQgCADgFACQgDABgIABIgSABIgSgBQgHgBgEgBQgEgCgCgDQgCgCAAgDIAAmUQAAgDACgDQABgDAEgBQAEgCAHgBIAQgBIAQABQAHABAEACIAFAEIABAGIAAA2QAignAhgRQAfgSAiAAQAYAAAVAFQATAHAQAKQAPAKAKAQQALAOAHARQAUgWATgPQARgPASgJQAQgKAQgEQAQgEAQAAQAnAAAaANQAbAOARAXQAQAXAHAfQAHAfAAAhIAAEAQAAADgCACQgBADgEACQgFABgHABIgSABIgTgBg");
	this.shape_18.setTransform(488,397.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhSDWQgagIgSgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQANgZAagQQAbgRAlgIQAmgJAvAAIA3AAIAAgfQAAgXgFgSQgFgSgKgMQgMgMgRgGQgSgGgZAAQgbAAgWAGQgVAHgRAIQgQAIgLAGQgLAHgGAAQgDgBgDgBIgFgGQgBgDgBgGIgBgMQAAgLACgGQABgIAGgFQAGgGAPgHQAPgJATgGQATgHAXgEQAXgEAXAAQArAAAfAKQAeAJATAUQATATAIAcQAJAcAAAmIAAEQQAAAFgEADQgEADgFABIgTABIgSgBQgIgBgDgDQgDgDAAgFIAAgpQgaAcghAQQggAQgkAAQggAAgZgIgAgXAYQgXAEgPALQgOAKgHAOQgHAOAAATQgBAfAVASQAUATAjAAQAdAAAZgOQAYgPAcgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_19.setTransform(427.8,397.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhSDWQgbgIgRgRQgTgPgKgXQgKgXAAgdQAAgiAOgZQANgZAagQQAbgRAmgIQAlgJAuAAIA4AAIAAgfQAAgXgFgSQgFgSgKgMQgMgMgRgGQgSgGgZAAQgbAAgWAGQgVAHgRAIQgQAIgLAGQgLAHgGAAQgDgBgDgBIgFgGQgBgDgBgGIgBgMQAAgLACgGQABgIAGgFQAGgGAPgHQAPgJATgGQATgHAXgEQAXgEAXAAQArAAAfAKQAeAJATAUQATATAIAcQAJAcAAAmIAAEQQAAAFgEADQgEADgFABIgTABIgSgBQgIgBgDgDQgDgDAAgFIAAgpQgaAcghAQQghAQgjAAQggAAgZgIgAgXAYQgXAEgPALQgOAKgHAOQgHAOAAATQgBAfAVASQAUATAjAAQAdAAAZgOQAZgPAbgfIAAhWIg/AAQgeAAgWAGg");
	this.shape_20.setTransform(362.7,397.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhLEnQgagFgUgGQgUgHgNgHQgNgHgDgDIgFgHIgDgHIgDgLIAAgQQAAgQADgHQADgGAHAAQAEAAALAHQAMAIAUAIQATAIAaAHQAZAHAfAAQAeAAAXgHQAXgIAPgOQARgOAHgSQAIgUAAgWQAAgZgKgUQgJgUgUgOQgTgOgdgIQgbgIgkAAIg4AAIgIgBQgDgCgDgDQgCgEgBgGQgCgGAAgIQgBgJACgFQACgGACgDQADgDACgCQADgCAFAAIAyAAQAeAAAYgHQAWgIARgOQAQgPAJgTQAJgVAAgYQgBgSgFgQQgGgRgMgMQgLgMgSgHQgTgHgXAAQgaAAgVAIQgWAHgSAJQgRAJgLAIQgLAIgFAAIgFgBQgDgBgBgDIgCgKIgBgQIAAgMIACgJIAEgHQABgDAEgEQAFgEAMgIQAOgJATgHQATgIAZgGQAZgFAdAAQAnAAAfAKQAeALAUASQAVATALAbQAJAaAAAgQAAAbgHAYQgHAXgOATQgOASgUANQgVAMgaAFIAAABQAeADAZALQAZAMASASQASASAKAYQAKAYAAAcQAAAogOAgQgOAggaAXQgaAXgmAMQgmAMgwAAQgcAAgZgEg");
	this.shape_21.setTransform(660.6,389.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABEElQgHgBgEgCQgFgCgBgCQgCgDAAgDIAAh7IjtAAQgFAAgEgBQgDgBgDgEQgDgEgBgGIgBgSIAAgPIACgMQABgGADgFIAFgLIDOlgQACgEAFgDQAEgCAHgCIARgCIAYgBQAPAAALABIASADQAHACAEADQADACAAAEIAAFzIBCAAQAIAAAFAIQAEAHAAAQQAAAPgEAJQgFAIgIAAIhCAAIAAB7QAAADgBADQgCACgFACQgFACgHABIgTAAIgTAAgAiKBeIC7AAIAAk+IgBAAg");
	this.shape_22.setTransform(660.8,389.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhUEkQgYgFgTgFIgfgLQgMgGgDgDQgEgDgBgCIgCgHIgCgKIAAgOIABgNQAAgHABgDQADgEACgCQACgCADABQAFAAAKAFQAJAFAQAIQAPAFAZAGQAXAGAgAAQAeAAAYgHQAZgHATgPQASgQAKgXQAKgXAAghQAAgcgIgVQgJgWgSgNQgTgPgbgHQgbgGgmAAQgcAAgUADQgTACgRAAQgNAAgFgGQgGgFAAgRIAAjsQAAgPAHgIQAHgHANAAIEBAAQADAAADADQAEACACADIADAKIABAPQABAQgFAKQgEAJgHAAIjPAAIAACjQAPgDAPAAIAlAAQAvAAAjALQAlAMAYAXQAXAUANAfQAMAfAAAlQAAAwgPAjQgQAlgdAZQgcAZgoANQgoANgwAAQgbAAgYgDg");
	this.shape_23.setTransform(660.7,390.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:313.4,y:504.2}},{t:this.shape_6},{t:this.shape_5,p:{x:396.6,y:502.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:593,y:511.6}},{t:this.shape}]},1).to({state:[{t:this.instance_2},{t:this.shape_7,p:{x:313.3,y:389.9}},{t:this.shape_20},{t:this.shape_5,p:{x:396.5,y:387.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1,p:{x:592.9,y:397.3}},{t:this.shape_16}]},1).to({state:[{t:this.instance_2},{t:this.shape_7,p:{x:313.3,y:389.9}},{t:this.shape_20},{t:this.shape_5,p:{x:396.5,y:387.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1,p:{x:592.9,y:397.3}},{t:this.shape_21}]},1).to({state:[{t:this.instance_2},{t:this.shape_7,p:{x:313.3,y:389.9}},{t:this.shape_20},{t:this.shape_5,p:{x:396.5,y:387.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1,p:{x:592.9,y:397.3}},{t:this.shape_22}]},1).to({state:[{t:this.instance_2},{t:this.shape_7,p:{x:313.3,y:389.9}},{t:this.shape_20},{t:this.shape_5,p:{x:396.5,y:387.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_1,p:{x:592.9,y:397.3}},{t:this.shape_23}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(517.4,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389.1,224.7,1280.6,855.4);
// library properties:
lib.properties = {
	id: '88D76CA2D969F84DA99EC5156B6EF6AB',
	width: 1024,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"sounds/musik.mp3", id:"musik"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['88D76CA2D969F84DA99EC5156B6EF6AB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;