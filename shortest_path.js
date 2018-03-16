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

function max_sum_matrice_rec(tab, posy, posx)
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
    tmp = tab[posx][posy];
    console.log('value pos depart: ' + tmp);
    while (posx < (len -1) || posy < (height -1))
    { 
    console.log('pos.y:' + posy + ', x:' + posx);
      if (posx <= len) // go right
        {
          tmp = tab[posy][(posx + 1)];
          if (tmp === undefined)
          	tmp = 0;
          console.log('  - ' + tmp);
        }
      if (posy <= height) // go down
        {
          tmp2 = tab[posy + 1][posx];
          if (tmp2 === undefined)
          	tmp2 = 0;
          console.log('  - ' + tmp2);
        }	
      if (return (max_sum_matrice_rec(tab, posy + 1, posx) > return (max_sum_matrice_rec(tab, posy, posx + 1))
      {
        res = tmp2;
        posy++;
      }
      else
      {
        res = tmp;
        posx++;
      }
      tot += res;
      console.log(' + ');
      console.log(res);
    }
    console.log(' = ');
    console.log(tot);
    console.log(' !');
    return (tot);
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
  max_sum_matrice_rec(tab, pos.y, pos.x);
}

main();
