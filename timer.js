const timer = function() {
	const timers = process.argv.slice(2)
	console.log(timers)
  for (let j = 0; j < timers.length; j++) {
  	
  if(timers[j] < 0 || undefined || isNaN(timers[j])) {
  	return
	} 	else 	{
      setTimeout(()=> {
    	  process.stdout.write('\x07')
      },timers[j]*1000);
}
	}
}
 timer()


 
 
    
 
    









