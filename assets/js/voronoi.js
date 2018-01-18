/*
used modified version of voronoi tessellation from d3 site
original version linked: https://bl.ocks.org/mbostock/4060366#license
*/

var dataset = [
	[421, 242], 
	[435, 231],
	[441, 223], 
	[440, 240], 
	[448, 243], 
	[454, 232],
	[452, 226],
	[444, 232], 
	[465, 232], 
	[364, 250], 
	[322, 258],
	[334, 250], 
	[336, 259], 
	[345, 257], 
	[353, 250], 
	[351, 246],
	[341, 244],
	[345, 251], 
	[370, 227], 
	[402, 223], 
	[431, 207], 
	[450, 197], 
	[449, 187], 
	[426, 200], 
	[482, 201], 
	[329, 228],
	[330, 218],
	[311, 216],
	[308, 225], 
	[291, 240], 
	[292, 300], 
	[318, 330]

];
/*
330 366 37.28
342 382 47.48
375 414 39.72
416 425 25.88
460 406 42.52
473 396 38.4
493 377 45.88
510 352 59.04
514 322 62.04
520 279 48.04
528 250 70.28
515 208 25.88
380 300 55.84
395 304 60.04
395 304 60.04
407 293 68.64
407 293 68.64
379 292 68.12
388 283 88.2
403 289 77.16
393 293 84.96
377 310 75.88
419 304 70.16
403 333 76.6
413 327 83.0
394 332 78.24
394 332 78.24
405 343 48.16
408 350 64.12
396 342 49.88
414 341 50.2
377 356 65.96
440 345 55.4
386 344 75.6
427 339 79.16
387 365 59.6
399 368 70.6
410 362 54.52
424 360 66.08
432 352 64.72 

*/
/*
var data = [
	{x: 421, y: 242},
	{x: 435, y: 231},
	{x: 441, y: 223},
	{x: 440, y: 240},
	{x: 448, y: 243},
	{x: 454, y: 232},
	{x: 452, y: 226},
	{x: 444, y: 232}, 
	{x: 465, y: 232},
	{x: 364, y: 250},
	{x: 322, y: 258}, 
	{x: 334, y: 250},
	{x: 336, y: 259}, 
	{x: 345, y: 257},
	{x: 353, y: 250}, 
	{x: 351, y: 246}, 
	{x: 341, y: 244}, 
	{x: 345, y: 251},
	{x: 370, y: 227},
	{x: 402, y: 223},
	{x: 431, y: 207}, 
	{x: 450, y: 197},
	{x: 449, y: 187}, 
	{x: 426, y: 200}, 
	{x: 482, y: 201}, 
	{x: 329, y: 228}, 
	{x: 330, y: 218}, 
	{x: 311, y: 216}, 
	{x: 308, y: 225}

];


291 240 60.68
292 300 53.32
318 330 50.64
330 366 37.28
342 382 47.48
375 414 39.72
416 425 25.88
460 406 42.52
473 396 38.4
493 377 45.88
510 352 59.04
514 322 62.04
520 279 48.04
528 250 70.28
515 208 25.88
380 300 55.84
395 304 60.04
395 304 60.04
407 293 68.64
407 293 68.64
379 292 68.12
388 283 88.2
403 289 77.16
393 293 84.96
377 310 75.88
419 304 70.16
403 333 76.6
413 327 83.0
394 332 78.24
394 332 78.24
405 343 48.16
408 350 64.12
396 342 49.88
414 341 50.2
377 356 65.96
440 345 55.4
386 344 75.6
427 339 79.16
387 365 59.6
399 368 70.6
410 362 54.52
424 360 66.08
432 352 64.72
*/

var svg = d3.select('svg').on('touchmove mousemouve', moved),
	width = svg.attr('width');
	height = svg.attr('height');

var sites = d3.range(31)
	map(function() { return [d]; }),

var voronoi = d3.voronoi()
	.extent([-1,1], [width+1, height+1]);

var polygon = svg.append('g')
		.attr('class', 'polygons')
	.selectAll('path')
	.data(voronoi.polygons(sites))
	.enter().append('path')
		.call(redrawPolygon);


var link
		.attr('class', 'links')
	.selectAll('line')
	.data(voronoi.links(sites))
	.enter().append('line')
		.call(redrawLink);

var site
	.attr('class', 'sites')
	.selectAll('circle')
	.data(sites)
	.enter().append('circle')
		.attr('r',2.5)
		.call(redrawSite);

function moved() {
	sites[0] = d3.mouse(this);
	redraw();
}

function redraw() {
	var diagram = voronoi(sites);
	polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
	link = link.data(diagram.links()), link.ext().remove();
	link = linl.enter().append('line').merge(link).call(redrawLink);
	site = site.data(sites).call(redrawSite);
}

function redrawPolygon(polygon) {
	polygon
		.attr('d', function(d) { return d ? 'M' + d.join('L') + 'Z' : null; });
}

function redrawLink(link) {
	link
		.attr('x1', function(d) { return d.source[0]; })
		.attr('y1', function(d) { return d.source[1]; })
		.attr('x2', function(d) { return d.target[0]; })
		.attr('y2', function(d) { return d.target[1]; })
}

function redrawSite(site) {
	site
		.attr('cx', function(d) { return d[0]; })
		.attr('cy', function(d) { return d[0]; })
}

