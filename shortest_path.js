function s(tab, px, py, lenhei, tabres, bol)
{
	if (px < (lenhei.l-1) && !bol)		// Droite
		tabres[py][px] = tab[py][px] + tabres[py][px + 1];
	else if (py < (lenhei.h-1) && bol)	// Bas
		tabres[py][px] = tab[py][px] + tabres[py + 1][px];
	else  // Start
    		tabres[py][px] = tab[py][px];
	return(tabres[py][px]);
}

function create_array(len)
{
    var tabres = new Array();
    for(var i=0; i < len; i++)
    {
	var array = new Array();
	tabres.push(array);
    }
    return(tabres);
}

function max_sum_matrice_rec(tab, p, lenhei)
{
    var score = 0;
    var tabres = create_array(lenhei.l);

    while (p.y > 0)
    {
	p.x = lenhei.l; 
    	while (p.x > 0)
    	{
		tabres[p.y - 1][p.x - 1] = Math.max(s(tab, p.x-1, p.y-1, lenhei, tabres, 0), s(tab, p.x-1, p.y-1, lenhei, tabres, 1));
		p.x--;
    	}
	p.y--;
    }
    return (tabres);
}

function find_path(tab, tabres, p, lenhei)
{
    var s = tabres[0][0];
    var str = "";

    str = ' => ' + tab[0][0];
    while (s > 0 && (p.x < (lenhei.l -1) || p.y < (lenhei.h -1)))
    { 
	if (tabres[p.y][p.x + 1] == s)
	{
    		str += ' + ' + tab[p.y][p.x + 1];
		p.x++;
	}
	else if (tabres[p.y + 1][p.x] == s)
	{
    		str += ' + ' + tab[p.y + 1][p.x];
		p.y++;
	}
	s--;
    }
    str += ' = ' + tabres[0][0] + ' !';
    return(str);
}

function main()
{
  var tab = [
  [1, 2, 3],
  [1, 2, 5],
  [3, 4, 5]
	];

  var tab2 = [
  [1, 2, 3, 5, 9, 13],
  [1, 2, 5, 7, 9, 8],
  [19, 23, 18, 7, 3, 1],
  [19, 2, 28, 7, 6, 8],
  [1, 2, 12, 7, 9, 8],
  [3, 4, 5, 1, 4, 3]
	];
 
  var chtab = tab2;
  var lenhei = {h : chtab.length, l: chtab[0].length};
  var pos = {x : lenhei.h, y: lenhei.l};
  var resultat = max_sum_matrice_rec(chtab, pos, lenhei);
  console.log(resultat);
  pos = {x : 0, y: 0};
  console.log(find_path(chtab, resultat, pos, lenhei));
}

main();
