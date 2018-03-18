function s(tab, px, py, lenhei, tabres, bol)
{
	if (px < (lenhei.l-1) && !bol)		// Droite
		tabres[py][px] = tab[py][px] + tabres[py][px + 1];
	else if (py < (lenhei.h-1) && bol)	// Bas
		tabres[py][px] = tab[py][px] + tabres[py + 1][px];
	else
    		tabres[py][px] = tab[py][px];
	return(tabres[py][px]);
}

function max_sum_matrice_rec(tab, p, lenhei)
{
    var score = 0;
	
    var tabres = Array(Array(), Array(), Array());
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
 
  var lenhei = {h : tab.length, l: tab[0].length};
  var pos = {x : lenhei.h, y: lenhei.l};
  var resultat = max_sum_matrice_rec(tab, pos, lenhei);
  pos = {x : 0, y: 0};
  console.log(find_path(tab, resultat, pos, lenhei));
}

main();
