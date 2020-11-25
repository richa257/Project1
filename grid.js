var matrix = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


];

/*document.getElementById("a1").addEventListener("click", function()
{

	console.log("hello");


});


   var playmatrix = document.getElementById("play");
    
    playmatrix.onclick = function (e) {
        console.log("hello");
    };


  


  function play_matrix(){
    

     for(var i=0; i < 16;i++) {
    for(var j=0; j < 4; j++) {
      console.log( matrix[j][i] );
    }
  }

  }
  */

function abc()

{

	// column traversal 

	for (var i = 0; i < 16; i++) {

		
        var x=[0,0,0,0];

		for (var j = 0; j < 4; j++) {
			var n1 = matrix[j][i];
			var n2 = j + 1;
			if ( n2 % n1== 0) 
			{

				console.log("selected"+"and value is"+matrix[j][i]);

				x[j]=1;


			}
			else
			{
				console.log("not selected");
			}
     	}

     	playcolumn(x,i);
     	 

     	 



		//console.log("\n");
	}


}

function playcolumn(x,k)
{

	for(var i=0; i< 4 ; i++)
	{
		console.log(x[i]);
	}

	if(x[0]==1)
	{

		//var m=k
		//const plucky = new Tone.PluckSynth().toDestination();
            //plucky.triggerAttack("C4", "+0.5");

       const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
	Tone.loaded().then(() => {
					player.start();
		});
            

	}

	return;



}


function matrixUpdate(r, c) {
	console.log(r, c);

	if (r == 0) {

		matrix[r][c] = 1;

		console.log(matrix[r][c]);

	}

	if (r == 1) {

		matrix[r][c] = 2;

	}

	if (r == 2) {

		matrix[r][c] = 3;

	}

	if (r == 3) {

		matrix[r][c] = 4;
	}


	//matrix[r][c]=1;
	console.log("function calling");

	return;


}


function gridData() {
	var data = new Array();
	var xpos = 100; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 100;
	var width = 50;
	var height = 50;
	var click = 0;


	// iterate for rows	
	for (var row = 0; row < 4; row++) {
		data.push(new Array());

		// iterate for cells/columns inside rows
		for (var column = 0; column < 16; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				click: click,
				rownumber: row,
				columnnumber: column,
				//matrix1: matrix
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 100;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;
	}
	return data;
}

var gridData = gridData();
// I like to log the data to the console for quick debugging
console.log(gridData);

var grid = d3.select("#grid")
	.append("svg")
	.attr("width", "2000px")
	.attr("height", "600px");

var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");

var column = row.selectAll(".square")
	.data(function (d) {
		return d;
	})
	.enter().append("rect")
	.attr("class", "square")
	.attr("x", function (d) {
		return d.x;
	})
	.attr("y", function (d) {
		return d.y;
	})
	.attr("width", function (d) {
		return d.width;
	})
	.attr("height", function (d) {
		return d.height;
	})
	.style("fill", "#fff")
	.style("stroke", "#222")
	.on('click', function (d) {
		d.click++;
		//mySound = new Audio('sound.mp3');

		let synth = new Tone.Synth().toMaster();

		// const player = new Tone.Player("https://learningmusic.ableton.com/lessons/sounds/simplesequencer/909/ClosedHat.ogg").toDestination();


		console.log(d.rownumber, d.columnnumber);

		let r = d.rownumber;
		let c = d.columnnumber;
		// d.matrix1[r1][d1]=1;

		//   matrixUpdate(r,c);

		//  console.log(r1,c1)

		// matrix[r][c]=1;
		// let a=1;
		//  let b=2;
		console.log(matrix[r][c]);


		if (r == 0) {
			if ((d.click) % 2 == 0) {
				d3.select(this).style("fill", "#fff");
					matrix[r][c] = 0;
			}
			if ((d.click) % 2 == 1) {
				d3.select(this).style("fill", "#2C93E8");

				synth.triggerAttackRelease('A4', '4n');

				matrix[r][c] = 1;


				console.log(matrix[r][c]);

			}


		}

		if (r == 1) {
			if ((d.click) % 2 == 0) {
				d3.select(this).style("fill", "#fff");
				matrix[r][c] = 0;
			}
			if ((d.click) % 2 == 1) {
				d3.select(this).style("fill", "#2C93E8");

				const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
				Tone.loaded().then(() => {
					player.start();
				});

				matrix[r][c] = 2;


				console.log(matrix[r][c]);


			}


		}

		if (r == 2) {
			if ((d.click) % 2 == 0) {
				d3.select(this).style("fill", "#fff");
				matrix[r][c] = 0;
			}
			if ((d.click) % 2 == 1) {
				d3.select(this).style("fill", "#2C93E8");

				//  synth.triggerAttackRelease('C4', '4n');

				const synth = new Tone.MembraneSynth().toDestination();
				synth.triggerAttackRelease("C2", "8n");


				matrix[r][c] = 3;


				console.log(matrix[r][c]);


			}


		}


		if (r == 3) {
			if ((d.click) % 2 == 0) {
				d3.select(this).style("fill", "#fff");
				matrix[r][c] = 0;
			}
			if ((d.click) % 2 == 1) {
				d3.select(this).style("fill", "#2C93E8");

				synth.triggerAttackRelease('D4', '4n');


				matrix[r][c] = 4;


				console.log(matrix[r][c]);

			}


		}


	});