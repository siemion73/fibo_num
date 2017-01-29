btn.addEventListener('click', function(e) {
    var a = inpt.value;         // Ініціалізація змінної (лічильника цикла) "а" введеним числом;
	var c=a;					// збереження значення знака;
	num.innerHTML = (a);
	a=(c >=0)?a:a*(-1);	        // знакові перетворення ( лічильник не може бути від'ємним числом);
    if (a => 2) {				// введене число > 2 попадає в розрахунок;
        var x = 0;
        var y = 1;
        for (var i = 2; i <= a; i++) {
            var z = x + y;
            x = y;
            y = z;
		z=(c>0)?z:z*(-1);		// повернення знака;
        }
        result.innerHTML = (z);
    }
    if (a==0) {					// якщо введене число = 0;
        result.innerHTML = (a);
    }
    if (a==1) {					// якщо введене число = 1;
        result.innerHTML = (a);
    } 
	if (c==-1) {				// якщо введене число = -1;
		result.innerHTML = (c);
	}
    e.preventDefault();
});
