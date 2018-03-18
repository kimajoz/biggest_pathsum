function max_sum_matrice(tab, pos)
  {
    var i = 0;
    var height = tab.length;
    var len = tab[0].length;
    var res = 0;
    var tot = 0;
    var tmp = 0;
    var tmp2 = 0;

    console.log('height' + height);
    console.log('len' + len);
    tmp = tab[pos.x][pos.y];
    console.log('value pos depart: ' + tmp);
    while (pos.x < (len -1) || pos.y < (height -1))
    { 
    console.log('pos.y:' + pos.y + ', x:' + pos.x);
      if (pos.x <= len) // go right
        {
          tmp = tab[pos.y][(pos.x + 1)];
          if (tmp === undefined)
          	tmp = 0;
          console.log('  - ' + tmp);
        }
      if (pos.y <= height) // go down
        {
          tmp2 = tab[pos.y + 1][pos.x];
          if (tmp2 === undefined)
          	tmp2 = 0;
          console.log('  - ' + tmp2);
        }
    	if (tmp < tmp2)
      {
        res = tmp2;
        pos.y++;
      }
      else
      {
        res = tmp;
        pos.x++;
      }
      tot += res;
      console.log(' + ');
      console.log(res);
    }
    console.log(' = ');
    console.log(tot);
    console.log(' !');
  }

function max_sum_matrice_rec(tab, posy, posx, tot, tabres, l)
{
    var i = 0;
    var height = tab.length - 1;
    var len = tab[0].length - 1;
    var res = 0;
    var tmp = 0;
    var tmp2 = 0;
    var s1 = 0;
    var s2 = 0;
 
    console.log('       ');
    console.log('level:' + l);
    console.log('posx' + posx + ', posy' + posy);
    //console.log('height' + height + ', len' + len);
    while (posx < len || posy < height)
    { 
    	res = tab[posy][posx];
    	console.log('value: ' + res);
   	console.log('pos.y:' + posy + ', x:' + posx);
      if (posx < len) // go right
        {
          tmp = tab[posy][posx + 1]; //console.log(' -> try right ');
          //tmp = (tmp === undefined) ? 0 : tmp; //console.log('  - ' + tmp);
	  s1 = max_sum_matrice_rec(tab, posy, posx + 1, tot + tmp, tabres, l + 1);
	  console.log('s1: ' + s1);
        }
      else if (posy < height) // go down
        {
          tmp2 = tab[posy + 1][posx]; //console.log(' -> try down ');
          //tmp2 = (tmp2 === undefined) ? 0 : tmp2; //console.log('  - ' + tmp2);
	  s2 = max_sum_matrice_rec(tab, posy + 1, posx, tot + tmp2, tabres, l+1);
	  console.log('s2: ' + s2);
        }
	if (s1 > s2 && posx < len)
	{
          posx++; //console.log(' -> go right ');
	  //return (tot + tmp);
          res = tmp;
          tabres.push(res);
	}	
	else if (s2 > s1 && posy < height)
	{
          posy++; console.log(' -> go down ');
	  //return (tot + tmp2);
          res = tmp2;
  	  tabres.push(res);
	}
      tot += res; console.log('res:' + res);
    }
  console.log('tabres : ');
  JSON.stringify(tabres);
    return (tot); console.log('tot: ' + tot);
}

function main()
{
  var pos = {x : 0, y: 0};
  //console.log(pos.x);
  var tab = [
  [1, 2, 3],
  [1, 2, 5],
  [3, 4, 5]
	];   
  //max_sum_matrice(tab, pos);
  var tabres = Array();
  var resulat = max_sum_matrice_rec(tab, pos.y, pos.x, tab[0][0], tabres, 0);
  console.log('resulat : ' + resulat);
  console.log('tabres : ');
  JSON.stringify(tabres);
}

main();
