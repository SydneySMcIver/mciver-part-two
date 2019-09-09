var x = prompt ("What is the weather");
        var y = prompt ("What is the event?");
        var result

        if (y === 'casual') {
            if (x < 54) {
                result = 'It is less than' + x + 'degrees - outside and you are going to a casual event, you should wear something comfy and a coat'; 
            }
            else if (x >= 54 && x <= 70){
                result = 'It is equal to or greater than' + x + 'degrees - outside and you are going to a casual event, you should wear a polo shirt with a jacket.'
            } else {
                result = 'It is greater than 70 degrees outside and you are going to a casual event, you should wear a suit and no jacket.';
            }

            
        } else if (y === 'semi-formal') {
            if (x < 54) {
                result = 'It is less than' + x + 'degrees - outside and you are going to a semi formal event, you should wear a polo shirt and a coat.';
            }
            else if (x >= 54 && x <= 70){
                result + 'It is equal to or greater than' + x + 'degrees - outside and you are going to a semi-formal event, you should wear something comfy and a jacket';
            } else { 
                result = 'It is greater than 70 degress outside and you are going to a semi-formal event, you should wear a suit and no jacket';
           }

        } else (y === 'formal'); {
            if (x < 54) {
                result = 'It is less than' + x + 'degrees - outside and you are going to a formal event, you should wear a suit with a coat';
            }
            else if (x >= 54 && x <= 70){
                result = 'It is less than' + x + 'degrees - outside and you are going to a formal event, you should wear something comfy and a jacket';
            } else {
                result = 'It is greater than 70 degrees - outside and you are going to formal you should wear a suit and no jacket';
            }
        }
        console.log(result)